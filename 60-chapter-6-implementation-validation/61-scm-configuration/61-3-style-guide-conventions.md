## Source Code Style Guide & Coding Conventions


En este proyecto, se adoptan estándares y convenciones claras para la nomenclatura y la estructura del código, asegurando consistencia y mantenibilidad en todas las capas de la solución. El idioma oficial para nombrar clases, métodos, variables, archivos y directorios es el inglés, al igual que los comentarios en el código. Nos guiamos por convenciones de la industria, como la “Google Java Style Guide”, “Vue Style Guide”, “Dart Style Guide” y los principios del Diseño Orientado al Dominio (DDD) para estructurar nuestros componentes.

### Stack Tecnológico

| Área | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Backend / API RESTful** | Java, Spring Boot | Servicios principales de la plataforma, orientados a dominio y escalabilidad. |
| **Edge Service** | Python, Flask | Procesamiento perimetral, conexión con dispositivos IoT o tareas ligeras. |
| **Base de Datos** | PostgreSQL | Almacenamiento persistente y relacional. |
| **Aplicación Web (Frontend)** | Vue.js, CSS, JavaScript | Portal principal e interfaces de gestión, usando división vertical (Vertical Slicing) por *features*. |
| **Aplicación Móvil** | Flutter, Dart | Aplicación multiplataforma para interacción de los usuarios finales. |
| **Landing Page** | HTML5, CSS3, JavaScript | Página estática de presentación para marketing y captación, optimizada para SEO. |

### Arquitectura Backend Orientada a DDD (Spring Boot)

El backend, así como las aplicaciones móviles y web, adopta los principios de Diseño Orientado a Dominio (DDD). A continuación se muestra la estructura base en Spring Boot:

| Capa / Paquete | Propósito |
| :--- | :--- |
| `domain` | Entidades del negocio (Aggregates), Value Objects, interfaces de repositorios y servicios de dominio. No tiene dependencias externas (framework agnóstico). |
| `application` | Casos de uso de la aplicación, orquestación de llamadas entre el dominio y la infraestructura. No contiene lógica de negocio central. |
| `infrastructure` | Implementaciones concretas (acceso a base de datos PostgreSQL, clientes externos, configuración, seguridad). |
| `presentation` (o `interface`) | Controladores REST, endpoints, DTOs y manejo de excepciones web. |

### Convenciones de Nomenclatura (Java Spring Boot)

| Tipo | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Controladores** | PascalCase con sufijo `Controller` | `DeviceController` |
| **Servicios / Casos de Uso**| PascalCase con sufijo `Service` o `UseCase` | `RegisterDeviceUseCase` |
| **Entidades de Dominio** | PascalCase | `Device`, `Sensor`, `User` |
| **Repositorios (Interfaces)**| PascalCase con sufijo `Repository` | `SensorRepository` |
| **DTOs** | PascalCase con sufijo `Request` / `Response` o `Dto` | `CreateDeviceRequest` |
| **Métodos** | camelCase descriptivo | `findDeviceById()` |

### Ejemplos de Código

A continuación se muestra un ejemplo de cómo se estructura un caso de uso y una entidad en el dominio, aplicable a nuestro proyecto:

```java
// Capa: Domain (Entidad)
package com.nexora.iot.domain.model;

public class Sensor {
    private String sensorId;
    private boolean isActive;

    public Sensor(String sensorId, boolean isActive) {
        this.sensorId = sensorId;
        this.isActive = isActive;
    }

    // Lógica de negocio intrínseca a la entidad
    public void activate() {
        this.isActive = true;
    }

    public boolean isActive() {
        return this.isActive;
    }
}
```

```java
// Capa: Application (Caso de Uso)
package com.nexora.iot.application.service;

import com.nexora.iot.domain.model.Sensor;
import com.nexora.iot.domain.repository.SensorRepository;
import org.springframework.stereotype.Service;

@Service
public class ActivateSensorUseCase {
    private final SensorRepository sensorRepository;

    // Inyección de dependencias mediante constructor
    public ActivateSensorUseCase(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public void execute(String sensorId) {
        Sensor sensor = sensorRepository.findById(sensorId)
            .orElseThrow(() -> new RuntimeException("Sensor not found"));
        
        sensor.activate();
        sensorRepository.save(sensor);
    }
}
```

### Anotaciones Spring Boot y Convenciones Java

| Anotación / Aspecto | Propósito / Convención |
| :--- | :--- |
| `@RestController` | Define los controladores que exponen endpoints en la capa de `presentation`. |
| `@Service` | Identifica componentes de la capa de `application` y orquestación. |
| `@Repository` | Para beans de persistencia en la capa `infrastructure`. |
| `@Entity` / `@Table` | Define las entidades JPA específicas para la base de datos (infrastructure). |
| `@Transactional` | Gestión de transacciones en la ejecución de casos de uso (capa de `application`). |
| **Inyección de Dependencias** | Uso obligatorio de *Constructor injection* (se desaconseja `@Autowired` en atributos). |
| **Manejo de Excepciones** | Centralizar usando `@ControllerAdvice` o `@RestControllerAdvice` globalmente. |
| **Logging** | Utilizar SLF4J (ej. `log.info()`) para registrar trazas en diferentes niveles. |

### Estructura de Proyecto Móvil (Flutter / Dart)

Para el desarrollo móvil con Flutter, se establece el patrón **BLoC** (Business Logic Component) como estándar para el manejo del estado, combinándolo con los principios Clean Architecture / DDD, análogos al backend.

| Capa / Carpeta | Propósito |
| :--- | :--- |
| `presentation/` | Componentes de UI (Screens, Widgets) manejados de forma reactiva, organizados por *features*. |
| `application/` o `blocs/` | Gestión del estado (BLoCs, Cubits o Providers) y orquestación de eventos de la UI. |
| `domain/` | Casos de uso, entidades puras y definición de fallos o errores. |
| `infrastructure/` | Implementación de repositorios, modelos (con sus métodos de serialización `fromJson`/`toJson`) y orígenes de datos (APIs REST). |
| `core/` o `shared/` | Utilidades globales, configuración de temas, enrutamiento e inyección de dependencias. |

### Convenciones de Nomenclatura (Flutter / Dart)

| Tipo | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Archivos y Directorios** | snake_case | `device_list_screen.dart`, `sensor_model.dart` |
| **Clases / Widgets / BLoCs**| PascalCase | `DeviceListScreen`, `SensorBloc` |
| **Variables y Métodos** | camelCase | `loadSensors()`, `isActive` |
| **Constantes** | lowerCamelCase (convención oficial de Dart) | `defaultTimeoutLimit` |
| **Modelos (Infraestructura)**| PascalCase con sufijo `Model` o `Dto` | `DeviceModel`, `SensorDto` |

### Ejemplos de Código (Aplicación Móvil - Flutter)

A continuación se muestra un ejemplo de cómo se estructura la lógica de estado usando **BLoC** y la interfaz de usuario en la aplicación móvil, siguiendo las convenciones establecidas:

```dart
// Capa: Application (Gestión de Estado - BLoC)
// Archivo: sensor_bloc.dart
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:nexora_app/domain/models/sensor.dart';
import 'package:nexora_app/domain/repositories/sensor_repository.dart';

// Definición de Eventos
abstract class SensorEvent {}
class LoadSensorsEvent extends SensorEvent {}

// Definición de Estados
abstract class SensorState {}
class SensorInitial extends SensorState {}
class SensorLoading extends SensorState {}
class SensorLoaded extends SensorState {
  final List<Sensor> sensors;
  SensorLoaded(this.sensors);
}
class SensorError extends SensorState {
  final String message;
  SensorError(this.message);
}

// BLoC
class SensorBloc extends Bloc<SensorEvent, SensorState> {
  final SensorRepository repository;

  SensorBloc(this.repository) : super(SensorInitial()) {
    on<LoadSensorsEvent>((event, emit) async {
      emit(SensorLoading());
      try {
        final sensors = await repository.getSensors();
        emit(SensorLoaded(sensors));
      } catch (e) {
        emit(SensorError("Error al cargar los sensores"));
      }
    });
  }
}
```

```dart
// Capa: Presentation (UI - Widget)
// Archivo: sensor_list_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:nexora_app/application/blocs/sensor_bloc.dart';

class SensorListScreen extends StatelessWidget {
  const SensorListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sensores Nexora')),
      body: BlocBuilder<SensorBloc, SensorState>(
        builder: (context, state) {
          if (state is SensorLoading) {
            return const Center(child: CircularProgressIndicator());
          } else if (state is SensorLoaded) {
            return ListView.builder(
              itemCount: state.sensors.length,
              itemBuilder: (context, index) {
                final sensor = state.sensors[index];
                return ListTile(
                  title: Text(sensor.id),
                  trailing: Icon(
                    sensor.isActive ? Icons.check_circle : Icons.error,
                    color: sensor.isActive ? Colors.green : Colors.red,
                  ),
                );
              },
            );
          } else if (state is SensorError) {
            return Center(child: Text(state.message));
          }
          return const Center(child: Text('No hay sensores registrados.'));
        },
      ),
    );
  }
}
```

### Convenciones para Landing Page

La Landing Page se enfoca en captación, presentación y posicionamiento, utilizando tecnologías web estándar sin frameworks pesados, asegurando velocidad y accesibilidad.

#### Estructuración HTML

| Elemento | Convención |
| :--- | :--- |
| **Etiquetas Semánticas** | Usar `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` |
| **Atributos ARIA** | Implementar `role`, `aria-label`, `aria-expanded` |
| **Encabezados** | Jerarquía adecuada H1-H6 |
| **Formularios** | Etiquetas `label` asociadas a inputs |

#### Convenciones CSS

| Aspecto | Convención |
| :--- | :--- |
| **Metodología** | BEM (Block Element Modifier) |
| **Variables CSS** | Definir en `:root` |
| **Responsive Design** | Mobile-first approach |
| **Organización** | Modular por componentes |

#### Convenciones JavaScript

| Aspecto | Convención |
| :--- | :--- |
| **Variables** | `const` para valores fijos, `let` para variables |
| **Funciones** | Nombres descriptivos en `camelCase` |
| **Event Listeners** | Usar *event delegation* cuando sea posible |
| **Módulos** | Organizar funcionalidad en módulos |
| **Comentarios** | JSDoc para funciones principales |

### Formato del Código General

Para asegurar que todo el equipo mantenga la misma consistencia visual y estructura al escribir código, adoptamos los siguientes formatos básicos por tecnología:

| Lenguaje | Sangría | Límite Línea | Comillas | Puntos y Coma |
| :--- | :--- | :--- | :--- | :--- |
| **Java** | 4 espacios | 120 caracteres | Doble (`" "`) | Obligatorio |
| **Python** | 4 espacios | 80/100 caracteres| Simple o Doble | No usar |
| **Dart/Flutter**| 2 espacios | 80 caracteres | Simple (`' '`) | Obligatorio |
| **HTML/CSS/JS** | 2 espacios | 80 caracteres | HTML: Doble, JS: Simple | JS: Obligatorio |

*(Nota: Hemos adaptado esta tabla del estándar inicial para ajustarse a nuestro stack, incluyendo Python para el Edge Service en lugar de Kotlin).*

### Estructura General y Estándares Transversales

A nivel de repositorio y arquitectura de carpetas global, la separación es clara según la responsabilidad:

#### Estructura General del Proyecto

| Directorio | Contenido |
| :--- | :--- |
| `backend/` | API Spring Boot (Java) |
| `edge-service/` | API Flask (Python) |
| `mobile-flutter/` | Aplicación multiplataforma (Flutter) |
| `landing-page/` | Landing page estática (HTML/CSS/JS) |
| `docs/` | Documentación del proyecto |

#### Nomenclatura de Archivos

| Tecnología | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Java** | PascalCase | `DeviceController.java` |
| **Python** | snake_case | `sensor_processing.py` |
| **Dart/Flutter**| snake_case | `device_screen.dart` |
| **HTML/CSS/JS** | kebab-case | `main-styles.css`, `navigation.js` |

#### Accesibilidad y SEO

| Área | Requisitos |
| :--- | :--- |
| **Accesibilidad** | Contraste 4.5:1, ARIA labels, navegación por teclado, soporte para lectores de pantalla |
| **SEO** | Meta tags descriptivos, estructura semántica HTML5, Open Graph tags |
| **Performance** | Optimización de imágenes (WebP), lazy loading, minificación de recursos |
| **Mobile** | Diseño responsive, touch-friendly (mínimo 44x44px para botones) |
| **Internacionalización**| Soporte para múltiples idiomas (es, en) |
