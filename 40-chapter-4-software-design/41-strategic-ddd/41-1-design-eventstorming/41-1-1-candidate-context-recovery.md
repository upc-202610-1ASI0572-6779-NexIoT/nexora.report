## 4.1. Strategic-Level Domain-Driven Design

En esta sección, el equipo de **Nexora** introduce y explica el proceso realizado para las decisiones de nivel estratégico aplicando **Domain-Driven Design (DDD)**. El enfoque estratégico nos permite descomponer el sistema de gestión de inmuebles inteligentes en partes más manejables y alineadas con los objetivos de negocio, como el monitoreo IoT, la eficiencia energética y la respuesta rápida ante incidencias.

Para el diseño de Nexora, esta descomposición organziar el dominio en módulos con responsabilidades bien definidas y alineadas con los procesos del negocio. Por el contrario, los límites identificados mediante DDD serán implementados dentro de una arquitectura **monolítica modular**, donde cada bounded context funciona como un módulo interno del backend principal. De esta manera, se mantiene una separación clara de responsabilidades sin introducir la complejidad operativa de una arquitectura distribuida.

### 4.1.1. Design-Level EventStorming

El proceso de Design-Level EventStorming se enfocó en refinar los eventos descubiertos en la fase de Big Picture, identificando los comandos,  las reglas de negocio y eventos de dominio que explican los principales  cambios de estado del sistema.

#### 4.1.1.1 Candidate Context Discovery

A partir del dominio modelado en el EventStorming inicial, el equipo realizó la sesión de **Candidate Context Discovery**. Para este proceso, aplicamos la técnica de **look-for-pivotal-events** , ya que permite identificat eventos clave del negocio que representan cambios importantes de estado y posibles transiciones de responsabilidad dentro del flujo de Nexora.

La sesión se desarrolló de forma iterativa y con una duración estimada menor a dos horas. Primero, se revisó el flujo general del EventStorming; luego, se agruparon los eventos relacionados por intención de negocio; finalmente, se identificaron los eventos pivote que ayudaron a delimitar los candidate bounded contexts.

Se identificaron los siguientes hitos o eventos clave (Pivotal Events):
- `Smart Device Registered`: Marca el inicio del ciclo de vida técnico del activo IoT dentro de una propiedad o unidad habitacional.
- `Telemetry Received`: Representa la recepción de datos enviados por los sensores IoT hacia el sistema.
- `Anomaly Detected`: Evento crítico que indica un comportamiento inusual, como una posible fuga de agua o consumo anómalo.
- `Critical Alert Generated`: Representa la generación de una alerta que requiere atención del arrendador o del equipo técnico.
- `Maintenance Task Assigned`: Marca el inicio de una acción operativa para atender una incidencia o mantenimiento.
- `Incident Resolved`: Evento que cierra el ciclo de mantenimiento operativo.
- `Subscription Plan Activated`: Representa la activación de un plan comercial para acceder a las funcionalidades SaaS de Nexora.

Como resultado, se definieron 5 Bounded Contexts candidatos alineados con la naturaleza SaaS del negocio y adaptados a una arquitectura monolítica modular:

**Resource & Asset Management (Supporting):** Gestión de la jerarquía de inmuebles, unidades habitacionales, sensores IoT y gateways. Este contexto proporciona la base estructural sobre la cual operan los demás módulos del sistema.

![Resource Asset Candidate Context](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/resource-asset-candidate.jpg)

**Service Monitoring & Intelligence (Core):** Procesamiento de telemetría, detección de anomalías y generación de alertas inteligentes. Este contexto representa uno de los principales valores de Nexora, ya que convierte los datos de sensores en información accionable.

![Service Intelligence Candidate Context](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/service-intelligence-candidate.jpg)

**Service Execution & Maintenance (Core):** Gestión de incidencias, tickets de atención, asignación de tareas técnicas y seguimiento del mantenimiento. Este contexto conecta la detección de problemas con una respuesta operativa concreta.

![Service Maintenance Candidate Context](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/service-maintenance-candidate.jpg)

**Identity & Access Management (Generic):** Gestión de autenticación, autorización, roles de usuario y permisos de acceso. Este contexto permite controlar las acciones disponibles para arrendadores, técnicos y administradores dentro de la plataforma.

![IAM Candidate Context](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/iam-candidate.jpg)

**Subscriptions & Payment Management (Generic):** Gestión de planes comerciales, suscripciones y pagos de la plataforma SaaS. Este contexto administra el ciclo comercial de Nexora y las restricciones de acceso asociadas al plan contratado.

![Payment Candidate Context](../../../assets/chapter-4/strategic-ddd/design-level-eventstorming/payments-candidate.jpg)

<div style="page-break-after: always;"></div>