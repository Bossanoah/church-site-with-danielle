import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-60 animate-blob1" />
        <div className="absolute top-1/2 right-[-8rem] w-96 h-96 bg-yellow-100 rounded-full filter blur-2xl opacity-70 animate-blob2" />
        <div className="absolute bottom-[-6rem] left-1/2 w-80 h-80 bg-green-100 rounded-full filter blur-2xl opacity-50 animate-blob3" />
      </div>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Contact Us</h2>
        <form className="bg-white shadow-lg rounded-2xl px-10 pt-8 pb-10 mb-8 border border-green-100">
          <div className="mb-6">
            <label className="block text-green-700 text-base font-semibold mb-2" htmlFor="name">Name</label>
            <input className="shadow-sm border border-green-200 rounded-lg w-full py-3 px-4 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition" id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <label className="block text-green-700 text-base font-semibold mb-2" htmlFor="email">Email</label>
            <input className="shadow-sm border border-green-200 rounded-lg w-full py-3 px-4 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition" id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-8">
            <label className="block text-green-700 text-base font-semibold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow-sm border border-green-200 rounded-lg w-full py-3 px-4 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-green-700 hover:bg-green-800 text-yellow-100 font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition text-lg shadow-md" type="button">
              Send Message
            </button>
          </div>
        </form>
        {/* Large Floating User Icons - Well Separated */}
        <div className="relative flex justify-between items-center mb-8 h-40 px-8">
          {/* Left User Icon */}
          <span className="animate-float-slow">
            <div className="w-36 h-36 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-20 h-20 text-green-400">
                <circle cx="24" cy="16" r="8" fill="currentColor" />
                <rect x="12" y="30" width="24" height="10" rx="5" fill="currentColor" />
              </svg>
            </div>
          </span>
          {/* Right User Icon */}
          <span className="animate-float">
            <div className="w-36 h-36 rounded-full bg-yellow-100 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-20 h-20 text-yellow-400">
                <circle cx="24" cy="16" r="8" fill="currentColor" />
                <rect x="12" y="30" width="24" height="10" rx="5" fill="currentColor" />
              </svg>
            </div>
          </span>
        </div>
        {/* Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-green-100">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159046!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0f7b1%3A0x5045675218ce6e0!2sChurch!5e0!3m2!1sen!2sus!4v1620211234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
} 