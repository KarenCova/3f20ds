let n1 = 1, n2 = 0, n3 = 0, i;
    function fibonacci(n){
          if(n == 1){
            return n2
        } if(n == 2){
            return n1
        } else{
            for(i = 0; i <= n - 2; i++){
                n3 = n1 + n2
                n1 = n2
                n2 = n3
            }
        } return n3
    } console.log(fibonacci(7));