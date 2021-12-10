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

connection.query("UPDATE users SET nome = 'Daniel' WHERE id = 1 ", function(err, result) {
    if(!err) {
        console.log("usuario editado com sucesso.")
    } else {
        console.log("Erro: O usuario não editado com sucesso.")
    }
})

