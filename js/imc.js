function calcularImc(peso, altura){
    //validações
    if(peso <=0){ 
        throw new Error('O peso deve ser maior que zero')}
    if(peso > 300){
        throw new Error('O peso deve ser menor que 300kg')}
    if(altura <=0){
        throw new Error('A altura deve ser maior que zero')}    
    if(altura >2.50){
        throw new Error('A altura deve ser menor que 2.50m')
    }
    //faremos o cálculo
    const imc = peso / (altura * altura)
    //retornamos o cálculo
    return imc
}

//const resultado = calcularImc(80,1.70)
//console.log(`O IMC é ${resultado}`) //string literal