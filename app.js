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
 