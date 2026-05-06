import React from "react";

const Services = () => {
  const services = [
    {
      title: "Frontend Web Development",
      description:
        "Development of responsive and user-friendly websites using HTML, CSS, and JavaScript. Focused on clean UI design, smooth navigation, and mobile-friendly layouts as applied in real-world projects.",
    },
    {
      title: "Backend Development",
      description:
        "Basic backend development using Node.js and PHP, including handling server-side logic, API integration, and building functional web systems.",
    },
    {
      title: "Web-Based System Development",
      description:
        "Creation of interactive systems such as learning platforms with features like user authentication, session handling, and progress tracking.",
    },
    {
      title: "Database Management",
      description:
        "Design and integration of databases using PostgreSQL to manage user data, application content, and system functionality efficiently.",
    },
    {
      title: "UI Design & User Experience",
      description:
        "Application of clean and structured interface design to improve usability, accessibility, and overall user experience in web applications.",
    },
    {
      title: "Technical Support & Networking",
      description:
        "Basic knowledge in networking, cabling, and troubleshooting to support system operations and maintain stable technical environments.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;