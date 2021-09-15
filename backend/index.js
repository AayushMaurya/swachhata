const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// app.use(bodyParser.urlencoded({ extended: true }));
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://abhishek:Abhi%40123@cluster0.mq5za.mongodb.net/todolist?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  }
);

// mongodb+srv://abhishek:123@cluster0.8efnq.mongodb.net/social?retryWrites=true&w=majority
const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error in connecting to the database")
);

db.once("open", function () {
  console.log("Connected to the database!");
});

const truckLocSchema=new mongoose.Schema({
    
   lat: Number,
   long: Number,

   
})
const truckLoc = mongoose.model('truckLoc', truckLocSchema);
app.get("/",(req,res)=>{
    truckLoc.find({},(err,obj)=>{
        res.send(obj)
    })
})
app.post("/getDrLoc",(req,res)=>{
    console.log(req.body.getLoc)
    var truck=new truckLoc({
        lat:req.body.getLoc.lat,
        long:req.body.getLoc.long
    })
    truck.remove()
    truck.save()
})
app.listen(port, (err) => {
    if (err) {
      console.log("error in running server", err);
    }
  
    console.log(`server is running on port: ${port}`);
  });