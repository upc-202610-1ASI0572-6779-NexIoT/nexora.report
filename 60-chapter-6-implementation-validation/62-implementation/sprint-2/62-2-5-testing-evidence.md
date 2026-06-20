#### 6.2.2.5. Testing Suite Evidence for Sprint Review

En esta sección se explica y presenta el conjunto de Unit Tests, Integration Tests y Acceptance Tests automatizados para los Web Services de Nexora en el Sprint 2. Las pruebas están organizadas en dos contextos acotados principales: **Resource & Asset Management** y **Service Monitoring & Intelligence**.

---

### **1. Unit Tests (Pruebas Unitarias)**

Las pruebas unitarias se enfocan en verificar de manera aislada los comportamientos y validaciones de las reglas de negocio críticas definidas dentro de las entidades del dominio de la aplicación.

#### **A. Pruebas Unitarias de Dispositivos (Resource & Asset Management)**
* **Clase Evaluada:** `Device`
* **Comportamientos Evaluados:**
  * **Inicialización Válida:** Verificación de que un dispositivo se cree correctamente con su ID, estado inicial de conexión y fecha de sincronización.
  * **Validación de Identificador Obligatorio:** Lanzamiento de excepción (`ArgumentException`) ante identificadores nulos, vacíos o con espacios.
  * **Vinculación a Propiedad:** Asignación del identificador de la propiedad a la que pertenece el dispositivo.
  * **Actualización de Sincronización:** Actualización del estado de conexión y marca de tiempo tras telemetrías.

#### **B. Pruebas Unitarias de Alertas (Service Monitoring & Intelligence)**
* **Clase Evaluada:** `Alert`
* **Comportamientos Evaluados:**
  * **Inicialización Válida:** Creación correcta con severidad (`AlertSeverity`), tipo descriptivo, fecha y origen.
  * **Validación de DeviceId:** Lanzamiento de excepción ante identificador de dispositivo vacío o nulo.
  * **Validación de Tipo Obligatorio:** Lanzamiento de excepción ante tipos de alerta vacíos.

#### Código de los Unit Tests:
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
        public void CreateDevice_WithInvalidId_ShouldThrowArgumentException(
            string invalidId)
        {
            Assert.Throws<ArgumentException>(() => 
                new Device(invalidId, ConnectionStatus.Offline, DateTime.UtcNow));
        }

        [Fact]
        public void AssignToProperty_ShouldUpdatePropertyId()
        {
            var device = new Device("ESP32-HW-99", 
                ConnectionStatus.Offline, DateTime.UtcNow);
            long expectedPropertyId = 123;

            device.AssignToProperty(expectedPropertyId);

            Assert.Equal(expectedPropertyId, device.PropertyId);
        }

        [Fact]
        public void UpdateSync_ShouldUpdateStatusAndSyncTime()
        {
            var device = new Device("ESP32-HW-99", 
                ConnectionStatus.Offline, DateTime.UtcNow.AddMinutes(-5));
            var newStatus = ConnectionStatus.Online;
            var newSyncTime = DateTime.UtcNow;

            device.UpdateSync(newStatus, newSyncTime);

            Assert.Equal(newStatus, device.ConnectionStatus);
            Assert.Equal(newSyncTime, device.LastSyncAt);
        }
    }
}
```

```csharp
// Ubicación: src/test/Nexora.WebApi.Tests/AlertTests.cs
using System;
using Nexora.Domain.Entities;
using Nexora.Domain.Enums;
using Xunit;

namespace Nexora.WebApi.Tests
{
    public class AlertTests
    {
        [Fact]
        public void CreateAlert_WithValidData_ShouldInitializeCorrectly()
        {
            var severity = AlertSeverity.Critical;
            var type = "Critical Gas Leak Detected";
            var timestamp = DateTime.UtcNow;
            var deviceId = "ESP32-HW-01";

            var alert = new Alert(severity, type, timestamp, deviceId);

            Assert.Equal(severity, alert.Severity);
            Assert.Equal(type, alert.Type);
            Assert.Equal(timestamp, alert.Timestamp);
            Assert.Equal(deviceId, alert.DeviceId);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData(null)]
        public void CreateAlert_WithInvalidDeviceId_ShouldThrowArgumentException(
            string invalidDeviceId)
        {
            Assert.Throws<ArgumentException>(() => 
                new Alert(AlertSeverity.Warning, "Gas Leak", 
                    DateTime.UtcNow, invalidDeviceId));
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData(null)]
        public void CreateAlert_WithInvalidType_ShouldThrowArgumentException(
            string invalidType)
        {
            Assert.Throws<ArgumentException>(() => 
                new Alert(AlertSeverity.Warning, invalidType, 
                    DateTime.UtcNow, "ESP32-HW-01"));
        }
    }
}
```

---

### **2. Integration & Acceptance Tests bajo Enfoque BDD**

Validación bajo **Behavior-Driven Development (BDD)** usando escenarios Gherkin (`.feature`) y Steps ejecutados con XUnit.

#### **A. Vinculación de Dispositivos (US37: Gestión de vinculación de dispositivos)**
* **Objetivo:** Asociación efectiva de dispositivos físicos a propiedades.

##### Archivo Feature:
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

##### Código de los Pasos (Steps):
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
            GivenAPropertyWithIDExists(5);
            AndADeviceWithIDIsNotAssociatedWithAnyProperty("ESP32-HW-01");
            WhenTheLandlordAssociatesTheDeviceWithPropertyID("ESP32-HW-01", 5);
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

        private void WhenTheLandlordAssociatesTheDeviceWithPropertyID(
            string deviceId, long propertyId)
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

#### **B. Consulta y Filtrado de Alertas (US33: Visualización de alertas recientes / TS13)**
* **Objetivo:** Filtrado rápido de alertas críticas por severidad y tipo.

##### Archivo Feature:
```gherkin
# Ubicación: src/test/Nexora.WebApi.Tests/Features/AlertManagement.feature
Feature: Alert Query and Filtering
  As a Landlord
  I want to filter the security and telemetry alerts of my properties
  So that I can quickly identify critical risks

  Scenario: Filter alerts by severity and type
    Given the system has registered alerts:
      | DeviceId    | Severity | Type                      |
      | ESP32-HW-01 | Critical | Critical Gas Leak Detected|
      | ESP32-HW-02 | Warning  | Low Voltage Warning       |
      | ESP32-HW-01 | Critical | Intrusion Alert           |
    When the landlord filters alerts by severity "Critical" and type "Gas"
    Then the result should contain 1 alert
    And the alert should have type "Critical Gas Leak Detected" and severity "Critical"
```

##### Código de los Pasos (Steps):
```csharp
// Ubicación: src/test/Nexora.WebApi.Tests/Steps/AlertManagementSteps.cs
using System;
using System.Collections.Generic;
using System.Linq;
using Nexora.Domain.Entities;
using Nexora.Domain.Enums;
using Xunit;

namespace Nexora.WebApi.Tests.Steps
{
    public class AlertManagementSteps
    {
        private List<Alert> _systemAlerts = new();
        private List<Alert> _filteredResults = new();

        [Fact]
        public void Scenario_FilterAlertsBySeverityAndType()
        {
            GivenTheSystemHasRegisteredAlerts();
            WhenTheLandlordFiltersAlertsBySeverityAndType(
                AlertSeverity.Critical, "Gas");
            ThenTheResultShouldContainAlerts(1);
            AndTheAlertShouldHaveTypeAndSeverity(
                "Critical Gas Leak Detected", AlertSeverity.Critical);
        }

        private void GivenTheSystemHasRegisteredAlerts()
        {
            _systemAlerts = new List<Alert>
            {
                new Alert(AlertSeverity.Critical, "Critical Gas Leak Detected", 
                    DateTime.UtcNow, "ESP32-HW-01"),
                new Alert(AlertSeverity.Warning, "Low Voltage Warning", 
                    DateTime.UtcNow, "ESP32-HW-02"),
                new Alert(AlertSeverity.Critical, "Intrusion Alert", 
                    DateTime.UtcNow, "ESP32-HW-01")
            };
        }

        private void WhenTheLandlordFiltersAlertsBySeverityAndType(
            AlertSeverity severity, string typeQuery)
        {
            _filteredResults = _systemAlerts
                .Where(a => a.Severity == severity && 
                            a.Type.Contains(typeQuery, 
                                StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        private void ThenTheResultShouldContainAlerts(int expectedCount)
        {
            Assert.Equal(expectedCount, _filteredResults.Count);
        }

        private void AndTheAlertShouldHaveTypeAndSeverity(
            string expectedType, AlertSeverity expectedSeverity)
        {
            var alert = _filteredResults.First();
            Assert.Equal(expectedType, alert.Type);
            Assert.Equal(expectedSeverity, alert.Severity);
        }
    }
}
```

---

### **3. Evidencia de Ejecución de Pruebas**

Ejecución de la suite completa con 100% de éxito:

```bash
dotnet test
```

**Consola:**
```text
Passed!  - Failed:     0, Passed:    15, Skipped:     0, Total:    15, Duration: 196 ms - Nexora.WebApi.Tests.dll (net8.0)
```

---

### **4. Repositorios y Commits Relacionados**

Relación de commits vinculados con los avances del Testing de este Sprint:

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Committed on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `628b722` | test: add unit and BDD tests for device management contexts | Implement Unit Tests for Device entity domain logic and Gherkin BDD scenario for registering new devices to properties. | 20/06/2026 |
| [upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `1ee5b4c` | test: add unit and BDD tests for alert context | Create Unit Tests for Alert domain entity and BDD integration scenario for filtering alerts by severity and type. | 20/06/2026 |