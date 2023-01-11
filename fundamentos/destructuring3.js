
function rand({min=0,max=1000}){
    const valor = math.random() * (max - min) +min
    return math.floor(valor)
}

const obj = {max:50, min:40}
console.log(rand(obj))
console.log("-----------------------------------")
console.log(rand({min:955}))
console.log("-----------------------------------")
console.log(rand({}))
console.log(rand())