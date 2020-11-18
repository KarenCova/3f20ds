let dia = 0, dTotal, mm, n = 10;
let sem = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    function calcular() {
        dTotal = n + dia;
        mm = dTotal % 7;
        return sem[mm];
    } console.log('En en 10 días será', calcular());