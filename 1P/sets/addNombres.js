let s = new Set(), Base = "Nombre", n,nomC;
while(s.size < 10){
    n = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    nomC = (Base + n);
    s.add(nomC);
} console.log(s);