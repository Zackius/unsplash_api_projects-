import GetImage from "./Components /GetImage";
import Navbar from "./Components /Navbar";
import SingIn from "./Components /SignIn";
import SignUp from "./Components /SignUp";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
<div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" ></Route>
        <Route path="getimage" element={<GetImage />}></Route>
        <Route path="signin" element={<SingIn />}></Route>
        <Route path="signup" element={ <SignUp/>}></Route>
      </Routes>
      
</div>
      

  );
}

export default App;
