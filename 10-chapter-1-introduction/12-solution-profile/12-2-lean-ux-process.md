### 1.2.2. Lean UX Process
#### 1.2.2.1. Lean UX Problem Statements

El estado actual del mercado de gestión de propiedades en alquiler en América Latina se caracteriza por una alta dependencia de métodos manuales, herramientas fragmentadas y plataformas genéricas no adaptadas, lo que genera ineficiencias operativas y tiempos de respuesta tardíos ante incidencias. Hemos observado que los sistemas y procesos actuales están fallando en optimizar la administración de inmuebles porque no centralizan ni procesan la información de las propiedades en tiempo real. Esto está causando sobrecostos logísticos para los arrendadores y una experiencia deficiente o frustrante para los inquilinos. Podemos abordar este problema permitiendo una gestión automatizada y preventiva de los inmuebles en alquiler, enfocándonos inicialmente en arrendadores independientes y pequeñas administradoras de propiedades en Lima, Perú, que gestionan entre 2 y 20 unidades. Sabremos que hemos tenido éxito cuando observemos las siguientes conductas medibles en nuestra audiencia objetivo:

* **Outcome 1:** Los arrendadores migran y concentran sus operaciones diarias de control en nuestro panel central en lugar de hojas de cálculo o comunicación informal dentro de los primeros 90 días.

* **Outcome 2:** Disminución del tiempo promedio en el que un arrendador atiende y resuelve un reporte de incidencia crítico.

* **Outcome 3:** Los inquilinos interactúan de manera frecuente con la interfaz de su vivienda de forma autónoma durante el primer mes.

* **Outcome 4:** Los arrendadores renuevan su acceso al servicio al término del primer año de operación.

<br>

---

### 1.2.2.2. Lean UX Assumptions

En la fase inicial de desarrollo de la plataforma Nexora, producto de la startup NextIoT, hemos identificado y estructurado una serie de supuestos fundamentales siguiendo los principios de la metodología Lean UX (3rd Edition). Estos supuestos representan nuestras hipótesis iniciales sobre quiénes son nuestros usuarios, qué necesidades buscan resolver, cómo interactuarán con la tecnología IoT, cómo operará el modelo de negocio y qué impacto esperamos generar. Formalizar estas creencias nos permite enfocar el desarrollo del producto en la validación temprana, reducir la incertidumbre y tomar decisiones estratégicas basadas en evidencia.

Los supuestos se clasifican en cinco categorías:

- **User Assumptions:** Creencias sobre las necesidades, comportamientos y motivaciones de propietarios de inmuebles e inquilinos en el contexto de viviendas en alquiler.
- **User Outcome Assumptions:** Beneficios y cambios de comportamiento que esperamos que los usuarios logren al utilizar Nexora.
- **Business Assumptions:** Hipótesis sobre la viabilidad del modelo de negocio híbrido (hardware IoT + SaaS) y su adopción en el mercado inmobiliario.
- **Business Outcome Assumptions:** Resultados medibles que esperamos alcanzar como organización.
- **Feature Assumptions:** Creencias sobre cómo las funcionalidades clave resolverán los problemas identificados y validarán nuestra propuesta de valor.

<br>

**USER ASSUMPTIONS**

- Creemos que los **arrendadores** son propietarios o administradores que gestionan entre 2 y 20 unidades de alquiler, actualmente resuelven incidencias de forma reactiva y manual, y no disponen de ninguna herramienta centralizada para monitorear el estado de sus propiedades en tiempo real.

- Creemos que los **arrendatarios** son inquilinos urbanos de entre 22 y 45 años, habituados al uso de smartphones, que valoran la autonomía sobre su entorno doméstico, pero que actualmente no tienen visibilidad sobre su consumo real de servicios básicos ni control sobre los dispositivos de su vivienda.

- Creemos que el **70% de los arrendadores** no cuenta con un sistema centralizado de seguimiento de incidencias, lo que los obliga a depender de comunicación informal (WhatsApp, llamadas) para coordinar mantenimiento, generando demoras y pérdida de información.

- Creemos que el **60% de los arrendatarios** percibe un gasto innecesario en servicios básicos (agua, electricidad) porque no dispone de herramientas que les entreguen datos comprensibles y accionables sobre su consumo.

- Creemos que tanto arrendadores como arrendatarios **adoptarán la plataforma si el proceso de instalación y onboarding es guiado, visual y completable en menos de 10 minutos**, ya que la resistencia al cambio tecnológico es la principal barrera de adopción en el segmento objetivo.

<br>

**USER OUTCOME ASSUMPTIONS**

- Creemos que si los arrendadores utilizan el dashboard web de Nexora, entonces **reducirán el tiempo de respuesta ante incidencias en al menos un 40%**, al pasar de una gestión reactiva y fragmentada a una centralizada con alertas automáticas.

- Creemos que si los arrendatarios acceden al monitoreo de consumo en tiempo real desde la app móvil, entonces **reducirán su gasto en servicios básicos entre un 15% y un 25%**, al tomar decisiones informadas sobre su uso diario de agua y electricidad.

- Creemos que si los arrendadores cuentan con una plataforma centralizada que reemplaza sus herramientas fragmentadas, entonces **el 70% reportará una mejora significativa en su experiencia de gestión** durante los primeros 90 días de uso activo.

- Creemos que si los arrendatarios pueden controlar dispositivos inteligentes de forma intuitiva desde la app móvil, entonces **el 75% la utilizará diariamente**, incorporándola como parte natural de su rutina en el hogar.

- Creemos que si Nexora proporciona alertas inteligentes ante anomalías detectadas por sensores IoT, entonces los arrendadores **prevendrán al menos el 60% de los incidentes críticos** que actualmente se detectan de forma tardía o accidental.

<br>

**BUSINESS ASSUMPTIONS**

- Creemos que el modelo de negocio de Nexora se sustentará en un **esquema híbrido**: venta o instalación de dispositivos IoT (hardware) + suscripción mensual al software (SaaS), combinando ingresos por implementación inicial con ingresos recurrentes y escalables.

- Creemos que el **60% de los ingresos** provendrá de suscripciones recurrentes y el 40% restante de la implementación inicial de dispositivos, lo que garantiza estabilidad financiera desde el primer año.

- Creemos que al menos el **50% de los arrendadores contactados** estará dispuesto a pagar una suscripción mensual si durante el proceso comercial se demuestra de forma tangible el ahorro operativo y el mayor control sobre sus propiedades.

- Creemos que **establecer alianzas con inmobiliarias y administradoras de edificios** en Lima permitirá acelerar la adquisición de clientes, facilitando el acceso simultáneo a múltiples propiedades desde el primer contacto comercial y reduciendo el costo de adquisición por cliente (CAC).

- Creemos que el mercado de propiedades en alquiler en Perú representa una **oportunidad de crecimiento sostenido**, dado que la penetración actual de soluciones IoT integradas en el segmento residencial de alquiler es menor al 5% en América Latina.

<br>

**BUSINESS OUTCOME ASSUMPTIONS**

- Creemos que si Nexora logra una adopción efectiva, entonces **alcanzará una tasa de retención del 70% en el primer año**, impulsada por el valor continuo que genera el monitoreo en tiempo real y la automatización de procesos repetitivos.

- Creemos que si la plataforma ofrece una experiencia de usuario intuitiva y un onboarding guiado, entonces **reduciremos los costos de soporte técnico en un 25%** al minimizar errores de configuración y consultas recurrentes durante los primeros meses.

- Creemos que si se implementa correctamente el modelo SaaS con facturación recurrente, entonces **se generará un flujo de ingresos predecible y escalable** que permitirá financiar la expansión a nuevas ciudades a partir del segundo año de operaciones.

- Creemos que si se establecen alianzas estratégicas con inmobiliarias y administradoras, entonces **se reducirá el CAC en un 20%** respecto al canal de adquisición directa, al aprovechar la confianza y la red de contactos de esos socios.

- Creemos que si los usuarios perciben ahorros concretos y medibles en sus servicios básicos, entonces **aumentará orgánicamente la disposición a pagar y el número de referidos**, reduciendo la dependencia de canales de adquisición pagados.

<br>

**FEATURE ASSUMPTIONS**

- Creemos que un **dashboard web multi-propiedad para arrendadores** con visualización en tiempo real del estado operativo de todas sus unidades logrará que el **80% de los arrendadores activos lo adopte como herramienta principal de gestión** en los primeros 60 días tras el onboarding.

- Creemos que una **aplicación móvil para arrendatarios** que centraliza el control de dispositivos IoT (iluminación, sensores, consumo) logrará que el **75% la utilice diariamente**, convirtiéndola en la interfaz principal de su experiencia doméstica.

- Creemos que la **funcionalidad de monitoreo de consumo** (agua y energía eléctrica) con historial, comparativas y proyecciones permitirá a los usuarios tomar decisiones informadas que se traducirán en una reducción observable del gasto en servicios dentro del primer trimestre de uso.

- Creemos que el **sistema de alertas inteligentes configurables** ante anomalías detectadas por sensores IoT (fugas, accesos no autorizados, consumo inusual) logrará que el **60% de los arrendadores configure al menos una alerta personalizada** durante el proceso de onboarding.

- Creemos que el **módulo de gestión de incidencias** (registro, asignación, seguimiento y cierre) permitirá a los arrendadores reducir el tiempo promedio de resolución de problemas y mejorar la satisfacción del inquilino, al reemplazar la comunicación informal por un flujo estructurado y trazable.

- Creemos que la **compatibilidad con dispositivos IoT estándar** (Wi-Fi, Zigbee, MQTT) y un flujo de configuración guiado paso a paso lograrán que el **70% de los nuevos usuarios conecte al menos un dispositivo en la primera semana** de uso activo.

- Creemos que una **landing page orientada a conversión** con propuesta de valor segmentada por tipo de usuario (arrendador / arrendatario), casos de uso reales y llamados a la acción claros logrará una **tasa de conversión del 20%** de visitantes a usuarios registrados durante la etapa de lanzamiento.

- Creemos que los **reportes analíticos periódicos** (semanales y mensuales) sobre consumo, incidencias activas y estado de dispositivos permitirán a los arrendadores tomar decisiones de mantenimiento preventivo, contribuyendo a una reducción sostenida de costos operativos a lo largo del tiempo.

<br>

---

### 1.2.2.3. Lean UX Hypothesis Statements

> *We believe we will achieve **[this business outcome]** If **[these personas]** Attain **[this benefit/user outcome]** With **[this feature or solution]***

<br>

* **Hipótesis 1 (Focalizada en Adopción)**
Creemos que lograremos **una tasa de adopción del 60% entre los arrendadores onboardeados dentro de los primeros 90 días** si los **arrendadores independientes y pequeñas administradoras** logran **una visibilidad centralizada y en tiempo real del estado de todas sus unidades de alquiler desde un único lugar** con el **dashboard web multi-propiedad**.

* **Hipótesis 2 (Focalizada en Respuesta a Incidencias)**
Creemos que lograremos **una reducción del 40% en el tiempo promedio de respuesta ante incidencias reportadas** si los **arrendadores independientes y pequeñas administradoras** logran **enterarse de forma inmediata y automatizada sobre cualquier anomalía crítica** con el **sistema de alertas inteligentes en tiempo real**.

* **Hipótesis 3 (Focalizada en Retención de Inquilinos)**
Creemos que lograremos **una retención del 70% de arrendatarios activos al término del primer año** si los **arrendatarios (inquilinos urbanos)** logran **reducir su gasto mensual en servicios básicos mediante decisiones de uso informadas** con la **aplicación móvil de monitoreo de consumo en tiempo real con historial y comparativas**.

* **Hipótesis 4 (Focalizada en Costos Operativos)**
Creemos que lograremos **una reducción del 25% en los costos operativos de gestión inmobiliaria** si los **arrendadores independientes** logran **coordinar, asignar y cerrar solicitudes de mantenimiento bajo un flujo estructurado y trazable** con el **módulo de gestión de incidencias integrado en la plataforma web**.

* **Hipótesis 5 (Focalizada en Conversión)**
Creemos que lograremos **una tasa de conversión del 20% de visitantes a usuarios registrados** si los **arrendadores en etapa de evaluación** logran **comprender el ahorro operativo y el control tangible del producto en su operación diaria frente a sus métodos actuales** con una **landing page optimizada con propuesta de valor segmentada y casos de uso reales**.

* **Hipótesis 6 (Focalizada en Interacción Diaria)**
Creemos que lograremos **que el 75% de los arrendatarios utilice la aplicación móvil diariamente durante el primer mes** si los **arrendatarios (inquilinos urbanos)** logran **controlar los dispositivos inteligentes de su hogar de forma sencilla y en un solo toque** con la **interfaz móvil de automatización residencial**.

* **Hipótesis 7 (Focalizada en Incidentes Críticos)**
Creemos que lograremos **una reducción del 20% en incidentes críticos no detectados oportunamente** si los **arrendadores independientes** logran **recibir notificaciones contextualizadas según el tipo de riesgo y propiedad** con el **panel de configuración de umbrales para alertas inteligentes**.

* **Hipótesis 8 (Focalizada en Reducción de Soporte Técnico)**
Creemos que lograremos **una disminución del 25% en consultas al soporte técnico durante los primeros seis meses** si los **arrendadores y arrendatarios** logran **completar el enlace y configuración del hardware de forma autónoma desde la primera sesión** con **tooltips contextuales y tutoriales interactivos integrados en la interfaz**.

* **Hipótesis 9 (Focalizada en la Gestión Multi-propiedad)**
Creemos que lograremos **una mejora del 30% en la eficiencia de gestión de carteras inmobiliarias** si los **arrendadores que administran tres o más propiedades simultáneamente** logran **revisar el rendimiento agregado mediante un resumen ejecutivo exportable y filtros analíticos** con el **dashboard web multi-propiedad**.

* **Hipótesis 10 (Focalizada en Eficiencia Energética)**
Creemos que lograremos **una reducción del 20% en el consumo energético promedio de las propiedades** si los **arrendatarios (inquilinos urbanos)** logran **identificar patrones ineficientes en su rutina doméstica mediante recomendaciones personalizadas de ahorro** con los **reportes analíticos periódicos enviados a la aplicación móvil**.

<br>

---

### 1.2.2.4. Lean UX Canvas

![Lean UX Canvas](../../assets/chapter-1/lean-ux-canvas/lean-ux-canvas-nexora.jpg)

<div style="page-break-after: always;"></div>