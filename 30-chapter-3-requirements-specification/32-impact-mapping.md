## 3.2. Impact Mapping

### Explicación Metodológica del Artefacto
Para alinear los esfuerzos de desarrollo de software con los objetivos comerciales de Nexora, el equipo diseñó una estructura de Impact Mapping dividida por cada segmento objetivo. Este mapa estratégico permite responder de manera jerárquica a cuatro preguntas fundamentales del negocio digital:
1. **Goal (¿Por qué?):** El objetivo estratégico SMART del negocio que se pretende alcanzar.
2. **Actor (¿Quién?):** Los arquetipos de usuario previamente identificados (Valeria Torres y Carlos Mendoza) que tienen la capacidad de influir en el éxito del objetivo.
3. **Impact (¿Cómo?):** El cambio de comportamiento o acción específica que deseamos provocar en el actor.
4. **Deliverables (¿Qué?):** Las soluciones o epics del producto digital que detonarán dicho impacto.
5. **User Stories (¿De qué manera?):** Las micro-funcionalidades detalladas bajo la sintaxis estricta corporativa que darán vida a los entregables.

---

### Desglose y Validación de Business Goals (Criterios SMART)
El mapa de impactos se gobierna bajo los siguientes objetivos de negocio, estructurados para garantizar viabilidad y medición dentro de la plataforma:

* **Business Goal 1 (Segmento Arrendador):** "Reducir en un 25% el tiempo promedio de reporte y resolución de incidencias logísticas en propiedades administradas durante los primeros 6 meses tras el despliegue en Lima Metropolitana."
    * *Sustento SMART:* Es **Específico** (mide reporte de incidencias), **Medible** (reducción del 25%), **Alcanzable** (mediante automatización IoT), **Relevante** (ataca el principal dolor de Carlos Mendoza) y tiene un **Tiempo** límite (6 meses).
* **Business Goal 2 (Segmento Arrendatario):** "Alcanzar 1,500 descargas activas de la aplicación móvil y retener al 70% de los usuarios inquilinos registrados en un lapso de 8 meses."
    * *Sustento SMART:* Es **Específico** (descargas y retención de inquilinos), **Medible** (1,500 usuarios / 70% retención), **Alcanzable** (mercado potencial de Lima Metropolitana), **Relevante** (valida la adopción por parte de Valeria Torres) y posee un **Tiempo** acotado (8 meses).

---

### Detalle de User Stories (Historias de Usuario del Mapa)
Para dar soporte técnico a los entregables de última milla visualizados en los diagramas de impacto, se estructuraron las siguientes historias de usuario bajo el formato normativo:

#### Historias del Segmento Arrendador (Carlos Mendoza)
* **Panel Centralizado de Propiedades:** Como Administrador Inmobiliario, deseo un dashboard unificado de control para visualizar el estado operativo en tiempo real de múltiples inmuebles en paralelo sin tener que trasladarme físicamente.
* **Asignación Automática de Mantenimiento:** Como Administrador Inmobiliario, deseo despachar órdenes de servicio pre-llenadas a técnicos validados para reducir el tiempo de coordinación informal por canales fragmentados como WhatsApp.

#### Historias del Segmento Arrendatario (Valeria Torres)
* **Configuración de Alertas de Consumo:** Como Inquilina, deseo parametrizar umbrales de consumo de agua y luz en la aplicación móvil para recibir notificaciones push en tiempo real antes de que mi recibo mensual sufra un sobrecosto imprevisto.
* **Visualización de Gráficas de Telemetría:** Como Inquilina, deseo ver gráficos interactivos de consumo diario proyectado para abandonar el registro manual e impreciso en hojas de cálculo de Excel.

---

### Capturas del Impact Mapping del Modelo de Negocio

#### Impact Mapping - Segmento Arrendador (Carlos Mendoza)
A continuación, se presenta la ramificación estratégica orientada a optimizar la eficiencia operativa del administrador inmobiliario independiente:

![Impact Mapping - Segmento Arrendador](/assets/chapter-3/impact-mapping/impact_map_arrendador.png)

#### Impact Mapping - Segmento Inquilino (Valeria Torres)
A continuación, se presenta la ramificación estratégica orientada a mitigar los sobrecostos y potenciar la tranquilidad de la habitabilidad del arrendatario:

![Impact Mapping - Segmento Inquilino](/assets/chapter-3/impact-mapping/impact_map_inquilino.png)