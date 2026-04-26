#### 4.2.3.4. Infrastructure Layer

**Backend:**

---

### Implementación de Repositorios

| Clase | Interfaz Implementada | Descripción |
| :--- | :--- | :--- |
| PropertyRepository | IPropertyRepository | Gestiona la persistencia de la jerarquía de inmuebles y unidades en la base de datos relacional |
| DeviceRepository | IDeviceRepository | Maneja el ciclo de vida de los registros de hardware y su asignación técnica |

---

### IoT Communication

| Clase | Descripción |
| :--- | :--- |
| DevicePairingAdapter | Adaptador técnico que gestiona los protocolos de enlace y handshaking entre el Gateway y los sensores |
| GatewayStatusService | Servicio de infraestructura que monitorea el "heartbeat" y la salud de la red local de dispositivos |