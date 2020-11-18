let nomMap = new Map(), Base = "Nombre", t = new Date().getTime();
while(nomMap.size < 100000){
    let num = (Math.floor(Math.random() * 100000)).toString();
    let nomC = (Base + num);
    nomMap.set(num, nomC);
    num++
} for(let Nombre of nomMap.values()){
    console.log(Nombre)
} console.log('El tiempo de ejecución que toma es: ',t,'ms');