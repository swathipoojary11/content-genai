 "use client";
 export default  function Tone({form ,setForm})
{
      if(!form.contentType) return null;
      return(
        <select className="mt-8 p-3 rounded-xl w-full"
        
        onChange={(event)=>
            setForm({...form,tone:event.target.value})
        }>
            <option value="">Select tone</option>
            
            <option> Professional</option> 
            <option>Friendly</option>
            <option>Humorous</option>
            <option>Formal</option>
            <option>Casual</option>
            </select>
            );
            }
           