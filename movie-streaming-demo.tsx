"use client"

import { MovieStreamingSection } from "./components/movie-streaming-section"

export default function MovieStreamingDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Demo Header */}
      <div className="px-8 py-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">
          CINE<span className="text-[#feb625]">LUME</span>
        </h1>
        <p className="text-gray-400 mt-2">Advanced Movie Streaming Section</p>
      </div>

      {/* Movie Streaming Section */}
      <MovieStreamingSection />

      {/* Feature Highlights */}
      <div className="px-8 py-12 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-8">Interactive Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">🖱️ Mouse Wheel Scroll</h3>
            <p className="text-gray-400 text-sm">
              Use your mouse wheel to scroll horizontally through categories and movies
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">👆 Click & Drag</h3>
            <p className="text-gray-400 text-sm">
              Click and drag to scroll through content with visual cursor feedback
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">🎯 Fixed Controls</h3>
            <p className="text-gray-400 text-sm">"See more" button stays fixed while categories scroll independently</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">✨ Hover Effects</h3>
            <p className="text-gray-400 text-sm">Interactive hover states with color changes and scale animations</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">📱 Touch Support</h3>
            <p className="text-gray-400 text-sm">Fully responsive with touch and swipe support for mobile devices</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-3 flex items-center">🎬 16:9 Posters</h3>
            <p className="text-gray-400 text-sm">Movie cards use proper 16:9 aspect ratio with smooth animations</p>
          </div>
        </div>
      </div>
    </div>
  )
}
