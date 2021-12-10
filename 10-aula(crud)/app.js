const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'danielone', 'admin', {
    host : 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('Conexão realizada com sucesso.')
}).catch(function(err) {
    console.log("Erro ao realizar a conexão com BD: " + err)
})

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

// criar tabela com sequileze
//Pagamento.sync({force: true})

Pagamento.create({
    nome: 'Energia',
    valor: 220
})