import dotenv from "dotenv";
dotenv.config({path:"config/.env"});

import express from "express";
const app = express();


//cors enabled
import cors from 'cors';
const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true
  };
app.use(cors(corsOptions)); 

app.use(express.json());

//mongoose connection
import connectDatabase from "./config/database.js"
connectDatabase();

import FormRouter from "./Views/form.js";
app.use('/form', FormRouter);

app.listen(process.env.PORT, (req, res, err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ",5000);
    }
})