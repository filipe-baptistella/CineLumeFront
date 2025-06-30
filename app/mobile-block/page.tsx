import { Smartphone, Monitor, Download, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MobileBlockPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-[#feb625] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-black font-bold text-4xl">C</span>
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-wider">
            CINE<span className="text-[#feb625]">LUME</span>
          </h1>
          <p className="text-[#787878]">Premium Streaming Experience</p>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto bg-[#1a1a1a] rounded-full flex items-center justify-center border-4 border-[#feb625]/30 relative">
            <Smartphone className="w-16 h-16 text-[#feb625]" />
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">×</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white">Mobile App Coming Soon!</h2>
          <p className="text-[#c5c5c5] text-lg leading-relaxed px-4">
            We're crafting an amazing mobile experience for you. Currently, CINELUME is optimized for desktop viewing
            only.
          </p>
        </div>

        {/* What's Coming */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center justify-center space-x-2">
            <Bell className="w-5 h-5 text-[#feb625]" />
            <span>What's Coming</span>
          </h3>

          <div className="grid grid-cols-1 gap-3 text-left">
            {[
              "📱 Native iOS & Android Apps",
              "⬇️ Offline Download Feature",
              "🎬 Mobile-Optimized Player",
              "🔔 Push Notifications",
              "👆 Touch-Friendly Interface",
              "📺 Chromecast Support",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-lg">{feature.split(" ")[0]}</span>
                <span className="text-[#c5c5c5] text-sm">{feature.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Recommendation */}
        <div className="bg-gradient-to-br from-[#feb625]/20 to-[#feb625]/5 rounded-2xl p-6 border border-[#feb625]/30">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Monitor className="w-8 h-8 text-[#feb625]" />
            <h3 className="text-xl font-bold text-white">Use Desktop Instead</h3>
          </div>
          <p className="text-[#c5c5c5] leading-relaxed">
            For the best CINELUME experience with all features, please visit us on your desktop or laptop computer.
          </p>
        </div>

        {/* Email Notification */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Get Notified When We Launch</h4>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#787878] focus:border-[#feb625] flex-1"
            />
            <Button className="bg-[#feb625] hover:bg-[#feb625]/90 text-black font-semibold px-6 whitespace-nowrap">
              <Download className="w-4 h-4 mr-2" />
              Notify Me
            </Button>
          </div>
          <p className="text-[#787878] text-xs">We'll email you as soon as our mobile app is available</p>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-[#2a2a2a] space-y-4">
          <p className="text-[#787878]">Follow us for updates:</p>
          <div className="flex justify-center space-x-8">
            {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
              <button
                key={social}
                className="text-[#787878] hover:text-[#feb625] transition-colors duration-200 text-sm font-medium"
              >
                {social}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-[#787878] text-xs space-y-2">
          <p>© 2023 CineLume. All rights reserved</p>
          <p>Desktop experience available at cinelume.com</p>
        </div>
      </div>
    </div>
  )
}
