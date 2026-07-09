#### 4.2.3.4. Infrastructure Layer

La Infrastructure Layer del bounded context **Resource & Asset Management** contiene las implementaciones técnicas necesarias para soportar la persistencia de propiedades, unidades inteligentes y dispositivos IoT, así como la integración con los mecanismos de provisioning y monitoreo de hardware desplegados en la infraestructura física de Nexora.

Siguiendo los principios de Domain-Driven Design, esta capa implementa las abstracciones definidas por el dominio y proporciona mecanismos concretos para almacenamiento de información, comunicación con dispositivos IoT y ejecución de procesos técnicos relacionados con el inventario de activos.

### Repository Implementations

#### PropertyRepository

Implementación concreta de la interfaz **IPropertyRepository**, responsable de persistir y recuperar la información relacionada con propiedades, activos físicos y unidades inteligentes.

Este repositorio permite gestionar la jerarquía organizacional de inmuebles utilizada por el resto de los bounded contexts del sistema.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(propertyAsset) | Persiste un activo físico o propiedad |
| findById(id) | Recupera un activo físico por identificador |
| findHierarchyByRootId(rootId) | Obtiene la estructura jerárquica completa desde un nodo raíz |
| update(propertyAsset) | Actualiza información de una propiedad existente |

---

#### DeviceRepository

Implementación concreta de la interfaz **IDeviceRepository**, responsable de gestionar el ciclo de vida completo de los dispositivos IoT registrados dentro de Nexora.

Este repositorio mantiene la información técnica, asignaciones y estado operativo de los dispositivos.

**Operaciones principales:**

| Método | Descripción |
| :--- | :--- |
| save(device) | Persiste un dispositivo IoT |
| findById(id) | Recupera un dispositivo por identificador |
| findBySerialNumber(serialNumber) | Busca un dispositivo por número de serie |
| findByAssignedUnitId(unitId) | Obtiene dispositivos vinculados a una unidad |
| update(device) | Actualiza información técnica u operativa |

Ambos repositorios son implementados mediante **Spring Data JPA**, permitiendo desacoplar la lógica del dominio de los detalles específicos de persistencia.

### IoT Communication Components

#### DevicePairingAdapter

El componente **DevicePairingAdapter** actúa como adaptador técnico entre la plataforma Nexora y la infraestructura IoT desplegada en campo.

Su función principal consiste en gestionar los procesos de provisioning, pairing y validación técnica requeridos para vincular sensores y dispositivos con una unidad inteligente.

**Responsabilidades principales:**

- Ejecutar procesos de pairing entre dispositivos y gateways.
- Gestionar protocolos de descubrimiento y enlace.
- Validar la identidad técnica de dispositivos IoT.
- Traducir mensajes de infraestructura a objetos de aplicación.
- Registrar resultados del proceso de provisioning.

---

#### GatewayStatusService

El componente **GatewayStatusService** monitorea continuamente el estado operativo de los gateways desplegados en las propiedades administradas por Nexora.

Este servicio permite verificar disponibilidad, conectividad y salud general de la infraestructura local.

**Responsabilidades principales:**

- Monitorear señales heartbeat provenientes de gateways.
- Detectar interrupciones de conectividad.
- Verificar disponibilidad de dispositivos asociados.
- Registrar eventos relacionados con la infraestructura local.
- Proporcionar información operativa para diagnósticos técnicos.

### Database Layer

#### Nexora Database

El bounded context **Resource & Asset Management** persiste su información dentro de la base de datos central de Nexora, manteniendo separación lógica mediante tablas especializadas para propiedades, unidades inteligentes, dispositivos IoT y operaciones de provisioning.

### Main Tables

#### properties

Almacena la jerarquía física de propiedades, edificios, pisos y activos organizacionales.

**Campos principales:**

- id
- name
- parent_id
- type
- is_active

---

#### smart_units

Almacena las unidades inteligentes administradas por Nexora.

**Campos principales:**

- id
- property_id
- gateway_id
- last_sync_at

---

#### iot_devices

Almacena los dispositivos IoT registrados en el inventario tecnológico.

**Campos principales:**

- id
- serial_number
- firmware_version
- device_type
- assigned_unit_id

---

#### device_metadata

Almacena información técnica inmutable asociada a los dispositivos.

**Campos principales:**

- id
- device_id
- mac_address
- manufacturer
- production_date

---

#### unit_provisioning_logs

Registra el historial de procesos de vinculación y provisioning ejecutados sobre los dispositivos.

**Campos principales:**

- id
- device_id
- unit_id
- provisioning_date
- provisioning_status

### Infrastructure Responsibilities

- Implementar los mecanismos de persistencia definidos por el dominio.
- Gestionar el almacenamiento de propiedades y unidades inteligentes.
- Administrar el ciclo de vida de dispositivos IoT.
- Ejecutar procesos de provisioning y pairing.
- Monitorear la salud operativa de gateways.
- Proporcionar acceso eficiente a información de inventario.
- Mantener trazabilidad de las operaciones realizadas sobre los activos.

### Beneficios de la Infrastructure Layer

- Persistencia desacoplada de la lógica de negocio.
- Integración transparente con dispositivos IoT.
- Gestión centralizada del inventario tecnológico.
- Trazabilidad completa de procesos de provisioning.
- Reutilización de repositorios mediante patrones DDD.
- Facilidad para incorporar nuevos tipos de dispositivos y protocolos.

La Infrastructure Layer constituye el soporte técnico del bounded context **Resource & Asset Management**, permitiendo integrar la gestión de activos físicos y dispositivos IoT con los procesos operativos implementados por la plataforma Nexora.

---

<div style="page-break-after: always;"></div>