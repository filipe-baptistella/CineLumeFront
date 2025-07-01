import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Heart, Star } from "lucide-react"
import Image from "next/image"

const favorites = [
  {
    title: "Jurassic World",
    year: "2018",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Jurassic World",
    year: "2018",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Film Name",
    year: "2000",
    rating: "4.9",
    image: "/placeholder.svg?height=300&width=200",
  },
]

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-16 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Your favorites</h1>
            <p className="text-[#787878]">The films and series you like</p>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {favorites.map((movie, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[2/3] bg-[#1d1d1d] rounded-lg overflow-hidden mb-3">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <p className="text-[#787878] text-sm">{movie.year}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#feb625] fill-[#feb625]" />
                    <span className="text-white text-sm">{movie.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
