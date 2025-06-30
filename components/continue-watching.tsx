"use client"

import { Play } from "lucide-react"
import Image from "next/image"

interface ContinueWatchingItem {
  id: number
  title: string
  thumbnail: string
  progress: number
}

const continueWatchingData: ContinueWatchingItem[] = [
  {
    id: 1,
    title: "Jurassic World: Fallen Kingdom",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 75,
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 45,
  },
  {
    id: 3,
    title: "Top Gun: Maverick",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 80,
  },
  {
    id: 4,
    title: "Black Panther: Wakanda Forever",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 30,
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 90,
  },
  {
    id: 6,
    title: "The Batman",
    thumbnail: "/placeholder.svg?height=180&width=320",
    progress: 60,
  },
]

export function ContinueWatching() {
  return (
    <section className="bg-[#0D0D0D] px-8 py-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-white mb-8 text-left">Continue Watching</h2>

      {/* Horizontal Scrolling Container */}
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {continueWatchingData.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-80 group cursor-pointer">
            {/* Movie Card */}
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Thumbnail Image */}
              <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

              {/* Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              {/* Movie Title - Top Left */}
              <div className="absolute top-4 left-4">
                <h3 className="text-white font-semibold text-lg leading-tight max-w-[250px] line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* Play Button - Bottom Left */}
              <div className="absolute bottom-4 left-4">
                <button className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-200 group-hover:scale-110">
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </button>
              </div>

              {/* Progress Bar and Percentage - Bottom Right */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                {/* Progress Bar */}
                <div className="w-20 h-2 bg-white/30 rounded-full overflow-hidden border border-white/20">
                  <div
                    className="h-full bg-[#feb625] rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                {/* Percentage Text */}
                <span className="text-white text-sm font-medium min-w-[35px]">{item.progress}%</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
