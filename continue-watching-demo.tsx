"use client"

import { ContinueWatching } from "./components/continue-watching"

export default function ContinueWatchingDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Demo Header */}
      <div className="px-8 py-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">
          CINE<span className="text-[#feb625]">LUME</span>
        </h1>
        <p className="text-gray-400 mt-2">Continue Watching Section Demo</p>
      </div>

      {/* Continue Watching Section */}
      <ContinueWatching />

      {/* Additional Content for Context */}
      <div className="px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-400 text-sm">Horizontal scrolling carousel with smooth animations</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-400 text-sm">Progress tracking with visual progress bars</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-400 text-sm">Responsive design with hover effects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
