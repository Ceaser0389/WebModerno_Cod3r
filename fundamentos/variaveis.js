                        /*** importante saber nomear(dar nome significativo p variaveis)
                         * não posso redeclarar uma variavel com let   
                         * var deixa vc redeclarar dentro de um escopo
                         * constnate não deixar alterar
                         *  */
var a = 3;
let b = 4;

var a = 30;
//b = 40  //erro n deixa redeclarar

console.log(a,b)

a = 300
b = 400
console.log(a,b)

const  c = 5
 // c = 50; 
console.log(c)