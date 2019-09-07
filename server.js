// ==============================================================================
// DEPENDENCIES
// Series of npm packages to give the server useful functionality
// ==============================================================================

var express = require("express");

// fs is a core Node package for reading and writing files
var fs = require("fs");

// ==============================================================================
// READING AND WRITING DATA FROM EXTERNAL FILES OR ARGUMENTS IF NEEDED
// Set up the basic properties for the express server
// ==============================================================================

// ################ READ FROM A FILE #######################
// This block of code will read from the "data.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
// fs.readFile("data.txt", "utf8", function (error, data) {
//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//         return console.log(error);
//     }
//     // We will then print the contents of data
//     console.log(data);
// });

// ################ WRITE TO A FILE #######################
// This block of code will create a file called "data.txt".
// It will then print "Example sentence." in the file
// fs.writeFile("data.txt", "Example sentence.", function (err) {
//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//         return console.log(err);
//     }
// });

// ################ GET INFO FROM PARAMETERS/ARGUMENTS ##############
// Take two arguments.
// Example run: app.js arg1 arg2
// var action = process.argv[2];
// var value = process.argv[3];


// ==============================================================================
// EXPRESS CONFIGURATION
// Set up the basic properties for the express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// Point the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code "starts" the server
// =============================================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
