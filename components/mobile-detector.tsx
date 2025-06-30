"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface MobileDetectorProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function MobileDetector({ children, fallback }: MobileDetectorProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      // Check user agent
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = [
        "mobile",
        "android",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
        "opera mini",
      ]
      const isMobileUserAgent = mobileKeywords.some((keyword) => userAgent.includes(keyword))

      // Check screen size
      const isMobileScreen = window.innerWidth < 1024 // lg breakpoint

      // Check touch capability
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      const mobile = isMobileUserAgent || (isMobileScreen && isTouchDevice)
      setIsMobile(mobile)
      setIsLoading(false)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="w-16 h-16 bg-[#feb625] rounded-2xl flex items-center justify-center animate-pulse">
          <span className="text-black font-bold text-2xl">C</span>
        </div>
      </div>
    )
  }

  if (isMobile) {
    return fallback || null
  }

  return <>{children}</>
}
