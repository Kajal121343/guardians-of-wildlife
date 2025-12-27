import React from "react";

const MotivationCard = ({ title, description, icon }) => {
  return (
    <div className="bg-green-50 p-4 rounded shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
      <div className="text-green-700 text-4xl mb-2">{icon}</div>  {/* Darker icon */}
      <h3 className="font-bold text-lg mb-1 text-black">{title}</h3>  {/* Make title black */}
      <p className="text-gray-800">{description}</p>  {/* Slightly darker description */}
    </div>
  );
};

export default MotivationCard;
