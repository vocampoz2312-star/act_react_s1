
# Actividad Práctica 1: Uso de Props en Next.js (App Router)

Esta actividad te guiará paso a paso para entender y utilizar **props** en Next.js con el **App Router**, un concepto fundamental para pasar datos entre componentes en React. Crearemos una aplicación simple que muestra información de usuarios, utilizando componentes de cliente y servidor. La actividad está diseñada para principiantes, con explicaciones detalladas y ejemplos prácticos.

## Prerrequisitos

- Conocimientos básicos de HTML, CSS y JavaScript.
- Node.js instalado (versión 18 o superior recomendada).
- Un editor de código (como VS Code).
- Familiaridad básica con React y Next.js.
- Conocimiento básico de componentes de cliente y servidor en Next.js.

## Objetivos de la actividad

- Comprender cómo funcionan las **props** en el contexto de Next.js.
- Crear componentes de cliente que usen props para mostrar datos dinámicos.
- Practicar el paso de diferentes tipos de datos a través de props (strings, números, objetos, funciones).
- Estructurar una aplicación Next.js simple usando el App Router.

## Paso 1: Configuración del entorno

1. **Crea un fork de:**:  

   ```bash
   https://github.com/jfinfosena/act_react_s1.git
   ```


2. **Limpia el proyecto**:
   - En la carpeta `app`, elimina el contenido de `page.js` y reemplázalo con:

   ```jsx
   export default function Home() {
     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
       </main>
     );
   }
   ```  

## Paso 2: Crear un componente de cliente que reciba props

1. **Crea un componente `Usuario`**:
   - Crea una nueva carpeta `components` en la raíz del proyecto.
   - Dentro de `components`, crea un archivo `Usuario.jsx`:

   ```jsx
   'use client';

   import React from 'react';

   function Usuario(props) {
     return (
       <div className="bg-gray-100 p-4 m-2 rounded-lg">
         <h2 className="text-xl font-bold">Nombre: {props.nombre}</h2>
       </div>
     );
   }

   export default Usuario;
   ```

   **Explicación**:
   - Añadimos `'use client'` al inicio del archivo porque este componente usará interactividad del lado del cliente (más adelante añadiremos un botón).
   - El componente recibe `props` y muestra la prop `nombre`.
   - Usamos Tailwind CSS para un diseño básico.

2. **Usa el componente `Usuario` en la página principal**:
   - Modifica `app/page.js`:

   ```jsx
   import Usuario from '../components/Usuario';

   export default function Home() {
     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
         <Usuario nombre="Ana García" />
       </main>
     );
   }
   ```

   **Explicación**:
   - Importamos el componente `Usuario` desde la carpeta `components`.
   - Pasamos la prop `nombre` con el valor `"Ana García"`.
   - Al renderizar, el componente mostrará "Nombre: Ana García".

3. **Prueba en el navegador**:
   - Guarda los cambios y verifica que el navegador muestre el texto "Nombre: Ana García" con un estilo aplicado.

## Paso 3: Pasar múltiples props

1. **Añade más props al componente `Usuario`**:
   - Modifica `components/Usuario.jsx` para recibir y mostrar más props, como `edad` y `ciudad`:

   ```jsx
   'use client';

   import React from 'react';

   function Usuario(props) {
     return (
       <div className="bg-gray-100 p-4 m-2 rounded-lg">
         <h2 className="text-xl font-bold">Nombre: {props.nombre}</h2>
         <p>Edad: {props.edad} años</p>
         <p>Ciudad: {props.ciudad}</p>
       </div>
     );
   }

   export default Usuario;
   ```

2. **Actualiza `page.js` para pasar las nuevas props**:
   - Modifica `app/page.js`:

   ```jsx
   import Usuario from '../components/Usuario';

   export default function Home() {
     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
         <Usuario nombre="Ana García" edad={25} ciudad="Madrid" />
       </main>
     );
   }
   ```

   **Explicación**:
   - Pasamos tres props: `nombre`, `edad` y `ciudad`.
   - `edad` es un número, mientras que `nombre` y `ciudad` son strings, mostrando la flexibilidad de las props.

3. **Prueba en el navegador**:
   - Verifica que se muestre el nombre, edad y ciudad correctamente.

## Paso 4: Pasar un objeto como prop

1. **Modifica `Usuario` para recibir un objeto**:
   - Actualiza `components/Usuario.jsx` para usar destructuring y recibir un objeto `usuario`:

   ```jsx
   'use client';

   import React from 'react';

   function Usuario({ usuario }) {
     return (
       <div className="bg-gray-100 p-4 m-2 rounded-lg">
         <h2 className="text-xl font-bold">Nombre: {usuario.nombre}</h2>
         <p>Edad: {usuario.edad} años</p>
         <p>Ciudad: {usuario.ciudad}</p>
       </div>
     );
   }

   export default Usuario;
   ```

   **Explicación**:
   - Usamos destructuring (`{ usuario }`) para acceder directamente al objeto `usuario`.
   - Accedemos a las propiedades con `usuario.nombre`, `usuario.edad`, etc.

2. **Actualiza `page.js` para pasar un objeto**:
   - Modifica `app/page.js`:

   ```jsx
   import Usuario from '../components/Usuario';

   export default function Home() {
     const usuario = {
       nombre: 'Ana García',
       edad: 25,
       ciudad: 'Madrid',
     };

     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
         <Usuario usuario={usuario} />
       </main>
     );
   }
   ```

   **Explicación**:
   - Creamos un objeto `usuario` con las propiedades necesarias.
   - Pasamos el objeto completo como una prop llamada `usuario`.

3. **Prueba en el navegador**:
   - El resultado debe ser idéntico al paso anterior, pero usando un objeto.

## Paso 5: Pasar una función como prop

1. **Añade un botón para saludar**:
   - Modifica `components/Usuario.jsx` para incluir un botón que ejecute una función pasada como prop:

   ```jsx
   'use client';

   import React from 'react';

   function Usuario({ usuario, saludar }) {
     return (
       <div className="bg-gray-100 p-4 m-2 rounded-lg">
         <h2 className="text-xl font-bold">Nombre: {usuario.nombre}</h2>
         <p>Edad: {usuario.edad} años</p>
         <p>Ciudad: {usuario.ciudad}</p>
         <button
           className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
           onClick={() => saludar(usuario.nombre)}
         >
           Saludar
         </button>
       </div>
     );
   }

   export default Usuario;
   ```

   **Explicación**:
   - Añadimos una prop `saludar` que será una función.
   - Usamos un botón con `onClick` que ejecuta la función `saludar` pasando el nombre del usuario.
   - `'use client'` es necesario porque el evento `onClick` requiere interactividad del cliente.

2. **Define la función en `page.js`**:
   - Actualiza `app/page.js`:

   ```jsx
   'use client';

   import Usuario from '../components/Usuario';

   export default function Home() {
     const usuario = {
       nombre: 'Ana García',
       edad: 25,
       ciudad: 'Madrid',
     };

     const saludar = (nombre) => {
       alert(`¡Hola, ${nombre}!`);
     };

     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
         <Usuario usuario={usuario} saludar={saludar} />
       </main>
     );
   }
   ```

   **Explicación**:
   - Añadimos `'use client'` a `page.js` porque definimos una función (`saludar`) que usa `alert`, una API del navegador.
   - Pasamos la función `saludar` como prop al componente `Usuario`.

3. **Prueba en el navegador**:
   - Haz clic en el botón "Saludar" y verifica que aparezca un `alert` con el mensaje "¡Hola, Ana García!".

## Paso 6: Mostrar múltiples usuarios

1. **Crea una lista de usuarios**:
   - Modifica `app/page.js` para renderizar múltiples componentes `Usuario` usando un array:

   ```jsx
   'use client';

   import Usuario from '../components/Usuario';

   export default function Home() {
     const usuarios = [
       { nombre: 'Ana García', edad: 25, ciudad: 'Madrid' },
       { nombre: 'Juan Pérez', edad: 30, ciudad: 'Barcelona' },
       { nombre: 'María López', edad: 28, ciudad: 'Valencia' },
     ];

     const saludar = (nombre) => {
       alert(`¡Hola, ${nombre}!`);
     };

     return (
       <main className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
         {usuarios.map((usuario, index) => (
           <Usuario key={index} usuario={usuario} saludar={saludar} />
         ))}
       </main>
     );
   }
   ```

   **Explicación**:
   - Usamos `map` para iterar sobre el array `usuarios` y renderizar un componente `Usuario` por cada elemento.
   - Añadimos la prop `key` para evitar advertencias de React (usamos `index` como clave, aunque en una aplicación real deberías usar un identificador único).

2. **Prueba en el navegador**:
   - Verifica que se muestren tres tarjetas de usuario con sus respectivos datos y botones de saludo.

## Paso 7: Reflexión y buenas prácticas en Next.js

- **Props son de solo lectura**: Al igual que en React, nunca modifiques las props directamente dentro de un componente.
- **Componentes de cliente vs. servidor**: En Next.js, usa `'use client'` para componentes que requieren interactividad (como eventos `onClick`). Los componentes de servidor no pueden usar props para funciones interactivas.
- **Destructuring**: Usar destructuring (`{ usuario, saludar }`) mejora la legibilidad.
- **PropTypes** (opcional): Para validar props, instala `prop-types` con `npm install prop-types` y actualiza `components/Usuario.jsx`:

   ```jsx
   'use client';

   import React from 'react';
   import PropTypes from 'prop-types';

   function Usuario({ usuario, saludar }) {
     return (
       <div className="bg-gray-100 p-4 m-2 rounded-lg">
         <h2 className="text-xl font-bold">Nombre: {usuario.nombre}</h2>
         <p>Edad: {usuario.edad} años</p>
         <p>Ciudad: {usuario.ciudad}</p>
         <button
           className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
           onClick={() => saludar(usuario.nombre)}
         >
           Saludar
         </button>
       </div>
     );
   }

   Usuario.propTypes = {
     usuario: PropTypes.shape({
       nombre: PropTypes.string.isRequired,
       edad: PropTypes.number.isRequired,
       ciudad: PropTypes.string.isRequired,
     }).isRequired,
     saludar: PropTypes.func.isRequired,
   };

   export default Usuario;
   ```

   **Explicación**:
   - `PropTypes` valida que las props tengan el tipo y formato esperados.
   - Si una prop falta o tiene un tipo incorrecto, aparecerá una advertencia en la consola.

- **Optimización en Next.js**:
   - Mantén los componentes de servidor siempre que sea posible para mejorar el rendimiento (por ejemplo, si no necesitas interactividad, elimina `'use client'`).
   - Usa la carpeta `app` para organizar rutas y la carpeta `components` para componentes reutilizables.

