// Serie de Fibonacci
function fibonacci(num){
      let a = 1, b = [0,1], guardar;
  while (num >= 0){
      guardar = a;
      a = a + b[num];
      num--;
  }
  return b;
}
console.log(fibonacci(10));
