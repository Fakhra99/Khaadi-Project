// import LoginsListing from "./components/LoginsListing";
import SignupDetail from "./components/SignupDetail";
import SignupListing from "./components/SignupListing";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
 <>
 <Routes>
 <Route path="signup" element= {<SignupListing/>}> </Route>
 <Route path="signup/:id" element= {<SignupDetail/>}> </Route>
 {/* <LoginsListing/> */}
 </Routes>
 </>
  );
}

export default App;
