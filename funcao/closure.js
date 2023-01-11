// closure é o escopo criado qaundo uma função é declarada
// esse escopo permite a função acessar e manipularr variáveis externas á função

//Contexto léxico em ação!

const x ='Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console(minhaFuncao())
