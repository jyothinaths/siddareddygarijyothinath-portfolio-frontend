const API_BASE = "http://localhost:8081/api/experience";

export const getExperience = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addExperience = async (exp) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exp),
  });
  return res.json();
};

export const updateExperience = async (id, exp) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exp),
  });
  return res.json();
};

export const deleteExperience = async (id) => {
  await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
};
