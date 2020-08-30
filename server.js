const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Express
const app = express();
const port = process.env.PORT || 5000;

// Cors
app.use(cors());
app.use(express.json());

// Connect to Mongoose
const uri = process.env.mongoURI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => console.log(`App is running on port ${port}`));
