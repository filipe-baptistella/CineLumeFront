import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import Link from "next/link"

const profiles = [
  { id: 1, name: "Name 1", avatar: "/placeholder.svg?height=120&width=120" },
  { id: 2, name: "Name 2", avatar: "/placeholder.svg?height=120&width=120" },
  { id: 3, name: "Name 3", avatar: "/placeholder.svg?height=120&width=120" },
]

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          CINE<span className="text-[#feb625]">LUME</span>
        </h1>
      </div>

      <div className="text-center space-y-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white">Who's watching?</h2>

        {/* Profiles */}
        <div className="flex items-center justify-center space-x-8">
          {profiles.map((profile) => (
            <Link key={profile.id} href="/dashboard">
              <div className="flex flex-col items-center space-y-4 cursor-pointer group">
                <Avatar className="w-32 h-32 group-hover:ring-4 group-hover:ring-[#feb625] transition-all">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl bg-[#1d1d1d] text-white">{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-white text-lg font-medium">{profile.name}</span>
              </div>
            </Link>
          ))}

          {/* Add Profile */}
          <Link href="/edit-profile">
            <div className="flex flex-col items-center space-y-4 cursor-pointer group">
              <div className="w-32 h-32 rounded-full bg-[#1d1d1d] flex items-center justify-center group-hover:bg-[#feb625] transition-colors">
                <Plus className="w-12 h-12 text-[#787878] group-hover:text-black" />
              </div>
              <span className="text-[#787878] text-lg font-medium">Add Profile</span>
            </div>
          </Link>
        </div>

        {/* Manage Profiles */}
        <Button
          variant="outline"
          className="bg-transparent border-[#787878] text-[#787878] hover:bg-[#1d1d1d] hover:text-white px-8 py-3"
        >
          MANAGE PROFILES
        </Button>
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
