const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const authRoutes = require('./routes/authRoutes');
const protectedRoute = require('./routes/protectedRoute');
const { middleware1 } = require("./middleware/middleware");
const router = require("./routes/usersRoutes");
const inspectionRoutes = require("./routes/inspection.routes");
const app = express();
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware");
const origin = [
  "http://localhost:5173",
  "https://localhost:5173",
];
 app.use('/auth', authRoutes);
 app.use('/protected', protectedRoute);
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });
app.use(cors({ credentials: true, origin }));
app.use(express.json());
app.use(router);

router.get("/api/me",verifyToken, async (req, res)=>{
  const UserModel = require("./models/User");
  console.log(req.userId);
  
  const result =await UserModel.find()
    return res.status(200).send({data : result})
})
app.use(inspectionRoutes);
  const token = jwt.sign({ userId: "686cfb331ec6ac73a486684a", role:"CLIENT" }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: "1h",
    });
    console.log(token);

const Port = 3000;
const dBConnect = "mongodb://localhost:27017/expertiseAutoDb";
const options = {useNewUrlParser: true,useUnifiedTopology: true,};
(async () => {
  try {
    await mongoose.connect(dBConnect, options);
    console.log("Connecté à MongoDB");

    app.listen(Port, "0.0.0.0", () => {
      console.log(` Serveur disponible sur http://localhost:${Port}`);
    });
  } catch (error) {
    console.log(" Erreur de connexion à la base de données :", error);
}
})();