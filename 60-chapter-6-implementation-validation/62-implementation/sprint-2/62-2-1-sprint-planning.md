### 6.2.2. Sprint 2
#### 6.2.2.1. Sprint Planning 2

## Introducción

El Sprint Planning 2 marca la consolidación operativa y la expansión del ecosistema digital e IoT de Nexora. Tras haber cimentado las bases estructurales en el ciclo previo, este Sprint se planificó con el objetivo de dotar de dinamismo real a las plataformas, integrando el Frontend con servicios del Backend, desplegando las primeras arquitecturas de servicios perimetrales (Edge) e introduciendo la primera iteración de la aplicación móvil para arrendatarios.

El enfoque de este Sprint se dividió en cinco frentes estratégicos altamente interconectados. En primer lugar, el cierre definitivo de la Landing Page comercial incorporando la nueva estructura de monetización (Planes Basic y Professional), optimizaciones de SEO, y mejoras en diferentes secciones de la misma. En segundo lugar, la evolución de la Web Application para arrendadores, habilitando la autenticación real, la gestión completa de propiedades y la pasarela de suscripciones vinculada al Backend. En tercer lugar, el despliegue de la Mobile Application operando sobre datos emulados para validar flujos de experiencia de usuario. En cuarto lugar, la estabilización de los servicios de Backend, Edge Services y sistemas embebidos para la ingesta incipiente de telemetría física. Finalmente, el inicio del proceso de validación empírica mediante entrevistas con usuarios reales interactuando con el ecosistema.

Durante esta sesión de planificación, el equipo técnico y de producto estimó el esfuerzo del Backlog seleccionado, definió el Sprint Goal e identificó las dependencias críticas de integración de datos para asegurar el éxito del incremento.

---

## Sprint Planning Meeting Summary

| Sprint 2 | Multi-Platform Integration & IoT Enablement |
| --- | --- |
| Sprint Planning Background | Consolidación del ecosistema Nexora mediante la integración completa de datos reales en la web app, el lanzamiento de la primera versión móvil con FakeAPI, el despliegue de la API/Edge Services y el cierre comercial de la Landing Page. |
| Date | 2026-05-19 |
| Time | 19:00 PM |
| Location | Reunión virtual desarrollada mediante Google Meet y coordinación colaborativa mediante Discord |
| Prepared By | Jhosep Argomedo |
| Attendees (to planning meeting) | Argomedo, Jhosep; Castañeda, Kevin; Linares, Jorge; Muñoz, Mauricio; O'higgins, Andrea; Peña, Maria; Ramirez, Sebastian |
| Sprint 1 Review Summary | El Sprint 1 concluyó con éxito la maquetación base de la Landing Page y las vistas estáticas del Frontend Web. Se identificó la necesidad de transicionar inmediatamente de componentes estáticos a un flujo de datos dinámico provisto por servicios del lado del servidor. |
| Sprint 0 Retrospective Summary | El equipo destacó la excelente velocidad de maquetación de interfaces, pero señaló como punto de mejora la temprana definición de contratos de API (JSON schemas) para evitar desajustes durante las integraciones de fin de ciclo entre Frontend y Backend. |

---

## Sprint Goal & User Stories

### Sprint 2 Goal

“Our focus is on delivering a fully integrated multi-platform experience by finalizing the commercial Landing Page, enabling real-world database interactions within the Web Application, launching the initial Mobile MVP, deploying stable API and Edge services, and executing the first round of user validation interviews.

We believe it delivers a cohesive, data-driven system that accurately demonstrates Nexora's value proposition across web, mobile, and initial IoT telemetry, bridging the gap between hardware simulation and software interface.

This will be confirmed when:

Users navigate the 100% complete Landing Page, exploring upgraded plans, metadata, and testimonials.

Landlords can successfully register, log in, manage subscriptions, update profiles, and manage properties with real, persistent database operations, receiving initial voltage telemetry.

Tenants interact seamlessly with all UI modules of the Mobile Application via a simulated data layer.

Edge Services and Embedded applications successfully ingest actual gas sensor signals and simulate resource consumption data.

Qualitative insights are gathered from active validation interviews using both platforms.”

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

<div style="page-break-after: always;"></div>