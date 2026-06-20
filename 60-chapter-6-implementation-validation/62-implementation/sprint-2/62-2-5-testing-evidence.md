#### 6.2.2.5. Testing Suite Evidence for Sprint Review

En esta sección se explica y presenta el conjunto de Unit Tests, Integration Tests y Acceptance Tests automatizados para los Web Services de Nexora en el Sprint 2, orientados a asegurar la robustez de los flujos del contexto de **Resource & Asset Management**.

---

### **1. Unit Tests (Pruebas Unitarias)**

Las pruebas unitarias se enfocan en verificar de manera aislada los comportamientos y validaciones de la lógica de dominio. Específicamente, se diseñaron pruebas para la entidad de dominio `Device`, asegurando que cumpla con las reglas de negocio críticas de inicialización, sincronización y asignación.

* **Clase Evaluada:** `Device` ([Device.cs](file:///d:/u/IoT/nexora.webservice/src/contexts/resource-asset-management/Domain/Entities/Device.cs))
* **Comportamientos Evaluados:**
  * **Inicialización Válida:** Verificación de que un dispositivo se cree correctamente con su ID, estado inicial de conexión y fecha de sincronización.
  * **Validación de Identificador Obligatorio:** Comprobación de que se lance una excepción (`ArgumentException`) si se intenta instanciar un dispositivo sin un identificador válido (nulo, vacío o espacios).
  * **Vinculación a Propiedad:** Asegurar que el método `AssignToProperty` modifique adecuadamente la propiedad externa asociada.
  * **Actualización de Estado de Sincronización:** Validación de que el estado de conexión (`ConnectionStatus`) y la última sincronización (`LastSyncAt`) se actualicen adecuadamente tras eventos de telemetría o heartbeat.

#### Código del Unit Test:
```csharp
// Ubicación: src/test/Nexora.WebApi.Tests/DeviceTests.cs
using System;
using Nexora.Domain.Entities;
using Nexora.Domain.Enums;
using Xunit;

namespace Nexora.WebApi.Tests
{
    public class DeviceTests
    {
        [Fact]
        public void CreateDevice_WithValidData_ShouldInitializeCorrectly()
        {
            var id = "ESP32-HW-99";
            var status = ConnectionStatus.Offline;
            var syncTime = DateTime.UtcNow;

            var device = new Device(id, status, syncTime);

            Assert.Equal(id, device.Id);
            Assert.Equal(status, device.ConnectionStatus);
            Assert.Equal(syncTime, device.LastSyncAt);
            Assert.Null(device.PropertyId);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData(null)]
        public void CreateDevice_WithInvalidId_ShouldThrowArgumentException(string invalidId)
        {
            Assert.Throws<ArgumentException>(() => new Device(invalidId, ConnectionStatus.Offline, DateTime.UtcNow));
        }

        [Fact]
        public void AssignToProperty_ShouldUpdatePropertyId()
        {
            var device = new Device("ESP32-HW-99", ConnectionStatus.Offline, DateTime.UtcNow);
            long expectedPropertyId = 123;

            device.AssignToProperty(expectedPropertyId);

            Assert.Equal(expectedPropertyId, device.PropertyId);
        }

        [Fact]
        public void UpdateSync_ShouldUpdateStatusAndSyncTime()
        {
            var device = new Device("ESP32-HW-99", ConnectionStatus.Offline, DateTime.UtcNow.AddMinutes(-5));
            var newStatus = ConnectionStatus.Online;
            var newSyncTime = DateTime.UtcNow;

            device.UpdateSync(newStatus, newSyncTime);

            Assert.Equal(newStatus, device.ConnectionStatus);
            Assert.Equal(newSyncTime, device.LastSyncAt);
        }
    }
}
```

---

### **2. Integration & Acceptance Tests bajo Enfoque BDD**

Para las pruebas de aceptación e integración bajo el enfoque de **Behavior-Driven Development (BDD)**, se definieron escenarios legibles en Gherkin (`.feature`) y sus correspondientes clases de definición de pasos (Steps). Estos escenarios validan el comportamiento del sistema desde el punto de vista del usuario final.

* **User Story Relacionada:** **US37: Gestión de vinculación de dispositivos en propiedad**. Permite que el Arrendador asocie gateways y sensores a una de sus propiedades para iniciar la monitorización.

#### Archivo Feature:
```gherkin
# Ubicación: src/test/Nexora.WebApi.Tests/Features/DeviceManagement.feature
Feature: Device Management
  As a Landlord
  I want to register and manage my IoT devices
  So that I can monitor the resource usage of my properties

  Scenario: Successfully register a new device to a property
    Given a property with ID 5 exists
    And a device with ID "ESP32-HW-01" is not associated with any property
    When the landlord associates the device "ESP32-HW-01" with property ID 5
    Then the device should have property ID 5 assigned
```

#### Código de los Pasos (Steps):
```csharp
// Ubicación: src/test/Nexora.WebApi.Tests/Steps/DeviceManagementSteps.cs
using System;
using Nexora.Domain.Entities;
using Nexora.Domain.Enums;
using Xunit;

namespace Nexora.WebApi.Tests.Steps
{
    public class DeviceManagementSteps
    {
        private long _propertyId;
        private Device _device;

        [Fact]
        public void Scenario_SuccessfullyRegisterANewDeviceToAProperty()
        {
            // Given a property with ID 5 exists
            GivenAPropertyWithIDExists(5);

            // And a device with ID "ESP32-HW-01" is not associated with any property
            AndADeviceWithIDIsNotAssociatedWithAnyProperty("ESP32-HW-01");

            // When the landlord associates the device "ESP32-HW-01" with property ID 5
            WhenTheLandlordAssociatesTheDeviceWithPropertyID("ESP32-HW-01", 5);

            // Then the device should have property ID 5 assigned
            ThenTheDeviceShouldHavePropertyIDAssigned(5);
        }

        private void GivenAPropertyWithIDExists(long propertyId)
        {
            _propertyId = propertyId;
        }

        private void AndADeviceWithIDIsNotAssociatedWithAnyProperty(string deviceId)
        {
            _device = new Device(deviceId, ConnectionStatus.Offline, DateTime.UtcNow);
            Assert.Null(_device.PropertyId);
        }

        private void WhenTheLandlordAssociatesTheDeviceWithPropertyID(string deviceId, long propertyId)
        {
            Assert.Equal(deviceId, _device.Id);
            _device.AssignToProperty(propertyId);
        }

        private void ThenTheDeviceShouldHavePropertyIDAssigned(long propertyId)
        {
            Assert.Equal(propertyId, _device.PropertyId);
        }
    }
}
```

---

### **3. Evidencia de Ejecución de Pruebas**

Se ejecutó la suite completa de pruebas en el entorno de desarrollo local mediante la CLI de `.NET Core`, obteniendo un resultado 100% exitoso:

```bash
dotnet test
```

**Resultado de la Consola:**
```text
Passed!  - Failed:     0, Passed:     7, Skipped:     0, Total:     7, Duration: 680 ms - Nexora.WebApi.Tests.dll (net8.0)
```

---

### **4. Repositorios y Commits Relacionados**

A continuación se detalla la relación de commits vinculados con los avances del Testing de este Sprint en el repositorio de control de versiones:

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Committed on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `628b722` | test: add unit and BDD tests for device management contexts | Implement Unit Tests for Device entity domain logic and Gherkin BDD scenario for registering new devices to properties. | 20/06/2026 |