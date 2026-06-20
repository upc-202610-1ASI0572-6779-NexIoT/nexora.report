#### 4.2.4.3. Application Layer

La Application Layer del bounded context **Service Execution & Maintenance** coordina los casos de uso relacionados con la gestión de órdenes de mantenimiento, asignación de técnicos y atención de incidentes operativos.

Su responsabilidad principal es orquestar el flujo de ejecución entre la Interface Layer, las entidades del dominio, los servicios de dominio y los componentes de infraestructura. Esta capa no contiene reglas de negocio complejas ni mecanismos de persistencia, sino que coordina las operaciones necesarias para ejecutar los procesos del mantenimiento.

### Command Handlers

Los Command Handlers gestionan las operaciones que modifican el estado del sistema.

#### CreateMaintenanceOrderCommandHandler

Responsable de crear nuevas órdenes de mantenimiento a partir de incidentes registrados o solicitudes operativas.

**Responsabilidades principales:**

- Validar la información de entrada.
- Crear una nueva instancia de MaintenanceOrder.
- Establecer prioridad inicial.
- Persistir la orden generada.
- Publicar eventos asociados a la creación.

#### AssignTechnicianCommandHandler

Responsable de asignar automáticamente un técnico a una orden de mantenimiento.

**Responsabilidades principales:**

- Consultar técnicos disponibles.
- Invocar MaintenanceAssignmentService.
- Actualizar la orden con el técnico seleccionado.
- Persistir los cambios realizados.
- Generar notificaciones de asignación.

#### CompleteMaintenanceCommandHandler

Responsable de finalizar una orden de mantenimiento.

**Responsabilidades principales:**

- Validar que la orden se encuentre en ejecución.
- Actualizar el estado a COMPLETED.
- Registrar fecha de finalización.
- Persistir cambios.
- Disparar eventos de cierre.

### Event Handlers

Los Event Handlers procesan eventos generados por otros bounded contexts o por el propio contexto de mantenimiento.

#### IncidentReceivedEventHandler

Procesa incidentes recibidos desde el bounded context **Service Monitoring & Intelligence**.

**Responsabilidades principales:**

- Recibir eventos de incidentes.
- Evaluar prioridad inicial.
- Crear órdenes de mantenimiento cuando corresponda.
- Iniciar el flujo de atención operativa.

#### MaintenanceCompletedEventHandler

Gestiona las acciones posteriores a la finalización de una intervención técnica.

**Responsabilidades principales:**

- Actualizar registros relacionados.
- Notificar a usuarios involucrados.
- Registrar eventos de auditoría.
- Actualizar indicadores operativos.

### Application Services

#### MaintenanceService

El servicio de aplicación **MaintenanceService** coordina los principales casos de uso del bounded context y centraliza la lógica de orquestación requerida para la gestión de mantenimientos.

**Métodos principales:**

| Método | Descripción |
| :--- | :--- |
| createMaintenanceOrder() | Crea una nueva orden de mantenimiento |
| assignTechnician() | Ejecuta el proceso de asignación |
| completeMaintenance() | Finaliza una orden de trabajo |
| processIncident() | Procesa un incidente recibido |
| getMaintenanceStatus() | Consulta el estado actual de una orden |

### Casos de Uso Principales

#### Incident Processing

1. El sistema recibe un incidente desde Monitoring.
2. IncidentReceivedEventHandler procesa el evento.
3. MaintenanceService valida la información.
4. CreateMaintenanceOrderCommandHandler genera una nueva orden.
5. La orden es persistida y queda disponible para asignación.

#### Technician Assignment

1. Se crea una orden de mantenimiento.
2. AssignTechnicianCommandHandler consulta técnicos disponibles.
3. MaintenanceAssignmentService selecciona el técnico más adecuado.
4. La orden es actualizada.
5. Se genera una notificación de asignación.

#### Maintenance Completion

1. El técnico concluye la intervención.
2. CompleteMaintenanceCommandHandler valida el estado.
3. Se actualiza la orden a COMPLETED.
4. Se registra la fecha de finalización.
5. MaintenanceCompletedEventHandler ejecuta acciones posteriores.

### Beneficios de la Application Layer

- Coordinación centralizada de casos de uso.
- Separación entre presentación, dominio e infraestructura.
- Soporte para arquitectura orientada a eventos.
- Mayor mantenibilidad y escalabilidad.
- Mejor trazabilidad de los procesos operativos.
- Facilita la implementación de CQRS mediante Commands y Events.

La Application Layer constituye el núcleo de orquestación del bounded context **Service Execution & Maintenance** y se refleja posteriormente en los diagramas de componentes y de nivel de código.