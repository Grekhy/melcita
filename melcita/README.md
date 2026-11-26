# Para mi Melcita

Sitio de cartas y escritos. Funciona sin internet: las tipografías, los estilos y la música están guardados en la misma carpeta.

## Cómo abrirlo

Hacé doble clic en `index.html`.

## Cómo compartirlo

Enviá **la carpeta completa** (o un ZIP con todo), no solo `index.html`. Si mandás únicamente el HTML, va a abrirse sin estilos, sin tipografías y sin música.

## Estructura

```
melcita/
├─ index.html                 Página principal
├─ README.md                  Esta guía
└─ assets/
   ├─ css/
   │  └─ styles.css           Todos los estilos
   ├─ js/
   │  └─ app.js               Textos (CONFIG) y funcionamiento
   ├─ fonts/
   │  ├─ fonts.css            Declaración de las tipografías locales
   │  ├─ caveat-latin.woff2
   │  ├─ fraunces-latin.woff2
   │  ├─ fraunces-italic-latin.woff2
   │  └─ karla-latin.woff2
   └─ audio/
      └─ melody.wav           Melodía suave en loop
```

## Dónde editar

- **Textos, cartas y escritos:** `assets/js/app.js`, dentro del bloque `CONFIG` que está al principio.
- **Colores y diseño:** `assets/css/styles.css`, dentro de `:root`.
- **Música:** reemplazá `assets/audio/melody.wav` por otro archivo con el mismo nombre. Para que el loop quede prolijo, conviene que el audio empiece y termine en silencio.

## La música

Arranca sola si el navegador lo permite. Si lo bloquea, empieza con el primer clic o tecla. El botón de música de la barra superior (el ícono de nota) la activa o desactiva, y el navegador recuerda esa elección.

## Notas

- No hace falta servidor: funciona abriendo el archivo directamente.
- Si cambiás los textos, guardá el archivo y recargá la página con `Ctrl + F5`.
