function potenciaRecursiva(a, b){
    if (b == 0)
        return 1; 
    else 
        return a * potenciaRecursiva(a, b-1);
} console.log(potenciaRecursiva(3, 3));