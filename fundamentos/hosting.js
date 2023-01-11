/**
 * isada, ou seja jogada pra cima
 * hoisting só para conhecer,mas não deve ser usado, pois da efeitos estranhos
 * Hosting is jas default behavieor of moving declaration to the top
 */
// var = a depois a = 2

console.log(a);
var a = 2;
console.log('a=',a)

// com let não da certo o efeito isamento
//let b = 2;
//console.log('b=',b)