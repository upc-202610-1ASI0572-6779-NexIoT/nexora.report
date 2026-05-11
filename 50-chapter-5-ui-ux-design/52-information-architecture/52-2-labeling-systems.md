## 5.2.2. Labeling Systems

El sistema de etiquetado de Nexora define la manera en que se nombran y presentan los elementos visibles dentro de la Landing Page, la aplicación web y la aplicación móvil. Su objetivo es facilitar la comprensión de la información, mantener consistencia semántica entre plataformas y permitir que los usuarios identifiquen rápidamente estados, acciones y módulos relacionados con monitoreo IoT y gestión operativa.

Las etiquetas utilizadas en la interfaz priorizan términos breves, claros y orientados a tareas específicas. Asimismo, los nombres visibles mantienen consistencia entre dashboards, paneles de monitoreo y vistas administrativas para reducir la curva de aprendizaje y conservar familiaridad durante la navegación. Aunque la distribución visual cambia según el dispositivo y el perfil de usuario, los conceptos principales mantienen la misma denominación en toda la plataforma.

Debido a que Nexora trabaja con monitoreo IoT en tiempo real, las etiquetas deben representar información técnica de forma comprensible y visualmente identificable. Por ello, la interfaz utiliza nombres directos para sensores, alertas, estados de conexión, reportes y configuraciones críticas del sistema.

#### Criterios de etiquetado

Las etiquetas de Nexora siguen los siguientes criterios:

* Claridad: las etiquetas deben comunicar acciones, estados o categorías fácilmente reconocibles.
* Brevedad: se priorizan nombres cortos para facilitar lectura rápida en dashboards y paneles de monitoreo.
* Consistencia: un mismo concepto mantiene la misma denominación en toda la plataforma.
* Familiaridad: se utilizan términos comunes dentro de sistemas de monitoreo y gestión IoT.
* Orientación a tareas: las etiquetas responden a acciones frecuentes realizadas por los usuarios.

Estos criterios permiten mantener coherencia entre la arquitectura de información, la navegación y los prototipos desarrollados en Figma.

#### Etiquetas principales del sistema

| Etiqueta                | Función                                            | Contexto de uso                |
| :---------------------- | :------------------------------------------------- | :----------------------------- |
| Home                    | Mostrar el resumen general del sistema             | Navegación principal           |
| Properties              | Administrar propiedades registradas                | Gestión de inmuebles           |
| Devices                 | Gestionar dispositivos IoT vinculados              | Monitoreo y administración     |
| Alerts                  | Visualizar incidencias y alertas activas           | Centro de alertas              |
| Reports                 | Consultar métricas y reportes históricos           | Visualización de datos         |
| Settings                | Configurar parámetros y preferencias               | Configuración general          |
| Subscription            | Administrar planes y suscripciones                 | Gestión comercial              |
| Device Fleet Overview   | Mostrar estado general de dispositivos registrados | Dashboard principal            |
| Emergency Alerts Center | Centralizar alertas críticas y preventivas         | Gestión de incidencias         |
| Threshold Configuration | Configurar límites operativos y umbrales           | Configuración IoT              |
| Firmware Update         | Gestionar actualización de firmware                | Administración de dispositivos |
| View Logs               | Consultar registros y eventos históricos           | Seguimiento operativo          |
| Deploy Changes          | Aplicar configuraciones o cambios al sistema       | Gestión técnica                |

#### Etiquetas de acciones principales

Las acciones visibles utilizan verbos descriptivos y directos para facilitar la comprensión inmediata de cada interacción dentro de la plataforma.

| Acción           | Contexto de uso                                           |
| :--------------- | :-------------------------------------------------------- |
| Add Device       | Registrar un nuevo dispositivo IoT                        |
| View Details     | Consultar información detallada de dispositivos o alertas |
| Generate Report  | Crear reportes de monitoreo y actividad                   |
| Update Settings  | Modificar configuraciones del sistema                     |
| Deploy Changes   | Aplicar cambios de configuración                          |
| Calibrate Sensor | Ajustar parámetros operativos del sensor                  |
| View Logs        | Revisar registros históricos                              |
| Update Firmware  | Actualizar firmware de dispositivos IoT                   |

#### Etiquetas de estados y monitoreo IoT

Debido a que Nexora incorpora monitoreo IoT en tiempo real, los estados visibles deben comunicar condiciones operativas y niveles de riesgo de manera inmediata y comprensible.

| Estado           | Significado                                   | Contexto de uso           |
| :--------------- | :-------------------------------------------- | :------------------------ |
| Online           | Dispositivo conectado y operativo             | Estado de dispositivos    |
| Offline          | Dispositivo sin conexión                      | Monitoreo de conectividad |
| Critical         | Situación crítica detectada por el sistema    | Alertas prioritarias      |
| Warning          | Condición preventiva que requiere atención    | Monitoreo operativo       |
| Active Alerts    | Alertas activas registradas                   | Dashboard y monitoreo     |
| Pending Warnings | Advertencias pendientes de revisión           | Gestión de incidencias    |
| Signal           | Estado de intensidad de señal del dispositivo | Conectividad IoT          |
| Health           | Estado operativo general del dispositivo      | Monitoreo técnico         |
| Last Reading     | Última lectura registrada por el sensor       | Telemetría en tiempo real |

#### Relación con la navegación

El sistema de etiquetado mantiene consistencia entre la aplicación web y móvil para reducir el tiempo de aprendizaje y facilitar la navegación entre plataformas. Etiquetas como Home, Devices, Alerts y Reports conservan la misma denominación dentro de toda la solución, permitiendo que los usuarios identifiquen rápidamente funcionalidades equivalentes independientemente del dispositivo utilizado.

Asimismo, los dashboards priorizan etiquetas orientadas al monitoreo y gestión operativa, permitiendo identificar rápidamente el estado de dispositivos, alertas activas y configuraciones críticas del sistema.

#### Reducción de carga cognitiva

Las etiquetas de Nexora utilizan términos familiares dentro del contexto de monitoreo IoT y gestión operativa, evitando nombres excesivamente técnicos o ambiguos. Además, la consistencia entre menús, dashboards, tarjetas y paneles permite que los usuarios relacionen rápidamente cada etiqueta con una acción o funcionalidad específica.

Esta decisión mejora la experiencia de usuario y facilita la interacción con funcionalidades de monitoreo, configuración y administración de dispositivos IoT dentro de la plataforma.
