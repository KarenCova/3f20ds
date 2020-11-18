var sTime = new Date().getMilliseconds();
 
function gcd(a, b) {
    let u = a;
    let v = b;
    let r = 0;
    let j = 0;
    let i = 0;
    while (u > 0) {
        if (u < v) {
            r = u;
            u = v;
            v = r;
            i++;
        }
        u -= v;
        j++;
    }
    console.log('Toma', (i + j), 'pasos para ejecutar el programa.');
    return v;
}
 
console.log('GDC:',gcd(1000000005, 999999999));
var eTime = new Date().getMilliseconds();
console.log('El tiempo que toma el programa es: ', (eTime-sTime), 'ms');
 
//can we do better ? (yes/no)
// yes