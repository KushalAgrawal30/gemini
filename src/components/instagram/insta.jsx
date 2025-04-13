import React from "react";
import './insta.css'

function Insta(){
    return(
        <div className="instagram">
            <div className="headline">
                <h2>Gemini on Instagram</h2>
            </div>
            <div className="layout">
                <div className="card">
                    <img src="https://lh3.googleusercontent.com/WiV4-hCUYQF0VnU2eLE5JkxI3ADTMu1tXPzMbwZDRfYRryHeWEoNUixAIU351kqY_h8H97gNSRYR1At095UDUnq1gIDhLvCGKRlm=e365-pa-nu-s0"/>
                    <p>Decode confusing parking signs with Gemini Live on #Pixel9. Just open the Gemini app and add a photo for instant help.</p>
                </div>
                <div className="card">
                    <img src="https://lh3.googleusercontent.com/IPZIJ-jkmNcc8vBMih1qvzw4MVxOG7pP6bf4ex2kcs43B9YoWCu4Z8bSqeJMtbrVsY-I7uHgFRgktWyUdiJnuVbmZeosmaGU_7Zp=e365-pa-nu-s0"/>
                    <p>Audio Overviews turns your required reading into a conversation between AI hosts, so who better to give you the lowdown on how to use this new feature than the AI hosts themselves?</p>
                </div>
                <div className="card">
                    <img src="https://lh3.googleusercontent.com/CpLciGmAXdOQyYUdSPYnLH1Ha52TRYvBry4g3j5xEESM_z58lhsEvgZZoIjGOtVsBYzUUxnw6uAudD5ynPrBMGjOZwkgxc5-wNuV7w=e365-pa-nu-s0"/>
                    <p>You don’t have to be a coding expert to bring your app idea to life when you get some help from Canvas✨</p>
                </div>
            </div>
            <button>View all</button>
        </div>
    )
}

export default Insta