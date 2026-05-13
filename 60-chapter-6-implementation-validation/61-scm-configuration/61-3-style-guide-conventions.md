## Source Code Style Guide & Coding Conventions


En este proyecto, se adoptan estándares y convenciones claras para la nomenclatura y la estructura del código, asegurando consistencia y mantenibilidad en todas las capas de la solución. El idioma oficial para nombrar clases, métodos, variables, archivos y directorios es el inglés, al igual que los comentarios en el código. Nos guiamos por convenciones de la industria, como las “.NET C# Coding Conventions”, “Vue Style Guide”, “Dart Style Guide” y los principios del Diseño Orientado al Dominio (DDD) para estructurar nuestros componentes.

### Stack Tecnológico

| Área | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Backend / API RESTful** | C#, ASP.NET Core, Entity Framework | Servicios principales de la plataforma, orientados a dominio y escalabilidad. |
| **Edge Service** | Python, Flask | Procesamiento perimetral, conexión con dispositivos IoT o tareas ligeras. |
| **Base de Datos** | PostgreSQL | Almacenamiento persistente y relacional. |
| **Aplicación Web (Frontend)** | Vue.js, CSS, JavaScript | Portal principal e interfaces de gestión, usando división vertical (Vertical Slicing) por *features*. |
| **Aplicación Móvil** | Flutter, Dart | Aplicación multiplataforma para interacción de los usuarios finales. |
| **Landing Page** | HTML5, CSS3, JavaScript | Página estática de presentación para marketing y captación, optimizada para SEO. |

### Arquitectura Backend Orientada a DDD (ASP.NET Core)

El backend, así como las aplicaciones móviles y web, adopta los principios de Diseño Orientado a Dominio (DDD). A continuación se muestra la estructura base en ASP.NET Core:

| Capa / Paquete | Propósito |
| :--- | :--- |
| `domain` | Entidades del negocio (Aggregates), Value Objects, interfaces de repositorios y servicios de dominio. No tiene dependencias externas (framework agnóstico). |
| `application` | Casos de uso de la aplicación, orquestación de llamadas entre el dominio y la infraestructura. No contiene lógica de negocio central. |
| `infrastructure` | Implementaciones concretas (acceso a base de datos PostgreSQL, clientes externos, configuración, seguridad). |
| `presentation` (o `interface`) | Controladores REST, endpoints, DTOs y manejo de excepciones web. |

### Convenciones de Nomenclatura (C# ASP.NET Core)

| Tipo | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Controladores** | PascalCase con sufijo `Controller` | `DeviceController` |
| **Servicios / Casos de Uso**| PascalCase con sufijo `Service` o `UseCase` | `RegisterDeviceUseCase` |
| **Entidades de Dominio** | PascalCase | `Device`, `Sensor`, `User` |
| **Interfaces (Repositorios, etc)**| PascalCase con prefijo `I` | `ISensorRepository` |
| **DTOs** | PascalCase con sufijo `Request` / `Response` o `Dto` | `CreateDeviceRequest` |
| **Métodos y Propiedades** | PascalCase descriptivo | `FindDeviceById()`, `IsActive` |

### Ejemplos de Código

A continuación se muestra un ejemplo de cómo se estructura un caso de uso y una entidad en el dominio, aplicable a nuestro proyecto:

```csharp
// Capa: Domain (Entidad)
namespace Nexora.Iot.Domain.Model
{
    public class Sensor
    {
        public string SensorId { get; private set; }
        public bool IsActive { get; private set; }

        public Sensor(string sensorId, bool isActive)
        {
            SensorId = sensorId;
            IsActive = isActive;
        }

        // Lógica de negocio intrínseca a la entidad
        public void Activate()
        {
            IsActive = true;
        }
    }
}
```

```csharp
// Capa: Application (Caso de Uso)
using System;
using Nexora.Iot.Domain.Model;
using Nexora.Iot.Domain.Repository;

namespace Nexora.Iot.Application.Service
{
    public class ActivateSensorUseCase
    {
        private readonly ISensorRepository _sensorRepository;

        // Inyección de dependencias mediante constructor
        public ActivateSensorUseCase(ISensorRepository sensorRepository)
        {
            _sensorRepository = sensorRepository;
        }

        public void Execute(string sensorId)
        {
            Sensor sensor = _sensorRepository.FindById(sensorId) 
                ?? throw new Exception("Sensor not found");
            
            sensor.Activate();
            _sensorRepository.Save(sensor);
        }
    }
}
```

### Atributos ASP.NET Core y Convenciones C#

| Atributo / Aspecto | Propósito / Convención |
| :--- | :--- |
| `[ApiController]` | Define los controladores que exponen endpoints REST en la capa de `presentation`. |
| `builder.Services...` | Registro de componentes de `application` y repositorios en el contenedor IoC. |
| `DbContext` | Clase base de Entity Framework Core para la persistencia en la capa `infrastructure`. |
| `[Table]` / Fluent API | Define las configuraciones de tablas específicas para la base de datos (infrastructure). |
| `SaveChanges()` | Se utiliza para confirmar transacciones (Unit of Work) al finalizar el caso de uso. |
| **Inyección de Dependencias** | Uso obligatorio de inyección por constructor. Nombres de variables privadas con prefijo `_` (ej. `_repository`). |
| **Manejo de Excepciones** | Centralizar usando Middleware global de manejo de excepciones. |
| **Logging** | Utilizar `ILogger<T>` integrado en ASP.NET Core. |

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

### Estructura de Proyecto Web (Vue.js)

Para el desarrollo del frontend de la aplicación web con Vue.js, utilizaremos el patrón de **Vertical Slicing** (división por *features*). Esto mantiene unidos los componentes, vistas y lógicas (estado, servicios) relacionadas a una misma funcionalidad, facilitando su escalabilidad y reduciendo el acoplamiento global.

| Capa / Carpeta | Propósito |
| :--- | :--- |
| `src/features/` | Contiene los distintos módulos del negocio (ej. `devices/`, `users/`). Cada *feature* agrupa sus propios `components`, `views`, `api` (servicios) y `store` (estado). |
| `src/core/` o `src/shared/` | Componentes genéricos (botones, modales), utilidades globales, configuración de clientes HTTP y directivas o *composables* reutilizables. |
| `src/layouts/` | Estructuras base de la interfaz (menú de navegación lateral/superior, contenedor principal). |
| `src/router/` | Configuración central del enrutador de Vue, importando las rutas expuestas por cada *feature*. |

#### Convenciones de Nomenclatura (Vue.js)

| Tipo | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Componentes (.vue)** | PascalCase (obligatorio múltiples palabras) | `DeviceList.vue`, `SensorCard.vue` |
| **Vistas (.vue)** | PascalCase con sufijo `View` | `DeviceDashboardView.vue` |
| **Archivos JS/CSS** | camelCase / kebab-case | `sensorService.js`, `main-styles.css` |
| **Clases CSS** | Metodología BEM | `.sensor-card__title--active` |
| **Variables/Métodos** | camelCase | `fetchDevices()`, `isLoading` |

#### Ejemplo de Código (Aplicación Web - Vue)

A continuación, un ejemplo de un componente de Vue (usando Composition API y `<script setup>`) ubicado dentro de un feature específico (`src/features/sensors/`):

```vue
<!-- Archivo: src/features/sensors/components/SensorStatus.vue -->
<template>
  <div class="sensor-status">
    <h3 class="sensor-status__title">Sensor: {{ sensorId }}</h3>
    <p 
      class="sensor-status__state" 
      :class="{ 'sensor-status__state--active': isActive }"
    >
      Estado: {{ isActive ? 'Activo' : 'Inactivo' }}
    </p>
    <button @click="toggleStatus" class="sensor-status__btn">
      Alternar Estado
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Definición de Props
const props = defineProps({
  sensorId: {
    type: String,
    required: true
  },
  initialStatus: {
    type: Boolean,
    default: false
  }
});

// Estado reactivo local
const isActive = ref(props.initialStatus);

// Método (camelCase)
const toggleStatus = () => {
  isActive.value = !isActive.value;
  // TODO: Orquestar llamada al 'sensorService' o emitir evento
};
</script>

<style scoped>
/* Uso de BEM para estilos locales */
.sensor-status {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}
.sensor-status__title {
  margin: 0 0 8px;
}
.sensor-status__state--active {
  color: green;
  font-weight: bold;
}
.sensor-status__btn {
  margin-top: 10px;
  cursor: pointer;
}
</style>
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
| **C#** | 4 espacios | 120 caracteres | Doble (`" "`) | Obligatorio |
| **Python** | 4 espacios | 80/100 caracteres| Simple o Doble | No usar |
| **Dart/Flutter**| 2 espacios | 80 caracteres | Simple (`' '`) | Obligatorio |
| **HTML/CSS/JS** | 2 espacios | 80 caracteres | HTML: Doble, JS: Simple | JS: Obligatorio |

*(Nota: Hemos adaptado esta tabla del estándar inicial para ajustarse a nuestro stack, incluyendo Python para el Edge Service en lugar de Kotlin).*

### Estructura General y Estándares Transversales

A nivel de repositorio y arquitectura de carpetas global, la separación es clara según la responsabilidad:

#### Estructura General del Proyecto

| Directorio | Contenido |
| :--- | :--- |
| `backend/` | API ASP.NET Core (C#) |
| `edge-service/` | API Flask (Python) |
| `mobile-flutter/` | Aplicación multiplataforma (Flutter) |
| `landing-page/` | Landing page estática (HTML/CSS/JS) |
| `docs/` | Documentación del proyecto |

#### Nomenclatura de Archivos

| Tecnología | Convención | Ejemplo |
| :--- | :--- | :--- |
| **C#** | PascalCase | `DeviceController.cs` |
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
