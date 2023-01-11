// JSON foramato textual

 // covert String p Json
const obj = {a:1,b:2,c:3,soma() {return a+ b+c}}  // converte p formato txtual
console.log(JSON.stringify(obj))
console.log('*******************')

 // Json p string
//console.log(JSON.parse('{a:1,b:2,c:3}'))
///console.log(JSON.parse("{'a':1,'b':2,'c':3}")) errado

console.log(JSON.parse('{ "a" :1, "b" :2, "C":3  }'))
console.log('*******************')

console.log(JSON.parse(`{"a":1
                        ,"b": "String"
                        , "C": true
                        , "d":{} 
                        , "e": [] }`))
