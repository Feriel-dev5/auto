const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { allUsers: Clientcr } = require("../models/models"); // ici
router.post("/register", async (req, res) => {
  try {
    const { nom, email, motDePasse, telephone, adresse } = req.body;
    const existing = await Clientcr.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email déjà utilisé" });
    const hashedPassword = await bcrypt.hash(motDePasse, 10);
    const nouveau = new Clientcr({
      nom,
      email,
      motDePasse: hashedPassword,
      telephone,
      adresse,
    });
    await nouveau.save();
    res.status(201).json({ message: "Utilisateur enregistré avec succès" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    console.log("Tentative de connexion pour:", email); // ici

    const user = await Clientcr.findOne({ email });
    if (!user) {
      console.log("Utilisateur non trouvé:", email); // ici
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    console.log("Utilisateur trouvé:", user.nom); // ici

    const match = await bcrypt.compare(motDePasse, user.motDePasse);
    if (!match) {
      console.log("Mot de passe incorrect pour:", email); // ici
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "your-secret-key-default",
      {
        expiresIn: "1h",
      },
    );

    console.log("Connexion réussie pour:", email); // ici

    // ici
    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: {
        id: user._id,
        nom: user.nom,
        email: user.email,
        telephone: user.telephone,
      },
    });
  } catch (err) {
    console.error("Erreur lors de la connexion:", err); // ici
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});

module.exports = router;
