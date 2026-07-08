#### 4.2.2. Bounded Context: Service Monitoring & Intelligence

Este bounded context representa el núcleo analítico de Nexora. Se encarga de procesar la telemetría proveniente de sensores IoT, evaluar riesgos en tiempo real y generar alertas ante anomalías detectadas dentro de las viviendas inteligentes.

Dentro del monolito modular de Nexora, este bounded context concentra una de las capacidades core del negocio, ya que transforma datos físicos capturados por sensores en información accionable para usuarios, arrendadores y otros módulos del sistema.

#### 4.2.2.1. Domain Layer

La Domain Layer contiene los conceptos centrales del negocio relacionados con el monitoreo inteligente de sensores IoT. En esta capa se modelan las lecturas de telemetría, anomalías, umbrales de seguridad y estados de bienestar utilizados para evaluar el estado de una vivienda.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa se mantiene independiente de frameworks, controladores, mecanismos de persistencia o detalles de comunicación como MQTT. Su responsabilidad principal es representar las reglas de negocio que permiten determinar si una lectura es segura, riesgosa o crítica.

### Aggregate Root

#### TelemetryRecord

La entidad **TelemetryRecord** actúa como Aggregate Root del bounded context, ya que representa una lectura completa capturada por el sistema IoT en un instante específico y permite evaluar su nivel de riesgo según los umbrales configurados.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único del registro de telemetría |
| deviceId | Long | Identificador del dispositivo que generó la lectura |
| gasPpm | Double | Concentración de gas detectada en partes por millón |
| airQuality | Double | Nivel de calidad del aire registrado |
| temperature | Double | Temperatura capturada por el sensor |
| capturedAt | DateTime | Fecha y hora exacta de la lectura |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| evaluateRisk(thresholds) | Compara la lectura con los umbrales definidos para determinar el estado de bienestar |
| isCritical(thresholds) | Retorna verdadero si la lectura supera el nivel crítico configurado |
| generateAnomaly(thresholds) | Genera una anomalía cuando la lectura representa un riesgo para la vivienda |

### Entities

#### Anomaly

La entidad **Anomaly** representa una lectura fuera de los parámetros normales del sistema, como una posible fuga de gas, mala calidad de aire o condición crítica detectada por los sensores.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la anomalía |
| telemetryRecordId | Long | Identificador de la lectura que originó la anomalía |
| severity | String | Nivel de severidad de la anomalía detectada |
| description | String | Descripción del riesgo identificado |
| resolved | Boolean | Indica si la anomalía fue atendida o cerrada |
| detectedAt | DateTime | Fecha y hora en la que se detectó la anomalía |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| markAsResolved() | Marca la anomalía como resuelta |
| isActive() | Retorna verdadero si la anomalía aún no ha sido resuelta |

#### MonitoringDevice

La entidad **MonitoringDevice** representa una referencia al dispositivo IoT desde la perspectiva del monitoreo. Este bounded context no administra el ciclo de vida completo del dispositivo, ya que esa responsabilidad pertenece a **Resource & Asset Management**. Sin embargo, mantiene la información mínima necesaria para interpretar la telemetría recibida.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador del dispositivo de monitoreo |
| deviceCode | String | Código único del dispositivo IoT |
| isOnline | Boolean | Indica si el dispositivo se encuentra conectado |
| lastCalibration | DateTime | Última fecha de calibración conocida |

### Value Objects

#### Thresholds

El Value Object **Thresholds** representa los límites configurados para evaluar si una lectura de telemetría se encuentra en estado seguro, advertencia o peligro.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| warningLevel | Double | Valor que indica una condición preventiva o de advertencia |
| criticalLevel | Double | Valor que dispara una alerta crítica o acción inmediata |

**Reglas:**

- El nivel crítico debe ser mayor que el nivel de advertencia.
- Los umbrales deben estar asociados a un dispositivo o tipo de sensor.
- Una lectura que supera el nivel crítico debe generar una anomalía.

#### WellnessState

**WellnessState** es una enumeración que define los posibles estados de bienestar de una vivienda según las lecturas recibidas.

**Valores definidos:**

| Valor | Descripción |
| :--- | :--- |
| SAFE | Niveles normales de gas, temperatura y calidad de aire |
| RISKY | Presencia leve de riesgo o valores fuera del rango recomendado |
| DANGER | Fuga confirmada, niveles tóxicos o condición crítica |

### Domain Services

#### RiskEvaluator

El servicio de dominio **RiskEvaluator** encapsula la lógica de evaluación de riesgo a partir de una lectura de telemetría y los umbrales configurados.

Este servicio permite desacoplar la lógica de cálculo de riesgo de las entidades, facilitando cambios futuros en los criterios de evaluación.

**Métodos principales:**

| Método | Descripción |
| :--- | :--- |
| evaluate(record, thresholds) | Determina el estado de bienestar de una lectura |
| detectAnomaly(record, thresholds) | Evalúa si una lectura debe generar una anomalía |
| calculateSeverity(record, thresholds) | Calcula la severidad de la anomalía detectada |

### Repository Interfaces

#### ITelemetryRepository

Abstracción utilizada por el dominio para acceder a la persistencia de registros de telemetría.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(record) | Persiste una lectura de telemetría |
| findLatestByDeviceId(deviceId) | Obtiene la última lectura de un dispositivo |
| findHistoryByDeviceId(deviceId) | Obtiene el histórico de lecturas de un dispositivo |

#### IAnomalyRepository

Abstracción utilizada para acceder a la persistencia de anomalías detectadas.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(anomaly) | Persiste una anomalía detectada |
| findActiveByDeviceId(deviceId) | Obtiene anomalías activas asociadas a un dispositivo |
| findHistoryByDeviceId(deviceId) | Obtiene el historial de anomalías de un dispositivo |

### Commands & Queries

Aunque los Commands y Queries son orquestados principalmente desde la Application Layer, se identifican en este bounded context porque representan capacidades relevantes del dominio de monitoreo.

| Clase | Tipo | Descripción |
| :--- | :--- | :--- |
| ProcessTelemetryCommand | Command | Registra y analiza una nueva lectura recibida desde un sensor |
| CreateAnomalyCommand | Command | Registra una anomalía cuando una lectura supera los umbrales definidos |
| GetCurrentStatusQuery | Query | Obtiene el estado más reciente de los sensores de una vivienda |
| GetTelemetryHistoryQuery | Query | Consulta el histórico de lecturas para visualización y análisis |

### Domain Relationships

- Un **MonitoringDevice** puede generar múltiples **TelemetryRecord**.
- Un **TelemetryRecord** puede generar cero o una **Anomaly**.
- Una **Anomaly** se origina a partir de una lectura específica de telemetría.
- **Thresholds** define los límites utilizados para evaluar un **TelemetryRecord**.
- **RiskEvaluator** utiliza **TelemetryRecord** y **Thresholds** para determinar el **WellnessState**.

### Domain Rules

1. Toda lectura de telemetría debe estar asociada a un dispositivo registrado.
2. Una lectura que supera el nivel crítico debe generar una anomalía.
3. El nivel crítico debe ser mayor que el nivel de advertencia.
4. Una anomalía activa debe mantenerse abierta hasta ser atendida o marcada como resuelta.
5. El estado de bienestar de una vivienda se determina a partir de la última lectura válida.
6. El bounded context no administra el ciclo de vida completo de los dispositivos; solo consume referencias necesarias para monitoreo.
7. La lógica de evaluación de riesgo debe mantenerse desacoplada de los mecanismos técnicos de comunicación o persistencia.

La Domain Layer constituye la base conceptual del bounded context **Service Monitoring & Intelligence** y se refleja en los diagramas de componentes, clases de dominio y diseño de base de datos presentados en las siguientes secciones.

---

<div style="page-break-after: always;"></div>