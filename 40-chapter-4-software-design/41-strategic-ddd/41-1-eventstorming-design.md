# 4.1. Strategic-Level Domain-Driven Design

En esta sección, el equipo de **Nexora** introduce y explica el proceso realizado para las decisiones de nivel estratégico aplicando **Domain-Driven Design (DDD)**. El enfoque estratégico nos permite descomponer el sistema complejo de gestión de inmuebles inteligentes en partes más manejables y alineadas con los objetivos de negocio, como la eficiencia energética y la respuesta rápida ante incidencias.

## 4.1.1. Design-Level EventStorming

El proceso de Design-Level EventStorming se enfocó en refinar los eventos descubiertos en la fase de Big Picture, identificando las reglas de negocio (políticas) y los comandos que disparan los cambios de estado en el sistema.

### 4.1.1.1 Candidate Context Discovery

A partir del dominio modelado en el EventStorming inicial, el equipo realizó la sesión de **Candidate Context Discovery**. Para este proceso, aplicamos la técnica de **look-for-pivotal-events** para identificar los puntos de transición donde el flujo de negocio cambia de responsabilidad.

Se identificaron los siguientes hitos o eventos clave (Pivotal Events):
- `Smart Device Registered`: Marca el inicio del ciclo de vida técnico del activo.
- `Anomaly Detected`: Evento crítico que dispara la lógica de reacción del sistema.
- `Incident Resolved`: Evento que cierra el ciclo de mantenimiento operativo.

Como resultado, se definieron 5 Bounded Contexts candidatos alineados con la naturaleza SaaS del negocio:

1.  **Resource & Asset Management (Supporting):** Gestión de la jerarquía de inmuebles y dispositivos.
2.  **Service Monitoring & Intelligence (Core):** Procesamiento de telemetría y detección de anomalías.
3.  **Service Execution & Maintenance (Core):** Gestión de incidencias y trabajos técnicos en campo.
4.  **Identity & Access Management (Generic):** Seguridad, roles de usuario y aislamiento multi-tenant.
5.  **Subscriptions & Payment Management (Generic):** Gestión de planes comerciales de la plataforma.

![IAM Candidate Context](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/iam-candidate.jpg)
*Nota. Candidate Bounded Context IAM (Identity & Access Management)* 

![Resource Asset Candidate Context](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/resource-asset-candidate.jpg)
*Nota. Candidate Bounded Context Resource & Asset Management* 

![Service Maintenance Candidate Context](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/service-maintenance-candidate.jpg)
*Nota. Candidate Bounded Context Service Maintenance* 

![Service Intelligence Candidate Context](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/service-intelligence-candidate.jpg)
*Nota. Candidate Bounded Context Service Intelligence* 

![Payment Candidate Context](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/payments-candidate.jpg)
*Nota. Candidate Bounded Context Payments*

### 4.1.1.2 Domain Message Flows Modeling

En esta sección se visualiza la colaboración entre los contextos definidos a través de historias que resuelven problemas reales del negocio. Se han elaborado dos diagramas principales utilizando la técnica de **Domain Storytelling**:

#### Escenario 1: Respuesta ante Emergencias (Fuga de Agua)
Este flujo representa el valor principal de Nexora: la capacidad de actuar sin intervención humana inicial para mitigar daños.

1.  **Sensor IoT** transmite lecturas de agua en tiempo real al **Monitoring Context**.
2.  **Monitoring Context** detecta un patrón de fuga analizando los datos (Auto-colaboración).
3.  **Monitoring Context** emite una **Alerta Crítica** hacia el **Service Execution Context**.
4.  **Service Execution Context** envía una **Notificación de Emergencia** al **Arrendador**.
5.  **Service Execution Context** asigna automáticamente una **Orden de Mantenimiento** al **Técnico**.
6.  **Técnico** reporta la **Reparación Finalizada** al sistema.
7.  **Service Execution Context** actualiza el **Estado de la Unidad** en el contexto de **Resource Management**.

![Storytelling Fuga de Agua](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/respuesta_emergencias.jpg)
*Nota. Diagrama de Domain Storytelling: Flujo de respuesta ante fugas.*

#### Escenario 2: Gestión de Controles y Optimización del Arrendador
Este flujo demuestra cómo el sistema empodera al administrador para tomar decisiones basadas en datos y optimizar el portafolio.

1.  El **Arrendador** solicita un **Reporte de Consumo Global** al **Monitoring Context**.
2.  **Monitoring Context** procesa los datos y genera una **Analítica de Desempeño Energético**.
3.  El **Arrendador** recibe y analiza los resultados.
4.  El **Arrendador** identifica una unidad ineficiente y determina que requiere acción inmediata.
5.  El **Arrendador** solicita un **Mantenimiento Preventivo** a través del sistema.
6.  **Service Execution Context** procesa la solicitud y asigna una **Tarea de Inspección** al **Técnico**.
7.  El **Arrendador** recibe la confirmación de la **Visita Programada**.

![Storytelling Gestión Arrendador](../../assets/chapter-4/strategic-ddd/design-level-eventstorming/controles_optimizacion_arrendador.jpg)
*Nota. Diagrama de Domain Storytelling: Flujo de gestión y optimización de activos.*

