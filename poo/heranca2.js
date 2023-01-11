// cadeia de rotótipos (prototype chain)
Object.prototype.atrr0 = '0'    // não faça isso em casa!

const avo = {atrr1: 'A'}
const pai = {__proto__:avo, atrr2: 'B', atrr:'3'}
const filho = {__proto__:pai,atrr3: 'C'}

console.log(filho.atrr0, filho.atrr1, filho.atrr2,filho.atrr3)

console.log('********************************************')

 const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax ){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    } 

 }

 const ferrari = {
     modelo:'f40',
     velMax: 324  // shadowing

 }

 const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo} : ${super.status()}`
    }
 }

Object.setPrototypeOf(ferrari,carro)   // estabelece a relação de prot entre objs 
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.logi(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status)
