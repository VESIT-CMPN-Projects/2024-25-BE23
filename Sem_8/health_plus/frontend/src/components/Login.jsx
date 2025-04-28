import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full h-[90vh] mt-6"> {/* Increased height */}
      <iframe
        src="http://localhost/edoc/login.php"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "120vh" }} // Ensures a large height
        title="Appointment System"
      ></iframe>
    </div>
  );
};

export default LoginForm;