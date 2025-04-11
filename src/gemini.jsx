import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const Gemini = () => {
    const boxStyle = {
        display: 'flex',
        flexDirection:'row'
      };

    return(
        <div style={boxStyle}>
        <Sidebar/>
        <Main/>
        </div>
    )
}

export default Gemini