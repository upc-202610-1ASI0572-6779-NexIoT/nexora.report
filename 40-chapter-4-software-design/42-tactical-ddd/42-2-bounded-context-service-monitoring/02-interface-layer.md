#### 4.2.2.2. Interface Layer

**Backend:**
Define los recursos y controladores que exponen la inteligencia del sistema a las aplicaciones cliente.

#### Resources
| Clase | Descripción |
| :--- | :--- |
| TelemetryResource | Entrega los datos de consumo y estado de aire al usuario |
| AnomalyResource | Detalla una incidencia de seguridad para el historial del arrendador |
| UpdateThresholdResource | Recurso para modificar los límites de alerta de un dispositivo |

#### Controllers

**MonitoringController**
| Ruta específica | Descripción |
| :--- | :--- |
| /api/v1/monitoring/stream | Canal de datos en tiempo real para la App Móvil |
| /api/v1/monitoring/anomalies | Consulta de alertas históricas por propiedad |
