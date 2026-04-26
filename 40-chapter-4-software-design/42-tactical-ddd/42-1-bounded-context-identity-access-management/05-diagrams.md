##### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams

El Bounded Context Software Architecture Component Level Diagram representa la estructura interna del contenedor principal del bounded context Identity & Access Management, mostrando los componentes que lo conforman y las relaciones existentes entre ellos.

Para este entregable, el diagrama fue desarrollado siguiendo el enfoque **C4 Model**, permitiendo visualizar de forma clara cómo se organiza el servicio IAM dentro de la arquitectura general de NexIoT.

El objetivo principal de esta vista es evidenciar cómo los módulos de autenticación, seguridad, persistencia e inicialización colaboran entre sí para ofrecer un servicio de acceso seguro y mantenible.

### Componentes Representados

#### Cliente Externo

- Mobile User  
- Mobile App  

#### Contenedor Principal

- IAM API  

#### Componentes Internos

- AuthController  
- JwtAuthFilter  
- SecurityConfig  
- CustomUserDetailsService  
- JwtService  
- UserRepository  
- RoleRepository  
- DataInitializer  
- IAM Database  

### Relaciones Arquitectónicas Relevantes

- La Mobile App consume los endpoints expuestos por AuthController.  
- SecurityConfig registra y configura JwtAuthFilter.  
- JwtAuthFilter valida tokens mediante JwtService.  
- JwtAuthFilter consulta usuarios autenticados mediante CustomUserDetailsService.  
- AuthController utiliza JwtService para emitir tokens JWT.  
- AuthController utiliza los repositorios para operaciones de registro y consulta.  
- DataInitializer inicializa datos base del sistema.  
- Los repositorios persisten información en IAM Database.  

### Valor Arquitectónico

Este diseño permite:

- Separación clara de responsabilidades.  
- Reutilización de componentes de seguridad.  
- Escalabilidad del módulo IAM.  
- Mantenimiento simplificado.  
- Integración limpia con clientes móviles.  

### Diagram

![IAM Component Level Diagram](./images/PLACEHOLDER_COMPONENT_DIAGRAM.png)

---

##### 4.2.4.6. Bounded Context Software Architecture Code Level Diagrams

El Code Level Diagram representa la traducción de la arquitectura de componentes hacia clases, interfaces, enumeraciones y dependencias técnicas del proyecto implementado.

Esta vista permite comprender cómo los componentes definidos a nivel arquitectónico se materializan en estructuras concretas dentro del código fuente desarrollado en Spring Boot.

El diagrama se organiza por capas lógicas para facilitar la comprensión del diseño interno del bounded context.

### Capas Representadas

#### Interfaces Layer

Contiene los puntos de entrada del sistema.

- AuthController  

#### Security Layer

Agrupa los componentes responsables del proceso de autenticación y validación de seguridad.

- SecurityConfig  
- JwtAuthFilter  
- JwtService  
- CustomUserDetailsService  

#### Domain Layer

Modela las entidades centrales del bounded context.

- User  
- Role  
- RoleName  

#### Infrastructure Layer

Contiene acceso a datos e inicialización técnica.

- UserRepository  
- RoleRepository  
- DataInitializer  
- IAM Database  

### Relaciones Técnicas Principales

- AuthController invoca JwtService y repositorios.  
- JwtAuthFilter depende de JwtService y CustomUserDetailsService.  
- CustomUserDetailsService consulta UserRepository.  
- SecurityConfig registra filtros de seguridad.  
- User mantiene relación muchos-a-muchos con Role.  
- Repositorios interactúan con la base de datos.  

### Valor Técnico

Este diseño favorece:

- Alta cohesión por capas.  
- Bajo acoplamiento entre módulos.  
- Claridad estructural del código.  
- Facilidad de mantenimiento.  
- Escalabilidad futura del sistema.  

### Diagram

![IAM Code Level Diagram](/assets/chapter-4/tactical-ddd/bounded-context-identity-access-management/component-diagram.png)

---

###### 4.2.4.6.1. Bounded Context Domain Layer Class Diagrams

El Domain Layer Class Diagram detalla específicamente las entidades y relaciones del núcleo del negocio dentro del bounded context IAM.

Su propósito es mostrar cómo se estructura el modelo conceptual de usuarios y roles utilizado para el control de acceso.

### Elementos Principales del Dominio

#### User

Entidad principal que representa una identidad digital dentro del sistema.

**Atributos principales:**

- id  
- firstName  
- lastName  
- email  
- password  
- roles  

#### Role

Entidad que representa perfiles de acceso.

**Atributos principales:**

- id  
- name  

#### RoleName

Enumeración que restringe valores permitidos:

- ADMIN  
- LANDLORD  
- TENANT  

### Relación del Dominio

- Un User puede tener múltiples Role.  
- Un Role puede pertenecer a múltiples User.  

Esta estructura permite flexibilidad en la asignación de privilegios.

### Diagram

![IAM Domain Class Diagram](/assets/chapter-4/tactical-ddd/bounded-context-identity-access-management/class-diagram.png)

---

###### 4.2.4.6.2. Bounded Context Database Design Diagram

El Database Design Diagram representa el modelo de persistencia utilizado por el bounded context Identity & Access Management.

El diseño sigue un enfoque relacional normalizado y permite soportar autenticación, gestión de usuarios y autorización basada en roles.

### Tablas Principales

#### users

Almacena información principal de los usuarios registrados.

**Campos relevantes:**

- id  
- first_name  
- last_name  
- email  
- password  
- created_at  
- updated_at  

#### roles

Almacena los roles disponibles del sistema.

**Campos relevantes:**

- id  
- name  

#### users_roles

Tabla intermedia para resolver la relación muchos-a-muchos entre usuarios y roles.

**Campos relevantes:**

- user_id  
- role_id  

### Restricciones Relevantes

- `users.email` es único.  
- `roles.name` es único.  
- Integridad referencial mediante claves foráneas.  

### Beneficios del Diseño

- Modelo normalizado.  
- Asignación flexible de roles.  
- Escalabilidad futura.  
- Consistencia de datos.  
- Compatibilidad con JPA y Spring Boot.  

### Diagram

![IAM Database Design Diagram](/assets/chapter-4/tactical-ddd/bounded-context-identity-access-management/database-diagram.png)