let x = [], c = 100000, max = 9999, min = 0, t, inv, m1, m2;
for(let k = 0; k < 1; k++){
    rand();
    m1 = new Date().getTime();
    console.log(ord());
    m2 = new Date().getTime();
    t = (m2 - m1);
} function rand(){
    for (k = 0; k < c; k++){
        x[k] = Math.floor(Math.random() * (max + min));
    } return x;
} function v (n, m){
    let l = x[n];
    x[n] = x[m];
    x[m] = l;
} function ord (){
    inv = 0;
    for(let i = 0; i < c; i++){
        for(let b = 0; b < c - 1; b++){
            if(x[b] > x[b + 1]){
                v (b, b +  1);
                inv++
            } else continue;
        }
    } return x;
}
console.log('Requiere en promedio: '+ inv +' inversiones');  
console.log('El tiempo que toma en promedio es: '+t);  
//Podemos el tiempo de ejecución con métodos de ordenamiento