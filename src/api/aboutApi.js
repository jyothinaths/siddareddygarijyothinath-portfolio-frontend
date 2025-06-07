const API_BASE = "http://localhost:8081/api/about";

export const getAbout = async () => {
  const res = await fetch(API_BASE);
  const data = await res.json();
  return data[0]; // assuming only one about record
};

export const updateAbout = async (id, updatedData) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};
