// import React, { useContext, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Appointment from "./Pages/Appointment";
// import Lung from "./Pages/Lung";
// import AboutUs from "./Pages/AboutUs";
// import Register from "./Pages/Register";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { Context } from "./main";
// import Login from "./Pages/Login";
// const App = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } =
//     useContext(Context);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/v1/user/patient/me",
//           {
//             withCredentials: true,
//           }
//         );
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser({});
//       }
//     };
//     fetchUser();
//   }, [isAuthenticated]);

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/lung" element={<Lung />} />
//           <Route path="/appointment" element={<Appointment />} />
//           {/* <Route path="/appointment" element={<Appointment />} /> */}
          
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//         <ToastContainer position="top-center" />
//       </Router>
//     </>
//   );
// };

// export default App;
import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Lung from "./Pages/Lung";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        {isAuthenticated ? null : <Navbar />} {/* Conditionally render Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/lung" element={<Lung />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;