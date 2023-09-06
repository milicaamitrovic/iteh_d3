import React from "react";
import Cards from "../Cards";

function DanceServices({
  services1,
  services2,
  makeAnAppointment,
  star1,
  star2,
}) {
  return (
    <div>
      <Cards
        data1={services1}
        data2={services2}
        title="PRONAĐI SVOJ PLESNI STIL!"
        type="danceservices"
        makeAnAppointment={makeAnAppointment}
        star1={star1}
        star2={star2}
      />
    </div>
  );
}

export default DanceServices;
