let x = prompt('Introduce valor:'), sen; 
    for (let i = 1; i <= x; i++){
        sen = i - ((Math.pow(i,3))/(3*2*1));
        console.log(sen);
}