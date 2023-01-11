 // Armazenando uma funcao em uma variavel
 const imprimirSoma = function (a,b){
    console.log(a,b)
 }
 imprimirSoma(2,3);

 //Armazenando uma funcao arrow em uma variavel
 const soma =(a,b) =>{
   return a+b
 }

 console.log(soma(2,3))

 // retorno implícito ,o resultado deste estilo será sempre retornado 
                //param + arrow + valores
 const subtracao = (a,b) => a-b; 
 console.log(2,3)

 const imprimir2 = a => console.log(a)
 imprimir2('legal!!!')