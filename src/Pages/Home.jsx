import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import { getAbout } from '../api/aboutApi';
import { getExperience } from '../api/experienceApi';
import { getEducation } from '../api/educationApi';
import { getSkills } from '../api/skillApi';
import { getProjects } from '../api/projectApi';
import ProfileImg from '../Assets/ProfileImg.png';

function Home() {
  const [about, setAbout] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAbout().then(data => setAbout(data[0]));
    getExperience().then(setExperiences);
    getEducation().then(setEducation);
    getSkills().then(setSkills);
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="home-container">
      {about && (
        <section className="about-section gradient-card">
          <div className="about-left">
            <img src={ProfileImg} alt="Profile" />
          </div>
          <div className="about-right">
            <h1>{about.fullName}</h1>
            <h3>{about.title}</h3>
            <p>{about.summary}</p>
            <ul className="contact-list">
              <li>📍 {about.location}</li>
              <li>📧 {about.email}</li>
              <li>📞 {about.phone}</li>
              <li>
                🔗 <a href={about.linkedinUrl}>LinkedIn</a> |{" "}
                <a href={about.githubUrl}>GitHub</a> |{" "}
                <a href={about.resumeUrl}>Resume</a>
              </li>
            </ul>
          </div>
        </section>
      )}

      <section className="zigzag-section">
        <h2>Experience</h2>
        {experiences.map((exp, i) => (
          <div key={exp.id} className={`zigzag-card ${i % 2 === 0 ? "left" : "right"}`}>
            <h3>{exp.jobTitle} @ {exp.company}</h3>
            <p>{exp.description}</p>
            <span>{exp.startDate} - {exp.endDate}</span>
          </div>
        ))}
      </section>

      <section className="zigzag-section">
        <h2>Education</h2>
        {education.map((edu, i) => (
          <div key={edu.id} className={`zigzag-card ${i % 2 === 0 ? "left" : "right"}`}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}, {edu.location}</p>
            <span>{edu.startDate} - {edu.endDate}</span>
          </div>
        ))}
      </section>

      <section className="skill-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card gradient-card">
              <h4>{skill.name}</h4>
              <p>{skill.category}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="zigzag-section">
        <h2>Projects</h2>
        {projects.map((proj, i) => (
          <div key={proj.id} className={`zigzag-card ${i % 2 === 0 ? "left" : "right"}`}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.url} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
