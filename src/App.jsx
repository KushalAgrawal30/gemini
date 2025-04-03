import React, { Children } from "react";
import Gemini from "./gemini.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./homepage";

const App = () => {

  const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token")
    console.log(children)
    return token ? children : <Navigate to="/" replace/>;
  }

  return(
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/gemini' element={<PrivateRoute><Gemini/></PrivateRoute>}/>
    </Routes>
    </>
  )
}

export default App