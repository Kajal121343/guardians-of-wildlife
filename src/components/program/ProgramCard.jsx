import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-green-700">
        {program["Program Name"]}
      </h3>

      <p className="text-gray-600 mt-2">
        {program.Description}
      </p>

      <p className="text-sm mt-2">
        <strong>Type:</strong> {program.Type}
      </p>

      <Link
        to={`/programs/${program.ID}`}
        className="inline-block mt-3 text-white bg-green-700 px-4 py-2 rounded hover:bg-green-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProgramCard;
