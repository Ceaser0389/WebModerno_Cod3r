
let comparaComThis = function (param){
    console.log(this == param)
}

comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('**********')
 let comparaComThisArrow = param => console.log(this== param)
 comparaComThisArrow(global)
 comparaComThisArrow(module.exports)

 console.log('**********')
 comparaComThisArrow = comparaComThisArrow.bing(obj)
 comparaComThisArrow(module.exports)
