import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileBlock } from "@/components/mobile-block"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CineLume - Streaming Platform",
  description: "Your favorite movies and series in one place",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <MobileBlock /> */}
        {children}
      </body>
    </html>
  )
}
