const API_URL = "https://sheet2api.com/v1/4GlHqknR26SB/program";

export const fetchPrograms = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching programs", error);
    return [];
  }
};

export const fetchProgramById = async (id) => {
  try {
    const res = await fetch(`${API_URL}?ID=${id}`);
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching program details", error);
    return null;
  }
};
