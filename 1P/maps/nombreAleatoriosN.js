let nomMap = new Map(), Base = "Nombre", n = 6;
while(nomMap.size < n){
    let num = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    let nomC = (Base + num);
    nomMap.set(num, nomC);
    num++
} for(let nom of nomMap.values()){
    console.log(nom);
}