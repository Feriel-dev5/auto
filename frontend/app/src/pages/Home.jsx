import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/footer";
import AboutSection from '../components/AboutSection';
import VehicleTypesSection from '../components/VehicleTypesSection';
import CustomerReviewsSection from '../components/CustomerReviewsSection';
import api from '../api/api'; 

export default function Home() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await api.get('/'); 
        console.log(response);
        setDate(response.message);
      } catch (error) {
        console.error("Erreur Axios :", error);
      }
    };

    fetchDate();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="text-center text-lg text-green-600 mt-4">
         Date serveur : {date}
      </div>

      <div className="mt-10">
        <ServicesSection />
      </div>
      <AboutSection />
      <VehicleTypesSection />
      <CustomerReviewsSection />
      <Footer />
 </div>
);
}