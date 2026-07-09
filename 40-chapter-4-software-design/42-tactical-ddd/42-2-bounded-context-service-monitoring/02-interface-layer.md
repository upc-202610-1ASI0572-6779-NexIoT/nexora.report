#### 4.2.2.2. Interface Layer

La Interface Layer del bounded context **Service Monitoring & Intelligence** es responsable de exponer las capacidades de monitoreo inteligente hacia las aplicaciones cliente de Nexora mediante APIs RESTful y recursos de consulta.

Esta capa actúa como intermediaria entre los consumidores externos y la lógica interna del bounded context, permitiendo acceder a información de telemetría, estados de bienestar, anomalías detectadas y configuraciones de monitoreo sin exponer directamente las entidades del dominio.

Siguiendo los principios de separación de responsabilidades, la Interface Layer recibe solicitudes HTTP, transforma información entre recursos externos y objetos internos, y delega el procesamiento de los casos de uso a la Application Layer.

### Controller Principal

#### MonitoringController

El **MonitoringController** actúa como punto de entrada para las operaciones relacionadas con monitoreo, visualización de telemetría, consulta de anomalías y configuración de umbrales de seguridad.

Este controlador recibe solicitudes provenientes de aplicaciones móviles, aplicaciones web y otros consumidores autorizados de la plataforma.

### Endpoints Expuestos

| Método | Endpoint | Descripción |
|----------|----------|-------------|
| GET | /api/v1/monitoring/stream | Obtiene información de monitoreo en tiempo real |
| GET | /api/v1/monitoring/anomalies | Consulta el historial de anomalías registradas |
| GET | /api/v1/monitoring/history | Obtiene el histórico de lecturas de telemetría |
| PUT | /api/v1/monitoring/thresholds | Actualiza los umbrales de monitoreo configurados |

### Resources

#### TelemetryResource

Recurso utilizado para representar información de telemetría procesada por el sistema.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador del registro |
| gasPpm | Double | Nivel de gas detectado |
| airQuality | Double | Calidad del aire registrada |
| temperature | Double | Temperatura registrada |
| capturedAt | DateTime | Fecha y hora de captura |

Este recurso permite visualizar información histórica y en tiempo real de los sensores IoT.

---

#### AnomalyResource

Recurso utilizado para representar anomalías detectadas por el sistema.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador de la anomalía |
| severity | String | Nivel de severidad |
| description | String | Descripción de la anomalía |
| resolved | Boolean | Estado de resolución |
| detectedAt | DateTime | Fecha de detección |

Este recurso permite consultar incidentes históricos y alertas activas dentro de una propiedad.

---

#### UpdateThresholdResource

Recurso utilizado para modificar los límites de seguridad configurados para un dispositivo o sensor.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| warningLevel | Double | Nivel de advertencia configurado |
| criticalLevel | Double | Nivel crítico configurado |

Este recurso permite personalizar el comportamiento del monitoreo según las necesidades de cada inmueble.

### Responsabilidades de la Interface Layer

- Recibir solicitudes HTTP provenientes de aplicaciones cliente.
- Exponer capacidades de monitoreo mediante APIs RESTful.
- Transformar entidades de dominio en recursos consumibles por el cliente.
- Validar formatos básicos de entrada.
- Delegar la ejecución de casos de uso a la Application Layer.
- Gestionar respuestas HTTP y códigos de estado.
- Mantener desacoplada la comunicación externa de la lógica de negocio.

La Interface Layer constituye la capa de presentación del bounded context **Service Monitoring & Intelligence** y se encuentra representada principalmente por el **MonitoringController** y los recursos utilizados para exponer información de telemetría, anomalías y configuraciones de monitoreo a los consumidores externos de la plataforma.

---

<div style="page-break-after: always;"></div>