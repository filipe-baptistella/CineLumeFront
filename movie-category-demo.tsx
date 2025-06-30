"use client"

import { MovieCategorySection } from "./components/movie-category-section"

export default function MovieCategoryDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Demo Header */}
      <div className="px-8 py-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">
          CINE<span className="text-[#feb625]">LUME</span>
        </h1>
        <p className="text-gray-400 mt-2">Movie Category Section Demo</p>
      </div>

      {/* Movie Category Section */}
      <MovieCategorySection />

      {/* Additional Demo Content */}
      <div className="px-8 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Dynamic Categories</h3>
            <p className="text-gray-400 text-sm">Switch between different movie categories with smooth transitions</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Fixed "See More"</h3>
            <p className="text-gray-400 text-sm">The "See more" button stays fixed while categories scroll</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Smooth Scrolling</h3>
            <p className="text-gray-400 text-sm">Both category and movie carousels support touch and wheel scrolling</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-400 text-sm">Optimized for desktop and mobile viewing experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}
