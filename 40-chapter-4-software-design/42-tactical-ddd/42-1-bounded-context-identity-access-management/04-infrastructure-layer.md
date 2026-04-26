##### 4.2.1.4. Infrastructure Layer

La Infrastructure Layer contiene las implementaciones técnicas necesarias para persistencia de datos, ejecución de seguridad, inicialización del sistema y conectividad con la base de datos.

Esta capa soporta al resto de la arquitectura mediante componentes concretos basados en framework.

### Componentes de Persistencia

#### UserRepository

Proporciona operaciones de acceso a datos para usuarios.

**Operaciones principales:**

- findByEmail(email)  
- existsByEmail(email)  
- save(user)  

#### RoleRepository

Proporciona operaciones de persistencia para roles.

**Operaciones principales:**

- findByName(name)  
- save(role)  

Ambos repositorios se implementan mediante Spring Data JPA.

### Componentes de Seguridad

#### JwtAuthFilter

Intercepta solicitudes HTTP entrantes y valida tokens Bearer antes de permitir acceso a endpoints protegidos.

#### SecurityConfig

Define la configuración global de seguridad del sistema.

**Responsabilidades:**

- Registrar filtros.  
- Configurar reglas de acceso por rutas.  
- Definir comportamiento de autenticación.  
- Configurar seguridad stateless.  

### Componente de Inicialización

#### DataInitializer

Ejecuta lógica de inicialización durante el arranque de la aplicación.

**Responsabilidades:**

- Crear roles por defecto.  
- Registrar usuarios iniciales.  
- Preparar datos base del IAM.  

### Database Layer

#### IAM Database

Almacena la información persistente del bounded context.

### Tablas Principales

- users  
- roles  
- users_roles  

### Beneficios de la Infrastructure Layer

- Modelo de persistencia confiable.  
- Patrón repository reutilizable.  
- Filtrado seguro de solicitudes.  
- Inicialización rápida del entorno.  
- Almacenamiento relacional escalable.  

La Infrastructure Layer se encuentra representada en los diagramas de componentes, code level y base de datos.