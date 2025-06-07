const API_BASE = "http://localhost:8081/api/education";

export const getEducation = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addEducation = async (edu) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(edu),
  });
  return res.json();
};

export const updateEducation = async (id, edu) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(edu),
  });
  return res.json();
};

export const deleteEducation = async (id) => {
  await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
};
