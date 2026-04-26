### 4.2.5.5. Bounded Context Software Architecture Component Level Diagrams

- **Subscription Controller:** Gestiona las operaciones del ciclo de vida de suscripciones: creación, cambio de plan, cancelación y consulta de estado.
- **Billing Controller:** Gestiona la consulta de facturas y el disparo manual del ciclo de facturación para administradores.
- **Webhook Controller:** Recibe y valida los callbacks asincrónicos de Culqi, delegando el resultado al Payment Result Event Handler.
- **Subscription App Service:** Orquesta los comandos del ciclo de vida de suscripciones coordinando el dominio y la infraestructura.
- **Billing Engine Service:** Ejecuta el ciclo de facturación mensual calculando el monto de la Invoice a partir del UsageQuota y el SaaSPlan, y coordinando el cobro con el Culqi Payment Adapter.
- **Access Control Service:** Aplica la regla de negocio de restricción de acceso al Dashboard por mora, manteniendo activas las alertas críticas de seguridad.
- **Usage Metrics Event Handler:** Consume eventos del Resource BC y actualiza el UsageQuota por cuenta en el SubscriptionAggregate.
- **Payment Result Event Handler:** Procesa el resultado del webhook de Culqi y actualiza el estado de Invoice y Subscription.
- **Culqi Payment Adapter:** Anti-Corruption Layer que abstrae la comunicación con la API REST de Culqi.
- **Subscription Repository:** Gestiona la persistencia de los agregados de suscripción, factura y billing account sobre PostgreSQL.

![Subscriptions & Payment Management - Component Diagram](/assets/chapter-4/tactical-ddd/bounded-context-subscription-payment/component-diagram.png)

---

### 4.2.5.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.5.6.1. Bounded Context Domain Layer Class Diagrams

El diagrama de clases refleja las dos raíces de agregado del bounded context. `SubscriptionAggregate` es la raíz principal y encapsula la entidad `Subscription` junto con los value objects `SaaSPlan`, `BillingCycle`, `UsageQuota` y `SubscriptionStatus`, además de la lista de entidades `Invoice` mediante una relación de composición. `BillingAccountAggregate` encapsula la cuenta de facturación y su token de pago en Culqi.

- **SubscriptionAggregate:** Raíz de agregado principal. Controla el ciclo de vida completo de la suscripción y aplica todas las invariantes del dominio.
- **BillingAccountAggregate:** Gestiona la identidad financiera del cliente y su vinculación con Culqi.
- **Invoice:** Entidad que representa la factura generada por cada ciclo de facturación.
- **SaaSPlan, BillingCycle, UsageQuota, SubscriptionStatus, InvoiceStatus, Money:** Value objects inmutables que encapsulan conceptos del dominio sin identidad propia.
- **ISubscriptionRepository, IInvoiceRepository, IBillingAccountRepository:** Interfaces que abstraen la persistencia de los agregados hacia la capa de infraestructura.

![Subscriptions & Payment Management - Class Diagram](/assets/chapter-4/tactical-ddd/bounded-context-subscription-payment/class-diagram.png)

#### 4.2.5.6.2. Bounded Context Database Design Diagram

El modelo relacional está compuesto por seis tablas. `billing_account` actúa como raíz del modelo financiero y se relaciona con `subscription` en una relación de uno a muchos. Cada `subscription` genera uno o más registros en `billing_cycle` por cada período de facturación, y uno o más registros en `invoice` a lo largo de su vida. Cada `billing_cycle` produce exactamente una `invoice` en una relación de uno a uno. Las `invoice` pueden tener uno o más registros en `payment_attempt`, que registran cada intento de cobro realizado a través de Culqi.

Las relaciones entre tablas son las siguientes:

- `billing_account` `1` ────► `N` `subscription`: Una billing account puede tener una o más subscriptions.
- `subscription` `1` ────► `N` `billing_cycle`: Una subscription genera uno o más billing cycles.
- `subscription` `1` ────► `N` `invoice`: Una subscription acumula una o más invoices.
- `billing_cycle` `1` ────► `1` `invoice`: Cada billing cycle produce exactamente una invoice.
- `invoice` `1` ────► `N` `payment_attempt`: Una invoice puede tener uno o más payment attempts.


![Subscriptions & Payment Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-subscription-payment/database-diagram.png)
