import React, { useState, useEffect } from "react";
import JoinForm from "../components/joinTeam/JoinForm";
import VolunteerCard from "../components/joinTeam/VolunteerCard";
import MotivationCard from "../components/joinTeam/MotivationCard";
import { FaLeaf, FaHandsHelping, FaTree, FaUsers, FaGlobe, FaHeart } from "react-icons/fa";

const JoinTeam = () => {
  const [volunteers, setVolunteers] = useState([]);

  // Load volunteers from localStorage
  useEffect(() => {
    const savedVolunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
    setVolunteers(savedVolunteers);
  }, []);

  const motivations = [
    { title: "Protect Endangered Species", description: "Help save animals that are at risk of extinction.", icon: <FaLeaf /> },
    { title: "Support Conservation Programs", description: "Participate in government initiatives for wildlife protection.", icon: <FaTree /> },
    { title: "Community Engagement", description: "Join thousands of volunteers across the country.", icon: <FaUsers /> },
    { title: "Raise Awareness", description: "Educate people about the importance of wildlife conservation.", icon: <FaGlobe /> },
    { title: "Field Work Opportunities", description: "Get hands-on experience in protecting animals and habitats.", icon: <FaHandsHelping /> },
    { title: "Make a Difference", description: "Be a part of a meaningful movement for a better future.", icon: <FaHeart /> },
  ];

  return (
    <div className="p-6">
    
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold mb-2 text-green-700">
          Join the Guardians of Wildlife
        </h1>
        <p className="text-black-700 mb-4">
          Be a part of our mission to protect endangered species, conserve habitats, and create a sustainable future for wildlife in India. Your contribution matters!
        </p>
      </div>

     
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {motivations.map((item, index) => (
          <MotivationCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Join Form */}
      <JoinForm updateVolunteers={setVolunteers} />

      {/* Volunteers Section */}
      <h2 className="text-2xl font-bold my-4 text-green-700">
        Our Volunteers (20,000+ joined)
      </h2>

      {volunteers.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {volunteers.map((vol, index) => (
            <VolunteerCard key={index} volunteer={vol} />
          ))}
        </div>
      ) : (
        <p className="text-black-600">
          Be the first among local contributors to join our mission!
        </p>
      )}
    </div>
  );
};

export default JoinTeam;
