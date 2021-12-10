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

connection.query("DELETE FROM users WHERE id = 3 ", function(err, result) {
    if(!err) {
        console.log("Usuario apagado com sucesso.")
    } else {
        console.log("Erro: O usuario não foi apagado com sucesso.")
    }
})

