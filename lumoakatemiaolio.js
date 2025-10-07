/*
Tee Henkiloluokka, jossa on muuttujat: Etu-, 
sukunimi ja ikä ja tee konstructori, jonka avulla ko. 
tiedot voi suoraan syöttää. Tee tämän jälkeen risto-olio seuraavilla tiedoilla: 
Etunimi: Risto, Sukunimi: Reipas, Ikä: 10 ja tulosta sen jälkeen riston tiedot konsoliin
*/

// class Henkilo {
//     constructor(etunimi, sukunimi, ika) {
//         this.etunimi = etunimi;
//         this.sukunimi = sukunimi;
//         this.ika = ika; 
//     }
// }

// const olio = new Henkilo ("Risto", "Reipas", "10");
/*console.log("etunimi:" + olio.etunimi);
console.log("sukunimi:" +  olio.sukunimi);
console.log("ika:" + olio.ika);*/

// co2 Muuta nyt edellisen tehtävän sukunimeksi Reippaampi ja iäksi 11

// olio.sukunimi = "Reippaampi";
// olio.ika = "11"
/*console.log("etunimi:" + olio.etunimi);
console.log("sukunimi:" +  olio.sukunimi);
console.log("ika:" + olio.ika);*/

//C03. Jatka edellistä tehtävää siten, että tulostus tapahtuu luokan funktiolla NaytaTiedot()

// class Henkilo {
//     constructor(etunimi, sukunimi, ika) {
//         this.etunimi = etunimi;
//         this.sukunimi = sukunimi;
//         this.ika = ika; 
//     }
// NaytaTiedot() {
//     console.log("etunimi:" + this.etunimi);
//     console.log("sukunimi:" + this.sukunimi);
//     console.log("ika:" + this.ika);
// }
// }
// const olio = new Henkilo ("Risto", "Reipas", 10);
//  olio.NaytaTiedot();

 //C04. Tee kuvakirja -niminen luokka, jossa privaatti muuttuja SivujenLukumäärä ja oletuskonsturi, jossa sivumääräksi määritellään 16 sivua sekä konstruktori, jolla voi antaa itse sivumäärän


// class Kuvakirja {
//     #SivujenLukumaara
    
//     constructor(sivumaara = 16) {
//     this.#SivujenLukumaara = sivumaara;
//     }
//     HaeSivumaara() {
//         return this.#SivujenLukumaara;
//     }
// }
// const KuvakirjaOletus = new Kuvakirja(); 
// console.log("Oletussivumaara:" + KuvakirjaOletus.HaeSivumaara())

// /* C05. Tee Elain -niminen luokka, jossa on yksi muuttuja: nimi. Tee nimelle getterit ja setterit 
// sekä oletuskonstruktori sekä ylikuormitettu konstruktori, jossa nimen voi antaa. Tee lisäksi 
// Syo-metodi, joka tulostaa nimen ja 'syö - mumm mumm mumm'. Luo tämän jälkeen kana-niminen olio 
// oletuskonstruktorilla ja muuta nimi sen jälkeen 'kaakattaja':ksi ja kutsu sen jälkeen Syo-metodia*/

// class Elain {
//     constructor(nimi = "kana") {
//         this._nimi = nimi;
// }

// get nimi() {
//     return this._nimi;
// }
// set nimi(uusiNimi){
//     this._nimi = uusiNimi;
// }
// Syo(){
//     console.log(this._nimi + "syö - mumm mumm mumm");
        
// }
// }
// const kana = new Elain()
// console.log("Olio kana, nimi "+ kana.nimi)

// kana.nimi = "kaakattaja";
// console.log("Olio kanan,uusi nimi: " + kana.nimi)
// kana.Syo()

/*C06. Jatka edellistä tehtävää siten, että luot Koira-luokan, joka perii Eläin -luokan (class Koira: Elain). 
Lisää Koira luokkaan tassut (määrä) ja turkki (väri) -muuttujat. Tee getterit, setterit, konstruktorit) sekä Aantelehtii-Metodi, 
joka tulostaa: nimi "haukkuu", kun metodille antaa tuon stringinä. Koiralle voi antaa oletuskonstruktorissa tassujen määräksi 4*/ 


class Elain {
        constructor(nimi = "kana") {
            this._nimi = nimi;
    }
    
    get nimi() {
        return this._nimi;
    }
    set nimi(uusiNimi){
        this._nimi = uusiNimi;
    }
    Syo(){
        console.log(this._nimi + "syö - mumm mumm mumm");
            
    }
    }
    class Koira extends Elain {
        constructor(nimi = "", tassut = 4, turkki = "" ){
            super(nimi);
            this._tassut = tassut;
            this._turkki = turkki;
        }
        get tassut(){
            return this._tassut;
        }
        set tassut(uudetTassut){
            this._tassut = uudetTassut;
        }
    }