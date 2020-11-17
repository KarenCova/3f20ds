function imparesRecursion(i, n){
    if (n > 0){
        console.log((2*i)-1)
        imparesRecursion(i + 1, n - 1);
    }
} imparesRecursion(1, 10);
// n = camtidad de números impares a imprimir (ej, 10)