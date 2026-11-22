export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: "AI generation is not configured yet." });
  const prompt = String(req.body?.prompt || "").trim().slice(0, 1200);
  if (!prompt) return res.status(400).json({ error: "Please enter a design description." });
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "You are a professional graphic design art director. Return only JSON with keys business, headline, offer, contact, template, palette. template must be one of launch,sale,food,event,beauty,tech. palette must be one of violet,sunset,ocean,earth,mono. Create concise, compelling poster copy from the user brief. No markdown." },
          { role: "user", content: prompt }
        ]
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(502).json({ error: data.error?.message || "AI provider request failed." });
    const result = JSON.parse(data.choices?.[0]?.message?.content || "{}");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Could not generate a design. Please try again." });
  }
}