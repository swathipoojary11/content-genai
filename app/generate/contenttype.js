 "use client";
  export default function ContentType({form,setForm})
{
    return(
        
    <div className="flex flex-col  md:flex-row justify-center w-full  md:w-1/2 gap-9 ">
          <button onClick={()=>
            setForm({...form, contentType:"media",platform:""})
          
        }
            
            className="bg-purple-700 text-white p-3 rounded-xl font-semibold "
          >
            Media
          </button>

           <button onClick={()=>
            setForm({...form, contentType:"business",platform:""})
          
        }
            
            className="bg-purple-700 text-white p-3 rounded-xl font-semibold "
          >
            Business
          </button>
        </div>
        
)
}
 