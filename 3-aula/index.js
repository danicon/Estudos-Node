const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Gerenciado financeiro")
});

app.get("/sobre-empresa", function(req, res) {
    res.send("Página sobre empresa")
})

app.get("/blog", function(req, res) {
    res.send("Página do blog")
})

app.get("/contato", function(req, res) {
    res.send("Página de contato")
})

//localhost:8080
app.listen(8080);