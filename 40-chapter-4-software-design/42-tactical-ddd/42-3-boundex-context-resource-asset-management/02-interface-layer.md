#### 4.2.3.2. Interface Layer

La Interface Layer del bounded context **Resource & Asset Management** es responsable de exponer las capacidades de gestión de propiedades, unidades inteligentes, inventario de dispositivos y procesos de vinculación técnica mediante APIs RESTful.

Esta capa permite que las aplicaciones cliente de Nexora consulten y administren la jerarquía física de inmuebles, revisen el inventario tecnológico asociado a cada unidad y ejecuten operaciones de provisioning o pairing de dispositivos IoT sin acceder directamente a las entidades del dominio.

Siguiendo los principios de separación de responsabilidades, la Interface Layer recibe solicitudes HTTP, transforma la información entre recursos externos y objetos internos, valida datos básicos de entrada y delega la ejecución de los casos de uso a la Application Layer.

### Controllers Principales

#### AssetManagementController

El **AssetManagementController** actúa como punto de entrada para las operaciones relacionadas con propiedades, unidades inteligentes y jerarquía física de activos.

Este controlador permite registrar, consultar y organizar la estructura física administrada por Nexora.

#### DeviceController

El **DeviceController** actúa como punto de entrada para las operaciones relacionadas con dispositivos IoT, inventario tecnológico, estado operativo y vinculación con unidades inteligentes.

Este controlador permite ejecutar procesos de pairing, consultar dispositivos asignados y actualizar el estado operativo del hardware registrado.

### Endpoints Expuestos

| Método | Endpoint | Descripción |
|----------|----------|-------------|
| GET | /api/v1/assets/properties | Consulta la jerarquía física de propiedades y activos |
| POST | /api/v1/assets/properties | Registra una nueva propiedad o activo físico |
| GET | /api/v1/assets/units/{id}/inventory | Lista los dispositivos vinculados a una unidad inteligente |
| POST | /api/v1/devices/pair | Ejecuta la vinculación de un dispositivo IoT con una unidad inteligente |
| GET | /api/v1/devices/{id}/status | Consulta el estado operativo de un dispositivo |
| PUT | /api/v1/devices/{id}/status | Actualiza el estado operativo de un dispositivo |

### Resources

#### PropertyResource

Recurso utilizado para exponer la información de propiedades, activos físicos y unidades inteligentes.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | Long | Identificador del activo físico |
| name | String | Nombre o etiqueta de la propiedad o unidad |
| parentId | Long | Identificador del activo padre dentro de la jerarquía |
| type | String | Tipo de activo físico |
| isActive | Boolean | Estado de actividad del activo |
| streetAddress | String | Dirección física legible del inmueble |

---

#### DeviceInventoryResource

Recurso utilizado para exponer información técnica y operativa de los dispositivos IoT vinculados a una unidad.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| deviceId | Long | Identificador único del dispositivo |
| serialNumber | String | Número de serie del hardware |
| deviceType | String | Tipo de dispositivo IoT |
| firmwareVersion | String | Versión actual del firmware |
| operationalStatus | String | Estado operativo del dispositivo |
| assignedUnitId | Long | Unidad inteligente a la que se encuentra vinculado |

---

#### ProvisioningResource

Recurso utilizado para transportar la información necesaria durante el proceso de vinculación o pairing de un dispositivo IoT.

**Campos principales:**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| deviceId | Long | Identificador del dispositivo a vincular |
| unitId | Long | Identificador de la unidad inteligente |
| gatewayId | Long | Identificador del gateway local |
| pairingCode | String | Código utilizado para validar el proceso de vinculación |

### Responsabilidades de la Interface Layer

- Recibir solicitudes HTTP provenientes de aplicaciones cliente.
- Exponer capacidades de gestión de propiedades y dispositivos mediante APIs RESTful.
- Transformar entidades de dominio en recursos consumibles por el cliente.
- Validar formatos básicos de entrada.
- Delegar casos de uso a la Application Layer.
- Retornar respuestas HTTP estructuradas.
- Gestionar códigos de estado y mensajes de error.
- Mantener desacoplada la comunicación externa de la lógica de negocio.

La Interface Layer constituye la capa de presentación del bounded context **Resource & Asset Management** y se encuentra representada principalmente por **AssetManagementController**, **DeviceController** y los recursos utilizados para exponer la jerarquía física, el inventario tecnológico y los procesos de vinculación de dispositivos dentro de Nexora.

---