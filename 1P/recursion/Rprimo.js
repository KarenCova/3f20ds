function esP(n)
{
    let p = (n + " es un número primo");
    if(n<2){
        p = "No es primo";
    }
    else {
        for(let x = 2; x * x <= n; x++){
            if( n % x == 0 ){
                p = false;
                break;
            }
        }
    } return p;
} console.log(esP(3));