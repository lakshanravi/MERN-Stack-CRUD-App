//pass = cVlvxV6y16fRTwVu

const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/userRoutes");
const cors = require('cors');


//express() function initializes an Express application that can handle requests and responses.
const app = express();

//it Allows You to Define Routes & Middleware




//middlware creation


//postman eken input krn data, json ekt responsive wen widiht hdnw
app.use(express.json());//mek udin oni

app.use(cors());

//app.use() method applies middleware for all HTTP methods (GET, POST, PUT, DELETE, etc.).
app.use("/users", router);

//db connection

mongoose.connect("mongodb+srv://lakshanravindu375:cVlvxV6y16fRTwVu@cluster0.2gmbcq1.mongodb.net/").then(()=>console.log("connected to MongoDB"))
.then(()=>{
  app.listen(5000);
})
.catch((err)=>console.log(err));