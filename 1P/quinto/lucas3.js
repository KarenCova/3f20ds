let n1 = 2,n2 = 1,n3= 0, i;
function lucas(n){
      if(n == 1){
        return n1;
    } if(n == 2){
        return n2;
    } else{
        for(i = 1; i<= n - 2; i++){
            n3 = n1 + n2
            n1 = n2
            n2 = n3
        }
    } return n3
} console.log(lucas(7));