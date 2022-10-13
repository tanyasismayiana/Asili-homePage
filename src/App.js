import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Test from "./Components/Test";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path ='/' element={<Navbar/>} />
      <Route exact path ='/Test' element={<Test/>} />
      </Routes>
      </Router>


    // <React.Fragment>
    //   <Navbar />
    // </React.Fragment>
  );
}


export default App;
