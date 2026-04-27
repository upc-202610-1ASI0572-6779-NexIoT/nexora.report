## 4.2.5. Bounded Context: Subscriptions & Payment Management

En este bounded context se gestiona la monetización SaaS de la plataforma Nexora, incluyendo el ciclo de vida de suscripciones corporativas, la facturación recurrente por uso y la integración con la pasarela de pagos externa Culqi.

### 4.2.5.1. Domain Layer

En la capa de dominio se definen las clases centrales que representan el núcleo del sistema de suscripciones y pagos, junto con las reglas de negocio del bounded context.

#### Entities

•⁠  ⁠*Subscription:* Representa la suscripción activa de una cuenta corporativa. Incluye atributos como ⁠ id ⁠, ⁠ accountId ⁠, ⁠ planId ⁠, ⁠ startDate ⁠, ⁠ renewalDate ⁠, ⁠ status ⁠ y ⁠ activeUnitCount ⁠, que almacenan el estado actual del contrato entre el cliente y la plataforma.
•⁠  ⁠*Invoice:* Representa una factura generada al cierre de un Billing Cycle. Incluye atributos como ⁠ id ⁠, ⁠ subscriptionId ⁠, ⁠ amount ⁠, ⁠ issuedDate ⁠, ⁠ dueDate ⁠ y ⁠ status ⁠, que registran el cobro correspondiente a un período de facturación.
•⁠  ⁠*BillingAccount:* Cuenta de facturación asociada a un Property Manager o Real Estate Company. Contiene atributos como ⁠ id ⁠, ⁠ ownerId ⁠, ⁠ ownerType ⁠, ⁠ culqiCustomerId ⁠ y ⁠ defaultPaymentMethodToken ⁠, que identifican al cliente y su método de pago registrado en Culqi.

#### Value Objects

•⁠  ⁠*SaaSPlan:* Define el tier de suscripción (Basic, Professional, Enterprise) junto con el precio unitario por Smart Unit activa y el intervalo de facturación.
•⁠  ⁠*BillingCycle:* Encapsula el período de facturación con su fecha de inicio y fin, y la cantidad de unidades activas registradas al cierre del período.
•⁠  ⁠*UsageQuota:* Representa la cantidad de Smart Units activas en un período determinado, consumida desde el Resource & Asset Management Bounded Context.
•⁠  ⁠*SubscriptionStatus:* Define el estado de la suscripción mediante una enumeración: ⁠ Active ⁠, ⁠ Overdue ⁠, ⁠ Suspended ⁠ y ⁠ Cancelled ⁠.
•⁠  ⁠*InvoiceStatus:* Define el estado de la factura mediante una enumeración: ⁠ Pending ⁠, ⁠ Paid ⁠, ⁠ Failed ⁠ y ⁠ Refunded ⁠.
•⁠  ⁠*Money:* Encapsula el monto y la moneda (⁠ PEN ⁠/⁠ USD ⁠) de cualquier valor monetario en el dominio.

#### Aggregates

•⁠  ⁠*SubscriptionAggregate:* Raíz de agregado principal. Encapsula ⁠ Subscription ⁠, ⁠ SaaSPlan ⁠, ⁠ BillingCycle ⁠ y la lista de ⁠ Invoice ⁠ asociadas. Controla las transiciones de estado, aplica las reglas de negocio de acceso y expone operaciones como ⁠ changePlan() ⁠, ⁠ updateUsage() ⁠, ⁠ restrict() ⁠ y ⁠ cancel() ⁠.
•⁠  ⁠*BillingAccountAggregate:* Encapsula ⁠ BillingAccount ⁠ y el token de método de pago. Gestiona la identidad del cliente en Culqi y expone operaciones como ⁠ updatePaymentToken() ⁠ y ⁠ updateCulqiId() ⁠.

#### Domain Events

•⁠  ⁠⁠ InvoiceGeneratedEvent ⁠: Disparado cuando se genera una nueva factura al cierre del ciclo de facturación.
•⁠  ⁠⁠ SubscriptionExpiredEvent ⁠: Disparado cuando una suscripción es suspendida por falta de pago.
•⁠  ⁠⁠ PlanChangedEvent ⁠: Disparado cuando el cliente cambia de tier de suscripción.
•⁠  ⁠⁠ PaymentFailedEvent ⁠: Disparado cuando un intento de cobro a través de Culqi no se procesa correctamente.
•⁠  ⁠⁠ AccessRestrictedEvent ⁠: Disparado cuando se restringe el acceso al Dashboard analítico por mora en el pago.

#### Repositories (Interfaces)

•⁠  ⁠*ISubscriptionRepository:* Define los métodos ⁠ findById() ⁠, ⁠ findByAccountId() ⁠, ⁠ save() ⁠ y ⁠ delete() ⁠ para gestionar la persistencia del ⁠ SubscriptionAggregate ⁠.
•⁠  ⁠*IInvoiceRepository:* Define los métodos ⁠ findById() ⁠, ⁠ findBySubscription() ⁠, ⁠ save() ⁠ y ⁠ listOverdue() ⁠ para gestionar la persistencia de ⁠ Invoice ⁠.
•⁠  ⁠*IBillingAccountRepository:* Define los métodos ⁠ findById() ⁠, ⁠ findByOwner() ⁠, ⁠ save() ⁠ y ⁠ delete() ⁠ para gestionar la persistencia del ⁠ BillingAccountAggregate ⁠.

---