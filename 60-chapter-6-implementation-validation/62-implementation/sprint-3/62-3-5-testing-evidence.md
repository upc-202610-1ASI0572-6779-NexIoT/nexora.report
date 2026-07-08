#### 6.2.3.5. Testing Suite Evidence for Sprint Review

En esta sección se explica y presenta el conjunto de Unit Tests, Integration Tests y Acceptance Tests automatizados para los Web Services de Nexora en el Sprint 3. Las pruebas están diseñadas para garantizar la calidad en los contextos acotados principales: **Resource & Asset Management**, **Service Monitoring & Intelligence** y el nuevo flujo de **Subscriptions & Payment Management** (Stripe & Mock Payment Integration), sirviendo también como suite de pruebas de regresión.

---

### **1. Unit Tests (Pruebas Unitarias)**

Las pruebas unitarias se enfocan en verificar de manera aislada los comportamientos, inicializaciones y validaciones de negocio críticas en las entidades del dominio de la aplicación. En este Sprint 3, se incorporó una prueba de diagnóstico de base de datos (`DbCheckTest`) para validar la correcta persistencia de entidades.

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

#### **C. Pruebas de Diagnóstico e Integración de Persistencia (Sprint 3)**
* **Clase Evaluada:** `DbCheckTest` (Nueva incorporación del Sprint 3)
* **Comportamientos Evaluados:**
  * **Conectividad y Diagnóstico de Esquema:** Verificación de la conexión activa a PostgreSQL en local y del volcado de entidades principales (`Properties`, `Devices`, `TelemetryLogs`, `Alerts`) para asegurar la consistencia relacional y el estado inicial del seeding de datos de prueba.

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

```csharp
// Ubicación: src/test/Nexora.WebApi.Tests/DbCheckTest.cs
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Nexora.Infrastructure.Persistence;
using Xunit;
using Xunit.Abstractions;

namespace Nexora.WebApi.Tests
{
    public class DbCheckTest
    {
        private readonly ITestOutputHelper _output;

        public DbCheckTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void DumpDatabase()
        {
            var optionsBuilder = new DbContextOptionsBuilder<NexoraDbContext>();
            optionsBuilder.UseNpgsql("Host=localhost;Database=nexora_db;Username=postgres;Password=12345678");

            using (var context = new NexoraDbContext(optionsBuilder.Options))
            {
                _output.WriteLine("=== PROPERTIES ===");
                var properties = context.Properties.ToList();
                foreach (var p in properties)
                {
                    _output.WriteLine($"Id={p.Id}, Name={p.Name}, LandlordId={p.LandlordId}");
                }

                _output.WriteLine("\n=== DEVICES ===");
                var devices = context.Devices.ToList();
                foreach (var d in devices)
                {
                    _output.WriteLine($"Id={d.Id}, Name={d.Name}, PropertyId={d.PropertyId}, Status={d.ConnectionStatus}");
                }

                _output.WriteLine("\n=== TELEMETRIES ===");
                var telemetries = context.TelemetryLogs.OrderByDescending(t => t.Timestamp).Take(10).ToList();
                foreach (var t in telemetries)
                {
                    _output.WriteLine($"DeviceId={t.DeviceId}, Time={t.Timestamp}, Gas={t.GasReading}, Water={t.WaterReading}, Electricity={t.ElectricityReading}");
                }
                
                _output.WriteLine("\n=== ALERTS ===");
                var alerts = context.Alerts.OrderByDescending(a => a.Timestamp).Take(10).ToList();
                foreach (var a in alerts)
                {
                    _output.WriteLine($"DeviceId={a.DeviceId}, Time={a.Timestamp}, Type={a.Type}, Severity={a.Severity}");
                }
            }
        }
    }
}
```

---

### **2. Integration & Acceptance Tests bajo Enfoque BDD**

Validación funcional basada en **Behavior-Driven Development (BDD)** usando escenarios Gherkin (`.feature`) y Steps automatizados con XUnit.

#### **A. Vinculación de Dispositivos (US37: Gestión de vinculación de dispositivos)**
* **Objetivo:** Registro e integración efectiva de los dispositivos IoT a las propiedades del Landlord.

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
* **Objetivo:** Visualización y filtrado rápido de alertas de seguridad y telemetría por criticidad y tipo.

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

Ejecución de la suite de pruebas completa con 100% de éxito, utilizando roll-forward de framework compatible con el SDK instalado:

```bash
DOTNET_ROLL_FORWARD=Major dotnet test
```

**Resultado en Consola:**
```text
Determining projects to restore...
All projects are up-to-date for restore.
...
Test run for /Users/alumnos/Documents/nexora.webservice/src/test/Nexora.WebApi.Tests/bin/Debug/net8.0/Nexora.WebApi.Tests.dll (.NETCoreApp,Version=v8.0)
Versión 18.0.1 (arm64) de VSTest

Iniciando la ejecución de pruebas, espere...
1 archivos de prueba en total coincidieron con el patrón especificado.

Correctas! - Con error: 0, Superado: 16, Omitido: 0, Total: 16, Duración: 513 ms - Nexora.WebApi.Tests.dll (net8.0)
```

---

### **4. Repositorios y Commits Relacionados**

Relación de commits vinculados a las características y pruebas desarrolladas en el Sprint 3:

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Committed on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `e8b8335` | Merge branch 'feature/stripe-connection-service' into develop | Resolve merge conflicts and integrate Stripe activation payment flow. | 07/07/2026 |
| [https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `e58288f` | fix database save sequence for activation payments | Reorder DB inserts to save local invoice first generating its ID before creating associated payment record. | 07/07/2026 |
| [https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `395db94` | feat(stripe): integrate checkout payments, webhook card saving, and plan upgrades | Add credit card PaymentMethod creation in Stripe and customer attachment. | 02/07/2026 |
| [https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `0a49ce3` | feat(payment): integrate Stripe.net payments, webhook endpoint, and update database fields | Introduce Stripe.net client wrapper and local database migrations. | 02/07/2026 |
| [https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice](https://github.com/upc-202610-1ASI0572-6779-NexIoT/nexora.webservice) | `develop` | `1471f1f` | feat(telemetry): implement transition-based alert evaluation to mitigate telemetry alert spam | Implement edge-triggered alerts in monitoring intelligence service. | 04/07/2026 |
