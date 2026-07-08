##### 4.2.1.4. Infrastructure Layer

La Infrastructure Layer contiene las implementaciones técnicas necesarias para soportar las capacidades del bounded context **Identity & Access Management**. Esta capa proporciona mecanismos concretos para persistencia de datos, configuración de seguridad, inicialización del sistema y acceso a servicios tecnológicos externos.

Siguiendo los principios de Domain-Driven Design, la Infrastructure Layer implementa las abstracciones definidas por las capas superiores, permitiendo que el dominio permanezca desacoplado de frameworks, motores de base de datos y detalles de infraestructura.

### Persistence Components

#### UserRepository

Implementación responsable de acceder y persistir información relacionada con usuarios registrados dentro del sistema.

Este repositorio implementa las operaciones requeridas por el dominio para consultar y almacenar identidades digitales.

**Operaciones principales:**

- findByEmail(email)
- existsByEmail(email)
- save(user)

#### RoleRepository

Implementación responsable de gestionar la persistencia de roles y perfiles de autorización.

**Operaciones principales:**

- findByName(name)
- save(role)

Ambos repositorios se implementan utilizando **Spring Data JPA**, facilitando el acceso a datos mediante una capa de abstracción sobre la base de datos relacional.

### Security Components

#### JwtAuthFilter

Componente encargado de interceptar solicitudes HTTP entrantes y validar tokens JWT enviados por los clientes.

Su función principal es verificar la autenticidad del token antes de permitir el acceso a recursos protegidos de la plataforma.

**Responsabilidades principales:**

- Interceptar solicitudes autenticadas.
- Extraer el token JWT desde los encabezados HTTP.
- Validar la autenticidad y vigencia del token.
- Establecer el contexto de seguridad para el usuario autenticado.

#### SecurityConfig

Componente responsable de definir la configuración global de seguridad utilizada por el bounded context.

Este componente centraliza las políticas de autenticación y autorización de la plataforma.

**Responsabilidades principales:**

- Registrar filtros de seguridad.
- Configurar reglas de acceso por rutas y endpoints.
- Definir mecanismos de autenticación.
- Configurar políticas stateless basadas en JWT.
- Integrar los componentes de seguridad con Spring Security.

### Initialization Components

#### DataInitializer

Componente encargado de ejecutar procesos de inicialización durante el arranque de la aplicación.

Su objetivo es preparar los datos mínimos requeridos para el correcto funcionamiento del bounded context.

**Responsabilidades principales:**

- Crear roles por defecto.
- Registrar usuarios iniciales cuando corresponda.
- Inicializar información básica de Identity & Access Management.
- Garantizar la disponibilidad de configuraciones esenciales para la autenticación y autorización.

### Database Layer

#### IAM Database

Base de datos responsable de almacenar la información persistente del bounded context **Identity & Access Management**.

Esta base de datos soporta la gestión de usuarios, roles y relaciones de autorización utilizadas por la plataforma Nexora.

### Main Tables

#### users

Almacena la información principal de los usuarios registrados.

**Campos principales:**

- id
- first_name
- last_name
- email
- password

#### roles

Almacena los perfiles de autorización disponibles en el sistema.

**Campos principales:**

- id
- name

#### users_roles

Tabla intermedia que implementa la relación muchos-a-muchos entre usuarios y roles.

**Campos principales:**

- user_id
- role_id

### Infrastructure Responsibilities

- Implementar mecanismos de persistencia definidos por el dominio.
- Gestionar la configuración técnica de seguridad.
- Integrar la plataforma con Spring Security.
- Administrar la conexión con la base de datos.
- Inicializar datos requeridos durante el arranque del sistema.
- Proporcionar servicios técnicos reutilizables para el bounded context.

### Beneficios de la Infrastructure Layer

- Persistencia desacoplada de la lógica de negocio.
- Implementación reutilizable del patrón Repository.
- Gestión centralizada de seguridad.
- Configuración consistente de autenticación y autorización.
- Inicialización automatizada del entorno.
- Almacenamiento relacional confiable y escalable.

La Infrastructure Layer se encuentra representada en los diagramas de componentes, diagramas de clases y diagramas de base de datos del bounded context, evidenciando la implementación concreta de los servicios técnicos requeridos para soportar las capacidades de Identity & Access Management.

---

<div style="page-break-after: always;"></div>