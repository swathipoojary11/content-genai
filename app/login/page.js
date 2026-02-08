"use client";
import {useRouter} from "next/navigation";
import { useState } from "react";
import { Login, createAccount, logout, resetEmail } from "../core/auth";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="overflow-x-hidden bg-white flex  flex-col md:flex-row justify-center items-center min-h-screen w-full p-3">
      <img
        src="https://plus.unsplash.com/premium_photo-1664304409780-6d31241e9058?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3dsfGVufDB8fDB8fHww"
        className=" w-[100%] h-[700px] rounded-3xl"
      />
      
      <div className="flex flex-col mt-[2] h-1/2 w-full p-10  ">
        <div className="font-bold font-serif text-5xl text-purple-500 p-6">Login to your account </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border-2 border-purple-500  md:m-[40px] h-15 rounded-3xl p-2 "
        />
        <input
          type="password"
          placeholder="xxxxxx"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border-2 md:m-[40px] border-purple-500  h-15 rounded-3xl p-2 mt-5"
        />
      
      <div className="flex flex-row justify-between">
      <button
       onClick={async()=>{
        try{
          await Login(email,password);
          router.push("/dashboard");
        }catch(error){
          alert(error.message);
        }
       }}
        className="text-yellow-400  bg-purple-800 w-[200px] p-4 mt-5"
      >
        Login
      </button>
      <button
        onClick={async (event) => {
          console.log(email, password);
          await resetEmail(email, password);
        }}
        className="text-black bg-red-500 w-[200px] p-4 mt-5"
      >
        Forgot password
      </button>
      
      </div>
      </div>
    </div>
  );
}
