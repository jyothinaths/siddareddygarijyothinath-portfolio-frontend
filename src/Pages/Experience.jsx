import React, { useEffect, useState } from 'react';
import '../Styles/Experience.css';
import { getExperience, updateExperience, deleteExperience } from '../api/experienceApi';

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    getExperience()
      .then(setExperiences)
      .catch(err => console.error("Error fetching experience:", err));
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...experiences[index] });
  };

  const handleChange = (e) => {
    setEditData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      await updateExperience(editData.id, editData);
      const updatedList = [...experiences];
      updatedList[editIndex] = editData;
      setExperiences(updatedList);
      setEditIndex(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      try {
        await deleteExperience(id);
        setExperiences(prev => prev.filter(exp => exp.id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <div className='experiencePg'>
      <div className='TitleExpPg'>
        <h2>
          <span className="blue-letter">M</span>y Cont
          <span className="blue-letter">r</span>ibution In 
          <span className="blue-letter">C</span>areer
        </h2>
      </div>

      <div className='bodypg'>
        {experiences.length === 0 ? (
          <p>No experience data found.</p>
        ) : (
          experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              {editIndex === index ? (
                <>
                  <input name="jobTitle" value={editData.jobTitle} onChange={handleChange} />
                  <input name="company" value={editData.company} onChange={handleChange} />
                  <input name="location" value={editData.location} onChange={handleChange} />
                  <input name="startDate" value={editData.startDate} onChange={handleChange} />
                  <input name="endDate" value={editData.endDate} onChange={handleChange} />
                  <textarea name="description" value={editData.description} onChange={handleChange} />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <h3>{exp.jobTitle} @ {exp.company}</h3>
                  <p>{exp.location}</p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  <p>{exp.description}</p>
                  <div className="action-btns">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(exp.id)} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Experience;
