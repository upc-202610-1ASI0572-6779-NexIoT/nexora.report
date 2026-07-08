## 2.5. Ubiquitous Language

Para garantizar una comunicación transparente, fluida y libre de ambigüedades entre los miembros del equipo de desarrollo, diseñadores UX, clientes y stakeholders de Nexora, se establece el presente lenguaje ubicuo (*Ubiquitous Language*). Siguiendo los principios fundamentales expuestos por Eric Evans en su enfoque *Domain-Driven Design (DDD)*, este glosario delimita de manera estricta los conceptos clave dentro de nuestro contexto acotado (*Bounded Context*), eliminando jergas técnicas de ingeniería de software para centrarse exclusivamente en el dominio del negocio inmobiliario y la telemetría residencial.

<br>

---

| Term (Término equivalente en español) | Definición en el dominio del negocio |
| --- | --- |
| **Landlord (Arrendador / Propietario)** | Persona natural o jurídica que posee una o más unidades inmobiliarias y cede el derecho de uso de las mismas a un tercero a cambio de una contraprestación económica regular. En el sistema, actúa como el supervisor principal de los consumos y la infraestructura. |
| **Tenant (Arrendatario / Inquilino)** | Persona que adquiere el derecho de habitar o utilizar una propiedad rentada mediante un acuerdo contractual, asumiendo la responsabilidad directa sobre el cuidado del inmueble y el costo de los servicios consumos durante su permanencia. |
| **Property Manager (Administrador de Propiedades)** | Perfil operativo o profesional encargado de la supervisión, mantenimiento logístico, gestión de incidencias y coordinación de comunicaciones de múltiples unidades de alquiler en representación de uno o varios propietarios. |
| **Rental Unit (Unidad de Alquiler)** | Espacio físico residencial o comercial delimitado (departamento, habitación, casa) que constituye el objeto central de un contrato de arrendamiento y sobre el cual se realiza el despliegue del monitoreo. |
| **Utility Consumption (Consumo de Servicios Básicos)** | Volumen o cantidad de recursos esenciales (específicamente agua potable y energía eléctrica) medidos y utilizados dentro de una unidad de alquiler durante un periodo de tiempo determinado. |
| **Utility Anomaly (Anomalía de Servicio)** | Patrón de consumo inusual, desproporcionado o fuera de los umbrales históricos normales de una vivienda, que sugiere la existencia de un desperfecto físico o un descuido operativo. |
| **Water Leakage (Filtración de Agua)** | Escape no controlado de agua debido a fallas, fisuras o averías en la red interna de tuberías o griferías de un inmueble. Se clasifica en el dominio como una incidencia crítica de alto impacto financiero. |
| **Overconsumption (Sobreconsumo)** | Exceso en el uso de electricidad o agua que supera las estimaciones presupuestarias normales del usuario, frecuentemente ocasionado por dispositivos climatizadores (aire acondicionado) o iluminación dejada encendida por olvido. |
| **Smart Metering (Medición Inteligente)** | Proceso de recolección automatizada y continua de datos de consumo energético y de agua directamente desde la infraestructura física del inmueble, transformando el registro manual mensual en telemetría digital constante. |
| **Maintenance Incident (Incidencia de Mantenimiento)** | Reporte de un daño, avería o mal funcionamiento en los servicios o la estructura de la propiedad que requiere la intervención de personal técnico externo para restituir la habitabilidad y el valor patrimonial del inmueble. |
| **Real-time Alert (Alerta en Tiempo Real)** | Notificación o advertencia automatizada emitida de forma inmediata ante la detección de un evento crítico (como un sobreconsumo o una potencial fuga) para permitir una respuesta preventiva antes del cierre de facturación. |
| **Operational Cost (Costo Operativo)** | Egreso financiero periódico derivado del mantenimiento físico y el pago de los servicios de una propiedad, el cual mella directamente la rentabilidad neta del arrendador si no se controla adecuadamente. |
| **PropTech (Tecnología Inmobiliaria)** | Sector económico que engloba a todas las empresas y soluciones que aplican innovaciones tecnológicas y modelos digitales para optimizar los procesos de interacción, gestión, renta y monitoreo dentro del mercado inmobiliario. |