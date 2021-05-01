// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// use PORT 3000
const PORT = 3000;

// initialize express
const app = express();

// use logger (morgan)
app.use(logger("dev"));

// use compression / express
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static files from public folder
app.use(express.static("public"));

// mongoose connection uses MONGODB_URI or localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// app routes
app.use(require("./routes/api.js"));

// listening at PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});