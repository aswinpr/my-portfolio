import react from 'react'


const Navbar = () => {
    return(
        
        <div className="navbar bg-blue-600">
            
            <nav class="sticky top-0 text-white py-4 ">
                <ul class="flex justify-center space-x-10 text-lg font-bold">
                <li><a href="#home" class="sm:hover:border-b sm:hover:text-gray-200">Home</a></li>
                <li><a href="#about" class="sm:hover:border-b hover:text-gray-200">About</a></li>
                <li><a href="#projects" class="sm:hover:border-b hover:text-gray-200">Projects</a></li>
                <li><a href="#contact" class="sm:hover:border-b hover:text-grey-200">Contact</a></li>
                </ul>
            </nav>
            <section id="home" class="h-screen flex items-center justify-center  bg-amber-300">
                <h1 class="text-3xl text-emerald-500">Home</h1>
            </section>

            <section id="about" class="h-screen flex items-center justify-center bg-indigo-700">
                <h1 class="text-3xl text-emerald-500">About</h1>
            </section>

            <section id="projects" class="h-screen flex items-center justify-center bg-emerald-500">
                <h1 class="text-3xl text-emerald-500">Projects</h1>
            </section>


            <section id="contact" class="h-screen flex items-center justify-center">
                <h1 class="text-3xl text-emerald-500">Contact Us</h1>
            </section>

        </div>
    )
}
export default Navbar 