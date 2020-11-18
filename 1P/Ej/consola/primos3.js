let i = 1, p = 2, esP = 1;
let n = prompt('Cantidad de númetos primos:')
while (i <= n){
    let m = Math.round(p / 2);
    while (m >= 2 && esP == 1){
        if (p % m == 0){
            esP = 0;    
        }
        m--;    
    }
    if(esP == 1){
        console.log(p);
        i++;
    } 
    p += 1;
    esP = 1;
}