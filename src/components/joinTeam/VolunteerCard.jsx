import React from "react";

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className="bg-black p-4 rounded shadow-md mb-4">
      <h3 className="font-bold text-lg">{volunteer.name}</h3>
    
     
      <p>City: {volunteer.city}</p>
      <p>Contribution: {volunteer.contribution}</p>
      <p>Motivation: {volunteer.motivation}</p>
    </div>
  );
};

export default VolunteerCard;
