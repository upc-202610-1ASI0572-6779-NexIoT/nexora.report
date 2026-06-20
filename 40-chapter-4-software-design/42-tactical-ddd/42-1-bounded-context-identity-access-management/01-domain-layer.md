##### 4.2.1.1. Domain Layer

La Domain Layer contiene los conceptos centrales del negocio dentro del bounded context **Identity & Access Management**. Esta capa es responsable de modelar las reglas de negocio relacionadas con la gestión de identidades digitales, autenticación y autorización de usuarios dentro de la plataforma Nexora.

Siguiendo los principios de Domain-Driven Design (DDD), esta capa mantiene independencia respecto a frameworks, tecnologías de persistencia o mecanismos de comunicación externos, concentrándose únicamente en las reglas y conceptos propios del dominio.

Para el alcance actual del producto Nexora, desarrollado por la startup NexIoT, este bounded context fue diseñado para gestionar usuarios, roles y permisos de acceso a los distintos módulos de la plataforma.

### Aggregate Root

#### User

La entidad **User** actúa como Aggregate Root del bounded context, ya que representa la identidad principal administrada por el sistema y controla la consistencia de los datos relacionados con los perfiles de acceso.

Un usuario puede autenticarse, acceder a recursos protegidos e interactuar con el sistema de acuerdo con los roles asignados.


**Atributos:**

- id  : Long
- firstName  : String
- lastName  : String
- email  : String
- password  : String
- roles  : Set<Role>

El atributo `roles` permite asociar uno o varios perfiles de autorización a cada usuario.

**Responsabilidades principales:**

- Mantener la información básica del usuario.
- Gestionar la asociación de roles.
- Garantizar la unicidad lógica de la identidad digital.
- Representar al usuario autenticado dentro del dominio.

### Entities

#### Role

La entidad **Role** representa un perfil de autorización asignable a los usuarios del sistema.

Los roles determinan qué funcionalidades y recursos pueden ser utilizados por cada usuario dentro de Nexora.

**Atributos:**

- id : Long
- name : RoleName

**Responsabilidades principales:**

- Definir perfiles de acceso.
- Agrupar permisos según responsabilidades de negocio.
- Facilitar la autorización basada en roles.
### Value Objects

#### RoleName

RoleName es un Value Object implementado mediante una enumeración que define los valores válidos para los perfiles de acceso dentro del sistema.

**Valores definidos:**

- ADMIN  
- LANDLORD  
- TENANT  

Estos valores representan los principales perfiles identificados para la operación actual de Nexora.

### Repository Interfaces

#### UserRepository

Abstracción utilizada por el dominio para acceder a la persistencia de usuarios.

**Operaciones principales:**

- findByEmail(email)
- existsByEmail(email)
- save(user)

#### RoleRepository

Abstracción utilizada para recuperar y persistir información relacionada con roles.

**Operaciones principales:**

- findByName(name)
- save(role)

### Domain Relationships

- Un **User** puede poseer múltiples **Role**.
- Un **Role** puede ser asignado a múltiples **User**.
- Cada **Role** está identificado por un único valor de **RoleName**.

Esta relación muchos-a-muchos proporciona flexibilidad para la administración de permisos y facilita la evolución futura del modelo de autorización.

### Domain Rules

1. Todo usuario debe tener al menos un rol asignado.
2. El correo electrónico debe ser único dentro de la plataforma.
3. Un usuario debe autenticarse antes de acceder a recursos protegidos.
4. Los permisos efectivos dependen de los roles asignados al usuario.
5. Las contraseñas deben almacenarse de forma segura utilizando mecanismos de cifrado.
6. No pueden existir dos usuarios registrados con el mismo correo electrónico.
7. Todo rol asignado a un usuario debe pertenecer al conjunto de roles válidos definidos por RoleName.

### Domain Services

Actualmente el bounded context no requiere Domain Services especializados, ya que las reglas de negocio se encuentran encapsuladas dentro del Aggregate Root User y las entidades relacionadas. Las operaciones de autenticación y generación de tokens son coordinadas posteriormente por la Application Layer.

La Domain Layer constituye la base conceptual del bounded context y sirve como fundamento para los diagramas de componentes, diagramas de clases y diseño de base de datos presentados en las siguientes secciones.

---

