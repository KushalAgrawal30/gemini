import React from "react";
import './student.css'


function Student(){
    return(
        <div className="student-discount">
            <div className="spacer"></div>
                <div className="content">
                    <h2>Are you a student?</h2>
                    <p>See if you're eligible for our <span>student discount.</span></p>
                    <button>Get Started</button>
                </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Student