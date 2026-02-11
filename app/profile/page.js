"use client";
import { useAuth } from "../core/Authcontext";
import { useState } from "react";
import { db, auth } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user, profileData, loading } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState("");
      const [profileName,setProfileName]=useState("");
    const router = useRouter();

    if (loading) return <p>Loading...</p>;
    if (!user) { router.push("/login"); return null; }

    // UPDATE: Change Name
    const handleUpdate = async () => {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, { name: newName });
        setIsEditing(false);
        alert("Profile updated!");
    };

    // DELETE: Remove Account
    const handleDeleteAccount = async () => {
        if (confirm("Are you sure? This will delete all your data forever.")) {
            try {
                // Delete from Firestore
                await deleteDoc(doc(db, "users", user.uid));
                // Delete from Auth
                await deleteUser(auth.currentUser);
                router.push("/signup");
            } catch (error) {
                alert("Please re-login to delete your account for security.");
            }
        }
    };

    return (
        <div className="p-10 max-w-2xl mx-auto text-center">
                 
            {/* Profile Avatar Circle */}
            <div className="w-32 h-32 bg-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-xl">
                {profileData?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <h1 className="text-3xl font-bold mb-2">{profileData?.name}</h1>
            <p className="text-gray-500 mb-8">{user.email}</p>

            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 space-y-4">
                {isEditing ? (
                    <div className="flex flex-col gap-3">
                        <input 
                            className="p-3 rounded-xl border border-purple-300 outline-none"
                            placeholder="New Name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <button onClick={handleUpdate} className="flex-1 bg-green-500 text-white p-3 rounded-xl font-bold">Save</button>
                            <button onClick={() => setIsEditing(false)} className="flex-1 bg-gray-400 text-white p-3 rounded-xl font-bold">Cancel</button>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={() => { setIsEditing(true); setNewName(profileData.name); }}
                        className="w-full bg-purple-800 text-white p-4 rounded-2xl font-bold hover:bg-purple-900 transition-all"
                    >
                        Edit Profile Name
                    </button>
                )}

                <button 
                    onClick={handleDeleteAccount}
                    className="w-full text-red-600 font-bold p-4 border-2 border-red-100 rounded-2xl hover:bg-red-50 transition-all"
                >
                    Delete Account Permanently
                </button>
            </div>
        </div>
    );
}