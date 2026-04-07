import React from 'react'
import './Nav.css'

const NavBar = ({login}) =>{
    if(true) return 0;
    return(
        <div className='navbar'>
            <div className='left'>
                <img src={assets.gemini_icon}/>
                <p className='gemini-title'>Gemini</p>
            </div>
            <div className='right'>
                <button onClick={login} className='try-gemini'>Try Gemini</button>
            </div>
        </div>
    )
}

