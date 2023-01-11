
function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const ComprarTv50 = trabalho1 && trabalho2
  // const ComprarTv32 = !!!(trabalho1 ^ trabalho2) //bitwise xor
        const comprar32 = trabalho1 != trabalho2
    const manterSaudadevel = !comprarSorvete // operador unário


    return{comprarSorvete, ComprarTv50,comprar32,manterSaudadevel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))