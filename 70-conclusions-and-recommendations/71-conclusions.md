# Conclusiones

A partir del desarrollo del Sprint 1 y la consolidación de la arquitectura del proyecto Nexora, el equipo presenta las siguientes conclusiones:

## AV1

1.  **Impacto de la Integración IoT en la Experiencia de Usuario**: La implementación de dispositivos inteligentes (ESP32) integrados con interfaces web y móviles permite una gestión proactiva de la seguridad y el consumo. Esto no solo optimiza la operación de las propiedades, sino que proporciona a los residentes una herramienta de control en tiempo real que aumenta significativamente su percepción de seguridad y bienestar.
2.  **Escalabilidad mediante Diseño Orientado al Dominio (DDD)**: La adopción de arquitecturas estratégicas y tácticas basadas en DDD ha permitido separar claramente las responsabilidades del sistema. Esta modularidad garantiza que el proyecto pueda crecer con nuevas funcionalidades (como integraciones con terceros o analítica avanzada) sin comprometer la estabilidad del núcleo del negocio.
3.  **Efectividad de la Metodología Ágil y Trabajo Colaborativo**: El uso de Scrum y el flujo de trabajo en Trello durante el Sprint 1 fue fundamental para alcanzar un Producto Mínimo Viable (MVP) functional en un corto periodo de tiempo. La clara definición de roles y la integración continua permitieron resolver dependencias técnicas de forma eficiente, asegurando una entrega de alta calidad.

## TB1

1. **Desarrollo de dispositivos IoT**: La implementación de embedded apps mediante un prototipo físico usando un ESP32 y simuladores en Wokwi, nos permitió entender cómo crear soluciones conectando hardware y software. La creación de un edge service nos permitió transportar datos hacia nuestra aplicación para la realización de métricas e identificación de riesgos.
2. **Distribución del Sprint 2**: Nos distribuimos de manera eficiente y ágil para cumplir con la mayoría de historias de usuario y requisitos necesarios para el alcance del Sprint 2. Logramos tener un gran avance para nuestros embedded apps, prototipo físico, edge service, web app y la primera versión de nuestra mobile app.
3. **DDD como paradigma para todos los ítems creados**: Se utilizó Domain Driven Design para la creación de todos los software propuestos, siguiendo el patrón de carpetas de *Domain*, *Infrastructure*, *Interface/Presentation* e *Infrastructure*.

## AV2

1. **Diversificación y Sincronización Multiplataforma**: La implementación simultánea de la Web App, Mobile App, Edge Service y Embedded Apps (tanto físicas como simuladas en Wokwi) demuestra la capacidad del sistema para gestionar un ecosistema IoT multiplataforma. La sincronización de datos en tiempo real entre los sensores ESP32 y las interfaces del usuario (arrendatarios y arrendadores) valida la arquitectura de comunicación distribuida de Nexora.
2. **Eficiencia en la Captura y Procesamiento de Telemetría (Edge & Cloud)**: La integración del Edge Service como intermediario para el procesamiento local y transporte de datos de sensores hacia la nube ha optimizado el uso de ancho de banda y la velocidad de respuesta del sistema. Esto permite un monitoreo constante del consumo de recursos y la detección temprana de riesgos como fugas o consumos anómalos.
3. **Validación Práctica mediante Prototipado Híbrido**: El desarrollo del prototipo físico con ESP32 junto con simulaciones en Wokwi ha permitido al equipo validar el comportamiento del hardware bajo distintos escenarios sin depender únicamente de componentes físicos. Esta estrategia híbrida de desarrollo aceleró el ciclo de pruebas y aseguró una integración estable con el backend.

# Recomendaciones

Con el fin de garantizar el crecimiento sostenible del proyecto Nexora, se sugieren las siguientes recomendaciones:

1. **Optimización y Refinamiento de la Arquitectura DDD**: Se recomienda continuar optimizando la separación de capas (Domain, Application, Infrastructure, Interface) en todos los bounded contexts. Es fundamental evitar el acoplamiento y asegurar que la lógica de negocio en la capa de Domain permanezca pura y libre de dependencias tecnológicas externas.
2. **Evolución y Desarrollo Incremental de Módulos**: Se sugiere seguir expandiendo el desarrollo de los módulos de la plataforma, priorizando la implementación de las Smart Recommendations (analítica de IA) y alertas críticas en tiempo real tanto en la aplicación web como en la móvil, basándose en la retroalimentación obtenida de las evaluaciones heurísticas.
3. **Consolidación de Pruebas de Integración y Carga**: Con el aumento del volumen de datos transmitidos por múltiples dispositivos IoT, se recomienda diseñar e implementar pruebas de carga y estrés en el Edge Service y el API Gateway para asegurar que el sistema mantenga su rendimiento ante una escala masiva de inmuebles conectados.
4. **Automatización del Despliegue y CI/CD**: Implementar pipelines de integración y despliegue continuo (CI/CD) para todos los productos independientes (Landing Page, Web App, Mobile App, Edge Service) para agilizar las entregas y minimizar errores en futuras fases de desarrollo.
