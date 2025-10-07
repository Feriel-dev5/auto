import React from "react";
import { FaRoute, FaCar, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaRoute size={28} className="text-white" />,
    title: "Déplacement du Spécialiste",
    desc: "Le spécialiste se déplace et effectue une inspection complète",
    bg: "bg-blue-100",
    iconBg: "bg-blue-400",
  },
  {
    icon: <FaCar size={28} className="text-white" />,
    title: "Inspection du Véhicule",
    desc: "Le spécialiste se déplace et effectue une inspection complète",
    bg: "bg-rose-100",
    iconBg: "bg-rose-400",
  },
  {
    icon: <FaFileAlt size={28} className="text-white" />,
    title: "Rapport Digital Détaillé",
    desc: "Le spécialiste se déplace et effectue une inspection complète",
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-400",
  },
  {
    icon: <FaShieldAlt size={28} className="text-white" />,
    title: "Garantie 3 Mois si Achat",
    desc: "Le spécialiste se déplace et effectue une inspection complète",
    bg: "bg-cyan-100",
    iconBg: "bg-cyan-400",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Nos Service Pour une Offre Complète</h2>
        <p className="text-sm text-gray-500 mt-2">
          Un conseiller est là pour vous accompagner, tous les jours de 9h à 20h
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full sm:w-[45%] lg:w-[22%] p-6 rounded-xl shadow-sm ${service.bg}`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.iconBg}`}
            >
              {service.icon}
            </div>
            <h3 className="text-md font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-[#1e1e4b] text-white rounded-full hover:bg-[#2c2c63] transition">
          Découvrir
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;