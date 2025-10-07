const express = require('express');
const router = express.Router();
const { inscrireUtilisateur } = require('../controllers/userController');
const verifyToken = require('../../../../../backend/middleware/authMiddleware.js');

router.post('/register', inscrireUtilisateur);
router.get('/me',verifyToken,async(req,res)=>
res.status(200).send({"message":123}))
module.exports = router;


// supprimer