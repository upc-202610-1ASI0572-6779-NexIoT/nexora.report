#### 4.2.4.1. Domain Layer

La Domain Layer contiene los conceptos centrales del negocio relacionados con la ejecución de mantenimientos y la atención de incidentes técnicos dentro de la plataforma Nexora. En esta capa se modelan las órdenes de trabajo, los técnicos responsables de las intervenciones y los incidentes que originan las actividades de mantenimiento.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa permanece independiente de frameworks, mecanismos de persistencia o detalles de infraestructura. Su responsabilidad principal es representar las reglas de negocio que permiten gestionar el ciclo de vida de las órdenes de mantenimiento y coordinar la atención de incidencias detectadas por otros bounded contexts.

### Aggregate Root

#### MaintenanceOrder

La entidad **MaintenanceOrder** actúa como Aggregate Root del bounded context, ya que representa la unidad principal de trabajo sobre la cual se gestionan las actividades de mantenimiento, asignación de técnicos y seguimiento de reparaciones.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la orden de mantenimiento |
| propertyId | Long | Identificador de la propiedad afectada |
| technicianId | Long | Identificador del técnico asignado |
| status | MaintenanceStatus | Estado actual de la orden |
| priority | PriorityLevel | Nivel de prioridad de la intervención |
| createdAt | DateTime | Fecha y hora de creación |
| completedAt | DateTime | Fecha y hora de finalización |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| assignTechnician(technicianId) | Asigna un técnico a la orden |
| startWork() | Inicia la ejecución del mantenimiento |
| completeWork() | Finaliza la orden de mantenimiento |
| updatePriority(priority) | Actualiza la prioridad de la orden |

### Entities

#### Technician

La entidad **Technician** representa al personal técnico encargado de ejecutar actividades de mantenimiento dentro de las propiedades administradas por la plataforma.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único del técnico |
| name | String | Nombre completo del técnico |
| specialty | String | Especialidad técnica |
| availabilityStatus | String | Estado actual de disponibilidad |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| assignTask(orderId) | Asigna una tarea al técnico |
| updateAvailability(status) | Actualiza la disponibilidad del técnico |
| isAvailable() | Verifica si el técnico puede recibir nuevas tareas |

#### Incident

La entidad **Incident** representa una anomalía o problema detectado que requiere una acción correctiva mediante una orden de mantenimiento.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único del incidente |
| type | String | Tipo de incidente detectado |
| severity | String | Nivel de severidad |
| detectedAt | DateTime | Fecha y hora de detección |
| status | String | Estado actual del incidente |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| markAsProcessed() | Marca el incidente como procesado |
| isCritical() | Determina si el incidente requiere atención inmediata |

### Value Objects

#### PriorityLevel

El Value Object **PriorityLevel** define el nivel de prioridad asignado a una orden de mantenimiento.

**Valores definidos:**

| Valor | Descripción |
| :--- | :--- |
| HIGH | Requiere atención inmediata |
| MEDIUM | Prioridad operativa normal |
| LOW | Atención programada |

#### MaintenanceStatus

El Value Object **MaintenanceStatus** define el estado del ciclo de vida de una orden de mantenimiento.

**Valores definidos:**

| Valor | Descripción |
| :--- | :--- |
| PENDING | Orden creada pendiente de asignación |
| ASSIGNED | Técnico asignado |
| IN_PROGRESS | Trabajo en ejecución |
| COMPLETED | Orden finalizada |

### Domain Services

#### MaintenanceAssignmentService

El servicio de dominio **MaintenanceAssignmentService** encapsula la lógica de asignación automática de técnicos según disponibilidad, especialidad y prioridad de la orden.

**Métodos principales:**

| Método | Descripción |
| :--- | :--- |
| assignTechnician(order, technicians) | Selecciona el técnico más adecuado |
| findAvailableTechnician() | Busca técnicos disponibles |
| validateAssignment() | Valida restricciones de asignación |

#### NotificationDomainService

El servicio de dominio **NotificationDomainService** define las reglas de negocio asociadas a las notificaciones generadas durante el ciclo de mantenimiento.

**Métodos principales:**

| Método | Descripción |
| :--- | :--- |
| notifyTechnician(order) | Notifica una nueva asignación |
| notifyCompletion(order) | Notifica la finalización de una orden |
| notifyIncident(incident) | Notifica incidentes críticos |

### Repository Interfaces

#### IMaintenanceOrderRepository

Abstracción utilizada por el dominio para acceder a la persistencia de órdenes de mantenimiento.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(order) | Persiste una orden |
| findById(id) | Obtiene una orden específica |
| findByStatus(status) | Obtiene órdenes por estado |

#### ITechnicianRepository

Abstracción utilizada por el dominio para acceder a la persistencia de técnicos.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(technician) | Persiste un técnico |
| findById(id) | Obtiene un técnico específico |
| findAvailable() | Obtiene técnicos disponibles |

### Domain Relationships

- Un **Incident** puede generar una **MaintenanceOrder**.
- Una **MaintenanceOrder** puede ser asignada a un único **Technician**.
- Un **Technician** puede gestionar múltiples **MaintenanceOrder**.
- **MaintenanceAssignmentService** utiliza **MaintenanceOrder** y **Technician** para ejecutar asignaciones automáticas.
- **NotificationDomainService** utiliza **MaintenanceOrder** e **Incident** para generar notificaciones de negocio.

### Domain Rules

1. Toda orden de mantenimiento debe estar asociada a una propiedad válida.
2. Una orden debe tener una prioridad definida.
3. Una orden no puede completarse sin haber sido asignada previamente.
4. Un técnico solo puede recibir nuevas órdenes si se encuentra disponible.
5. Todo incidente crítico debe generar una orden de mantenimiento.
6. Una orden completada no puede volver al estado pendiente.
7. Las notificaciones deben generarse cuando se crea, asigna o completa una orden.

La Domain Layer constituye la base conceptual del bounded context **Service Execution & Maintenance** y se refleja en los diagramas de componentes, clases de dominio y diseño de base de datos presentados en las siguientes secciones.