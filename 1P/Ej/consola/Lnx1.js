let ln = 0, k = 0;
let n = prompt('Introduce el tamaño: ')
  for(let i = 1; i <= n; i++){
    k = Math.pow(-1, i +1)/i;
    ln = k;
    console.log(k);
  }