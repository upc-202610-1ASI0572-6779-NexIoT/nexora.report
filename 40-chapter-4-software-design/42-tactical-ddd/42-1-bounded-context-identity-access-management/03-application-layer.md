##### 4.2.1.3. Application Layer

La Application Layer coordina los casos de uso del sistema y controla el flujo de ejecución entre la Interface Layer, los componentes de seguridad, las entidades del dominio y los servicios de infraestructura.

Su propósito no es almacenar datos ni modelar entidades, sino orquestar el comportamiento requerido por cada operación.

### Componentes Principales

#### JwtService

Responsable de generar y validar tokens JWT luego de una autenticación exitosa.

**Responsabilidades principales:**

- Generar tokens para usuarios autenticados.  
- Extraer usernames desde tokens.  
- Parsear y validar la estructura del token.  

#### CustomUserDetailsService

Responsable de cargar credenciales y roles desde persistencia durante el proceso de autenticación.

**Responsabilidades principales:**

- Buscar usuarios por email.  
- Proveer credenciales a Spring Security.  
- Retornar authorities autorizadas.  

### Casos de Uso Principales

#### User Login

1. AuthController recibe las credenciales.  
2. Spring Security valida las credenciales.  
3. CustomUserDetailsService carga al usuario.  
4. JwtService genera el token.  
5. Se retorna AuthResponse.  

#### User Registration

1. AuthController recibe los datos de registro.  
2. El sistema valida que el email no exista previamente.  
3. La contraseña es cifrada.  
4. Se asignan roles.  
5. El usuario es persistido.  
6. Se retorna UserResource.  

### Beneficios de la Application Layer

- Coordinación centralizada de casos de uso.  
- Separación entre API y persistencia.  
- Mayor mantenibilidad.  
- Mejor testabilidad de flujos.  

Este comportamiento orquestador se refleja en los diagramas de componentes y code level.

---

