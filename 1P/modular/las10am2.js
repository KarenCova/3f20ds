let h = 10, menosh, total;
    function calcular(n) {
        menosh = (2500 % 24);
            if(menosh > n){
                total = (24 + n - menosh);
                return total;
            }
    total = (n - menosh);
        return total;      
    }
    console.log('¿Qué horas fueron hace 2,500hrs?', calcular(h));
