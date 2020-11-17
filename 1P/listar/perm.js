let S = [3,1,4,2,3];
function permutaciones (S){
    let perm1 = [];
    let perm = (a, p = []) =>{
        if (!a.length) {
            perm1.push(p);
            return
        }
        for(let i in a) {
            let curr = a.slice();
            let nx = curr.splice(i,1);
            perm(curr, p.concat(nx));
        }
    } 
    perm(S);
    return perm1;
}
console.time();
permutaciones(S);
console.timeEnd();
console.log("Es una Complejidad Cuadrática");
console.log(permutaciones(S));