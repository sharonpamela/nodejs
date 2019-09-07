# Basic App

* Description: Basic app demonstrating Node and Express. 

* This application will be made up of two parts: 
- A front-end set of HTML/CSS/JS pages for entering and viewing data and 
- A back-end composed of Node/Express and basic JS for storing, updating, and relaying data.


## Notes

* npm init -y: creates the package.json file that contains the config dependencies for the app
* npm install [name of package]: installs the packages needed for the app
* npm start to start the server

### Steps to Deploy with heroku

1. Log in to Heroku.
   * If you are a windows user open the cmd.exe (NOT Git Bash) and type `heroku login`. Keep this command prompt open in the background. Then, open Git Bash and navigate to the folder with your code.

   * If you are a mac open terminal and type the command `heroku login`. Enter your Heroku credentials and proceed with all the below steps in terminal. Navigate to the folder with your code.

2. Run the command: `git remote –v` .

3. Run the command `heroku create`.
   * This will create an app instance on the Heroku server and will add heroku as a remote for your local git repository.

4. Ensure that your `package.json` file is set up correctly. It must have a `start` script and all the project's dependencies defined. E.g.:
   ```json
   {
     "name": "exampleapp",
     "version": "1.0.0",
     "description": "Give an example",
     "main": "server.js",
     "dependencies": {
        "express": "^4.16.3"
     },
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

5. Ensure the web server is starting with a dynamic port.
   * For an express app, the code for this would look like:

   ```js
   var PORT = process.env.PORT || 3000;
   ...
   app.listen(PORT, function() {
   ```

   * This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.

6. Ensure that you have at least one HTML page being served at the "/" route. 
```js
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
```

7. Make sure that the application actually works locally.

9. `git commit -am "<message>"`

10. `git push heroku master`. A series of processes will be initiated. Once the process is complete note the name of the app.

11. Log in to your Heroku account at www.heroku.com . You will see a list or a (single) app. Click on the app with the same name as shown in bash when created.

12. Click on settings. Then, scroll down until you see the part that says: "Domains". Note the URL listed under Heroku Domain.

13. got to the URL given by Heroku to see the website (assuming all went well).

14. If the Heroku app fails to deploy, run the following in your command-line and troubleshoot from there:
  ```
  heroku logs
  ```
