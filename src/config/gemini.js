import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
 
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(apiKey)
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };
  
  async function run(prompt,base64Image) {
    const imagePart = {
      inlineData: {
        mimeType: "image/jpeg", 
        data: base64Image.replace(/^data:image\/(jpeg|png);base64,/, "")
      }
    }

    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response
    console.log(response.text());
    return response.text()
  }
  
export default run;