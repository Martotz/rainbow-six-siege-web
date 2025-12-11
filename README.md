# 🎮 Rainbow Six Siege - Sitio Web Informativo

Proyecto web académico desarrollado para la asignatura **Programación 1**, que presenta información detallada sobre operadores, armas y el universo de Rainbow Six Siege con un diseño táctico inmersivo.

![Rainbow Six Siege](R6%20Imagenes/Logo_Index.avif)

## 📋 Descripción del Proyecto

Este sitio web es una base de datos interactiva sobre Rainbow Six Siege que incluye:
- **Perfiles detallados de operadores** con estadísticas, equipamiento y biografías
- **Arsenal completo** organizado por categorías (rifles, subfusiles, pistolas, etc.)
- **Formulario de reclutamiento** con validación en tiempo real
- **Línea de tiempo histórica** del programa Rainbow
- **Interfaz táctica** inspirada en el diseño del juego original

## Tecnologías Utilizadas

- **HTML** - Estructura semántica con metodología BEM
- **CSS** - Diseño responsivo con Flexbox y Grid
- **JavaScript ** - Manipulación del DOM y carga dinámica de datos
- **JSON** - Base de datos de operadores y armas
- **Google Maps API** - Integración de ubicación de la base operativa

## Estructura del Proyecto

```
Nueva-Pagina-R6/
│
├── index.html              # Página principal
├── operators.html          # Listado de operadores
├── plantilla-agente.html   # Perfil detallado de operador
├── weapons.html            # Arsenal de armas
├── reclutamiento.html      # Formulario de contacto
├── historia.html           # Línea de tiempo y misión
├── creditos.html           # Información del desarrollador
├── navbar.html             # Navbar reutilizable
│
├── css/
│   ├── styles.css          # Estilos globales
│   ├── operators.css       # Estilos de operadores
│   ├── plantilla-agente.css # Estilos de perfil
│   ├── weapons.css         # Estilos de arsenal
│   ├── reclutamiento.css   # Estilos de formulario
│   ├── historia.css        # Estilos de timeline
│   └── creditos.css        # Estilos de créditos
│
├── js/
│   ├── script.js           # Lógica de operadores
│   └── navbar-loader.js    # Cargador de navbar
│
├── data/
│   ├── operators.json      # Base de datos de operadores
│   ├── weapons.json        # Equipamiento por operador
│   └── armas.json          # Catálogo completo de armas
│
└── R6 Imagenes/            # Recursos visuales
    ├── Cards - Operadores/
    ├── Icons - Operadores/
    ├── Armas/
    └── Habilidades/
```

## Características Principales

# Operadores
- Sistema de filtrado por bando (Atacantes/Defensores)
- Tarjetas interactivas con información detallada
- Perfiles completos con biografía, stats y equipamiento
- Indicadores visuales de estadísticas (círculos y barras)

# Arsenal
- Acordeón organizado por categorías de armas
- Más de 120 armas catalogadas
- Imágenes de alta calidad en formato AVIF
- Grid responsivo adaptativo

# Reclutamiento
- Formulario con validación en tiempo real
- Feedback visual de errores
- Modal de confirmación animado
- Integración con Google Maps (Base de Hereford)

# Historia
- Timeline interactiva con animaciones al scroll
- Sistema de pestañas para información adicional
- Diseño tipo expediente táctico

# Diseño y UX

- **Paleta de colores**: Negro/Gris oscuro con acentos dorados (#d4af37)
- **Tipografía**: Montserrat (Google Fonts)
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Animaciones CSS**: Transiciones suaves y efectos hover
- **Metodología BEM**: Nomenclatura de clases consistente

# Instalación y Uso

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Martotz/rainbow-six-siege-web.git
cd rainbow-six-siege-web
```

2. **Abrir el proyecto:**
   - Simplemente abrir `index.html` en el navegador
   - O usa un servidor local como Live Server (VS Code)

3. **No requiere instalación de dependencias** - Es un proyecto 100% frontend estático

# Funcionalidades JavaScript

- Fetch API para carga asíncrona de JSON
- Manipulación dinámica del DOM
- Event listeners y delegación de eventos
- Validación de formularios en tiempo real
- LocalStorage (opcional para favoritos)
- Intersection Observer para animaciones
- Sistema de routing con URL parameters

##Proyecto Académico

Este proyecto fue desarrollado como parte de la asignatura **Programación 1** con los siguientes requisitos cumplidos:

- HTML semántico y accesible
- CSS modular y reutilizable
- JavaScript vanilla (sin frameworks)
- Carga dinámica de datos JSON
- Formulario con validación
- Diseño responsive
- Integración de API externa (Google Maps)
- Documentación completa

# Responsive Design

El sitio es completamente responsive con breakpoints en:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

# Licencia

Este es un proyecto académico sin fines comerciales. Rainbow Six Siege es propiedad de Ubisoft.

# Desarrollador

Agustin Martinez - Estudiante de Ciencia de Datos e IA


## 🔗 Créditos

- **Juego**: Rainbow Six Siege © Ubisoft
- **Tipografía**: Montserrat (Google Fonts)
- **Imágenes**: Recursos oficiales de Rainbow Six Siege
- **Desarrollo**: Proyecto académico original

---
