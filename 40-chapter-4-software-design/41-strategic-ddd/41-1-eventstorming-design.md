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

