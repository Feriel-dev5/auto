import React, { useState } from "react";
import voitureForm from "../../assets/form-illustration.png";
import { useNavigate } from "react-router-dom";

const Inspection2 = () => {
  const navigate = useNavigate();
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!codePostal.trim()) {
      newErrors.codePostal = "Le code postal est obligatoire";
    } else if (!/^\d{4,5}$/.test(codePostal)) {
      newErrors.codePostal = "Le code postal doit contenir 4 ou 5 chiffres";
    }

    if (!ville.trim()) {
      newErrors.ville = "La ville est obligatoire";
    } else if (ville.length < 2) {
      newErrors.ville = "La ville doit contenir au moins 2 caractères";
    }

    if (!pays.trim()) {
      newErrors.pays = "Le pays est obligatoire";
    } else if (pays.length < 2) {
      newErrors.pays = "Le pays doit contenir au moins 2 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }

    localStorage.setItem(
      "inspection_step2",
      JSON.stringify({ codePostal, ville, pays })
    );
    navigate("/Inspection3");
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
        <i className="fa fa-map-marker-alt text-yellow-400" />
        Demander mon inspection
      </h2>

      <div className="flex items-center space-x-20 mb-10">
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">01</span>
          <span className="text-yellow-400">Informations sur le véhicule</span>
        </div>
        <div className="h-0.5 bg-yellow-500 w-20" />
        <div className="flex flex-col items-center text-sm">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">02</span>
          <span className="text-yellow-400">Localisation du véhicule</span>
        </div>
        <div className="h-0.5 bg-gray-500 w-20" />
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
        <div className="bg-[#202A60] p-8 rounded-xl space-y-6 w-full">
          <div className="relative">
            <label className="block mb-1 text-gray-300">Code postal(4-5 chiffres)</label>
            <input
              type="text"
              maxLength="5"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.codePostal ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={codePostal}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setCodePostal(value);
                if (errors.codePostal) setErrors({ ...errors, codePostal: null });
              }}
            />
            <i className="fa fa-map-pin absolute right-3 top-11 text-yellow-400"></i>
            {errors.codePostal && (
              <p className="text-red-400 text-xs mt-1">{errors.codePostal}</p>
            )}
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-300">Ville</label>
            <input
              type="text"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.ville ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={ville}
              onChange={(e) => {
                setVille(e.target.value);
                if (errors.ville) setErrors({ ...errors, ville: null });
              }}
            />
            <i className="fa fa-city absolute right-3 top-11 text-yellow-400"></i>
            {errors.ville && (
              <p className="text-red-400 text-xs mt-1">{errors.ville}</p>
            )}
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-300">Pays</label>
            <input
              type="text"
              className={`w-full p-3 pr-10 rounded-lg bg-[#1A235A] border ${
                errors.pays ? "border-red-500" : "border-gray-500"
              } text-white`}
              value={pays}
              onChange={(e) => {
                setPays(e.target.value);
                if (errors.pays) setErrors({ ...errors, pays: null });
              }}
            />
            <i className="fa fa-globe absolute right-3 top-11 text-yellow-400"></i>
            {errors.pays && (
              <p className="text-red-400 text-xs mt-1">{errors.pays}</p>
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
          <h3 className="text-xl font-bold mb-4">Localisation du véhicule</h3>
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
            alt="illustration localisation"
            className="mt-8 max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspection2;