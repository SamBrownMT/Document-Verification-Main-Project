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
12. Deploy onto CircleCI DETAILS?!
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
5. Create dbscripts.js, and add some dotenv stuff
6. Install heroku postgres (on the website)
7. Update the .env file variables with the info from heroku
8. 