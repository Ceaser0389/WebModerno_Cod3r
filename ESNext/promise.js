/// para um processamento assincrono

function falarDespoisDe(segundos,frase){
     return new Promise(( resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
     })
}

falarDespoisDe(3, 'Que legal!')
.then((frase) => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console(e))