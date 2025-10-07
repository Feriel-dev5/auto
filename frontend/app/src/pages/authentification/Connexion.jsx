import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import signupIllustration from "../../assets/signup-illustration.jpg";
import API from "../../api/api";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/connexion", {
        email,
        motDePasse,
      });

      alert("Connexion réussie !");
      console.log(res.client);
      API.setToken(res.token);
      navigate("/"); 
    } catch (error) {
      alert(error.message || "Erreur de connexion");
      console.error(error);
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
          <h2 className="text-4xl font-bold leading-tight">
            Bienvenue à <br /> Nom
          </h2>
          <p className="mt-6 text-lg font-medium">Connectez-vous</p>
          <p className="mt-2 text-sm">
            Vous n’avez pas de compte ?{" "}
            <Link to="/inscription" className="text-yellow-400 font-semibold">
              Inscription
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
            Connexion
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-[#00BCD4] rounded-full"></div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                placeholder="Adresse E-mail"
                className="w-full border-b border-gray-300 pl-10 py-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="absolute right-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full border-b border-gray-300 pl-10 py-2 focus:outline-none"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
              <IoMdEye className="absolute right-2 top-2.5 text-gray-400" />
            </div>
            <div className="text-right text-sm">
              <Link to="/reinitialisation" className="text-cyan-500">
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F1A4D] text-white py-2 rounded-lg mt-2"
            >
              Se connecter
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">Ou</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-3">
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Continuer avec Google</span>
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-3">
              <FaFacebookF size={18} />
              <span className="text-sm font-medium">Continuer avec Facebook</span>
            </button>
          </div>
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