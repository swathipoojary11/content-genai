// "use client";
// import saveContent from "../lib/saveContent";
// import {auth } from "../firebase";
// export default function SaveButton({output,form})
// {
//     if(!form.output) return null;
//     async function handleSave(){
//         try{
//             const user =auth.currentUser;
//             if(!user) throw new Error("User not authenticated");
//             const result = await saveContent(form,user.uid);
//             if(result.success)
//             {
//                 alert("Content saved successfully");
//             }
//         }catch(error){
//             alert("Error saving content: " + error.message);
//         }
//     }
//     return (
//         <button onClick={handleSave}
//         className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
//             Save Content
//         </button>
//     )
// }
"use client";
import {auth } from "../firebase";

export default function SaveButton({ form }) {
  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return alert("Please login");

    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.uid,
        contentType: form.contentType,
        platform: form.platform,
        tone: form.tone,
        prompt: form.prompt,
        output: form.output,
      }),
    });

    alert("Saved to Library!");
  };

  return (
    <button
      onClick={handleSave}
      className="bg-green-600 text-white px-6 py-2 rounded-xl mt-4"
    >
      Save Content
    </button>
  );
}