import React from "react";
import './Overview.css'

const Overview = () => {
    return(
        <div className="overview">
            <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/947f1b9611fdfa47a73730a334bccb716507f610.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            <h1 className="gemini-title">Hi, Gemini</h1>
            <h1 className="gemini-text">Meet the <span>everyday AI </span>assistant from Google</h1>
            <button className="try-button">Try it now</button>
        </div>
    )
}

export default Overview