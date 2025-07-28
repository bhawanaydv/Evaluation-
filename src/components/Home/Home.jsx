import React from 'react';
import hotel1 from '../../assets/Images/Hotel1.jpeg'
import hotel2 from '../../assets/Images/Hotel2.jpg'
import hotel3 from '../../assets/Images/Hotel3.avif'


const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <img src={hotel1} alt="Hotel Pool View" className="w-full h-[80vh] object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to STAY<span className="text-yellow-300">Master</span></h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Experience luxury, comfort, and unforgettable hospitality at your dream destination.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={hotel2} alt="Hotel Room" className="w-full rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Relax in Comfort</h2>
            <p className="text-gray-600 text-lg">
              Discover modern luxury in our spacious rooms with breathtaking views. Whether you're here for business or leisure, STAYMaster ensures a memorable and peaceful stay.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose STAYMaster?</h2>
          <p className="text-gray-600 mt-2">World-class amenities designed for your comfort and delight</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img src={hotel3} alt="Luxury Amenities" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
            <p className="text-gray-600">From spa and gym to infinity pools, we offer top-notch facilities to make your stay luxurious.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img src={hotel1} alt="Pool" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Spectacular Pool</h3>
            <p className="text-gray-600">Take a dip in our beautiful poolside area, perfect for relaxation or fun with family and friends.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img src={hotel2} alt="Comfort Rooms" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Cozy Rooms</h3>
            <p className="text-gray-600">Our rooms blend modern design with homely comfort, offering you a cozy stay every time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
