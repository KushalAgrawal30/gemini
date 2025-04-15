import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";


const Gemini = () => {
    const boxStyle = {
        display: 'flex',
        flexDirection:'row',
        backgroundColor:'#1b1c1d'
    };

    useEffect(() =>{

        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = ""; 
        };
    }, [])


    return(
        <div style={boxStyle}>
        <Sidebar/>
        <Main/>
        </div>
    )
}

export default Gemini