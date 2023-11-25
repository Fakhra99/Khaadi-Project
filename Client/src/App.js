import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
   
   <>
  
   <Home/>
   <Routes>
    <Route path="/signin" element={<Signin/>}></Route>
   </Routes>
   <Signup/>
    </>
  );
}

export default App;
