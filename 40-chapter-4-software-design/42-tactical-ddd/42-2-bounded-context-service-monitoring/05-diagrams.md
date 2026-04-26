### 4.2.2.5. Bounded Context Software Architecture Component Level Diagrams

Este diagrama de nivel 3 describe la arquitectura interna del Bounded Context encargado de la "inteligencia" del sistema. Se observa un flujo basado en eventos donde el MQTT Inbound Adapter recibe la telemetría y la traslada a los servicios de aplicación (Telemetry Command Service).

La lógica de negocio reside en el Risk Evaluator, un servicio de dominio que analiza las lecturas en partes por millón (PPM) para identificar anomalías. Este diseño bajo el patrón CQRS permite separar eficientemente la ingesta masiva de datos (escritura) de la consulta de estados y alertas (lectura), permitiendo que la Mobile App obtenga respuestas rápidas sobre la seguridad de la vivienda.

![Service Monitoring & Intelligence - Component Diagram](/assets/chapter-4/tactical-ddd/bounded-context-service-monitoring/component-diagram.png)

---

### 4.2.2.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.2.6.1. Bounded Context Domain Layer Class Diagrams

El diagrama de clases del dominio para el contexto de Monitoring & Intelligence define las reglas tácticas y las abstracciones del sistema. Se identifican como entidades clave a TelemetryRecord, que captura la medición sensorial, y Anomaly, que representa un incidente de seguridad.

El modelo utiliza un Domain Service (RiskEvaluator) para desacoplar la lógica de cálculo de riesgos de las entidades, permitiendo que el sistema sea flexible ante cambios en los umbrales de seguridad (Thresholds). El uso de enumeraciones para los estados de bienestar (WellnessState) asegura un lenguaje ubicuo consistente entre el desarrollo y el negocio.

<img src="../../../assets/chapter-4/tactical-ddd/bounded-context-service-monitoring/class-diagram.png" alt="Service Monitoring & Intelligence - Class Diagram" width="450"/>

---
#### 4.2.2.6.2. Bounded Context Database Design Diagram

El diseño del esquema de base de datos para este contexto está optimizado para el almacenamiento de registros históricos y la gestión de eventos críticos. La tabla telemetry_logs utiliza tipos de datos de alta capacidad (BigInt) para soportar el flujo constante de lecturas de los sensores MQ-2 y MQ-135.

El esquema establece una relación de trazabilidad entre cada registro de telemetría y las posibles anomalies generadas, permitiendo una auditoría completa de qué lectura exacta disparó una alerta. Por otro lado, la tabla device_thresholds permite la personalización de los niveles de alerta por cada inmueble, brindando flexibilidad a la configuración del sistema de seguridad.

<img src="../../../assets/chapter-4/tactical-ddd/bounded-context-service-monitoring/database-diagram.png" alt="Service Monitoring & Intelligence - Database Diagram"  height="750"/>

