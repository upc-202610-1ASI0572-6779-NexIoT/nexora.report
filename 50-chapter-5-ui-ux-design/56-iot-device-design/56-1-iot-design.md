## 5.6 IoT Device Design

### Introducción

El diseño IoT de Nexora se basa en una red de dispositivos especializados distribuidos dentro de cada propiedad. Cada dispositivo incorpora un sensor principal orientado a monitorear una condición específica del entorno y transmitir información al backend monolítico de la plataforma para su procesamiento, almacenamiento y visualización en dashboards y aplicaciones móviles.

La propuesta utiliza componentes físicos de bajo costo y fácil integración con ESP32, permitiendo construir dispositivos compactos, mantenibles y coherentes con las funcionalidades mostradas en los prototipos del sistema, como Device Fleet Overview, Alerts, Device Health, Signal y Threshold Configuration.

A diferencia de un único dispositivo multipropósito, Nexora propone varios dispositivos independientes ubicados en distintas zonas de la propiedad según el tipo de monitoreo requerido. Esta decisión mejora la precisión de lectura, facilita mantenimiento y permite escalar el monitoreo por ambientes o riesgos específicos.

El flujo general de integración es el siguiente:

Dispositivo IoT → Backend monolítico → Base de datos → Dashboard web / Aplicación móvil


Los principales criterios considerados en el diseño son:

* Distribución de dispositivos según el tipo de monitoreo requerido.
* Integración directa con el backend monolítico.
* Diseño compacto y fácil de instalar.
* Indicadores físicos visibles y comprensibles.
* Bajo consumo energético.
* Mantenimiento modular por dispositivo.
* Escalabilidad mediante múltiples dispositivos registrados por propiedad.
* Coherencia con las interfaces diseñadas en Figma.

---

##  Diseño físico de los dispositivos

Nexora utiliza dispositivos IoT especializados construidos sobre ESP32 y sensores específicos según la condición a monitorear. Cada dispositivo mantiene una estructura física similar, variando únicamente el sensor principal y su ubicación dentro de la propiedad.

### Tipos de dispositivos IoT

| Tipo de dispositivo     | Sensor utilizado          | Ubicación recomendada                        | Función                                                               |
| :---------------------- | :------------------------ | :------------------------------------------- | :-------------------------------------------------------------------- |
| Gas Monitoring Device   | MQ2 Gas Sensor            | Cocina o zona cercana a instalaciones de gas | Detectar fugas de GLP, propano, metano y gases inflamables.           |
| Air Quality Device      | MQ-135 Air Quality Sensor | Sala, dormitorio o ambientes cerrados        | Monitorear calidad del aire y presencia de contaminantes ambientales. |
| Motion Detection Device | HC-SR501 PIR Sensor       | Entradas, pasillos o accesos                 | Detectar movimiento dentro de la propiedad.                           |
| Power Monitoring Device | ACS712 Current Sensor     | Zona eléctrica o tablero                     | Monitorear consumo o variaciones de corriente eléctrica.              |
| Light Monitoring Device | LDR Light Sensor          | Ventanas o ambientes internos                | Detectar niveles de iluminación ambiental.                            |

Todos los dispositivos utilizan ESP32 como microcontrolador principal y comparten una estructura física similar.

### Componentes físicos comunes

| Componente              | Función                                         | Consideración de diseño                                                       |
| :---------------------- | :---------------------------------------------- | :---------------------------------------------------------------------------- |
| ESP32 DevKit V1         | Controlar lectura y transmisión de datos        | Debe ubicarse dentro de la carcasa con acceso a alimentación y mantenimiento. |
| Sensor principal        | Capturar la variable específica del dispositivo | Debe instalarse según el entorno que monitorea.                               |
| LED de estado           | Representar estado operativo u Online           | Debe ser visible desde el exterior.                                           |
| LED de advertencia      | Representar condición Warning                   | Debe diferenciarse visualmente del estado normal.                             |
| LED crítico             | Representar condición Critical                  | Debe tener alta visibilidad.                                                  |
| Buzzer pasivo           | Emitir alertas locales                          | Especialmente útil para eventos críticos.                                     |
| Servomotor MG996R       | Ejecutar acción física automatizada             | Puede utilizarse para apertura/cierre o bloqueo mecánico.                     |
| Puerto de alimentación  | Suministrar energía al dispositivo              | Debe permanecer protegido.                                                    |
| Puerto de mantenimiento | Permitir programación o diagnóstico técnico     | Uso exclusivo para soporte técnico.                                           |

### Diagramas físicos en LucidChart

![IoT Motion Monitoring Device](/assets/chapter-5/iot-design/iot-device-base-architecture.png)

![IoT Motion Monitoring Device](/assets/chapter-5/iot-design/iot-motion-monitoring-device.png)

---

##  Diseño del circuito

Cada dispositivo IoT se basa en un ESP32 encargado de leer información desde el sensor principal, activar indicadores físicos y transmitir datos al backend monolítico de Nexora.

El diseño del circuito mantiene una estructura modular y reutilizable. La principal variación entre dispositivos corresponde al tipo de sensor conectado al ESP32.

### Componentes del circuito

| Elemento                  | Función                                    |
| :------------------------ | :----------------------------------------- |
| ESP32 DevKit V1           | Procesar lecturas y transmitir información |
| MQ2 Gas Sensor            | Detectar gases inflamables                 |
| MQ-135 Air Quality Sensor | Detectar contaminantes ambientales         |
| HC-SR501 PIR Sensor       | Detectar movimiento                        |
| ACS712 Current Sensor     | Medir corriente eléctrica                  |
| LDR Light Sensor          | Detectar iluminación ambiental             |
| LEDs de estado            | Representar estados operativos             |
| Buzzer pasivo             | Emitir alertas locales                     |
| Servomotor MG996R         | Ejecutar acciones mecánicas automatizadas  |
| Alimentación              | Suministrar energía estable                |

### Flujo operativo del circuito

1. El sensor principal captura una lectura del entorno.
2. El ESP32 interpreta la información recibida.
3. El dispositivo actualiza sus indicadores físicos.
4. El ESP32 transmite la lectura al backend monolítico.
5. El backend registra la información y evalúa umbrales.
6. La plataforma actualiza dashboards, alertas y estados de dispositivos.

### Diagramas de circuito en LucidChart


![IoT Device Circuit Diagram](/assets/chapter-5/iot-design/iot-device-circuit-diagram.png)


---

## Flujos de interacción

Los siguientes diagramas representan los principales flujos de interacción entre dispositivos IoT, backend y plataformas de usuario. Debido a que corresponden a Diagram-as-Code y flujos UML, se elaboran utilizando PlantUML según las restricciones tecnológicas definidas para el proyecto.

### Flujo general de monitoreo IoT

![IoT General Monitoring Flow](/assets/chapter-5/iot-design/iot-general-monitoring-flow.png)

### Flujo de alerta crítica

![IoT Critical Alert Flow](/assets/chapter-5/iot-design/iot-critical-alert-flow.png)

### Flujo de actualización de estado del dispositivo

![IoT Device Status Flow](/assets/chapter-5/iot-design/iot-device-status-flow.png)

---

##  Relación con la arquitectura del sistema

Los dispositivos IoT de Nexora funcionan como fuentes distribuidas de monitoreo dentro de cada propiedad. Cada dispositivo captura una variable específica del entorno y transmite lecturas hacia el backend monolítico de la plataforma.

La información registrada es utilizada posteriormente para actualizar dashboards, estados de dispositivos, alertas críticas y métricas operativas presentes en la aplicación web y móvil.

| Etapa | Componente                    | Responsabilidad                                            |
| :---- | :---------------------------- | :--------------------------------------------------------- |
| 1     | Dispositivo IoT especializado | Capturar información específica del entorno.               |
| 2     | Backend monolítico            | Validar lecturas, procesar información y generar alertas.  |
| 3     | Base de datos                 | Almacenar lecturas, estados y eventos históricos.          |
| 4     | Dashboard web                 | Mostrar estado operativo y alertas de dispositivos.        |
| 5     | Aplicación móvil              | Notificar eventos relevantes y mostrar monitoreo resumido. |

Esta arquitectura permite administrar múltiples dispositivos independientes dentro de una misma propiedad, manteniendo coherencia con funcionalidades como Device Fleet Overview, Alerts, Device Health, Signal y Threshold Configuration presentes en los prototipos de Nexora.

<div style="page-break-after: always;"></div>