#### 4.2.3.3. Application Layer

La Application Layer del bounded context **Resource & Asset Management** es responsable de coordinar los casos de uso relacionados con la gestión de propiedades, unidades inteligentes, inventario tecnológico y procesos de vinculación de dispositivos IoT.

Esta capa actúa como intermediaria entre la Interface Layer y el modelo de dominio, orquestando el flujo de ejecución de los procesos de negocio sin contener reglas propias del dominio. Su responsabilidad principal consiste en coordinar comandos, consultas y eventos relacionados con la administración de activos físicos y dispositivos tecnológicos.

### Command Services

#### AssetCommandService

El servicio **AssetCommandService** coordina las operaciones de creación y actualización de la jerarquía física administrada por Nexora.

Este servicio permite registrar propiedades, crear unidades inteligentes y mantener la estructura organizacional de los activos físicos.

**Responsabilidades principales:**

- Registrar nuevas propiedades.
- Crear unidades inteligentes.
- Actualizar información de activos físicos.
- Gestionar la estructura jerárquica de inmuebles.
- Coordinar operaciones de alta y baja de activos.

---

#### DeviceProvisioningCommandService

El servicio **DeviceProvisioningCommandService** coordina el proceso de vinculación técnica entre dispositivos IoT y unidades inteligentes.

Este servicio valida la compatibilidad entre dispositivos y gateways, ejecuta el flujo de provisioning y actualiza el inventario tecnológico de la unidad.

**Responsabilidades principales:**

- Gestionar procesos de pairing de dispositivos.
- Validar compatibilidad entre sensores y gateways.
- Asignar dispositivos a unidades inteligentes.
- Actualizar estados operativos de dispositivos.
- Registrar eventos de provisioning.

### Query Services

#### PropertyQueryService

El servicio **PropertyQueryService** gestiona las consultas relacionadas con la estructura física de propiedades, edificios y unidades inteligentes.

**Responsabilidades principales:**

- Recuperar jerarquías de propiedades.
- Consultar información de activos físicos.
- Obtener detalles de unidades inteligentes.
- Generar vistas organizacionales de infraestructura.

---

#### InventoryQueryService

El servicio **InventoryQueryService** gestiona las consultas relacionadas con el inventario tecnológico y los dispositivos IoT registrados.

**Responsabilidades principales:**

- Consultar dispositivos asignados a una unidad.
- Recuperar información técnica de hardware.
- Consultar estados operativos de dispositivos.
- Obtener disponibilidad de activos tecnológicos.

### Commands

Los principales comandos identificados dentro de este bounded context son:

| Command | Descripción |
| :--- | :--- |
| RegisterPropertyCommand | Registra una nueva propiedad dentro de la jerarquía de activos |
| RegisterSmartUnitCommand | Registra una nueva unidad inteligente dentro de una propiedad |
| LinkDeviceToUnitCommand | Ejecuta la vinculación de un dispositivo IoT a una unidad inteligente |
| UnlinkDeviceCommand | Elimina la vinculación entre un dispositivo y una unidad |
| UpdateDeviceStateCommand | Actualiza el estado operativo de un dispositivo |
| UpdatePropertyStatusCommand | Modifica el estado de actividad de una propiedad o activo físico |

### Queries

Las consultas principales del bounded context son:

| Query | Descripción |
| :--- | :--- |
| GetPropertyHierarchyQuery | Obtiene la estructura completa de propiedades y unidades |
| GetPropertyDetailsQuery | Recupera información detallada de una propiedad |
| GetUnitInventoryQuery | Obtiene los dispositivos vinculados a una unidad inteligente |
| GetDeviceDetailsQuery | Recupera información técnica de un dispositivo |
| GetAvailableDevicesQuery | Obtiene los dispositivos disponibles para asignación |

### Event Handling

Este bounded context genera y procesa eventos relacionados con la administración de activos y dispositivos IoT.

Los eventos principales identificados son:

| Evento | Descripción |
| :--- | :--- |
| PropertyRegisteredEvent | Indica que una nueva propiedad fue registrada |
| SmartUnitCreatedEvent | Indica que una nueva unidad inteligente fue creada |
| DevicePairedEvent | Indica que un dispositivo fue vinculado exitosamente |
| DeviceUnpairedEvent | Indica que un dispositivo fue desvinculado |
| DeviceStatusUpdatedEvent | Indica que el estado operativo de un dispositivo cambió |

### Capacidades de Aplicación

La Application Layer soporta las siguientes capacidades principales del bounded context:

- Gestión de propiedades e infraestructura física.
- Administración de unidades inteligentes.
- Gestión de inventario tecnológico.
- Provisioning de dispositivos IoT.
- Consulta de jerarquías organizacionales.
- Consulta de inventario y estado de hardware.
- Control del ciclo de vida de dispositivos.

### Beneficios de la Application Layer

- Centraliza la coordinación de los casos de uso.
- Facilita la implementación del patrón CQRS.
- Mantiene separadas las operaciones de lectura y escritura.
- Simplifica la integración con dispositivos IoT.
- Mejora la mantenibilidad y escalabilidad del sistema.
- Facilita la incorporación futura de nuevos tipos de activos y dispositivos.

La Application Layer constituye el punto principal de orquestación del bounded context **Resource & Asset Management**, coordinando la interacción entre la Interface Layer, los servicios de dominio, los repositorios y los componentes de infraestructura responsables de la administración de activos físicos y dispositivos IoT dentro de Nexora.

---

<div style="page-break-after: always;"></div>