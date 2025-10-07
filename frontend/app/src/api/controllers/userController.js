const User = require('../models/userModel');


const inscrireUtilisateur = async (req, res) => {
  try {
    const { nom, email, motDePasse } = req.body;

    const utilisateurExistant = await User.findOne({ email });
    if (utilisateurExistant) {
      return res.status(400).json({ message: 'Email déjà utilisé.' });
    }

    const nouvelUtilisateur = new User({ nom, email, motDePasse });
    await nouvelUtilisateur.save();

    res.status(201).json({ message: 'Inscription réussie', user: nouvelUtilisateur });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

module.exports = { inscrireUtilisateur };
