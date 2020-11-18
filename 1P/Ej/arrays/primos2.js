let x = 30, k = 2, esP = [];
for (; k < x; k++) {
  if (primo(k)) {
    esP.push(k);
  } 
} 
function primo(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  } return n !== 1;
} console.log(esP);