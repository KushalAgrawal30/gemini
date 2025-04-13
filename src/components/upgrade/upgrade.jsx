import React from "react";
import './upgrade.css'


function Upgrade(){
    return(
        <div className="upgrade">
            <div className="headline">
                <h2>Upgrade based on your needs</h2>
            </div>
            <div className="layout">

                <div className="upgrade-card">
                    <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/7ece3fc0a47c2ea90e52bb7b1ec8d28985d2b418.svg" alt="" />
                    <div className="content">
                        <h3>Consumer</h3>
                        <p>Via Google One</p>
                    </div>
                </div>

                <div className="upgrade-card">
                    <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/95786168f2288b9f48c11691d1d00425ef0fe5bf.svg" alt="" />
                    <div className="content">
                        <h3>Business</h3>
                        <p>Via Google Workspace</p>
                    </div>
                </div>

                <div className="upgrade-card">
                    <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/8983a1c6ca56391f58f615c819b721cc2935562e.svg" alt="" />
                    <div className="content">
                        <h3>Enterprise</h3>
                        <p>Via Google Cloud</p>
                    </div>
                </div>

                <div className="upgrade-card">
                    <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/adb9adcb1154f5855636cc065d2553fd8e23b714.svg" alt="" />
                    <div className="content">
                        <h3>Consumer</h3>
                        <p>Via Google Workspace</p>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Upgrade