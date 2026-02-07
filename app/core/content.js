import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function saveContent(userId, content, type, platform) {
  await addDoc(collection(db, "content"), {
    userId,
    content,
    type,
    platform,
    createdAt: serverTimestamp(),
    status: "Draft"
  });
}