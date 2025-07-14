import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Blog & Updates</h2>
        <p className="text-lg text-green-700 mb-4">Read the latest news, updates, and inspirational stories from our church community.</p>
        <div className="bg-yellow-100 border-l-4 border-green-700 text-green-900 p-4">
          <p>No blog posts yet. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
} 