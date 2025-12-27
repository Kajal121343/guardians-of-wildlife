import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProgramById } from "../services/ProgramService";
import { fetchProgramImpact } from "../services/programImpactService";
import ProgramChart from "../components/program/ProgramChart";

const ProgramDetails = () => {
  const { id } = useParams();

  const [program, setProgram] = useState(null);
  const [impactData, setImpactData] = useState([]);

  useEffect(() => {
    fetchProgramById(id).then(setProgram);
    fetchProgramImpact(Number(id)).then(setImpactData);
  }, [id]);

  if (!program) {
    return <p className="p-6">Loading program details...</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        {program["Program Name"]}
      </h1>

      <p className="text-black-700 mb-6">
        {program.Description}
      </p>

      {/* PROGRAM INFO */}
      <div className="bg-black-50 p-4 rounded mb-6 space-y-2">
        <p><strong>Country / Region:</strong> {program["Country/Region"]}</p>
        <p><strong>Government Agency:</strong> {program["Government Agency"]}</p>
        <p><strong>Year Launched:</strong> {program["Year Launched"]}</p>
        <p><strong>Current Status:</strong> {program["Current Status"]}</p>
        <p><strong>Target Species:</strong> {program["Target Species/Ecosystems"]}</p>
        <p><strong>Funding:</strong> {program["Funding (USD)"]}</p>
        <p><strong>Duration:</strong> {program["Duration"]}</p>
      </div>

      {/* IMPACT CHART */}
      <ProgramChart impactData={impactData} />
    </div>
  );
};

export default ProgramDetails;
