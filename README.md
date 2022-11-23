# Git Hub Topic's 1.0.0

# Repositorio Web de Git Hub Topic's

Busca los repositorios más valorados por la comunidad de GitHub de acuerdo a algún topic

### Especificaciones técnicas / Referencias

- Documentación oficial `https://vuetifyjs.com/` `https://vuejs.org/ `

#### Requerimientos previos:

- NodeJS
- Npm o Yarn
- Vue CLI `https://cli.vuejs.org/`

#### Branch

- main -> Production `https://voluble-brioche-893a77.netlify.app/`

#### Comandos para desplegar funciones.

| °   | Comando         | Descripción                                   | Notas |
| --- | --------------- | --------------------------------------------- | ----- |
| 1   | `npm run serve` | Contrucción de la aplicación para desarrollo  |
| 2   | `npm run build` | Construcción de la aplicación para producción |
| 3   | `npm run lint`  | Linters y arreglar archivos                   |

### Folder Structure

```
├──public
|   ├──favicon.ico
|   └──index.html
├──src:
|   ├──assets:
|   │   ├── ...
|   ├──components:
|   │   ├── ...
|   ├──containers:
|   │   ├── ...
|   ├──graphql:
|   │   ├── ...
|   ├──plugins:
|   │   ├── ...
|   ├──repositories:
|   │   ├── ...
|   ├──types:
|   │   ├── ...
|   ├──App.vue
|   ├──main.ts
|   ├──shims-tsx.d.ts
|   ├──shims-vue.d.ts
|   └──shims-vuetify.d.ts
├──browserslistrc
├──env.production
├──.eslintignore
├──.eslintrc.js
├──.gitignore
├──.prettierignore
├──.prettierrc.js
├──babel.config.js
├──package.json
├──README.md
├──tsconfig.js
└──vue.config.js
```

### Notas

- La aplicación fue creada por medio de vue cli.
- Utilicé el patron contenedor componente, donde el contenedor son archivos que llaman a API's, tienen acceso a repositorios, store, etc. Y los componentes son controles más ligeros y simples sin tanta responsabilidad.
- Para usarlo en local, se debe crear un archivo .env.development copiando lo que hay dentro de .env.producction y agregando una variable de entorno llamada: VUE_APP_TOKEN con el valor del token deseado.
- Paquetes y dependecias utilizadas para la elaboración:

| °   | Paquete                            | Versión    |
| --- | ---------------------------------- | ---------- |
| 1   | `apexcharts`                       | `"^3.27.3` |
| 2   | `core-js`                          | `^3.6.5`   |
| 3   | `vue`                              | `^2.6.11`  |
| 4   | `vue-apexcharts`                   | `^1.6.2`   |
| 5   | `vuetifye`                         | `^2.4.0`   |
| 6   | `@typescript-eslint/eslint-plugin` | `^4.18.0`  |
| 7   | `@typescript-eslint/parser`        | `^4.18.0`  |
| 8   | `@vue/cli-plugin-babel`            | `~4.5.`    |
| 9   | `@vue/cli-plugin-eslint`           | `~4.5.0`   |
| 10  | `@vue/cli-plugin-typescript`       | `~4.5.0`   |
| 11  | `@vue/cli-service`                 | `~4.5.0`   |
| 12  | `@vue/eslint-config-prettier`      | `^6.0.0`   |
| 13  | `@vue/eslint-config-typescript`    | `^7.0.0`   |
| 14  | `eslint`                           | `^6.7.2`   |
| 15  | `eslint-plugin-prettier`           | `^3.3.1`   |
| 16  | `eslint-plugin-vue`                | `^6.2.2`   |
| 17  | `lint-staged`                      | `^9.5.0`   |
| 18  | `prettier`                         | `^2.2.1`   |
| 19  | `sass`                             | `^1.32.0`  |
| 19  | `sass-loader`                      | `^10.0.0`  |
| 20  | `typescript`                       | `~4.1.5`   |
| 21  | `vue-cli-plugin-vuetify`           | `~2.4.0`   |
| 22  | `vue-template-compiler`            | `^2.6.11`  |
| 23  | `vuetify-loader`                   | `^1.7.0`   |

#### Environment

- Path Develop: `https://api.github.com/graphql`
- Path Production: `https://api.github.com/graphql`
