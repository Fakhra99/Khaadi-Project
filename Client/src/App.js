// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Signin from "./components/Signin";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<Signin />} />
//       </Routes>
     
//     </>
//   );
// }

// export default App;

import React from "react";
 import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Salenew from "./components/Salenew";
// import Signup from "./components/Signup";

function App() {
  return (
   
   <>
  
  <Prenav/>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/salenew" element={<Salenew/>}></Route>
   </Routes>
   {/* <Signup/> */}
    </>
  );
}

export default App;
