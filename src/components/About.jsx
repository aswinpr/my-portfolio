import React, { useState } from "react";
import aboutimage from "../assets/image1.jpg";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-emerald-50 px-6 py-16">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={aboutimage}
          alt="nature-image"
          className="h-80 w-80 md:h-96 md:w-96 rounded-xl object-cover object-center shadow-xl "
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-4 tracking-tight">About Me</h1>
        <p className="text-lg text-emerald-700 leading-relaxed bg-white/80 rounded-lg p-2 shadow-md">
          I’m an MCA graduate with a strong interest in technology and software
          development. I enjoy learning new tools and building solutions that
          solve real-world problems. I'm looking for opportunities to grow my
          skills and contribute to exciting tech projects. Always open to
          learning and connecting with like-minded professionals.
        </p>

        {/* Buttons */}
        <div className="links flex gap-4 mt-6">
          <button
            onClick={() => handleClick("skills")}
            className="bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
            Skills
          </button>
          <button
            onClick={() => handleClick("education")}
            className="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
            Education
          </button>
          <button
            onClick={() => handleClick("experience")}
            className="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
            Experience
          </button>
        </div>

        {/* Condition*/}
        <div className="mt-6 w-full">
          {activeSection === "skills" && (
            <div className="bg-white p-4 rounded-lg shadow-md text-emerald-700">
              <h2 className="text-xl font-bold mb-2">Skills</h2>
              <p>Python | Django | MySQL | JavaScript | ReactJs | HTML | CSS</p>
            </div>
          )}
          {activeSection === "education" && (
            <div className="bg-white p-4 rounded-lg shadow-md text-emerald-700">
              <h2 className="text-xl font-bold mb-2">Education</h2>
              <p>MCA (2023-2025) | BCA (2018-2021)</p><br></br>
            </div>
          )}
          {activeSection === "experience" && (
            <div className="bg-white p-4 rounded-lg shadow-md text-emerald-700">
              <h2 className="text-xl font-bold mb-2">Experience</h2>
              <p>Internship in Python Full-Stack Web Development</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
