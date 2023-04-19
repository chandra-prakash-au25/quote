const  express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors= require('cors')
app.use(cors())
const mongoose = require('mongoose');
const quote=require('./model')
const router=require('./routes')

mongoose.connect('mongodb://localhost:27017/Quote').then(()=>{
    console.log("compass connected")
}).catch((err)=>{
    console.log(err)
})


app.use("/api/routes",router)


app.listen(PORT, () => console.log("Server running on port " + PORT));