import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
          
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-4">
              Welcome to our Next.js application! We are a team of passionate developers
              dedicated to creating amazing web experiences.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Story</h2>
            
            <p className="text-gray-600 mb-4">
              Founded in 2020, our company has been at the forefront of web development,
              leveraging cutting-edge technologies like Next.js, React, and Tailwind CSS
              to build performant and beautiful applications.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            
            <p className="text-gray-600 mb-6">
              Our mission is to simplify web development while delivering exceptional
              results for our clients. We believe in the power of modern tools and
              frameworks to create digital experiences that make a difference.
            </p>
            
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-green-700 text-sm">
                <strong>Did you know?</strong> This page is automatically routed by Next.js
                because it's located in the <code>app/about</code> directory.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-50 py-4 px-8 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            © 2023 Next.js App. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}