import React from "react";

const About = () => {
  const coreSkills = [
    "HTML (Markup Language)",
    "CSS (Styling Language)",
    "JavaScript (Programming Language)",
    "Node.js (Runtime Environment)",
    "PostgreSQL (Database Management System)",
  ];

  const learningSkills = [
    "React (UI Library)",
    "Next.js (React Framework)",
    "Svelte (Frontend Framework)",
  ];

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
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* LEARNING SKILLS */}
      <h3 className="skills-title learning mt-8">
        Currently Learning
      </h3>
      <div className="about-skills">
        {learningSkills.map((skill, index) => (
          <span key={index} className="skill-tag learning-tag">
            {skill}
            <small className="badge">In Progress</small>
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;