#### 4.2.3. Bounded Context: Resource & Asset Management

Este Bounded Context se encarga de la gestión de la infraestructura física y el inventario tecnológico del ecosistema Nexora. Su función principal es mantener la jerarquía de activos (propiedades y unidades) y asegurar la correcta vinculación y seguimiento del estado de los dispositivos IoT y sensores distribuidos en el complejo.

---

#### 4.2.3.1. Domain Layer

**App Móvil:**

En esta capa se describen las clases que representan las abstracciones del inventario para el administrador y el personal técnico. Se incluyen clases de serialización para gestionar el mapeo físico de los dispositivos en las unidades habitacionales.

---

### DTO

**AssetSummaryDto**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| propertyId | int | Identificador de la propiedad o complejo |
| unitName | string | Etiqueta de la unidad habitacional (ej. "Apto 101") |
| deviceCount | int | Número total de dispositivos vinculados |

---

**DeviceStatusDto**

| Atributo | Tipo | Descripción |
| :--- | :--- | :--- |
| deviceId | int | Identificador único del dispositivo físico |
| model | string | Modelo o tipo de hardware |
| connectionState | string | Estado actual de conexión (Sincronizado, Offline) |
| batteryLevel | int | Nivel de energía reportado por el dispositivo |

---

**Backend:**

En esta capa se describen las clases que representan el núcleo del dominio de gestión de activos. Se incluyen las entidades que definen la jerarquía física, los objetos de valor de hardware y la lógica de comisionamiento de dispositivos bajo el patrón CQRS.

---

#### Entities

**PropertyAsset**

Representa la unidad física dentro de la jerarquía organizacional del sistema.

| Atributo | Tipo |
| :--- | :--- |
| Id | int |
| Name | string |
| ParentId | int |
| Type | string |
| IsActive | bool |

---

**IoTDevice**

Representa el hardware físico registrado en el inventario desde su perspectiva de activo fijo.

| Atributo | Tipo |
| :--- | :--- |
| Id | int |
| SerialNumber | string |
| FirmwareVersion | string |
| DeviceType | string |
| AssignedUnitId | int |

---

#### Value Objects

**DeviceMetadata**

| Atributo | Descripción |
| :--- | :--- |
| MACAddress | Dirección física única del hardware para su identificación |
| Manufacturer | Nombre del fabricante del componente |
| ProductionDate | Fecha de fabricación para control de ciclos de vida |

---

**PhysicalAddress**

| Atributo | Descripción |
| :--- | :--- |
| Latitude | Coordenada geográfica para geolocalización de la propiedad |
| Longitude | Coordenada geográfica para geolocalización de la propiedad |
| StreetAddress | Dirección física legible del inmueble |

---

#### Aggregates

**SmartUnit**

Representa la unidad habitacional como el núcleo donde convergen el espacio físico y los dispositivos vinculados.

| Atributo | Tipo |
| :--- | :--- |
| UnitId | int |
| GatewayId | int |
| LinkedDevices | List |
| LastSyncAt | DateTime |

---

| Método | Descripción |
| :--- | :--- |
| LinkSensor | Vincula un sensor a la unidad validando compatibilidad con el Gateway local |
| UnlinkSensor | Desvincula un dispositivo del inventario activo de la unidad |
| UpdateSyncStatus | Refleja el estado de sincronización global de la infraestructura de la unidad |

---

#### Commands & Queries

| Clase | Descripción |
| :--- | :--- |
| RegisterPropertyCommand | Crea una nueva entidad en la jerarquía de activos del sistema |
| LinkDeviceToUnitCommand | Ejecuta el proceso de vinculación técnica entre un sensor y una unidad |
| UpdateDeviceStateCommand | Modifica los metadatos o el estado operativo de un activo de hardware |
| GetPropertyHierarchyQuery | Consulta la estructura de árbol de las propiedades y sus unidades |
| GetUnitInventoryQuery | Obtiene la lista detallada de todos los activos asignados a una unidad |