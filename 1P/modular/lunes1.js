let dia = 0,
    sem = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'], dTotal, mm;
    function calcular() {
        dTotal = 11 + dia;
        mm = dTotal % 7;
        return sem[mm];
    }
    console.log('Dentro de 11 días será: ', calcular());