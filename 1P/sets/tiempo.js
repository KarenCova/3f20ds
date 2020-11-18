let nomSets = new Set(), Base = "Nombre", t = new Date().getTime();
while(nomSets.size < 100000){
    let num = (Math.floor(Math.random() * 100000)).toString();
    let nomC = (Base + num);
    nomSets.add(nomC);     
}       console.log(nomSets); 
        console.log('El tiempo de ejecución que toma es: ', t ,'ms');
