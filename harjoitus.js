
console.log("Hei maailma");
console.log("Pieni possu sanoi," + "\"Olen iloinen\"");

var l1 = 3;
var l2 = 4;
console.log(l1+l2)

console.log(l1-l2)

console.log(l1*l2)

console.log(l1/l2)

var celcius =(100);
var fahrenheit =(celcius * 1.8+32)
console.log(`${fahrenheit} Fahrenheitastetta on ${celcius} Celciusastetta`);

fahrenheit =(100);
celcius=(fahrenheit - 32)/1.8;
console.log(`${celcius} Celciusastetta on ${fahrenheit} Fahrenheitastetta`);

var ml =(10);
var km =(ml * 1.60934);
console.log(`${km} Kilometriä on ${ml} Mailia`);

km =(10);
ml =(km / 1.60934);
console.log(`${ml} Mailia on ${km} kilometriä`);

var tuuma =(10);
var sentti =(tuuma * 2.54);
console.log(`${tuuma} Tuumaa on ${sentti} senttiä`);
// p11
sentti =(30);
tuuma =(sentti / 2.54);
console.log(`${sentti} Senttiä on ${tuuma} tuumaa`);
//p12
var jaardi=(10);
var metri=(jaardi*0.9144);
console.log(`${jaardi} Jaardia on ${metri} metriä`);
//p13
metri=(10);
jaardi=(metri / 0.9144);
console.log(`${metri} Metriä on ${jaardi} jaardia`);
//p14
function summafunktio(a, b)
{
    console.log("Lukujen " +l1 + " ja " +l2 + " summa on " + (l1+l2));
}
function erotusfunktio(l1, l2)
{
    console.log("Lukujen " + l1 + " ja " + l2 + " erotus on " + (l1-l2));
}
function kertofunktio(l1, l2)
{
    console.log("Lukujen " +l1 + " ja " +l2 + " kertolasku on " + l1*l2);
}
function jakofunktio(l1, l2)
{
    console.log("Lukujen " +l1 + " ja " +l2 + " jaettuna on " + l1/l2);
}
//p15
var pii=(Math.PI);
var säde=(numero);
function ympyränSäde=(säde) {
säde * säde * pii
};
//p16
function=(sivu);{
    console.log(sivu*sivu)
}; 
//p17
function(sivu1, sivu2) {
    console.log(sivu1 * sivu2)
};
//p18
function muunnaVuosiksi(paivat) {
let vuodet = parseInt(paivat / 365);
let kuukaudet = parseInt((paivat % 365) / (365 / 12));
let pvt = parseInt((paivat % 365) - kuukaudet * (365 / 12));
console.log(paivat + " päivää on " + vuodet + " vuotta " + kuukaudet + " kuukautta ja " + pvt + " päivää.")
}









