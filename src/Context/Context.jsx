import { createContext, useState } from "react";
import {GoogleGenerativeAI} from "@google/generative-ai"


export const Context = createContext()
const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [allChats, setAllChats] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [modelName, setModelName] = useState(["gemini-2.0-flash","2.0 Flash"])

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 65536,
        responseModalities: [
        ],
        responseMimeType: "text/plain",
    };


    const run = async (prompt, base64Image = null) => {
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({model: `${modelName[0]}`})
        console.log(model)
        setSelectedImage(null)
        try{
            if(base64Image){
                const imagePart = {
                    inlineData: {
                        mimeType: "image/jpeg",
                        data: base64Image.replace(/^data:image\/(png|jpe?g);base64,/, "")
                    }
                }

                const result = await model.generateContent([
                    {text:prompt},
                    imagePart
                ])
                return result.response.text()
            }

            const chat = model.startChat({
                generationConfig,
                history: [],
            });

            const result = await chat.sendMessage(prompt);
            const text = result.response.text();
            return text;
        }catch(error){
            console.log("Error",error);
        } 
    }


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
        if(input==="" && selectedImage==null){
            return;
        }
        setResultData("")
        if(selectedImage){
            setAllChats(chats => [...chats, {userImage:selectedImage, align:"right"}])
        }
        if(input!==""){
            setAllChats(chats => [...chats, {userPrompt:input, align:"right"}])
        }
        setLoading(true)
        setShowResult(true)
        let response;
        //console.log(`Input:${input}`)
        setRecentPrompt(input)
        if(selectedImage){
            response = await run(input, selectedImage)
            console.log(response)
            response = escapeHtml(response)
        }else{
            response = await run(input)
            response = escapeHtml(response)
        }
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
        setAllChats(chats => [...chats, {aiResponse:newResponse, align:"left"}])
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        allChats,
        newChat,
        selectedImage,
        setSelectedImage,
        onSent,
        recentPrompt,
        setRecentPrompt,
        modelName,
        setModelName,
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