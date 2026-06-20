#### 4.2.3. Bounded Context: Resource & Asset Management

Este bounded context se encarga de la gestión de la infraestructura física y del inventario tecnológico del ecosistema Nexora. Su función principal es mantener la jerarquía de activos, propiedades, unidades habitacionales y dispositivos IoT, asegurando la correcta vinculación, trazabilidad y seguimiento operativo de los recursos físicos distribuidos en los inmuebles.

Dentro del monolito modular de Nexora, este bounded context actúa como un módulo de soporte clave, ya que proporciona la base estructural que otros contextos necesitan para interpretar telemetría, gestionar incidencias y aplicar reglas comerciales relacionadas con activos.

---

#### 4.2.3.1. Domain Layer

La Domain Layer contiene los conceptos centrales del negocio relacionados con la administración de propiedades, unidades habitacionales, dispositivos IoT y procesos de vinculación técnica. En esta capa se modelan las entidades, objetos de valor, agregados y reglas que permiten representar la estructura física y tecnológica de Nexora.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa se mantiene independiente de frameworks, controladores, persistencia o protocolos de comunicación con hardware. Su responsabilidad principal es representar las reglas de negocio asociadas al inventario de activos y a la asignación de dispositivos a unidades inteligentes.

### Aggregate Root

#### SmartUnit

La entidad **SmartUnit** actúa como Aggregate Root del bounded context, ya que representa la unidad habitacional donde convergen los activos físicos y los dispositivos IoT vinculados.

Desde esta entidad se controla la consistencia del inventario activo de una unidad, asegurando que la vinculación y desvinculación de dispositivos respete las reglas del dominio.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único de la unidad inteligente |
| propertyId | Long | Identificador de la propiedad a la que pertenece la unidad |
| gatewayId | Long | Identificador del gateway asociado a la unidad |
| linkedDevices | List<IoTDevice> | Lista de dispositivos vinculados a la unidad |
| lastSyncAt | DateTime | Última fecha de sincronización del inventario |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| linkDevice(device) | Vincula un dispositivo IoT a la unidad validando compatibilidad y disponibilidad |
| unlinkDevice(deviceId) | Desvincula un dispositivo del inventario activo de la unidad |
| updateSyncStatus(syncDate) | Actualiza el estado de sincronización de la unidad |
| hasDevice(deviceId) | Verifica si un dispositivo se encuentra vinculado a la unidad |

### Entities

#### PropertyAsset

La entidad **PropertyAsset** representa un activo físico dentro de la jerarquía organizacional de Nexora, como un edificio, piso, departamento o unidad administrativa.

Esta entidad permite modelar estructuras jerárquicas mediante una relación padre-hijo.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único del activo físico |
| name | String | Nombre o etiqueta del activo |
| parentId | Long | Identificador del activo padre dentro de la jerarquía |
| type | String | Tipo de activo, como building, floor o unit |
| isActive | Boolean | Indica si el activo se encuentra activo dentro del sistema |
| physicalAddress | PhysicalAddress | Dirección física asociada al activo |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| activate() | Marca el activo como activo |
| deactivate() | Marca el activo como inactivo |
| assignParent(parentId) | Asigna un activo padre dentro de la jerarquía |

---

#### IoTDevice

La entidad **IoTDevice** representa un dispositivo físico registrado dentro del inventario tecnológico de Nexora, como sensores, gateways o actuadores.

Esta entidad mantiene información relevante para controlar su estado operativo, versión de firmware y vinculación con una unidad inteligente.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador único del dispositivo IoT |
| serialNumber | String | Número de serie único del hardware |
| firmwareVersion | String | Versión actual del firmware instalado |
| deviceType | String | Tipo de dispositivo, como sensor, gateway o actuator |
| assignedUnitId | Long | Identificador de la unidad inteligente asignada |
| metadata | DeviceMetadata | Información técnica inmutable del dispositivo |
| operationalStatus | String | Estado operativo actual del dispositivo |

**Métodos:**

| Método | Descripción |
| :--- | :--- |
| assignToUnit(unitId) | Asigna el dispositivo a una unidad inteligente |
| unassign() | Libera el dispositivo de la unidad asignada |
| updateFirmwareVersion(version) | Actualiza la versión de firmware registrada |
| updateOperationalStatus(status) | Actualiza el estado operativo del dispositivo |

### Value Objects

#### DeviceMetadata

El Value Object **DeviceMetadata** representa información técnica inmutable del dispositivo IoT, utilizada para identificar y auditar el hardware registrado.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| macAddress | String | Dirección física única del hardware |
| manufacturer | String | Nombre del fabricante del dispositivo |
| productionDate | DateTime | Fecha de fabricación del hardware |

---

#### PhysicalAddress

El Value Object **PhysicalAddress** representa la ubicación física de una propiedad o activo.

**Atributos:**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| latitude | Double | Coordenada geográfica de latitud |
| longitude | Double | Coordenada geográfica de longitud |
| streetAddress | String | Dirección física legible del inmueble |

### Domain Services

#### DeviceCompatibilityService

El servicio de dominio **DeviceCompatibilityService** encapsula las reglas necesarias para validar si un dispositivo IoT puede vincularse correctamente a una unidad inteligente o gateway.

Este servicio permite mantener la lógica de compatibilidad separada de las entidades principales, facilitando cambios futuros en los criterios técnicos de vinculación.

**Métodos principales:**

| Método | Descripción |
| :--- | :--- |
| isCompatible(device, gatewayId) | Verifica si un dispositivo es compatible con el gateway indicado |
| canBeLinked(device, smartUnit) | Evalúa si un dispositivo puede vincularse a una unidad inteligente |
| validateProvisioning(device, smartUnit) | Valida las condiciones necesarias para completar el pairing |

### Repository Interfaces

#### IPropertyRepository

Abstracción utilizada por el dominio para acceder a la persistencia de propiedades, unidades y jerarquías físicas.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(propertyAsset) | Persiste un activo físico o propiedad |
| findById(id) | Busca un activo físico por identificador |
| findHierarchyByRootId(rootId) | Recupera la jerarquía de activos desde un nodo raíz |

#### IDeviceRepository

Abstracción utilizada para acceder a la persistencia de dispositivos IoT registrados.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(device) | Persiste un dispositivo IoT |
| findBySerialNumber(serialNumber) | Busca un dispositivo por número de serie |
| findByAssignedUnitId(unitId) | Obtiene dispositivos vinculados a una unidad |

### Commands & Queries

Aunque los Commands y Queries son orquestados principalmente desde la Application Layer, se identifican en este bounded context porque representan capacidades relevantes para la gestión de activos y dispositivos.

| Clase | Tipo | Descripción |
| :--- | :--- | :--- |
| RegisterPropertyCommand | Command | Crea una nueva entidad dentro de la jerarquía de activos |
| LinkDeviceToUnitCommand | Command | Ejecuta la vinculación técnica entre un dispositivo IoT y una unidad inteligente |
| UpdateDeviceStateCommand | Command | Modifica el estado operativo o metadatos permitidos de un dispositivo |
| GetPropertyHierarchyQuery | Query | Consulta la estructura jerárquica de propiedades y unidades |
| GetUnitInventoryQuery | Query | Obtiene los dispositivos vinculados a una unidad inteligente |

### Domain Relationships

- Una **PropertyAsset** puede contener otros **PropertyAsset** mediante una relación jerárquica padre-hijo.
- Una **PropertyAsset** puede contener una o varias **SmartUnit**.
- Una **SmartUnit** puede tener múltiples **IoTDevice** vinculados.
- Un **IoTDevice** solo puede estar vinculado a una **SmartUnit** activa a la vez.
- Un **IoTDevice** posee un único **DeviceMetadata**.
- Una **PropertyAsset** puede tener un **PhysicalAddress** asociado.
- **DeviceCompatibilityService** valida si un **IoTDevice** puede vincularse a una **SmartUnit**.

### Domain Rules

1. Un dispositivo IoT no puede estar vinculado a más de una unidad inteligente al mismo tiempo.
2. Toda unidad inteligente debe pertenecer a una propiedad registrada.
3. Un dispositivo debe estar registrado antes de ser vinculado a una unidad.
4. La vinculación de un dispositivo debe validar compatibilidad con el gateway de la unidad.
5. Un dispositivo inactivo no puede ser asignado a una unidad inteligente.
6. La dirección MAC de un dispositivo debe ser única dentro del inventario.
7. Una propiedad inactiva no debe permitir nuevas vinculaciones de dispositivos.
8. El ciclo de vida físico de los dispositivos pertenece a este bounded context y es consumido por otros contextos, como Monitoring o Maintenance.

La Domain Layer constituye la base conceptual del bounded context **Resource & Asset Management** y se refleja en los diagramas de componentes, clases de dominio y diseño de base de datos presentados en las siguientes secciones.

---