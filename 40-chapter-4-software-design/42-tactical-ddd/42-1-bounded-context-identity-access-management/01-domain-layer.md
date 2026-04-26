##### 4.2.4.1. Domain Layer

La Domain Layer contiene los conceptos centrales del negocio dentro del bounded context de Identity & Access Management. En esta capa se definen las entidades y relaciones necesarias para representar identidades digitales y control de acceso basado en roles, manteniendo independencia respecto a frameworks o detalles técnicos.

Para el alcance actual de NexIoT, esta capa fue diseñada de forma simple, coherente con la implementación desarrollada y enfocada en los requerimientos reales del proyecto.

### Entidades Principales del Dominio

#### User

Representa una identidad digital registrada dentro de la plataforma. Un usuario puede autenticarse, acceder a recursos protegidos e interactuar con el sistema según los roles asignados.

**Atributos:**

- id  
- firstName  
- lastName  
- email  
- password  
- roles  

El atributo `roles` permite asociar uno o varios perfiles de autorización a cada usuario.

#### Role

Representa un perfil de acceso asignable a los usuarios.

**Atributos:**

- id  
- name  

Los roles determinan qué tipo de acciones puede realizar un usuario dentro de la plataforma.

### Enumeración

#### RoleName

Permite definir valores controlados mediante una enumeración.

**Valores definidos:**

- ADMIN  
- LANDLORD  
- TENANT  

Estos valores reflejan el contexto actual de NexIoT y sus segmentos objetivo validados: arrendadores y arrendatarios.

### Relaciones del Dominio

- Un usuario puede tener múltiples roles.  
- Un rol puede ser asignado a múltiples usuarios.  

Esta relación muchos-a-muchos permite escalar el modelo de autorización conforme crezca la plataforma.

### Reglas de Negocio

1. Todo usuario debe tener al menos un rol asignado.  
2. El correo electrónico debe ser único.  
3. Un usuario debe autenticarse antes de acceder a recursos protegidos.  
4. Los permisos dependen de los roles asignados.  
5. Las contraseñas deben almacenarse de forma segura y cifrada.  

La Domain Layer constituye la base conceptual del bounded context y se refleja directamente en los diagramas de clases y base de datos.

---

