"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function MusicLibraryPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const albums = [
    {
      id: 1,
      title: "Namastute",
      artist: "Seedhe Maut",
      coverArt: "/images/n.png",
    },
    {
      id: 2,
      title: "Hola Amigo",
      artist: "Kr$na ft. Seedhe Maut & Umair",
      coverArt: "/images/hola-amigo-art.png",
    },
    {
      id: 3,
      title: "Kodak",
      artist: "King ft. Seedhe Maut",
      coverArt: "/images/kodak-art.png",
    },
    {
      id: 4,
      title: "Maina",
      artist: "Seedhe Maut",
      coverArt: "/images/maina-art.png",
    },
    {
      id: 5,
      title: "Shutdown",
      artist: "Seedhe Maut",
      coverArt: "/images/shutdown-art.png",
    },
    {
      id: 6,
      title: "Swah!",
      artist: "Seedhe Maut ft. Baadshah",
      coverArt: "/images/lunch-break.png",
    },
    {
      id: 7,
      title: "Pain",
      artist: "Seedhe Maut",
      coverArt: "/images/lunch-break.png",
    },
    {
      id: 8,
      title: "Shayaar",
      artist: "Bharat Chauhan & Seedhe Maut",
      coverArt: "/images/shayaar.png",
    },
    {
      id: 9,
      title: "Do Guna",
      artist: "Seedhe Maut",
      coverArt: "/images/doguna.png",
    },
    {
      id: 10,
      title: "Roshni",
      artist: "Sickflip, Ritviz, Seedhe Maut",
      coverArt: "/images/roshni.png",
    },
    {
      id: 11,
      title: "Khush Nahi",
      artist: "Seedhe Maut",
      coverArt: "/images/shakti-art.webp",
    },
    {
      id: 12,
      title: "Teen Dost",
      artist: "Seedhe Maut & Sez on the Beat",
      coverArt: "/images/nayaab.png",
    },
  ]
  

  return (
    <div className="flex h-screen w-full bg-white text-black overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleCollapsed={() => setIsCollapsed(!isCollapsed)} />

      <div className="ml-[64px] md:ml-[256px] flex-1 overflow-auto transition-all duration-300 bg-white">
        <main className="p-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 mt-8 md:mt-0 text-black">Your Library</h1>
          <p className="text-gray-500 mb-8">Discover your favorite music</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

interface AlbumProps {
  album: {
    id: number
    title: string
    artist: string
    coverArt: string
  }
}

function AlbumCard({ album }: AlbumProps) {
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
            src={album.coverArt || "/placeholder.svg"}
            alt={album.title}
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
          <h3 className="font-medium text-sm truncate text-black">{album.title}</h3>
          <p className="text-gray-500 text-xs truncate mt-1">{album.artist}</p>
        </div>
      </div>
    )
  }
