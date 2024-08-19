# Production ready code (Backend)

### Node project initialization

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

### Add more folders in src

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

### Update .env file

```.env

PORT=3000
MONGODB_URI=mongodb+srv://<user_name>:<password>@cluster0.8vg7y.mongodb.net
 -> remove "/"from the end
```

### Update files inside src folder

```JavaScript
// constants.js

export const DB_NAME = "database_name";
```

### Install Packages

```cmd
npm i mongoose dotenv express
```

<br>

## Write code for connecting DB

```javascript
// db->index.js->

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error :", error);
    process.exit(1);
  }
};

export default connectDB;
```

### Configure dotenv

- src/index.js file

  ```javascript
  import dotenv from "dotenv";
  import connectDB from "../db/index.js";

  dotenv.config({
    path: "./env",
  });
  connectDB();
  ```

- update package.json file
  ```javascript
    "scripts": {
      "dev": "nodemon -r dotenv/config --experimental-json-modules  src/index.js"
    },
  ```
