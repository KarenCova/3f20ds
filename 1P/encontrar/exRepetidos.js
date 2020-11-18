let S = [3, 1, 4, 2, 3], r = []
let repetir = {};
S.forEach(function(n){
  repetir[n] = (repetir[n] || 0) + 1;
});
console.log(repetir);
//La complejidad es de n^2
//Consola