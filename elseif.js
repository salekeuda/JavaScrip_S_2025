function suurempi(a, b) {
    if (a > b) {
        console.log(`suurempi luku on` + a);
}
else if (b > a) {
    console.log(`suurempi luku on` + b);
}
else {
    console.log(`luvut ovat yhtä suuret`);
}
}
suurempi(3, 2);
suurempi(1,4);

//ei2 Tee ohjelma, joka etsii kolmesta luvusta suurimman

function suurempi (a, b, c) {
if(a > b && a > c)
    console.log(`suurempi luku on ` + a);
}
if (b > c) {
    console.log(`suurempi luku on` + b);
}
else if (c > b) {
    console.log(`suurempi luku on` + c)
}
else {
    console.log(`luvut ovat yhtä suuret`);
}
suurempi(1,2,3);
suurempi(3,2,1);
suurempi(2,1,3);
suurempi(2,2,2);

//ei4 Tee ohjelma, joka kysyy käyttäjältä lukua ja tarkistaa, onko se 5:llä tai 11:sta jaollinen

function jaollinen(luku) {
if (luku % 5 == 0 && luku % 11 == 0) {
console.log("Luku on jaollinen sekä 5:llä, että 11:sta");
}
else if (luku % 5 == 0 || luku % 11 == 0)
{
console.log("Luku on jaollinen 5:llä tai 11:sta");
}
else {
console.log("Luku ei ole jaollinen 5:llä tai 11:sta");
}
}
jaollinen(55);
jaollinen(50);
jaollinen(44);
jaollinen(56);

//ei5 Tee ohjelma, joka tarkastaa, onko annettu luku karkausvuosi vai ei

function karkaus(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0)
    console.log(`vuosi on karkausvuosi`);
}
else if (vuosi % 400 == 0) {
    console.log(`vuosi on karkausvuosi`);
}
else {
    console.log(`vuosi ei ole karkausvuosi`)
}
karkaus(2000)
karkaus(2050)
karkaus(2014)
karkaus(2026)

//välissä 6-10

//ei11 Tee ohjelma, joka laskee annetuista myynti ja ostoluvuista, saitko voittoa vai tappiota

function voittoTappio(myynti, osto) {
myynti = parseInt(myynti);
osto = parseInt(osto);
if ((myynti - osto) > 0) {
console.log("Sait voittoa: " + (myynti - osto));
}
else {
console.log("Tappiosi oli " + (myynti - osto));
}
}
voittoTappio(30, 20);
voittoTappio(20, 30);
voittoTappio(30, 30);

//ei12 Tee ohjelma, joka pyytää viiden kokeen pisteitä (Ma, KeFy, Äi, Ru, En -> 0 - 100) ja antaa arvion seuraavasti: Yli 90 pistettä = K5, yli 80 pistettä = H4, yli 70 pistettä = H3, yli 60

function koePisteet(Ma, KeFy, Ai, Ru, En) {
var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
for (var i = 0; i < taulukko.length; i++) {
if (taulukko[i][1] >= 90) {
console.log(taulukko[i][0] + ": K5");
}
else if (taulukko[i][1] >= 80) {
console.log(taulukko[i][0] + ": H4");
}
else if (taulukko[i][1] >= 70) {
console.log(taulukko[i][0] + ": H3");
}
else if (taulukko[i][1] >= 60) {
console.log(taulukko[i][0] + ": T2");
}
else if (taulukko[i][1] >= 50) {
console.log(taulukko[i][0] + ": T1");
}
else {
console.log(taulukko[i][0] + ": Hylätty");
}
}
}
koePisteet(55, 78, 63, 88, 94);
koePisteet(99, 45, 70, 80, 60);
    