async function getGeminiResponse(userMessage) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Debug: This will show in your terminal (not browser)
    if (!apiKey) {
      console.error("ERROR: API Key is missing!");
      return "Config error: API Key missing.";
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // Check if the API returned an error object
    if (data.error) {
      console.error("Gemini API Error:", data.error.message);
      return `API Error: ${data.error.message}`;
    }

    // Safely navigate the response object
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    return "The AI returned an empty response (possibly blocked by safety filters).";
  } catch (e) {
    console.error("Fetch Exception:", e);
    return "Failed to reach the AI server.";
  }
}