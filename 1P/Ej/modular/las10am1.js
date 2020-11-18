let h = 10, sumh, mm;
    function calcular(){
        sumh = (2500 + h);
        mm = (sumh % 24);
        return mm;
    }
console.log('Dentro de 2,500 hrs van hacer en horas: ' + calcular())
