"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Movie {
  id: number
  title: string
  year: number
  poster: string
}

interface CategoryData {
  [key: string]: Movie[]
}

const categories = ["Action", "Fantasy", "Sci-fi", "Terror", "Romance", "Documentary"]

const movieData: CategoryData = {
  Action: [
    { id: 1, title: "Jurassic World", year: 2018, poster: "/placeholder.svg?height=300&width=200" },
    { id: 2, title: "Mission: Impossible", year: 2023, poster: "/placeholder.svg?height=300&width=200" },
    { id: 3, title: "Fast & Furious X", year: 2023, poster: "/placeholder.svg?height=300&width=200" },
    { id: 4, title: "John Wick 4", year: 2023, poster: "/placeholder.svg?height=300&width=200" },
    { id: 5, title: "The Batman", year: 2022, poster: "/placeholder.svg?height=300&width=200" },
    { id: 6, title: "Top Gun: Maverick", year: 2022, poster: "/placeholder.svg?height=300&width=200" },
    { id: 7, title: "Spider-Man", year: 2021, poster: "/placeholder.svg?height=300&width=200" },
    { id: 8, title: "Avengers: Endgame", year: 2019, poster: "/placeholder.svg?height=300&width=200" },
  ],
  Fantasy: [
    { id: 9, title: "Avatar: The Way of Water", year: 2022, poster: "/placeholder.svg?height=300&width=200" },
    { id: 10, title: "Doctor Strange", year: 2022, poster: "/placeholder.svg?height=300&width=200" },
    { id: 11, title: "The Lord of the Rings", year: 2001, poster: "/placeholder.svg?height=300&width=200" },
    { id: 12, title: "Harry Potter", year: 2001, poster: "/placeholder.svg?height=300&width=200" },
    { id: 13, title: "Fantastic Beasts", year: 2022, poster: "/placeholder.svg?height=300&width=200" },
    { id: 14, title: "The Hobbit", year: 2012, poster: "/placeholder.svg?height=300&width=200" },
  ],
  "Sci-fi": [
    { id: 15, title: "Dune", year: 2021, poster: "/placeholder.svg?height=300&width=200" },
    { id: 16, title: "Blade Runner 2049", year: 2017, poster: "/placeholder.svg?height=300&width=200" },
    { id: 17, title: "Interstellar", year: 2014, poster: "/placeholder.svg?height=300&width=200" },
    { id: 18, title: "The Matrix", year: 1999, poster: "/placeholder.svg?height=300&width=200" },
    { id: 19, title: "Star Wars", year: 2019, poster: "/placeholder.svg?height=300&width=200" },
    { id: 20, title: "Arrival", year: 2016, poster: "/placeholder.svg?height=300&width=200" },
  ],
  Terror: [
    { id: 21, title: "A Quiet Place", year: 2018, poster: "/placeholder.svg?height=300&width=200" },
    { id: 22, title: "Hereditary", year: 2018, poster: "/placeholder.svg?height=300&width=200" },
    { id: 23, title: "The Conjuring", year: 2013, poster: "/placeholder.svg?height=300&width=200" },
    { id: 24, title: "Get Out", year: 2017, poster: "/placeholder.svg?height=300&width=200" },
    { id: 25, title: "It", year: 2017, poster: "/placeholder.svg?height=300&width=200" },
  ],
  Romance: [
    { id: 26, title: "The Notebook", year: 2004, poster: "/placeholder.svg?height=300&width=200" },
    { id: 27, title: "Titanic", year: 1997, poster: "/placeholder.svg?height=300&width=200" },
    { id: 28, title: "La La Land", year: 2016, poster: "/placeholder.svg?height=300&width=200" },
    { id: 29, title: "The Fault in Our Stars", year: 2014, poster: "/placeholder.svg?height=300&width=200" },
    { id: 30, title: "Pride and Prejudice", year: 2005, poster: "/placeholder.svg?height=300&width=200" },
  ],
  Documentary: [
    { id: 31, title: "Free Solo", year: 2018, poster: "/placeholder.svg?height=300&width=200" },
    { id: 32, title: "Won't You Be My Neighbor?", year: 2018, poster: "/placeholder.svg?height=300&width=200" },
    { id: 33, title: "The Social Dilemma", year: 2020, poster: "/placeholder.svg?height=300&width=200" },
    { id: 34, title: "My Octopus Teacher", year: 2020, poster: "/placeholder.svg?height=300&width=200" },
    { id: 35, title: "Tiger King", year: 2020, poster: "/placeholder.svg?height=300&width=200" },
  ],
}

export function MovieCategorySection() {
  const [selectedCategory, setSelectedCategory] = useState("Action")

  const currentMovies = movieData[selectedCategory] || []

  return (
    <section className="bg-[#0D0D0D] px-8 py-12">
      {/* Category Filter Bar */}
      <div className="relative mb-8">
        <div className="flex items-center">
          {/* Scrollable Categories Container */}
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide pr-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-200 border-2 flex-shrink-0 ${
                    selectedCategory === category
                      ? "bg-[#feb625] text-black border-[#feb625] hover:bg-[#feb625]/90"
                      : "bg-white text-black border-white hover:bg-gray-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Fixed "See more" Button */}
          <div className="flex-shrink-0 ml-4">
            <Button className="bg-white text-black border-2 border-white hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-200">
              See more
            </Button>
          </div>
        </div>
      </div>

      {/* Movie Cards Carousel */}
      <div className="space-y-4">
        {/* Category Title */}
        <h3 className="text-xl font-semibold text-white">{selectedCategory} Movies</h3>

        {/* Movies Horizontal Scroll */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {currentMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 group cursor-pointer">
              {/* Movie Card */}
              <div className="w-40 space-y-3">
                {/* Movie Poster */}
                <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    width={160}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Movie Info */}
                <div className="space-y-1">
                  <h4 className="text-white font-medium text-sm leading-tight line-clamp-2">{movie.title}</h4>
                  <p className="text-gray-400 text-xs">{movie.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
