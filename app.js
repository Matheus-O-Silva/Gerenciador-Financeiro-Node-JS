const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_new', 'mattnode', 'Attera_6969', {
    host: 'localhost',
    dialect: 'mysql',
  
});

sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao conectar com DB' + err);
});

/*

//Conexao com BD MySQL
const mysql = require('mysql');

//A partir do MySQL 8 apresenta o erro ao utilizar o usuário root para conexão, necessário criar novo usuário (instrução no Readme)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mattnode',
    password: 'Attera_6969',
    database: 'node_new'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
});

connection.connect(function(err){
    if(err) console.error('Erro ao realizar a conexão com DB:' + err.strack); return;
});
 
connection.query("INSERT INTO users (nome, email) VALUES ('Kelly','kelly@celerus.com')",
 function(err,result){
    if(!err){
        console.log('Usuário cadastrado com sucesso');
    } else {
        console.log('Erro ao cadastrar usuário');
    }
});

*/