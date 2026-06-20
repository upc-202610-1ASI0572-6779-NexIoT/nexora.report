## 6.3 Validación según heurísticas


### Usability – Inclusive Design – Information Architecture

* **CARRERA:** Ingeniería de Software
* **CURSO:** Desarrollo de Soluciones IoT
* **SECCIÓN:** 6779 
* **AUDITOR:** NexIoT Team
* **CLIENTE(S):** Arrendatarios y arrendadores.

---

### SITE o APP A EVALUAR:
* Landing Page (`nexora.website`), Web Application (`nexora.webapp`) y Mobile Application (`nexora.mobile`).

### TAREAS A EVALUAR:
El alcance de esta evaluación incluye la revisión de la usabilidad de las siguientes tareas:

1. Revisión de beneficios de seguridad e información de precios en la Landing Page.
2. Registro de propiedades y vinculación de dispositivos en la Web Application.
3. Visualización de telemetría y alertas en tiempo real y configuración de automatizaciones en la Mobile Application.

No están incluidas en esta versión de la evaluación las siguientes tareas:

1. Pasarela de pagos real (solo simulación de checkout).
2. Configuración física avanzada del hardware de sensores ESP32 (pairing físico).
3. Procesamiento de analíticas de consumo para históricos mayores a 12 meses.

---

### ESCALA DE SEVERIDAD:
Los errores serán puntuados tomando en cuenta la siguiente escala de severidad:

| Nivel | Descripción |
| :---: | :--- |
| **1** | **Problema superficial:** puede ser fácilmente superado por el usuario o ocurre con muy poca frecuencia. No necesita ser arreglado a no ser que exista disponibilidad de tiempo. |
| **2** | **Problema menor:** puede ocurrir un poco más frecuentemente o es un poco más difícil de superar para el usuario. Se le debería asignar una prioridad baja para resolverlo de cara al siguiente release. |
| **3** | **Problema mayor:** ocurre frecuentemente o los usuarios no son capaces de resolverlo. Es importante que sean corregidos y se les debe asignar una prioridad alta. |
| **4** | **Problema muy grave:** un error de gran impacto que impide al usuario continuar con el uso de la herramienta. Es imperativo que sea corregido antes del lanzamiento. |

---

### TABLA RESUMEN:

| # | Problema | Escala de severidad | Heurística/Principio violada(o) |
| :---: | :--- | :---: | :--- |
| 1 | Falta de claridad en la adquisición e integración de dispositivos IoT y su ROI económico (Arrendadores). | **3** | Heurística #10 (Ayuda y Documentación) y Heurística #2 (Relación entre el sistema y el mundo real) |
| 2 | Falta de prominencia y claridad en la visualización inmediata de alertas críticas de consumos anómalos o fugas (Arrendatarios). | **3** | Heurística #1 (Visibilidad del estado del sistema) |
| 3 | Complejidad en el flujo de registro y vinculación de dispositivos IoT (pairing) para arrendadores. | **2** | Heurística #5 (Prevención de errores) y Heurística #6 (Reconocimiento antes que recuerdo) |
| 4 | Curva de aprendizaje al configurar automatizaciones de dispositivos IoT. | **2** | Heurística #7 (Flexibilidad y eficiencia de uso) y Heurística #10 (Ayuda y Documentación) |

---

### DESCRIPCIÓN DE PROBLEMAS:

#### **PROBLEMA #1: Falta de claridad en la adquisición e integración de dispositivos IoT y su ROI económico (Arrendadores).**
* **Severidad:** 3
* **Heurística violada:** Heurística #10 (Ayuda y Documentación) y Heurística #2 (Relación entre el sistema y el mundo real)

**Descripción:**
El usuario del segmento Arrendador percibe la interfaz web como ordenada, pero no entiende cómo comprar los dispositivos, cómo instalarlos ni la rentabilidad económica que justifica el costo de adquisición del hardware.

**Recomendación:**
* Incluir en la Landing Page y en la Web App una calculadora interactiva de ROI que proyecte el ahorro en mantenimiento correctivo y consumo de agua/energía.
* Documentar visualmente el proceso de "3 pasos para digitalizar tu inmueble" (Adquisición, Instalación, Activación).

---

#### **PROBLEMA #2: Falta de prominencia y claridad en la visualización inmediata de alertas críticas de consumos anómalos o fugas (Arrendatarios).**
* **Severidad:** 3
* **Heurística violada:** Heurística #1 (Visibilidad del estado del sistema)

**Descripción:**
El usuario inquilino necesita enterarse de inmediato ante una filtración de agua o fuga de gas para evitar accidentes. Aunque los datos de telemetría son correctos, las alertas críticas no se destacan de forma intrusiva en la pantalla principal del dashboard móvil (falta soporte de alertas push visualmente urgentes).

**Recomendación:**
* Implementar notificaciones push inmediatas de alta prioridad.
* Agregar indicadores visuales de color rojo de alta criticidad en la pantalla principal del móvil para capturar la atención inmediata del inquilino ante incidentes graves.

---

#### **PROBLEMA #3: Complejidad en el flujo de registro y vinculación de dispositivos IoT (pairing) para arrendadores.**
* **Severidad:** 2
* **Heurística violada:** Heurística #5 (Prevención de errores) y Heurística #6 (Reconocimiento antes que recuerdo)

**Descripción:**
El flujo para vincular un dispositivo requiere que el arrendador recuerde e ingrese manualmente códigos de vinculación complejos de los gateways y dispositivos sin validación en tiempo real de su estado de conexión.

**Recomendación:**
* Sustituir la entrada de texto manual por la lectura de un código QR impreso en el hardware del dispositivo.
* Implementar una funcionalidad de auto-descubrimiento en la red local de los dispositivos cercanos para el emparejamiento con un solo clic.

---

#### **PROBLEMA #4: Curva de aprendizaje al configurar automatizaciones de dispositivos IoT.**
* **Severidad:** 2
* **Heurística violada:** Heurística #7 (Flexibilidad y eficiencia de uso) y Heurística #10 (Ayuda y Documentación)

**Descripción:**
Al crear una nueva automatización (ej. apagar luces si no hay movimiento tras 10 minutos), el inquilino debe configurar reglas complejas de tipo "si pasa esto, haz esto" sin contar con sugerencias o configuraciones estándar precargadas.

**Recomendación:**
* Añadir plantillas de automatización rápida de un solo toque para los escenarios más comunes descritos por los inquilinos (ej. "Modo Ahorro", "Modo Vacaciones", "Control de Inactividad").
