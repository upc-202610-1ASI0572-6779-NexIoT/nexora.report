#### 4.2.3.2. Interface Layer

**Backend:**

Define los recursos y controladores que permiten la gestión del inventario físico y la configuración de dispositivos a través de la API del sistema Nexora.

---

### Resources

| Clase | Descripción |
| :--- | :--- |
| PropertyResource | Expone los detalles de la infraestructura (edificios, pisos, unidades) |
| DeviceInventoryResource | Provee la información técnica y metadatos de los sensores y gateways |
| ProvisioningResource | Gestiona los datos necesarios para el proceso de vinculación de hardware |

---

### Controllers

**AssetManagementController**

| Ruta específica | Descripción |
| :--- | :--- |
| /api/v1/assets/properties | Gestión y consulta de la jerarquía física de inmuebles |
| /api/v1/assets/units/{id}/inventory | Listado de dispositivos vinculados a una unidad específica |

---

**DeviceController**

| Ruta específica | Descripción |
| :--- | :--- |
| /api/v1/devices/pair | Endpoint para ejecutar la vinculación de un nuevo sensor al Gateway |
| /api/v1/devices/{id}/status | Actualización y consulta del estado operativo del hardware |