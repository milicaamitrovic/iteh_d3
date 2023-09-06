import React from "react";
import "../App.css";
import "./MainSection.css";
import { Button } from "./Button";
import Cards from "./Cards";
import Image1 from "../assets/image1.PNG";
import Image2 from "../assets/image2.PNG";
import Image3 from "../assets/image3.PNG";

function MainSection() {
  const clients = [
    {
      name: "Uroš Janković",
      text: "Ples je za mene sinonim za ljubav, prečica za sreću i najlakši način da učiniš nešto dobro za sebe.",
      src: Image1,
    },
    {
      name: "Jana Marković",
      text: "Ples je sastavni deo mog indetiteta. Naučio me je kako da izrazim svoje emocije. Za mene, ples je život.",
      src: Image2,
    },
    {
      name: "Ivona Stanković",
      text: "Kroz pokrete, publici se trudim da ispričam svoju priču. Smatram da postoji lepši osećaj od onog na sceni.",
      src: Image3,
    },
  ];

  return (
    <>
      <div className="main-container">
        <image src="https://cdn-fhgnd.nitrocdn.com/gdRlBjBJEsIflRZaDbcgjDdgJxndYJwu/assets/static/optimized/rev-6bb43f7/wp-content/uploads/2022/11/waltz.jpg" />
        <h1>KREIRAJ SVOJ PLESNI UNIVERZUM!</h1>
        <p>Ples je magija koja se dešava kada pustite srce da vas vodi.</p>
        <div className="main-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            link="/danceservices">
            PRIDRUŽI NAM SE!
          </Button>
        </div>
      </div>
      <div className="main-text">
        <h1>KO SMO MI?</h1>
        <h3>Dobrodošli u Dance Studio Sparkle!</h3>
        <p>
          U Dance Studio Sparkle, verujemo da moć plesa može da donese radost,
          samopouzdanje i harmoniju u živote ljudi. Naš plesni studio je više od
          mesta gde se uči ples - to je zajednica strastvenih plesača,
          instruktora i zaljubljenika u ples koji dele istu strast i entuzijazam
          prema umetnosti plesa.
        </p>
        <p>
          Naša misija je pružiti inspirativno okruženje gde svi, bez obzira na
          godine ili nivo iskustva, mogu otkriti čaroliju plesa. Verujemo da
          svako može naučiti da pleše i da je ples izraz slobode, kreativnosti i
          izražavanja. Naši iskusni instruktori su ovde da vas vode kroz svaki
          korak, bez obzira da li ste početnik ili iskusni plesač.
        </p>
        <p>
          Nema boljeg vremena da započnete svoje plesno putovanje ili da
          unapredite svoje plesne veštine nego sada. Pozivamo vas da se
          pridružite našoj plesnoj porodici u Dance Studio Sparkle gde ćemo
          zajedno stvarati čaroliju plesa.
        </p>
      </div>
      <div className="main-clients">
        <Cards
          title="NAŠI PLESNI INSTRUKTORI"
          data1={clients}
          type="clients"></Cards>
      </div>
    </>
  );
}

export default MainSection;
