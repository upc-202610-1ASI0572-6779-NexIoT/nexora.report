#### 4.2.4.4. Infrastructure Layer

La Infrastructure Layer del bounded context **Service Execution & Maintenance** contiene las implementaciones técnicas necesarias para soportar la persistencia de órdenes de mantenimiento, la gestión de técnicos, el envío de notificaciones y la comunicación basada en eventos con otros módulos de la plataforma Nexora.

Siguiendo los principios de Domain-Driven Design, esta capa implementa las abstracciones definidas por el dominio y proporciona mecanismos concretos para almacenamiento de información, integración con servicios externos y propagación de eventos de negocio.

### Repository Implementations

#### MaintenanceOrderRepositoryImpl

Implementación concreta de la interfaz **IMaintenanceOrderRepository**, responsable de persistir y recuperar órdenes de mantenimiento dentro del sistema.

Este repositorio permite gestionar el ciclo de vida completo de las intervenciones técnicas, desde su creación hasta su cierre.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(order) | Persiste una orden de mantenimiento |
| findById(id) | Recupera una orden específica |
| findByStatus(status) | Obtiene órdenes según su estado |
| update(order) | Actualiza información de una orden existente |

---

#### TechnicianRepositoryImpl

Implementación concreta de la interfaz **ITechnicianRepository**, responsable de gestionar la persistencia y recuperación de información relacionada con los técnicos registrados.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(technician) | Persiste un técnico |
| findById(id) | Recupera un técnico específico |
| findAvailable() | Obtiene técnicos disponibles |
| update(technician) | Actualiza información del técnico |

Ambos repositorios son implementados mediante **Spring Data JPA**, permitiendo desacoplar el dominio de los detalles específicos de persistencia.

### Integration Adapters

#### NotificationAdapter

El componente **NotificationAdapter** actúa como adaptador técnico encargado de la comunicación con los mecanismos de notificación utilizados por la plataforma.

Su función principal consiste en traducir eventos de negocio en mensajes que puedan ser enviados a usuarios, técnicos o administradores.

**Responsabilidades principales:**

- Enviar notificaciones de asignación.
- Enviar notificaciones de mantenimiento completado.
- Comunicar incidentes críticos.
- Integrarse con servicios de correo electrónico, push notifications o mensajería.

---

#### MessageBrokerAdapter

El componente **MessageBrokerAdapter** permite la comunicación basada en eventos entre bounded contexts dentro del monolito modular de Nexora.

Aunque la solución actual se implementa como un monolito modular, este adaptador abstrae la publicación y consumo de eventos, permitiendo una futura evolución hacia arquitecturas distribuidas sin afectar el dominio.

**Responsabilidades principales:**

- Publicar eventos de dominio.
- Consumir eventos provenientes de otros módulos.
- Encapsular la tecnología de mensajería utilizada.
- Facilitar la integración entre bounded contexts.

### Database Layer

#### Nexora Database

El bounded context **Service Execution & Maintenance** persiste su información dentro de la base de datos central de Nexora, manteniendo separación lógica mediante tablas especializadas para órdenes de mantenimiento, incidentes y técnicos.

### Main Tables

#### maintenance_orders

Almacena las órdenes de mantenimiento generadas por el sistema.

**Campos principales:**

- id
- property_id
- technician_id
- priority
- status
- created_at
- completed_at

---

#### technicians

Almacena la información de los técnicos registrados en la plataforma.

**Campos principales:**

- id
- name
- specialty
- availability_status

---

#### incidents

Almacena los incidentes que originan procesos de mantenimiento.

**Campos principales:**

- id
- type
- severity
- detected_at
- status

---

#### maintenance_history

Almacena el historial de cambios de estado realizados sobre las órdenes de mantenimiento.

**Campos principales:**

- id
- maintenance_order_id
- previous_status
- new_status
- changed_at

### Infrastructure Responsibilities

- Implementar los mecanismos de persistencia definidos por el dominio.
- Gestionar el almacenamiento de órdenes de mantenimiento.
- Administrar la información de técnicos y disponibilidad.
- Integrar el sistema con mecanismos de notificación.
- Facilitar la comunicación basada en eventos.
- Mantener trazabilidad de las operaciones realizadas.
- Proporcionar acceso eficiente a la información operativa.

### Beneficios de la Infrastructure Layer

- Persistencia desacoplada de la lógica de negocio.
- Integración transparente con servicios externos.
- Comunicación desacoplada mediante eventos.
- Trazabilidad completa del ciclo de mantenimiento.
- Reutilización de repositorios mediante patrones DDD.
- Preparación para futuras integraciones y escalabilidad.

La Infrastructure Layer constituye el soporte técnico del bounded context **Service Execution & Maintenance**, permitiendo integrar la gestión de incidentes, órdenes de mantenimiento y técnicos con los mecanismos de persistencia, notificación y comunicación requeridos por la plataforma Nexora.

---

<div style="page-break-after: always;"></div>