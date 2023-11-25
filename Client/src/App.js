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
import Wintercollection from "./components/Wintercollection";
import Newin from "./components/Newin";
import Fabrics from "./components/Fabrics";
import Readytowear from "./components/Readytowear";
import Western from "./components/Western";
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
    <Route path="/winterCollection" element={<Wintercollection/>}></Route>
    <Route path="/newIn" element={<Newin/>}></Route>
    <Route path="/fabrics" element={<Fabrics/>}></Route>
    <Route path="/readyToWear" element={<Readytowear/>}></Route>
    <Route path="/western" element={<Western/>}></Route>
   </Routes>
   {/* <Signup/> */}
    </>
  );
}

export default App;
