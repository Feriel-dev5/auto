const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    telephone: { type: Number },
    adresse: { type: String },
    dateInscription: { type: Date, default: Date.now },
    role: { type: String, default: "clients" },
  },
  { collection: "clients" }
);

const inspecteurSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    specialite: { type: String },
    disponibilite: { type: Boolean, default: true },
  },
  { collection: "inspecteurs" }
);

const inspectionSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: false,
    },
    vehicule: {
      marque: { type: String, required: true },
      modele: { type: String, required: true },
      immatriculation: { type: String, required: true },
      annee: { type: Number, required: true },
    },
    // ✅ AJOUT DU CHAMP LOCALISATION
    localisation: {
      codePostal: { type: String, required: true },
      ville: { type: String, required: true },
      pays: { type: String, required: true },
    },
    // ✅ AJOUT DU CHAMP BESOINS SPÉCIFIQUES
    besoinsSpecifiques: { type: String },
    description: { type: String },
    status: {
      type: String,
      enum: ["en_attente", "Valide", "refuse", "encours"],
      default: "en_attente",
    },
    dateDemande: { type: Date, default: Date.now },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    inspecteurId: { type: mongoose.Schema.Types.ObjectId, ref: "Inspecteur" },
    dateInspection: { type: Date },
    rapport: { type: String },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    cin: { type: String, required: true }, // ✅ Changé en String pour correspondre au frontend
    telephone: { type: String, required: true }, // ✅ Changé en String pour correspondre au frontend
  },
  { collection: "inspections" }
);

module.exports = {
  allUsers: mongoose.model("Client", Users),
  Inspecteurschm: mongoose.model("Inspecteur", inspecteurSchema),
  Inspection1: mongoose.model("Inspection", inspectionSchema),
};

const createinspecteur = async (req, res) => {
  try {
    const inspecteur = new Inspecteurschm(req.body);
    await inspecteur.save();
    res
      .status(201)
      .json({ message: "Inspecteur créé avec succès", inspecteur });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'inspecteur",
      error: error.message,
    });
  }
};