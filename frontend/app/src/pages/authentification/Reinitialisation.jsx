import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import signupIllustration from "../../assets/signup-illustration.jpg";

export default function Reinitialisation() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Veuillez entrer un email.");
      return;
    }

    // ✅ Envoi l’email vers /nouveau
    navigate("/nouveau", { state: { email } });
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
          <p className="text-xl font-medium">Renseignez votre email</p>
          <p className="mt-2 text-sm">
            pour recevoir un{" "}
            <span className="text-yellow-400 font-semibold">nouveau mot de passe</span>
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src={signupIllustration} alt="Illustration" className="w-60 h-auto" />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px]">
          <h2 className="text-center font-semibold text-lg mb-4 text-[#0F1A4D]">
            Réinitialisez votre mot de passe
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-[#00BCD4] rounded-full"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSend}>
            <div className="relative">
              <input
                type="email"
                placeholder="Adresse E-mail"
                className="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="absolute right-2 top-2.5 text-gray-400" />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F1A4D] text-white py-2 rounded-md text-sm font-semibold"
            >
              Envoyer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full border border-[#0F1A4D] text-[#0F1A4D] py-2 rounded-md text-sm font-semibold"
            >
              Annuler
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleCancel}
          className="border border-[#0F1A4D] text-[#0F1A4D] px-4 py-1 rounded-md"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}