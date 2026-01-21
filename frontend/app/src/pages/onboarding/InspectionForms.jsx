// ==================== InspectionForms.jsx (Étape 1) ====================
import React, { useState } from "react";
import voitureForm from "../../assets/form-illustration.png";
import { useNavigate } from "react-router-dom";

const Inspection = () => {
  const navigate = useNavigate();
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!marque.trim()) {
      newErrors.marque = "La marque est obligatoire";
    }

    if (!modele.trim()) {
      newErrors.modele = "Le modèle est obligatoire";
    }

    if (!annee) {
      newErrors.annee = "L'année est obligatoire";
    } else {
      const anneeNum = parseInt(annee, 10);
      if (anneeNum < 1900 || anneeNum > 2026) {
        newErrors.annee = "L'année doit être entre 1900 et 2026";
      }
    }

    if (!immatriculation.trim()) {
      newErrors.immatriculation = "L'immatriculation est obligatoire";
    } else if (immatriculation.length < 3) {
      newErrors.immatriculation = "L'immatriculation doit contenir au moins 3 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }

    localStorage.setItem(
      "inspection_step1",
      JSON.stringify({ marque, modele, annee, immatriculation })
    );
    navigate("/Inspection2");
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

      <h2 className="text-3xl font-bold mb-20 text-center flex items-center gap-2">
        <i className="fa fa-edit text-yellow-400" /> Demander mon inspection
      </h2>

      <div className="flex items-center space-x-20 mb-10">
        <div className="flex flex-col items-center text-sm">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">01</span>
          <span className="text-yellow-400">Informations sur le véhicule</span>
        </div>
        <div className="h-0.5 bg-gray-500 w-20"></div>
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-gray-400 mb-1" />
          <span>02</span>
          <span>Localisation du véhicule</span>
        </div>
        <div className="h-0.5 bg-gray-500 w-20"></div>
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-gray-400 mb-1" />
          <span>03</span>
          <span>Informations personnelles</span>
        </div>
        <div className="h-0.5 bg-gray-500 w-20"></div>
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-gray-400 mb-1" />
          <span>04</span>
          <span>Des besoins spécifiques ?</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-[#202A60] p-8 rounded-xl space-y-6">
          <div className="relative">
            <label className="block mb-1 text-gray-300">Marque</label>
            <input
              type="text"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.marque ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={marque}
              onChange={(e) => {
                setMarque(e.target.value);
                if (errors.marque) setErrors({ ...errors, marque: null });
              }}
            />
            <i className="fa fa-bookmark absolute right-3 top-11 text-yellow-400"></i>
            {errors.marque && (
              <p className="text-red-400 text-xs mt-1">{errors.marque}</p>
            )}
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-300">Modèle</label>
            <input
              type="text"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.modele ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={modele}
              onChange={(e) => {
                setModele(e.target.value);
                if (errors.modele) setErrors({ ...errors, modele: null });
              }}
            />
            <i className="fa fa-star absolute right-3 top-11 text-yellow-400"></i>
            {errors.modele && (
              <p className="text-red-400 text-xs mt-1">{errors.modele}</p>
            )}
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-300">Année(1900-2026)</label>
            <input
              type="number"
              min="1900"
              max="2026"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.annee ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={annee}
              onChange={(e) => {
                setAnnee(e.target.value);
                if (errors.annee) setErrors({ ...errors, annee: null });
              }}
            />
            <i className="fa fa-calendar-alt absolute right-3 top-11 text-yellow-400"></i>
            {errors.annee && (
              <p className="text-red-400 text-xs mt-1">{errors.annee}</p>
            )}
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-300">Immatriculation</label>
            <input
              type="text"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.immatriculation ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={immatriculation}
              onChange={(e) => {
                setImmatriculation(e.target.value.toUpperCase());
                if (errors.immatriculation)
                  setErrors({ ...errors, immatriculation: null });
              }}
            />
            <i className="fa fa-car-side absolute right-3 top-11 text-yellow-400"></i>
            {errors.immatriculation && (
              <p className="text-red-400 text-xs mt-1">{errors.immatriculation}</p>
            )}
          </div>

          <div className="flex justify-between pt-6">
            <button onClick={() => navigate(-1)} className="text-sm text-yellow-400">
              Retour
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FDC654] text-white px-6 py-2 rounded-lg"
            >
              Suivant
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Informations sur le véhicule</h3>
          <p className="text-gray-300 mb-2">
            Veuillez remplir tous les champs obligatoires (*).
          </p>
          <p className="text-sm text-gray-400">
            Une question ?{" "}
            <a href="#" className="underline text-yellow-400">
              Appelez-nous sur notre standard
            </a>{" "}
            ouvert 7j/7 de 9h à 20h.
          </p>
          <img
            src={voitureForm}
            alt="illustration formulaire"
            className="mt-8 max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspection;