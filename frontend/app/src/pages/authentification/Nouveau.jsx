import React, { useState, useEffect } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import signupIllustration from "../../assets/signup-illustration.jpg";
import API from "../../api/api";

export default function Nouveau() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (motDePasse !== confirmationMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await API.post("/api/nouveaumotdepasse", {
        email,
        motDePasse,
      });

      alert("Mot de passe modifié avec succès !");
      navigate("/connexion");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur lors de la mise à jour du mot de passe.");
    }
  };

  const handleCancel = () => {
    navigate("/connexion");
  };

  return (
    <div className="min-h-screen w-full flex relative bg-white">
      <div className="absolute top-6 left-6 z-50 text-3xl font-bold tracking-wide">
        <span className="text-white">L</span>
        <span className="text-[#F7941D]">o</span>
        <span className="text-white">go</span>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/mechanic.jpg')" }}
      >
        <div className="bg-[#161F52]/90 w-full h-full px-12 py-20 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            NOUVEAU <br /> MOT DE PASSE
          </h2>
          <p className="text-base">
            Changer votre{" "}
            <span className="text-[#F7941D] font-semibold">mot de passe</span>
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src={signupIllustration} alt="Illustration" className="w-60 h-auto" />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px]">
          <h2 className="text-center font-semibold text-lg mb-4 text-[#0F1A4D]">
            Définir un nouveau mot de passe
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-[#00BCD4] rounded-full"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full border-b border-gray-300 pl-2 py-2 bg-gray-100 text-gray-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nouveau mot de passe"
                className="w-full border-b border-gray-300 pl-2 pr-8 py-2 focus:outline-none"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
              <div
                className="absolute right-2 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirmer votre nouveau mot de passe"
                className="w-full border-b border-gray-300 pl-2 pr-8 py-2 focus:outline-none"
                value={confirmationMotDePasse}
                onChange={(e) => setConfirmationMotDePasse(e.target.value)}
                required
              />
              <div
                className="absolute right-2 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F1A4D] text-white py-2 rounded-md text-sm font-semibold"
            >
              Valider
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleCancel}
          className="border border-[#0F1A4D] text-[#0F1A4D] px-4 py-1 rounded-md text-sm"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}