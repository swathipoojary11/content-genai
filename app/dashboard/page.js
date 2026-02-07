"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useAuth } from "../core/Authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);
  if (loading) return <p>Loading...</p>;
  if (!user) return null;
  return (
    <div className="min-h-screen  bg-white w-full    ">
      <Navbar />
      {/*hero section  */}
      <div className="flex flex-col  bg-purple-100 rounded-3xl w-full h-[500px]  items-center justify-center m-auto p-3 mt-3 ">
        <div className="text-5xl font-bold text-purple-900 ">
          Welcome to KRISP Dashboard
        </div>
        <div className="text-7xl font-bold text-purple-700 mt-8">
          AI-Powered Content Creation & Publishing
        </div>
        <div className="text-3xl font-semibold text-purple-500 mt-8">
          Generate, manage, and auto-publish content using AI
        </div>
      </div>
      <div className="flex flex-row bg-purple-100 rounded-3xl w-[80%]  h-[500px]   justify-center  mt-40 p-3   ">
        <img
          src="https://cdn.prod.website-files.com/5ce10a4d0b5f0b560c22e756/667edcffb8e2be1ef70d2fc8_best-ai-website-generator.webp"
          className="w-1/2 "
        />
        <div className="flex flex-col w-1/2 flex-wrap text-2xl text-purple-800 p-15">
          <span className="font-bold ">GenCO-Content generative AI</span>
          Empower your brand with instant, high-converting copy. Our AI engine
          analyzes your target audience to generate tailored blog posts, social
          media captions, and business strategies in seconds—eliminating
          writer's block and scaling your output without the extra overhead.
          <button
            className="h-[50px] w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/generate`);
            }}
          >
            Get started
          </button>
        </div>
      </div>
      <div className="flex flex-row bg-purple-100 rounded-3xl w-[80%]  h-[500px]   justify ml-80  mt-40 p-3 ">
        <div className="flex flex-col w-1/2 flex-wrap  text-purple-800 justify-center ">
          <span className="font-bold  text-3xl mb-4">AutoPilot</span>
          <p className="text-2xl">
            Put your content strategy on autopilot. Bridge the gap between
            creation and publication by scheduling your AI-generated posts
            across multiple platforms. Set your schedule once, and let KRISP AI
            handle the timing, formatting, and delivery while you focus on
            growing your business
          </p>
          <button
            className="h-[50px] w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/poster`);
            }}
          >
            Get started
          </button>

          <img
            src="https://cdn.prod.website-files.com/5ce10a4d0b5f0b560c22e756/667edcffb8e2be1ef70d2fc8_best-ai-website-generator.webp"
            className=" h-full "
          />
        </div>
      </div>
      <div className="flex flex-row bg-purple-100 rounded-3xl w-[70%] h-[500px]    m-auto  mt-[150px] flex-wrap">
     <div className=" font-bold    bg-[url('https://www.shutterstock.com/shutterstock/videos/3834761799/thumb/4.jpg?ip=x480')] bg-cover bg-center rounded-3xl w-full justify-center items-center flex text-6xl  text-purple-600 "> Content Library 
      <button
            className="h-[50px] w-[200px] border-2 rounded-2xl bg-purple-800  text-white font-bold p-3 m-10 text-sm"
            type="button"
            onClick={(event) => {
              router.push(`/poster`);
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
