let r, n1 = 1, n2 = 2;
for (let i = 1; i <= 10; i++){
    r = n1; 
    console.log(r);
    n1 = n1 + n2; 
    n2 = r;
}
