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

//ei2

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

//ei4

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

//ei5
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
