// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161F52] text-white px-6 py-12 text-sm">
      {/* Grille des sections principales */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* La société */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-white">La société</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">À propos</a></li>
            <li><a href="#">Investisseurs</a></li>
            <li><a href="#">Recrutement</a></li>
            <li><a href="#">Presse</a></li>
            <li><a href="#">Avis</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-white">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Inspection particuliers</a></li>
            <li><a href="#">Inspection professionnels</a></li>
            <li><a href="#">Garantie</a></li>
            <li><a href="#">Assurance</a></li>
            <li><a href="#">Financement</a></li>
            <li><a href="#">Pièces auto</a></li>
          </ul>
        </div>

        {/* Spécialistes */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-white">Spécialistes</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Devenir spécialiste Trustoo</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-white">Guides</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Acheter un véhicule d'occasion</a></li>
            <li><a href="#">Vérifier une voiture d'occasion</a></li>
            <li><a href="#">Acheter une voiture en Allemagne</a></li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-white">Assistance</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-xs">
          {/* Liens légaux */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center">
            <a href="#">Conditions générales de vente</a>
            <span className="hidden md:inline">|</span>
            <a href="#">Mentions légales</a>
            <span className="hidden md:inline">|</span>
            <a href="#">Une réalisation Xeelabs</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#1F2859] px-4 py-1 rounded text-sm font-semibold">
              Suivez-nous sur
            </button>
            <div className="flex space-x-3 text-lg">
              <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
              <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
              <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs text-gray-500">
          © 2021 Genext-IT. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;