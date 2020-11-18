let ln = 0, l = 0;
let k = prompt('Valor para "x": ');
let n = prompt('Introduce el número de iteraciones: ');

for( i = 1; i <= n; i++){
  l = (Math.pow(k, i) * Math.pow(-1, i + 1))/i;
  ln = l;
  console.log(ln);
}