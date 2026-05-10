#### 5.2.4. Searching Systems

Nexora implementa sistemas de búsqueda diferenciados según el contexto de uso, el volumen de datos y el perfil del usuario en cada plataforma. La decisión de diseño central es no imponer una búsqueda global única, sino ofrecer mecanismos de localización de información adaptados a cada sección, reduciendo la carga cognitiva y el tiempo de localización para todos los segmentos de usuario.

##### Aplicación Móvil

En la aplicación móvil, la búsqueda se implementa de forma contextual y localizada dentro de las secciones que manejan volúmenes variables de elementos.

En la sección **Devices**, cuando el usuario navega hacia la creación de una automatización y llega al paso de selección de dispositivo (Pick a device), el sistema presenta un campo de búsqueda en la parte superior de la lista. Este campo filtra en tiempo real los dispositivos disponibles agrupados por categoría (Lights, Sensors, Actuators) a medida que el usuario escribe, sin necesidad de confirmar la búsqueda con un botón. Esta decisión es crítica para cuentas con múltiples Smart Units que pueden tener decenas de dispositivos registrados, donde el scroll extenso sería ineficiente y propenso a errores de selección.

En la sección **Alerts (Incidents Center)**, el sistema no implementa búsqueda libre por texto dado que el volumen de alertas se gestiona eficientemente mediante tres mecanismos combinados: los contadores de resumen en la parte superior (Critical, Warning, Solved), los tabs de filtrado por estado (All, Active, Solved) y los indicadores de severidad visual (CRITICAL, WARN, INFO) en cada card. Este conjunto permite localizar cualquier alerta relevante en dos interacciones o menos sin necesidad de un campo de búsqueda explícito.

En la sección **Reports**, la localización de datos históricos se realiza mediante el sistema de navegación temporal con pills (Day, Week, Month, Year) que actúa como un buscador acotado en el eje temporal. El usuario puede ubicar cualquier período de consumo en una sola interacción. El selector de categoría (Water / Electricity) añade una segunda dimensión de filtrado que, combinada con la granularidad temporal, cubre el espacio de consultas habitual de un tenant o property manager sin necesidad de formularios de búsqueda avanzada.

En la sección **Home (Dashboard)**, el unit selector en la parte superior de la pantalla funciona como un mecanismo de búsqueda de contexto para property managers que gestionan múltiples unidades. Al seleccionar una unidad diferente, toda la información del dashboard se actualiza para reflejar los datos de consumo, alertas y dispositivos de esa unidad específica. Para cuentas con muchas unidades, este selector implementa un campo de búsqueda por nombre o dirección dentro del propio dropdown.

##### Aplicación Web

La aplicación web de Nexora, orientada principalmente a property managers que gestionan portfolios de múltiples propiedades, requiere sistemas de búsqueda más robustos dado el mayor volumen de datos que estos usuarios manejan desde una pantalla de mayor tamaño.

En el módulo de **gestión de propiedades y unidades**, la web app implementa una barra de búsqueda global dentro de la sección que permite localizar propiedades por nombre, dirección o código de unidad. Los resultados se presentan en tiempo real con filtros laterales persistentes que permiten acotar por estado de la unidad (Active, Inactive), plan de suscripción y rango de consumo. Esta combinación de búsqueda por texto libre con filtros facetados es la más apropiada para portfolios de más de diez unidades donde el scroll no es una estrategia viable.

En el módulo de **reportes y analítica**, la web app ofrece un sistema de búsqueda temporal más granular que la versión móvil, permitiendo seleccionar rangos de fechas personalizados mediante un date range picker. Adicionalmente, el usuario puede buscar y comparar el consumo entre múltiples unidades simultáneamente seleccionándolas desde un selector múltiple, funcionalidad que no está disponible en mobile por restricciones de espacio en pantalla.

En el módulo de **historial de facturación**, la web app implementa búsqueda por número de factura, período de emisión y estado de pago (Paid, Pending, Failed, Refunded). Los resultados se presentan en una tabla paginada con ordenamiento por columna, lo que permite a los administradores de propiedader visualizar el historial financiero de sus cuentas sin necesidad de exportar datos.

En la **gestión de dispositivos e incidentes** desde la web, el sistema implementa búsqueda por nombre de dispositivo, tipo de sensor y ubicación (propiedad y habitación) con filtros combinables. Para el Incidents Center, la web añade un filtro por rango de fechas y por unidad específica que no está disponible en mobile, permitiendo a los property managers revisar el historial de incidentes de una propiedad en particular durante un período definido.

En todos los casos, los resultados de búsqueda vacíos muestran un estado explícito con un mensaje descriptivo y una sugerencia de acción alternativa, evitando pantallas en blanco que generen confusión al usuario.

---