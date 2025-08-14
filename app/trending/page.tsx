"use client"

import { useState, useRef } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTrending } from "@/hooks/use-trending"
import { TrendingSkeleton } from "@/components/trending-skeleton"

export default function TrendingPage() {
  const { trendingMovies, loading, error } = useTrending()
  const movieScrollRef = useRef<HTMLDivElement>(null)

  const scrollContainer = (direction: "left" | "right", amount = 250) => {
    if (movieScrollRef.current) {
      const scrollAmount = direction === "left" ? -amount : amount
      movieScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (movieScrollRef.current) {
      e.preventDefault()
      movieScrollRef.current.scrollLeft += e.deltaY
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Sidebar />
        <Header />
        <main className="ml-16 pt-16">
          <div className="px-8 py-12">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#feb625]" />
              <h1 className="text-3xl font-bold text-white">Trending</h1>
            </div>
            <TrendingSkeleton />
          </div>
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Sidebar />
        <Header />
        <main className="ml-16 pt-16">
          <div className="px-8 py-12">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#feb625]" />
              <h1 className="text-3xl font-bold text-white">Trending</h1>
            </div>
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <p className="text-red-500 text-lg mb-4">{error}</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-[#feb625] hover:bg-[#feb625]/90 text-black"
                >
                  Tentar novamente
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-16">
        <div className="px-8 py-12">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-[#feb625]" />
            <h1 className="text-3xl font-bold text-white">Trending</h1>
          </div>

          {/* Description */}
          <p className="text-[#c5c5c5] text-lg mb-12 max-w-2xl">
            Os filmes mais assistidos pelos usuários do CineLume. Descubra o que está em alta agora!
          </p>

          {/* Top 10 Movies Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Top 10 Mais Vistos</h2>
              <div className="flex space-x-2">
                <Button
                  onClick={() => scrollContainer("left")}
                  className="bg-[#1d1d1d] hover:bg-[#2d2d2d] text-white border border-[#333]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => scrollContainer("right")}
                  className="bg-[#1d1d1d] hover:bg-[#2d2d2d] text-white border border-[#333]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div
                ref={movieScrollRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-x-auto scrollbar-hide"
                onWheel={handleWheel}
              >
                {trendingMovies.map((movie) => (
                  <Link 
                    key={movie.id} 
                    href={`/movie/${movie.id}`} 
                    className="group cursor-pointer"
                  >
                    <div className="relative w-full">
                      {/* Movie Poster */}
                      <div className="aspect-[2/3] bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          width={300}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>

                        {/* Rank Badge */}
                        <div className="absolute top-3 left-3 w-10 h-10 bg-[#feb625] rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-black font-bold text-lg">{movie.rank}</span>
                        </div>

                        {/* Views Badge */}
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                          <span className="text-white text-xs font-medium">
                            {movie.views.toLocaleString()} views
                          </span>
                        </div>
                      </div>

                      {/* Movie Info */}
                      <div className="mt-4 space-y-2">
                        <h3 className="text-white font-semibold text-lg group-hover:text-[#feb625] transition-colors duration-300">
                          {movie.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{movie.year}</p>
                        
                        {/* Rank Indicator */}
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-[#feb625]" />
                            <span className="text-[#feb625] text-sm font-medium">
                              #{movie.rank} em trending
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {trendingMovies.length === 0 && !loading && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-[#feb625] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Nenhum filme em trending</h3>
                <p className="text-[#c5c5c5]">
                  Ainda não há dados suficientes para mostrar os filmes mais populares.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 