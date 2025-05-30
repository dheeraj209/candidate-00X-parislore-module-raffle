const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/create-checkout-session", (req, res) => {
  res.json({ sessionId: "test_session_123" });
});

app.post("/api/stripe-webhook", (req, res) => {
  res.json({ success: true, tickets: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
