let x = prompt('Introduce el valor de la serie a calcular:'), serie = 0;
    for (let i = 1; i<= x; i++){
        serie += (1/i);
        console.log(serie);
    }