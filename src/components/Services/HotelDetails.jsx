import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const HotelDetails = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Try to get hotel data from location.state, fallback to hotelId
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-500 mb-4">No hotel data found.</div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-72 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{hotel.name}</h1>
          <div className="text-blue-600 font-bold mb-2 text-lg">{hotel.price}</div>
          <div className="text-gray-500 mb-4">{hotel.location}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.facilities.map((f, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-400 text-2xl">★</span>
            <span className="font-medium text-gray-700 text-lg">{hotel.rating}</span>
            <span className="text-gray-400 text-base">/ 5</span>
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => navigate(-1)}>
            Back to Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails; 