function Factorial(n){
    let factorial = 1;
    if(n == 0){
        return 1;
    } else{
        for(let i = 1; i<= n; i++){
            factorial = factorial * i;
        }
        return factorial;
    }
} console.log(Factorial(7));