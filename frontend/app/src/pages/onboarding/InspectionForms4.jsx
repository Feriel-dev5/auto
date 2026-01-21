import React, { useState } from "react";
import voitureForm from "../../assets/form-illustration.png";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Inspection4 = () => {
  const navigate = useNavigate();
  const [besoinsSpecifiques, setBesoinsSpecifiques] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const step1 = JSON.parse(localStorage.getItem("inspection_step1"));
    const step2 = JSON.parse(localStorage.getItem("inspection_step2"));
    const step3 = JSON.parse(localStorage.getItem("inspection_step3"));

    if (!step1 || !step2 || !step3) {
      alert("Données manquantes. Veuillez remplir toutes les étapes.");
      return;
    }

    if (!step3.nom || !step3.prenom || !step3.cin || !step3.telephone) {
      alert("Veuillez remplir toutes les informations personnelles.");
      return;
    }

    const fullData = {
      vehicule: {
        marque: step1.marque,
        modele: step1.modele,
        annee: parseInt(step1.annee, 10), // ✅ CONVERSION EN NOMBRE
        immatriculation: step1.immatriculation || "",
      },
      localisation: {
        codePostal: step2.codePostal,
        ville: step2.ville,
        pays: step2.pays,
      },
      besoinsSpecifiques: besoinsSpecifiques || "",
      nom: step3.nom,
      prenom: step3.prenom,
      cin: step3.cin.toString(), // ✅ CONVERSION EN STRING
      telephone: step3.telephone.toString(), // ✅ CONVERSION EN STRING
      clientId: "652f3c1b4f12a9d6a9e7b5d2",
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Afficher les erreurs du serveur
        console.error("Erreur serveur:", data);
        alert(data.message || "Erreur lors de l'enregistrement");
        return;
      }

      // Nettoyage
      localStorage.removeItem("inspection_step1");
      localStorage.removeItem("inspection_step2");
      localStorage.removeItem("inspection_step3");

      alert("✅ Demande d'inspection créée avec succès !");
      navigate("/demandes-en-attentes");
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur serveur lors de l'envoi de la demande.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#161F52] text-white pt-24 px-6 pb-10 flex flex-col items-center">
      {/* Navbar */}
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
            className="bg-teal-400 text-[#0C1E5B] font-semibold px-4 py-1.5 rounded-lg"
            onClick={() => navigate("/specialiste")}
          >
            Devenez spécialiste
          </button>
          <i className="fa fa-user text-lg" />
        </div>
      </nav>

      <h2 className="text-3xl font-bold mb-20 flex items-center gap-3">
        <i className="fas fa-clipboard-check text-yellow-400" />
        Demander mon inspection
      </h2>

      {/* Stepper */}
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
        <div className="flex flex-col items-center text-sm opacity-50">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">03</span>
          <span className="text-yellow-400">Informations personnelles</span>
        </div>
        <div className="h-0.5 bg-yellow-500 w-20" />
        <div className="flex flex-col items-center text-sm">
          <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1" />
          <span className="text-yellow-400 font-bold">04</span>
          <span className="text-yellow-400">Des besoins spécifiques ?</span>
        </div>
      </div>

      {/* Formulaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="bg-[#202A60] p-8 rounded-xl">
          <p className="text-center text-sm font-semibold mb-2">
            Vous pouvez insérer le lien de l'annonce ou des informations supplémentaires.
          </p>
          <p className="text-center text-xs text-teal-400 mb-4">
            (Champ facultatif)
          </p>

          <textarea
            className="w-full h-48 p-4 rounded-lg bg-[#1A235A] border border-gray-500 text-white"
            placeholder="Texte libre"
            value={besoinsSpecifiques}
            onChange={(e) => setBesoinsSpecifiques(e.target.value)}
          />

          <div className="flex justify-between pt-6">
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-yellow-400"
            >
              Retour
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#FDC654] text-[#0C1E5B] px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Envoi..." : "Demander"}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Des besoins spécifiques ?</h3>
          <p className="text-sm text-gray-300 mb-2">
            Ce champ est optionnel.
          </p>
          <p className="text-sm text-gray-400">
            Une question ?{" "}
            <a href="#" className="underline text-yellow-400">
              Appelez-nous
            </a>{" "}
            7j/7 de 9h à 20h.
          </p>
          <img
            src={voitureForm}
            alt="illustration"
            className="mt-8 max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspection4;