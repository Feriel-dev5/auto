import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import signupIllustration from "../../assets/signup-illustration.jpg";
import API from "../../api/api";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmMotDePasse, setConfirmMotDePasse] = useState("");
  const [role,setRole]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (motDePasse !== confirmMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await API.post("/api/inscription", {
        nom,
        email,
        motDePasse,
        telephone,
        adresse: "",
        role
        
      });
    


      alert("Inscription réussie !");
      console.log(res);
    } catch (error) {
      console.error("Erreur :", error);
      alert(error.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen w-full flex relative">
      <Link to="/" className="absolute top-6 left-6 z-50 text-3xl font-bold tracking-wide">
        <span className="text-white">L</span>
        <span className="text-[#F7941D]">o</span>
        <span className="text-white">go</span>
      </Link>

      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/mechanic.jpg')" }}
      >
        <div className="bg-[#161F52]/90 w-full h-full px-12 py-20 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold">
            Bienvenue à <br /> Nom
          </h2>
          <p className="mt-6 text-lg font-medium">Inscrivez - Vous</p>
          <p className="mt-2 text-sm">
            Vous avez déjà un compte Nom ?{" "}
            <Link to="/connexion" className="text-yellow-400 font-semibold">
              Se connecter
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src={signupIllustration} alt="Illustration" className="w-60 h-auto" />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px]">
          <h2 className="text-center font-semibold text-lg mb-4 text-[#0F1A4D]">
            Inscription
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-[#00BCD4] rounded-full"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Nom et Prénom"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
              <FaUser className="absolute left-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Adresse E-mail"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="absolute left-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="+33   Numéro de téléphone"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <FaPhoneAlt className="absolute left-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
{/* le role */}
                 <input
                type="text"
                placeholder="entrer votre role"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none text-red-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
{/* le role */}

              <IoMdEyeOff className="absolute right-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirmer votre mot de passe"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={confirmMotDePasse}
                onChange={(e) => setConfirmMotDePasse(e.target.value)}
                required
              />
              

              

              <IoMdEyeOff className="absolute right-2 top-2.5 text-gray-400" />
            </div>

            <div className="text-xs text-gray-500">
              <label className="flex items-start gap-2">
                <input type="checkbox" required />
                <span className="mt-1">
                  J’accepte les{" "}
                  <a href="#" className="text-cyan-500">
                    conditions d’utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="text-cyan-500">
                    politique de confidentialité
                  </a>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F1A4D] text-white py-2 rounded-lg mt-2"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <button className="border border-[#0F1A4D] text-[#0F1A4D] px-4 py-1 rounded-md">
          Annuler
        </button>
      </div>
    </div>
  );
}
