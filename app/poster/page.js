"use client"
import {useState} from 'react';
import { URL } from '../constants';

export default function Homeee()
{
        const [query ,setQuery]=useState('')
            const [result,setResult]=useState('')

const askQuestion =async()=> {
    
      const  payload ={
    
        "contents":[{
            "parts":[{"text":query}]
        }]
    };

try{
        let response=await fetch(URL,{
        method:"POST",
        headers:{
"Content-Type":"application/json"
        },
        
        body:JSON.stringify(payload)

       }) ;
       const data = await response.json();

        // Extract the text from the Gemini response structure
        const aiText = data.candidates[0].content.parts[0].text;
        
        // This is the missing piece to show it in your UI!
        setResult(aiText); 
        
        console.log(aiText);
    } catch (error) {
        console.error("Error:", error);
        setResult("Failed to get a response.");
    }
};

     // response =await response.json();

   // console.log(response.candidates[0].content.parts[0].text);
   // }
//}
 

   

    return(
        <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800 text-white '>
      </div>
      <div className='col-span-4 p-10'>
        <div className='container h-110'>
        </div>
        <div className='text-black'>
            {result}
        </div>
        <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-700 flex h-16'>
          <input type="text" className='w-full h-full p-3 outline-none ' placeholder='enter question  'value={query} onChange={(event)=>setQuery(event.target.value)}></input>
          <button onClick={askQuestion}> Ask</button>
        </div>
      </div>
    </div>
    )
}