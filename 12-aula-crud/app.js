const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const pagamento = require("./models/Pagamento")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res) {
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor)
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        //res.send("Pagamento realizado com sucesso!")
        res.redirect("/pagamento")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi realizado com sucesso! " + erro)
    })
})

app.listen(8080);