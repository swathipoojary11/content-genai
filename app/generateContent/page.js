"use client";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { db } from "../lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function ContentGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileName,setProfileName]=useState("");
  // NEW: State to track which history item is being viewed
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "history"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const savedItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHistory(savedItems);
    });
    return () => unsubscribe();
  }, []);

  const generateAIContent = async () => {
    if (!prompt.trim()) return;
    setSelectedItem(null); // Clear viewing mode when generating new stuff
    setLoading(true);
    setGeneratedContent("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `Generate professional content for: ${prompt}` }),
      });
      const data = await res.json();
      setGeneratedContent(data.reply);
    } catch (err) {
      setGeneratedContent("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  const saveToHistory = async () => {
    if (!generatedContent) return;
    try {
      await addDoc(collection(db, "history"), {
        title: prompt,
        content: generatedContent,
        createdAt: serverTimestamp(),
      });
      setGeneratedContent(""); // Clear after saving
      setPrompt("");
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  return (
 <div>
     <Navbar/>
           <div className="flex flex-col  bg-purple-100 rounded-3xl w-full h-auto md:h-[500px]  items-center justify-center m-auto p-3 mt-3 ">
        <div className=" text-3xl md:text-5xl font-bold text-purple-900 ">
          Welcome ,{profileName || "user"}to KRISP Dashboard
        </div>
        <div className="md:text-7xl text-4xl font-bold text-purple-700 mt-8">
          AI-Powered Content Creation & Publishing
        </div>
        <div className="md:text-3xl font-semibold text-purple-500 mt-8">
          Generate, manage, and auto-publish content using AI
        </div>
      </div>
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans mt-0.5">
      
      {/* SIDEBAR */}
      <div className="w-1/4 bg-purple-100 border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="font-bold text-xl text-purple-700">My Archive</h2>
          <button 
            onClick={() => {setSelectedItem(null); setGeneratedContent("");}}
            className="text-black text-sm font-bold"
          >
            + New
          </button>
        </div>
        <div className="flex-1 bg-purple-100 overflow-y-auto p-4 space-y-3">
          {history.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)} // SET SELECTED ITEM ON CLICK
              className={`p-4 rounded-xl border cursor-pointer bg-white  hover:bg-purple-400
                 ${
                selectedItem?.id === item.id ? "border-purple-500 bg-blue-50" : "bg-purple-100 border-gray-100"
              }`}
            >
              <p className=" font-bold text-gray-800 truncate">{item.title}</p>
              <p className=" text-gray-400 mt-1">
                {item.createdAt?.toDate().toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col p-10 overflow-y-auto">
        
        {/* VIEWING SAVED CONTENT */}
        {selectedItem ? (
          <div className="max-w-3xl mx-auto w-full  slide-in-from-bottom-4 duration-300">
            <button onClick={() => setSelectedItem(null)} className="mb-4 text-gray-500 hover:text-black">← Back to Generator</button>
            <h1 className="text-4xl font-black mb-4">{selectedItem.title}</h1>
            <div className="prose prose-lg max-w-none bg-white p-10 rounded-3xl shadow-xl border">
              <ReactMarkdown>{selectedItem.content}</ReactMarkdown>
            </div>
          </div>
        ) : (
          /* GENERATOR MODE */
          <div className="max-w-3xl mx-auto w-full">
            <h1 className="text-4xl font-black mb-8 italic tracking-tighter text-purple-600">Content Studio.</h1>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-8">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-4 border-none text-xl bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none h-40 resize-none"
                placeholder="What should we build today?"
              />
              <button 
                onClick={generateAIContent}
                disabled={loading}
                className="mt-6 w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all disabled:bg-gray-300"
              >
                {loading ? "Warming up Gemini..." : "Generate Content"}
              </button>
            </div>

            {generatedContent && (
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-purple-500 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-blue-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase">Ready to Review</span>
                  <button onClick={saveToHistory} className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:bg-gray-800 transition-transform active:scale-95">
                    Save to My History
                  </button>
                </div>
                <div className="prose prose-blue max-w-none">
                  <ReactMarkdown>{generatedContent}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
     
    </div>
    <Footer/> 
</div>
  );
}