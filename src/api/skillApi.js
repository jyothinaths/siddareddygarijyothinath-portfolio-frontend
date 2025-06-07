const API_BASE = "http://localhost:8081/api/skills";

export const getSkills = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addSkill = async (skill) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill),
  });
  return res.json();
};

export const updateSkill = async (id, skill) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill),
  });
  return res.json();
};

export const deleteSkill = async (id) => {
  await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
};
