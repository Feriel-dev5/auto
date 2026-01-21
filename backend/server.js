const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config(); // ici
const authRoutes = require("./routes/authRoutes");
const protectedRoute = require("./routes/protectedRoute");
const router = require("./routes/usersRoutes");
const inspectionRoutes = require("./routes/inspection.routes");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware");

const app = express();

// CORS
const origin = ["http://localhost:5173", "https://localhost:5173"];
app.use(cors({ credentials: true, origin }));

// JSON
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);
app.use(router);
app.use(inspectionRoutes);

// Route protégée exemple
router.get("/api/me", verifyToken, async (req, res) => {
  const UserModel = require("./models/User");

  const result = await UserModel.find();
  return res.status(200).send({ data: result });
});

// ici - token de test retiré

// Connexion Mongo + start serveur
const DB_URL = "mongodb://localhost:27017/expertiseAutoDb";
const PORT = 3000;

(async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connecté à MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Serveur disponible sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("❌ Erreur de connexion à la base de données :", error);
  }
})();
