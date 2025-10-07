import React, { useState } from "react";
import voitureForm from "../../assets/form-illustration.png";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Inspection3 = () => {
  const navigate = useNavigate();
  const [besoinsSpecifiques, setBesoinsSpecifiques] = useState("");

  const handleSubmit = async () => {
    const step1 = JSON.parse(localStorage.getItem("inspection_step1"));
    const step2 = JSON.parse(localStorage.getItem("inspection_step2"));

    if (!step1 || !step2) {
      alert("Données manquantes. Veuillez remplir les étapes précédentes.");
      return;
    }

    const fullData = {
      vehicule: {
        marque: step1.marque,
        modele: step1.modele,
        annee: step1.annee,
        immatriculation: step1.immatriculation || "",
      },
      localisation: {
        codePostal: step2.codePostal,
        ville: step2.ville,
        pays: step2.pays,
      },
      besoinsSpecifiques,
      clientId: "64f3a7c9c89b8f5672a12345",
    };

    console.log("📤 Données envoyées :", fullData);

    try {
      const response = await fetch("http://localhost:3000/inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Demande envoyée avec succès !");
        

        // 🧠 Enregistrement dans localStorage côté frontend
        const demandesExistantes = JSON.parse(localStorage.getItem("demandesEnCours")) || [];
        const nouvelleDemande = {
          id: Date.now(),
          marque: step1.marque,
          modele: step1.modele,
          annee: step1.annee,
          localisation: `${step2.codePostal} ${step2.ville}, ${step2.pays}`,
          lien: besoinsSpecifiques.startsWith("http") ? besoinsSpecifiques : null,
          date: new Date().toLocaleDateString("fr-FR"),
        };

        localStorage.setItem(
          "demandesEnCours",
          JSON.stringify([...demandesExistantes, nouvelleDemande])
        );

        localStorage.removeItem("inspection_step1");
        localStorage.removeItem("inspection_step2");
        navigate("/demandes");
      } else {
        alert("❌ Erreur : " + data.message);
      }
    } catch (error) {
      alert("❌ Erreur serveur : " + error.message);
    }
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
        <i className="fas fa-clipboard-check text-yellow-400 text-2xl" />
        Demander mon inspection
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
          <span className="text-yellow-400">Des besoins spécifiques ?</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start w-full max-w-6xl">
        <div className="bg-[#202A60] p-8 rounded-xl w-full">
          <p className="text-center text-sm font-semibold mb-2">
            Vous pouvez nous insérer ici le lien de l'annonce si le véhicule est en ligne sur un site d’annonce.
          </p>
          <p className="text-center text-xs text-teal-400 mb-4">[facultatif]</p>

          <textarea
            className="w-full h-48 p-4 rounded-lg bg-[#1A235A] border border-gray-500 text-white"
            placeholder="Texte libre"
            value={besoinsSpecifiques}
            onChange={(e) => setBesoinsSpecifiques(e.target.value)}
          />

          <div className="flex justify-between pt-6">
            <button onClick={() => navigate(-1)} className="text-sm text-yellow-400">
              Retour
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#FDC654] text-white px-6 py-2 rounded-lg"
            >
              Demander
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Des besoins spécifiques ?</h3>
          <p className="text-sm text-gray-300 mb-2">
            Facultatif (c’est un champ non obligatoire)
          </p>
          <p className="text-sm text-gray-400">
            Une question ? {" "}
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

export default Inspection3;
