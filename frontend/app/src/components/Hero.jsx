import React from "react";
import { Link } from "react-router-dom";
import voiture from "../assets/hero-car.jpg";

export default function Hero() {
  return (
    <section className="bg-[#161F52] flex items-center justify-center px-8 w-full py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT: Texte */}
        <div className="text-white space-y-8">
          <h1 className="text-4xl md:text-5xl font-light leading-snug">
            Faites la <br />
            inspecter par <br />
            <strong className="font-bold">un professionnel !</strong>
          </h1>

          {/* Carte Formulaire */}
          <div className="bg-white text-black rounded-xl shadow-md p-4 flex flex-wrap md:flex-nowrap items-center space-y-4 md:space-y-0 md:space-x-6 w-fit px-8 py-4">
            <div>
              <p className="text-xs text-gray-500">Marque</p>
              <p className="font-bold">Renault</p>
            </div>
            <div className="hidden md:block border-r h-8" />
            <div>
              <p className="text-xs text-gray-500">Modèle</p>
              <p className="font-bold">Clio</p>
            </div>
            <div className="hidden md:block border-r h-8" />
            <div>
              <p className="text-xs text-gray-500">Année</p>
              <p className="font-bold">2018</p>
            </div>

            {/* Bouton à droite */}
            <div className="ml-auto">
              <Link to="/inspection">
                <button
                  type="button"
                  className="bg-[#5D5FEF] text-white px-5 py-2 rounded-lg border border-white hover:border-transparent text-xs"
                >
                  Demander mon inspection
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: Image voiture */}
        <div className="flex justify-center">
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
            <div className="overflow-hidden rounded-tl-[70px] rounded-br-[70px] w-[320px] shadow-lg">
              <img
                src={voiture}
                alt="Voiture"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
);
}