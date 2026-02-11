import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    // 1. Check if Key exists
    if (!apiKey) {
      return NextResponse.json({ reply: "DEBUG ERROR: API Key is missing from .env.local" });
    }

    // 2. Call Gemini
// Use the modern stable endpoint and model
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

const response = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ 
      parts: [{ text: message }] 
    }],
  }),
});

    const data = await response.json();

    // 3. If Google returns an error, send it to the chat screen
    if (data.error) {
      return NextResponse.json({ reply: `GOOGLE API ERROR: ${data.error.message}` });
    }

    // 4. Success path
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return NextResponse.json({ reply: botReply });

  } catch (error) {
    return NextResponse.json({ reply: `SERVER CRASH: ${error.message}` });
  }
}