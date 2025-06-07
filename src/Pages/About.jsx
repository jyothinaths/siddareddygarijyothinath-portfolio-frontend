import React, { useEffect, useState } from 'react';
import '../Styles/About.css';
import Image from '../Assets/ProfileImg.png';
import { getAbout, updateAbout } from '../api/aboutApi'; // import api functions

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getAbout()
      .then(data => {
        setAboutData(data);
        setFormData(data);
      })
      .catch(err => console.error("Error fetching About:", err));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    updateAbout(aboutData.id, formData)
      .then(updated => {
        setAboutData(updated);
        setIsEditing(false);
      })
      .catch(err => alert(err.message));
  };

  if (!aboutData) return <p>Loading...</p>;

  return (
    <div className="about-container">
      <div className="about-left">
        <img src={Image} alt="Profile" />
      </div>
      <div className="about-right">
        <ul>
          {isEditing ? (
            <>
              <li>
                <input name="title" value={formData.title} onChange={handleChange} />
              </li>
              <li>
                <textarea name="summary" value={formData.summary} onChange={handleChange} />
              </li>
              <li>
                <input name="fullName" value={formData.fullName} onChange={handleChange} />
              </li>
            </>
          ) : (
            <>
              <li><h1>{aboutData.title}</h1></li>
              <li><p>{aboutData.summary}</p></li>
              <li><h2>{aboutData.fullName}</h2></li>
            </>
          )}
        </ul>

        <div className="contact-info">
          <ul>
            {isEditing ? (
              <>
                <li><input name="location" value={formData.location} onChange={handleChange} /></li>
                <li><input name="email" value={formData.email} onChange={handleChange} /></li>
                <li><input name="phone" value={formData.phone} onChange={handleChange} /></li>
                <li>
                  <input name="linkedinUrl" value={formData.linkedinUrl} onChange={handleChange} />
                  <input name="githubUrl" value={formData.githubUrl} onChange={handleChange} />
                  <input name="resumeUrl" value={formData.resumeUrl} onChange={handleChange} />
                </li>
              </>
            ) : (
              <>
                <li>📍 {aboutData.location}</li>
                <li>📧 {aboutData.email}</li>
                <li>📞 {aboutData.phone}</li>
                <li>
                  <a href={aboutData.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
                  <a href={aboutData.githubUrl} target="_blank" rel="noreferrer">GitHub</a> |{" "}
                  <a href={aboutData.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Edit / Save Buttons */}
        <div className='aboutBtn' style={{ marginTop: "3rem",borderradius: '5px',alignItems:'center',justifyContent:'center',display:'flex'}}>
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
