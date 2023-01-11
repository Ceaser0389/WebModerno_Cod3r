// let e const 
{
    var a = 2
    let b =3   // let tem escopo de bloco,além de função e global
    console.log(b)
}
console.log(a)
///console.log(b)

console.log('********************************')

// Templete String
const produto = 'IPad'
console.log(`${produto}
 é caro!`)

 console.log('********************************')
 //Descructuring
 //string
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

//array
const [x,y] =[1,2,3]
console.log(x,y)
// objs
const {idade, nome} = { nome:'Ana', idade:9}
console.log(idade,nome)