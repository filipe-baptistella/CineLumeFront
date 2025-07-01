import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recentlyWatched = [
  {
    id: 1,
    title: "Jurassic World",
    year: "2018",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Jurassic World",
    year: "2018",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: false,
  },
]

export default function RecentlyWatchedPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-16 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Recently watched</h1>
            <p className="text-[#787878]">The films and series you see recently</p>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyWatched.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-[#1a1a1a] rounded-lg overflow-hidden mb-3">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Favorite Heart Icon */}
                  {movie.isFavorite && (
                    <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </button>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <p className="text-[#787878] text-sm">{movie.year}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#feb625] fill-[#feb625]" />
                    <span className="text-white text-sm">{movie.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
