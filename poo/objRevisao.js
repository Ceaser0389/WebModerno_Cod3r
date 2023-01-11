//coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

console.log('*************************')

const carro = {
    modelo: 'A4',
    nome: 'Raul',
    idade: 56,
    endereco:{
        logradouro: 'Rua ABC',
        numero:123
    },
    condutores: [{
        nome:'junior',
        idade:19
    }, {
        nome:'Ana',
        idade:42
    }],
    calcularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero =1000
carro['proprietario']['endereco']['endereco'] = 'av Gigante'  // n sabe os atribuitos do obj
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)





