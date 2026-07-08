## 5.2.2 Labeling Systems

En esta sección se especifica el sistema de etiquetado de Nexora, diseñado bajo principios de simplicidad y eficiencia cognitiva. El equipo ha seleccionado etiquetas con el **mínimo número de palabras** para evitar la confusión y permitir una reacción inmediata ante datos críticos provenientes de sensores IoT.

### **Representación de Datos y Simplicidad**

Para garantizar que los usuarios (arrendadores e inquilinos) procesen la información sin ambigüedades, se utilizan etiquetas que actúan como "anclas mentales". Cada etiqueta representa un conjunto de información o una funcionalidad específica sin necesidad de sobrecargar la interfaz con descripciones extensas.

---

### **Etiquetas de Navegación y Sistemas**

Estas etiquetas permiten al usuario asociar secciones completas de la aplicación con un solo concepto.

| Etiqueta | Conjunto de Información Asociado |
| :--- | :--- |
| **Inicio** | Estado general de la vivienda o cartera de propiedades. |
| **Gas** | Niveles actuales, estado de la válvula y alertas de fuga. |
| **Aire** | Calidad ambiental, niveles de CO2 y humedad. |
| **Alertas** | Registro de eventos críticos, preventivos y fallas de conexión. |
| **Propiedades** | Ubicación, detalles del inmueble e información del contrato. |
| **Pagos** | Historial de facturación, estado de suscripción y métodos de pago. |
| **Ajustes** | Configuración de perfil, umbrales de sensores y seguridad. |

---

### **Etiquetas de Acción y Control**

Verbos directos que disparan asociaciones funcionales inmediatas.

| Etiqueta | Asociación de Funcionalidad |
| :--- | :--- |
| **Cerrar** | Interrupción inmediata del flujo (Válvula/Gas). |
| **Abrir** | Restablecimiento del flujo o acceso. |
| **Ventilar** | Activación de sistemas de extracción de aire. |
| **Exportar** | Generación y descarga de documentos (PDF/CSV). |
| **Vincular** | Proceso de emparejamiento de hardware IoT. |
| **Soporte** | Acceso a canales de ayuda, FAQ y contacto técnico. |

---

### **Etiquetas de Estado (Feedback Visual)**

Palabras únicas que sintetizan condiciones complejas de los sensores.

| Etiqueta | Condición del Sistema |
| :--- | :--- |
| **Normal** | Funcionamiento óptimo y valores bajo umbral. |
| **Falla** | Problema técnico o pérdida de señal. |
| **Fuga** | Detección de gas por encima del límite de seguridad. |
| **Crítico** | Situación de peligro que requiere acción inmediata. |
| **Offline** | Dispositivo desconectado de la red. |

---

### **Asociaciones Mentales y Reducción de Confusión**

Siguiendo el principio de asociación4, el sistema evita aglomerar datos. Por ejemplo:

*   **La etiqueta ‘Propiedad’**: No muestra todos los datos técnicos del sensor en la lista; al verla, el arrendador asocia que ahí encontrará la ubicación, quién es el inquilino y si hay alguna incidencia pendiente, manteniendo la interfaz limpia.
*   **La etiqueta ‘Gas’**: En lugar de usar "Nivel de saturación de Gas LP", se utiliza solo "Gas". El usuario asocia mentalmente que esta sección contiene tanto la medición actual como los controles de seguridad relacionados.
*   **La etiqueta ‘Soporte’**: Al igual que el ejemplo de 'Contacto', esta etiqueta asocia en la mente del usuario que encontrará asistencia técnica, números de emergencia y guías de uso sin que estos elementos ocupen espacio innecesario en el menú principal.

Esta arquitectura de etiquetas asegura que Nexora sea intuitivo para visitantes nuevos y eficiente para usuarios recurrentes que gestionan múltiples dispositivos en tiempo real.

<div style="page-break-after: always;"></div>