
let m = 2, k = 1,p;
function esP(n){
    do{ 
        let x = 0;
        for(let i = 1; i <= m; i++) {
            if(m % i == 0) {
                x++;
            }
        }if(x <= 2) {
            p = m;
            k++;
        } m++
    } while(k <= n)
    return p;
} console.log(esP(7));