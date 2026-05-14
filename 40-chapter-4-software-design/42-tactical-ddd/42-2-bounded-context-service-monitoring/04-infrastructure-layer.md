#### 4.2.2.4. Infrastructure Layer

**Backend:**

### Implementación de Repositorios
| Clase | Interfaz Implementada | Descripción |
| :--- | :--- | :--- |
| TelemetryRepository | ITelemetryRepository | Maneja la persistencia en base de datos de series temporales |
| AnomalyRepository | IAnomalyRepository | Persistencia y auditoría de alertas de seguridad |

### IoT Communication
| Clase | Descripción |
| :--- | :--- |
| MqttInboundAdapter | Adaptador técnico que traduce mensajes MQTT del hardware a objetos de dominio |
