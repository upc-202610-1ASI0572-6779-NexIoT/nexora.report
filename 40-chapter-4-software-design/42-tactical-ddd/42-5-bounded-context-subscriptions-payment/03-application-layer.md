#### 4.2.5.3. Application Layer

La Application Layer del bounded context **Subscriptions & Payment Management** es responsable de coordinar los procesos de negocio relacionados con la gestión de suscripciones, facturación recurrente, consumo de recursos y procesamiento de pagos.

Esta capa actúa como intermediaria entre la Interface Layer, el modelo de dominio y los componentes de infraestructura, orquestando los casos de uso sin contener reglas de negocio específicas del dominio.

Siguiendo los principios de Domain-Driven Design (DDD), la lógica de negocio permanece encapsulada dentro de los Aggregates y Value Objects del dominio, mientras que la Application Layer coordina los flujos necesarios para ejecutar cada operación.

---

## Application Services

### SubscriptionAppService

Orquesta el ciclo de vida completo de las suscripciones dentro de la plataforma.

Coordina la interacción entre los agregados del dominio y los repositorios necesarios para registrar, actualizar o cancelar suscripciones.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| createSubscription() | Registra una nueva suscripción |
| changePlan() | Actualiza el plan contratado |
| cancelSubscription() | Cancela una suscripción activa |
| getSubscriptionStatus() | Obtiene el estado actual de una suscripción |

---

### BillingEngineService

Responsable de ejecutar el proceso de facturación recurrente de la plataforma.

Calcula los montos correspondientes según el plan contratado y el número de Smart Units activas registradas durante el ciclo de facturación.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| generateInvoice() | Genera una nueva factura |
| calculateAmount() | Calcula el monto total a facturar |
| executeBillingCycle() | Ejecuta el ciclo completo de facturación |
| processPayment() | Solicita el procesamiento del pago |

---

### UsageMetricsService

Obtiene información de consumo proveniente del bounded context **Resource & Asset Management**.

Su objetivo es determinar cuántas Smart Units activas deben considerarse para el cálculo de la suscripción.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| getActiveUnits() | Obtiene las Smart Units activas |
| updateUsageQuota() | Actualiza el consumo registrado |
| calculateUsage() | Calcula la cuota de uso vigente |

---

### AccessControlService

Evalúa continuamente el estado financiero de las suscripciones y determina si el acceso a determinadas funcionalidades debe mantenerse o restringirse.

Este servicio implementa una de las principales reglas de negocio del bounded context.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| evaluateAccess() | Evalúa si una cuenta mantiene acceso |
| restrictAccess() | Restringe funcionalidades por mora |
| restoreAccess() | Restablece acceso luego de un pago exitoso |
| notifyMonitoringContext() | Informa cambios al contexto de monitoreo |

---

## Event Handlers

### PaymentResultHandler

Procesa los eventos recibidos desde Culqi a través del WebhookController.

Su función principal es sincronizar el estado de pagos externos con el modelo de dominio interno.

**Responsabilidades principales:**

| Método | Descripción |
| :--- | :--- |
| handlePaymentSucceeded() | Procesa pagos exitosos |
| handlePaymentFailed() | Procesa pagos fallidos |
| updateInvoiceStatus() | Actualiza el estado de la factura |
| updateSubscriptionStatus() | Actualiza el estado de la suscripción |

---

### Casos de Uso Principales

#### Subscription Creation

1. SubscriptionController recibe la solicitud.
2. SubscriptionAppService valida la información.
3. BillingAccountAggregate registra la cuenta de facturación.
4. SubscriptionAggregate crea la suscripción.
5. SubscriptionRepository persiste la información.
6. Se retorna SubscriptionResource.

---

#### Monthly Billing Cycle

1. BillingEngineService inicia el proceso.
2. UsageMetricsService consulta las Smart Units activas.
3. Se calcula el monto según el SaaSPlan contratado.
4. Se genera una Invoice.
5. CulqiPaymentAdapter procesa el cobro.
6. PaymentResultHandler actualiza los estados correspondientes.

---

#### Access Restriction

1. PaymentResultHandler detecta una factura vencida.
2. AccessControlService evalúa la situación financiera.
3. SubscriptionAggregate cambia a estado Overdue o Suspended.
4. Se restringe el acceso al Dashboard Analítico.
5. El sistema de monitoreo crítico continúa operativo.
6. Se notifica al bounded context Service Monitoring & Intelligence.

---

### Beneficios de la Application Layer

- Coordinación centralizada de casos de uso.
- Separación entre lógica de dominio y comunicación externa.
- Integración desacoplada con Culqi.
- Soporte para facturación recurrente SaaS.
- Mayor mantenibilidad y testabilidad.
- Facilita la integración entre bounded contexts.

La Application Layer se encuentra representada en los diagramas de componentes mediante los servicios **SubscriptionAppService**, **BillingEngineService**, **UsageMetricsService**, **AccessControlService** y **PaymentResultHandler**, mostrando cómo se coordinan los procesos principales del sistema de suscripciones y pagos.

---