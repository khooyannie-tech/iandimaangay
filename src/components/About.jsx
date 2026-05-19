import React from "react";

const About = () => {
  const coreSkills = [
    "HTML (Markup Language)",
    "CSS (Styling Language)",
    "JavaScript (Programming Language)",
    "Node.js (Runtime Environment)",
    "SQL (Query Language)",
    "PostgreSQL (Database Management System)",
    "MySQL (Relational Database Management System)",
    "React (UI Library)",
    "Next.js (React Framework)",
    "Svelte (Frontend Framework)",
  ];

  const learningIndices = [9]; // indices of skills currently being learned

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-700 leading-relaxed">
        I am a Bachelor of Science in Information Technology student with a strong
        foundation in web development and system design. I specialize in building
        responsive, user-centered web applications using modern technologies.
      </p>

      <p className="text-gray-700 leading-relaxed mt-4">
        I have developed real-world projects including a corporate website and an
        interactive learning platform, applying clean UI design, backend integration,
        and database management.
      </p>

      {/* CAREER GOAL */}
      <div className="about-highlight mt-6">
        <p>
          🎯 Career Goal: To build efficient, scalable, and user-focused systems
          while continuously growing as a professional developer.
        </p>
      </div>

      {/* CORE SKILLS */}
      <h3 className="skills-title mt-8">Core Technologies</h3>
      <div className="about-skills">
        {coreSkills.map((skill, index) => (
          <span
            key={index}
            className={`skill-tag ${learningIndices.includes(index) ? "learning-tag" : ""}`}
          >
            {skill}
            {learningIndices.includes(index) && (
              <small className="badge">In Progress</small>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;