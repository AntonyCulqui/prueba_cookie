import express from "express";
import cookieParser from "cookie-parser";

const app =  express();

app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(3001, () => { 
    console.log("Running on port", '3001');
    console.log("Environment", "dev");
});
