let S = [3,1,4,2,3]
    function potencia(x) {
        return x.reduce((k, y) => 
            k.concat(k.map(d => [y].concat(d))), [[]]);
    }
console.time();
potencia(S);
console.timeEnd();
console.log("Es una Complejidad Exponencial");
console.log(potencia(S));