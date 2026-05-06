import React from "react";

const About = () => {
  const mainSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
  ];

  const learningSkills = [
    "React",
    "NextJS",
    "Svelte",
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
      <div className="about-highlight">
        <p>
          🎯 Career Goal: To build efficient, scalable, and user-focused systems 
          while continuously growing as a professional developer.
        </p>
      </div>

      {/* MAIN SKILLS */}
      <h3 className="skills-title">Core Skills</h3>
      <div className="about-skills">
        {mainSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* LEARNING SKILLS */}
      <h3 className="skills-title learning">Learning Programming Languages</h3>
      <div className="about-skills">
        {learningSkills.map((skill, index) => (
          <span key={index} className="skill-tag learning-tag">
            {skill}
            <small className="badge">Learning</small>
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;