// src/services/volunteerService.js

// Get all volunteers from localStorage
export const getVolunteers = () => {
  return JSON.parse(localStorage.getItem("volunteers")) || [];
};

// Add a new volunteer
export const addVolunteer = (volunteer) => {
  const volunteers = getVolunteers();
  volunteers.push(volunteer);
  localStorage.setItem("volunteers", JSON.stringify(volunteers));
};
