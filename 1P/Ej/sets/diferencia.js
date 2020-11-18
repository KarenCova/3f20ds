//Explicar diferencia entre set y weakset con un ejemplo

//EJEMPLO: 
let set = new Set();
let weakset = new WeakSet();
    (function(){
        let a = {x: 12};
        let b = {y: 12};
            set.add(a);
            weakset.add(b);
    })
    console.log(set);
    console.log(weakset);
//Las principales diferencias con el objeto Set son:
// - A diferencia de  Sets, WeakSets  son solamente colecciones de objetos y 
//   no contienen valores arbitrarios de cualquier otro tipo.
// - El WeakSet  es débil. 