import { addDoc ,collection,serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { NextResponse } from "next/server";
import ContentType from "../generate/contenttype";
export default async function saveContent(form,userId){
    try{
        await addDoc(collection(db,"contents"),{
            userId:userId,
            contentType:form.contentType,
            platform:form.platform,
            tone:form.tone,
            prompt:form.prompt,
            output:form.output,
            createdAt:serverTimestamp(),
            updateAt:serverTimestamp(),
        });
        return {sucess:true};

    }catch(error){
        return {success:false,error:error.message};
    }
}