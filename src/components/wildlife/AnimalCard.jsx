import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-lg">{animal["Animal Name"]}</h2>
      <p>Species: {animal.Species}</p>
      <p>Habitat: {animal.Habitat}</p>
      <p>Status: {animal["Conservation Status"]}</p>
    </div>
  );
};

export default AnimalCard;
