// estou invertendo as duas var
function rand({min=0,max=1000}){
    if(min > max) [min,max] = [max,min]
    const valor = math.random() * (max - min) +min
    return math.floor(valor)
}

console.log(rand(rand[50,40]))
console.log("----------------------------")
console.log(rand([992]))
console.log("----------------------------")
console.log(rand([,10]))
console.log("----------------------------")
console.log(rand([]))
console.log("----------------------------")
console.log(rand())