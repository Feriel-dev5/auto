// controllers/inspection.controller.js
const Inspection = require("../models/Inspection");
const inspectionSchema = require("../models/Inspection");

const createInspection = async (req, res) => {
  try {
    console.log("Données reçues dans la requête :", req.body);
    // const {nom,address,jj}=req.body;
    const newInspection = new Inspection(req.body);
    await newInspection.save();
    res.status(201).json({
      message: "Demande enregistrée avec succès",
      demande: newInspection,
    });
  } catch (error) {
    console.error(" Erreur lors de l'enregistrement :", error);
    res.status(500).json({
      message: "Erreur lors de l'enregistrement",
      error: error.message,
    });
  }
};
// je suis nour
const getInspection = async (req, res) => {
  // const {element}=req.body;
  const element = "en_attente";
  try {
    const want = await inspectionSchema.find({ status: element });

    res.status(200).json({ message: want });
  } catch (error) {}
};

const getInspectionValide = async (req, res) => {
  // const {element}=req.body;
  const element = "validé";
  try {
    const want = await inspectionSchema.find({ status: element });

    res.status(200).json({ message: want });
  } catch (error) {}
};

const getInspectionRefuse = async (req, res) => {
  // const {element}=req.body;
  const element = "refusé";
  try {
    const want = await inspectionSchema.find({ status: element });

    res.status(200).json({ message: want });
  } catch (error) {}
};

const getInspectionEncours = async (req, res) => {
  // const {element}=req.body;
  const element = "encours";
  try {
    const want = await inspectionSchema.find({ status: element });

    res.status(200).json({ message: want });
  } catch (error) {}
};

module.exports = {
  createInspection,
  getInspection,
  getInspectionValide,
  getInspectionRefuse,
  getInspectionEncours,
};
