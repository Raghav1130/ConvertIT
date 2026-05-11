const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const convertRoute = require("./routes/convert");
app.use("/convert", convertRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});