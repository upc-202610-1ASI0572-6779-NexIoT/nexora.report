#### 6.2.2.1. Sprint Planning 2

## Introducción

El Sprint Planning 2 es la reunión de planificación del segundo sprint del proyecto Nexora. Durante esta reunión, se definieron los objetivos estratégicos y funcionales del sprint, considerando el Product Backlog priorizado, los requerimientos de negocio, la propuesta de valor de la startup NextIoT y los lineamientos definidos para el desarrollo de la solución. Se implementaron grandes avances en todos los software a crear, como lo son el Edge Service, Embedded Systems, Web Service, Landing Page, Web Application y Mobile Application.

---

## Sprint Planning Meeting Summary

| Sprint # | Sprint 2 |
| --- | --- |
| Sprint Planning Background | . |
| Date | 2026-05-29 |
| Time | 06:00 PM |
| Location | Reunión virtual desarrollada mediante Google Meet y coordinación colaborativa mediante Discord y GitHub Projects. |
| Prepared By | Kevin Castañeda  |
| Attendees (to planning meeting) | Kevin Alexander Castañeda Llanos, Jhosep Alarcón, Sebastian Ramirez Tello, Mauricio Muñoz Vilcapoma, Maria Fernanda Peña Riofrio, Jorge Alexandro Linares Arroyo, Andrea Namie O'Higgins Rosales,  |
| Sprint 1 Review Summary | Creación de la primera versión de la Landing Page y la Web Application, así como también la finalización del capítulo 5 relacionado al UI/UX Design y el capítulo 6 en donde se detalla la arquitectura a usar para cada solución. |
| Sprint 1 Retrospective Summary |  Si bien se creo la mayoría de puntos, es importante destacar que también tuvimos que levantar varios errores, los cuales formaran parte de este sprint backlog. |

---

## Sprint Goal & User Stories

### Sprint 2 Goal

“Nuestro enfoque está en entregar la primera versión funcional del ecosistema digital Nexora a través de la implementación del Edge Service, Embedded Systems, Web Service, Mobile App y la segunda versión de la Landing Page y Web App.

Creemos que esto brinda visibilidad de la propuesta de valor de Nexora, capacidades de interacción iniciales y oportunidades tempranas de validación del producto para clientes potenciales y partes interesadas (Validation Interviews).

Esto se confirmará cuando los usuarios puedan acceder a la Landing Page, navegar por las secciones informativas principales, comprender la propuesta de valor central e interactuar con los primeros módulos funcionales de la Aplicación Web Frontend sin problemas críticos de usabilidad o accesibilidad.”

---

### Sprint 2 Velocity

| Sprint Velocity | 200 Story Points |
| --- | --- |


---

### Sum of Story Points

| Sum of Story Points | 195 Story Points |
| --- | --- |


---

## User Stories Included in Sprint 2

| User Story ID | Title | Story Points |
| --- | --- | --- |
| US01 | Acceso rápido a información | 3 |
| US02 | Experiencia intuitiva de navegación | 5 |
| US03 | Adaptabilidad multidispositivo | 5 |
| US09 | Comprensión de beneficios operativos y solución inmobiliaria | 5 |
| US11 | Monitoreo IoT en tiempo real | 8 |
| US12 | Información de aplicación para arrendatarios | 3 |
| US13 | Comprensión de beneficios y automatización inteligente | 3 |
| US33 | Visualización y acceso al panel de alertas recientes | 5 |
| US34 | Visualización del inventario de propiedades con métricas de salud | 8 |
| US35 | Registro de nueva propiedad con vinculación de gateway IoT | 8 |
| US37 | Gestión de vinculación de dispositivos en propiedad | 5 |
| US39 | Registro de nuevo activo IoT | 5 |
| US46 | Gestión de respuesta a incidencia crítica activa | 8 |
| US47 | Exportación de reporte de incidencias | 3 |
| US49 | Visualización del detalle completo de una incidencia crítica | 8 |
| US51 | Activación del protocolo de apagado de emergencia | 3 |
| US52 | Visualización de métricas de consumo del período actual | 5 |
| US53 | Análisis comparativo de consumo por período y tipo de recurso | 5 |
| US57 | Gestión del perfil personal y ubicación de operaciones | 3 |
| US59 | Gestión de alertas de acceso crítico detectado | 3 |
| US60 | Gestión del equipo operativo | 5 |

## Technical Stories Included in Sprint 2

| Technical Story ID | Title | Story Points |
| --- | --- | --- |
| TS07 | API de vinculación y gestión de gateways en propiedad | 5 |
| TS08 | API de gestión de arrendatarios en propiedad | 3 |
| TS09 | API de consulta de la flota de dispositivos | 5 |
| TS11 | API de logs y perfil de hardware de dispositivo | 3 |
| TS12 | API de acciones remotas sobre dispositivo | 5 |
| TS13 | API de consulta y filtrado de alertas | 3 |
| TS14 | API de detalle y actualización de estado de alerta | 3 |
| TS15 | API de asignación de técnicos y personal de emergencia | 5 |
| TS16 | API de acción de apagado de emergencia | 5 |
| TS17 | API de exportación de reporte de incidencias | 3 |
| TS18 | API de métricas de consumo del período activo | 5 |
| TS19 | API de analítica comparativa de consumo | 5 |
| TS21 | API de exportación de reportes de consumo | 3 |
| TS22 | API de gestión del perfil de usuario | 3 |
| TS23 | API de configuración de notificaciones y contactos de emergencia | 3 |
| TS24 | API de configuración de umbrales de sensores | 5 |
| TS-EMB-01 | Inicialización de Hardware, Lectura de Sensores y Consolidación de Payload | 5 |
| TS-EMB-02 | Transmisión de Datos por HTTP y Tolerancia a Fallos de Red Local | 5 |
| TS-EMB-03 | Retroalimentación Visual a través de Actuadores y LEDs de Estado | 3 |
| TS-EMB-04 | Señalización de Disponibilidad mediante Mecanismo de Latido (Heartbeat) | 3 |
| TS-EDGE-01 | API Rest local de Ingesta para Dispositivos IoT | 5 |
| TS-EDGE-02 | Persistencia Perimetral de Datos en Contingencia (Modo Offline) | 5 |
| TS-HW-01 | Ensamblaje Electrónico y Calibración del Sensor de Gas | 3 |
| TS-HW-02 | Ensamblaje del ESP32 con el sensor MQ2 para detección de gases | 3 |
