import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Signin from "./components/SignupAndLogin/Signin";

import Salenew from "./components/ProductsCollections/Salenew";
import Wintercollection from "./components/ProductsCollections/Wintercollection";
import Newin from "./components/ProductsCollections/Newin";
import Fabrics from "./components/ProductsCollections/Fabrics";
import Readytowear from "./components/ProductsCollections/Readytowear";
import Western from "./components/ProductsCollections/Western";
import Track from "./components/ProductsCollections/Track";
import Signup from "./components/SignupAndLogin/Signup";
import Bag from "./components/ProductsCollections/Bag";
import Forgotpassword from "./components/SignupAndLogin/Forgotpassword";
import ChangePassword from "./components/SignupAndLogin/Changepassword";
import WintercollectionData from './components/Admin/WinterCollectionData'
import Admin from "./components/Admin/Admin";
import SignupListing from './components/Admin/SignupListing'
import SignupDetail from "./components/Admin/SignupDetail";
import Prenav from "./components//PrenavAndNavbar/Prenav";
import Navbar from "./components/PrenavAndNavbar/Navbar";
import UpdateContact from "./components/Admin/UpdateAccount";
import LandingPage from "./components/Home/LandingPage"
// import Footer from "./components/Footer"

function App() {
  return (
   
   <>
  
  {/* <Prenav/> */}
   {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/prenav" element={<Prenav />} />
     <Route path="/navbar" element={<Navbar />} />
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/home" element={<Home />} />
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/salenew" element={<Salenew/>}></Route>
    <Route path="/winterCollection" element={<Wintercollection/>}></Route>
    <Route path="/newIn" element={<Newin/>}></Route>
    <Route path="/fabrics" element={<Fabrics/>}></Route>
    <Route path="/readyToWear" element={<Readytowear/>}></Route>
    <Route path="/western" element={<Western/>}></Route>
    <Route path="/track" element={<Track/>}></Route>
    <Route path="/adminn" element={<Admin/>}></Route>
    <Route path="/signuplisting" element= {<SignupListing/>}> </Route>
    <Route path="/update-contact/:id" element= {<UpdateContact/>}> </Route>
    <Route path="signup/:id" element= {<SignupDetail/>}> </Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/bag" element={<Bag/>}></Route>
    <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
    <Route path="/changepassword" element={<ChangePassword/>}></Route>
    <Route path="/wintercollectiondata" element={<WintercollectionData/>}></Route>
    {/* <Route path="/footer" element={<Footer/>}></Route> */}
   </Routes>
   {/* <Footer/> */}
    </>
  );
}

export default App;
