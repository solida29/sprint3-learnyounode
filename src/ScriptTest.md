# Scripts de NPM

A medida que trabajamos con nuestro proyecto, es muy habitual crear comandos para automatizar tareas. NPM proporciona un sistema denominado scripts de NPM, que es algo así como una colección de tareas de línea de comandos. Los que provienen de desarrollos más tradicionales como C o C++, puede que vean un símil con los scripts de tipo Makefile.

La idea es incorporar en el fichero package.json, una colección de scripts que pueden ser abreviados con un nombre de tarea y ejecutados desde una la carpeta raíz del proyecto escribiendo npm run <tarea>.

# Estructura de los scripts

## Tarea > Comando > Descripción

- start > npm run start
  Se suele usar para tareas de inicio del proyecto. Se puede arrancar con npm start.

- dev > npm run dev
  Alternativa al anterior, se suele usar para levantar servidores de desarrollo locales.

- serve > npm run serve
  Idem al anterior.

- build > npm run build
  Tarea que construye los ficheros finales para subir a la web de producción.

- test > npm run test
  Suele iniciar una batería de tests. Se puede arrancar con npm test o npm t.

- deploy > npm run deploy
  Suele desplegar en la web de producción la webapp construída con build.
