let nomMap = new Map(), Base = "Nombre", num = 1;
while(nomMap.size < 10){
    let nomC = (Base + num).toString();
    nomMap.set(num, nomC);
    num++
}
for(let Nombre of nomMap.values()){
    console.log(Nombre);
}