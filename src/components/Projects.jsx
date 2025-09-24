import React from 'react';

const imageClass =
  "rounded-lg mb-4 w-full h-48 object-cover object-center"; // fixed width and height

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl text-emerald-500 text-center mb-8">Projects</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* project 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm flex flex-col items-center">
          <img
            src="src/assets/turfproject.png"
            alt="Project Image"
            className={imageClass}
          />
          <h2 className="text-xl font-bold mb-2 text-emerald-400 text-center">Turf-Slot Booker ( React.js )</h2>
          <div className="flex-1 flex items-center">
            <p className="text-gray-700 mb-4 text-center">
              Web application for booking football turf slots with real-time availability checking and an easyto-
              use interface for players and turf owners.
            </p>
          </div>
          <a
            href="1"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-auto">
            Learn More
          </a>
        </div>

        {/* project 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm flex flex-col items-center">
          <img
            src="src/assets/labourers_connect.png"
            alt="Project Image"
            className={imageClass}
          />
          <h2 className="text-xl font-bold mb-2 text-emerald-400 text-center">Labourers Connect - Job Portal  (Python-Django)</h2>
          <div className="flex-1 flex items-center">
            <p className="text-gray-700 mb-4 text-center">
              job portal connecting employers, labourers, and contractors with real-time job postings, applications,
                and notifications. Features include custom authentication, Google Maps integration for location-based job
                listings, and a rating/review system to ensure trust and transparency.
            </p>
          </div>
          <a
            href="2"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-auto"
          >
            Learn More
          </a>
        </div>

        {/* project 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm flex flex-col items-center">
          <img
            src="src/assets/ev_app.png"
            alt="Project Image"
            className={imageClass}
          />
          <h2 className="text-xl font-bold mb-2 text-emerald-400 text-center">EV Charging Station Finder ( Python-Django )</h2>
          <div className="flex-1 flex items-center">
            <p className="text-gray-700 mb-4 text-center">
              Web application to help users locate nearby EV charging stations with map integration and
                route planning for efficient travel..
            </p>
          </div>
          <a
            href="3"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;