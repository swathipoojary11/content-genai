import {GoogleGenrativeAI} from "@google-ai/generative";
const genAI=new GoogleGenrativeAI(process.env.GEMINI_API_KEY);
export async function generateContent(prompt){
    const model=genAI.getGenerativeModel({model:"gemini-pro"});
    const result=await model.generateContent(prompt);
    return result.response.text();
}

    