# Capítulo VI: Product Implementation, Validation & Deployment
# 6.1. Software Configuration Management
### 6.1.1. Software Development Environment Configuration

En esta sección se define el ecosistema de herramientas que soporta el ciclo de vida completo del desarrollo de Nexora. La selección responde a criterios de colaboración distribuida, escalabilidad, integración continua y compatibilidad con arquitecturas modernas (web, mobile e IoT).

Las herramientas se organizan según su propósito dentro del proceso de desarrollo.

<br>

## 1. Project Management

La gestión del proyecto se enfoca en metodologías ágiles, permitiendo iteración continua, visibilidad del progreso y trazabilidad de decisiones.

### Herramienta: Jira (SaaS)

| Campo | Valor |
| ------------- | --- |
| Categoría     | Project Management |
| Herramienta   | Jira |
| Logo          | <img src="https://logolook.net/wp-content/uploads/2023/04/Jira-Logo-2017.png" width="150"> |
| Descripción   | Plataforma para la gestión ágil del proyecto Nexora. Permite administrar el product backlog, planificación de sprints, seguimiento de historias de usuario y control de incidencias. Se utiliza también para definir lineamientos técnicos como convenciones de ramas, arquitectura y flujo de trabajo. |
| Uso en Nexora | Gestión de backlog, sprint planning, seguimiento de desarrollo  |
| URL  | [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira) |

---

### Herramienta: Trello (SaaS)

| Campo| Valor  |
| ------------- | --- |
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
| ------------- | ---|
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
| ------------- | --- |
| Categoría     | Product UX/UI Design|
| Herramienta   | Figma  |
| Logo          | <img src="https://i.pinimg.com/originals/29/95/95/29959595fe22edde8408b060d3ac3d82.png" width="150"> |
| Descripción   | Plataforma colaborativa para diseño de interfaces. Permite crear wireframes, prototipos interactivos y sistemas de diseño alineados con los Style Guidelines definidos. Facilita validación temprana con usuarios. |
| Uso en Nexora | Diseño de landing page, web app, mobile app e interfaces IoT |
| URL  | [https://www.figma.com](https://www.figma.com)     |

<br>

## 4. Software Development

El desarrollo de Nexora se divide en cuatro frentes: web, mobile, IoT e integración.

### Herramienta: Visual Studio Code (Local)

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Development (Landing Page) |
| **Tipo** | Local |
| **Herramienta** | Visual Studio Code |
| Logo | <img src="https://brandslogos.com/wp-content/uploads/images/large/visual-studio-code-logo.png" width="150"> |
| **Descripción** | Editor de código ligero y extensible. Utilizado para el desarrollo de la landing page. |
| **Tecnologías** | HTML, CSS, JavaScript |
| **Uso en Nexora** | Desarrollo de landing page |
| **URL (Descarga)** | [https://code.visualstudio.com/download](https://code.visualstudio.com/download) |

---

<br>

### Herramienta: WebStorm (Local)

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Development (Web Application) |
| **Tipo** | Local |
| **Herramienta** | WebStorm |
| Logo | <img src="https://www.anysoft.pl/images/items/4640/webstorm-icon_big.png" width="150"> |
| **Descripción** | IDE especializado en desarrollo web moderno. |
| **Tecnologías** | Vue.js, Tailwind CSS |
| **Uso en Nexora** | Desarrollo de la aplicación web (dashboard) |
| **URL (Descarga)** | [https://www.jetbrains.com/webstorm/download/](https://www.jetbrains.com/webstorm/download/) |

---

<br>

### Herramienta: Android Studio (Local)

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Development (Mobile) |
| **Tipo** | Local |
| **Herramienta** | Android Studio |
| Logo | <img src="https://freepnglogo.com/images/all_img/android-studio-logo-2023-51ae.png" width="150"> |
| **Descripción** | IDE oficial para desarrollo móvil multiplataforma. |
| **Tecnologías** | Flutter (Dart) |
| **Uso en Nexora** | Desarrollo de la aplicación móvil para control IoT |
| **URL (Descarga)** | [https://developer.android.com/studio#downloads](https://www.google.com/search?q=https://developer.android.com/studio%23downloads) |

---

<br>

### Herramienta: Wokwi (SaaS)

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Development (IoT Hardware) |
| **Tipo** | SaaS |
| **Herramienta** | Wokwi |
| **Descripción** | Simulador online para electrónica y hardware IoT. |
| **Uso en Nexora** | Prototipado y simulación de hardware/sensores |
| **URL (Referencia)** | [https://wokwi.com](https://wokwi.com) |

---

### Herramienta: Arduino IDE (Local)

<br>

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Development (IoT Firmware) |
| **Tipo** | Local |
| **Herramienta** | Arduino IDE |
| Logo | <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi59jlREr2c4GZudGJV-XlU6oQtBqKDfsyh3UROe-AXFHoTDiXNogKTnqTtBDtd-9FuKpGFnmH31N-BoA5jk9hs67Gise8JGiNYzdiayzo96TiTOIpXxblaIv2fTdBK2jgtwFIaQfLEzKZEwP5uAI4k0F4D5FrPb_B_OrWI4KA12WLxObH7fbWh_e9skQ/s812/Logo_Wokwi.png" width="150"> |
| **Descripción** | Entorno de desarrollo para programar microcontroladores. |
| **Uso en Nexora** | Programación del firmware para dispositivos IoT |
| **URL (Descarga)** | [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software) |

---

<br>

## 5. Software Testing

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Testing |
| **Tipo** | SaaS |
| **Herramienta** | Postman |
| Logo | <img src="https://www.logoshape.com/wp-content/uploads/2025/04/Postman_vector_Logo_logoshape.com_.png" width="150"> |
| **Descripción** | Herramienta para pruebas de APIs REST. |
| **Uso en Nexora** | Testing de APIs del sistema |
| **URL (Referencia)** | [https://www.postman.com/downloads/](https://www.postman.com/downloads/) |

---

<br>

## 6. Software Deployment

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Deployment |
| **Tipo** | SaaS |
| **Herramienta** | GitHub |
| Logo | <img src="https://pngimg.com/uploads/github/github_PNG40.png" width="150"> |
| **Descripción** | Repositorio remoto para integración continua y despliegue. |
| **Uso en Nexora** | Gestión de repositorios y despliegue |
| **URL (Referencia)** | [https://github.com](https://github.com) |

---

<br>

## 7. Version Control

| Campo | Valor |
| --- | --- |
| **Categoría** | Version Control |
| **Tipo** | Local |
| **Herramienta** | Git |
| Logo          | <img src="https://www.flexmind.co/wp-content/uploads/2020/04/logo-git-icon-1024x1024.png" width="150"> |
| **Descripción** | Sistema distribuido de control de versiones. |
| **Uso en Nexora** | Control de versiones en todos los componentes |
| **URL (Descarga)** | [https://git-scm.com/downloads](https://www.google.com/search?q=https://git-scm.com/downloads) |

---

<br>

## 8. Software Documentation

*Se mantiene la estructura solicitada según su indicación.*

| Campo | Valor |
| --- | --- |
| **Categoría** | Software Documentation |
| **Tipo** | Híbrido |
| **Herramienta** | Markdown + GitHub |
| Logo | <img src="https://download.logo.wine/logo/Markdown/Markdown-Logo.wine.png" width="150"> |
| **Descripción** | Documentación técnica versionada dentro del repositorio del proyecto. |
| **Uso en Nexora** | Documentación de arquitectura, APIs y decisiones técnicas |
| **URL** | [https://www.markdownguide.org/](https://www.markdownguide.org/) |

<div style="page-break-after: always;"></div>