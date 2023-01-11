/**
 * bloco de codigo nomeado , e vc pode chamr ele quantas vezes vc quiser , recebe parametros de entrada e no final retorna um valor 
 */


// funcao sem retorno 
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2,10,4,5,6,7,8)
console.log("*************************************")

//Funcao com retorno
function soma(a,b=0){
    return a+b
}
console.log(soma(2,3))