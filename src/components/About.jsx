import react from 'react'


const About = () => {
    return(
        
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-emerald-50 px-6 py-16"
        >
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src="src/assets/image1.jpg"
                    alt="nature-image"
                    className="h-80 w-80 md:h-96 md:w-96 rounded-xl object-cover object-center shadow-xl "
                />
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
                <h1 className="text-4xl font-extrabold text-emerald-700 mb-4 tracking-tight">
                    About Me
                </h1>
                <p className="text-lg text-emerald-700 leading-relaxed bg-white/80 rounded-lg p-2 shadow-md">
                    I’m an MCA graduate with a strong interest in technology and software development. I enjoy learning new tools and building solutions that solve real-world problems. I'm looking for opportunities to grow my skills and contribute to exciting tech projects. Always open to learning and connecting with like-minded professionals.
                </p>
                <div className="links flex gap-4 mt-6">
                    <button className="bg-transparent hover:bg-blue-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
                        Skills
                    </button>
                    <button className="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
                        Education
                    </button>
                    <button className="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-700 hover:border-transparent rounded">
                        Experience
                    </button>
                </div>
            </div>
            
        </section>
    )
}
export default About 