### 4.2.5. Bounded Context: Subscriptions & Payment Management

En este bounded context se gestiona la monetización SaaS de la plataforma Nexora, incluyendo el ciclo de vida de suscripciones corporativas, la facturación recurrente por uso y la integración con la pasarela de pagos externa Culqi.

#### 4.2.5.1. Domain Layer

La Domain Layer del bounded context **Subscriptions & Payment Management** contiene los conceptos centrales del negocio relacionados con la monetización SaaS de Nexora, la gestión de suscripciones, la facturación recurrente y el control de pagos.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa se mantiene independiente de frameworks, controladores, pasarelas de pago o detalles de persistencia. Su responsabilidad principal es representar las reglas de negocio que permiten administrar planes, ciclos de facturación, cuotas de uso, facturas y estados de pago dentro de la plataforma.

## Aggregate Roots

### SubscriptionAggregate

El **SubscriptionAggregate** actúa como raíz de agregado principal del bounded context, ya que controla el ciclo de vida completo de una suscripción SaaS y asegura la consistencia entre la suscripción, el plan contratado, la cuota de uso, los ciclos de facturación y las facturas asociadas.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| subscription | Subscription | Entidad principal de suscripción |
| plan | SaaSPlan | Plan SaaS contratado |
| billingCycle | BillingCycle | Ciclo de facturación vigente |
| usageQuota | UsageQuota | Cantidad de Smart Units activas |
| invoices | List<Invoice> | Facturas asociadas a la suscripción |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| changePlan(plan) | Cambia el plan contratado por la cuenta |
| updateUsage(usageQuota) | Actualiza la cuota de uso según las Smart Units activas |
| generateInvoice() | Genera una factura para el ciclo de facturación actual |
| markAsOverdue() | Marca la suscripción como vencida por falta de pago |
| restrictAccess() | Restringe el acceso a funcionalidades no críticas |
| cancel() | Cancela la suscripción activa |

### BillingAccountAggregate

El **BillingAccountAggregate** representa la identidad financiera del cliente dentro de Nexora y administra la información necesaria para vincular la cuenta con Culqi.

Este agregado encapsula la cuenta de facturación y el método de pago registrado, evitando que los detalles técnicos del proveedor externo contaminen el dominio.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| billingAccount | BillingAccount | Cuenta de facturación del cliente |
| defaultPaymentMethodToken | String | Token del método de pago registrado |
| culqiCustomerId | String | Identificador del cliente en Culqi |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| updatePaymentToken(token) | Actualiza el token del método de pago |
| updateCulqiId(culqiCustomerId) | Actualiza el identificador del cliente en Culqi |
| removePaymentMethod() | Elimina el método de pago predeterminado |

## Entities

### Subscription

La entidad **Subscription** representa la suscripción activa de una cuenta corporativa dentro de Nexora.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la suscripción |
| accountId | Long | Identificador de la cuenta asociada |
| planId | Long | Identificador del plan contratado |
| startDate | DateTime | Fecha de inicio de la suscripción |
| renewalDate | DateTime | Fecha de renovación |
| status | SubscriptionStatus | Estado actual de la suscripción |
| activeUnitCount | Integer | Cantidad de Smart Units activas |

### Invoice

La entidad **Invoice** representa una factura generada al cierre de un ciclo de facturación.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la factura |
| subscriptionId | Long | Identificador de la suscripción asociada |
| amount | Money | Monto total facturado |
| issuedDate | DateTime | Fecha de emisión |
| dueDate | DateTime | Fecha límite de pago |
| status | InvoiceStatus | Estado actual de la factura |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| markAsPaid() | Marca la factura como pagada |
| markAsFailed() | Marca la factura como fallida |
| markAsRefunded() | Marca la factura como reembolsada |
| isOverdue(currentDate) | Verifica si la factura está vencida |

### BillingAccount

La entidad **BillingAccount** representa la cuenta de facturación asociada a un Property Manager o Real Estate Company.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la cuenta de facturación |
| ownerId | Long | Identificador del propietario de la cuenta |
| ownerType | String | Tipo de propietario de la cuenta |
| culqiCustomerId | String | Identificador del cliente en Culqi |
| defaultPaymentMethodToken | String | Token del método de pago predeterminado |

## Value Objects

### SaaSPlan

El Value Object **SaaSPlan** define el plan de suscripción contratado por el cliente.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| planId | Long | Identificador del plan |
| tier | String | Nivel del plan: Basic, Professional o Enterprise |
| unitPrice | Money | Precio unitario por Smart Unit activa |
| billingInterval | String | Intervalo de facturación |

### BillingCycle

El Value Object **BillingCycle** encapsula el período de facturación de una suscripción.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| startDate | DateTime | Fecha de inicio del ciclo |
| endDate | DateTime | Fecha de cierre del ciclo |
| activeUnitCount | Integer | Cantidad de unidades activas durante el período |

### UsageQuota

El Value Object **UsageQuota** representa la cantidad de Smart Units activas utilizadas para calcular el cobro recurrente.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| activeUnitCount | Integer | Cantidad de Smart Units activas |
| measuredAt | DateTime | Fecha en la que se registró la medición |

### Money

El Value Object **Money** encapsula valores monetarios dentro del dominio.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| amount | Decimal | Monto monetario |
| currency | String | Moneda utilizada, como PEN o USD |

### SubscriptionStatus

**SubscriptionStatus** es una enumeración que define los estados posibles de una suscripción.

| Valor | Descripción |
| :--- | :--- |
| ACTIVE | Suscripción activa |
| OVERDUE | Suscripción vencida por falta de pago |
| SUSPENDED | Suscripción suspendida |
| CANCELLED | Suscripción cancelada |

### InvoiceStatus

**InvoiceStatus** es una enumeración que define los estados posibles de una factura.

| Valor | Descripción |
| :--- | :--- |
| PENDING | Factura pendiente de pago |
| PAID | Factura pagada correctamente |
| FAILED | Cobro fallido |
| REFUNDED | Factura reembolsada |

## Domain Events

| Evento | Descripción |
| :--- | :--- |
| InvoiceGeneratedEvent | Se dispara cuando se genera una nueva factura al cierre del ciclo de facturación |
| SubscriptionExpiredEvent | Se dispara cuando una suscripción es suspendida por falta de pago |
| PlanChangedEvent | Se dispara cuando el cliente cambia de plan de suscripción |
| PaymentFailedEvent | Se dispara cuando un intento de cobro no se procesa correctamente |
| AccessRestrictedEvent | Se dispara cuando se restringe el acceso al dashboard analítico por mora |

## Repository Interfaces

### ISubscriptionRepository

Abstracción utilizada para acceder a la persistencia del **SubscriptionAggregate**.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| findById(id) | Busca una suscripción por identificador |
| findByAccountId(accountId) | Busca suscripciones asociadas a una cuenta |
| save(subscriptionAggregate) | Persiste el agregado de suscripción |
| delete(id) | Elimina una suscripción |

### IInvoiceRepository

Abstracción utilizada para acceder a la persistencia de facturas.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| findById(id) | Busca una factura por identificador |
| findBySubscription(subscriptionId) | Lista facturas asociadas a una suscripción |
| save(invoice) | Persiste una factura |
| listOverdue() | Lista facturas vencidas |

### IBillingAccountRepository

Abstracción utilizada para acceder a la persistencia de cuentas de facturación.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| findById(id) | Busca una cuenta de facturación por identificador |
| findByOwner(ownerId, ownerType) | Busca una cuenta según su propietario |
| save(billingAccountAggregate) | Persiste el agregado de cuenta de facturación |
| delete(id) | Elimina una cuenta de facturación |

## Domain Relationships

- Un **BillingAccountAggregate** puede tener una o más **SubscriptionAggregate** asociadas.
- Un **SubscriptionAggregate** contiene una **Subscription** y puede generar múltiples **Invoice**.
- Una **Subscription** utiliza un **SaaSPlan** para determinar el precio de facturación.
- Una **Subscription** utiliza **UsageQuota** para calcular el cobro según unidades activas.
- Una **Invoice** contiene un valor monetario representado mediante **Money**.
- Una **BillingAccount** mantiene la referencia al cliente y método de pago registrado en Culqi.
- Los eventos de dominio permiten comunicar cambios relevantes dentro del monolito modular de Nexora.

## Domain Rules

1. Una suscripción debe estar asociada a una cuenta de facturación válida.
2. Una factura solo puede generarse si existe un ciclo de facturación activo.
3. El monto de la factura se calcula según el plan contratado y la cantidad de Smart Units activas.
4. Una suscripción vencida puede restringir el acceso al dashboard analítico.
5. Las alertas críticas de seguridad deben mantenerse activas incluso si la suscripción se encuentra en mora.
6. Una factura pagada no puede marcarse como fallida.
7. Una suscripción cancelada no puede generar nuevas facturas.
8. El dominio no debe depender directamente de Culqi; la integración con la pasarela de pagos se gestiona mediante la Infrastructure Layer.

La Domain Layer constituye la base conceptual del bounded context **Subscriptions & Payment Management** y se refleja en los diagramas de componentes, clases de dominio y diseño de base de datos presentados en las siguientes secciones.

---