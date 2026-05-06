import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "ANASAL MEPFS Corp. Website",
      description:
        "Developed a responsive corporate website to showcase company profile, services, and key information. Focused on clean UI design, smooth navigation, and mobile-friendly layout to improve user experience and online presence.",
      tech: "HTML, CSS, JavaScript, Node.js, MySQLs",
      link: "https://anasal-mepfs-corporation.onrender.com",
    },
    {
      title: "TECHY ME Application",
      description:
        "Built a web-based learning platform with interactive mini-games for IT skill development. Implemented user authentication, session management, scoring system, and database integration to track user progress.",
      tech: "HTML, CSS, JavaScript, Node.js, PostgreSQL",
      link: "https://postgres-test-p05s.onrender.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              <p className="project-tech">
                <strong>Technologies:</strong> {project.tech}
              </p>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;