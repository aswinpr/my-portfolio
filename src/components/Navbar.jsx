import react from 'react'

const Navbar = () => {
    return(
        <nav className="fixed top-0 left-0 w-full z-50 bg-emerald-700 text-white py-4 shadow-md">
            <ul className="flex justify-center space-x-10 text-lg font-bold">
                <li>
                    <a href="#home" className="sm:hover:border-b-2 border-b-emerald-600 sm:hover:text-gray-200 transition-colors duration-200">Home</a>
                </li>
                <li>
                    <a href="#about" className="sm:hover:border-b-2 hover:text-gray-200 transition-colors duration-200">About</a>
                </li>
                <li>
                    <a href="#projects" className="sm:hover:border-b-2 hover:text-gray-200 transition-colors duration-200">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="sm:hover:border-b-2 hover:text-gray-200 transition-colors duration-200">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar 