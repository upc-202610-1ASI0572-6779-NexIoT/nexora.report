#### 4.2.5.2. Interface Layer

La Interface Layer del bounded context **Subscriptions & Payment Management** es responsable de exponer las capacidades relacionadas con la gestión de suscripciones, facturación y procesamiento de pagos hacia consumidores externos mediante APIs RESTful y endpoints de integración.

Los principales consumidores de esta capa son la **Nexora Mobile App**, la **Nexora Web App** y la plataforma de pagos **Culqi**, que interactúa mediante webhooks para informar el resultado de las transacciones procesadas.

## Controllers

### SubscriptionController

Actúa como punto de entrada para las operaciones relacionadas con el ciclo de vida de las suscripciones SaaS.

Recibe solicitudes HTTP, valida datos de entrada, delega el procesamiento a los servicios de aplicación y retorna respuestas estructuradas.

**Endpoints principales:**

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| POST | /api/v1/subscriptions | Crea una nueva suscripción |
| PUT | /api/v1/subscriptions/{id}/plan | Actualiza el plan contratado |
| PUT | /api/v1/subscriptions/{id}/cancel | Cancela una suscripción activa |
| GET | /api/v1/subscriptions/{id}/status | Obtiene el estado actual de una suscripción |

---

### BillingController

Expone las operaciones relacionadas con la gestión de facturas y ciclos de facturación.

Permite consultar información financiera y ejecutar procesos administrativos de facturación.

**Endpoints principales:**

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| GET | /api/v1/billing/invoices/current | Obtiene la factura vigente |
| GET | /api/v1/billing/invoices/history | Obtiene el historial de facturas |
| POST | /api/v1/billing/cycles/trigger | Ejecuta manualmente un ciclo de facturación |

---

### WebhookController

Recibe eventos asincrónicos enviados por Culqi luego de procesar un cobro o intento de pago.

Este controlador actúa como punto de integración entre Nexora y la pasarela de pagos.

**Endpoints principales:**

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| POST | /api/v1/webhooks/culqi | Procesa callbacks enviados por Culqi |

## Resources

### SubscriptionResource

Representa la información de una suscripción enviada hacia los clientes.

**Campos principales:**

- id
- accountId
- planName
- startDate
- renewalDate
- status
- activeUnitCount

---

### InvoiceResource

Representa la información de una factura generada por el sistema.

**Campos principales:**

- id
- subscriptionId
- amount
- currency
- issuedDate
- dueDate
- status

---

### BillingAccountResource

Representa la información pública de una cuenta de facturación.

**Campos principales:**

- id
- ownerId
- ownerType
- culqiCustomerId

---

### CreateSubscriptionResource

Utilizado para registrar una nueva suscripción.

**Campos principales:**

- accountId
- planId
- paymentMethodToken

---

### ChangePlanResource

Utilizado para actualizar el plan contratado por una cuenta.

**Campos principales:**

- subscriptionId
- newPlanId

---

### CulqiWebhookResource

Representa el payload recibido desde Culqi.

**Campos principales:**

- eventType
- transactionId
- customerId
- amount
- currency
- paymentStatus
- signature

## Responsabilidades de la Interface Layer

- Recibir solicitudes HTTP provenientes de Nexora Mobile App y Nexora Web App.
- Validar payloads de entrada.
- Exponer operaciones relacionadas con suscripciones y facturación.
- Recibir eventos externos enviados por Culqi.
- Delegar el procesamiento a la Application Layer.
- Retornar respuestas HTTP estructuradas.
- Mantener desacoplada la comunicación externa de la lógica de negocio.

Esta capa se representa en los diagramas mediante los componentes **SubscriptionController**, **BillingController** y **WebhookController**, así como sus interacciones con las aplicaciones cliente y la pasarela de pagos Culqi.

---

<div style="page-break-after: always;"></div>