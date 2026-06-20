#### 4.2.4.2. Interface Layer

La Interface Layer del bounded context **Service Execution & Maintenance** es responsable de exponer las capacidades de gestión de incidentes, órdenes de mantenimiento y asignación de técnicos mediante APIs RESTful.

Esta capa permite que las aplicaciones cliente de Nexora y otros módulos internos del monolito modular registren incidentes, creen órdenes de mantenimiento, asignen técnicos y actualicen el estado de las intervenciones sin acceder directamente a las entidades del dominio.

### Controllers Principales

#### MaintenanceController

El **MaintenanceController** actúa como punto de entrada para las operaciones relacionadas con la creación, asignación, seguimiento y cierre de órdenes de mantenimiento.

#### IncidentController

El **IncidentController** actúa como punto de entrada para registrar incidentes provenientes de otros bounded contexts, como **Service Monitoring & Intelligence**, cuando se detecta una anomalía que requiere intervención técnica.

### Endpoints Expuestos

| Método | Endpoint | Descripción |
|----------|----------|-------------|
| POST | /api/v1/maintenance/orders | Crea una nueva orden de mantenimiento |
| PUT | /api/v1/maintenance/orders/{id}/assign | Asigna un técnico a una orden existente |
| PUT | /api/v1/maintenance/orders/{id}/complete | Finaliza una orden de mantenimiento |
| POST | /api/v1/incidents | Registra un incidente recibido desde otro bounded context |
| GET | /api/v1/maintenance/orders/{id} | Consulta el detalle de una orden de mantenimiento |
| GET | /api/v1/maintenance/orders | Lista órdenes de mantenimiento por estado o prioridad |

### Resources

#### MaintenanceOrderResource

Representa la información expuesta sobre una orden de mantenimiento.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador de la orden |
| propertyId | Long | Propiedad afectada |
| technicianId | Long | Técnico asignado |
| status | String | Estado actual de la orden |
| priority | String | Nivel de prioridad |
| createdAt | DateTime | Fecha de creación |
| completedAt | DateTime | Fecha de finalización |

#### IncidentResource

Representa la información recibida o expuesta sobre un incidente técnico.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador del incidente |
| type | String | Tipo de incidente |
| severity | String | Nivel de severidad |
| detectedAt | DateTime | Fecha de detección |
| status | String | Estado del incidente |

#### AssignTechnicianResource

Transporta la información necesaria para asignar un técnico a una orden.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| technicianId | Long | Identificador del técnico asignado |
| assignedAt | DateTime | Fecha de asignación |

### Responsabilidades de la Interface Layer

- Recibir solicitudes HTTP provenientes de aplicaciones cliente o módulos internos.
- Exponer operaciones para crear, asignar y completar órdenes de mantenimiento.
- Recibir incidentes provenientes del bounded context de monitoreo.
- Validar formatos básicos de entrada.
- Transformar recursos externos en comandos de aplicación.
- Delegar los casos de uso a la Application Layer.
- Retornar respuestas HTTP estructuradas.

La Interface Layer constituye la capa de presentación del bounded context **Service Execution & Maintenance** y se encuentra representada principalmente por **MaintenanceController**, **IncidentController** y los recursos utilizados para exponer órdenes, incidentes y asignaciones técnicas.