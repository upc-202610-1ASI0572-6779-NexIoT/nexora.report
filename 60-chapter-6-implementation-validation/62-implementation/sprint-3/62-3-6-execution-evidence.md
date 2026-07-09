#### 6.2.3.6. Execution Evidence for Sprint Review

Durante el Sprint 3, se consolidaron y ampliaron los principales flujos operativos de la **Web Application de Nexora**, cubriendo la supervisión general de la plataforma, administración de propiedades, gestión de dispositivos IoT, seguimiento de alertas, consulta de reportes de consumo y gestión integral de suscripciones.

Los principales logros de ejecución evidenciados para este Sprint incluyen:

* **Dashboard General**: Visualización consolidada del estado de amenazas activas, nivel de gas, dispositivos en línea, gateway de voltaje, tendencias de consumo y alertas recientes.
* **Property Management**: Inventario de propiedades con indicadores generales, búsqueda, filtros, estados, health score y acceso al registro de nuevas propiedades.
* **Device Management**: Monitoreo de la flota de gateways ESP32, incluyendo estado operacional, conectividad, firmware, uptime y acciones de gestión.
* **Alerts Center**: Centro centralizado para monitorear eventos críticos y advertencias pendientes, con indicadores de sensores activos y exportación de reportes de incidentes.
* **Consumption Reports**: Módulo de análisis de consumo y sostenibilidad con costos estimados, comparación temporal de recursos y desglose por propiedad.
* **Subscription Management**: Flujo protegido mediante confirmación de identidad para acceder a información sensible de suscripción y facturación.
* **Billing Management**: Visualización del plan vigente, ciclo de facturación, próxima fecha de cobro, tarjeta guardada e historial de pagos.
* **Payment Method Update**: Formulario modal para actualizar la tarjeta asociada a la suscripción.
* **Plan Selection**: Comparación entre los planes Basic y Plus, mostrando precios, límites y funcionalidades disponibles.
* **Property Registration**: Formulario para registrar nuevas propiedades y configurar su estado inicial de seguridad.
* **Device Registration**: Flujo de registro y vinculación de gateways IoT ESP32 con propiedades de la plataforma.

A continuación, se presentan las capturas de pantalla de la ejecución del sistema:

---

##### 1. Evidencia del Dashboard General

El Dashboard centraliza los principales indicadores operativos del ecosistema IoT y presenta el estado actual de dispositivos, sensores, gateways, alertas y tendencias de consumo.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Dashboard General de Nexora** | Panel principal con amenazas activas, nivel de gas, dispositivos en línea, gateway de voltaje, consumo de recursos, alertas recientes y estado de los sistemas monitoreados. | ![Dashboard General](/assets\chapter-6\implementation\sprint-4\execution1-sprint4-dashboard.png.png) |

---

##### 2. Evidencia de Property Management

El módulo de propiedades permite administrar el inventario inmobiliario asociado a la cuenta del usuario, consultar indicadores generales y acceder al flujo de registro de nuevas propiedades.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Properties Management** | Vista de administración de propiedades con indicadores de total de propiedades, arrendatarios activos, health score, búsqueda, filtros y acciones de gestión. | ![Properties Management](/assets\chapter-6\implementation\sprint-4\execution2-sprint4-properties-management.png.png) |

---

##### 3. Evidencia de Device Management

El módulo de dispositivos permite supervisar la flota de gateways IoT registrados, incluyendo información operacional y técnica relevante para el mantenimiento del sistema.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Devices Management** | Panel de monitoreo de gateways ESP32 con estado operacional, carga, alertas activas, desviación de firmware, ubicación, RSSI Wi-Fi, versión de firmware, uptime y acciones disponibles. | ![Devices Management](/assets\chapter-6\implementation\sprint-4\execution3-sprint4-devices-management.png.png) |

---

##### 4. Evidencia del Alerts Center

El centro de alertas concentra los eventos críticos detectados por el sistema y permite realizar seguimiento de incidencias asociadas a los dispositivos y sensores IoT.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Alerts Center** | Centro de monitoreo con indicadores de alertas críticas activas, advertencias pendientes, sensores en línea, eventos recientes y exportación de reportes de incidentes en PDF. | ![Alerts Center](/assets\chapter-6\implementation\sprint-4\execution4-sprint4-alerts-center.png.png) |

---

##### 5. Evidencia de Consumption Reports

El módulo de reportes permite analizar el comportamiento de los recursos monitoreados y consultar información agregada por propiedad.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Consumption Reports** | Vista de consumo y sostenibilidad con costo estimado, presupuesto mensual, comparación temporal del uso de recursos, selector de periodo, exportación PDF y desglose por propiedad. | ![Consumption Reports](/assets\chapter-6\implementation\sprint-4\execution5-sprint4-consumption-reports.png.png) |

---

##### 6. Evidencia de Protección de Datos de Suscripción

Antes de mostrar información sensible relacionada con la suscripción y facturación, el sistema solicita una nueva validación de identidad mediante contraseña.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Subscription Identity Confirmation** | Pantalla de confirmación de identidad requerida antes de acceder a los detalles sensibles de suscripción y facturación. | ![Subscription Identity Confirmation](/assets\chapter-6\implementation\sprint-4\execution6-sprint4-subscription-authentication.png.png) |

---

##### 7. Evidencia de Subscription Management

Una vez confirmada la identidad, el usuario puede consultar la información detallada de su suscripción, método de pago e historial de facturación.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Subscription Management** | Panel de gestión del plan actual con modalidad de facturación, monto de renovación, estado, fecha de inicio, próximo cobro, tarjeta guardada e historial de pagos. | ![Subscription Management](/assets\chapter-6\implementation\sprint-4\execution7-sprint4-subscription-management.png.png) |

---

##### 8. Evidencia de Actualización del Método de Pago

El sistema incorpora un flujo específico para modificar los datos de la tarjeta asociada a la suscripción.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Update Payment Card** | Ventana modal para actualizar titular, número de tarjeta, mes y año de expiración y código de seguridad del método de pago. | ![Update Payment Card](/assets\chapter-6\implementation\sprint-4\execution8-sprint4-payment-card-update.png.png) |

---

##### 9. Evidencia de Plan Selection

La plataforma dispone de una vista comparativa para seleccionar o cambiar el plan de suscripción según las necesidades operativas del usuario.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Plan Selection** | Comparación entre los planes Basic y Plus, incluyendo precio mensual, límite de propiedades y funcionalidades disponibles en cada alternativa. | ![Plan Selection](/assets\chapter-6\implementation\sprint-4\execution9-sprint4-plan-selection.png.png) |

---

##### 10. Evidencia de Property Registration

El flujo de registro de propiedades permite incorporar nuevos inmuebles al sistema y definir su configuración inicial.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Create Property** | Formulario de registro de propiedades con nombre, tipo, país, ciudad, dirección, descripción y configuración inicial del modo de seguridad. | ![Create Property](/assets\chapter-6\implementation\sprint-4\execution10-sprint4-property-registration.png.png) |

---

##### 11. Evidencia de Device Registration

El flujo de registro de dispositivos permite incorporar nuevos gateways ESP32, identificarlos y asociarlos con una propiedad del sistema.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Register Device** | Formulario de registro de gateway IoT con alias, número de serie, tipo de dispositivo, propiedad asignada, dirección MAC, protocolo de comunicación y opción de aprovisionamiento mediante QR. | ![Register Device](/assets\chapter-6\implementation\sprint-4\execution11-sprint4-device-registration.png.png) |