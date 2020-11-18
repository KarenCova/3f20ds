let nom = "Nombre", x = 0, num, nomC;
while(x < 10){
    num = (Math.floor(Math.random() * (10 - 1) + 1)).toString();
    nomC = (nom + num);
    console.log(nomC);
    x++
}