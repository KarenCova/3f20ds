let dia = 0;
let sem = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'], dTotal, menos;
    function calcular() {
        menos = 11 % 7;
        if(menos >= dia) {
            dTotal = (7 + dia - menos);
            return sem[dTotal];
        }
        dTotal = (dia - menos);
        return sem[dTotal];    
    } 
    console.log('Hace 11 días fue '+ calcular());