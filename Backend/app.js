const dotenv=require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');  
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');


const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
app.use(cookieParser());

const connectDB=require('./db/db');
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);


app.get('/',(req,res)=>{
    res.send('hello world');
})

module.exports=app;