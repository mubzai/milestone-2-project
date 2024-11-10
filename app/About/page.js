import React from 'react';
import Navbar from '@/components/navbar';

const About = () => {
  return (
    <div className="bg-white-50 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
    <Navbar />

    {/* Hero Section */}
    <section className="bg-white py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto flex flex-col items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-5xl font-bold text-white-800 bg-gradient-to-r from-blue-500 to-purple-500 text-white">About Me</h1>
        <p className="text-lg text-white-600 mt-4 max-w-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          I'm a passionate and creative web developer with a focus on creating clean, responsive, and engaging web experiences. 
          My journey started with HTML and CSS, and I've since honed my skills in TypeScript and modern web development frameworks.
        </p>
      </div>
    </section>

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

    {/* Experience Section */}
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white" >
      <div className="container mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h2 className="text-3xl font-bold text-center text-white-800">Experience & Journey</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience 1 */}
          <div className="p-8 bg-white shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h3 className="text-xl font-semibold text-white-700">Frontend Developer</h3>
            <p className="text-white-600 mt-2">Worked on building clean, responsive, and interactive UIs.</p>
          </div>
          {/* Experience 2 */}
          <div className="p-8 bg-white shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h3 className="text-xl font-semibold text-white-700">Personal Projects</h3>
            <p className="text-white-600 mt-2">
              Built multiple web applications showcasing skills in modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-16 bg-white-800 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
        <p className="text-lg text-white-300 mt-4">
          If you're looking for a dedicated web developer who is always eager to learn and create, let's get in touch.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700">
          Contact Me
        </a>
      </div>
    </section>
  </div>
  );
};

export default About;
