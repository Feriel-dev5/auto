import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mechanic from "../assets/mechanic.jpg";
import { FaPhone, FaUser } from "react-icons/fa";

export default function DevenirSpecialiste() {
  const [statut, setStatut] = useState("particulier");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Statut :", statut);
    console.log("Présentation :", description);
    navigate("/conditions-generales");
  };

  return (
    <div className="min-h-screen w-full flex text-[#0F1A4D]">
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${mechanic})` }}
      >
        <div className="absolute inset-0 bg-[#161F52]/90" />
        <div className="relative z-10 w-full h-full flex flex-col justify-start px-12 py-10 text-white">
          <div className="text-3xl font-bold tracking-wide mb-16">
            <span>L</span>
            <span className="text-[#F7941D]">o</span>
            <span>go</span>
          </div>
          <div className="mt-20">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Devenez spécialiste avec <br /> Nous
            </h1>
            <p className="text-lg font-medium">
              Faites nous parvenir votre candidature !
            </p>
            <p className="text-sm mt-2 text-yellow-400 font-semibold">
              identifier votre identité
            </p>
          </div>
        </div>
      </div>


      <div className="w-1/2 bg-white px-12 py-8 flex flex-col">
        <div className="flex justify-end items-center space-x-6 mb-10 text-sm font-medium">
          <div className="flex items-center space-x-2 text-[#161F52]">
            <FaPhone className="text-sm" />
            <span>06 78 95 24 21</span>
          </div>
          <button className="bg-teal-400 text-[#0C1E5B] font-semibold px-4 py-1.5 rounded shadow-sm" onClick={() => navigate("/specialiste")}>
            Devenez spécialiste
          </button>
          <FaUser className="text-lg text-[#0C1E5B]" />
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full space-y-6">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-lg font-semibold">Quel est votre statut ?</h2>
            <div className="w-12 h-1 bg-[#00BCD4] rounded-full mt-1" />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="statut"
                value="particulier"
                checked={statut === "particulier"}
                onChange={() => setStatut("particulier")}
                className="accent-[#161F52]"
              />
              <span>Je suis un particulier</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="statut"
                value="auto-entrepreneur"
                checked={statut === "auto-entrepreneur"}
                onChange={() => setStatut("auto-entrepreneur")}
                className="accent-[#161F52]"
              />
              <span>Je suis auto-entrepreneur</span>
            </label>
          </div>

          <div>
            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              Présentez vous à notre communauté. Détaillez vos expériences et
              compétences du secteur de l’automobile. Soyez convaincant sur votre
              présentation, cela jouera en votre faveur. <br />
              Vous séchez ? Pas de panique, vous pourrez rédiger votre présentation
              plus tard.
            </p>
            <textarea
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-[#161F52]"
              placeholder="Texte libre"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#161F52] text-white py-2 rounded-md font-semibold hover:bg-[#0f1a4d]"
          >
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
}
