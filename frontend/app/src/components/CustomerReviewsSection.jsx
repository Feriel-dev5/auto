// src/components/CustomerReviewsSection.jsx
import React from "react";
import { FaStar, FaRegStar, FaChevronDown } from "react-icons/fa";

const reviews = [
  {
    name: "Paul Degrot",
    initials: "PD",
    date: "Juin 2021",
    rating: 4,
    comment: "Service réactif, rapport d'inspection complet et très bon service.",
  },
  {
    name: "Derine Charlotte",
    initials: "DC",
    date: "Mars 2021",
    rating: 4,
    comment: "Équipe réactive et professionnelle, service de grande qualité.",
  },
  {
    name: "Paul Degrot",
    initials: "PD",
    date: "Juin 2021",
    rating: 4,
    comment: "Service réactif, rapport d'inspection complet et très bon service.",
  },
];

const CustomerReviewsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="flex justify-between items-start md:items-center mb-6 flex-col md:flex-row">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Avis clients</h2>
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <FaRegStar className="text-yellow-400" />
            <span className="font-semibold text-lg ml-2">Excellent</span>
            <span className="text-sm text-gray-500">Sur la base de 752 avis</span>
          </div>
        </div>

        {/* Liste d’avis */}
        <div className="space-y-4 mb-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded shadow flex items-start space-x-4">
              <div className="w-14 text-center">
                <p className="text-sm text-gray-500">{review.date}</p>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mx-auto font-bold text-white">
                  {review.initials}
                </div>
              </div>
              <div>
                <p className="font-semibold">{review.name}</p>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
                </div>
                <p className="text-sm mt-1 text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flèche vers bas */}
        <div className="flex justify-center mb-6">
          <FaChevronDown className="text-gray-400 text-xl" />
        </div>

        {/* Formulaire */}
        <div className="space-y-4">
          <textarea
            className="w-full border border-gray-300 rounded p-4 min-h-[100px] resize-none"
            placeholder="Que pensez-vous ?"
          ></textarea>
          <button className="w-full bg-teal-400 text-white py-3 rounded hover:bg-teal-500 transition">
            Poster votre commentaire
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;