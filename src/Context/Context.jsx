import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext()
const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index, next) => {
        setTimeout(function(){
            setResultData(prev => prev+next)
        },75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    function escapeHtml(str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt!==undefined){
            setRecentPrompt(prompt)
            response = await run(prompt)
        }else{
            setRecentPrompt(input)
            setPrevPrompts(prev => [...prev, input])
            response = await run(input)
        }
        response = escapeHtml(response)
        let responseArray = response.split("**")
        let newResponse = "";
        for(let i=0; i<responseArray.length; i++){
            if(i === 0 || i%2!==1){
                newResponse += responseArray[i]
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResonseArray = newResponse.split(" ")
        for(let i=0;i<newResonseArray.length;i++){
            delayPara(i,newResonseArray[i]+" ")
        }
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        newChat,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(<Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>)

}

export default ContextProvider