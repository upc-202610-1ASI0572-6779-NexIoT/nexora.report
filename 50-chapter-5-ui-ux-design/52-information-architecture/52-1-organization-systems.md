## 5.2. Information Architecture

### 5.2.1 Organizations Systems

En esta sección se define cómo se organiza la información dentro del sistema Nexora, considerando tanto la estructura visual del contenido como los esquemas de categorización aplicados. Estas decisiones responden a la necesidad de gestionar grandes volúmenes de datos en tiempo real en un entorno IoT aplicado al sector inmobiliario, garantizando claridad, accesibilidad y eficiencia en la interacción para los dos segmentos principales: arrendadores y arrendatarios.

---

#### **Organización visual del contenido**

La organización visual en Nexora se basa en tres enfoques principales: jerárquico, secuencial y matricial. Cada uno se aplica según el tipo de interacción y la naturaleza de la información.

---

#### **a) Organización jerárquica (Visual Hierarchy)**

La organización jerárquica constituye la base estructural del sistema, especialmente en dashboards y vistas generales. La información se presenta en niveles de prioridad, destacando en primer lugar los elementos críticos, como alertas en tiempo real, estados de dispositivos IoT y métricas clave, seguidos de información secundaria como históricos, configuraciones o detalles adicionales.

Esta jerarquía se adapta según el tipo de usuario:

* **Arrendadores:** se prioriza una visión global del estado de múltiples propiedades, resaltando alertas críticas, indicadores de consumo y métricas comparativas.  
* **Arrendatarios:** se prioriza la información individual, como consumo de su unidad, notificaciones relevantes y estado de dispositivos específicos.

El uso de colores definidos en el sistema (por ejemplo, naranja para acciones clave o alertas) y la tipografía establecida refuerzan esta jerarquía, permitiendo una rápida identificación de la información relevante y reduciendo la carga cognitiva del usuario.

#### **b) Organización secuencial (Step-by-step)**

La organización secuencial se aplica en procesos que requieren una interacción guiada mediante pasos consecutivos. Este enfoque es clave para garantizar una experiencia clara y sin errores, especialmente en usuarios no técnicos.

En Nexora, se utiliza en flujos como:

* Registro y configuración inicial del sistema  
* Vinculación de dispositivos IoT  
* Configuración de alertas y notificaciones  
* Reporte y gestión de incidencias

Cada proceso se estructura en etapas definidas que conducen al usuario desde la entrada de datos hasta la confirmación de la acción, reforzando la percepción de control y siguiendo los principios de diseño centrado en el usuario.

#### **c) Organización matricial**

La organización matricial se emplea en contextos donde es necesario visualizar múltiples variables de forma simultánea y comparativa.

En Nexora, se aplica principalmente en:

* Reportes de consumo energético  
* Historial de eventos y alertas  
* Gestión de múltiples propiedades o dispositivos

La información se presenta en tablas o dashboards estructurados que permiten cruzar datos como fecha, tipo de incidencia, ubicación y estado del dispositivo.

Este tipo de organización tiene mayor relevancia para los **arrendadores**, quienes requieren analizar múltiples unidades de manera simultánea, mientras que en los **arrendatarios** su uso es más limitado, priorizando vistas simplificadas centradas en su propia unidad.

---

#### **Sistemas de categorización de contenido**

Complementando la organización visual, Nexora utiliza distintos esquemas de categorización que permiten agrupar la información de manera lógica e intuitiva.

---

#### **a) Categorización por tópicos**

Este es el esquema principal del sistema. La información se organiza en módulos funcionales que responden a las principales tareas del usuario, tales como:

* Monitoreo de consumo  
* Seguridad y alertas  
* Gestión de incidencias  
* Dispositivos IoT  
* Reportes y análisis

Esta estructura permite una navegación intuitiva, ya que los usuarios identifican rápidamente la funcionalidad que necesitan según su objetivo.

#### **b) Categorización por audiencia**

Dado que Nexora se orienta a dos segmentos principales, se implementa una categorización por audiencia que adapta la estructura y presentación del contenido según el rol del usuario:

* **Arrendadores:** acceden a una vista global de sus propiedades, con herramientas de monitoreo, análisis comparativo y supervisión de múltiples dispositivos.  
* **Arrendatarios:** acceden a información específica de su unidad, incluyendo consumo individual, alertas personalizadas y funcionalidades de reporte de incidencias.

Esta diferenciación permite personalizar la experiencia de usuario, evitando la sobrecarga de información y asegurando que cada perfil interactúe únicamente con contenido relevante.

#### **c) Categorización cronológica**

La organización cronológica se utiliza en elementos donde el factor tiempo es determinante, como:

* Historial de eventos  
* Registro de alertas  
* Reportes de consumo

La información se presenta desde los eventos más recientes hasta los más antiguos, permitiendo a los usuarios comprender la evolución del sistema y detectar patrones de comportamiento.

#### **d) Categorización alfabética**

La categorización alfabética se aplica en listados específicos, como propiedades o dispositivos, facilitando la búsqueda rápida cuando se manejan múltiples elementos dentro del sistema.

