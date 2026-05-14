### 4.2.5.3. Application Layer

La capa de aplicación orquesta los flujos de negocio y coordina la interacción entre la capa de dominio y la infraestructura. Al tratarse de una arquitectura monolítica, la comunicación entre componentes se realiza mediante llamadas directas en proceso.

#### Services

•⁠  ⁠*SubscriptionAppService:* Orquesta las operaciones del ciclo de vida de suscripciones: creación, cambio de plan y cancelación. Coordina el ⁠ SubscriptionAggregate ⁠, el ⁠ BillingAccountAggregate ⁠ y el ⁠ SubscriptionRepository ⁠.
•⁠  ⁠*BillingEngineService:* Ejecuta el ciclo de facturación mensual. Consulta el ⁠ UsageQuota ⁠ actual a través del ⁠ UsageMetricsService ⁠, calcula el monto de la ⁠ Invoice ⁠ multiplicando las unidades activas por el precio unitario del ⁠ SaaSPlan ⁠, y coordina el cobro con el ⁠ CulqiPaymentAdapter ⁠.
•⁠  ⁠*UsageMetricsService:* Consulta la cantidad de Smart Units activas por cuenta directamente al bounded context Resource & Asset Management mediante llamadas HTTP REST, y actualiza el ⁠ UsageQuota ⁠ correspondiente en el ⁠ SubscriptionAggregate ⁠.
•⁠  ⁠*AccessControlService:* Evalúa el estado de pago de la suscripción y aplica la regla de negocio principal: restringe el acceso al Dashboard analítico en cuentas con mora, manteniendo activo el sistema de alertas críticas de seguridad. Notifica al bounded context Service Monitoring & Intelligence mediante llamada HTTP REST.

#### Event Handlers

•⁠  ⁠*PaymentResultHandler:* Procesa el resultado recibido del webhook de Culqi a través del ⁠ WebhookController ⁠. Actualiza el estado de la ⁠ Invoice ⁠ y de la ⁠ Subscription ⁠ en el ⁠ SubscriptionAggregate ⁠ y notifica al ⁠ AccessControlService ⁠ para que evalúe el estado de acceso.

---