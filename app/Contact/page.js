import React from 'react';
import Navbar from '@/components/navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="flex flex-col items-center justify-center py-10 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <form className="mt-8 space-y-4 w-full max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Your Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
