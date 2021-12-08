console.log("gerenciador Financeiro")

var client = "Daniel"

console.log("Cliente: " + client)

var valProd = 100;
var valDesc = 37;

var discontFunc = require("./modules/calDisc");

var finalVal = discontFunc(valProd, valDesc);

console.log('Valor final R$' + finalVal)