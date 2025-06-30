"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Star, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface SearchResult {
  id: number
  title: string
  year: number
  type: "movie" | "series"
  rating: string
  genre: string
  image: string
  isFavorite?: boolean
}

const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    title: "Jurassic World",
    year: 2018,
    type: "movie",
    rating: "4.9",
    genre: "Action, Sci-fi",
    image: "/placeholder.svg?height=400&width=300",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Jurassic Park",
    year: 1993,
    type: "movie",
    rating: "4.8",
    genre: "Action, Adventure",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "World War Z",
    year: 2013,
    type: "movie",
    rating: "4.2",
    genre: "Action, Horror",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Avatar: The Way of Water",
    year: 2022,
    type: "movie",
    rating: "4.7",
    genre: "Fantasy, Sci-fi",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "The World According to Jeff Goldblum",
    year: 2019,
    type: "series",
    rating: "4.5",
    genre: "Documentary",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Westworld",
    year: 2016,
    type: "series",
    rating: "4.6",
    genre: "Sci-fi, Drama",
    image: "/placeholder.svg?height=400&width=300",
  },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    setSearchQuery(query)
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      const filteredResults = mockSearchResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.genre.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setResults(filteredResults)
      setIsLoading(false)
    }, 500)
  }

  const filteredResults = results.filter((result) => {
    if (selectedFilter === "all") return true
    return result.type === selectedFilter
  })

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-16 p-8">
        <div className="space-y-8">
          {/* Search Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Search</h1>

            {/* Search Input */}
            <div className="relative max-w-2xl">
              <Input
                type="text"
                placeholder="Search for movies, series, documentaries..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  if (e.target.value.trim()) {
                    performSearch(e.target.value)
                  } else {
                    setResults([])
                  }
                }}
                className="w-full bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#787878] focus:border-[#feb625] focus:ring-0 pl-12 pr-4 py-3 rounded-lg text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#787878]" />
            </div>

            {/* Search Results Info */}
            {query && (
              <div className="flex items-center justify-between">
                <p className="text-[#787878]">
                  {isLoading ? (
                    "Searching..."
                  ) : (
                    <>
                      {filteredResults.length} results for "{query}"
                    </>
                  )}
                </p>

                {/* Filter Buttons */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-[#787878]" />
                  <div className="flex space-x-2">
                    {["all", "movie", "series"].map((filter) => (
                      <Button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedFilter === filter
                            ? "bg-[#feb625] text-black"
                            : "bg-transparent border border-[#787878] text-[#787878] hover:bg-[#1a1a1a] hover:text-white"
                        }`}
                      >
                        {filter === "all" ? "All" : filter === "movie" ? "Movies" : "Series"}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Results */}
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="aspect-[3/4] bg-[#1a1a1a] rounded-lg animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-[#1a1a1a] rounded animate-pulse" />
                    <div className="h-3 bg-[#1a1a1a] rounded w-2/3 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredResults.map((result) => (
                <Link key={result.id} href={`/movie/${result.id}`} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-[#1a1a1a] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={result.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Type Badge */}
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                      {result.type === "movie" ? "Movie" : "Series"}
                    </div>

                    {/* Favorite Heart Icon */}
                    {result.isFavorite && (
                      <button className="absolute top-2 right-2 w-7 h-7 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">{result.title}</h3>
                    <p className="text-[#787878] text-xs">{result.year}</p>
                    <p className="text-[#787878] text-xs">{result.genre}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-[#feb625] fill-[#feb625]" />
                      <span className="text-white text-xs">{result.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-16">
              <div className="space-y-4">
                <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-12 h-12 text-[#787878]" />
                </div>
                <h3 className="text-xl font-semibold text-white">No results found</h3>
                <p className="text-[#787878] max-w-md mx-auto">
                  We couldn't find any movies or series matching "{query}". Try searching with different keywords.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="space-y-4">
                <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-12 h-12 text-[#787878]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Start searching</h3>
                <p className="text-[#787878] max-w-md mx-auto">
                  Search for your favorite movies, series, and documentaries.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
