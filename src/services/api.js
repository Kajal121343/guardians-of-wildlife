const API_URL = "https://sheet2api.com/v1/4GlHqknR26SB/animal";

export const fetchAnimals = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return [];
  }
};
