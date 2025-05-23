# Recetas Express 🍽️📲

Aplicación móvil para descubrir, explorar, guardar y compartir recetas del mundo.
Desarrollada en **React Native (Expo)** utilizando **TypeScript**, con navegación stack, consumo de API, mapas interactivos y gestión de favoritos.

---

## 📸 Capturas de Pantalla

| Pantalla de Login                 | Bienvenida                      | Buscador de Recetas                 | Resultado de Búsqueda             |
| --------------------------------- | ------------------------------- | ----------------------------------- | --------------------------------- |
| ![Login](./screenshots/login.jpg) | ![Home](./screenshots/home.jpg) | ![Search](./screenshots/search.jpg) | ![Query](./screenshots/query.jpg) |

| Detalle de Receta                   | Mapa (solo Expo)              | Recetas Favoritas                         | Compartir Receta                  |
| ----------------------------------- | ----------------------------- | ----------------------------------------- | --------------------------------- |
| ![Detail](./screenshots/detail.jpg) | ![Map](./screenshots/map.jpg) | ![Favorites](./screenshots/favorites.jpg) | ![Share](./screenshots/share.jpg) |

---

## 🚀 Características Funcionales

- 🧑‍🍳 **Búsqueda Dinámica** de recetas desde API pública [TheMealDB](https://www.themealdb.com/api.php).
- 🖼️ **Renderizado de imágenes** y **detalles** de cada receta.
- 🌍 **Mapa interactivo** simulando la ubicación geográfica de la receta según su origen.
- ❤️ **Gestión de favoritos** con almacenamiento local usando AsyncStorage.
- 🔗 **Compartir recetas** por mensajería o redes sociales.
- 🔐 **Autenticación simulada** usando **Context API** y **AsyncStorage** para gestionar el estado de sesión.
- 📲 **Generación de APK firmado y listo para distribuir**.

---

## 🏗️ Arquitectura y Buenas Prácticas

### 🗂️ Estructura Modular

- **/constants**: Paleta de colores y configuraciones globales.
- **/context**: Gestión de sesión de usuario usando **Context API** y **AsyncStorage** para mantener el estado de autenticación en toda la aplicación.
- **/screens**: Pantallas principales.
- **/services**: Lógica de consumo de API y persistencia local.
- **/types**: Tipado global con TypeScript.
- **/components**: (Listo para escalar con componentes reutilizables).

### 🧠 Patrón de Desarrollo

- **Separación de responsabilidades**: lógica, vistas y estilos están organizados.
- **Tipado estático** con TypeScript para prevenir errores.
- **React Navigation v6**: Flujo de navegación seguro y controlado.
- **AsyncStorage**: Persistencia de favoritos localmente.
- **EAS Build y APK firmado**: Empaquetado profesional listo para publicación.

### ⚙️ Integraciones Técnicas

- **Google Maps / react-native-maps**: Representación visual del origen geográfico.
- **Expo Image Assets**: Gestión de íconos y splash screen personalizados.
- **Share API**: Compartir recetas desde el sistema operativo.
- **Context API + AsyncStorage:** Simulación de sesión persistente con almacenamiento local.

---

## 🧑‍💻 Cómo Clonar y Ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/XRandolphX/RecetasExpress.git
cd RecetasExpress

# 2. Instalar dependencias
npm install

# 3. Iniciar la app en Expo Go
npx expo start

# 4. Escanear el QR con Expo Go en tu teléfono
```

### ⚠️ Requisitos Previos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- App **Expo Go** en tu teléfono (iOS o Android)

---

## 🔐 Credenciales de Prueba

Puedes usar estas credenciales simuladas para acceder:

- **Usuario**: `test@demo.com`
- **Contraseña**: `123456`

---

## 📦 Instalación Rápida (APK)

Descarga el APK listo para instalar desde:
[👉 Descargar APK aquí](https://expo.dev/accounts/xrandolphx/projects/RecetasExpress/builds/b6f5c421-7335-45a5-b2a3-5874bcfbe396)

O desde la sección de [Releases](https://github.com/XRandolphX/RecetasExpress/releases) del repositorio.

---

## 🏆 Posibilidades de Escalado

1. **Conexión a Backend Real** (Firebase, Node.js, etc.).
2. **Autenticación Real** (Google, Facebook, Email/Password).
3. **CRUD Completo** para usuarios y recetas.
4. **Sincronización de Favoritos en la Nube**.
5. **Notificaciones Push Personalizadas**.
6. **Distribución en App Store y Play Store**.

---

## 📝 Créditos

- Desarrollado por **Randolph Ramirez**.
- Contacto: [LinkedIn](https://www.linkedin.com/in/randolph-fabrizio-ramirez-palacios-4766a1272)

---

_Disfruta cocinando con Recetas Express._ 🍲📱

---
