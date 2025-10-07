import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaUser } from "react-icons/fa";
import mechanic from "../assets/mechanic.jpg";

export default function ConditionsGenerales() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans text-[#0F1A4D]">
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center h-64 md:h-auto"
        style={{ backgroundImage: `url(${mechanic})` }}
      >
        <div className="absolute inset-0 bg-[#0f1a4d]/90" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-10 text-white text-center">
          <div className="absolute top-6 left-6 text-2xl md:text-3xl font-bold tracking-wide">
            <span>L</span>
            <span className="text-[#F7941D]">o</span>
            <span>go</span>
          </div>

          <h1 className="text-lg md:text-xl font-medium tracking-wide mt-20 md:mt-0">
            Lisez bien et acceptez les{" "}
            <span className="text-[#F7941D]">conditions générales</span>
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white px-6 md:px-8 py-6 flex flex-col">
        {/* Header droit */}
        <div className="flex justify-end items-center space-x-4 text-sm mb-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-sm" />
            <span>06 78 95 24 21</span>
          </div>
          <button
            className="bg-teal-400 text-[#0C1E5B] text-sm font-semibold px-4 py-1.5 rounded shadow-sm"
            onClick={() => navigate("/specialiste")}
          >
            Devenez spécialiste
          </button>
          <FaUser className="text-lg text-[#0C1E5B]" />
        </div>
        <div className="mx-auto w-full max-w-xl bg-white p-6 rounded-xl border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-center mb-6">Les Conditions Générales</h2>

          <section className="text-sm space-y-6 leading-relaxed tracking-wide text-gray-800">
            <div>
              <h3 className="font-bold mb-1">A – Contexte</h3>
              <p className="text-xs text-gray-500 mb-2">Dernière mise à jour : 14 décembre 2021</p>
              <p>
                1 – Le SITE, exploité en qualité d’éditeur par la société MAXENCE AND CO
                (S.A.S. au capital de 1 000 euros, dont le siège social est sis Avenue Guy
                de Collongue, 69134 Ecully cedex, FRANCE / R.C.S. LYON 842 397 044 tél. :
                01 76 34 05 30).
              </p>
              <p>
                2 – Aux SPÉCIALISTES de mettre en valeur leurs connaissances dans le
                domaine automobile pour les BÉNÉFICIAIRES, et de disposer sur le SITE
                d’un <span className="text-[#161F52] font-medium">espace numérique</span>.
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  <span className="text-[#4f46e5] font-semibold">
                    Relations entre SPÉCIALISTE et BÉNÉFICIAIRE
                  </span>{" "}
                  : prestation conforme au contenu affiché.
                </li>
                <li>
                  Pas de contrôle sur les informations des{" "}
                  <span className="text-[#4f46e5]">SPÉCIALISTES</span>.
                </li>
                <li>
                  Transmission rapide du formulaire de rétractation au BÉNÉFICIAIRE.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-1">B – Opposabilité</h3>
              <p>
                Si une clause est invalide ou illégale, cela n’affecte pas les autres
                clauses :
              </p>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  La renonciation à ses conditions générales{" "}
                  <span className="text-[#4f46e5] underline">d’achat</span>.
                </li>
              </ul>
            </div>
          </section>
          <div className="flex justify-between mt-8">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#161F52] text-white rounded-md font-semibold hover:bg-[#0F1A4D]"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
