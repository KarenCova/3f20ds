let arm = 0, x = 0, i; 
for(i = 1; i <= 7; i++){
    x = 1/i;
    arm += x;
}
console.log('Posición septima del armónico: ' + x);
console.log('La suma de los siete armónicos es: ' + arm);