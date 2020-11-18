let x = [], c = 10000000, max = 999999, min = 0, t = 0, inv;
for(let k = 0; k < 1; k++){
    random();
    let m1 = new Date().getTime();
    console.log(ordenar());
    let m2 = new Date().getTime();
    t = m2-m1;    
} function rand(){
    for (y = 0; y < c; y++){
        x[y] = Math.floor(Math.random() * max + min);
    } return x;
} function mov(n, m){
    let l = x[n];
    x[n] = x[m];
    x[m] = l;
} function ord(){
    inv = 0;
    for(let i = 0; i < c; i++){
        for(let b = 0; b < c - 1; b++){
            if(x[b] > x[b+1]){
                mov(b, b + 1);
                inv++
            } else continue;
        }
    } return x;
}
console.log('Requiere en promedio: '+ inv +' inversiones'); 
console.log('El tiempo que toma en promedio es: '+t); 
//Podemos el tiempo de ejecución con métodos de ordenamiento