import React from 'react'
import './Nav.css'
import { assets } from '../../assets/assets'

const NavBar = () =>{
    return(
        <div className='navbar'>
            <div className='left'>
                <img src={assets.gemini_icon}/>
                <p className='gemini-title'>Gemini</p>
            </div>
            <div className='right'>
                <button className='try-gemini'>Try Gemini</button>
            </div>
        </div>
    )
}

export default NavBar