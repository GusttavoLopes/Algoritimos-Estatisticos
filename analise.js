function main(){
    console.log(Fatorial(5));
    console.log(CombinacaoSimples(8, 5));
    console.log(ArranjoSimples(8, 5));
    console.log(CombinacaoComRepeticao(7, 2));
    console.log(ArranjoComRepeticao(3, 2));
} 

function Fatorial(value){
    var sum = 1;
    for(var i = 0; i < value; i++)
        sum *= (value-i);
    
    return parseFloat(sum).toFixed(3);
}

function CombinacaoSimples(total, parcial){
    var numerador = Fatorial(total);
    var denominador = Fatorial(parcial) * Fatorial(total - parcial);
    
    return parseFloat(numerador / denominador).toFixed(3);
}

function CombinacaoComRepeticao(total, parcial){
    var numerador = Number(Fatorial(total)) + Number(Fatorial(parcial)) + 1;
    var denominador = Fatorial(parcial) * Fatorial(total - parcial);
    
    return parseFloat(numerador / denominador).toFixed(3);
}

function ArranjoSimples(total, parcial){
    var numerador = Fatorial(total);
    var denominador = Fatorial(total - parcial); 
    
    return parseFloat(numerador / denominador).toFixed(3);
}

function ArranjoComRepeticao(total, parcial){
    var sum = total;
    
    for(var i = 0; i < parcial; i++)
        sum *= sum;

    return parseFloat(sum).toFixed(3);
}