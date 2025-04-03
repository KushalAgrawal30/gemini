import React from "react";
import Gemini from "./gemini.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage";

const App = () => {
  return(
    <>
    <Routes>
      <Route path='/gemini' element={<Gemini/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App