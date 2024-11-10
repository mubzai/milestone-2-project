import Image from "next/image";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
              <main>
  <Navbar/>
  
  <div className="min-h-screen bg-theme-color flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
    {/* Hero Section */}
    <div className="text-center space-y-4 ">
    <h1 className="text-5xl font-bold text-white-800 mt-4 ">
  Hi, I'm a Web Developer
</h1>
      <p className="text-xl text-white-600 max-w-2xl">
        I'm an intermediate web developer with strong expertise in HTML, CSS, and TypeScript.
        I specialize in building responsive and user-friendly web applications, and I’m always
        looking for new challenges to enhance my skills.
      </p>
      <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
        View My Projects
      </button>
    </div>

    {/* Skills Section */}
    <section className="py-16 bg-white-100 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white-800">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="p-8 bg-white shadow-lg rounded-lg text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h3 className="text-2xl font-semibold text-white-700 bg-gradient-to-r from-blue-500 to-purple-500 text-white">HTML & CSS</h3>
            <p className="text-white-600 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Expert in building responsive layouts and maintaining accessibility.
            </p>
          </div>
          {/* Skill 2 */}
          <div className="p-8 bg-white shadow-lg rounded-lg text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h3 className="text-2xl font-semibold text-white-700 ">TypeScript</h3>
            <p className="text-white-600 mt-4">
              Proficient with TypeScript for building scalable and reliable web apps.
            </p>
          </div>
          {/* Skill 3 */}
          <div className="p-8 bg-white shadow-lg rounded-lg text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h3 className="text-2xl font-semibold text-white-700 bg-gradient-to-r from-blue-500 to-purple-500 text-white">JavaScript</h3>
            <p className="text-white-600 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Solid understanding of JavaScript for building interactive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="mt-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white-800">Let’s Build Something Together</h2>
        <p className="text-lg text-white-600 mt-4">
          Whether you have a project or just want to connect, feel free to reach out.
        </p>
        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          Contact Me 
        </button>
      </div>
    </section>
  </div>
</main>
  
  );
}

