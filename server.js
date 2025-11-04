const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "vcf-web" folder
app.use(express.static(path.join(__dirname, "vcf-web")));

// Serve index.html for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "vcf-web", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
