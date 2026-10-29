
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "TDMU Notes API"
  });
});

// API Hello Cloud
app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "Hello Cloud!",
    course: "Thuc hanh Dien toan dam may",
    platform: "GitHub Codespaces",
    runtime: "Node.js 22"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
