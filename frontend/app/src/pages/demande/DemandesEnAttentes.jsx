import React, { useState, useEffect, useRef } from "react";
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

const DemandesEnAttentes = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Charger les demandes depuis le backend
  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/inspection");
        const data = await response.json();
        
        if (data?.message) {
          setDemandes(data.message.reverse());
        } else {
          setDemandes([]);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des demandes :", error);
        setDemandes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDemandes();
  }, []);

  const handleDelete = async (id, index) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette demande ?")) {
      return;
    }

    try {
      // Supprimer du state local immédiatement pour une meilleure UX
      const updatedDemandes = [...demandes];
      updatedDemandes.splice(index, 1);
      setDemandes(updatedDemandes);

      // TODO: Ajouter l'appel API pour supprimer du backend
      // await fetch(`http://localhost:3000/api/inspection/${id}`, {
      //   method: "DELETE"
      // });
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression de la demande");
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-white shadow h-screen px-6 py-6 flex flex-col justify-between">
        <div>
          <div className="text-3xl font-bold mb-10">
            <span>L</span>
            <span className="text-[#F7941D]">o</span>
            <span>go</span>
          </div>
          <nav className="space-y-6 text-gray-700">
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/modifier-profil")}
            >
              <FaUser /> <span>Modifier Profil</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/securite")}
            >
              <FaLock /> <span>Sécurité</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <FaBriefcase /> <span>Mes demandes</span>
              <FaInfoCircle className="text-xs ml-1" />
            </div>
          </nav>
        </div>
        <button className="text-sm flex items-center gap-2 text-gray-600">
          <FaSignOutAlt /> Déconnexion
        </button>
      </aside>

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col">
        {/* --- Header --- */}
        <div className="flex justify-between items-center bg-white px-10 pt-5 pb-4">
          <h1 className="text-lg font-semibold">Mon compte</h1>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm">
              <FaPhone /> <span>06 78 95 24 21</span>
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

        {/* --- Dropdown menu --- */}
        <div className="px-10 py-2 mt-6" ref={menuRef}>
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-orange-200 text-orange-700 px-4 py-1 rounded-md text-sm flex items-center gap-1"
              >
                ⏱ En attente
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-1 bg-white shadow rounded-md w-40 z-10 text-sm">
                  <div
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/demandes")}
                  >
                    En cours
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-teal-600"
                    onClick={() => navigate("/demandes-validees")}
                  >
                    Validées
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={() => navigate("/demandes-annulees")}
                  >
                    Annulées
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- Demand cards --- */}
        <main className="px-10 pb-10 space-y-5">
          {loading ? (
            <p className="text-center text-gray-500 mt-10">
              Chargement des demandes...
            </p>
          ) : demandes.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Aucune demande en attente.
            </p>
          ) : (
            demandes.map((d, index) => (
              <div key={d._id || index} className="bg-white p-6 rounded-xl shadow space-y-2">
                <p className="text-orange-500 font-semibold text-sm">
                  Demande en attente
                </p>
                <p>
                  CIN : <strong>{d.cin}</strong>
                </p>
                <p>
                  Marque : <strong>{d.vehicule?.marque}</strong>
                </p>
                <p>
                  Modèle : <strong>{d.vehicule?.modele}</strong>
                </p>
                <p>
                  Année : <strong>{d.vehicule?.annee}</strong>
                </p>
                 <p>Localisation : <strong>{`${d.localisation?.codePostal} ${d.localisation?.ville}, ${d.localisation?.pays}`}</strong></p>
                

                {d.besoinsSpecifiques && d.besoinsSpecifiques.startsWith("http") ? (
                  <>
                    <a
                      href={d.besoinsSpecifiques}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm block"
                    >
                      {d.besoinsSpecifiques}
                    </a>
                    <p className="text-xs text-gray-500">
                      C'est le lien de l'annonce pour cette voiture.
                    </p>
                  </>
                ) : d.besoinsSpecifiques ? (
                  <p className="text-sm text-gray-600">
                    Besoins spécifiques : {d.besoinsSpecifiques}
                  </p>
                ) : null}

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(d.dateDemande || Date.now()).toLocaleDateString("fr-FR")}
                  </span>
                  <div className="flex items-center gap-4">
                    <FaPen className="text-gray-600 cursor-pointer" />
                    <FaTimes
                      className="text-red-500 cursor-pointer"
                      title="Supprimer la demande"
                      onClick={() => handleDelete(d._id, index)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* --- Right Sidebar --- */}
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

export default DemandesEnAttentes;