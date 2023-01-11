function teste1(num){
    if(num >7){
        console.log(num)
    }
    console.log('final')
}

teste1(6)
teste1(8)

console.log('****************************')
function teste2(num){
    if(num >7)
      ;              /// cuidado com ';' , não usar com as estruturaas de controle
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
