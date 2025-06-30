import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-8">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          CINE<span className="text-[#feb625]">LUME</span>
        </h1>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Edit Profile</h1>

        <div className="space-y-8">
          {/* Profile Picture and Name */}
          <div className="flex items-start space-x-8">
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="bg-[#1d1d1d] text-white text-2xl">S</AvatarFallback>
              </Avatar>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#feb625] rounded-full flex items-center justify-center">
                <Edit className="w-4 h-4 text-black" />
              </button>
            </div>

            <div className="flex-1">
              <Input
                placeholder="Sarah"
                className="bg-transparent border-[#787878] border-2 rounded-lg px-4 py-3 text-white placeholder:text-[#787878] focus:border-[#feb625] focus:ring-0 h-12 text-xl"
              />
            </div>
          </div>

          {/* Age Range */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Age range</h2>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="kids-mode"
                className="border-[#787878] data-[state=checked]:bg-[#feb625] data-[state=checked]:border-[#feb625]"
              />
              <Label htmlFor="kids-mode" className="text-white text-lg">
                Kids Mode
              </Label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-8">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3">Save</Button>
            <Link href="/profiles">
              <Button variant="outline" className="border-[#787878] text-white hover:bg-[#1d1d1d] px-8 py-3">
                Cancel
              </Button>
            </Link>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-3">
              Delete profile
            </Button>
          </div>
        </div>
      </div>

      {/* Logo bottom right */}
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 bg-[#feb625] rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-2xl">C</span>
        </div>
      </div>
    </div>
  )
}
