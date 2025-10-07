const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Accès refusé, token manquant" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET|| 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    
    res.status(401).json({ error: "Token invalide" });
  }
}

module.exports = verifyToken;
