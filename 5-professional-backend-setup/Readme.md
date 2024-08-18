# Production ready code (Backend)

### File and folder Structure

- npm init -y

### File and folder Structure

- public/temp/.gitkeep
- .env
- .env.sample
- src ( folder )
  - app.js
  - constants.js
  - index.js

### Make changes in package.json file

- Add `  "type": "module"` in package.json after `"main": "index.js"` this will allow you to write with module import syntax.

- Install nodemon in dev dependencies

- ```cmd
  npm i -D nodemon
  ```

<br>
<hr>

### Add more folders

```cmd
mkdir db controllers models middlewares routes utils
```

- db
- controllers
- models
- middlewares
- routes
- utils

### Install and setup <b> Prettier </b> in dev dependencies

```cmd
npm i -D prettier
```

- Create a file <b>.prettierrc</b> and add code

  ```javascript
  {
      "singleQuote": false,
      "bracketSpacing": true,
      "tabWidth": 2,
      "trailingComma": "es5",
      "semi": true
  }
  ```

- Create a file <b>.prettierignore</b> and add code

  ```text
  /.vscode
  /node_modules
  ./dist


  *.env
  .env
  .env.*
  ```
