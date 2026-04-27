### 4.2.4. Bounded Context: Service Execution & Maintenance Bounded context  
Responsable de la ejecución operativa de mantenimientos y la atención de incidentes técnicos en tiempo real. Gestiona órdenes de trabajo, técnicos y seguimiento de reparaciones.

#### 4.2.4.1. Domain Layer  
En esta capa se definen las entidades, agregados y reglas de negocio relacionadas con la ejecución de servicios técnicos

---

### Entities

**MaintenanceOrder**

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Representa una orden de mantenimiento generada a partir de un incidente o solicitud. |

**Atributos**

| Nombre | Tipo | Descripción |
| ----- | ----- | ----- |
| id | int | Identificador único de la orden |
| propertyId | int | Identificador de la propiedad afectada |
| technicianId | int | Técnico asignado |
| status | string | Estado de la orden |
| priority | string | Nivel de prioridad |
| createdAt | DateTime | Fecha de creación |
| completedAt | DateTime | Fecha de finalización |

**Métodos**

| Nombre | Descripción |
| ----- | ----- |
| assignTechnician() | Asigna un técnico a la orden |
| startWork() | Inicia el trabajo de mantenimiento |
| completeWork() | Finaliza la orden |

---

#### Technician

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Representa al técnico encargado de ejecutar tareas de mantenimiento. |

**Atributos**

| Nombre | Tipo | Descripción |
| ----- | ----- | ----- |
| id | int | Identificador del técnico |
| name | string | Nombre del técnico |
| specialty | string | Especialidad técnica |
| availabilityStatus | string | Estado de disponibilidad |

**Métodos**

| Nombre | Descripción |
| ----- | ----- |
| assignTask() | Asigna una tarea al técnico |
| updateAvailability() | Actualiza su disponibilidad |

---

#### Incident

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Representa una alerta o problema detectado que requiere mantenimiento. |

**Atributos**

| Nombre | Tipo | Descripción |
| ----- | ----- | ----- |
| id | int | Identificador del incidente |
| type | string | Tipo de incidente |
| severity | string | Nivel de severidad |
| detectedAt | DateTime | Fecha de detección |
| status | string | Estado del incidente |

---

###  Value Objects

#### PriorityLevel

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Define el nivel de prioridad de una orden de mantenimiento. |

| Valor | Descripción |
| ----- | ----- |
| High | Alta prioridad |
| Medium | Prioridad media |
| Low | Baja prioridad |

---

#### MaintenanceStatus

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Define el estado de la orden de mantenimiento. |

| Valor | Descripción |
| ----- | ----- |
| Pending | Pendiente |
| Assigned | Asignada |
| InProgress | En progreso |
| Completed | Completada |

---

###  Aggregates

#### MaintenanceAggregate

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Coordina la lógica principal del mantenimiento integrando órdenes e incidentes. |

**Métodos**

| Nombre | Descripción |
| ----- | ----- |
| createOrderFromIncident() | Genera una orden desde un incidente |
| assignTechnician() | Asigna un técnico |
| closeOrder() | Cierra la orden |

---

###  Domain Services

#### MaintenanceAssignmentService

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Gestiona la asignación automática de técnicos según disponibilidad y prioridad. |

---

#### NotificationDomainService

| Elemento | Detalle |
| ----- | ----- |
| Descripción | Define la lógica de envío de notificaciones del sistema. |

---

### Repositories (Interfaces)

| Interfaz | Descripción |
| ----- | ----- |
| IMaintenanceOrderRepository | Maneja la persistencia de órdenes de mantenimiento |
| ITechnicianRepository | Maneja la persistencia de técnicos |