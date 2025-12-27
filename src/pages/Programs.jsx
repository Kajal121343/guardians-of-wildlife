import { useEffect, useState } from "react";
import { fetchPrograms } from "../services/ProgramService";
import ProgramCard from "../components/program/ProgramCard";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms().then(setPrograms);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Government Wildlife Programs
      </h1>

      <p className="text-gray-700 mb-6">
        Explore various initiatives launched by the Government to protect wildlife,
        conserve ecosystems, and enable citizens to report and participate actively.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {programs.length > 0 ? (
          programs.map((program) => (
            <ProgramCard key={program.ID} program={program} />
          ))
        ) : (
          <p>No programs available.</p>
        )}
      </div>
    </div>
  );
};

export default Programs;
