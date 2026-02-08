  "use client";
export default function Prompt({form,setForm})
            {
                if(!form.tone) return null;
                return (
                    <textarea className="mt-6 w-full  bg-white h-40 p-4 rounded-2xl "
                    placeholder="Describe the content you want ...."
                    onChange={(event)=>
                        setForm({...form,prompt:event.target.value})
                    }
                    />
                )
            }