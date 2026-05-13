#### 4.2.4.4. Infrastructure Layer.

Esta capa implementa persistencia e integración con servicios externos.

### Repositories

| Clase | Interfaz | Descripción |
| ----- | ----- | ----- |
| MaintenanceOrderRepositoryImpl | IMaintenanceOrderRepository | Persistencia de órdenes |
| TechnicianRepositoryImpl | ITechnicianRepository | Persistencia de técnicos |

---

### Adapters

| Clase | Descripción |
| ----- | ----- |
| NotificationAdapter | Envío de notificaciones |
| MessageBrokerAdapter | Comunicación por eventos (RabbitMQ/Kafka) |
