##### 4.2.1.3. Application Layer

La Application Layer coordina los casos de uso del bounded context **Identity & Access Management** y controla el flujo de ejecución entre la Interface Layer, el modelo de dominio, los componentes de seguridad y la Infrastructure Layer.

Su propósito no es almacenar datos ni representar entidades del dominio, sino orquestar las operaciones necesarias para autenticar usuarios, registrar nuevas identidades digitales, validar credenciales y generar tokens de acceso para las aplicaciones cliente de Nexora.

### Application Services

#### JwtService

El servicio **JwtService** es responsable de generar, validar e interpretar tokens JWT utilizados durante el proceso de autenticación.

Este componente permite que la plataforma mantenga un esquema de autenticación stateless, donde las aplicaciones cliente pueden enviar el token en sus solicitudes posteriores para acceder a recursos protegidos.

**Responsabilidades principales:**

- Generar tokens JWT para usuarios autenticados.
- Extraer el username o email desde un token.
- Validar la estructura y vigencia del token.
- Asociar el token generado con la identidad autenticada.
- Soportar el flujo de autorización en endpoints protegidos.

#### CustomUserDetailsService

El servicio **CustomUserDetailsService** es responsable de cargar la información de autenticación del usuario desde la persistencia y adaptarla al mecanismo de seguridad utilizado por Spring Security.

Este componente permite conectar el modelo de usuarios y roles del bounded context con el proceso de autenticación de la plataforma.

**Responsabilidades principales:**

- Buscar usuarios registrados mediante su correo electrónico.
- Cargar credenciales cifradas del usuario.
- Recuperar los roles asociados al usuario.
- Transformar los roles del dominio en authorities utilizadas por Spring Security.
- Proveer información de autenticación al flujo de seguridad.

### Use Cases

#### User Login

El caso de uso **User Login** permite autenticar a un usuario registrado y generar un token JWT válido para acceder a recursos protegidos de Nexora.

**Flujo principal:**

1. **AuthController** recibe las credenciales del usuario.
2. La Application Layer coordina la validación de las credenciales.
3. **CustomUserDetailsService** carga la información del usuario desde persistencia.
4. Spring Security valida la contraseña y los roles asociados.
5. **JwtService** genera un token JWT para el usuario autenticado.
6. El sistema retorna un **AuthResponse** con el token y la información básica del usuario.

#### User Registration

El caso de uso **User Registration** permite registrar una nueva identidad digital dentro de Nexora.

**Flujo principal:**

1. **AuthController** recibe los datos de registro.
2. La Application Layer valida que el correo electrónico no exista previamente.
3. El sistema cifra la contraseña del nuevo usuario.
4. Se asignan los roles correspondientes según el tipo de usuario registrado.
5. El usuario es persistido mediante el repositorio correspondiente.
6. El sistema retorna un **UserResource** con la información del usuario creado.

### Command Handlers y Event Handlers

Para el alcance actual de este bounded context, los casos de uso de autenticación y registro se gestionan mediante servicios de aplicación y componentes de seguridad. No se han definido Command Handlers o Event Handlers explícitos como clases separadas, ya que la implementación actual mantiene una estructura simple y coherente con el tamaño del proyecto.

Sin embargo, conceptualmente, los flujos principales pueden asociarse a los siguientes comandos:

- **LoginUserCommand:** representa la solicitud de autenticación de un usuario.
- **RegisterUserCommand:** representa la solicitud de registro de una nueva identidad digital.

En futuras iteraciones, estos comandos podrían implementarse como clases separadas junto con sus respectivos handlers para aumentar la trazabilidad y escalabilidad del diseño táctico.


### Beneficios de la Application Layer

- Centraliza la coordinación de los casos de uso del bounded context.
- Separa la lógica de presentación de la lógica de aplicación.
- Evita que los controladores accedan directamente a la persistencia.
- Facilita la integración con componentes de seguridad.
- Mejora la mantenibilidad y testabilidad de los flujos.
- Permite evolucionar hacia una estructura basada en Command Handlers y Event Handlers si el proyecto lo requiere.

Este comportamiento orquestador se refleja en los diagramas de componentes y code level, donde la Application Layer conecta las solicitudes recibidas por la Interface Layer con los servicios de seguridad, repositorios y entidades del dominio.

---

<div style="page-break-after: always;"></div>