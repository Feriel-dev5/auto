const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Auto-Expertise');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Connexion à MongoDB réussie');
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' Erreur de connexion MongoDB :', err);
  });