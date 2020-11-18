let S = [3, 1, 4, 2, 3], 
    sum = 0

function Complejidad(){
    for(i = 0; i < S.length; i++){
        sum += S[i];
    } return sum/S.length;
} console.log('Su promedio es: ', Complejidad());
//La complejidad es de n