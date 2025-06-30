"use client"

import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"

const filmsAndSeries = [
  { id: 1, title: "The Mandalorian", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Encanto", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Loki", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, title: "Turning Red", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, title: "WandaVision", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, title: "Soul", image: "/placeholder.svg?height=200&width=300" },
  { id: 7, title: "The Falcon and Winter Soldier", image: "/placeholder.svg?height=200&width=300" },
  { id: 8, title: "Raya and the Last Dragon", image: "/placeholder.svg?height=200&width=300" },
]

export default function DisneyChannelPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Disney+" fill className="object-cover" priority />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-10">
          <div className="flex items-center space-x-4">
            <Link href="/channels">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Disney+</h1>
          </div>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
            <AvatarFallback className="bg-[#1d1d1d] text-white">U</AvatarFallback>
          </Avatar>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-20 left-6 z-10 space-y-6">
          <div className="w-80 h-32 relative">
            <div className="text-4xl font-bold text-white">Disney+</div>
            <div className="text-lg text-gray-200 mt-2">The magic of Disney, Pixar, Marvel, and Star Wars</div>
          </div>

          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
            <Play className="w-5 h-5 mr-2" />
            Watch now
          </Button>
        </div>
      </div>

      {/* Films and Series Section */}
      <div className="px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">Films and series</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filmsAndSeries.map((item) => (
            <Link key={item.id} href={`/movie/${item.id}`} className="group cursor-pointer">
              <div className="space-y-3">
                <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
