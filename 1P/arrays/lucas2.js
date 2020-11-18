let n1 = 2, n2 = 1, r = [];
r[0] = n1;
r[1] = n2;
    for(let i = 2; i < 10; i++){
        r[i] = n1 + n2;
        n1 = n2;
        n2 = r[i];
    } 
    console.log(r);