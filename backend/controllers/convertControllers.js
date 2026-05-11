const axios = require("axios");

exports.convertCode = async (req, res) => {

  const { code, fromLang, toLang } = req.body;

  // LENGTH LIMIT
  if (!code || code.length > 5000) {

    return res.status(400).json({
      error: "Code is too large. Maximum 5000 characters allowed."
    });

  }

  const prompt = `
Convert this code from ${fromLang} to ${toLang}.
Return ONLY code.
No explanation.

${code}
`;

  try {

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
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

    console.log("FULL ERROR:");
    console.log(err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });

  }
};