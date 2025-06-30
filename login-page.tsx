import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Movie poster */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/jurassic-world-bg.png"
          alt="Jurassic World: Fallen Kingdom"
          fill
          className="object-cover"
          priority
        />
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

            <Button
              type="submit"
              className="w-full bg-[#feb625] hover:bg-[#feb625]/90 text-black font-semibold py-3 rounded-lg h-12 text-base"
            >
              Login
            </Button>
          </form>

          {/* Register link */}
          <div className="text-center">
            <span className="text-[#c5c5c5] text-sm">
              Don't have an account?{" "}
              <Link href="#" className="text-[#feb625] hover:underline">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
