"use client"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"

const filmsAndSeries = [
  { id: 1, title: "The Boys", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "The Marvelous Mrs. Maisel", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Jack Ryan", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, title: "The Wheel of Time", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, title: "Invincible", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, title: "The Terminal List", image: "/placeholder.svg?height=200&width=300" },
  { id: 7, title: "Reacher", image: "/placeholder.svg?height=200&width=300" },
  { id: 8, title: "The Power", image: "/placeholder.svg?height=200&width=300" },
]

export default function PrimeChannelPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Prime Video" fill className="object-cover" priority />

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
            <h1 className="text-2xl font-bold text-white">Prime Video</h1>
          </div>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
            <AvatarFallback className="bg-[#1d1d1d] text-white">U</AvatarFallback>
          </Avatar>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-20 left-6 z-10 space-y-6">
          <div className="w-80 h-32 relative">
            <div className="text-4xl font-bold text-white">Prime Video</div>
            <div className="text-lg text-gray-200 mt-2">Exclusive content and blockbuster movies</div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
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
