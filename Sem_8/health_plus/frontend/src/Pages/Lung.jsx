
import React from "react";
import Hero from "../components/Hero";
// import AppointmentForm from "../components/AppointmentForm";
import LungCancerForm from "../components/LungCancer.jsx";

const Lung = () => {
  return (
    <>
      {/* <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      /> */}
      <LungCancerForm/>
    </>
  );
};

export default Lung;