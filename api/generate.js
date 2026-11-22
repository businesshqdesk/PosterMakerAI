export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: "AI is not configured. Add OPENAI_API_KEY in Vercel project settings." });

  const prompt = String(req.body?.prompt || "").trim().slice(0, 1200);
  if (!prompt) return res.status(400).json({ error: "Please describe the poster you want." });

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        temperature: 0.7,
        max_tokens: 350,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "developer",
            content: "Act as a professional advertising art director. Return only a JSON object with business, headline, offer, contact, template, palette. template must be one of launch,sale,food,event,beauty,tech. palette must be one of violet,sunset,ocean,earth,mono. Create short, high-impact poster copy and choose the closest layout and palette. Never include markdown."
          },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(502).json({ error: "The AI provider could not complete this request. Please try again." });
    }

    const raw = JSON.parse(data.choices?.[0]?.message?.content || "{}");
    const allowedTemplates = ["launch", "sale", "food", "event", "beauty", "tech"];
    const allowedPalettes = ["violet", "sunset", "ocean", "earth", "mono"];
    const clean = value => String(value || "").trim().slice(0, 90);

    return res.status(200).json({
      business: clean(raw.business),
      headline: clean(raw.headline),
      offer: clean(raw.offer),
      contact: clean(raw.contact),
      template: allowedTemplates.includes(raw.template) ? raw.template : "launch",
      palette: allowedPalettes.includes(raw.palette) ? raw.palette : "violet"
    });
  } catch (error) {
    return res.status(500).json({ error: "Could not generate a design. Please try again." });
  }
}