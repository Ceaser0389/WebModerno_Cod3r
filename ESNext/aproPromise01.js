////// cumprirPromessa , valor 

/*
let a = 1;
console.log(a)

console.log(typeof Promise)

let p = new Promise( function(cumprirPromessa){
    cumprirPromessa(3)
})

console.log(typeof p)

p.then( function(valor){
   console.log(valor)
})



console.log("**************************************************")
console.log("**************************************************")
console.log("**************************************************")

*/

/*

/// exemplo com obj

let b = new Promise( function(cumprirPromessa1){
    cumprirPromessa1({
        x:3,
        y:4
    })
})

//console.log(typeof p1)

b.then( function(val){
   console.log(val.x)
})

console.log("**************************************************")
console.log("**************************************************")
console.log("**************************************************")

*/

const primeiroElemento =  arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()


= new Promise(function (resolve){
resolve(['Ana','Bia','Carlos','Daniel'])
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
//.then(v => console.log(v))
.then(console.log)
