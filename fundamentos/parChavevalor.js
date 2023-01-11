// par nome/valor
const saudação = ' Opa' // contexto léxico 1 

function exec(){
    const saudacao = ' falaa' // contexto lexico 2 
    return saudacao;
}

// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua muito legal',
        numero:123
    }
}

console.log(saudação);
console.log(exec());
console.log(cliente)
