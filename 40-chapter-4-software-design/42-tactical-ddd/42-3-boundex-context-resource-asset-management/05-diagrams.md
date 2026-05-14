#### 4.2.3.5. Bounded Context Software Architecture Component Level Diagrams

Este diagrama de nivel 3 describe la arquitectura interna del Bounded Context encargado de la gestión del inventario físico y la configuración de dispositivos IoT dentro del ecosistema Nexora. Se observa un flujo REST donde la Mobile App interactúa con dos controladores especializados: el `AssetManagementController`, responsable de exponer la jerarquía de propiedades y unidades, y el `DeviceController`, encargado de los endpoints de pairing y consulta de estado de hardware.

Ambos controladores delegan la lógica hacia la capa de aplicación, compuesta por los servicios `AssetCommandService` y `DeviceProvisioningCommandService` para operaciones de escritura, y por `PropertyQueryService` e `InventoryQueryService` para las consultas. La infraestructura separa claramente la persistencia relacional (a través de `PropertyRepository` y `DeviceRepository`) de la comunicación IoT (mediante el `DevicePairingAdapter` y el `GatewayStatusService`), asegurando un diseño desacoplado donde los protocolos de enlace con hardware no contaminan la lógica de negocio.

![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/component-diagram.jpg)

---

### 4.2.3.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.3.6.1. Bounded Context Domain Layer Class Diagrams

El diagrama de clases del dominio para el contexto de Resource & Asset Management define las reglas tácticas para la jerarquía de activos físicos y el ciclo de vida de los dispositivos IoT. Se identifican como entidades clave `PropertyAsset`, que modela la unidad física dentro de la jerarquía organizacional del complejo (con soporte para relaciones padre-hijo entre edificios, pisos y unidades), e `IoTDevice`, que representa el hardware registrado como activo fijo con su firmware y tipo de dispositivo.

El Aggregate Root `SmartUnit` actúa como el núcleo donde convergen el espacio físico y los dispositivos vinculados, exponiendo métodos como `linkSensor`, `unlinkSensor` y `updateSyncStatus` para gestionar el inventario activo de una unidad habitacional. Los Value Objects `DeviceMetadata` y `PhysicalAddress` garantizan la inmutabilidad e identidad de los datos de hardware y geolocalización respectivamente. Finalmente, el modelo aplica el patrón CQRS mediante Commands (`RegisterPropertyCommand`, `LinkDeviceToUnitCommand`, `UpdateDeviceStateCommand`) y Queries (`GetPropertyHierarchyQuery`, `GetUnitInventoryQuery`), separando explícitamente las intenciones de escritura de las de lectura.

![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/class-diagram.jpg)

---

#### 4.2.3.6.2. Bounded Context Database Design Diagram

El diseño del esquema de base de datos para el contexto de Resource & Asset Management está orientado a la persistencia de la jerarquía de activos físicos y al ciclo de vida completo de los dispositivos IoT. La tabla `properties` actúa como el núcleo jerárquico del modelo gracias a su auto-referencia mediante la columna `parent_id`, lo que permite representar de forma natural la estructura de complejo → piso → unidad sin necesidad de tablas adicionales.

El esquema establece una cadena de relaciones donde cada `smart_unit` pertenece a una `property`, cada `iot_device` se vincula a una `smart_unit`, y cada dispositivo posee exactamente un registro en `device_metadata` con sus datos físicos únicos (dirección MAC, fabricante y fecha de producción). La tabla `unit_provisioning_log` cierra el diseño asegurando la trazabilidad de cada operación de pairing, lo que facilita auditorías técnicas y el control del historial de comisionamiento de dispositivos en campo.

![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/database-diagram.png)