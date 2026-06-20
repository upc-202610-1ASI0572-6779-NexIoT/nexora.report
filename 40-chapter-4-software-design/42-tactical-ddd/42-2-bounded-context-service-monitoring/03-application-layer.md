#### 4.2.2.3. Application Layer

La Application Layer del bounded context **Service Monitoring & Intelligence** es responsable de coordinar los casos de uso relacionados con el monitoreo inteligente, el procesamiento de telemetría, la detección de anomalías y la consulta de información histórica.

Esta capa actúa como intermediaria entre la Interface Layer y el modelo de dominio, orquestando el flujo de ejecución de los procesos de negocio sin contener reglas propias del dominio. Su principal responsabilidad consiste en coordinar comandos, consultas y eventos generados a partir de las lecturas provenientes de los dispositivos IoT.

### Command Services

#### TelemetryCommandService

El servicio **TelemetryCommandService** coordina el procesamiento de nuevas lecturas de telemetría recibidas desde la infraestructura IoT.

Este servicio valida la información recibida, crea registros de telemetría y solicita la evaluación de riesgo correspondiente.

**Responsabilidades principales:**

- Procesar lecturas provenientes de sensores IoT.
- Validar consistencia de los datos recibidos.
- Registrar nuevos TelemetryRecord.
- Invocar la evaluación de riesgo mediante el Domain Service.
- Generar eventos de monitoreo cuando corresponda.

---

#### AnomalyCommandService

El servicio **AnomalyCommandService** coordina el registro y tratamiento de anomalías detectadas durante el proceso de monitoreo.

**Responsabilidades principales:**

- Crear nuevas anomalías.
- Registrar incidentes de seguridad.
- Gestionar cambios de estado de anomalías.
- Orquestar el envío de alertas y notificaciones.
- Coordinar acciones posteriores a una detección crítica.

### Query Services

#### MonitoringQueryService

El servicio **MonitoringQueryService** gestiona las consultas relacionadas con el estado actual de los sensores y el historial de monitoreo.

**Responsabilidades principales:**

- Recuperar el estado más reciente de una propiedad.
- Consultar el histórico de telemetría.
- Obtener anomalías activas o históricas.
- Generar información para dashboards y gráficos.
- Proveer información consolidada para aplicaciones cliente.

### Commands

Los principales comandos identificados dentro de este bounded context son:

| Command | Descripción |
| :--- | :--- |
| ProcessTelemetryCommand | Registra y procesa una nueva lectura proveniente de un sensor IoT |
| CreateAnomalyCommand | Registra una anomalía detectada por el sistema |
| ResolveAnomalyCommand | Marca una anomalía como resuelta |
| UpdateThresholdCommand | Actualiza los umbrales de monitoreo configurados |

### Queries

Las consultas principales del bounded context son:

| Query | Descripción |
| :--- | :--- |
| GetCurrentStatusQuery | Obtiene el estado actual de monitoreo de una vivienda |
| GetTelemetryHistoryQuery | Recupera el histórico de lecturas registradas |
| GetActiveAnomaliesQuery | Obtiene las anomalías activas de una propiedad |
| GetAnomalyHistoryQuery | Recupera el historial completo de anomalías |

### Event Handling

Este bounded context trabaja bajo un enfoque orientado a eventos, ya que las lecturas provenientes de la capa IoT generan procesos automáticos de análisis y detección de riesgos.

Los eventos principales identificados son:

| Evento | Descripción |
| :--- | :--- |
| TelemetryReceivedEvent | Indica que una nueva lectura ha sido recibida desde un dispositivo IoT |
| RiskDetectedEvent | Indica que una lectura presenta condiciones de riesgo |
| AnomalyDetectedEvent | Indica que se ha generado una anomalía dentro del sistema |
| AnomalyResolvedEvent | Indica que una anomalía fue atendida y cerrada |

### Capacidades de Aplicación

La Application Layer soporta las siguientes capacidades principales del bounded context:

- Procesamiento de telemetría en tiempo real.
- Detección automática de riesgos.
- Registro y gestión de anomalías.
- Consulta de estados actuales de monitoreo.
- Consulta de históricos de telemetría.
- Generación de información para analítica y visualización.

### Beneficios de la Application Layer

- Centraliza la coordinación de los casos de uso.
- Separa la lógica de negocio de la lógica de presentación.
- Facilita la implementación de CQRS.
- Permite integrar eventos provenientes de dispositivos IoT.
- Mejora la mantenibilidad y escalabilidad del sistema.
- Facilita la incorporación futura de nuevos sensores y reglas de monitoreo.

La Application Layer constituye el punto de orquestación principal del bounded context **Service Monitoring & Intelligence**, coordinando la interacción entre la Interface Layer, los servicios de dominio, los repositorios y los componentes de infraestructura encargados del monitoreo inteligente.

---
