import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Farming from './assets/Farming.avif'; 

const Home = () => {
  return (
    <div>
    <div
      className="min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Farming})` }}
    >
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Scorp Farmers</h1>
        <h1 className="text-3xl font-bold text-center mb-4 text-white">Empowering Your Farming Journey Farmer Analytics</h1>

        {/* <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
          Farmer Analytics
        </p> */}

        <a href="/excelanalytics" className="bg-orange-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
          Get Started
        </a>
      </div>
      </div>
          <Services />

    </div>
  );
}

export default Home;
