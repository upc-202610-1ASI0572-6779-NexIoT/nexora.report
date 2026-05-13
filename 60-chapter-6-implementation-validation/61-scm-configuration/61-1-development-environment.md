# Capítulo VI: Product Implementation, Validation & Deployment
# 6.1. Software Configuration Management
### 6.1.1. Software Development Environment Configuration

En esta sección se define el ecosistema de herramientas que soporta el ciclo de vida completo del desarrollo de Nexora. La selección responde a criterios de colaboración distribuida, escalabilidad, integración continua y compatibilidad con arquitecturas modernas (web, mobile e IoT).

Las herramientas se organizan según su propósito dentro del proceso de desarrollo.

<br>

---

## 1. Project Management

La gestión del proyecto se enfoca en metodologías ágiles, permitiendo iteración continua, visibilidad del progreso y trazabilidad de decisiones.

### Herramienta: Jira (SaaS)

| Campo | Valor |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Project Management |
| Herramienta   | Jira |
| Logo          | <img src="https://logolook.net/wp-content/uploads/2023/04/Jira-Logo-2017.png" width="150"> |
| Descripción   | Plataforma para la gestión ágil del proyecto Nexora. Permite administrar el product backlog, planificación de sprints, seguimiento de historias de usuario y control de incidencias. Se utiliza también para definir lineamientos técnicos como convenciones de ramas, arquitectura y flujo de trabajo. |
| Uso en Nexora | Gestión de backlog, sprint planning, seguimiento de desarrollo  |
| URL  | [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira) |

---

### Herramienta: Trello (SaaS)

| Campo| Valor  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Categoría     | Team Management    |
| Herramienta   | Trello  |
| Logo          | <img src="https://logolook.net/wp-content/uploads/2024/03/Trello-Logo-2011-500x281.png" width="150"> |
| Descripción   | Herramienta visual para la gestión de tareas del equipo. Se utiliza para organizar actividades relacionadas con documentación, entregables académicos y seguimiento general del progreso del proyecto. |
| Uso en Nexora | Gestión de capítulos, tareas del equipo y organización interna |
| URL           | [https://trello.com](https://trello.com) |

---

<br>

## 2. Requirements Management

La gestión de requisitos se realiza de forma integrada con herramientas ágiles y documentación estructurada.

### Herramienta: Jira + Documentación estructurada

| Campo| Valor   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Requirements Management    |
| Herramienta   | Jira    |
| Logo          | <img src="https://logolook.net/wp-content/uploads/2023/04/Jira-Logo-2017.png" width="150"> |
| Descripción   | Se emplea para definir y gestionar historias de usuario, criterios de aceptación y priorización de funcionalidades del sistema Nexora. |
| Uso en Nexora | Definición de user stories, épicas, criterios de aceptación |
| URL  | [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira)|

---

<br>

## 3. Product UX/UI Design

El diseño UX/UI es crítico en Nexora debido a la interacción entre usuarios, dashboards y dispositivos IoT.

### Herramienta: Figma (SaaS)

| Campo| Valor  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Categoría     | Product UX/UI Design|
| Herramienta   | Figma  |
| Logo          | <img src="https://i.pinimg.com/originals/29/95/95/29959595fe22edde8408b060d3ac3d82.png" width="150"> |
| Descripción   | Plataforma colaborativa para diseño de interfaces. Permite crear wireframes, prototipos interactivos y sistemas de diseño alineados con los Style Guidelines definidos. Facilita validación temprana con usuarios. |
| Uso en Nexora | Diseño de landing page, web app, mobile app e interfaces IoT |
| URL  | [https://www.figma.com](https://www.figma.com)     |

---

<br>

## 4. Software Development

El desarrollo de Nexora se divide en tres frentes: web, mobile e integración IoT.

---

### Herramienta: Visual Studio Code (Local)

| Campo| Valor  |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Categoría     | Software Development (Landing Page) |
| Herramienta   | Visual Studio Code     |
| Logo          | <img src="https://brandslogos.com/wp-content/uploads/images/large/visual-studio-code-logo.png" width="150"> |
| Descripción   | Editor de código ligero y extensible. Utilizado para el desarrollo de la landing page del proyecto. |
| Tecnologías   | HTML, CSS, JavaScript  |
| Uso en Nexora | Desarrollo de landing page |
| URL           | [https://code.visualstudio.com](https://code.visualstudio.com)     |

---

### Herramienta: WebStorm

| Campo| Valor  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Software Development (Web Application)|
| Herramienta   | WebStorm    |
| Logo          | <img src="https://www.anysoft.pl/images/items/4640/webstorm-icon_big.png" width="150"> |
| Descripción   | IDE especializado en desarrollo web moderno. Proporciona herramientas avanzadas para trabajar con frameworks frontend y mejorar la productividad del desarrollo. |
| Tecnologías   | Vue.js, Tailwind CSS   |
| Uso en Nexora | Desarrollo de la aplicación web (dashboard de gestión) |
| URL  | [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/) |

---

### Herramienta: Android Studio

| Campo| Valor  |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Software Development (Mobile) |
| Herramienta   | Android Studio   |
| Logo          | <img src="https://freepnglogo.com/images/all_img/android-studio-logo-2023-51ae.png" width="150"> |
| Descripción   | IDE oficial para desarrollo móvil. Permite construir, probar y depurar aplicaciones multiplataforma usando Flutter. |
| Tecnologías   | Flutter (Dart)   |
| Uso en Nexora | Desarrollo de la aplicación móvil para control IoT  |
| URL  | [https://developer.android.com/studio](https://developer.android.com/studio)|

---

<br>

## 5. Software Testing

Las pruebas aseguran la calidad del sistema en entornos distribuidos (web, mobile, IoT).

### Herramientas utilizadas:

| Campo| Valor|
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Categoría     | Software Testing|
| Herramienta   | Postman     |
| Logo          | <img src="https://www.logoshape.com/wp-content/uploads/2025/04/Postman_vector_Logo_logoshape.com_.png" width="150"> |
| Descripción   | Herramienta para pruebas de APIs REST. Permite validar endpoints del backend, autenticación y flujos de datos. |
| Uso en Nexora | Testing de APIs del sistema|
| URL  | [https://www.postman.com](https://www.postman.com)      |

---

| Campo| Valor  |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Categoría     | Software Testing  |
| Herramienta   | Emuladores Android (Android Studio)     |
| Logo          | <img src="https://goongloo.com/wp-content/uploads/2022/07/Android-Studio-Logo-Android-Emulator-Goongloo-banner.png" width="300"> |
| Descripción   | Permiten simular dispositivos móviles para pruebas de la app sin necesidad de hardware físico. |
| Uso en Nexora | Testing de aplicación móvil    |
| URL  | [https://developer.android.com/studio](https://developer.android.com/studio) |

---

<br>

## 6. Software Deployment

El despliegue considera la naturaleza distribuida del sistema (backend, frontend e IoT).

### Herramientas utilizadas:

| Campo| Valor      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Software Deployment   |
| Herramienta   | GitHub     |
| Logo          | <img src="https://pngimg.com/uploads/github/github_PNG40.png" width="150"> |
| Descripción   | Plataforma para repositorios remotos que permite integración continua, control de versiones y despliegue automatizado mediante pipelines. |
| Uso en Nexora | Gestión de repositorios y despliegue   |
| URL  | [https://github.com](https://github.com) |

---

<br>

## 7. Version Control

El control de versiones es esencial para el trabajo colaborativo y la trazabilidad del código.

---

### Herramienta: Git (Local/CLI)

| Campo| Valor     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Version Control      |
| Herramienta   | Git |
| Logo          | <img src="https://www.flexmind.co/wp-content/uploads/2020/04/logo-git-icon-1024x1024.png" width="150"> |
| Descripción   | Sistema distribuido de control de versiones que permite gestionar cambios en el código fuente, trabajar con ramas y realizar integraciones seguras. |
| Uso en Nexora | Control de versiones en todos los componentes del sistema   |
| URL  | [https://git-scm.com](https://git-scm.com)|

---

### Herramienta: GitHub (SaaS)

| Campo| Valor |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Categoría     | Version Control |
| Herramienta   | GitHub|
| Logo          | <img src="https://pngimg.com/uploads/github/github_PNG40.png" width="150"> |
| Descripción   | Plataforma colaborativa basada en Git que permite gestionar repositorios, revisar código y mantener historial de cambios. |
| Uso en Nexora | Repositorio central del proyecto  |
| URL  | [https://github.com](https://github.com)     |

---

<br>

## 8. Software Documentation

La documentación es clave para mantener coherencia técnica y facilitar la colaboración.

### *Herramientas utilizadas:

| Campo| Valor  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Categoría     | Software Documentation |
| Herramienta   | Markdown + GitHub |
| Logo          | <img src="https://download.logo.wine/logo/Markdown/Markdown-Logo.wine.png" width="150"> |
| Descripción   | Documentación técnica versionada dentro del repositorio del proyecto, permitiendo trazabilidad y actualización continua. |
| Uso en Nexora | Documentación de arquitectura, APIs y decisiones técnicas |
| URL  | [https://www.markdownguide.org/](https://www.markdownguide.org/) |