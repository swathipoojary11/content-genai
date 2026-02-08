"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContentType from "./contenttype";
import Platform from "./platform";
import Tone from "./toneslect";
import Prompt from "./prompts";
import Buttongen from "./button";
import Output from "./output";
import SaveButton from "./savebutton";

export default function GenerateAi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    contentType: "",
    platform: "",
    tone: "",
    prompt: "",
    output: "",
  });
  //         const handleSubmit = async () => {
  //   const res = await fetch('/api/chat', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ prompt: userInput })
  //   });
  //   const data = await res.json();
  //   setResponse(data.choices[0].text);
  // };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType: form.contentType,
          platform: form.platform,
          tone: form.tone,
          prompt: form.prompt,
        }),
      });
      const data = await response.json();
      console.log("FUll ai response:", data);
      if (data.success) {
        setForm((prev) => ({
          ...prev,
          output: data.output,
        }));
      } else {
        setError(data.error || "Failed to generate content");
        alert("error:" + data.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <div className="flex flex-col  bg-purple-100 rounded-3xl w-full h-auto md:h-[500px]  items-center justify-center m-auto p-3 mt-3 ">
        <div className=" text-3xl md:text-5xl font-bold text-purple-900 ">
          Welcome to KRISP Dashboard
        </div>
        <div className="md:text-7xl text-4xl font-bold text-purple-700 mt-8">
          AI-Powered Content Creation & Publishing
        </div>
        <div className="md:text-3xl font-semibold text-purple-500 mt-8">
          Generate, manage, and auto-publish content using AI
        </div>
      </div>
      {/*Content gen Ai */}
      <div className="flex flex-col h-auto md:w-3/4 m-auto bg-purple-100 rounded-3xl mt-40 p-3 items-center justify-center">
        <div className="text-4xl text-purple-700 p-2 m-auto font-bold ">
          Content Generator
        </div>
        <ContentType form={form} setForm={setForm} />
        <Platform form={form} setForm={setForm} />
        <Tone form={form} setForm={setForm} />
        <Prompt form={form} setForm={setForm} />
        <Buttongen form={form} onGenerate={handleGenerate} loading={loading} />
        <Output output={form.output} />
        <SaveButton form={form} />
      </div>
      <Footer />
    </div>
  );
}
