import React, { useContext, useEffect, useRef } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket,faImage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Main = () => {
    
    const navigate = useNavigate()

    const bottomRef = useRef(null)
    const fileInputRef = useRef(null);

    const user = JSON.parse(localStorage.getItem("user"))
    const {onSent, setAllChats, modelName, setModelName, allChats, setSelectedImage, selectedImage, showResult, loading, setInput, input} = useContext(Context)

    const userName = user.name?.split(" ",2).join(" ")
    
    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior:"smooth", block: "center" });
    }, [allChats])
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
        setAllChats([])
        window.location.reload();
    }

    const handleImageChange = (e) =>{
        const file = e.target.files[0]
        if(file){
            const reader =  new FileReader()
            reader.onload = () =>{
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemovePreview = () => {
        setSelectedImage(null);
        fileInputRef.current.value = ''; 
    };

    const handleModelImage = (e) =>{
        const array = e.target.value.split(":");
        console.log(array)
        setModelName([array[0], array[1]])
    }

    const handleSent = (e) => {
        e.preventDefault(); 
        onSent();
        fileInputRef.current.value = '';
    }

    return(
        <div className="main">
            <div className="nav">
                <div className="nav-left">
                    <div>
                        <p>Gemini</p>
                        <select onChange={handleModelImage}>
                            <option value="gemini-2.0-flash:2.0 Flash">2.0 Flash</option>
                            <option value="gemini-2.5-pro-exp-03-25:2.5 Pro (experimental)">Gemini Pro 2.5</option>
                            <option value="gemini-1.5-pro:1.5 Pro">Gemini Pro 1.5</option>
                        </select>
                    </div>
                    <p className="model">{modelName[1]}</p>
                    
                </div>
                
                <div className="nav-right">
                    <button onClick={handleLogout} className="logout"><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
                    <img src={user.picture} referrerPolicy="no-referrer" alt=""/>
                </div>
            </div>

            <div className="main-container">
                {!showResult
                ?<>
                    <div className="spacer"></div>
                    
                    <div className="greet">
                        <p><span>Hello, {userName}.</span></p>
                    </div>
                </>
                :<>
                <div className="result">
                    {allChats.map((m,i) => (
                    <div key={i}  className="result-box">
                        <>
                        {m.align == "right" ? 
                            <div className="user-prompts">
                            {m.userPrompt?
                                <div className={`result-title ${m.align}`}>
                                    <p>{m.userPrompt}</p>
                                </div>:
                                <div className={`result-image ${m.align}`}>
                                    <img src={m.userImage} alt="image" />
                                </div>
                            }
                            </div>
                            :<div className={`result-data ${m.align}`}>
                                <img src={assets.gemini_icon} alt="" />
                                
                                <p style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{__html:m.aiResponse}}></p>
                            </div>
                        }
                        </>
                    </div>
                    ))}
                    {loading?
                        <div ref={bottomRef} className="new-response loader">
                            <img src={assets.gemini_icon} alt="" /> 
                            <p>Just a second...</p>
                        </div>
                    :null}
                    <div className="spacer"></div>
                </div>
                </>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        {selectedImage && (
                            <div className="image-preview">
                                <img src={selectedImage} alt="Preview" className="preview-image" />
                                <button className="remove-preview" onClick={handleRemovePreview}><FontAwesomeIcon icon={faXmark} /></button>
                            </div>
                        )}
                        <form onSubmit={handleSent}>
                            <input onChange={(e) => {setInput(e.target.value)}} value={input} type="text" placeholder="Ask Gemini"/>
                            
                            <button type="submit"><img src={assets.send} alt="" /></button>
                            <label>
                                <FontAwesomeIcon  icon={faImage} />
                                <input ref={fileInputRef} onChange={handleImageChange} type="file" accept="image/*" hidden></input>
                             </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main


