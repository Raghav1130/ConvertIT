const axios = require("axios");

exports.convertCode = async (req, res) => {
  const { code, fromLang, toLang } = req.body;

  const prompt = `
Convert this code from ${fromLang} to ${toLang}.
Return ONLY code. No explanation.

${code}
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const output = response.data.choices[0].message.content;

    res.json({ output });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Conversion failed" });
  }
};