import React, { useContext, useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faPlus } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {

    const [extented, setExtented] = useState(false)

    const {onSent, newChat, prevPrompts, setRecentPrompt} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return(
        <div className="sidebar">
            <div className="top">
                <button onClick={() => setExtented(prev => !prev)} className="menu"><FontAwesomeIcon icon={faBars} /></button>
                <div onClick={() => newChat()} className="new-chat">
                    <button><FontAwesomeIcon icon={faPlus} /></button>
                    {extented?<p>New Chat</p>:null}
                </div>
                {extented?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return(
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p key={index}>{item.slice(0,18)}..</p>
                            </div>
                        )
                    })} 
                </div>
                :null}
            </div>
            <div className="bottom">
                <div className="bottom-icon recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extented?<p>Help</p>:null}
                </div>
                <div className="bottom-icon recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extented?<p>Activity</p>:null}
                </div>
                <div className="bottom-icon recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extented?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar