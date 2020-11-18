let S = [3, 1, 4, 2, 3], 
    max = S[0];
function maximo(){
    for(i = 0; i < S.length; i++){
        if(max < S[i]){
            max = S[i];
        }else{
          continue;
        } 
    }return max;
} console.log('El máximo valor es: ', maximo());
//La complejidad es de n