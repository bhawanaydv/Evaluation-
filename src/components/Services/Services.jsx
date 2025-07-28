import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import hotelImg1 from '../../assets/Images/Hotel1.jpeg';
import hotelImg2 from '../../assets/Images/Hotel2.jpg';
import hotelImg3 from '../../assets/Images/Hotel3.avif';

const hotelImages = [hotelImg1, hotelImg2, hotelImg3];
const facilitiesList = [
  'Free WiFi',
  'Swimming Pool',
  'Spa',
  'Gym',
  'Restaurant',
  'Bar',
  'Parking',
  'Airport Shuttle',
  'Pet Friendly',
  'Room Service',
];

const TOTAL_HOTELS = 40;
const HOTELS_PER_LOAD = 8;

const hotels = Array.from({ length: TOTAL_HOTELS }, (_, i) => ({
  image: hotelImages[i % hotelImages.length],
  name: `Hotel ${String.fromCharCode(65 + (i % 20))} Grand`,
  price: `$${80 + Math.floor(Math.random() * 220)}/night`,
  location: [
    'New York, USA',
    'Paris, France',
    'Tokyo, Japan',
    'London, UK',
    'Rome, Italy',
    'Sydney, Australia',
    'Dubai, UAE',
    'Bangkok, Thailand',
    'Cape Town, South Africa',
    'Rio de Janeiro, Brazil',
  ][i % 10],
  facilities: facilitiesList.sort(() => 0.5 - Math.random()).slice(0, 4),
  rating: (3 + Math.random() * 2).toFixed(1),
}));

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(HOTELS_PER_LOAD);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        if (visibleCount < hotels.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + HOTELS_PER_LOAD, hotels.length));
            setLoading(false);
          }, 1000);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, loading]);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Our Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {hotels.slice(0, visibleCount).map((hotel, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <Link to={`/services/${idx}`} state={{ hotel }}>
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover cursor-pointer transition-transform duration-200 hover:scale-105" />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-1 text-gray-800">{hotel.name}</h3>
              <div className="text-blue-600 font-bold mb-2">{hotel.price}</div>
              <div className="text-gray-500 mb-2">{hotel.location}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {hotel.facilities.map((f, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{f}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-1">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-medium text-gray-700">{hotel.rating}</span>
                <span className="text-gray-400 text-sm">/ 5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center mt-8" ref={loader}>
          <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {visibleCount >= hotels.length && (
        <div className="text-center text-gray-400 mt-8">No more hotels to show.</div>
      )}
    </div>
  );
};

export default Services;
