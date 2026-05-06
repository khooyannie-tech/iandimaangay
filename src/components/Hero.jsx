import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/BSIT-15.jpg";
import "../styles.css"; // make sure path is correct

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-name"
          >
            Ian B. Dimaangay
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            Bachelor of Science in Information Technology <br />
            Web Developer | Backend & Responsive Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-description"
          >
            I develop responsive web applications using HTML, CSS, JavaScript, and Node.js.
            Experienced in backend development, API integration, and building systems that
            improve usability, performance, and overall user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a
              href="https://anasal-mepfs-corporation.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              Live Demo
            </a>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <img src={profile} alt="Ian Dimaangay" className="profile-img" />
            <div className="image-glow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;