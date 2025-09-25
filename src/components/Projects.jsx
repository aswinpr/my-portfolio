import React, { useState } from "react";
import UnderConstruction from "./Underconstruction"; 

import turfImg from "../assets/turfproject.png";
import labourImg from "../assets/labourers_connect.png";
import evImg from "../assets/ev_app.png";

const imageClass =
  "rounded-lg mb-4 w-full h-40 sm:h-48 object-cover object-center"; 

const projects = [
  {
    img: turfImg,
    title: "Turf-Slot Booker (React.js)",
    desc: "Web application for booking football turf slots with real-time availability checking and an easy-to-use interface for players and turf owners.",
  },
  {
    img: labourImg,
    title: "Labourers Connect - Job Portal (Python-Django)",
    desc: "Job portal connecting employers, labourers, and contractors with real-time job postings, applications, and notifications. Features include custom authentication, Google Maps integration, and a rating/review system.",
  },
  {
    img: evImg,
    title: "EV Charging Station Finder (Python-Django)",
    desc: "Web application to help users locate nearby EV charging stations with map integration and route planning for efficient travel.",
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-24 px-4"
    >
      <h1 className="text-3xl sm:text-4xl text-emerald-600 text-center mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={project.img}
              alt={project.title}
              className={imageClass}
            />
            <h2 className="text-xl font-bold mb-2 text-emerald-400 text-center">
              {project.title}
            </h2>
            <div className="flex-1 flex items-center">
              <p className="text-gray-700 mb-4 text-center">{project.desc}</p>
            </div>
            <div className="mt-auto w-full flex justify-center">
              <button
                onClick={() => setShowModal(true)} // open modal
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded transition-colors duration-200 shadow mt-2"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render modal when active */}
      {showModal && <UnderConstruction onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Projects;
