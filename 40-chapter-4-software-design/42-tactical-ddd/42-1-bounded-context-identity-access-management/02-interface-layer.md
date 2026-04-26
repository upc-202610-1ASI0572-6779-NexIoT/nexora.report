##### 4.2.1.2. Interface Layer

La Interface Layer es responsable de exponer las capacidades del bounded context IAM hacia consumidores externos mediante APIs RESTful.

En la arquitectura actual, el principal consumidor externo es la aplicación móvil de NexIoT.

### Componente Principal

#### AuthController

Actúa como punto de entrada para las operaciones de autenticación y registro de usuarios.

Recibe solicitudes HTTP, valida datos de entrada, delega el procesamiento a componentes internos y retorna respuestas estructuradas.

### Endpoints Expuestos

| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/v1/auth/login | Autentica un usuario y retorna un token JWT |
| POST | /api/v1/auth/register | Registra un nuevo usuario en la plataforma |

### Recursos de Entrada

#### LoginRequest

Utilizado en el proceso de inicio de sesión.

**Campos:**

- email  
- password  

#### RegisterRequest

Utilizado en el proceso de registro.

**Campos:**

- firstName  
- lastName  
- email  
- password  
- roles  

### Recursos de Salida

#### AuthResponse

Retornado luego de una autenticación exitosa.

**Campos:**

- token  
- userId  
- firstName  
- lastName  
- email  
- roles  

#### UserResource

Retornado luego del registro exitoso de un usuario.

### Responsabilidades de la Interface Layer

- Recibir solicitudes del cliente.  
- Validar payloads de entrada.  
- Invocar lógica interna del sistema.  
- Retornar respuestas HTTP estructuradas.  
- Separar la comunicación externa de la lógica interna.  

Esta capa se representa en los diagramas mediante el AuthController y sus interacciones con la aplicación móvil.

---

