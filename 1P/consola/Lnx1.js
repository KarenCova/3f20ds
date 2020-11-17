let ln = process.openStdin();
  console.log("Introduce el tamaño de la serie:")
ln.addListener("data",function (n){
    Ln(n)  
    process.exit();
  }) 
  function Ln(x) {
      if (x == 1) {
      console.log("x");
    } else {
        console.log("x");
        for(k = 2; k <= x ; k++) {
            if (k % 2 == 0){ 
              console.log("- x^ " + k + "/" + k);
            }
            else if (k % 2 != 0) {
              console.log("x^ " + k + "/" + k);
          }
        }
      }
    }