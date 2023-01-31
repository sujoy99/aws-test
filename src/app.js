const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
  
const app = express();

const PORT = normalizePort(process.env.APPLICATION_PORT || "3000");

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

function normalizePort(val){
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return 0;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return 0;
  };
