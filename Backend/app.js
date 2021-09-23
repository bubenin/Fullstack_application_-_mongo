const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());

app.use(bodyParser.json());

const uri ="mongodb+srv://Andrey:qwerty123@cluster1.pvqrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
