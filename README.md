
# Instalation libraries
- express
- mongoose
- mongodb
- typescript
- bcrypt
- jsonwebtoken
- mongodb
- nodemon for development
- dotenv
- cors
- concurrently

# Logger libraries
- winston
- winston-mongodb
- morgan


# TypeScript related libraries and setup

- npm i -g typescript )// globaly install typescript
- npm i typescript -save--dev )// install developement time (dev dependencies)
- tsc -init or npx tsc -init )// create tsconfig.json file
- npm i ts-node )// for running TypeScript code directly without having to wait for it be compiled (--save-dev)
- npm i @types/node @types/express @types/mongoose @types/dotenv @types/jswonwebtoken -save--dev
- typescript watcher:- tsc -w )- continue watches your ts file
- Build a composit project in the working directory:- [tsc -b]
- - Use typescript compiler:- tsc
- - Check typescript version:- tsc -v


# npm i express cors dotenv && npm i -D typescript tsc ts-node-dev @types/express @types/node @types/cors

npm i -D @types/node typescript ts-node nodemon

"scripts": {
"build": "tsc",
"start": "node dist/index",
"watch": "tsc -w",
"dev": "tsc -w && nodemon dist/index"
},

# npm i concurrently
# package.json file using concurrently libraries scripts : {
"build": "tsc",
"start": "node dist/index",
"watch": "tsc -w",
"dev": "concurrently \"tsc -w\" \"nodemon dist/index\""
}

<!-- "dev":"concurrently \"tsc -w\" \"nodemon dist/index\"", -->


# Install TypeScript and Essential Dependencies means dev dependencies

- npm install --save-dev typescript @types/node @types/express
- npm install --save-dev ts-node nodemon

# OR npm i -D typescript @types/node @types/express

# npm i -D @types/express @types/mongoose @types/cors @types/jsonwebtoken @types/mongodb @types/winston @types/morgan
