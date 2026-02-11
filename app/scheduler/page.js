"use client";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc, orderBy, serverTimestamp } from "firebase/firestore";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function AutoPoster() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: "", platform: "LinkedIn", time: "" });
  const [profileName,setProfileName]=useState("");
  // 1. READ: Real-time Recent Posted History
  useEffect(() => {
    const q = query(collection(db, "schedules"), orderBy("scheduledAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  // 2. CREATE: Schedule a new post
  const handleSchedule = async () => {
    await addDoc(collection(db, "schedules"), {
      ...newPost,
      scheduledAt: new Date(newPost.time),
      status: "pending",
      createdAt: serverTimestamp()
    });
    setNewPost({ content: "", platform: "LinkedIn", time: "" });
  };

  // 3. DELETE: Remove a post
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "schedules", id));
  };

  // 4. UPDATE: Edit a post (Simple example: change status)
  const handleEdit = async (id, newContent) => {
    await updateDoc(doc(db, "schedules", id), { content: newContent });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white w-full" >
        <Navbar/>
              <div className="flex flex-col  bg-purple-100 rounded-3xl w-full h-auto md:h-[500px]  items-center justify-center m-auto p-3 mt-3 ">
        <div className=" text-3xl md:text-5xl font-bold text-purple-900 ">
          Welcome ,{profileName || "user"}to KRISP Auto pilot
        </div>
        <div className="md:text-7xl text-4xl font-bold text-purple-700 mt-8">
          AI-Powered Content Creation & Publishing
        </div>
        <div className="md:text-3xl font-semibold text-purple-500 mt-8">
          Generate, manage, and auto-publish content using AI
        </div>
      </div>
    <div className="p-10 max-w-5xl mx-auto ">
    
      <h1 className="text-3xl font-bold mb-6 text-purple-700 mt-4">Auto Pilot</h1>
      
      {/* Create Post Form */}
      <div className=" p-6 rounded-xl border-2 bg-purple-50 border-purple-400 shadow mb-10 border">
        <textarea 
          className="w-full shadow-purple-200 p-3 rounded-lg mb-4 bg-white " 
          placeholder="What to post?" 
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
        />
        <div className="flex md:flex-row flex-col gap-4 ">
          <select 
            className="border border-purple-500 p-2 rounded-xl  bg-white"
            onChange={(e) => setNewPost({...newPost, platform: e.target.value})}
          >
            <option>LinkedIn</option>
            <option>Twitter</option>
            <option>Facebook</option>
          </select>
          <input 
            type="datetime-local" 
            className="border border-purple-500 p-2 rounded-xl  bg-white"
            onChange={(e) => setNewPost({...newPost, time: e.target.value})}
          />
          <button onClick={handleSchedule} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold">Schedule Post</button>
        </div>
      </div>

      {/* Recent Posted History (Read/Update/Delete) */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-700">History & Pending</h2>
        {posts.map(post => (
          <div key={post.id} className="bg-purple-50  border-purple-600 d p-4 rounded-lg shadow border flex justify-between items-center">
            <div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${post.status === 'posted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {post.status.toUpperCase()}
              </span>
              <p className="mt-2 font-medium">{post.content}</p>
              <p className="text-xs text-gray-400">{post.platform} • {post.scheduledAt?.toDate().toLocaleString()}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(post.id, prompt("New content:", post.content))} className="text-blue-500 text-sm">Edit</button>
              <button onClick={() => handleDelete(post.id)} className="text-red-500 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}