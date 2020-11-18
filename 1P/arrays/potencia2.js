let n = 10, potencia = [], x = 3, p = 1; 
for (let i = 0; i < n; i++)
{
    let r = Math.pow(x, p);
    potencia[i] = r;
    p += 1;
} console.log(potencia);