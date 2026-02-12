"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useAuth } from "../core/Authcontext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";

 
import { doc, getDoc } from "firebase/firestore";
export default function DashboardPage() {
  const { user, loading } = useAuth();
  //im adding profile local state
  const [profileName, setProfileName] = useState("");
  const router = useRouter();
  useEffect(
    () => {
      // if (!loading && !user) {
      if (!loading && (!user || !user.emailVerified)) {
        alert("please verify your email first");
        router.push("/login");
      }
      //im adding if for username fetching from bfirebase firestore

      const fetchUserData = async () => {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileName(docSnap.data().name);
          }
        }
      };

      fetchUserData();
    }, // till here
    [user, loading, router],
  );
  if (loading) return <p>Loading...</p>;
  if (!user) return null;
  return (
    <div className="min-h-screen overflow-x-hidden bg-white w-full    ">
      <Navbar />
      {/*hero section  */}
      <div className="flex flex-col  bg-purple-100 rounded-3xl w-full h-auto md:h-[500px]  items-center justify-center m-auto p-3 mt-3 ">
        <div className=" text-3xl md:text-5xl font-bold text-purple-900 ">
          Welcome ,{profileName || "user"}  to KRISP Dashboard
        </div>
        <div className="md:text-7xl text-4xl font-bold text-purple-700 mt-8">
          AI-Powered Content Creation & Publishing
        </div>
        <div className="md:text-3xl font-semibold text-purple-500 mt-8">
          Generate, manage, and auto-publish content using AI
        </div>
      </div>
      <div className="flex flex-col  md:flex-row bg-purple-100 rounded-3x w-full md:w-[80%]     justify-center mt-20  md:mt-40 p-3    ">
        <img
          src="https://cdn.prod.website-files.com/5ce10a4d0b5f0b560c22e756/667edcffb8e2be1ef70d2fc8_best-ai-website-generator.webp"
          className="md:w-1/2   "
        />
        <div className="flex flex-col  w-full md:w-1/2 flex-wrap text-2xl text-purple-800 md:p-15">
          <span className="font-bold   ">GenCO-Content generative AI</span>
          Empower your brand with instant, high-converting copy. Our AI engine
          analyzes your target audience to generate tailored blog posts, social
          media captions, and business strategies in seconds—eliminating
          writer's block and scaling your output without the extra overhead.
          <button
            className="h-[50px] md:w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/generateContent`);
            }}
          >
            Get started
          </button>
        </div>
      </div>
      <div className="flex  flex-col  md:flex-row bg-purple-100 rounded-3xl  w-full md:w-[80%]  h-auto justify md:ml-80  mt-30 p-3 ">
        <div className="flex flex-col w-1/2 flex-wrap  text-purple-800 justify-center ">
          <span className="font-bold  text-3xl md:mb-4">AutoPilot</span>
          <p className="text-2xl ">
            Put your content strategy on autopilot. Bridge the gap between
            creation and publication by scheduling your AI-generated posts
            across multiple platforms. Set your schedule once, and let KRISP AI
            handle the timing, formatting, and delivery while you focus on
            growing your business
          </p>
          <button
            className="h-[50px] w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 md:m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/scheduler`);
            }}
          >
            Get started
          </button>

          <img
            src="https://cdn.prod.website-files.com/5ce10a4d0b5f0b560c22e756/667edcffb8e2be1ef70d2fc8_best-ai-website-generator.webp"
            className=" h-full hidden md:block "
          />
        </div>
      </div>
      <div className="flex flex-row bg-purple-100 rounded-3xl md:w-[70%] h-[500px]    mt-20 flex-wrap">
        <div className=" font-bold    bg-[url('https://www.shutterstock.com/shutterstock/videos/3834761799/thumb/4.jpg?ip=x480')] bg-cover bg-center rounded-3xl w-full justify-center items-center flex text-4xl md:text-6xl  text-purple-600 ">
          {" "}
          AI calender
          <button
            className="h-[50px] w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/calender`);
            }}
          >
            Get started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
  //
}
