const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected ");
});

const disasterRouter = require("./routes/disaster");
const causalityRouter = require("./routes/causality");
const secretaryRouter = require("./routes/secretary");
app.use("/disaster", disasterRouter);
app.use("/causality", causalityRouter);
app.use("/secretary", secretaryRouter);

app.listen(port, () => {
  console.log("Server is running at port 5000");
});
