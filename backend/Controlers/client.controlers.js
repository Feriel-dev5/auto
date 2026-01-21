const bcrypt = require("bcrypt");
// const { Clientcr, Inspecteurschm, Admin } = require("../models/models");
// const { Users } = require("../models/models");*
const { allUsers } = require("../models/models");

const jwt = require("jsonwebtoken");

const createuser = async (req, res) => {
  try {
    const useri = ({ nom, email, motDePasse, telephone, adresse, role } =
      req.body);
    const user = new allUsers(useri);
    await user.save();
    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la création de l'utilisateur",
        error: error.message,
      });
  }
};

const createadmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json({ message: "Administrateur créé avec succès", admin });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la création de l'administrateur",
        error: error.message,
      });
  }
};

const inscription = async (req, res) => {
  const { nom, email, motDePasse, telephone, adresse, role } = req.body;

  try {
    const existingClient = await allUsers.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }
    if (telephone.length > 8) {
      res
        .status(501)
        .json({ message: "le numero de telephone est trop long " });
      return;
    }
    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const nouveauClient = new allUsers({
      nom,
      email,
      motDePasse: hashedPassword,
      telephone,
      adresse,
      role,
    });

    await nouveauClient.save();

    res
      .status(201)
      .json({ message: "Inscription réussie", client: nouveauClient });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

const connexion = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const client = await allUsers.findOne({ email });
    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }

    const motDePasseValide = await bcrypt.compare(
      motDePasse,
      client.motDePasse
    );
    if (!motDePasseValide) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    //token
    const token = jwt.sign(
      { userId: client._id, role: client.role },
      process.env.JWT_SECRET || "your-secret-key",
      {
        expiresIn: "1h",
      }
    );
    console.log(token);

    res.status(200).json({
      message: "Connexion réussie token",
      token,
      client,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur serveur", error: { message: error.message } });
  }
};

const reinitialiserMotDePasse = async (req, res) => {
  const { email } = req.body;

  try {
    const client = await allUsers.findOne({ email });

    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }
    res
      .status(200)
      .json({
        message: "Email valide, vous pouvez changer le mot de passe",
        email,
      });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

const nouveauMotDePasse = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const utilisateur = await allUsers.findOne({ email });

    if (!utilisateur) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);
    utilisateur.motDePasse = hashedPassword;

    await utilisateur.save();

    res.json({ message: "Mot de passe mis à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

module.exports = {
  createuser,
  //createinspecteur,
  createadmin,
  inscription,
  connexion,
  reinitialiserMotDePasse,
  nouveauMotDePasse,
};
