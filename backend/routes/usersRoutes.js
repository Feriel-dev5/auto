const mongoose = require("mongoose");
const express = require("express");

const { createuser, createinspecteur,createadmin,inscription, connexion,reinitialiserMotDePasse, nouveauMotDePasse} = require("../Controlers/client.controlers");
const { getInspection, getInspectionValide, getInspectionRefuse, getInspectionEncours, } = require("../Controlers/inspection.controller");
const router = express.Router();

router.get("/",(req,res)=>{
    return res.status(200).send({message : new Date()} )
})
router.post("/api/createuser", createuser);
router.post("/api/createinspecteur", createinspecteur);
router.post("/api/admin", createadmin);
router.post("/api/inscription", inscription);
router.post("/api/connexion", connexion);
router.post("/api/reinitialiser", reinitialiserMotDePasse);
router.post("/api/nouveaumotdepasse", nouveauMotDePasse);

router.get("/api/getInspection",getInspection)
router.get("/api/getInspectionApprouve",getInspectionValide)
router.get("/api/getInspectionAssignée",getInspectionRefuse)
router.get("/api/getInspectionAssignée",getInspectionEncours)


module.exports = router;