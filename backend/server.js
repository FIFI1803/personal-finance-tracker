const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Simple request logger (diagnostic)
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url, req.headers["user-agent"] || "");
  next();
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5050;
// bind explicitly to 0.0.0.0 to listen on all interfaces
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));