let x = prompt('Cantidad'), n = prompt(' Valor Máximo'),r = 0;
    for (let k = 1; k <= x; k++){
        r = Math.floor(Math.random() * n + 1);
        console.log(r);
}
