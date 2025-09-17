//s1  Tee ohjelma, laskee, paljonko joudut maksamaan takaisin, kun lainasit 5000€ kahdeksi vuodeksi 2% korolla

/*Funktio laina ottaa parametreina lainan määrän (maksu), vuosikoron (korko) ja laina-ajan vuosina (aika).
Laskee korkoa vuosittain for-silmukassa: maksettava *= korko.
Laskee korkosumman: korkosumma = maksettava - maksu.
Palauttaa objektin, jossa on:
alkuperainenLaina
korko
maksettavaYhteensa
Tuloksen voi tulostaa tai käyttää muussa laskennassa.*/

function laina(maksu = 5000, korko = 1.02, aika = 2) {
    let maksettava = maksu;

    // Lasketaan korko vuosittain
    for (let i = 1; i <= aika; i++) {
        maksettava *= korko;
    }

    let korkosumma = maksettava - maksu;

    return {
        alkuperainenLaina: maksu,
        korko: korkosumma,
        maksettavaYhteensa: maksettava
    };
}

let tulos = laina();
console.log(`Joudut maksamaan ${tulos.alkuperainenLaina} euron lainasta korkoa ${tulos.korko.toFixed(2)}, jolloin maksettavaa tulee yhteensä ${tulos.maksettavaYhteensa.toFixed(2)}`);
