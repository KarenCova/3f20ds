//Explicar diferencia entre map y weakmap con un ejemplo
//EJEMPLO: Array de números, aplicándoles la raíz cuadrada a cada uno de sus elementos.
var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
console.log(raices);

//  Un Map es un iterable lo que permite iterar directamente sobre el, mientras que si queremos iterar sobre un Object 
//  necesitamos obtener primero las claves de alguna forma para después iterar sobre el.