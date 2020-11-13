function main() {
    var result = DistribuicaoBinomial(6, 3, (1.09/2.09)) +
                  DistribuicaoBinomial(6, 4, (1.09/2.09)) +
                  DistribuicaoBinomial(6, 5, (1.09/2.09)) +
                  DistribuicaoBinomial(6, 6, (1.09/2.09));
     console.log(result.toFixed(3));
     
     //Exemplo de Distribuicão Geométrica: Um produto tem 1/3 de chance
     //de ser gerado defeituosamente, qual a probabilidade de nas 5 primeiras 
     //inspeções ser encontrado o primeiro produto defeituoso ?
     //Resposta: 0.868
     var result = DistribuicaoGeometrica(1, 1/3) +
                  DistribuicaoGeometrica(2, 1/3) +
                  DistribuicaoGeometrica(3, 1/3) +
                  DistribuicaoGeometrica(4, 1/3) +
                  DistribuicaoGeometrica(5, 1/3);
 
     console.log(result.toFixed(3));
     
     //Uma variavel X segue a distribuição de poisson numa média de 2.5. 
     //Encontre a probabilidade quando a variavel é igual a 5.
     //Resposta: 0.067
     console.log(DistribuicaoPoisson(5, 2.5).toFixed(3));
 }
 
 function Fatorial(value){
     var sum = 1;
     for(var i = 0; i < value; i++)
         sum *= (value-i);
     
     return parseFloat(sum);
 }
 
 function CombinacaoSimples(total, parcial){
     var numerador = Fatorial(total);
     var denominador = Fatorial(parcial) * Fatorial(total - parcial);
     
     return parseFloat(numerador / denominador);
 }
 
 //P(x=k) = Ar * p^k * q^(n-k); sendo k o número de ocorrências esperados, n 
 //o número de elementos do conjunto observado e p a probabilidade do sucesso
 function DistribuicaoBinomial(n, k, p){
     var result = 0;
     var q = (1 - p);
     
     result = CombinacaoSimples(n, k) * Math.pow(p, k) * Math.pow(q, (n-k));
     
     return parseFloat(result);
 }
 
 //Distribuicão geométrica é o número de ocorrências até que ocorra o primeiro sucesso ou primeira falha
 //Função P(x=n) = (1-p)^n-1 * p define a progressão até ocorrer o primeiro sucesso
 //Função P(x=n) = (1-p)^n * p define a progressão até ocorrer a primeira falha
 function DistribuicaoGeometrica(n, p, calc = true){
     var result = 0;
     
     if(calc)
         result = Math.pow((1-p), (n-1)) * p;
     else
         result = Math.pow((1-p), n) * p;
     
     return parseFloat(result);
 }
 
 //Distribuição de Poisson de variavel aleatória, expressa a probabilidade de um evento ocorrer
 //em um determinado espaço de tempo.
 //Função:P(k,y) = y^k * e^-y / k!
 //Onde e é a constante de euler, k é o número de ocorrências do sucesso e y é a média de sucesso
 function DistribuicaoPoisson(k, y){
     var E = 2.71828;
     var result = 0;
     
     result = (Math.pow(y, k) * Math.pow(E, -y)) / Fatorial(k);
     
     return result;
 }