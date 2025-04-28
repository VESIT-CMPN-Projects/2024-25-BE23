// import React from "react";

// const Biography = ({imageUrl}) => {
//   return (
//     <>
//       <div className="container biography">
//         <div className="banner">
//           <img src={imageUrl} alt="whoweare" />
//         </div>
//         <div className="banner">
//           <p>Biography</p>
//           <h3>Who We Are</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//             blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
//             consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
//             ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
//             magnam voluptatum consectetur reprehenderit fugiat recusandae aut
//             similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
//             nesciunt laboriosam totam iusto!
//           </p>
//           <p>We are all in 2024!</p>
//           <p>We are working on a MERN STACK PROJECT.</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//             assumenda exercitationem accusamus sit repellendus quo optio dolorum
//             corporis corrupti. Quas similique vel minima veniam tenetur
//             obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
//             cupiditate natus provident. Ex illum quasi pariatur odit nisi
//             voluptas illo qui ipsum mollitia. Libero, assumenda?
//           </p>
//           <p>Lorem ipsum dolor sit amet!</p>
//           <p>Coding is fun!</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Biography;
import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={"./mission.png"} alt="ourmissionvision" />
        </div>
        <div className="banner">
          <p><h3>Our Mission & Vision</h3></p>
          {/* <h3>Why Health+?</h3>
          <p>
            At Health+, we believe in leveraging technology to transform 
            healthcare accessibility. Our platform bridges the gap between users 
            and medical professionals by providing intelligent, real-time health 
            insights.
          </p> */}
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals with AI-driven health insights, 
            enabling them to make informed decisions about their well-being. By 
            integrating advanced algorithms, we aim to enhance early detection, 
            improve diagnostics, and promote proactive healthcare solutions.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a world where technology-driven healthcare is accessible 
            to all. With AI-powered predictions, medical recommendations, and 
            seamless doctor-patient connectivity, Health+ strives to revolutionize 
            the future of digital healthcare.
          </p>
          <p>Join us in making healthcare smarter, faster, and more accessible for everyone!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
