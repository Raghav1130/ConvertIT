const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit")
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20
})

require("dotenv").config();


app.use(limiter)
app.use(cors());
app.use(express.json());

const convertRoute = require("./routes/convert");
app.use("/convert", convertRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});