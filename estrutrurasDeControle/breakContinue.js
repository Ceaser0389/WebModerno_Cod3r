const nums = [1,2,3,4,5,6,7,8,9,10]
// break sai fora do laço corrente 
for(x in nums) {
    if(x == 5){
        break
    }
    console.log(` ${x} = ${nums[x]}`)
}

console.log('*************************')
// interrope a repetição corrente e vai pra proxima repetição 
for(x in nums) {
    if(x == 5){
        continue
    }
    console.log(` ${x} = ${nums[x]}`)
}

console.log('*************************')

// nome: rotulo

externo: for( a in nums) {
    for(b in nums){
        if( a== 2 && b == 3 ) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log("Fim!")