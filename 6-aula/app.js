//Conexão com BD MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'danielone',
    password : 'admin',
    database : 'celke'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM users', function(err, rows, fields) {
    if(!err) {
        console.log("Resultado: ", rows)
    } else {
        console.log("Erro ao realizar a consulta")
    }
})


