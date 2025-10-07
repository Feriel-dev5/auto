import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import mecanique from "../assets/mechanic.jpg"; // vérifie que le fichier existe bien

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
        
        {/* Image à gauche */}
        <div className="relative w-full lg:w-[450px]">
          <img
            src={mecanique}
            alt="mecanique"
            className="rounded-2xl shadow-lg object-cover h-[500px] w-full"
          />

          {/* Bloc blanc qui dépasse à droite de la photo */}
          <div className="absolute bottom-4 right-[-130px] bg-white p-4 rounded-xl shadow-md w-[230px]">
            <h3 className="font-bold text-md">Qui sommes nous ?</h3>
            <p className="text-sm text-gray-500 mt-1">
              Notre mission c’est Sécuriser les transactions de véhicules d'occasion .
            </p>
            <a href="#" className="text-xs text-blue-500 mt-2 inline-block">Voir Plus</a>
          </div>
        </div>

        {/* Texte à droite */}
        <div className="w-full lg:w-1/2 space-y-12 lg:pl-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle className="text-cyan-500" />
              <h4 className="text-cyan-600 font-bold text-lg">Accompagner les acheteurs</h4>
            </div>
            <p className="text-sm text-gray-800 font-semibold">
              L’achat d’un véhicule est le deuxième achat le plus important d’une vie.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Nos spécialistes, professionnels de l’automobile expérimentés, mettent leurs compétences
              au profit des acheteurs.
              <br />
              L’accompagnement est complet et permet à nos clients d’effectuer un achat plus
              serein, sécurisé <br />
              et à distance grâce à notre réseau dans toute l’Europe.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle className="text-cyan-500" />
              <h4 className="text-cyan-600 font-bold text-lg">En finir avec les arnaques</h4>
            </div>
            <p className="text-sm text-gray-800 font-semibold">
              Plus de 20 000 voitures sont vendues en France chaque jour.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Le marché est très important, tout comme le nombre de véhicules en mauvais état ou
              potentiellement dangereux.
              <br />
              Nous sommes là pour débusquer les vendeurs malhonnêtes et éviter
              les arnaques ou les déconvenues à nos clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
