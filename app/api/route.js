// export default async function handler(req, res) {
//     const { contentType, platform, tone, prompt } = req.body;
//     const response = await fetch('https://api.openai.com/v1/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.OPENAI_KEY}`
//     },
//     body: JSON.stringify({
//       model: 'text-davinci-003',
//       prompt,
//       max_tokens: 150
//     })
//   });

//   const data = await response.json();
//   res.status(200).json(data);
// }



//import ContentType from "@/app/generate/contenttype";
//import { db } from "@/app/firebase";
//import {auth }  from "@/app/firebase";
import { NextResponse } from "next/server";
export async function POST (request){
    try{
        const body =await request.json();
        const {contentType,platform,tone,prompt}=body;
        const finalPrompt=`Create a ${contentType} content.
        Platform: ${platform}
        Tone: ${tone}
        user request: ${prompt}`;

      const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method :'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    contents:[
                        {
                            parts:[{text:finalPrompt}],
                        },
                    ],
                    // contentType:form.contentType,
                    // platform:form.platform,
                    // tone:form.tone,
                    // prompt:form.prompt,
                    // userId:user.uid,
                    
                }),
            }
        
        );
//           if (!response.ok) {
//   const errText = await response.text();
//   console.error("Gemini API error:", errText);
//   throw new Error("Gemini API failed");
// }
    
    const data =await response.json();
    if(data.error){
        return NextResponse.json({
            success:false,error:data.error.message},{status:400});
        
    }
    const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!aiText) {
    return NextResponse.json({ success: false,
         error: "AI returned empty response" },
          { status: 500 });
}
    
    // const output=
    // data?.candidates?.[0]?.content?.parts?.[0]?.text ||"no content generated";
    return NextResponse.json({
        success:true,
        output,
    });
}catch(error)
{
    return NextResponse.json(
    
       {success:false, output:error.message},
        {status:500}

    );
}
}