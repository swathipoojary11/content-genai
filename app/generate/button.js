 "use client";
 export default function Buttongen({form, onGenerate, loading})

            {
                if(!form.prompt) return null;
                return(
                        <button className="bg-purple-700 text-white p-3 rounded-2xl font-semibold hover:bg-purple-800 m-auto mt-5" onClick={onGenerate} disabled={loading}>
                            {loading ? "Generating..." : "Generate"}
                        </button>
                    );
      
}