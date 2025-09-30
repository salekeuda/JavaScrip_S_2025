function suurempi(a, b) {
    if (a > b) {
        console.log(`suurempi luku on ${a}`);
    } else if (b > a) {
        console.log(`suurempi luku on ${b}`);
    } else {
        console.log(`luvut ovat yhtä suuret`);
    }
}


//ei2 Tee ohjelma, joka etsii kolmesta luvusta suurimman

function suurempi(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`suurempi luku on ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`suurempi luku on ${b}`);
    } else {
        console.log(`suurempi luku on ${c}`);
    }
}

suurempi(1, 2, 3);
suurempi(3, 2, 1);
suurempi(2, 1, 3);
suurempi(2, 2, 2);


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
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
        console.log(`vuosi on karkausvuosi`);
    } else {
        console.log(`vuosi ei ole karkausvuosi`);
    }
}

karkaus(2000);
karkaus(2050);
karkaus(2014);
karkaus(2026);


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

//ei13 Tee ohjelma, joka tulostaa viikonpäivät, kun annetaan vklpnumero (malli if-else, voit myös tehdä switch-case)

let viikonpaiva = 1; // Käyttäjä antaa numeron 1–7

switch (viikonpaiva) {
  case 1:
    console.log("Maanantai");
    break;
  case 2:
    console.log("Tiistai");
    break;
  case 3:
    console.log("Keskiviikko");
    break;
  case 4:
    console.log("Torstai");
    break;
  case 5:
    console.log("Perjantai");
    break;
  case 6:
    console.log("Lauantai");
    break;
  case 7:
    console.log("Sunnuntai");
    break;
  default:
    console.log("Virheellinen viikonpäivän numero");
}

//ei14 Tee ohjelma, joka kysyy kahta kokonaislukua ja tarkastaa, ovatko ne samat

 function tarkastaKokonaisluvut(a, b) {
try {
// Yritetään muuntaa annetut arvot kokonaisluvuiksi.
const lukuA = parseInt(a);
const lukuB = parseInt(b);
// Tarkistetaan, ovatko luvut NaN-arvoja, mikä osoittaa virheellisen muunnoksen.
if (isNaN(lukuA) || isNaN(lukuB)) {
throw new Error("Et antanut kokonaislukuja");
}
// Vertaillaan, ovatko luvut samat.
if (lukuA === lukuB) {
return "Antamasi luvut ovat samat.";
} else {
return "Antamasi luvut eivät ole samat.";
}
} catch (error) {
// Jos tapahtuu virhe (esim. muunnos ei onnistu), palautetaan virheviesti.
return error.message;
}
}
// Esimerkkejä käytöstä:
console.log(tarkastaKokonaisluvut(5, 5)); // Tulostaa "Antamasi luvut ovat samat."
console.log(tarkastaKokonaisluvut(5, "kymmenen")); // Tulostaa "Et antanut kokonaislukuja"
console.log(tarkastaKokonaisluvut("3", 3)); // Tulostaa "Antamasi luvut ovat samat."

//ei15 Tee ohjelma, joka pyytää käyttäjältä ikää ja varmistaa, voiko tämä äänestää (18->)

function aanestys(ika) {
  // Muutetaan syöte kokonaisluvuksi
  ika = parseInt(ika);

  // Tarkistetaan ensin, oliko syöte numero
  if (isNaN(ika)) {
    console.log("Et antanut numeroa");
    return; // Lopetetaan funktio, jos syöte ei ole numero
  }

  // Tarkistetaan ikä
  if (ika >= 18) {
    console.log("Voit äänestää");
  } else {
    console.log("Et voi äänestää");
  }
}

// Testiesimerkit
aanestys("20");   // Voit äänestää
aanestys("abc");  // Et antanut numeroa
aanestys("15");   // Et voi äänestää

//ei17 Tee ohjelma, joka muuttaa annetun arvon rahaksi siten, että se ottaa huomioon setelien arvot. Esim. 1295 = 500 x 2 + 100 x 2 + 50 x 1 + 20 x 2 + 5 x 1¨

function seteleiksi(amount) {
    // Määritellään käytettävät setelit
    const setelit = [500, 100, 50, 20, 10, 5, 2, 1];
    const tulos = {};

    // Käydään setelit läpi ja lasketaan kunkin määrä
    for (let s of setelit) {
        tulos[s] = Math.floor(amount / s);
        amount -= tulos[s] * s;
    }

    // Palautetaan taulukko (objekti) seteleistä
    return tulos;
}

// Esimerkkien testaus
console.log(seteleiksi(1295));
console.log(seteleiksi(1383));

//ei18 Tee ohjelma, joka laskee, onko mahdollista piirtää kolmio annettujen kulma-astelukujen perusteella

function kolmio(a, b, c) {
    // Tarkistetaan, onko kulmien summa 180
    if (a + b + c === 180) {
        return "Kolmio on mahdollinen";
    } else {
        return "Kolmio ei ole mahdollinen";
    }
}

// Esimerkkien testaus
console.log(kolmio(60, 60, 60));  // "Kolmio on mahdollinen"





