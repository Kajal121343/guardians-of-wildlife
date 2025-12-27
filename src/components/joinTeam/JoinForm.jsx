import React, { useState } from "react";
import { addVolunteer } from "../../services/volunteerService";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    contribution: "",
    motivation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVolunteer(formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      city: "",
      contribution: "",
      motivation: "",
    });
    alert("Thank you for joining!");
  };

  return (
    <form
      className="bg-blacka p-6 rounded shadow-md mb-6 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Sign Up as a Volunteer
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="contribution"
        placeholder="How can you contribute?"
        value={formData.contribution}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="motivation"
        placeholder="Why do you want to join?"
        value={formData.motivation}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        type="submit"
        className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
      >
        Join Now
      </button>
    </form>
  );
};

export default JoinForm;
