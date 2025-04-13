import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Main = () => {
    
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const userName = user.name?.split(" ",2).join(" ")
    console.log(user)
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <div className="right">
                    <button onClick={handleLogout} className="logout"><FontAwesomeIcon icon={faRightFromBracket}/></button>
                    <img src={user.picture} referrerPolicy="no-referrer" alt=""/>
                </div>
            </div>

            <div className="main-container">
                {!showResult
                ?<>
                    <div className="greet">
                        <p><span>Hello, {userName}.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                </>
                :<>
                <div className="result">
                    <div className="result-title">
                        <img src={user?.picture} referrerPolicy="no-referrer" alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr /> 
                        </div>
                        :<p style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div>
                </div>
                </>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => {setInput(e.target.value)}} value={input} type="text" placeholder="Ask Gemini"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => {onSent()}} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main