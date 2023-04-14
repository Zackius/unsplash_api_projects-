import GetImage from "./Components /GetImage";
import Navbar from "./Components /Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route} from "react-router-dom"
import Hero from "./Components /Hero";


function App() {
  return (
    <div>
      <Navbar />
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
