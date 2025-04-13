import React from "react";
import { assets } from '../../assets/assets'
import './footer.css'

function Footer(){
    return(
        <div className="footer">

            <div className="layout">
                <div className="gemini-logo">
                    <img src={assets.gemini_icon} alt="" />
                </div>

                <div className="gemini-feature card">
                    <div className="headline">
                        <h2>What Gemini can do</h2>
                    </div>
                    <ul>
                        <li>Gemini Live</li>
                        <li>Image generation</li>
                        <li>Deep Research</li>
                        <li>Persnolisation</li>
                        <li>Canvas</li>
                        <li>Apps</li>
                        <li>Gems</li>
                        <li>Long Context</li>
                        <li>Gemini Advanced</li>
                    </ul>
                </div>

                <div className="about card">
                    <div className="headline">
                        <h2>About Gemini</h2>
                    </div>
                    <ul>
                        <li>Overview</li>
                        <li>Our approach</li>
                        <li>Policy guidelines</li>
                        <li>Latest news</li>
                    </ul>
                </div>
                
                
                <div className="media card">
                    <div className="headline">
                        <h2>Social Media</h2>
                    </div>
                    <ul>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Github</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer