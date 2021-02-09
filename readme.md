## Boiler Plate Notes

CLONE COMMAND: `npx degit aria414/mern-boilerplate#master`

Create backend folder. Then create frontend folder with react

Frontend install:

```
npx create-react-app@latest frontend
npm install react-router react-router-dom

```

Backend install:

```
npm init -y
npm install express nodemon cors morgan mongoose dotenv cross-env
mkdir models controllers db

```

- Make .keep files and put them into models, controllers and db folder
- Make server.js file and insert base code imports.
- Make connection.js file and isnert base code imports
- created the seed.js and reset.js in the DB folder
- Add scripts in package.json to run seed files

- Go to frontend and index.js file to put router code.
