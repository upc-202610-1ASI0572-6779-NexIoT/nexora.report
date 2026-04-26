# 2.4. Big Picture EventStorming

En esta sección, el equipo presenta el modelado de nivel general para **Nexora**, con el fin de plantear una aproximación revisada al modelado de nivel general para el dominio del problema. Se busca identificar el mayor nivel de detalle posible en la interacción entre los actores, la plataforma y los dispositivos IoT.

### Descripción de la sesión
La sesión de **Big Picture EventStorming** se organizó con una duración de 1.5 horas, concentrando esfuerzos en mapear el flujo de valor completo. Se utilizó la herramienta **Miro** para el trabajo colaborativo, permitiendo que el equipo identifique de forma visual los eventos clave, las políticas de automatización y los posibles puntos de conflicto o incertidumbre técnica (*Hotspots*).

### Objetivos de la Actividad
* **Descubrimiento del Dominio:** Mapear el ciclo de vida de un inmueble inteligente, desde su registro hasta la gestión de alertas críticas.
* **Alineación Estratégica:** Validar que los eventos de dominio soporten la reducción del 15% al 25% en el consumo energético y la mejora del 40% en tiempos de respuesta ante incidencias.
* **Identificación de Contextos:** Separar las responsabilidades entre la gestión administrativa de la inmobiliaria y el control operativo del inquilino.

### Modelado por Carriles (Swimlanes)

#### Carril 1: Gestión de Inmuebles y Administración
Este carril detalla el flujo administrativo realizado por el arrendario. Incluye el registro de propiedades, la vinculación de hardware IoT y la gestión de técnicos para el mantenimiento, asegurando que la infraestructura esté lista para el inquilino.

<img src="../../assets/chapter-2/big-picture-eventstorming/EventStorming_Arrendadores.jpg">

#### Nota. Flujo para el carril de gestión de inmuebles y administración (Arrendadores)  

#### Carril 2: Monitoreo IoT y Respuesta a Incidencias
Es el núcleo reactivo del sistema. Muestra cómo las lecturas enviadas por los sensores de agua y energía son procesadas por un motor de reglas para detectar anomalías. Ante una detección (como una fuga), el sistema dispara automáticamente una política de notificación y creación de incidencias.

<img src="../../assets/chapter-2/big-picture-eventstorming/EventStorming_IOT.jpg">

#### Nota. Flujo para el carril de monitorio (IOT)  

#### Carril 3: Carril del Inquilino
Este carril detalla el flujo realizado por el inquilino. Incluye datos como el historial de consumo, alertas de consumo y estados de dispositivos.

<img src="../../assets/chapter-2/big-picture-eventstorming/EventStorming_Inquilinos.jpg">

#### Nota. Flujo para el carril del inquilino  
