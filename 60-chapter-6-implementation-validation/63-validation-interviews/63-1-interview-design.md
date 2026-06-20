## 6.3.1. Diseño de las Guías de Entrevistas de Validación

Esta sección establece la guía metodológica y de diseño que el equipo de desarrollo sigue durante las sesiones de entrevista de validación con los usuarios de los segmentos objetivos del proyecto **Nexora**. La estructura asegura un proceso uniforme y profesional para recopilar retroalimentación cualitativa sobre la solución IoT propuesta.

---

### 1. Datos del Entrevistado

Antes de dar inicio a la sesión de interacción, es obligatorio registrar la siguiente información demográfica de cada participante para contextualizar su perfil dentro del segmento objetivo:

* **Nombres:** `[Nombres del Entrevistado]`
* **Apellidos:** `[Apellidos del Entrevistado]`
* **Edad:** `[Edad]`
* **Distrito de Residencia:** `[Distrito / Ciudad]`
* **Segmento Objetivo:** `[Arrendador (Landlord) / Arrendatario (Tenant)]`

---

### 2. Proceso de la Entrevista de Validación

La sesión de validación con el usuario debe seguir rigurosamente los siguientes tres pasos:

#### **Paso 1: Presentación (Duración estimada: 1-2 minutos)**
* **Objetivo:** Establecer confianza con el entrevistado, explicar la dinámica y solicitar el consentimiento para grabar la sesión con fines de análisis de usabilidad.
* **Guion de guía:**
  > *"Hola, mi nombre es [Nombre del Entrevistador] y formo parte del equipo de desarrollo de Nexora. Te agradecemos mucho por tu tiempo hoy. El propósito de esta sesión es presentarte una solución tecnológica que hemos desarrollado y observar cómo interactúas con ella para identificar mejoras de diseño, usabilidad y valor. No evaluamos tus habilidades, sino el diseño de nuestra aplicación. ¿Nos das tu consentimiento para grabar la pantalla y tu voz únicamente con propósitos académicos y de optimización de la experiencia?"*

#### **Paso 2: Información de la Startup (Duración estimada: 2-3 minutos)**
* **Objetivo:** Introducir la propuesta de valor y el concepto detrás de la startup Nexora para alinear la expectativa del usuario.
* **Guion de guía:**
  > *"Nexora es una startup enfocada en brindar tranquilidad y automatización en la gestión de propiedades en alquiler mediante tecnología IoT. Ayudamos a los arrendadores a monitorear consumos críticos en tiempo real (agua, gas y electricidad), detectar riesgos de seguridad (como intrusiones o fugas de gas) y gestionar de manera ágil el estado de sus propiedades y la comunicación con sus inquilinos. A través de sensores de hardware y una plataforma digital, centralizamos la información para evitar pérdidas económicas y accidentes domésticos."*

#### **Paso 3: Presentación de los Productos (Duración de interacción: 5-7 minutos)**
El entrevistador guiará al usuario para que interactúe con los dos productos principales de la solución:

1. **Landing Page (`nexora.website`):**
   * El usuario revisará la página web de cara al público, evaluando si el mensaje, el equipo, los planes de precios y los testimonios son claros y persuasivos.
2. **Aplicación Seleccionada**
   * El usuario interactuará con la plataforma correspondiente (WebApp o MobileApp). A través de flujos de uso reales, se evaluará la facilidad para gestionar sus propiedades, añadir inquilinos, monitorear alertas críticas en tiempo real (como fluctuaciones de voltaje o presencia no autorizada) y descargar reportes dinámicos de consumo.

---

### 3. Elementos a Incluir en la Sesión de Validación por Segmento

El equipo define qué componentes y flujos de usuario se deben evaluar con base en las necesidades específicas de cada segmento objetivo.

#### **Segmento A: Arrendadores (Landlords - Propietarios de Inmuebles)**
Es el segmento principal de administración y monitoreo. Se valida la interacción completa con:
* **Landing Page:** Comprensión de los beneficios de seguridad IoT, navegación al equipo e información de soporte/FAQ.
* **Web Application:** Panel de administración, ingreso de propiedades, registro de inquilinos, panel de telemetría en tiempo real y flujo de gestión de tickets de mantenimiento ante alarmas generadas.

#### **Segmento B: Arrendatarios (Tenants - Inquilinos de Inmuebles)**
Es el segmento de consumo. Se valida:
* **Landing Page:** Comprensión de cómo el ecosistema de sensores Nexora los protege contra accidentes (fugas de gas o cortocircuitos) y asegura la transparencia en la facturación de consumos.
* **Mobile Application:** Acceso simplificado para visualizar consumos históricos asignados a su propiedad.

---

### 4. User Flows Establecidos para la Validación

Durante la evaluación de los productos, se solicita al usuario realizar las siguientes tareas específicas (User Flows), permitiendo observar su comportamiento, dificultades de navegación y nivel de satisfacción:

#### **User Flow 1: Interacción en la Landing Page (nexora.website)**
* **Objetivo:** Evaluar la claridad de la propuesta comercial, la transparencia de los servicios y la facilidad de navegación general.
* **Pasos del flujo:**
  1. El usuario navega en la página principal para conocer los beneficios del sistema inteligente de monitoreo.
  2. El usuario accede a la sección "About Us" para visualizar el video del equipo e interactuar con el widget del staff.
  3. El usuario revisa los planes de suscripción disponibles y la sección de testimonios de otros arrendadores y arrendatarios.
  4. El usuario localiza la sección de FAQ (Preguntas Frecuentes) a través del enlace del footer para resolver dudas sobre el hardware IoT y el soporte.

#### **User Flow 2: Administración y Monitoreo en la Web Application**
* **Objetivo:** Validar la usabilidad de las herramientas operativas de administración y respuesta rápida ante alarmas domésticas.
* **Pasos del flujo:**
  1. **Inicio de Sesión:** El arrendador inicia sesión en la plataforma e ingresa al panel principal usando credenciales de prueba.
  2. **Registro de Recursos:** El usuario registra una nueva propiedad de prueba (tipo, dirección, modo de seguridad armado/desarmado) y procede a crear y vincular un registro de inquilino para la misma.
  3. **Visualización de Telemetría:** El usuario navega al módulo de telemetría para monitorear el consumo de agua, gas, electricidad y el estado del voltaje del inmueble.
  4. **Gestión de Alertas y Mantenimiento:**
     * Ante una alerta de criticidad alta (ej. fuga de gas o sobrecorriente detectada), el usuario localiza el módulo de alertas.
     * El usuario visualiza el detalle de la alerta y los últimos 10 logs de telemetría previos para analizar el contexto.
     * Crea un ticket de mantenimiento asignándolo a un técnico.
     * Marca el ticket como resuelto una vez simulada la reparación.
  5. **Exportación de Evidencia:** El usuario genera y descarga el reporte en formato PDF/Excel con el historial de alertas y telemetría de la propiedad evaluada.
