"use client"
export default function Navbar(){
return(
   
<div className="bg-purple-500 display flex flex-col md:flex-row justify-center md:justify-evenly  text-white font-bold ">
        <div className="text-white font-bold text-4xl p-3">KRISP</div>
        <div className="flex flex-col  md:flex-row">
        <button
          type="button"
          className="  mr-[30px] "
          onClick={(event) => {
            router.push(`/`);
          }}
        >
          Home
        </button>
        <button
          type="button"
          className=" mr-[30px] "
          onClick={(event) => {
            router.push(`/create`);
          }}
        >
          Generator
        </button>
        <button
          type="button"
          className=" mr-[30px] "
          onClick={(event) => {
            router.push(`/poster`);
          }}
        >
          Poster
        </button>
        <button
          type="button"
          className=" mr-[30px] "
          onClick={(event) => {
            router.push(`/history`);
          }}
        >
          History
        </button>
        </div>
        <button 
          type="button"
          className=" mr-[30px] "
          onClick={(event) => {
            router.push(`/profile`);
          }}
        > Profile</button>
      </div>

)
}