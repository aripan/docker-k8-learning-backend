const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection
// Initialize DB
require("./db")();

// Use the routes defined in routes.js
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});