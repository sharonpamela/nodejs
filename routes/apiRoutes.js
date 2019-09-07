// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information
// ===============================================================================

var exampleData = require("../data/exampleData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data available)
  // ---------------------------------------------------------------------------

  app.get("/api/read", function(req, res) {
    res.json(exampleData);
    console.log(exampleData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a the form... this data is then sent to the server...
  // Then the server saves the data to the exampleData array)
  // ---------------------------------------------------------------------------

  app.post("/api/write", function(req, res) {
    // the server responds to requests and let users know if their info was received or not.
    // It will do this by sending out the value "true"
    // req.body is available since we're using the body parsing middleware
    if (exampleData.length < 5) {
      exampleData.push(req.body);
      res.json(true);
    }
    else {
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // code to clear out the user input while testing

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    exampleData.length = 0;
    res.json({ ok: true });
  });
};
