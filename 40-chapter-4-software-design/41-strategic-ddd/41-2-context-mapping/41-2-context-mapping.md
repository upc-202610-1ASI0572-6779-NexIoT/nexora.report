## 4.1.2. Context Mapping

En esta sección, el equipo de Nexora detalla las relaciones estructurales y los niveles de acoplamiento entre los Bounded Contexts identificados. El Context Mapping nos permite definir cómo fluye la información y qué grado de dependencia existe entre los equipos y subsistemas.

### Estrategias de Relación entre Contextos

Para llegar al diseño final, el equipo evaluó la naturaleza de cada interacción basándose en la soberanía de los datos y la necesidad de proteger los modelos core:

*   **Identity & Access Management (Open Host Service - OHS):** Se definió como un servicio abierto ya que todos los demás contextos dependen de él para la autenticación. Implementar una interfaz estandarizada evita que cada contexto tenga que negociar una integración particular.
*   **Service Monitoring a Service Execution (Event-Driven):** La relación es de bajo acoplamiento. El contexto de monitoreo "publica" alertas sin conocer quién las consume, permitiendo que el sistema de mantenimiento sea reactivo.
*   **Service Execution a Resource Management (Anti-Corruption Layer - ACL):** Se decidió implementar una capa anticorrupción para evitar que la lógica operativa de las reparaciones (técnicos, estados de inmuebles, etc) contamine el modelo limpio de los activos físicos e inmuebles.
*   **Resource Management a Subscriptions (Customer/Supplier):** Existe una relación de cliente/proveedor ya que el sistema de pagos necesita métricas de uso precisas del inventario para generar la facturación mensual.

### Análisis de Alternativas y Decisiones de Diseño

Siguiendo el proceso de diseño estratégico, el equipo se planteó las siguientes interrogantes para validar la arquitectura:

*   **¿Qué pasaría si movemos la gestión de dispositivos al contexto de Monitoreo?**
    *   *Decisión:* Se descartó. Aunque el monitoreo usa los dispositivos, el ciclo de vida del activo (compra, registro, baja) es una capacidad administrativa que pertenece a Resource & Asset Management. Mezclarlos sobrecargaría el contexto de Monitoreo.
*   **¿Qué pasaría si el contexto de Ejecución (Mantenimiento) se vuelve un "Conformista" del modelo de Monitoreo?**
    *   *Decisión:* Se descartó. Ser conformista obligaría a que el modelo de gestión de inmuebles dependa directamente de los cambios en el modelo de datos de telemetría. Al usar una comunicación por eventos, permitimos que el sistema de mantenimiento evolucione sus propios conceptos (como prioridades de reparación) de forma independiente a la complejidad técnica de los sensores.
*   **¿Qué pasaría si integramos la facturación dentro de Identity & Access Management?**
    *   *Decisión:* Se descartó. Aunque ambos son contextos genéricos, Identity se encarga de seguridad y autenticación, mientras que Subscriptions maneja la monetización y el modelo SaaS. Mezclarlos violaría el principio de responsabilidad única y complicaría la escalabilidad del modelo de negocio.
*   **¿Qué pasaría si aislamos la analítica en un contexto aparte?**
    *   *Decisión:* Se decidió mantenerla dentro de **Service Monitoring & Intelligence** ya que la detección de patrones de anomalía es la inteligencia intrínseca de la telemetría. Separarlos crearía una latencia innecesaria.

### Diagrama de Context Map

El siguiente diagrama sintetiza las relaciones finales y los patrones de integración adoptados:

![Context Map Nexora](../../../assets/chapter-4/strategic-ddd/context-mapping/context-map.jpg)

