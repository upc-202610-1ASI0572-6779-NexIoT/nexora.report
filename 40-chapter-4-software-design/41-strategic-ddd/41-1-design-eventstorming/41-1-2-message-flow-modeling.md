#### 4.1.1.2 Domain Message Flows Modeling

En esta sección se visualiza cómo colaboran los bounded contexts identificados para resolver situaciones reales del negocio dentro de Nexora. Para ello, el equipo aplicó la técnica de **Domain Storytelling**, la cual permitió representar de manera secuencial las interacciones entre actores del dominio y módulos del sistema, facilitando la comprensión de cómo fluye la información y cómo se coordinan las responsabilidades del negocio.

Es importante mencionar que, en Nexora estos flujos muestran cómo colaboran los distintos módulos del sistema para resolver situaciones del negocio. Aunque cada bounded context tiene responsabilidades definidas, todos forman parte de una misma aplicación y tabajan de manera coordinada.

Se elaboraron dos diagramas principaes de Domain Storytellin para representar escenarios relevantes del dominio:

### Escenario 1: Respuesta ante Emergencias (Fuga de Agua)
Este flujo representa uno de los casos más importantes de Nexora: la capacidad de detectar una situación crítica a partir de la telemetría recibida y activar una respuesta operativa oportuna para mitigar daños en el inmueble

1. El **Sensor IoT** transmite lecturas de agua en tiempo real al sistema.
2. El módulo **Service Monitoring & Intelligence** recibe y analiza las lecturas de telemetría.
3. El módulo **Service Monitoring & Intelligence** detecta un patrón de fuga y genera una **Alerta Crítica** como parte del proceso interno del sistema.
4. El módulo **Service Execution & Maintenance** toma la alerta generada y crea la atención operativa correspondiente.
5. El sistema envía una **Notificación de Emergencia** al **Arrendador**.
6. El módulo **Service Execution & Maintenance** asigna automáticamente una **Orden de Mantenimiento** al **Técnico**.
7. El **Técnico** reporta la **Reparación Finalizada** al sistema.
8. El módulo **Service Execution & Maintenance** actualiza el estado de la incidencia y registra el nuevo **Estado de la Unidad** con apoyo del módulo **Resource & Asset Management.**

<br>

![Storytelling Fuga de Agua](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/respuesta_emergencias.jpg)
*Nota. Diagrama de Domain Storytelling: Flujo de respuesta ante fugas.*

### Escenario 2: Gestión de Controles y Optimización del Arrendador
Este flujo representa un escenario orientado a la supervisión y toma de decisiones del arrendador, mostrando cómo Nexora facilita el análisis del consumo y la programación de acciones preventivas.

1. El **Arrendador** solicita un **Reporte de Consumo Global** al sistema.
2. El módulo **Service Monitoring & Intelligence** procesa la información histórica y genera una A**nalítica de Desempeño Energético**.
3. El **Arrendador** recibe y revisa los resultados obtenidos.
4. A partir del análisis, el **Arrendador** identifica una unidad con consumo ineficiente.
5. El **Arrendador** solicita un **Mantenimiento Preventivo** a través de la plataforma.
6. El módulo **Service Execution & Maintenance** procesa la solicitud y genera una **Tarea de Inspección** para el **Técnico**.
7. El sistema confirma al **Arrendador** la **Visita Programada**.

<br>

![Storytelling Gestión Arrendador](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/controles_optimizacion_arrendador.jpg)
*Nota. Diagrama de Domain Storytelling: Flujo de gestión y optimización de activos.*

<div style="page-break-after: always;"></div>