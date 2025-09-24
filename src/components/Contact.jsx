import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black py-12 pt-24 px-4 text-emerald-400"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact me</h2>
      <div className="container mx-auto max-w-5xl w-full px-4">
        <div className="bg-black rounded-2xl border border-emerald-800/40 shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center bg-black">
            <div className="w-full flex flex-col items-center">
              {/* Contact Details */}
              <div className="space-y-4 mb-8 flex flex-col items-center w-full max-w-md">
                <div className="email_phone">
                    <div className="flex items-center gap-3 w-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900/20">
                    <div className="div">
                      
                    </div>
                    {/* Email Icon */}
                    <svg className="h-7 w-7 text-emerald-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </span>
                  <span className="text-lg select-all break-all">
                    aswinpr46@gmail.com
                  </span>
                </div>
                 <div className="flex items-center gap-3 w-full mt-8">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900/20">
                    {/* Phone Icon */}
                    <svg className="h-7 w-7 text-emerald-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </span>
                  <span className="text-lg select-all break-all">
                    +91 9495855989
                  </span>
                </div>
                </div>
                
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-4">
                <a
                  href="https://www.facebook.com/aswin.ramesh.739"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 hover:text-white transition-colors group"
                >
                  {/* Facebook Icon */}
                  <svg className="h-7 w-7 transition-colors duration-200 group-hover:text-white text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aswin_pr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 hover:text-white transition-colors group"
                  aria-label="Instagram"
                >
                  {/* Instagram Icon */}
                  <svg className="h-7 w-7 transition-colors duration-200 group-hover:text-white text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://github.com/aswinpr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 hover:text-white transition-colors group"
                  aria-label="GitHub"
                >
                  {/* GitHub Icon */}
                  <svg className="h-7 w-7 transition-colors duration-200 group-hover:text-white text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aswin-pr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-500 hover:text-white transition-colors group"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn Icon */}
                  <svg className="h-7 w-7 transition-colors duration-200 group-hover:text-white text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Download CV Button */}
            <div className="mt-10 flex justify-center w-full">
              <a
                className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-lg border border-emerald-700 hover:bg-emerald-500 hover:text-white focus:bg-emerald-500 focus:text-white active:bg-emerald-600 active:text-white transition-colors text-lg"
                download
                href="src/assets/Aswin_pr_Resume.pdf"
              >
                {/* Download Icon */}
                <svg className="h-6 w-6 text-emerald-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          {/* Right Section (Form) */}
          <div className="flex-1 p-8 flex items-center bg-black">
            <form className="w-full max-w-md mx-auto flex flex-col gap-6">
              <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="p-3 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-black text-emerald-400 placeholder:text-emerald-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-black text-emerald-400 placeholder:text-emerald-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="p-3 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-black text-emerald-400 placeholder:text-emerald-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="font-bold py-3 px-6 rounded-lg border border-emerald-700 hover:bg-emerald-500 hover:text-black transition-colors shadow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;