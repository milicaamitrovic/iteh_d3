import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import DanceServices from "./components/pages/DanceServices";
import Appointments from "./components/pages/Appointments";

function App() {
  const [appNum, setAppNum] = useState(0);

  const s1 = [
    {
      id: 1,
      times: 0,
      star: 112,
      checked: false,
      name: "Salsa",
      added: false,
      date: "20th Jan 2022 09:30 AM",
      text: "Salsa je strastveni latinoamerički ples koji odiše ritmom, energijom i senzualnošću. Nastala u Karibima, salsa je postala globalni fenomen zbog svoje zarazne muzike i brzih pokreta. Ovaj ples je izuzetno popularan zbog svoje sposobnosti da kroz dinamične okrete izrazi ljubav, radost i slobodu. Nema boljeg načina da se oslobodite i uživate u trenutku nego da zaplešete salsa ritmove.",
      src: "https://dancestudiosdubai.com/wp-content/uploads/2022/03/competition-42.jpg",
    },
    {
      id: 2,
      times: 0,
      star: 184,
      checked: false,
      name: "Bachata",
      added: false,
      date: "24th Jan 2022 09:30 AM",
      text: "Bachata je romantični ples poreklom iz Dominikanske Republike. Njeni polagani ritmovi i senzualni pokreti čine je savršenim izborom za zaljubljene parove. Ovaj ples je poznat po svojoj emotivnoj dubini i sposobnosti da izrazi intimnost između partnera. Plesači bachate često se povezuju sa svojim partnerima na emocionalnom nivou, čineći svaki trenutak posebnim.",
      src: "https://dancestudiosdubai.com/wp-content/uploads/2022/03/competition-39.jpg",
    },
    {
      id: 3,
      times: 0,
      star: 178,
      checked: false,
      name: "Paso doble",
      added: false,
      date: "13th Jan 2022 09:30 AM",
      text: "Paso Doble je španski ples inspirisan borbenom arenom i toreadorima. Ovaj dinamičan ples karakterišu snažni koraci, dramatična muzika i strastvena izvedba. Plesači paso doblea prenose snagom i strašću ovu priču o borbi između bika i toreadora. Paso doble je ples hrabrosti i izražava heroizam i strast, pružajući izvođačima mogućnost da se osećaju kao pravi junaci.",
      src: "https://cdn-fhgnd.nitrocdn.com/gdRlBjBJEsIflRZaDbcgjDdgJxndYJwu/assets/static/optimized/rev-6bb43f7/wp-content/uploads/2022/11/Copy-of-4PM08112-1-scaled.jpg",
    },
  ];

  const s2 = [
    {
      id: 4,
      times: 0,
      star: 165,
      checked: false,
      name: "Samba",
      added: false,
      date: "1st Feb 2022 09:30 AM",
      text: "Samba predstavlja popularan brazilski ples koji odražava energiju i duh karnevala u Rio de Žaneiru. Njegovi brzi ritmovi, živopisni kostimi i vesele melodije čine ga neodoljivim. Samba je ples radosti i spontanosti, koji poziva sve da se prepuste ritmu i veselju. Ovaj ples je sinonim za zabavu i slavi raznolikost brazilske kulture, donoseći osmeh na lica svih koji ga izvode i gledaju.",
      src: "https://dancestudiosdubai.com/wp-content/uploads/2022/11/rumba1-1-1920x1982.jpg",
    },
    {
      id: 5,
      times: 0,
      star: 189,
      checked: false,
      added: false,
      date: "6th Jun 2022 09:30 AM",
      name: "Tango",
      text: "Tango je argentinski ples koji spaja strast, eleganciju i dramu. Njegovi bliski koraci i intenzivan kontakt između partnera čine ga jednim od najsenzualnijih plesova na svetu. Tango je izazov za plesače jer zahteva preciznost i emocionalnu dubinu. Ovaj ples izražava kompleksnost ljudskih odnosa i privlačnosti, stvarajući magiju između partnera na plesnom podijumu.",
      src: "https://cdn-fhgnd.nitrocdn.com/gdRlBjBJEsIflRZaDbcgjDdgJxndYJwu/assets/static/optimized/rev-6bb43f7/wp-content/uploads/2022/11/Copy-of-24500-1-1920x1280.jpg",
    },
    {
      id: 6,
      times: 0,
      star: 178,
      checked: false,
      name: "Valcer",
      added: false,
      date: "17th May 2022 09:30 AM",
      text: "Valcer je klasičan ples koji odražava gracioznost i eleganciju. Njegovi okreti i koraci čine ga idealnim za svečane prilike i balove. Valcer je ples tradicije i romantike, i često se povezuje sa bajkovitim pričama. Plesači valcera osećaju se kao princeze i princovi dok koračaju salama u svom stilizovanom plesu, stvarajući čarobnu atmosferu svake svečane prilike.",
      src: "https://cdn-fhgnd.nitrocdn.com/gdRlBjBJEsIflRZaDbcgjDdgJxndYJwu/assets/static/optimized/rev-6bb43f7/wp-content/uploads/2022/01/Viennese-waltz.jpg",
    },
  ];

  const [appts, setAppts] = useState([]);

  const [services1, setSer1] = useState(s1);

  const [services2, setSer2] = useState(s2);

  const star1 = (serviceId) => {
    let arr1 = [];
    services1.forEach((element) => {
      if (element.id === serviceId) {
        if (!element.checked) {
          console.log(element);
          element.star = element.star + 1;
          element.checked = true;
          console.log(element);
          arr1.push(element);
        }
      } else {
        arr1.push(element);
      }
    });
    setSer1(arr1);
    console.log(services1);

    let arr2 = [];
    services2.forEach((element) => {
      if (element.id === serviceId) {
        if (!element.checked) {
          element.star = element.star + 1;
          element.checked = true;
          arr2.push(element);
        }
      } else {
        arr2.push(element);
      }
    });
    setSer2(arr2);
    console.log(services2);
  };

  const star2 = (serviceId) => {
    let arr1 = [];
    services1.forEach((element) => {
      if (element.id === serviceId) {
        if (element.checked) {
          element.star = element.star - 1;
          element.checked = false;
          console.log(element);
          arr1.push(element);
        }
      } else {
        arr1.push(element);
      }
    });
    setSer1(arr1);

    let arr2 = [];
    services2.forEach((element) => {
      if (element.id === serviceId) {
        if (element.checked) {
          element.star = element.star - 1;
          element.checked = false;
          arr2.push(element);
        }
      } else {
        arr2.push(element);
      }
    });
    setSer2(arr2);
  };

  const makeApnt = (serviceId) => {
    //console.log(serviceId);
    services1.forEach((element) => {
      if (element.id === serviceId) {
        if (element.added === false) {
          setAppNum(appNum + 1);
          element.added = true;
        }
      }
    });
    services2.forEach((element) => {
      if (element.id === serviceId) {
        if (element.added === false) {
          setAppNum(appNum + 1);
          element.added = true;
        }
      }
    });
    let addedServices1 = services1.filter((item) => item.added === true);
    let addedServices2 = services2.filter((item) => item.added === true);
    let addedServices = [...addedServices1, ...addedServices2];
    //console.log(addedServices);
    setAppts(addedServices);
  };

  const deleteApnt = (serviceId) => {
    //.log(serviceId);

    appts.forEach((element) => {
      if (element.id === serviceId) {
        if (element.added === true) {
          setAppNum(appNum - 1);
          element.added = false;
        }
      }
    });

    let newApp = appts.filter((item) => item.added === true);
    setAppts(newApp);
  };

  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/danceservices"
          element={
            <DanceServices
              services1={services1}
              services2={services2}
              makeAnAppointment={makeApnt}
              star1={star1}
              star2={star2}
            />
          }
        />
        <Route
          path="/appointments"
          element={
            <Appointments data={appts} deleteAnAppointment={deleteApnt} />
          }
        />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
export default App;
