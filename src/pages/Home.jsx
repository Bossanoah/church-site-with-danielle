
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full bg-green-700 text-yellow-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ChurchName</h1>
        <p className="text-lg md:text-2xl mb-6">A place to worship, grow, and serve together.</p>
        <a href="/about" className="inline-block bg-yellow-300 text-green-900 hover:bg-yellow-200 px-6 py-3 rounded-lg font-semibold transition-colors">Learn More About Us</a>
      </section>

      {/* Service Times */}
      <section className="w-full max-w-4xl mt-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Join Us for Worship</h2>
          <p className="text-green-700 mb-1">Sunday Service: <span className="font-semibold">10:00 AM</span></p>
          <p className="text-green-700">Wednesday Bible Study: <span className="font-semibold">7:00 PM</span></p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl px-4 mb-8">
        <div className="bg-green-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">Who We Are</h3>
          <p className="text-green-700">ChurchName is a welcoming community dedicated to sharing the love of Christ and serving our neighbors. We believe in the power of worship, the importance of community, and the call to serve. Join us as we grow together in faith and love.</p>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="w-full max-w-4xl px-4 mb-8">
        <div className="bg-yellow-100 border-l-4 border-green-700 rounded p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">Upcoming Events</h3>
          <ul className="text-green-900 list-disc list-inside">
            <li>Community Outreach - July 20th</li>
            <li>Youth Gathering - July 27th</li>
            <li>Family Picnic - August 3rd</li>
          </ul>
          <a href="/events" className="inline-block mt-4 text-green-800 font-semibold hover:underline">See All Events</a>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="w-full max-w-4xl px-4 mb-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">Our Ministries</h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full">Children's Ministry</span>
            <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full">Youth Ministry</span>
            <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full">Music Ministry</span>
            <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full">Outreach</span>
          </div>
          <a href="/ministries" className="inline-block mt-4 text-green-800 font-semibold hover:underline">Explore Ministries</a>
        </div>
      </section>
    </div>
  );
} 