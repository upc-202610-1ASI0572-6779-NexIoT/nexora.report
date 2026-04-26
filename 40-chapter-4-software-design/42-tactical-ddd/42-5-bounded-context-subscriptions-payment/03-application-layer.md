### 4.2.5.3. Application Layer

La capa de aplicación orquesta los flujos de negocio y coordina la interacción entre la capa de dominio y la infraestructura.

#### Command Handlers

- **CreateSubscriptionCommandHandler:** Maneja la lógica para crear una nueva suscripción, instanciando el `SubscriptionAggregate` y persistiéndolo a través del repositorio.
- **ChangePlanCommandHandler:** Gestiona el cambio de tier de suscripción, aplicando la transición de estado en el agregado y publicando el evento `PlanChangedEvent`.
- **CancelSubscriptionCommandHandler:** Maneja la cancelación de una suscripción activa y publica el evento `SubscriptionExpiredEvent`.
- **ProcessBillingCycleCommandHandler:** Orquesta la ejecución del ciclo de facturación mensual: calcula el monto basado en `UsageQuota` × precio unitario del `SaaSPlan`, genera la `Invoice` y delega el cobro al `CulqiPaymentAdapter`.

#### Event Handlers

- **UsageMetricsUpdatedEventHandler:** Consume eventos del Resource Bounded Context con la cantidad de Smart Units activas por cuenta y actualiza el `UsageQuota` en el `SubscriptionAggregate`.
- **PaymentResultEventHandler:** Procesa el resultado recibido del webhook de Culqi. Actualiza el estado de la `Invoice` y de la `Subscription` según el resultado del cobro, y notifica al `AccessControlService`.

#### Services

- **SubscriptionService:** Coordina las operaciones del ciclo de vida de suscripciones, interactuando con los repositorios y los command handlers correspondientes.
- **BillingEngineService:** Calcula el monto de la factura multiplicando el `activeUnitCount` por el precio unitario definido en el `SaaSPlan`, genera el registro de `Invoice` y coordina el cobro con el `CulqiPaymentAdapter`.
- **AccessControlService:** Evalúa el estado de pago de la suscripción y aplica la regla de negocio principal: restringe el acceso al Dashboard analítico en cuentas con mora, manteniendo activo el sistema de alertas críticas de seguridad. Publica el evento `AccessRestrictedEvent` hacia el Analytics Bounded Context.

---