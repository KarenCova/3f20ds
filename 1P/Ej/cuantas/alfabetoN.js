let x = 5, n = 10, c = 0, i;

if(x > n){
    console.log('No se puede calcular');
}
else{
    c = calculo(n)/calculo(n - x);
    console.log(c);
    
    function calculo(n){
        let f = 1;
        for(i = 1; i <= n; i++){
              f = i * f;
        }
        return f;
    }
}