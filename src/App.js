import GetImage from "./Components /GetImage";
import Navbar from "./Components /Navbar";
import SignIn from "./Components /SignIn";
import SignUp from "./Components /SignUp";
import {Routes, Route} from "react-router-dom"
import Hero from "./Components /Hero";
import Footer from "./Components /Footer";


function App() {
  return (
<div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/"  element={<Hero/>}></Route>
        <Route path="getimage" element={<GetImage />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
      </Routes>

      
</div>
      

  );
}

export default App;
