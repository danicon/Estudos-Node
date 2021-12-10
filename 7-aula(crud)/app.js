//Conexão com BD MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'danielone',
    password : 'admin',
    database : 'celke'
});

connection.connect(function(err) {
    if(err) console.error('Erro ao realizara conexão com BD: ' + err.stack); return;
});

connection.query("INSERT INTO users (nome, email) VALUES ('Jessica', 'Jessica@daniel.com.br')", function(err, result){
    if(!err) {
        console.log("Usuario cadstrado com sucesso.")
    } else {
        console.log("Erro ao cadastrar usuario.")
    }
})

