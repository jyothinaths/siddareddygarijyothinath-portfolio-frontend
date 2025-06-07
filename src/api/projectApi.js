const API_BASE = "http://localhost:8081/api/projects";  // adjust endpoint if needed

export const getProjects = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addProject = async (project) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return res.json();
};

export const updateProject = async (id, project) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return res.json();
};

export const deleteProject = async (id) => {
  await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
};
