import React from 'react';

const imageClass =
  "rounded-lg mb-4 w-full h-40 sm:h-48 object-cover object-center"; // responsive heights

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-24 px-4">
      <h1 className="text-3xl sm:text-4xl text-emerald-600 text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* project 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
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
          <div className="mt-auto" />
        </div>

        {/* project 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
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
          <div className="mt-auto" />
        </div>

        {/* project 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
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
          <div className="mt-auto" />
        </div>
      </div>
    </section>
  );
};

export default Projects;