lucas=[1,3];
let lim = 9;    
    secLucas(2);
        console.log (lucas);

function secLucas(n){ 
        if (n <= lim) { 
                lucas[n]=lucas[n-1]+lucas[n-2];
                secLucas(n+1);
        }
    }