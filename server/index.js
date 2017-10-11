const express = require("express");
const path = require("path");
const compression = require("compression");
const bodyParser = require("body-parser");

if (process.env.ENV === "test") {
  require("dotenv").config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Compression for performance enhancement
app.use(compression());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

// Enable handling of REST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // API
// // Authentication
// app.post('/auth/login', AttemptLogin);
// app.post('/auth/signup', AttemptSignup);
// // Authentication middleware
// app.use('/api', require('./validation/auth-check'));
// // Postgres DB Routes
// app.get('/api/entries', getEntries);
// app.get('/api/entries/:id', getEntry);
// app.post('/api/entries', createEntry);
// app.put('/api/entries/:id', updateEntry);
// app.delete('/api/entries/:id', removeEntry);

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
