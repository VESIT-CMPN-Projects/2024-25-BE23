// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLocationArrow, FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//   const hours = [
//     {
//       id: 1,
//       day: "Monday",
//       time: "9:00 AM - 11:00 PM",
//     },
//     {
//       id: 2,
//       day: "Tuesday",
//       time: "12:00 PM - 12:00 AM",
//     },
//     {
//       id: 3,
//       day: "Wednesday",
//       time: "10:00 AM - 10:00 PM",
//     },
//     {
//       id: 4,
//       day: "Thursday",
//       time: "9:00 AM - 9:00 PM",
//     },
//     {
//       id: 5,
//       day: "Monday",
//       time: "3:00 PM - 9:00 PM",
//     },
//     {
//       id: 6,
//       day: "Saturday",
//       time: "9:00 AM - 3:00 PM",
//     },
//   ];

//   return (
//     <>
//       <footer className={"container"}>
//         <hr />
//         <div className="content">
//           <div>
//             <img src="/logo.png" alt="logo" className="logo-img"/>
//           </div>
//           <div>
//             <h4>Quick Links</h4>
//             <ul>
//               <Link to={"/"}>Home</Link>
//               <Link to={"/appointment"}>Appointment</Link>
//               <Link to={"/about"}>About</Link>
//             </ul>
//           </div>
//           <div>
//             <h4>Hours</h4>
//             <ul>
//               {hours.map((element) => (
//                 <li key={element.id}>
//                   <span>{element.day}</span>
//                   <span>{element.time}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4>Contact</h4>
//             <div>
//               <FaPhone />
//               <span>9987799431</span>
//             </div>
//             <div>
//               <MdEmail />
//               <span>riddhilabde2004@gmail.com</span>
//             </div>
//             <div>
//               <FaLocationArrow />
//               <span>Mumbai</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          {/* Replacing the logo with an embedded Google Map */}
          <div>
            <h4>Our Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.379013842872!2d72.85296583222399!3d19.048387041699934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2c5bb2bff7%3A0x2e8f6c87565e5baf!2sSion%2C%20Mumbai%2C%20Maharashtra%20400022!5e0!3m2!1sen!2sin!4v1708492345678"
              width="300"
              height="200"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h4>Discover</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>9987799431</span>
            </div>
            <div>
              <MdEmail />
              <span>riddhilabde2004@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Mumbai</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
