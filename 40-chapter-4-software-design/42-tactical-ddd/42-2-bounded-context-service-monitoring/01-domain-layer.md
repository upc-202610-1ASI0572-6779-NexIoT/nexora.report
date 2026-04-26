#### 4.2.2. Bounded Context: Service Monitoring & Intelligence

Este Bounded Context es el núcleo analítico del sistema Nexora. Se encarga de la ingesta de telemetría proveniente de los sensores IoT (Gas, Aire, Temperatura), la evaluación de riesgos en tiempo real y la generación de alertas ante anomalías detectadas en las viviendas.

#### 4.2.2.1. Domain Layer

**App Móvil:**
En esta capa se describen las clases que representan las abstracciones del monitoreo para el inquilino. Se incluyen clases de serialización para visualizar niveles de gas y calidad de aire en tiempo real.

### DTO

**TelemetryDto**
| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | int | Identificador único del registro de telemetría |
| gasPpm | double | Concentración de gas detectada en partes por millón |
| airQualityIndex | int | Índice de calidad del aire calculado |
| capturedAt | date | Fecha y hora exacta de la lectura |

**RealTimeStatusDto**
| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| status | string | Estado general (Seguro, Advertencia, Peligro) |
| lastValue | double | Último valor de gas recibido |

---

**Backend:**
En esta capa se describen las clases que representan el núcleo del dominio del monitoreo. Se incluyen las entidades, objetos de valor y la lógica de detección de fugas bajo el patrón CQRS.

#### Entities

**MonitoringDevice**
Representa el nodo sensor (ESP32) desde la perspectiva de su flujo de datos.
| Atributo | Tipo |
| :--- | :--- |
| Id | int |
| DeviceCode | string |
| IsOnline | bool |
| LastCalibration | DateTime |

**Anomaly**
Representa una detección de lectura fuera de los parámetros normales (fugas o incendios).
| Atributo | Tipo |
| :--- | :--- |
| Id | int |
| Severity | string |
| Description | string |
| Resolved | bool |

---

#### Value Objects

**Thresholds**
| Atributo | Descripción |
| :--- | :--- |
| CriticalLevel | Valor PPM que dispara la alerta inmediata y cierre de válvula |
| WarningLevel | Valor que sugiere ventilación preventiva |

**WellnessStates**
| Atributo | Descripción |
| :--- | :--- |
| Safe | Niveles normales de gas y aire excelente |
| Risky | Presencia leve de gas o aire muy viciado |
| Danger | Fuga confirmada o niveles tóxicos |

---

#### Aggregates

**TelemetryRecord**
Representa el conjunto de datos capturados por el sistema IoT en un instante dado.
| Atributo | Tipo |
| :--- | :--- |
| Id | long |
| DeviceId | int |
| GasPpm | double |
| AirQuality | double |
| Temperature | double |
| CapturedAt | DateTime |

| Método | Descripción |
| :--- | :--- |
| EvaluateRisk | Compara la lectura contra los umbrales para determinar si existe una anomalía |
| IsCritical | Retorna verdadero si el nivel de gas exige el cierre automático de la válvula |

---

#### Commands & Queries

| Clase | Descripción |
| :--- | :--- |
| ProcessTelemetryCommand | Registra y analiza una nueva lectura de datos del sensor |
| CreateAnomalyCommand | Registra una incidencia de seguridad confirmada en el sistema |
| GetCurrentStatusQuery | Obtiene el estado más reciente de los sensores de una propiedad |
| GetTelemetryHistoryQuery | Consulta el histórico de lecturas para la generación de gráficos |