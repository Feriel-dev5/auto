import React from "react";
import { Link } from "react-router-dom"; 
import specialiste from "../assets/specialiste-hero.png";

export default function SpecialisteHero() {
  return (
    <div className="min-h-screen bg-white text-white">
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
          <button className="bg-teal-400 text-[#0C1E5B] font-semibold px-4 py-1.5 rounded-lg shadow-sm">
            Devenez spécialiste
          </button>
          <i className="fa fa-user text-lg" />
        </div>
      </nav>
      <section className="w-full min-h-screen flex items-center justify-center px-12 py-32">
        <div className="max-w-7xl w-full flex items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-[#161F52] leading-tight mb-4">
              Comment <br /> devenir <br /> spécialiste ?
            </h1>
            <p className="text-gray-600 text-3xl mb-8">
              Faites nous parvenir votre candidature !
            </p>
            <Link
              to="/devenir-specialiste"
              className="bg-[#F5B354] text-white px-6 py-3 rounded font-semibold shadow-md hover:bg-[#e4a142] transition inline-block"
            >
              Postuler maintenant
            </Link>
          </div>
          <div className="flex-shrink-0">
            <img
              src={specialiste}
              alt="Illustration spécialiste"
              className="w-[380px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
