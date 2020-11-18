let n = 0, n1 = 1;
var x = []
x [0] = n;
x [1] = n1;
    for(let i = 2; i <= 9; i++){
        x [i] = n + n1;
        n = n1;
        n1 = x [i];
    }
    console.log(x);