import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";

import {
  FaUser,
  FaLock,
  FaBriefcase,
  FaInfoCircle,
  FaPhone,
  FaSignOutAlt,
  FaPen,
  FaTimes,
} from "react-icons/fa";

const demandes = [
  {
    id: 1,
    marque: "clio",
    modele: "bombé",
    annee: "2012",
    localisation: "67000 STRASBOURG, France",
    lien: "https://www.google.com/search?q=about+us+mobile+ui&sxsrf=AQq",
    date: "12 / 12 / 2021",
  },
  {
    id: 2,
    marque: "clio",
    modele: "bombé",
    annee: "2012",
    localisation: "67000 STRASBOURG, France",
    description: "C’est une voiture en bon état",
    date: "06 / 11 / 2021",
  },
];

const DemandesValidees = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <aside className="w-64 bg-white shadow h-screen px-6 py-6 flex flex-col justify-between">
        <div>
          <div className="text-3xl font-bold mb-10">
            <span>L</span><span className="text-[#F7941D]">o</span><span>go</span>
          </div>
          <nav className="space-y-6 text-gray-700">
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <FaUser />
              <span>Modifier Profil</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <FaLock />
              <span>Sécurité</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <FaBriefcase />
              <span>Mes demandes</span>
              <FaInfoCircle className="text-xs ml-1" />
            </div>
          </nav>
        </div>
        <button className="text-sm flex items-center gap-2 text-gray-600">
          <FaSignOutAlt />
          Déconnexion
        </button>
      </aside>

   
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center bg-white px-10 pt-5 pb-4">
          <h1 className="text-lg font-semibold">Mon compte</h1>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm">
              <FaPhone />
              <span>06 78 95 24 21</span>
            </span>
            <button className="bg-teal-400 text-white px-4 py-1.5 rounded-md text-sm" onClick={() => navigate("/specialiste")}>
              Devenez spécialiste
            </button>
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          </div>
        </div>
        <div className="px-10 py-2 mt-6" ref={menuRef}>
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-green-200 text-green-700 px-4 py-1 rounded-md text-sm"
              >
                ✅ Validée
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-1 bg-white shadow rounded-md w-40 z-10 text-sm">
                  <div
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/demandes");
                      setMenuOpen(false);
                    }}
                  >
                    ⏱ En cours
                  </div>
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-teal-600">
                    ✅ Validée
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={() => {
                      navigate("/demandes-annulees");
                      setMenuOpen(false);
                    }}
                  >
                    ❌ Annulée
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <main className="px-10 pb-10 space-y-5">
          {demandes.map((d) => (
            <div key={d.id} className="bg-white p-6 rounded-xl shadow space-y-2">
              <p className="text-green-600 font-semibold text-sm">Demande validée</p>
              <p>Marque : <strong>{d.marque}</strong></p>
              <p>Modèle : <strong>{d.modele}</strong></p>
              <p>Année : <strong>{d.annee}</strong></p>
              <p>Localisation : <strong>{d.localisation}</strong></p>
              {d.lien ? (
                <>
                  <a
                    href={d.lien}
                    className="text-blue-600 underline text-sm block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {d.lien}
                  </a>
                  <p className="text-xs text-gray-500">C’est le lien de l’annonce pour cette voiture.</p>
                </>
              ) : (
                <p className="text-sm text-gray-600">{d.description}</p>
              )}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-gray-500">{d.date}</span>
                <div className="flex items-center gap-4">
                  <FaPen className="text-gray-600 cursor-pointer" />
                  <FaTimes className="text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <aside className="w-40 p-4 mt-26">
        <div className="bg-white rounded-xl shadow p-4 text-sm space-y-4 text-gray-600">
          <div>À propos</div>
          <div>Contact</div>
          <div>Service</div>
          <div>FAQ</div>
        </div>
      </aside>
    </div>
  );
};

export default DemandesValidees;
