let S = [3, 1, 4, 2, 3], 
    min = S[0];
function minimo(){
    for(i = 0; i < S.length; i++){
        if(min > S[i]){
            min = S[i];
        }else{
          continue;
        }
    } return min;
} console.log('El valor mínimo es: ', minimo());
//La complejidad es de n