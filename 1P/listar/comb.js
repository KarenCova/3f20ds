let S = [3,1,4,2,3]
function combinaciones (S) {
   let r = [];
    let comb2 = (a, n = []) => {
        if (a.length === 0) {
            r.push(n)
        }
         else {
            for (let i = 0; i < a.length; i++) {
                let curr = a.slice();
                let nx = curr.splice(i, 1);
                comb2(curr, n.concat(nx))
            }
        }
    }
    comb2(S)
    return r;
}
console.time();
combinaciones(S);
console.timeEnd();
console.log("Es una Complejidad Exponencial");
console.log(combinaciones(S));