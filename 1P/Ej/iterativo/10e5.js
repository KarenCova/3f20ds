let x = [], c = 100000, max = 99999, min = 0, t = 0, inv;
for(let k = 0; k < 1; k++){
    rand();
    let m1 = new Date().getTime();
    console.log(ord());
    let m2 = new Date().getTime();
    t = m2-m1;    
    } function rand(){
        for (y = 0; y < c; y++){
            x[y] = Math.floor(Math.random() * (max + min));
        } return x;
    } function v(n, m) {
        let l = x[n];
        x[n] = x[m];
        x[m] = l;
    }function ord() {
        inv = 0;
        for(let i = 0; i < c; i++){
            for(let b = 0; b < c - 1; b++) {
                if(x[b] > x[b+1]) {
                    v(b, b + 1);
                    inv++
                } else continue;
            }
        } return x;
    }
    console.log('Requiere en promedio: '+ inv +' inversiones'); 
    console.log('El tiempo que toma en promedio es: '+ t);
    //Podemos el tiempo de ejecución con métodos de ordenamiento