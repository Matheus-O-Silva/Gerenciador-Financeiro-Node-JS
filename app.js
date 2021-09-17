const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/ src/index.html");
});

app.get("/contato", function(req,res){
    res.send("Pagina de contato");
});

app.listen(8081);

 