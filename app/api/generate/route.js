// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const body = await req.json();
//   const { contentType, platform, prompt, tone, length } = body;

//   const geminiPrompt = `
// Generate ${platform} ${contentType} content.
// Tone: ${tone}
// Length: ${length}

// Return JSON with title and content only.

// User request: ${prompt}
// `;

//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: geminiPrompt }] }]
//       })
//     }
//   );

//   const data = await response.json();
//   const text = data.candidates[0].content.parts[0].text;

//   return NextResponse.json({ result: text });
// }
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, platform, type } = await req.json();
  const API_KEY = process.env.GEMINI_API_KEY;

  const response = await fetch("https://api.gemini.com/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `Create a ${type} for ${platform}:\n${prompt}`,
      max_tokens: 300,
    }),
  });

  const data = await response.json();

  console.log("Gemini API Response:", data); // 👈 Add this

  // Adjust based on actual response
  // For now, send back whole data
  return NextResponse.json({ result: data });
}