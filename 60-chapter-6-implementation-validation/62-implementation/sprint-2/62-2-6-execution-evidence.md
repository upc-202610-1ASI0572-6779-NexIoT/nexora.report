#### 6.2.2.6. Execution Evidence for Sprint Review

Durante el Sprint 2, se consolidó la integración de datos y el flujo de comunicación entre todos los componentes del sistema (Embedded App, Edge Service, Web Service y las aplicaciones frontend Web y Móvil). Los logros principales de ejecución para este Sprint incluyen:

* **Web Application**: Visualización de telemetría de sensores IoT en tiempo real mediante widgets y gráficos interactivos, centro de alertas críticas y flujos CRUD de administración inmobiliaria.
* **Mobile Application (Prototipo)**: Pantallas de login, estados de la propiedad y visualización de notificaciones del arrendatario.
* **Web Service (Backend API)**: Implementación de la versión 1 (`/api/v1/`) de los endpoints documentados en Swagger y generación de reportes PDF de alertas.
* **Edge Service**: Capacidad de ingesta de telemetría local de gases/voltaje y almacenamiento temporal offline mediante base de datos SQLite.

A continuación, se presentan las capturas de pantalla de la ejecución del sistema:

---

##### 1. Evidencia de la Web Application & Landing Page
* **Landing Page de Nexora**: Sección final comercial responsiva.
* **Dashboard y Telemetría**: Gráficos dinámicos de consumo del periodo actual.
* **Flujo de Suscripción**: Catálogo y checkout para arrendadores.

| Vista | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Login / Acceso** | Interfaz de inicio de sesión seguro en el frontend. | ![Login](../../../assets/chapter-6/implementation/sprint-2/execution-web-login.png) |
| **Dashboard y Consumos** | Panel de telemetría dinámico de agua, gas y electricidad. | ![Dashboard](../../../assets/chapter-6/implementation/sprint-2/execution-web-dashboard.png) |
| **Propiedades y Gateways** | Registro de propiedades y asociación física de Gateways. | ![Properties](../../../assets/chapter-6/implementation/sprint-2/execution-web-properties.png) |
| **Alertas e Incidentes** | Vista de alertas críticas en vivo (fugas de gas e intrusiones). | ![Alerts](../../../assets/chapter-6/implementation/sprint-2/execution-web-alerts.png) |

---

##### 2. Evidencia de la Mobile Application (Flutter)
Evidencia del prototipo en desarrollo ejecutándose sobre el emulador o Chrome:

| Vista Móvil | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Login Móvil** | Pantalla de inicio de sesión dirigida a inquilinos y arrendadores. | ![Login Mobile](../../../assets/chapter-6/implementation/sprint-2/execution-mobile-login.png) |
| **Dashboard del Residente** | Widget resumen de consumo y estado de seguridad de la vivienda. | ![Dashboard Mobile](../../../assets/chapter-6/implementation/sprint-2/execution-mobile-dashboard.png) |

---

##### 3. Evidencia del Backend & Swagger API
* Documentación en vivo interactiva y autorizada mediante Swagger UI en `http://localhost:5001/swagger`.

| Módulo Backend | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Documentación OpenAPI** | Relación de endpoints del monolito modular RESTful. | ![Swagger Backend](../../../assets/chapter-6/implementation/sprint-2/execution-backend-swagger.png) |

---

##### 4. Evidencia del Edge Service (Gateway IoT)
* Consola local de ejecución de Python (`app.py`) demostrando la ingesta y persistencia SQLite offline de las tramas enviadas por los sensores.

| Servicio Edge | Descripción | Captura de Pantalla |
| :--- | :--- | :--- |
| **Consola del Gateway** | logs de tramas recibidas y guardadas localmente. | ![Edge Service Console](../../../assets/chapter-6/implementation/sprint-2/execution-edge-console.png) |

---

##### Video de Demostración del Sprint 2

En el siguiente enlace se presenta el recorrido interactivo de navegación por las interfaces web y móvil, demostrando el flujo completo de telemetría (Dispositivo -> Edge -> Web Service -> Dashboard Frontend):

**Enlace al Video:** [Video de Ejecución - Sprint 2](TU_ENLACE_DE_ONEDRIVE_O_YOUTUBE_AQUI)
