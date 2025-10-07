import React from "react";
import avatar from "../../assets/avatar.jpg";
import {
  FaUser,
  FaLock,
  FaBriefcase,
  FaInfoCircle,
  FaSignOutAlt,
  FaPhone,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageSecurite = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <aside className="w-64 bg-white shadow h-screen px-6 py-6 flex flex-col justify-between">
        <div>
          <div className="text-3xl font-bold mb-10 cursor-pointer" onClick={() => navigate("/")}>
            <span>L</span>
            <span className="text-[#F7941D]">o</span>
            <span>go</span>
          </div>
          <nav className="space-y-6 text-gray-700">
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/modifier-profil")}
            >
              <FaUser />
              <span>Modifier Profil</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <FaLock />
              <span>Sécurité</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/demandes")}
            >
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
          <h1 className="text-2xl font-semibold">Mon compte</h1>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm">
              <FaPhone />
              <span>06 78 95 24 21</span>
            </span>
            <button
              className="bg-teal-400 text-white px-4 py-1.5 rounded-md text-sm"
              onClick={() => navigate("/specialiste")}
            >
              Devenez spécialiste
            </button>
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="px-40 pb-16 pt-10 space-y-6 text-sm">
          {["Mot de passe actuel", "Nouveau mot de passe", "Confirmer nouveau mot de passe"].map(
            (label, index) => (
              <div key={index} className="relative">
                <label className="block font-semibold mb-1">{label}</label>
                <input
                  type="password"
                  className="w-full px-4 pr-12 py-2 h-10 rounded bg-white shadow border-none"
                  placeholder={label}
                />
                <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            )
          )}
          <div className="flex justify-end gap-4 pt-6">
            <button className="px-6 py-2 rounded border border-gray-400">Annuler</button>
            <button className="px-6 py-2 rounded bg-[#1D254D] text-white">Enregistrer</button>
          </div>
        </div>
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

export default PageSecurite;
