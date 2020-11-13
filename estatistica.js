function main() {
    console.log(Media([1, 2, 3, 4, 5, 6]))
    console.log(Median([3, 5, 1, 2, 10, 8]))
    console.log(Mode([1, 3, 3, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5]))
    console.log(StandarDeviation([1, 2, 3, 4, 5, 6]));
}

function Mean(collection){ 
    var sum = 0;
    
    for(var idx in collection){
        sum += Number(collection[idx]);
    }
    
    return parseFloat(sum/collection.length).toFixed(3);
}

function Median(collection){
    //Ordena vetor
    collection.sort((a, b) => a-b);
    
    //captura meio do array arredondando sempre para baixo
    var mid = parseInt(collection.length/2);
    var result = 0;
    
    //verifica se mediana é um valor único ou se necessário calcula
    if(collection.length % 2 == 0){
        result = (collection[mid] + collection[mid-1]) / 2;
    }else{
        result = collection[mid];
    }
    
    return parseFloat(result).toFixed(3);
}

function Mode(collection){
    var priorityQueue = new Array();
    
    for(var i in collection){
        var exist = false;
        for(var j in priorityQueue){
            if(priorityQueue[j].key == collection[i]){
                priorityQueue[j].freq += 1;
                exist = true;
            }   
        }
        if(!exist)
            priorityQueue.push({key: collection[i], freq: 1});   
    }
    
    priorityQueue.sort((a, b)=> b.freq - a.freq);
    
    return priorityQueue[0].key;
}

function StandarDeviation(collection){
    var sum = 0;
    var mean = Mean(collection);
    
    for(var i in collection){
        if(collection[i] != undefined)
            sum += Math.pow((collection[i] - mean), 2);
    }
    
    return parseFloat(Math.sqrt(sum/collection.length)).toFixed(3);
}
