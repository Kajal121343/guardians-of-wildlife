import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaHandsHelping, FaRegCalendarAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* Hero Section */}
      <section className="bg-green-700 text-white min-h-[500px] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Guardians of Wildlife</h1>
        <p className="text-lg max-w-2xl mb-6">
          Promoting wildlife conservation, protecting endangered species,
          and empowering citizens to preserve India’s biodiversity.
        </p>

        <Link
          to="/join-team"
          className="bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded hover:bg-yellow-300 transition"
        >
          Join as Volunteer
        </Link>
      </section>

      {/* Why Conservation */}
      <section className="py-16 px-6 text-center w-full">
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          Why Wildlife Conservation Matters
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg">
          Wildlife conservation maintains ecological balance, protects biodiversity,
          and ensures sustainable ecosystems for future generations.
        </p>
      </section>

      {/* Government Initiatives */}
      <section className="py-16 px-6 bg-gray-100 w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-700">
          Key Government Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaLeaf className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl mb-2">Wildlife Protection Laws</h3>
            <p className="text-gray-700">
              Strengthening legal frameworks to protect endangered species.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaHandsHelping className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl mb-2">Community Participation</h3>
            <p className="text-gray-700">
              Volunteer programs and citizen engagement initiatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FaRegCalendarAlt className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl mb-2">Protected Areas</h3>
            <p className="text-gray-700">
              National parks and sanctuaries across India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-green-700 text-white text-center w-full">
        <h2 className="text-3xl font-bold mb-6">Become a Wildlife Guardian</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join 20,000+ volunteers already working to protect wildlife across India.
        </p>

        <Link
          to="/join-team"
          className="bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded hover:bg-yellow-300 transition"
        >
          Volunteer Now
        </Link>
      </section>

    </div>
  );
};

export default Home;
