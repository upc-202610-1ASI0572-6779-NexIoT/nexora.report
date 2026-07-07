### 6.2.3. Sprint 3
#### 6.2.3.1. Sprint Planning 3

## Introducción

El objetivo de este tercer y último Sprint es completar todos los entregables y soluciones propuestas para el curso y el proyecto. El equipo se centrará mayormente en la finalización de productos clave como la App Web y la Mobile App, así como también en la realización de mejoras críticas en el Web Service, Landing Page y Edge Service. Este sprint está planificado para abarcar diversos aspectos de las soluciones, desde la implementación de nuevas funcionalidades hasta la optimización de las existentes.Se proyecta finalizar con éxito la aplicación web, conectándola con una pasarela de pagos, el sistema de gestión de accesos e identidad (IAM) y las funcionalidades core del negocio (alertas, gestión de propiedades, dispositivos, métricas y reportes). Por otra parte, se avanzará con el desarrollo de la aplicación móvil dirigida a arrendatarios, implementando componentes como la visualización del dashboard móvil de métricas de consumo, el panel de incidentes y alertas, y la gestión de métodos de pago. Asimismo, se trabajará en la mejora del Web Service mediante la optimización de endpoints para que sean RESTful y la integración de la API de procesamiento de webhooks de Stripe. Finalmente, se realizarán mejoras en el Edge Service y la Embedded App, implementando la selección dinámica de transporte HTTP/HTTPS para telemetría, la calibración del sensor de caudal a 50 LPM y la mitigación de ruido analógico.

---

## Sprint Planning Meeting Summary

| Sprint 3 | TÍTULO DEL SPRINT |
| --- | --- |
| Sprint Planning Background | Planificación orientada a culminar e integrar todos los entregables, módulos de software y soluciones de hardware propuestas para el cierre del proyecto. |
| Date | 2026-06-22 |
| Time | 19:00 PM |
| Location | Reunión virtual desarrollada mediante Google Meet y coordinación colaborativa mediante Discord |
| Prepared By | Jhosep Argomedo |
| Attendees (to planning meeting) | Argomedo, Jhosep; Castañeda, Kevin; Linares, Jorge; Muñoz, Mauricio; O'higgins, Andrea; Peña, Maria; Ramirez, Sebastian |
| Sprint 2 Review Summary | Se concluyó el sprint 2, con nuevos avances y funcionalidades desarrolladas.  |
| Sprint 2 Retrospective Summary | Se realizó la retrospectiva del sprint 2 y a partir del feedback, procedimos a realizar mejora continua de diversos puntos de las soluciones y de nuestro reporte. |

---

## Sprint Goal & User Stories

### Sprint 3 Goal

Culminar e integrar el ecosistema de la plataforma mediante la implementación de pagos seguros con Stripe, la autenticación multitenant, el despliegue de la aplicación móvil para inquilinos y la optimización de la telemetría en los dispositivos IoT.

---

### Sprint 3 Velocity

| Sprint Velocity | 168 Story Points |
| --- | --- |

---

### Sum of Story Points

| Sum of Story Points | 168 Story Points |
| --- | --- |

---

## User Stories Included in Sprint 3

| User Story ID | Title | Story Points |
| --- | --- | --- |
| US78 | Configuración asistida de automatizaciones | 8 |
| US80 | Suscripción premium y pagos con Stripe | 8 |
| US26 | Autenticación de usuarios | 5 |
| US42 | Reinicio y calibración de dispositivos remotos | 5 |
| US65 | Procesamiento y confirmación de pago de suscripción | 5 |
| US69 | Gestión de métodos de pago registrados en la cuenta | 5 |
| US71 | Proceso de pago seguro para activación de suscripción | 5 |
| US73 | Inicio de sesión seguro en la app móvil | 5 |
| US74 | Registro de nuevos usuarios en la plataforma móvil | 5 |
| US76 | Visualización del dashboard móvil de propiedades | 5 |
| US77 | Panel móvil de incidentes y alertas | 5 |
| US79 | Reportes de consumo en la app móvil | 5 |
| US81 | Gestión y configuración de alertas por consumo elevado | 5 |
| US38 | Visualización del listado general de dispositivos | 3 |
| US41 | Consulta de logs de eventos técnicos del dispositivo | 3 |
| US61 | Visualización de planes de suscripción comercial | 3 |
| US66 | Visualización del historial de facturación de la cuenta | 3 |
| US67 | Descarga de comprobantes de pago en PDF | 3 |
| US70 | Visualización del plan de suscripción activo y límites de uso | 3 |
| US75 | Edición de perfil de inquilino y ajustes | 3 |
| US64 | Ingreso de datos de facturación e información del titular | 2 |

## Technical Stories Included in Sprint 3

| Technical Story ID | Title | Story Points |
| --- | --- | --- |
| TS30 | Lógica de alerta de fuga de agua y consumo excesivo | 8 |
| TS01 | API de autenticación con credenciales y validación de plataforma | 5 |
| TS04 | API de validación de sesión, 2FA y filtro de autorización personalizado | 5 |
| TS05 | API de consulta y registro con aislamiento multitenant | 5 |
| TS06 | API de edición, eliminación e intento de acceso a propiedad ajena | 5 |
| TS10 | API de detalle y telemetría de dispositivo individual | 5 |
| TS12 | API de acciones remotas sobre dispositivo | 5 |
| TS26 | API de consulta y actualización de suscripción | 5 |
| TS28 | API de gestión de métodos de pago y procesamiento de checkout | 5 |
| TS29 | API de registro de nuevo dispositivo IoT | 5 |
| TS31 | API de procesamiento de webhook de Stripe para pagos | 5 |
| TS-EMB-05 | Selección dinámica de transporte HTTP/HTTPS para telemetría | 5 |
| TS-EMB-06 | Sensor de caudal a 50 LPM y mitigación de ruido analógico | 5 |
| TS11 | API de logs y perfil de hardware de dispositivo | 3 |
| TS27 | API de historial de facturación y comprobantes | 3 |