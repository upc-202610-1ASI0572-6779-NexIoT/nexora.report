#### 4.2.5.4. Infrastructure Layer

La Infrastructure Layer del bounded context **Subscriptions & Payment Management** contiene las implementaciones técnicas necesarias para soportar la persistencia de suscripciones, cuentas de facturación y facturas, así como la integración con servicios externos de procesamiento de pagos.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa implementa las interfaces definidas por el dominio y proporciona mecanismos concretos para almacenamiento de información, comunicación con sistemas externos y procesamiento de eventos relacionados con pagos.

## Repository Implementations

### SubscriptionRepositoryImpl

Implementación concreta de la interfaz **ISubscriptionRepository**, responsable de persistir y recuperar información relacionada con el ciclo de vida de las suscripciones SaaS.

Esta implementación administra el almacenamiento del **SubscriptionAggregate** y sus entidades asociadas dentro de la base de datos de Nexora.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(subscriptionAggregate) | Persiste una suscripción |
| findById(id) | Obtiene una suscripción por identificador |
| findByAccountId(accountId) | Obtiene las suscripciones asociadas a una cuenta |
| delete(id) | Elimina una suscripción |

---

### InvoiceRepositoryImpl

Implementación concreta de la interfaz **IInvoiceRepository**, responsable de la persistencia y consulta de facturas generadas por el sistema.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(invoice) | Persiste una factura |
| findById(id) | Recupera una factura específica |
| findBySubscription(subscriptionId) | Obtiene las facturas de una suscripción |
| listOverdue() | Lista facturas vencidas |

---

### BillingAccountRepositoryImpl

Implementación concreta de la interfaz **IBillingAccountRepository**, responsable de gestionar la persistencia de las cuentas de facturación registradas en la plataforma.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(billingAccountAggregate) | Persiste una cuenta de facturación |
| findById(id) | Recupera una cuenta específica |
| findByOwner(ownerId, ownerType) | Obtiene una cuenta según su propietario |
| delete(id) | Elimina una cuenta de facturación |

Los repositorios utilizan **Entity Framework Core** para desacoplar el dominio de los detalles de acceso a datos y facilitar la persistencia sobre PostgreSQL.

## Integration Adapters

### CulqiPaymentAdapter

El componente **CulqiPaymentAdapter** implementa la integración con la plataforma de pagos Culqi y actúa como una **Anti-Corruption Layer (ACL)** entre el dominio de Nexora y los modelos externos del proveedor.

Este adaptador encapsula todos los detalles técnicos de la API de Culqi, evitando que conceptos propios del proveedor contaminen el modelo de dominio interno.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| tokenizeCard() | Tokeniza los datos de una tarjeta utilizando la API de Culqi |
| chargeRecurring() | Ejecuta un cobro recurrente sobre un método de pago registrado |
| refund() | Procesa un reembolso |
| parseWebhook() | Valida y procesa callbacks recibidos desde Culqi |

---

### UsageMetricsAdapter

El componente **UsageMetricsAdapter** permite obtener métricas de uso provenientes del bounded context **Resource & Asset Management**.

Su función consiste en consultar la cantidad de Smart Units activas que participan en el cálculo de facturación.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| getActiveUnits() | Consulta las Smart Units activas |
| getUsageMetrics() | Obtiene métricas de consumo |
| synchronizeUsage() | Actualiza el uso registrado para facturación |

---

### MonitoringNotificationAdapter

El componente **MonitoringNotificationAdapter** permite comunicar cambios relevantes de acceso al bounded context **Service Monitoring & Intelligence**.

Este adaptador asegura que los mecanismos críticos de monitoreo continúen funcionando incluso cuando una cuenta presenta mora.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| notifyAccessRestriction() | Informa restricciones de acceso |
| notifyAccessRestoration() | Informa restauración de acceso |
| publishSubscriptionStatus() | Publica cambios de estado de la suscripción |

## Database Layer

### Nexora Database

El bounded context **Subscriptions & Payment Management** almacena su información dentro de la base de datos central de Nexora, manteniendo separación lógica mediante tablas especializadas para suscripciones, cuentas de facturación y facturas.

## Main Tables

### billing_accounts

Almacena la información de facturación asociada a clientes y empresas.

**Campos principales:**

- id
- owner_id
- owner_type
- culqi_customer_id
- default_payment_method_token

---

### subscriptions

Almacena las suscripciones activas de la plataforma.

**Campos principales:**

- id
- account_id
- plan_id
- start_date
- renewal_date
- status
- active_unit_count

---

### invoices

Almacena las facturas generadas durante los ciclos de facturación.

**Campos principales:**

- id
- subscription_id
- amount
- currency
- issued_date
- due_date
- status

---

### payment_attempts

Almacena el historial de intentos de cobro realizados a través de Culqi.

**Campos principales:**

- id
- invoice_id
- transaction_id
- payment_status
- processed_at

### Infrastructure Responsibilities

- Implementar los mecanismos de persistencia definidos por el dominio.
- Gestionar el almacenamiento de suscripciones y facturas.
- Integrar el sistema con la plataforma Culqi.
- Gestionar la tokenización y procesamiento de pagos.
- Obtener métricas de uso desde otros bounded contexts.
- Mantener trazabilidad de los intentos de cobro.
- Facilitar la comunicación entre bounded contexts.

### Beneficios de la Infrastructure Layer

- Persistencia desacoplada de la lógica de negocio.
- Integración transparente con Culqi.
- Protección del dominio mediante Anti-Corruption Layer.
- Mayor mantenibilidad y extensibilidad.
- Trazabilidad completa del ciclo de facturación.
- Preparación para futuras integraciones con otros proveedores de pago.

La Infrastructure Layer constituye el soporte técnico del bounded context **Subscriptions & Payment Management**, permitiendo integrar los procesos de suscripción, facturación y pagos con los mecanismos de persistencia e integración requeridos por la plataforma Nexora.

---

<div style="page-break-after: always;"></div>