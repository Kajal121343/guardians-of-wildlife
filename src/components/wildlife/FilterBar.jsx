import React from "react";

const FilterBar = ({ onSelect }) => {
  return (
    <div className="flex gap-3 mb-4">
      <button
        className="px-3 py-1 bg-blue-500 text-black rounded"
        onClick={() => onSelect("All")}
      >
        All
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-black rounded"
        onClick={() => onSelect("Endangered")}
      >
        Endangered
      </button>
      <button
        className="px-3 py-1 bg-yellow-500 text-black rounded"
        onClick={() => onSelect("Vulnerable")}
      >
        Vulnerable
      </button>
      <button
        className="px-3 py-1 bg-green-500 text-black rounded"
        onClick={() => onSelect("Threatened")}
      >
        Threatened
      </button>
    </div>
  );
};

export default FilterBar;
