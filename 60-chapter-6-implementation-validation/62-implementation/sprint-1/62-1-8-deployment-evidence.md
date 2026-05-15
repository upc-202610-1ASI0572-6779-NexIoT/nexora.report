#### 6.2.1.8. Software Deployment Evidence for Sprint Review

Durante el Sprint 1, el equipo realizó las actividades necesarias para el despliegue de la primera versión funcional del Landing Page y del Frontend de la Web Application. El proceso de despliegue incluyó la configuración de repositorios, creación y configuración de servicios en la nube, integración con plataformas de hosting, automatización de despliegues y validación de los entornos de producción.

Para el despliegue del Landing Page se utilizó GitHub Pages como plataforma de hosting, permitiendo publicar el sitio web estático directamente desde el repositorio del proyecto. Asimismo, se configuró el flujo de despliegue automático mediante la integración con la rama principal del repositorio.

Por otro lado, para el despliegue del Frontend de la aplicación web se utilizó Vercel como plataforma cloud de despliegue. El proceso incluyó la importación del repositorio desde GitHub, configuración del proyecto, validación de compilación y activación de despliegues automáticos para cada actualización realizada en el repositorio.

Las actividades desarrolladas durante este Sprint permitieron garantizar la disponibilidad inicial de ambos productos digitales y establecer la base del pipeline de despliegue continuo para futuras iteraciones del proyecto.

---

<br>

# Despliegue del Landing Page – GitHub Pages

## Configuración del Repositorio en GitHub

Como parte del proceso de despliegue, el equipo configuró el repositorio del Landing Page en GitHub para permitir la publicación del sitio mediante GitHub Pages.

### Actividades realizadas

* Creación y configuración del repositorio del Landing Page.
* Validación de archivos compilados para producción.
* Configuración de la rama principal para publicación.
* Verificación de permisos y visibilidad del repositorio.

<br>

![Repositorio nexora.website](../../../assets/chapter-6/implementation/sprint-1/nexora.website-repository.png)

---

## Configuración de GitHub Pages

El despliegue del Landing Page fue realizado utilizando la funcionalidad GitHub Pages desde la configuración del repositorio.

### Actividades realizadas

* Acceso a la sección **Pages** dentro de la configuración del repositorio.
* Selección de la rama de despliegue.
* Configuración del directorio raíz para publicación.
* Activación de despliegue automático tras cada actualización del repositorio.

<br>

![Configuración de repositorio de nexora.website](../../../assets/chapter-6/implementation/sprint-1/nexora.website-configuration.png)

### Resultado del despliegue

El Landing Page fue publicado correctamente y quedó accesible mediante la URL pública generada por GitHub Pages.

![Landing Page Nexora](../../../assets/chapter-6/implementation/sprint-1/nexora.website-landing-page.png)

**URL Landing Page:** https://upc-202610-1asi0572-6779-nexiot.github.io/nexora.website/ 

---

<br>

# Despliegue del Frontend Web – Vercel

## Configuración del Proyecto en Vercel

Para el despliegue del Frontend de la aplicación web, el equipo configuró el proyecto en la plataforma Vercel.

### Actividades realizadas

* Creación del workspace del proyecto en Vercel.
* Importación del repositorio frontend desde GitHub.
* Configuración automática del framework utilizado.
* Validación de comandos de build y directorio de salida.

<br>

> **Agregar captura:** Dashboard del proyecto en Vercel.

---

## Configuración de Integración Continua

El frontend fue integrado con GitHub para permitir despliegues automáticos cada vez que se registren cambios en el repositorio.

### Actividades realizadas

* Conexión entre GitHub y Vercel.
* Configuración de despliegues automáticos.
* Validación del despliegue desde la rama principal.
* Verificación de logs y estado de compilación.

<br>

> **Agregar captura:** Estado exitoso del despliegue en Vercel.

### Resultado del despliegue

La aplicación frontend fue desplegada exitosamente y quedó disponible mediante la URL de producción generada por Vercel.

> **Agregar captura:** Frontend desplegado correctamente en producción.

**URL de la aplicación web:** 