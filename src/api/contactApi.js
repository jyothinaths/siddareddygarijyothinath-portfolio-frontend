const API_BASE = "http://localhost:8081/api/contact";

export const getContact = async () => {
  const res = await fetch(API_BASE);
  const data = await res.json();
  return data[0]; // Assuming single contact info
};

export const updateContact = async (id, contact) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
};

export const createContact = async (contact) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
};
