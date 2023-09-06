import React from "react";
import Appointment from "../Appointment";
import "../Appointments.css";
import { Button } from "../Button";

function Appointments({ data, deleteAnAppointment }) {
  const headingStyle = {
    color: "#fff",
    "margin-top": "-50px",
  };

  return (
    <div>
      {data.length === 0 ? (
        <>
          <div className="cards1">
            <h1 style={headingStyle}>Trenutno ni jedan termin nije zakazan!</h1>
            <p className="app-text">Zakaži jedan već sad!</p>
            <div className="main-btns">
              <Button
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={() => {
                  window.location.href = "/danceservices";
                }}>
                PRONAĐI SVOJ IDEALAN PLESNI STIL!
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cards2">
            <h1>TVOJI ZAKAZANI TERMINI</h1>
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items1">
                  {data.map((item) => (
                    <Appointment
                      obj={item}
                      deleteAnAppointment={deleteAnAppointment}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Appointments;
