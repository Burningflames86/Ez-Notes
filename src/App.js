
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Notes from "./components/Notes";
function App() {

  

  return (
    <>
    

      <Routes>
      <Route/>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/notes" element={<Notes/>}/>
      </Routes>
      
    </>
  );
}

export default App;
