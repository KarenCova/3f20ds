let h = 10, sumh, mm, n = 12;
function calcular(){
    sumh = (n + h);
    mm = (sumh % 24);
    return mm;
}
console.log('¿Qué horas serán en n hrs?', calcular());