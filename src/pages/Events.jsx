import React from 'react';

export default function Events() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Upcoming Events</h2>
        <p className="text-lg text-green-700 mb-4">Stay tuned for our upcoming events! We regularly host worship services, community outreach, youth gatherings, and more.</p>
        <div className="bg-yellow-100 border-l-4 border-green-700 text-green-900 p-4">
          <p>No events scheduled at this time. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
} 