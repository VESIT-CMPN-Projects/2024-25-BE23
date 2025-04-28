// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AppointmentForm = () => {
//   const navigate = useNavigate();

//   const handleParkinsonDetection = () => {
//     window.location.href = "http://localhost:8501";
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <button onClick={handleParkinsonDetection} className="btn">
//           Parkinson's Detection
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default AppointmentForm;
import React from "react";

const AppointmentForm = () => {
  return (
    <div className="w-full h-[90vh] mt-6"> {/* Increased height */}
      <iframe
        src="http://localhost:8501"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "100vh" }} // Ensures a large height
        title="Appointment System"
      ></iframe>
    </div>
  );
};

export default AppointmentForm;