const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://abhishek:123@cluster0.8efnq.mongodb.net/social?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  }
);
const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error in connecting to the database")
);

db.once("open", function () {
  console.log("Connected to the database!");
});
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port, (err) => {
    if (err) {
      console.log("error in running server", err);
    }
  
    console.log(`server is running on port: ${port}`);
  });