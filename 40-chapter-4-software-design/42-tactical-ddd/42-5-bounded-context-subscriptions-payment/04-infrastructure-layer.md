### 4.2.5.4. Infrastructure Layer

En esta capa se implementan los repositorios y los adaptadores externos que integran el bounded context con sistemas de terceros.

#### Repositories (Implementaciones)

•⁠  ⁠*SubscriptionRepositoryImpl:* Implementa ⁠ ISubscriptionRepository ⁠ sobre PostgreSQL mediante Entity Framework Core. Gestiona la persistencia y consulta del ⁠ SubscriptionAggregate ⁠ y sus facturas asociadas en la base de datos compartida Nexora DB.
•⁠  ⁠*InvoiceRepositoryImpl:* Implementa ⁠ IInvoiceRepository ⁠ sobre PostgreSQL. Gestiona la persistencia de ⁠ Invoice ⁠ y expone consultas de facturas vencidas para el proceso de cobro.
•⁠  ⁠*BillingAccountRepositoryImpl:* Implementa ⁠ IBillingAccountRepository ⁠ sobre PostgreSQL. Gestiona la persistencia del ⁠ BillingAccountAggregate ⁠ y los tokens de pago en la Nexora DB.

#### Adapters

•⁠  ⁠*CulqiPaymentAdapter:* Implementa la integración con la pasarela de pagos Culqi actuando como Anti-Corruption Layer. Abstrae las operaciones de tokenización de tarjetas, cobro recurrente, reembolsos y el parseo de webhooks, aislando el dominio de los detalles del proveedor externo.
  - *Métodos:*
    - ⁠ tokenizeCard ⁠: Tokeniza los datos de la tarjeta del cliente a través de la API de Culqi.
    - ⁠ chargeRecurring ⁠: Ejecuta un cobro recurrente sobre el token almacenado en el ⁠ BillingAccount ⁠.
    - ⁠ refund ⁠: Procesa el reembolso de un cobro previamente procesado.
    - ⁠ parseWebhook ⁠: Valida la firma y parsea el payload de los callbacks enviados por Culqi.

---