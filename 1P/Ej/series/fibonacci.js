// Serie de Fibonacci
let n1 = 0, n2 = 1, s;

for (let i = 1; i <= 10; i++){
    s = n1;
    console.log(s);
    n1 = n1 + n2;
    n2 = s;
}