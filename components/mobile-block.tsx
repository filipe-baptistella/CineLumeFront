"use client"

import { useEffect, useState } from "react"
import { Smartphone, Monitor, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileBlock() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = ["mobile", "android", "iphone", "ipad", "ipod", "blackberry", "windows phone"]
      const isMobileUserAgent = mobileKeywords.some((keyword) => userAgent.includes(keyword))
      const isMobileScreen = window.innerWidth < 1024 // lg breakpoint

      setIsMobile(isMobileUserAgent || isMobileScreen)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!isMobile) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0c0c] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#feb625] rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-black font-bold text-3xl">C</span>
          </div>
        </div>

        {/* Brand Name */}
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wider mb-2">
            CINE<span className="text-[#feb625]">LUME</span>
          </h1>
          <p className="text-[#787878] text-sm">Premium Streaming Platform</p>
        </div>

        {/* Mobile Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center border-4 border-[#feb625]/20">
              <Smartphone className="w-12 h-12 text-[#feb625]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">×</span>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Mobile App Coming Soon</h2>
          <p className="text-[#c5c5c5] leading-relaxed">
            We don't have a mobile app yet, but we're working hard to bring you the best streaming experience on all
            devices.
          </p>
        </div>

        {/* Features List */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 space-y-4 border border-[#2a2a2a]">
          <h3 className="text-white font-semibold text-lg mb-4">What's Coming:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#feb625] rounded-full"></div>
              <span className="text-[#c5c5c5] text-sm">Native mobile apps for iOS & Android</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#feb625] rounded-full"></div>
              <span className="text-[#c5c5c5] text-sm">Offline downloads for movies & series</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#feb625] rounded-full"></div>
              <span className="text-[#c5c5c5] text-sm">Optimized mobile streaming experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#feb625] rounded-full"></div>
              <span className="text-[#c5c5c5] text-sm">Push notifications for new releases</span>
            </div>
          </div>
        </div>

        {/* Desktop Recommendation */}
        <div className="bg-gradient-to-r from-[#feb625]/10 to-[#feb625]/5 rounded-xl p-6 border border-[#feb625]/20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Monitor className="w-6 h-6 text-[#feb625]" />
            <h3 className="text-white font-semibold">For Now, Use Desktop</h3>
          </div>
          <p className="text-[#c5c5c5] text-sm leading-relaxed">
            Access CINELUME on your desktop or laptop for the full streaming experience with all features available.
          </p>
        </div>

        {/* Notify Button */}
        <div className="space-y-4">
          <Button className="w-full bg-[#feb625] hover:bg-[#feb625]/90 text-black font-semibold py-4 rounded-xl h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Download className="w-5 h-5 mr-2" />
            Notify Me When Available
          </Button>

          <p className="text-[#787878] text-xs">We'll send you an email when our mobile app launches</p>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-[#2a2a2a]">
          <p className="text-[#787878] text-sm mb-4">Stay connected with us:</p>
          <div className="flex justify-center space-x-6">
            <button className="text-[#787878] hover:text-[#feb625] transition-colors duration-200">
              <span className="text-sm">Facebook</span>
            </button>
            <button className="text-[#787878] hover:text-[#feb625] transition-colors duration-200">
              <span className="text-sm">Twitter</span>
            </button>
            <button className="text-[#787878] hover:text-[#feb625] transition-colors duration-200">
              <span className="text-sm">Instagram</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <p className="text-[#787878] text-xs">© 2023 CineLume. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
