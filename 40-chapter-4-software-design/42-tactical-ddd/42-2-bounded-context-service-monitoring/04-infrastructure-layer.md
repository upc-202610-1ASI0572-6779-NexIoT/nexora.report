#### 4.2.2.4. Infrastructure Layer

La Infrastructure Layer del bounded context **Service Monitoring & Intelligence** contiene las implementaciones técnicas necesarias para soportar el procesamiento de telemetría, la persistencia de datos de monitoreo y la integración con la infraestructura IoT desplegada en las propiedades inteligentes.

Siguiendo los principios de Domain-Driven Design, esta capa implementa las abstracciones definidas por el dominio y proporciona mecanismos concretos para almacenamiento de información, recepción de mensajes MQTT y acceso a servicios tecnológicos externos.

### Repository Implementations

#### TelemetryRepository

Implementación concreta de la interfaz **ITelemetryRepository**, responsable de persistir y recuperar registros de telemetría generados por los sensores IoT.

Este repositorio permite almacenar información histórica utilizada para monitoreo, análisis y generación de reportes.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(record) | Persiste una nueva lectura de telemetría |
| findLatestByDeviceId(deviceId) | Recupera la última lectura registrada |
| findHistoryByDeviceId(deviceId) | Recupera el historial completo de lecturas |

---

#### AnomalyRepository

Implementación concreta de la interfaz **IAnomalyRepository**, responsable de almacenar y recuperar anomalías detectadas por el sistema.

Además de la persistencia operativa, permite mantener trazabilidad histórica para auditorías y análisis posteriores.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(anomaly) | Persiste una anomalía detectada |
| findActiveByDeviceId(deviceId) | Obtiene anomalías activas |
| findHistoryByDeviceId(deviceId) | Recupera el historial de anomalías |

Ambos repositorios son implementados utilizando **Spring Data JPA**, permitiendo acceder a la información mediante una capa de abstracción desacoplada del dominio.

### IoT Communication Components

#### MqttInboundAdapter

El componente **MqttInboundAdapter** actúa como adaptador técnico entre la infraestructura IoT y el bounded context de monitoreo.

Su función principal consiste en recibir mensajes MQTT provenientes de sensores y dispositivos Edge, transformar la información recibida y entregarla a la Application Layer para su procesamiento.

**Responsabilidades principales:**

- Suscribirse a tópicos MQTT configurados.
- Recibir lecturas enviadas por dispositivos IoT.
- Validar el formato de los mensajes recibidos.
- Transformar mensajes MQTT en objetos utilizados por la aplicación.
- Enviar información hacia los servicios de procesamiento de telemetría.

### Database Layer

#### Monitoring Database

Base de datos responsable de almacenar la información persistente relacionada con el monitoreo inteligente.

Esta base de datos soporta la gestión histórica de lecturas de sensores, anomalías detectadas y configuraciones de monitoreo utilizadas por el sistema.

### Main Tables

#### telemetry_records

Almacena las lecturas capturadas por los dispositivos IoT.

**Campos principales:**

- id
- device_id
- gas_ppm
- air_quality
- temperature
- captured_at

---

#### anomalies

Almacena las anomalías detectadas por el sistema de monitoreo.

**Campos principales:**

- id
- telemetry_record_id
- severity
- description
- resolved
- detected_at

---

#### thresholds

Almacena los límites configurados para la evaluación de riesgo.

**Campos principales:**

- id
- warning_level
- critical_level
- device_id

### Infrastructure Responsibilities

- Implementar mecanismos de persistencia definidos por el dominio.
- Gestionar el almacenamiento histórico de telemetría.
- Administrar el registro de anomalías.
- Integrar la plataforma con la infraestructura MQTT.
- Transformar mensajes IoT en objetos procesables por la aplicación.
- Proporcionar acceso eficiente a información histórica de monitoreo.

### Beneficios de la Infrastructure Layer

- Persistencia desacoplada de la lógica de negocio.
- Integración transparente con dispositivos IoT.
- Almacenamiento histórico para analítica y auditoría.
- Escalabilidad para grandes volúmenes de telemetría.
- Reutilización de repositorios mediante patrones DDD.
- Facilita la incorporación de nuevos sensores y fuentes de datos.

La Infrastructure Layer constituye el soporte técnico del bounded context **Service Monitoring & Intelligence**, permitiendo integrar la información proveniente de la infraestructura IoT con los procesos de monitoreo, evaluación de riesgos y detección de anomalías implementados por la plataforma Nexora.

---

<div style="page-break-after: always;"></div>