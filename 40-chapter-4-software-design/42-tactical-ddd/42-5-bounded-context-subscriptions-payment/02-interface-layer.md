### 4.2.5.2. Interface Layer

Esta capa expone las funcionalidades del bounded context a través de controladores que manejan las solicitudes HTTP provenientes de la Nexora Mobile App y la Nexora Web App, así como los callbacks externos de Culqi.

#### Controllers

•⁠  ⁠*SubscriptionController:* Maneja las solicitudes relacionadas con el ciclo de vida de suscripciones.
  - *Métodos:*
    - ⁠ createSubscription ⁠: Crea una nueva suscripción para una billing account.
    - ⁠ changePlan ⁠: Actualiza el tier de suscripción de una cuenta.
    - ⁠ cancelSubscription ⁠: Cancela una suscripción activa.
    - ⁠ getSubscriptionStatus ⁠: Consulta el estado actual de una suscripción.

•⁠  ⁠*BillingController:* Maneja las solicitudes relacionadas con facturas y ciclos de facturación.
  - *Métodos:*
    - ⁠ getCurrentInvoice ⁠: Obtiene la factura del período en curso.
    - ⁠ getInvoiceHistory ⁠: Lista el historial de facturas de una suscripción.
    - ⁠ triggerManualBilling ⁠: Permite a un administrador disparar manualmente el ciclo de facturación.

•⁠  ⁠*WebhookController:* Recibe y valida los callbacks asincrónicos enviados por Culqi tras el procesamiento de un cobro.
  - *Métodos:*
    - ⁠ handleCulqiWebhook ⁠: Parsea el payload del webhook, valida la firma de Culqi y delega el resultado al ⁠ PaymentResultHandler ⁠.

---