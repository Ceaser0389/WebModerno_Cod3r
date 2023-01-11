
/**
 * Conceito de escopo
 * var visivel do bloco
 * em js var tem dois escopso possiveis 
 * fugir criar variaveis globais 
 * nivel de escopo global,ou escopo de função 
 * 
 *  */ 

{
    {
        {
            { 
                var sera = 'Será???'
                //console.log(sera)
            }
        }
    }
}
console.log(sera)
console.log('--------------------------------------')

function teste(){
    var local  =123     // escopo apenas dentro da função

}
teste()
console.log(local)

