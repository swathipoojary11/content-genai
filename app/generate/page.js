"use client";
import { useState } from "react";
import { useAuth } from "../core/Authcontext";
import { saveContent } from "../core/content";


export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [type, setType] = useState("Post");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, platform, type }),
      });

      const data = await res.json();
      setOutput(data.result?.text || "No output returned");
    } catch (err) {
      setOutput("Error generating content");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-xl p-6 space-y-6 shadow-lg">

        <h1 className="text-2xl font-bold text-center text-violet-400">
          AI Content Generator
        </h1>

        <div className="flex gap-4">
          <select
            className="w-1/2 bg-zinc-800 p-3 rounded-lg outline-none"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option>Instagram</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
            <option>Blog</option>
          </select>

          <select
            className="w-1/2 bg-zinc-800 p-3 rounded-lg outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Post</option>
            <option>Caption</option>
            <option>Ad Copy</option>
            <option>Article</option>
          </select>
        </div>

        <textarea
          placeholder="Describe what content you want..."
          className="w-full h-32 bg-zinc-800 p-4 rounded-lg outline-none resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="w-full bg-violet-600 hover:bg-violet-700 transition p-3 rounded-lg font-semibold"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {output && (
          <div className="bg-zinc-800 p-4 rounded-lg whitespace-pre-line">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}