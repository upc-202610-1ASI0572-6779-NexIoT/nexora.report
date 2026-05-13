#### 4.2.4.3. Application Layer.

En esta capa se gestionan los flujos de negocio mediante handlers y servicios.

**Command Handlers**

| Clase | Descripción |
| ----- | ----- |
| CreateMaintenanceOrderCommandHandler | Crea órdenes de mantenimiento |
| AssignTechnicianCommandHandler | Asigna técnicos automáticamente |
| CompleteMaintenanceCommandHandler | Finaliza órdenes |

---

 

**Event Handlers**

| Clase | Descripción |
| ----- | ----- |
| IncidentReceivedEventHandler | Procesa incidentes del Monitoring |
| MaintenanceCompletedEventHandler | Maneja acciones post-mantenimiento |

---

**Application Services**

| Clase | Descripción |
| ----- | ----- |
| MaintenanceService | Coordina los procesos principales del mantenimiento |
