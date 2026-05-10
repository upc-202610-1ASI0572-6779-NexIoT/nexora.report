### 5.2.2. Labeling Systems

El sistema de etiquetado de Nexora define la forma en que se nombran, presentan y organizan los elementos de información dentro de la Landing Page, la aplicación web para arrendadores y la aplicación móvil para arrendatarios. Su propósito es reducir la ambigüedad en la interacción, mantener consistencia semántica entre módulos y permitir que los usuarios identifiquen rápidamente el estado de sus propiedades, dispositivos, alertas y reportes.

Dado que Nexora trabaja con información proveniente de dispositivos IoT, las etiquetas deben representar datos técnicos de manera comprensible para usuarios no especializados. Por ello, los nombres visibles en la interfaz priorizan términos breves, orientados a la tarea y alineados con el lenguaje ubicuo del proyecto, como Inquilino, Arrendador, Dispositivo Inteligente, Lectura de Consumo, Incidencia, Alerta Crítica y Estado del Inmueble.

El sistema evita etiquetas excesivamente técnicas en las vistas principales. Conceptos como `TelemetryRecord`, `Thresholds` o `MonitoringDevice` pertenecen al diseño de backend y al modelo de dominio, mientras que en la experiencia de usuario se traducen en etiquetas como Consumo, Umbrales, Estado del sensor o Historial. Esta separación permite conservar precisión técnica sin aumentar la carga cognitiva del usuario final.

#### Criterios de etiquetado

Las etiquetas de Nexora se definen bajo los siguientes criterios:

- Claridad: cada etiqueta debe expresar una acción, estado o categoría reconocible.
- Brevedad: se priorizan nombres cortos para facilitar lectura rápida en dashboards y navegación móvil.
- Consistencia: un mismo concepto debe conservar el mismo nombre en todos los canales.
- Orientación al usuario: los términos deben responder a las tareas reales de arrendadores y arrendatarios.
- Relación con el dominio: las etiquetas deben mantenerse alineadas con los bounded contexts definidos en la arquitectura del sistema.

Estos criterios permiten que la arquitectura de información sea coherente con la organización jerárquica, secuencial y matricial planteada en la sección anterior.

#### Etiquetas principales del sistema

| Etiqueta | Módulo | Propósito | Contexto de uso | Justificación |
| :--- | :--- | :--- | :--- | :--- |
| Inicio | Aplicación móvil | Presentar el estado general de la unidad habitacional | Vista principal del arrendatario | Es una etiqueta común, breve y reconocible que permite acceder rápidamente al resumen de seguridad y consumo. |
| Dispositivos | Aplicación móvil / Aplicación web | Agrupar sensores y actuadores asociados a una unidad | Control de dispositivos IoT y gestión de hardware | Mantiene relación directa con el concepto de Smart Device y evita términos técnicos como nodo o hardware. |
| Alertas | Aplicación móvil / Aplicación web | Mostrar eventos preventivos o críticos detectados por el sistema | Notificaciones, historial y monitoreo en tiempo real | Resume el concepto de Critical Alert y facilita una respuesta rápida ante riesgos. |
| Notificaciones | Aplicación móvil | Comunicar eventos relevantes al inquilino | Bottom Navigation y mensajes push | Diferencia los avisos recibidos por el usuario de las alertas registradas como eventos del sistema. |
| Automatizaciones | Aplicación móvil | Permitir acciones automáticas sobre ventilación, alarma o configuraciones de seguridad | Control del hogar inteligente | Expresa una función de usuario sin introducir complejidad técnica sobre reglas internas. |
| Propiedades | Aplicación web | Listar y administrar inmuebles vinculados al arrendador | Manager Dashboard | Es consistente con PropertyAsset y con el objetivo de supervisar múltiples unidades. |
| Inventario | Aplicación web | Mostrar dispositivos asignados a propiedades o unidades | Gestión de dispositivos y activos | Resume el bounded context Resource & Asset Management de forma entendible para administradores. |
| Historial | Aplicación móvil / Aplicación web | Consultar eventos, incidencias, alertas o lecturas anteriores | Reportes y seguimiento operativo | Refuerza la organización cronológica de la información. |
| Reportes | Aplicación web / Aplicación móvil | Presentar análisis de consumo y eventos | Visualización de tendencias y exportación | Es una etiqueta clara para información consolidada y orientada a la toma de decisiones. |
| Mantenimiento | Aplicación web | Gestionar tareas preventivas o correctivas | Órdenes e incidencias técnicas | Se alinea con Service Execution & Maintenance y con las historias de usuario de gestión operativa. |
| Inquilinos | Aplicación web | Registrar y administrar usuarios asociados a una propiedad | Gestión de acceso y asignación de unidades | Usa el término validado en el lenguaje ubicuo y evita ambigüedad con usuarios genéricos. |
| Contacto | Landing Page | Permitir comunicación con usuarios interesados | Formulario comercial | Etiqueta estándar para captación de leads y consultas. |
| Planes | Landing Page | Presentar alternativas de suscripción | Sección comercial | Se relaciona con el modelo SaaS y el bounded context Subscriptions & Payment Management. |

#### Etiquetas de estados y datos IoT

Las etiquetas asociadas a monitoreo deben representar datos operativos sin exponer complejidad innecesaria. En lugar de mostrar únicamente valores técnicos, Nexora combina valores medibles con estados interpretables por el usuario.

| Etiqueta | Módulo | Propósito | Contexto de uso | Justificación |
| :--- | :--- | :--- | :--- | :--- |
| Seguro | Monitoreo IoT | Indicar condiciones normales en la vivienda | Estado general de sensores | Corresponde al estado Safe definido en el dominio y transmite confianza inmediata. |
| Advertencia | Monitoreo IoT | Informar una condición que requiere atención preventiva | Calidad de aire, gas o temperatura | Permite actuar antes de que el evento se convierta en crítico. |
| Peligro | Monitoreo IoT | Indicar una situación crítica | Fuga de gas o anomalía severa | Se alinea con Danger y facilita una reacción rápida. |
| Nivel de gas | Monitoreo IoT | Mostrar la concentración de gas detectada | Aplicación móvil y dashboard | Traduce `gasPpm` a una etiqueta comprensible para el usuario. |
| Calidad del aire | Monitoreo IoT | Comunicar el estado ambiental de la unidad | Aplicación móvil | Se relaciona con `airQualityIndex` y evita mostrar solo un índice numérico sin contexto. |
| Temperatura | Monitoreo IoT | Mostrar lectura ambiental complementaria | Vista de estado y reportes | Mantiene coherencia con la telemetría capturada por sensores. |
| Última lectura | Monitoreo IoT | Indicar la lectura más reciente recibida | Estado del sensor y dashboard | Ayuda a evaluar vigencia de la información en tiempo real. |
| Sensor no disponible | Gestión de dispositivos | Comunicar pérdida de comunicación | Estado de sensores | Reduce ambigüedad frente a fallos de conexión o ausencia de datos. |
| Consumo estimado | Reportes | Presentar una aproximación del gasto del periodo | Análisis de consumo | Se alinea con las historias de usuario de estimación de costo. |
| Umbral | Configuración de alertas | Definir límites de detección | Configuración por usuario o propiedad | Es breve y consistente con `Thresholds`, pero comprensible en interfaz. |

#### Relación con la navegación

El sistema de etiquetado refuerza la navegación definida para cada canal de Nexora. En la Landing Page, las etiquetas Características, Planes, Acerca de Nosotros y Contacto orientan al visitante hacia información comercial y de adopción. En la aplicación web, las etiquetas Propiedades, Dispositivos, Alertas, Reportes, Mantenimiento e Inquilinos permiten que el arrendador gestione sus activos desde una estructura jerárquica. En la aplicación móvil, las etiquetas Inicio, Dispositivos, Automatizaciones y Notificaciones priorizan acciones frecuentes del arrendatario.

Esta consistencia evita que un mismo concepto sea presentado con nombres diferentes según la pantalla. Por ejemplo, una alerta crítica debe conservar su denominación como Alerta tanto en el dashboard como en la aplicación móvil, mientras que el detalle puede variar según el perfil del usuario. Así, el arrendador puede revisar el historial y la propiedad afectada, mientras que el arrendatario recibe una acción inmediata asociada a su unidad.

#### Reducción de carga cognitiva

El etiquetado reduce la carga cognitiva mediante tres decisiones principales. Primero, utiliza términos del dominio ya validados en el proyecto, evitando nombres genéricos o ambiguos. Segundo, separa los conceptos técnicos internos de los nombres visibles para el usuario. Tercero, mantiene una relación estable entre etiqueta, acción y resultado esperado.

En consecuencia, el usuario no necesita interpretar estructuras técnicas como agregados, comandos o recursos de backend. La interfaz presenta la información en términos de tareas: consultar consumo, revisar alertas, controlar dispositivos, programar mantenimiento o visualizar reportes. Esta decisión es especialmente importante en Nexora, debido a que la plataforma combina datos IoT en tiempo real con procesos de gestión inmobiliaria.

#### Consistencia semántica con los bounded contexts

Las etiquetas visibles se relacionan con los bounded contexts sin exponerlos directamente al usuario final. Esta correspondencia permite mantener coherencia entre experiencia de usuario, modelo de dominio y arquitectura de información.

| Bounded Context | Etiquetas asociadas | Relación con la interfaz |
| :--- | :--- | :--- |
| Service Monitoring & Intelligence | Monitoreo, Nivel de gas, Calidad del aire, Temperatura, Alertas, Historial | Representa la lectura, análisis y visualización de telemetría en tiempo real. |
| Resource & Asset Management | Propiedades, Inventario, Dispositivos, Estado del sensor | Permite administrar la jerarquía de inmuebles, unidades y dispositivos IoT. |
| Service Execution & Maintenance | Incidencias, Mantenimiento, Orden de mantenimiento, Prioridad | Facilita el seguimiento de fallas, tareas preventivas y acciones correctivas. |
| Identity & Access Management | Inquilinos, Acceso, Roles, Registro, Inicio de sesión | Organiza la autenticación y autorización según perfiles de usuario. |
| Subscriptions & Payment Management | Planes, Suscripción, Facturación | Vincula el modelo SaaS con la presentación comercial y administrativa. |

De esta manera, el sistema de etiquetado funciona como una capa de traducción entre el diseño técnico y la experiencia de usuario. Su correcta aplicación permite que Nexora mantenga una comunicación clara, consistente y alineada con su arquitectura de información.
