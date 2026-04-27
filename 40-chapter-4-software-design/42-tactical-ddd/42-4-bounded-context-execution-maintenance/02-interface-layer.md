#### 4.2.4.2. Interface Layer.

Esta capa expone las funcionalidades mediante controladores que reciben solicitudes externas.

### Controllers

**MaintenanceController**

| Endpoint | Descripción |
| ----- | ----- |
| POST /maintenance/orders | Crea una orden de mantenimiento |
| PUT /maintenance/orders/{id}/assign | Asigna técnico |
| PUT /maintenance/orders/{id}/complete | Finaliza orden |

---

**IncidentController**

| Endpoint | Descripción |
| ----- | ----- |
| POST /incidents | Registra un incidente desde otro bounded context |