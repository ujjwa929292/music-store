'use client'

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function PlaylistPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const playlists = [
    {
      id: 1,
      name: "Chill Vibes",
      creator: "Seedhe Maut",
      coverArt: "/images/nayaab.png",
    },
    {
      id: 2,
      name: "Workout Pump",
      creator: "SM Squad",
      coverArt: "/images/shakti-art.webp",
    },
    {
      id: 3,
      name: "Late Night Drive",
      creator: "KRSNA",
      coverArt: "/images/hola-amigo-art.png",
    },
    {
      id: 4,
      name: "Top Hindi Tracks",
      creator: "User123",
      coverArt: "/images/shayaar.png",
    },
    {
      id: 5,
      name: "Rap Reloaded",
      creator: "Baadshah",
      coverArt: "/images/kodak-art.png",
    },
    {
      id: 6,
      name: "Focus Mode",
      creator: "Sez on the Beat",
      coverArt: "/images/doguna.png",
    },
  ]

  return (
    <div className="flex h-screen w-full bg-white text-black overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleCollapsed={() => setIsCollapsed(!isCollapsed)} />

      <div className="ml-[64px] md:ml-[256px] flex-1 overflow-auto transition-all duration-300 bg-white">
        <main className="p-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 mt-8 md:mt-0 text-black">Your Playlists</h1>
          <p className="text-gray-500 mb-8">Listen to your favorite collections</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

interface PlaylistProps {
  playlist: {
    id: number
    name: string
    creator: string
    coverArt: string
  }
}

function PlaylistCard({ playlist }: PlaylistProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative aspect-square overflow-hidden rounded-xl transition-all duration-300 shadow-sm",
          isHovered ? "shadow-md transform scale-[1.02]" : "",
        )}
      >
        <Image
          src={playlist.coverArt || "/placeholder.svg"}
          alt={playlist.name}
          fill
          className="object-cover filter transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div
          className={cn(
            "absolute inset-0 bg-black/10 flex items-center justify-center transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <button className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-50">
            <Play className="h-6 w-6 text-black ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="font-medium text-sm truncate text-black">{playlist.name}</h3>
        <p className="text-gray-500 text-xs truncate mt-1">By {playlist.creator}</p>
      </div>
    </div>
  )
}
