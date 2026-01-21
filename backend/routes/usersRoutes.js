const mongoose = require("mongoose");
const express = require("express");

const {
  createuser,
  createinspecteur,
  createadmin,
  inscription,
  connexion,
  reinitialiserMotDePasse,
  nouveauMotDePasse,
} = require("../Controlers/client.controlers");
const {
  getInspection,
  getInspectionValide,
  getInspectionRefuse,
  getInspectionEncours,
  createInspection,
} = require("../Controlers/inspection.controller");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({ message: new Date() });
});
router.post("/api/createuser", createuser);
//router.post("/api/createinspecteur", createinspecteur);
router.post("/api/admin", createadmin);
router.post("/api/inscription", inscription);
router.post("/api/connexion", connexion);
router.post("/api/reinitialiser", reinitialiserMotDePasse);
router.post("/api/nouveaumotdepasse", nouveauMotDePasse);

router.get("/api/getInspection", getInspection);
router.get("/api/inspection", getInspection);
router.get("/api/getInspectionValide", getInspectionValide);
router.get("/api/getInspectionRefuse", getInspectionRefuse);
router.get("/api/getInspectionEncours", getInspectionEncours);

router.post("/api/inspection", createInspection);

module.exports = router;
