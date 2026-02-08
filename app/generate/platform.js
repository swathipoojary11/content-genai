 "use client";
 export default function Platform({form,setForm}){
    if(!form.contentType) return null;
    return(//form.platfirm is used for rendering 
        <select className="mt-8 p-3 rounded-xl w-full" value={form.platform} onChange={(event)=>
            setForm({...form,platform:event.target.value})
        }>
            <option value="">Select</option>
            {form.contentType==="media"&&(<>
            <option> Twitter</option> 
            <option>Instagram</option>
            <option>Linked in</option>
            <option>Facebook</option>
            </>)}
             {form.contentType==="business"&&(<>
            <option> Blog</option> 
            <option>Email</option>
            <option>Website Content</option>
            <option>Ad copy</option>
            </>)}
        </select>
    )
}
  
  
