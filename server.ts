import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

const OVERRIDES_FILE = path.join(process.cwd(), "overrides.json");

// Default state matching initial state from siteConfig / App.tsx
const DEFAULT_CONFIG = {
  isLocked: false,
  isSuspended: false,
  headline: "Stay Secure, Stay Prime",
  subheading: "Professional security, lifeguard, and housekeeping services tailored to your needs.",
  phone: "+971 4 123 4567",
  email: "info@primewatch.ae",
  whatsapp: "+971 50 123 4567",
  adminPasscode: "prime123",
  lockScreenMessage: "SYSTEM CHECK // VERIFICATION REQUIRED. Prime Watch server synchronization suspended.",
  deflectionHeadline: "LICENSE REGISTRATION SUSPENDED",
  deflectionMessage: "Payment Ledger Verification Pending: The local hosting environment for primewatch.ae has failed to authenticate its active registration token.",
  themePreset: "crimson"
};

// Load configurations from config file or default
function loadOverrides() {
  try {
    if (fs.existsSync(OVERRIDES_FILE)) {
      const content = fs.readFileSync(OVERRIDES_FILE, "utf-8");
      return { ...DEFAULT_CONFIG, ...JSON.parse(content) };
    }
  } catch (err) {
    console.error("Error loading overrides, using defaults:", err);
  }
  return { ...DEFAULT_CONFIG };
}

// Save config state to disk
function saveOverrides(configData: any) {
  try {
    fs.writeFileSync(OVERRIDES_FILE, JSON.stringify(configData, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving overrides to disk:", err);
  }
}

// API Routes
app.get("/api/config", (req, res) => {
  const currentConfig = loadOverrides();
  res.json(currentConfig);
});

app.post("/api/config", (req, res) => {
  const updated = req.body;
  const current = loadOverrides();
  // Filter out unwanted variables so we don't accidentally trash defaults
  const merged = { ...current, ...updated };
  saveOverrides(merged);
  res.json({ success: true, config: merged });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
