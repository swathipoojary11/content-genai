"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Login, createAccount } from "../core/auth";
export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("password not matching ");
      return;
    }
    try{

   // await createAccount(email, password);
   //im addin  this code const 
   const userCredential= await createAccount(email, password);
   await setDoc(doc(db,"users",userCredential.user.uid),{
    name:name,email:email,createdAt:new Date()
   });
   //
    router.push("/login");
  }catch(error){
    alert(error.message);
  }
  };
  return (
    <div className="bg-white flex flex-col  md:flex-row justify-center items-center min-h-screen w-full p-3">
      <img
        src="https://plus.unsplash.com/premium_photo-1664304409780-6d31241e9058?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3dsfGVufDB8fDB8fHww"
        className="w-[100%] h-[700px] rounded-3xl"
      />

      <div className="flex flex-col mt-[2] h-1/2 w-full p-10  ">
        <div className="font-bold font-serif text-4xl md:text-5xl text-purple-500 p-6">
          Create your Account{" "}
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border-2 border-purple-500  md:m-[40px] h-15 rounded-3xl p-2 "
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border-2 border-purple-500  md:m-[40px] h-15 rounded-3xl p-2 mt-5 "
        />
        <input
          type="password"
          placeholder="xxxxxx"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border-2  md:m-[40px] border-purple-500  h-15 rounded-3xl p-2 mt-5"
        />
        <input
          type="password"
          placeholder="confirm password "
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="border-2 md:m-[40px] border-purple-500  h-15 rounded-3xl p-2 mt-5"
        />
        <div className="flex flex-row justify-between">
          <button
            onClick={handleSignup}
            className="text-yellow-400  bg-purple-800 w-full md:w-[200px] p-4 mt-5">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
