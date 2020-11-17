ln = process.openStdin();
console.log("Introduce el tamaño de la serie:")
ln.addListener("data",function(n){
    har(n);
    process.exit()
})
function har(x) {
    if (x == 1){
        console.log("1");
    }
   else {
       console.log("1")
    for(k = 2; k <= x ; k++) {
        if (k % 2 == 0) {
            console.log("- 1/" +k);
        }
        else if (k % 2 != 0) {
            console.log("1/" +k);
        }
    }
 }
}