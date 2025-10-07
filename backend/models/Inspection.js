const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  marque: { type: String, required: true },
  modele: { type: String, required: true },
  annee: { type: Number, required: true },
  immatriculation: { type: String, required: true },
});

const localisationSchema = new mongoose.Schema({
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
  pays: { type: String, required: true },
});

const inspectionSchema = new mongoose.Schema({
  vehicule: { type: vehiculeSchema, required: true },
  localisation: { type: localisationSchema, required: true },
  besoinsSpecifiques: { type: String },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  dateDemande: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Inspection || mongoose.model("Inspection", inspectionSchema);
