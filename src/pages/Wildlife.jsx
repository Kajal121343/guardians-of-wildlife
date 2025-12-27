import React, { useEffect, useState } from "react";
import { fetchAnimals } from "../services/api";
import FilterBar from "../components/wildlife/FilterBar";
import AnimalCard from "../components/wildlife/AnimalCard";
import WildlifeChart from "../components/wildlife/WildlifeChart";

const Wildlife = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchAnimals().then((data) => {
      setAnimals(data);
      setFilteredAnimals(data);
    });
  }, []);

  // Apply category filter
  const handleCategory = (category) => {
    setSelectedCategory(category);
    filterAnimals(category, searchText);
  };

  // Apply search filter
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    filterAnimals(selectedCategory, text);
  };

  // Combined filter function
  const filterAnimals = (category, text) => {
    let temp = animals;

    if (category !== "All") {
      temp = temp.filter(
        (item) =>
          item["Conservation Status"] &&
          item["Conservation Status"].toLowerCase().includes(category.toLowerCase())
      );
    }

    if (text.trim() !== "") {
      temp = temp.filter((item) =>
        item["Animal Name"].toLowerCase().includes(text.toLowerCase())
      );
    }

    setFilteredAnimals(temp);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Wildlife Conservation Data</h1>

      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search by Animal Name..."
        className="border p-2 rounded mb-4 w-full md:w-1/3"
      />

      <FilterBar onSelect={handleCategory} />

      <WildlifeChart data={filteredAnimals} />

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {Array.isArray(filteredAnimals) && filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard key={animal.ID} animal={animal} />
          ))
        ) : (
          <p>No animals found.</p>
        )}
      </div>
    </div>
  );
};

export default Wildlife;
