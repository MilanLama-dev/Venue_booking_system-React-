import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold">Book Your Venue</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-xl">Find conference halls, wedding venues, party spaces, and sports arenas all in one place.</p>
            <Link to="/venues" className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">Browse Venues</Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Venues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/250?1" alt="" className="w-full h-52 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold">Grand Conference Hall</h3>
                <p className="text-gray-500 mt-2">Capacity: 500 people</p>
                <Link to="/venue/1" className="inline-block mt-4 text-blue-600 font-semibold">View Details</Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/250?2" alt="" className="w-full h-52 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold">Wedding Party Palace</h3>
                <p className="text-gray-500 mt-2">Capacity: 100 people</p>
                <Link to="/venue/2" className="inline-block mt-4 text-blue-600 font-semibold">View Details</Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/250?3" alt="" className="w-full h-52 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold">Indoor Sports Arena</h3>
                <p className="text-gray-500 mt-2">Capacity: 300 people</p>
                <Link to="/venue/3" className="inline-block mt-4 text-blue-600 font-semibold">View Details</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 text-center">
              <div>
                <div className="text-5xl mb-4">Venue</div>
                <h3 className="font-semibold text-xl">Browse Venues</h3>
                <p className="text-gray-500 mt-2">Explore available venues.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">Date</div>
                <h3 className="font-semibold text-xl">Choose Date</h3>
                <p className="text-gray-500 mt-2">Select your preferred booking date.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">Confirmed</div>
                <h3 className="font-semibold text-xl">Confirm Booking</h3>
                <p className="text-gray-500 mt-2">Complete your reservation instantly.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
