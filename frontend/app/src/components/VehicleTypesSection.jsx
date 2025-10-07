import React from "react";
import carImg from "../assets/car.jpg";
import camperImg from "../assets/camper.jpg";
import vanImg from "../assets/van.jpg";
import motorcycleImg from "../assets/motorcycle.jpg";

const vehicles = [
  {
    title: "Voitures",
    price: "Dès 199€",
    image: carImg,
  },
  {
    title: "Camping-Cars",
    price: "Dès 299€",
    image: camperImg,
  },
  {
    title: "Utilitaires",
    price: "Dès 299€",
    image: vanImg,
  },
  {
    title: "Motos",
    price: "Dès 99€",
    image: motorcycleImg,
  },
];

const VehicleTypesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Inspection de tous types de véhicules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-teal-400 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {vehicle.price}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{vehicle.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTypesSection;