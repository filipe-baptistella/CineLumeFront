"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function VerifyEmailPage() {
  const [code, setCode] = useState(["", "", "", "", ""])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-8 relative">
      {/* Background movie posters */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-3 h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="bg-[#1d1d1d] border border-[#2d2d2d]" />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-md w-full">
        {/* Logo */}
        <div className="w-16 h-16 bg-[#feb625] rounded-lg flex items-center justify-center mx-auto">
          <span className="text-black font-bold text-2xl">C</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Confirm your email</h1>
          <p className="text-[#c5c5c5]">We sent a code to email@gmail.com</p>
        </div>

        {/* Code Input */}
        <div className="flex justify-center space-x-4">
          {code.map((digit, index) => (
            <Input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-16 h-16 text-center text-2xl bg-transparent border-[#787878] border-2 rounded-lg text-white focus:border-[#feb625] focus:ring-0"
            />
          ))}
        </div>

        {/* Resend */}
        <Button
          variant="outline"
          className="w-full bg-transparent border-[#787878] text-[#787878] hover:bg-[#1d1d1d] hover:text-white h-12"
        >
          Resend 0:30
        </Button>

        {/* Confirm */}
        <Link href="/dashboard">
          <Button className="w-full bg-[#feb625] hover:bg-[#feb625]/90 text-black font-semibold h-12">
            Confirm code
          </Button>
        </Link>
      </div>
    </div>
  )
}
