import React from 'react';
import './HomePage.css';
import AlternateBox from './AlternateBox'; // Import the AlternateBox component


function HomePage() {
  return (
    <div className="home-page">
      <div className="home-banner">
        <div className="overlay">
          {/* Center the first text on the image */}
          <div className="text-container center-on-image">
            <p>
              Peroterm je Vaš pouzdani obrt iz susjedstva, majstor na kojeg se možete osloniti. Ponosimo se brzinom svog dolaska, pristupačnosti u komunikaciji i širokoj pokrivenosti usluga na području Osječko-Baranjske i Vukovarsko-srijemske županije. Osim instalacija vršimo i popravke istih te kućne popravke. Nemojte čekati nezgodne epizode - tu smo za sve Vaše brige oko grijanja, klime, odvoda i vode!
            </p>
            <p>
            Stručne instalacije, brzi dolasci i pristupačne cijene! Peroterm - kontaktirajte nas danas za instalacije grijanja, klima, vode i odvode. Mi Vaš dom činimo udobnijim, vi uživate u rezultatima.
            </p>
          </div>
        </div>
      </div>

      {/* Alternating image and text sections */}
      <AlternateBox
        picSrc={require('./images/discount.jpg')}
        heading ="Poklon 10% popusta na sav materijal!"
        text="
        Poklanjamo 10% popusta na materijal za dogovorenu uslugu putem poziva ili Whatsapp poruke! Javite nam se."
        isImageOnLeft={true} // Image on the left
      />
      <AlternateBox
        picSrc={require('./images/bathtub.jpg')}
        heading ="Vodoinstalacije"
        text="Pozadinska, ali ključna stavka Vašeg doma. Pouzdane vodoinstalacije ključne su za funkcioniranje kućanstva, dovodimo ih do svih potrošača u kućanstvu.
        Radimo sve od jednostavnih popravaka do cijele instalacije.
        Koristimo najsuvremeniji materijal za protok vode s profesionalnom montažom za kvalitetan tlak vodoopskrne mreže.
        "
        isImageOnLeft={false} // Image on the right
      />
            <AlternateBox
        picSrc={require('./images/ac.jpg')}
        heading ="Klimatizacijski uređaji"
        text="Moderno rashlađivanje ili zagrijavanje Vašeg prostora. Klimatizacijskim uređaji sastoje se od vanjske i unutarnje jedinice. Pojedine klime sadrže u sebi posebne filtere za pročišćavanje zraka, dima ili peludi. Za optimalan rad važan je podoban položaj instalacije za maksimalni rezultat kao i održavanje.
        Brinemo za optimalni način ugradnje Vaše unutarnje jedinice i nudimo različite kombinacije ugrađivanja vanjskih i unutarnjih jedinica.
        Nudimo održavanje i kvalitetu čistoće i zraka."
        isImageOnLeft={true} // Image on the left
      />
      <AlternateBox
        picSrc={require('./images/heat.jpg')}
        heading ="Radijatorsko grijanje"
        text="Najčešće grijanje kućanstva. Ovo pristupačno i jednostavno rješenje osigurat će Vam efikasnu i pouzdanu toplinu doma.
        Nudmo brzu i jednostavnu instalaciju.
        Radimo povoljne popravke i održavanje."
        isImageOnLeft={false} // Image on the right
      />
            <AlternateBox
        picSrc={require('./images/pipes.jpg')}
        heading ="Odvodi"
        text="Sporedna stvar koja postane primarna kada ne funkcionira. Jer niti jedno kućanstvo ne voli probleme s odvodima, kvalitetnim planiranjem odvoda rješava se velik broj problema u kućanstvu poput bacanja neprilagođenih predmeta u školjku ili kuhinjski odvod te naslaga prljavštine.
        Od početka ih radimo s pažnjom kako ne bi došlo do zaštopavanja istih.
        Radimo sve brze popravke kako bi kućanstvo nastavilo funkcionirati."
        isImageOnLeft={true} // Image on the left
      />
        <AlternateBox
        picSrc={require('./images/pipe.jpg')}
        heading ="Podno vodeno grijanje"
        text="Jedan od najboljih izbora za grijanje Vašeg doma. Zahvalno i dugoročno rješenje, s minimalnim ili nikakvim problemima u održavanju. Poprilična ušteda vidljiva je u iznosu na računima. Ujednačenost temperature topline bez obzira na sobu u kojoj se nalazite. Vlažan zrak pogodan za udisanje, svjež bez dodatnog zračenja i ugodniji san."
        isImageOnLeft={false} // Image on the right
      />
        <AlternateBox
        picSrc={require('./images/drill.png')}
        heading ="Popravci jer vam ponekad samo treba brzi kućni popravak"
        text="Osim naših glavnih usluga i instalacija, dostupni smo i za brze popravke.
        Radimo popravke svih instalacija poput zamjena ventila, popravka curenja cijevi, zamjene nosača radijatora i sličnih usluga.
        Na području Osijeka možemo doći isti dan."
        isImageOnLeft={true} // Image on the left
      />
            <AlternateBox
        picSrc={require('./images/question.png')}
        heading ="Procjena i instalcija"
        text="Nudimo procjenu i instalaciju bez komplikacija."
        isImageOnLeft={false} // Image on the right
      />
            <AlternateBox
        picSrc={require('./images/gears.png')}
        heading ="Održavanje"
        text="Vršimo svo potrebno održavanje."
        isImageOnLeft={true} // Image on the left
      />
      <AlternateBox
        picSrc={require('./images/house.png')}
        heading ="Fina montaža"
        text="Postavljanje svih željenih elemenata u kupatilu i kuhinji. Kada ste odabrali svoje željene elemente, ostale brige prepustite nama i upotpunite Vaše kućanstvo.
        Radimo instalaciju tuš kada, tuš kabina, umivaonika, slavina, WC školjki i drugih elemenata.
        Brinemo za završne detalje kako bi sve bilo spremno za korištenje."
        isImageOnLeft={false} // Image on the right
      />
      {/* Add more AlternateBox components as needed */}
    </div>
  );
}

export default HomePage;