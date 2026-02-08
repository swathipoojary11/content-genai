 "use client";
  export default function Output({output})
{
if(!output) return null;
return (
    <textarea className="mt-8 w-full h-60 p-4 rounded-3xl bg-white"
    value={output}
    readOnly/>
)
}
