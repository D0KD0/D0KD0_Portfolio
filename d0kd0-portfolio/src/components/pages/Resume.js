import React from 'react';

const frontEnd = [
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "REACT",
  "jQuery"
]

const backEnd = [
  "APIs",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "MERN"
]

const nonCoding = [
  "Project management",
  "Supply chain management - Domestic, Overseas",
  "JIRA, Confluence",
  "Material planning",
  "Production planning",
  "Logistics management"
]

export default function Resume() {
  return (
    <div className="tab-container">
      <div>
        <p>
            
        </p>
        <p>
          
        </p>
        <h2>Resume Page</h2>
      </div>
      <div>
      </div>
      <div className="skills">
        <h4>Coding: Front-End</h4>
        <ul>
          {frontEnd.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4>Coding: Backend-End</h4>
        <ul>
          {backEnd.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4>Non-Coding</h4>
        <ul>
          {nonCoding.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
