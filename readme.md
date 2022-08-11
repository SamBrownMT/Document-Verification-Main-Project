## Here is a readme file for Dave.

1. Initialised NPM using command npm init
2. Installed Cypress using npm install cypress --save-dev 
3. Installed Express pm install express --save
4. Added some scripts to package.json:
    "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "dev": "nodemon ."
  },
5. Initialised git repository
6. Added a .gitignore file
7. Write an example test in cypress/e2e/spec.cy.js
8. Run the example test using npm run cypress:open
9. Make a app.js file and use the following template https://expressjs.com/en/starter/hello-world.html
10. Make an index.html file that includes sample text
11. Install Nodemon using command npm i nodemon --save-dev
12. Deploy onto CircleCI?!
13. Deploy onto heroku: 
  - terminal command 'heroku create'
  - 'git push heroku main'
  - add (process.env.PORT || to app.js app.listen

### Getting the backend up and running:
- Following https://node-postgres.com/features/connecting and https://www.npmjs.com/package/dotenv
1. Install PostGres - npm install pg
2. Install dotenv (to store environmental variables) - npm install dotenv
3. Create .env file in root folder - touch .env
4. Populate it with the default values inthe tutorial
5. Create dbscripts.js, and add some dotenv stuff (Later binned this)
6. Install heroku postgres (on the website)
7. Update the .env file variables with the info from heroku
8. Make a basic table with postico

### Back to the front end:
1. Noticed that CSS and JS weren't working properly
  - added the use statements for the paths in app.js
  - moved app.js into the main project directory (from scripts)
2. Built summary.html using components from https://design-system.service.gov.uk/styles/layout/#grid-system

### Aaand the back again...
1. Following some cues from here: https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#connecting-postgres-database-node-js
2. Made queries.js and the getusers query
3. app.js - added: 
  - const db = require('./scripts/queries')
  - app.get('/users', db.getUsers)
4. added htmlscript.js and the namefinder function
5. Then we abandoned this approach because we couldn't request stuff from the db and insert it into the page during rendering.

### Template Engines
1. Tried pug and EJS. Not much in it, settled on EJS 
2. npm install ejs
3. Created summary.ejs and added fields for info from db
4. App.js - get (/summary) then had a pool.query before rendering the page. This worked
5. Tidied up by adding summary.js router file

### Heroku
1. To make it work on heroku we needed to change the postgres connection method to include a URI connection string in the environmental variables

### CircleCI
1. Was throwing errors trying to connect to the database
2. Fixed by adding the dotenv environmental variables to Project Settings -> environmental variables







