import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedQueries = JSON.parse(localStorage.getItem("queries")) || [];
    savedQueries.push(formData);
    localStorage.setItem("queries", JSON.stringify(savedQueries));
    alert("Your data has been submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded shadow-md max-w-lg mx-auto mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-green-700">Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-3 rounded bg-black text-white placeholder-gray-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-3 rounded bg-black text-white placeholder-gray-400"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-3 rounded bg-black text-white placeholder-gray-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="border p-2 w-full mb-3 rounded h-24 bg-black text-white placeholder-gray-400"
      ></textarea>
      <button
        type="submit"
        className="bg-green-700 text-black px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
