import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";

import Salenew from "./components/Salenew";
import Wintercollection from "./components/Wintercollection";
import Newin from "./components/Newin";
import Fabrics from "./components/Fabrics";
import Readytowear from "./components/Readytowear";
import Western from "./components/Western";
import Track from "./components/Track";
import Signup from "./components/Signup";
import Bag from "./components/Bag";
import Forgotpassword from "./components/Forgotpassword";
import ChangePassword from "./components/Changepassword";
import WintercollectionData from './components/WinterCollectionData'
import Admin from "./components/Admin/Admin";
import SignupListing from './components/Admin/SignupListing'
import SignupDetail from "./components/Admin/SignupDetail";
import Prenav from "./components/Prenav";
import Navbar from "./components/Navbar";
import UpdateContact from "./components/Admin/UpdateAccount";
import LandingPage from "./components/LandingPage"
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

   </Routes>
   {/* <Footer/> */}
    </>
  );
}

export default App;
