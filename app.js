const express = require("express");

const app = express();

//Conexão com Banco de Dados
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'matt_node@localhost',
    password: 'Attera_6969',
    database: 'node_project'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado', rows);
    } else {
        console.log('Erro ao realizar a consulta')
    }
})


app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req,res){
    res.send("Pagina de contato");
});

app.listen(8081);

 