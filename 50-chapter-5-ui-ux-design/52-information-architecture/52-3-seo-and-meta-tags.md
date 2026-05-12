### 5.2.3. SEO and Meta Tags

La estrategia de **Search Engine Optimization (SEO)** y el uso de **Meta Tags** en Nexora están diseñados para maximizar la visibilidad de la plataforma en motores de búsqueda, atrayendo tanto a propietarios y administradores de fincas como a inquilinos interesados en hogares inteligentes. Dado que Nexora opera en la intersección de la tecnología IoT y el sector inmobiliario (*PropTech*), la estrategia se enfoca en capturar búsquedas transaccionales e informativas relacionadas con la eficiencia operativa y la seguridad residencial.

#### **Estrategia de Palabras Clave (Keywords):**
Se han definido los valores específicos para las etiquetas de metadatos de palabras clave, asegurando que los motores de búsqueda identifiquen correctamente el núcleo de la solución:

```html
<meta name="keywords" content="Nexora, NexIot, IoT property management, smart building, proptech, monitoreo tiempo real, eficiencia energética, seguridad residencial, automatización edificios, control de servicios, gestión de alquileres inteligentes">
```

*   **Principales (Short-tail):** Gestión inmobiliaria IoT, Smart Home para alquileres, Eficiencia energética residencial, Seguridad IoT.
*   **Secundarias (Long-tail):** Monitoreo de fugas de gas en tiempo real, Ahorro de agua en edificios residenciales, Plataforma de gestión de activos inmobiliarios, Automatización de departamentos en alquiler.

#### **Implementación de Metadatos:**
Cada página de la Landing Page de Nexora incluye etiquetas específicas para mejorar el Click-Through Rate (CTR) y la relevancia en los resultados de búsqueda. Se incluye el autor organizacional en todas las páginas.

**Meta Tag de Autor:**
```html
<meta name="author" content="NexIot">
```

| Página | Título SEO (Max 60 caracteres) | Meta Descripción (Max 160 caracteres) |
| :--- | :--- | :--- |
| **Inicio (Home)** | Nexora | Gestión Inteligente y Segura de Propiedades IoT | Optimiza la gestión de tus alquileres con Nexora. Monitoreo en tiempo real, ahorro energético y seguridad avanzada para edificios inteligentes. |
| **Funcionalidades** | Funcionalidades de Nexora | Monitoreo y Automatización IoT | Descubre cómo Nexora previene fugas de gas, optimiza el consumo de servicios y automatiza la seguridad de tus propiedades de manera remota. |
| **Planes y Precios** | Planes Nexora | Inversión Inteligente para tu Inmueble | Encuentra el plan de suscripción SaaS que se adapte a tu portafolio inmobiliario. Desde unidades individuales hasta edificios completos. |
| **Sobre Nosotros** | Sobre Nexora | Innovación en PropTech e IoT | Conocé nuestra misión: cerrar la brecha digital en el sector inmobiliario de Latinoamérica mediante soluciones de conectividad inteligente. |

#### **SEO para WebApp:**
Para la aplicación web (Dashboard), la estrategia se centra en la accesibilidad de los usuarios registrados y la optimización de los estados de la aplicación:

*   **Indexación Controlada:** Se utiliza `noindex, nofollow` en secciones privadas del Dashboard para evitar la exposición de datos sensibles en buscadores, manteniendo indexada únicamente la página de Login y Registro.
*   **Canonical URLs:** Implementación de etiquetas canonical para evitar contenido duplicado entre diferentes estados de los filtros de monitoreo.
*   **PWA Ready:** Configuración de `manifest.json` para que la WebApp sea reconocible como una aplicación instalable, mejorando la retención de usuarios.

#### **App Store Optimization (ASO):**
Para las versiones móviles de Nexora, se han definido los siguientes elementos fundamentales para su posicionamiento en tiendas de aplicaciones (App Store y Play Store):

*   **App Title:** Nexora: Smart IoT Monitoring
*   **App Subtitle:** Gestión de Propiedades y Seguridad IoT.
*   **App Keywords:** IoT, Smart Home, Nexora, NexIot, PropTech, Monitoreo, Seguridad, Ahorro Energético, Edificios Inteligentes.
*   **App Description:** Nexora es la solución integral de IoT diseñada para modernizar la gestión inmobiliaria. Nuestra aplicación permite a propietarios y administradores monitorear consumos de agua y energía, detectar fugas de gas de forma temprana y gestionar la seguridad de sus inmuebles en tiempo real desde cualquier lugar. Transforma tu propiedad en un espacio inteligente y eficiente con Nexora.

#### **Optimización para Redes Sociales (Open Graph & Twitter Cards):**
Para garantizar que el contenido compartido en plataformas como LinkedIn, Twitter o WhatsApp sea visualmente atractivo y coherente, se implementan los siguientes protocolos:
*   **og:title:** Nexora - El futuro de la gestión inmobiliaria inteligente.
*   **og:description:** Protege tu inversión y ofrece una experiencia premium a tus inquilinos con nuestra plataforma IoT.
*   **og:image:** URL de una imagen representativa del dashboard de Nexora (1200x630px).
*   **twitter:card:** summary_large_image.

#### **SEO Técnico:**
*   **Sitemap XML:** Generación automática de un mapa del sitio para facilitar la indexación por parte de Googlebot.
*   **Robots.txt:** Configuración para permitir el rastreo de las páginas públicas y restringir el acceso a las áreas sensibles de la aplicación (Dashboard de Administrador).
*   **Semántica HTML5:** Uso riguroso de etiquetas jerárquicas (H1, H2, H3) y atributos `alt` en imágenes para mejorar la accesibilidad y el rastreo de contenido.

