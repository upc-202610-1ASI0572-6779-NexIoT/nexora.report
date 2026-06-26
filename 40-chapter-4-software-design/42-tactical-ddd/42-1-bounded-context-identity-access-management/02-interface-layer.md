##### 4.2.1.2. Interface Layer

La Interface Layer es responsable de exponer las capacidades del bounded context **Identity & Access Management** hacia consumidores externos mediante APIs RESTful.

Esta capa actúa como punto de interacción entre las aplicaciones cliente de Nexora y las funcionalidades internas del bounded context, permitiendo gestionar procesos de autenticación y registro de usuarios sin exponer directamente la lógica de negocio.

Siguiendo los principios de separación de responsabilidades, la Interface Layer se encarga únicamente de recibir solicitudes, validar información básica de entrada, transformar datos y delegar el procesamiento a la Application Layer.


### Controller Principal

#### AuthController

Actúa como punto de entrada para las operaciones de autenticación y registro de usuarios.

Recibe solicitudes HTTP, valida datos de entrada, delega el procesamiento a componentes internos y retorna respuestas estructuradas.

### Endpoints Expuestos

| Método | Endpoint | Descripción |
|----------|----------|-------------|
| POST | /api/v1/auth/login | Autentica un usuario y retorna un token JWT |
| POST | /api/v1/auth/register | Registra un nuevo usuario dentro de la plataforma |

### Request Models

#### LoginRequest

Objeto utilizado para transportar la información requerida durante el proceso de autenticación.

**Campos:**

- email  
- password  

#### RegisterRequest

Objeto utilizado para transportar la información requerida durante el proceso de registro de nuevos usuarios.

**Campos:**

- firstName  
- lastName  
- email  
- password  
- roles  

### Response Model

#### AuthResponse

Objeto retornado luego de una autenticación exitosa.

**Campos:**

- token  
- userId  
- firstName  
- lastName  
- email  
- roles  

Este recurso permite que las aplicaciones cliente mantengan la sesión autenticada y conozcan los roles asociados al usuario.

#### UserResource

Objeto retornado luego del registro exitoso de un usuario.

Representa la información básica del usuario creada dentro del sistema y utilizada posteriormente por otros bounded contexts de la plataforma.

### Responsabilidades de la Interface Layer

- Recibir solicitudes HTTP provenientes de aplicaciones cliente.
- Validar formatos básicos de entrada y restricciones iniciales.
- Transformar información entre recursos externos y objetos internos.
- Delegar la ejecución de casos de uso a la Application Layer.
- Retornar respuestas HTTP estructuradas.
- Gestionar códigos de estado HTTP y mensajes de error.
- Mantener desacoplada la comunicación externa de la lógica de negocio.

La Interface Layer constituye la capa de presentación del bounded context y se encuentra representada principalmente por el **AuthController**, los objetos de entrada (**Request Models**) y los objetos de salida (**Response Models**) utilizados por los consumidores externos de la plataforma.

---
