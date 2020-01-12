const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
// heroku config:set MONGOLAB_URI=mongodb://googlebooks:qMPBJsE!9t6Ddnz@ds031741.mlab.com:31741/heroku_p595vcpv/googlebooks


heroku config:set MONGOLAB_URI=mongodb://googlebooks:qMPBJsE!9t6Ddnz@ds031741.mlab.com:31741/heroku_p595vcpv
// mongodb://<dbuser>:<dbpassword>@ds031741.mlab.com:31741/heroku_p595vcpv   ssssss  "mongodb://googlebooks:qMPBJsE!9t6Ddnz@ds031741.mlab.com:31741/heroku_p595vcpv/googlebooks"
