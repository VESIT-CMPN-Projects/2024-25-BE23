// // import axios from "axios";
// // import React, { useContext, useState } from "react";
// // import { toast } from "react-toastify";
// // import { Context } from "../main";
// // import { Link, useNavigate, Navigate } from "react-router-dom";

// // const Login = () => {
// //   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const navigateTo = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios
// //         .post(
// //           "http://localhost:4000/api/v1/user/login",
// //           { email, password, confirmPassword, role: "Patient" },
// //           {
// //             withCredentials: true,
// //             headers: { "Content-Type": "application/json" },
// //           }
// //         )
// //         .then((res) => {
// //           toast.success(res.data.message);
// //           setIsAuthenticated(true);
// //           navigateTo("/");
// //           setEmail("");
// //           setPassword("");
// //           setConfirmPassword("");
// //         });
// //     } catch (error) {
// //       toast.error(error.response.data.message);
// //     }
// //   };

// //   if (isAuthenticated) {
// //     return <Navigate to={"/"} />;
// //   }

// //   return (
// //     <>
    
// //       <div className="container form-component login-form">
      
// //         <h2>Sign In</h2>
// //         <p>Please Login To Continue</p>
// //         {/* <p>
// //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
// //           voluptas expedita itaque ex, totam ad quod error?
// //         </p> */}
// //         <form onSubmit={handleLogin}>
// //           <input
// //             type="text"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirm Password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />
// //           <div
// //             style={{
// //               gap: "10px",
// //               justifyContent: "flex-end",
// //               flexDirection: "row",
// //             }}
// //           >
// //             <p style={{ marginBottom: 0 }}>Not Registered?</p>
// //             <Link
// //               to={"/register"}
// //               style={{ textDecoration: "none", color: "#271776ca" }}
// //             >
// //               Register Now
// //             </Link>
// //           </div>
// //           <div style={{ justifyContent: "center", alignItems: "center" }}>
// //             <button type="submit">Login</button>
// //           </div>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default Login;
// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// // import "./Login.css"; // Ensure this is the correct path to your CSS file

// const Login = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");

//   const navigateTo = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/v1/user/login",
//           { email, password, confirmPassword, role: "Patient" },
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         )
//         .then((res) => {
//           toast.success(res.data.message);
//           setIsAuthenticated(true);
//           navigateTo("/");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <div className="login-container">
//       {/* <div className="login-image">
//         <img src="./public/login.png" alt="Login" />
        
//       </div> */}
//       <div className="login-box">
//         <h2>Sign In</h2>
//         <p>Please Login To Continue</p>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {/* <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           /> */}
//           <button type="submit">Login</button>
//         </form>
//         <p className="register-text">Not Registered? <Link to="/register">Register Now</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from "react";
import Hero from "../components/Hero";
// import AppointmentForm from "../components/AppointmentForm";
import LoginForm from "../components/Login.jsx";

const Log = () => {
  return (
    <>
      {/* <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      /> */}
      <LoginForm/>
    </>
  );
};

export default Log;