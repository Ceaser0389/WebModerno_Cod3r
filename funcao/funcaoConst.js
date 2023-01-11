
function Carro( velocidadeMaxima=200, delta =5){
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeatual + delta <= velocidadeMaxima){
            velocidadeatual += delta;
        }
        else{
            velocidadeatual = velocidadeMaxima
        }
    }
    // metodo publico
     this.getVelocidaeAtual = function(){
        return velocidadeatual
     }
}

const uno  = new Carro
uno.acelerar()
console.log(uno.getVelocidaeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidaeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)