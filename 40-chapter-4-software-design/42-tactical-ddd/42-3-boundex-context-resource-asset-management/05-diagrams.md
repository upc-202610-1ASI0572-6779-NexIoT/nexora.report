#### 4.2.3.5. Bounded Context Software Architecture Component Level Diagrams

El diagrama de componentes describe la arquitectura interna del bounded context **Resource & Asset Management**, responsable de gestionar la jerarquía física de propiedades, unidades inteligentes, inventario tecnológico y procesos de vinculación de dispositivos IoT dentro de Nexora.

El flujo principal inicia cuando la **Mobile App** consume los endpoints expuestos por **AssetManagementController** y **DeviceController**. El primero permite consultar y administrar propiedades, unidades y jerarquías físicas, mientras que el segundo gestiona operaciones relacionadas con dispositivos, pairing y estado operativo del hardware.

Ambos controladores delegan la ejecución de casos de uso a la Application Layer. Las operaciones de escritura son coordinadas por **AssetCommandService** y **DeviceProvisioningCommandService**, mientras que las consultas son atendidas por **PropertyQueryService** e **InventoryQueryService**. La validación de compatibilidad entre dispositivos y gateways se concentra en **DeviceCompatibilityService**, evitando que esta regla técnica contamine los controladores o repositorios.

La Infrastructure Layer implementa la persistencia mediante **IPropertyRepository** e **IDeviceRepository**, además de integrar componentes técnicos como **DevicePairingAdapter** y **GatewayStatusService**. La información del bounded context se almacena en las tablas correspondientes dentro de la base de datos central de Nexora.

![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/component-diagram_2v.png)

---

### 4.2.3.6. Bounded Context Software Architecture Code Level Diagrams

En esta sección se presentan los diagramas de nivel de código correspondientes al bounded context **Resource & Asset Management**, incluyendo el diagrama de clases del dominio y el diseño de base de datos utilizado para persistir propiedades, unidades, dispositivos y operaciones de provisioning.

---

#### 4.2.3.6.1. Bounded Context Domain Layer Class Diagrams

El diagrama de clases del dominio representa los principales elementos tácticos del bounded context **Resource & Asset Management**. El modelo se centra en **SmartUnit**, que actúa como Aggregate Root al representar la unidad inteligente donde convergen los dispositivos IoT vinculados.

La entidad **PropertyAsset** modela la jerarquía física de propiedades, edificios, pisos y unidades, mientras que **IoTDevice** representa el hardware registrado dentro del inventario tecnológico de Nexora. Los Value Objects **PhysicalAddress** y **DeviceMetadata** encapsulan información inmutable relacionada con ubicación física y datos técnicos del dispositivo.

El modelo también incluye **DeviceCompatibilityService** como Domain Service encargado de validar la compatibilidad entre dispositivos y gateways durante el proceso de vinculación. Finalmente, **IPropertyRepository** e **IDeviceRepository** representan las interfaces de persistencia requeridas por el dominio.

![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/class-diagram_2v.png)

---

#### 4.2.3.6.2. Bounded Context Database Design Diagram

El diseño de base de datos del bounded context **Resource & Asset Management** representa las tablas necesarias para persistir información de activos físicos y tecnológicos dentro de la base de datos central de Nexora. Aunque el sistema mantiene una sola base de datos física por su enfoque de monolito modular, este diagrama muestra únicamente las tablas asociadas a este bounded context.

La tabla `properties` almacena la jerarquía física de propiedades mediante la columna `parent_id`, permitiendo representar estructuras como edificio, piso y unidad. La tabla `smart_units` representa las unidades inteligentes asociadas a una propiedad, mientras que `iot_devices` registra los dispositivos vinculados a dichas unidades.

La tabla `device_metadata` almacena información técnica única de cada dispositivo, como dirección MAC, fabricante y fecha de producción. Finalmente, `unit_provisioning_logs` permite mantener trazabilidad de los procesos de pairing y provisioning realizados sobre los dispositivos IoT.

### Constraints Principales

**properties**
- PK: id
- FK: parent_id → properties.id

**smart_units**
- PK: id
- FK: property_id → properties.id

**iot_devices**
- PK: id
- UK: serial_number
- FK: assigned_unit_id → smart_units.id

**device_metadata**
- PK: id
- UK: mac_address
- FK: device_id → iot_devices.id

**unit_provisioning_logs**
- PK: id
- FK: unit_id → smart_units.id
- FK: device_id → iot_devices.id


![Resource & Asset Management - Database Diagram](/assets/chapter-4/tactical-ddd/bounded-context-resource-asset-management/database-diagram_2v.png)