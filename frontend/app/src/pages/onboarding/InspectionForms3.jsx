import React, { useState } from "react";
import voitureForm from "../../assets/form-illustration.png";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Inspection3 = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    } else if (nom.length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }

    if (!prenom.trim()) {
      newErrors.prenom = "Le prénom est obligatoire";
    } else if (prenom.length < 2) {
      newErrors.prenom = "Le prénom doit contenir au moins 2 caractères";
    }

    if (!cin.trim()) {
      newErrors.cin = "Le CIN est obligatoire";
    } else if (cin.length !== 8) {
      newErrors.cin = "Le CIN doit contenir exactement 8 caractères";
    }

    if (!telephone.trim()) {
      newErrors.telephone = "Le téléphone est obligatoire";
    } else if (!/^\d{8}$/.test(telephone)) {
      newErrors.telephone = "Le téléphone doit contenir exactement 8 chiffres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    localStorage.setItem(
      "inspection_step3",
      JSON.stringify({ nom, prenom, cin, telephone })
    );
    navigate("/Inspection4");
  };

  return (
    <div className="min-h-screen bg-[#161F52] text-white pt-24 px-6 pb-10 flex flex-col items-center">
      <nav className="w-full bg-white text-[#0C1E5B] px-12 py-4 flex items-center fixed top-0 left-0 z-50 shadow-md">
        <div className="text-3xl font-bold tracking-wide">
          <span>L</span>
          <span className="text-[#F7941D]">o</span>
          <span>go</span>
        </div>
        <div className="flex items-center space-x-8 ml-auto">
          <span className="flex items-center space-x-2">
            <i className="fa fa-phone" />
            <span>06 78 95 24 21</span>
          </span>
          <button
            className="bg-teal-400 text-[#0C1E5B] font-semibold px-4 py-1.5 rounded-lg shadow-sm"
            onClick={() => navigate("/specialiste")}
          >
            Devenez spécialiste
          </button>
          <i className="fa fa-user text-lg" />
        </div>
      </nav>

      <h2 className="text-3xl font-bold mb-20 text-center flex items-center gap-3">
        <i className="fas fa-user text-yellow-400 text-2xl" />
        Informations personnelles
      </h2>

      <div className="flex items-center space-x-20 mb-10">
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">01</span>
          <span className="text-yellow-400">Informations sur le véhicule</span>
        </div>
        <div className="h-0.5 bg-yellow-500 w-20" />
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">02</span>
          <span className="text-yellow-400">Localisation du véhicule</span>
        </div>
        <div className="h-0.5 bg-yellow-500 w-20" />
        <div className="flex flex-col items-center text-sm">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">03</span>
          <span className="text-yellow-400">Informations personnelles</span>
        </div>
        <div className="h-0.5 bg-gray-500 w-20"></div>
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-gray-400 mb-1" />
          <span>04</span>
          <span>Des besoins spécifiques ?</span>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-[#202A60] p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-user text-yellow-400 text-2xl" />
          Informations personnelles
        </h2>

        <div className="flex flex-col space-y-5">
          <div>
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
                if (errors.nom) setErrors({ ...errors, nom: null });
              }}
              className={`w-full p-4 rounded-lg bg-[#1A235A] border ${
                errors.nom ? "border-red-500" : "border-gray-500"
              } text-white placeholder-gray-400`}
            />
            {errors.nom && (
              <p className="text-red-400 text-xs mt-1">{errors.nom}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
                if (errors.prenom) setErrors({ ...errors, prenom: null });
              }}
              className={`w-full p-4 rounded-lg bg-[#1A235A] border ${
                errors.prenom ? "border-red-500" : "border-gray-500"
              } text-white placeholder-gray-400`}
            />
            {errors.prenom && (
              <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="CIN"
              maxLength="8"
              value={cin}
              onChange={(e) => {
                setCin(e.target.value);
                if (errors.cin) setErrors({ ...errors, cin: null });
              }}
              className={`w-full p-4 rounded-lg bg-[#1A235A] border ${
                errors.cin ? "border-red-500" : "border-gray-500"
              } text-white placeholder-gray-400`}
            />
            {errors.cin && (
              <p className="text-red-400 text-xs mt-1">{errors.cin}</p>
            )}
            <p className="text-gray-400 text-xs mt-1">
              {cin.length}/8 caractères
            </p>
          </div>

          <div>
            <input
              type="tel"
              placeholder="Téléphone"
              maxLength="8"
              value={telephone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setTelephone(value);
                if (errors.telephone) setErrors({ ...errors, telephone: null });
              }}
              className={`w-full p-4 rounded-lg bg-[#1A235A] border ${
                errors.telephone ? "border-red-500" : "border-gray-500"
              } text-white placeholder-gray-400`}
            />
            {errors.telephone && (
              <p className="text-red-400 text-xs mt-1">{errors.telephone}</p>
            )}
            <p className="text-gray-400 text-xs mt-1">
              {telephone.length}/8 chiffres
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-8">
          <button onClick={() => navigate(-1)} className="text-sm text-yellow-400">
            Retour
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#FDC654] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inspection3;