const express = require('express');
const app = express();

app.get('/',(request,response)=>{
    response.send("Welcome to my Application...");
})

app.listen(4000,'0.0.0.0',()=>{

});