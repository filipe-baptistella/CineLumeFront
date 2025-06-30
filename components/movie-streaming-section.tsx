"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    { id: 1, title: "Jurassic World", year: 2018, poster: "/placeholder.svg?height=270&width=480" },
    { id: 2, title: "Mission: Impossible", year: 2023, poster: "/placeholder.svg?height=270&width=480" },
    { id: 3, title: "Fast & Furious X", year: 2023, poster: "/placeholder.svg?height=270&width=480" },
    { id: 4, title: "John Wick 4", year: 2023, poster: "/placeholder.svg?height=270&width=480" },
    { id: 5, title: "The Batman", year: 2022, poster: "/placeholder.svg?height=270&width=480" },
    { id: 6, title: "Top Gun: Maverick", year: 2022, poster: "/placeholder.svg?height=270&width=480" },
    { id: 7, title: "Spider-Man", year: 2021, poster: "/placeholder.svg?height=270&width=480" },
    { id: 8, title: "Avengers: Endgame", year: 2019, poster: "/placeholder.svg?height=270&width=480" },
  ],
  Fantasy: [
    { id: 9, title: "Avatar: The Way of Water", year: 2022, poster: "/placeholder.svg?height=270&width=480" },
    { id: 10, title: "Doctor Strange", year: 2022, poster: "/placeholder.svg?height=270&width=480" },
    { id: 11, title: "The Lord of the Rings", year: 2001, poster: "/placeholder.svg?height=270&width=480" },
    { id: 12, title: "Harry Potter", year: 2001, poster: "/placeholder.svg?height=270&width=480" },
    { id: 13, title: "Fantastic Beasts", year: 2022, poster: "/placeholder.svg?height=270&width=480" },
    { id: 14, title: "The Hobbit", year: 2012, poster: "/placeholder.svg?height=270&width=480" },
  ],
  "Sci-fi": [
    { id: 15, title: "Dune", year: 2021, poster: "/placeholder.svg?height=270&width=480" },
    { id: 16, title: "Blade Runner 2049", year: 2017, poster: "/placeholder.svg?height=270&width=480" },
    { id: 17, title: "Interstellar", year: 2014, poster: "/placeholder.svg?height=270&width=480" },
    { id: 18, title: "The Matrix", year: 1999, poster: "/placeholder.svg?height=270&width=480" },
    { id: 19, title: "Star Wars", year: 2019, poster: "/placeholder.svg?height=270&width=480" },
    { id: 20, title: "Arrival", year: 2016, poster: "/placeholder.svg?height=270&width=480" },
  ],
  Terror: [
    { id: 21, title: "A Quiet Place", year: 2018, poster: "/placeholder.svg?height=270&width=480" },
    { id: 22, title: "Hereditary", year: 2018, poster: "/placeholder.svg?height=270&width=480" },
    { id: 23, title: "The Conjuring", year: 2013, poster: "/placeholder.svg?height=270&width=480" },
    { id: 24, title: "Get Out", year: 2017, poster: "/placeholder.svg?height=270&width=480" },
    { id: 25, title: "It", year: 2017, poster: "/placeholder.svg?height=270&width=480" },
  ],
  Romance: [
    { id: 26, title: "The Notebook", year: 2004, poster: "/placeholder.svg?height=270&width=480" },
    { id: 27, title: "Titanic", year: 1997, poster: "/placeholder.svg?height=270&width=480" },
    { id: 28, title: "La La Land", year: 2016, poster: "/placeholder.svg?height=270&width=480" },
    { id: 29, title: "The Fault in Our Stars", year: 2014, poster: "/placeholder.svg?height=270&width=480" },
    { id: 30, title: "Pride and Prejudice", year: 2005, poster: "/placeholder.svg?height=270&width=480" },
  ],
  Documentary: [
    { id: 31, title: "Free Solo", year: 2018, poster: "/placeholder.svg?height=270&width=480" },
    { id: 32, title: "Won't You Be My Neighbor?", year: 2018, poster: "/placeholder.svg?height=270&width=480" },
    { id: 33, title: "The Social Dilemma", year: 2020, poster: "/placeholder.svg?height=270&width=480" },
    { id: 34, title: "My Octopus Teacher", year: 2020, poster: "/placeholder.svg?height=270&width=480" },
    { id: 35, title: "Tiger King", year: 2020, poster: "/placeholder.svg?height=270&width=480" },
  ],
}

const topMovies = [
  { title: "Jurassic World", year: 2018, rank: 1, image: "/placeholder.svg?height=300&width=200" },
  { title: "Avatar", year: 2022, rank: 2, image: "/placeholder.svg?height=300&width=200" },
  { title: "Top Gun: Maverick", year: 2022, rank: 3, image: "/placeholder.svg?height=300&width=200" },
  { title: "Black Panther", year: 2022, rank: 4, image: "/placeholder.svg?height=300&width=200" },
  { title: "Spider-Man", year: 2021, rank: 5, image: "/placeholder.svg?height=300&width=200" },
  { title: "The Batman", year: 2022, rank: 6, image: "/placeholder.svg?height=300&width=200" },
  { title: "Doctor Strange", year: 2022, rank: 7, image: "/placeholder.svg?height=300&width=200" },
  { title: "Thor: Love and Thunder", year: 2022, rank: 8, image: "/placeholder.svg?height=300&width=200" },
  { title: "Minions: The Rise of Gru", year: 2022, rank: 9, image: "/placeholder.svg?height=300&width=200" },
  { title: "Lightyear", year: 2022, rank: 10, image: "/placeholder.svg?height=300&width=200" },
]

export function MovieStreamingSection() {
  const [selectedCategory, setSelectedCategory] = useState("Action")
  const categoryScrollRef = useRef<HTMLDivElement>(null)
  const movieScrollRef = useRef<HTMLDivElement>(null)
  const topMoviesScrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })

  const currentMovies = movieData[selectedCategory] || []

  // Scroll functions
  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right", amount = 200) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -amount : amount
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Horizontal mouse wheel scroll handler
  const handleWheel = (e: React.WheelEvent, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      e.preventDefault()
      ref.current.scrollLeft += e.deltaY
    }
  }

  // Drag handlers for categories
  const handleCategoryMouseDown = (e: React.MouseEvent) => {
    if (!categoryScrollRef.current) return
    setIsDragging(true)
    setDragStart({
      x: e.pageX - categoryScrollRef.current.offsetLeft,
      scrollLeft: categoryScrollRef.current.scrollLeft,
    })
  }

  const handleCategoryMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !categoryScrollRef.current) return
    e.preventDefault()
    const x = e.pageX - categoryScrollRef.current.offsetLeft
    const walk = (x - dragStart.x) * 2
    categoryScrollRef.current.scrollLeft = dragStart.scrollLeft - walk
  }

  // Drag handlers for movies
  const handleMovieMouseDown = (e: React.MouseEvent) => {
    if (!movieScrollRef.current) return
    setIsDragging(true)
    setDragStart({
      x: e.pageX - movieScrollRef.current.offsetLeft,
      scrollLeft: movieScrollRef.current.scrollLeft,
    })
  }

  const handleMovieMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !movieScrollRef.current) return
    e.preventDefault()
    const x = e.pageX - movieScrollRef.current.offsetLeft
    const walk = (x - dragStart.x) * 2
    movieScrollRef.current.scrollLeft = dragStart.scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    document.addEventListener("mouseup", handleGlobalMouseUp)
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  return (
    <section className="bg-[#0D0D0D] px-8 py-12">
      {/* Category Filter Row */}
      <div className="relative mb-8">
        <div className="flex items-center">
          {/* Scrollable Categories Container */}
          <div className="flex-1 overflow-hidden group">
            <div className="relative">
              <div
                ref={categoryScrollRef}
                className={`flex space-x-4 overflow-x-auto scrollbar-hide pr-4 pb-2 ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                onWheel={(e) => handleWheel(e, categoryScrollRef)}
                onMouseDown={handleCategoryMouseDown}
                onMouseMove={handleCategoryMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-200 border-2 flex-shrink-0 select-none ${
                      selectedCategory === category
                        ? "bg-[#feb625] text-black border-[#feb625] hover:bg-[#feb625]/90"
                        : "bg-white text-black border-white hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Category Scroll Navigation Buttons */}
              <button
                onClick={() => scrollContainer(categoryScrollRef, "left")}
                className="absolute left-0 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollContainer(categoryScrollRef, "right")}
                className="absolute right-4 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Fixed "See more" Button */}
          <div className="flex-shrink-0 ml-4">
            <Button className="bg-white text-black border-2 border-white hover:bg-[#feb625] hover:text-black hover:border-[#feb625] px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              See more
            </Button>
          </div>
        </div>
      </div>

      {/* Movie Cards Carousel */}
      <div className="space-y-4 mb-12">
        {/* Category Title */}
        <h3 className="text-xl font-semibold text-white">{selectedCategory} Movies</h3>

        {/* Movies Horizontal Scroll */}
        <div className="relative group">
          <div
            ref={movieScrollRef}
            className={`flex space-x-6 overflow-x-auto scrollbar-hide pb-4 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onWheel={(e) => handleWheel(e, movieScrollRef)}
            onMouseDown={handleMovieMouseDown}
            onMouseMove={handleMovieMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {currentMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="flex-shrink-0 group cursor-pointer select-none"
              >
                {/* Movie Card */}
                <div className="w-60 space-y-3">
                  {/* Movie Poster - 16:9 Aspect Ratio */}
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Movie Info */}
                  <div className="space-y-1">
                    <h4 className="text-white font-medium text-sm leading-tight line-clamp-2">{movie.title}</h4>
                    <p className="text-gray-400 text-xs">{movie.year}</p>
                  </div>
                </div>
              </Link>
            ))}

            {/* "See All" Button at End of Carousel */}
            <div className="flex-shrink-0 flex items-center justify-center w-60">
              <Button className="bg-gray-800 text-white border-2 border-gray-600 hover:bg-[#feb625] hover:text-black hover:border-[#feb625] px-8 py-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group flex items-center space-x-2">
                <span>See All</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Movie Scroll Navigation Buttons */}
          <button
            onClick={() => scrollContainer(movieScrollRef, "left", 300)}
            className="absolute left-0 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollContainer(movieScrollRef, "right", 300)}
            className="absolute right-0 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Top 10 Section */}
      <div className="space-y-6 pb-12">
        <h2 className="text-2xl font-bold text-white">Top 10</h2>
        <div className="relative group">
          <div
            ref={topMoviesScrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            onWheel={(e) => handleWheel(e, topMoviesScrollRef)}
          >
            {topMovies.map((movie) => (
              <Link key={movie.rank} href={`/movie/${movie.rank}`} className="flex-shrink-0 group cursor-pointer">
                <div className="relative w-48">
                  <div className="aspect-[2/3] bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#feb625] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">{movie.rank}</span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-white text-sm font-medium">{movie.title}</p>
                    <p className="text-gray-400 text-xs">{movie.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Top 10 Scroll Navigation Buttons */}
          <button
            onClick={() => scrollContainer(topMoviesScrollRef, "left", 250)}
            className="absolute left-0 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollContainer(topMoviesScrollRef, "right", 250)}
            className="absolute right-0 inset-y-0 z-10 bg-black/50 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 hidden group-hover:flex my-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
