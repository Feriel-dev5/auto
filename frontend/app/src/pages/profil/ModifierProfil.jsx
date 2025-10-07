import React, { useState,useEffect } from "react";
import avatar from "../../assets/avatar.jpg";
import {
  FaUser,
  FaLock,
  FaBriefcase,
  FaInfoCircle,
  FaSignOutAlt,
  FaPhone,
  FaUserCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHashtag,
  FaCalendarAlt,
  FaMobileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

const ModifierProfil = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const getprofile =async ()=>{
    API.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODZjZmIzMzFlYzZhYzczYTQ4NjY4NGEiLCJyb2xlIjoiQ0xJRU5UIiwiaWF0IjoxNzUxOTg0NTQyLCJleHAiOjE3NTE5ODgxNDJ9.KJ4fgm1Gqf0l3l8soPlla9bOlb7nlMZFTQ6a6UJVzOw")
    const result = await API.get("/api/me")
console.log(result);

  }
  useEffect(()=>{
    getprofile()
  },[])

  return (
    <div className="flex font-sans h-screen overflow-hidden relative">
      <aside
        className={`bg-white shadow h-full px-6 py-6 flex-col justify-between z-30 fixed top-0 transition-all duration-300
        ${showSidebar ? "left-0 flex" : "-left-64"} w-64 md:left-0 md:flex hidden`}
      >
        <div>
          <div
            className="text-3xl font-bold mb-10 cursor-pointer"
            onClick={() => {
              navigate("/");
              setShowSidebar(false);
            }}
          >
            <span>L</span>
            <span className="text-[#F7941D]">o</span>
            <span>go</span>
          </div>
          <nav className="space-y-6 text-gray-700">
            <div
              className="flex items-center gap-2 text-blue-600 font-bold cursor-pointer"
              onClick={() => {
                navigate("/modifier-profil");
                setShowSidebar(false);
              }}
            >
              <FaUser />
              <span>Modifier Profil</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => {
                navigate("/securite");
                setShowSidebar(false);
              }}
            >
              <FaLock />
              <span>Sécurité</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => {
                navigate("/demandes");
                setShowSidebar(false);
              }}
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
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden transition-opacity duration-300"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
      <div className="flex-1 h-screen overflow-hidden md:ml-64 md:mr-40 w-full">
        <div className="fixed top-0 left-0 right-0 md:left-64 md:right-40 bg-white shadow px-6 md:px-10 py-4 z-10 flex justify-between items-center">
          <button className="md:hidden text-xl" onClick={() => setShowSidebar(!showSidebar)}>
            {showSidebar ? <FaTimes /> : <FaBars />}
          </button>

          <h1 className="text-xl md:text-2xl font-semibold">Mon compte</h1>

          <div className="hidden md:flex items-center gap-6">
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
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          </div>
        </div>
        <div className="h-full overflow-y-auto pt-24 md:pt-32 px-4 md:px-40 pb-16 space-y-6 text-sm scrollbar-hide">
          <div className="flex justify-center pb-6">
            <div className="relative w-24 h-24">
              <img
                src={avatar}
                alt="profil"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow"
              />
              <button className="absolute bottom-0 right-0 bg-blue-800 text-white p-1 rounded-full text-xs">
                <MdEdit />
              </button>
            </div>
          </div>

          {[
            { label: "Nom et Prénom", value: "Dario Alexander", icon: <FaUserCircle /> },
            { label: "Email", value: "DarioAlexander.27@gmail.com", icon: <FaEnvelope /> },
            { label: "Numéro de téléphone", value: "+33 06 25 45 96 01", icon: <FaMobileAlt /> },
            { label: "Date de naissance", value: "27 Juillet 1984", icon: <FaCalendarAlt /> },
            { label: "Adresse", value: "7 Rue d'Upsal, Esplanade", icon: <FaMapMarkerAlt /> },
            { label: "Ville", value: "Strasbourg", icon: <FaMapMarkerAlt /> },
            { label: "Code postal", value: "67000", icon: <FaHashtag /> },
          ].map((field, index) => (
            <div key={index} className="relative">
              <label className="block font-semibold mb-1">{field.label}</label>
              <input
                type="text"
                className="w-full px-4 pr-12 py-2 h-10 rounded bg-white shadow border-none"
                value={field.value}
                readOnly
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                {field.icon}
              </span>
            </div>
          ))}
          <div className="flex justify-end gap-4 pt-6">
            <button className="px-6 py-2 rounded border border-gray-400">Annuler</button>
            <button className="px-6 py-2 rounded bg-[#1D254D] text-white">Enregistrer</button>
          </div>
        </div>
      </div>
      <aside className="hidden md:block w-40 fixed right-0 top-0 h-full px-4 py-24">
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

export default ModifierProfil;
