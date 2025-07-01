"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

const backgroundImages = [
  "/jurassic-world-bg.png",
  "/movie-detail-bg.png",
  "/netflix-channel-bg.png",
  "/main-dashboard-bg.png",
  "/channels-bg.png",
]

export default function LoginPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Left side - Movie poster */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {backgroundImages.map((image, index) => (
          <Image
            key={image}
            src={image || "/placeholder.svg"}
            alt={`Background ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}

        {/* Optional: Add a subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 bg-[#0c0c0c] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              CINE<span className="text-[#feb625]">LUME</span>
            </h1>
          </div>

          {/* Welcome message */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Hey there,</h2>
            <h2 className="text-3xl font-bold text-white">welcome back</h2>
          </div>

          {/* Login form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#c5c5c5] text-sm">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="bg-transparent border-[#787878] border-2 rounded-lg px-4 py-3 text-white placeholder:text-[#787878] focus:border-[#feb625] focus:ring-0 h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#c5c5c5] text-sm">
                Your password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="bg-transparent border-[#787878] border-2 rounded-lg px-4 py-3 text-white placeholder:text-[#787878] focus:border-[#feb625] focus:ring-0 h-12"
              />
            </div>

            <div className="text-right">
              <Link href="#" className="text-[#feb625] text-sm hover:underline">
                Forgot your password
              </Link>
            </div>

            <Link href="/profiles">
              <Button
                type="button"
                className="w-full bg-[#feb625] hover:bg-[#feb625]/90 text-black font-semibold py-3 rounded-lg h-12 text-base"
              >
                Login
              </Button>
            </Link>
          </form>

          {/* Register link */}
          <div className="text-center">
            <span className="text-[#c5c5c5] text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#feb625] hover:underline">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
