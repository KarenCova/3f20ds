let k = function(n){
    if (n == 1){
        return 0;
    }
    if (n == 2){
        return 1;
    }
    return k(n - 1) + k(n-2);
}; console.log(n(8));