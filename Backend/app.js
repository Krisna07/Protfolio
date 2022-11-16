const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser());

const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.API_URL);
    console.log(`MongoDb Connected :${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();
app.use("/api/review", require("./Routes"));

app.listen(port, () => {
  console.log(`server running at port :${port}`);
});
