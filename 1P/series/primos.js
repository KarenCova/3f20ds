//Números primos 
let n1 = 1;
let n2 = 0;
let k = 0;
var x = 10;

while (n1 <= x){
  while (n2 < n1){
    if (n1 % n2 == 0 && n2 != 1 n2 != n1){
    k = 1;
    }
    n2++;
  }
  if (k == 0){
  console.log(n2);
  }
  else{
  k = 0;
  }
  n1++;
  n2 = 0;
}
