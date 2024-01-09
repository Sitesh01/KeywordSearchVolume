const express = require("express");
const dotenv = require("dotenv");

//Configuring dotenv file
dotenv.config();

//Creating express object
const app = express();

const port = process.env.PORT || 8000;

app.use("/", require("./route/searchRoute"));

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
