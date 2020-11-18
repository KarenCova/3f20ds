let x = [0];
for (let i = 1; i <= 10; i++){
    x[i] = (2*i)- 1;
}
x.shift();
console.log(x);