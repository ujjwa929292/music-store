"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Heart, MoreHorizontal, Play, Clock } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FavoritesPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const favoriteTracks = [
    {
      id: 1,
      title: "Nayaab",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "3:45",
      coverArt: "/images/nayaab.png",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Namastute",
      artist: "Seedhe Maut",
      album: "Bayaan",
      duration: "4:12",
      coverArt: "/images/shakti-art.webp",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Hola Amigo",
      artist: "KRSNA",
      album: "Still Here",
      duration: "2:58",
      coverArt: "/images/hola-amigo-art.png",
      isFavorite: true,
    },
    {
      id: 4,
      title: "Shayaar",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "3:22",
      coverArt: "/images/shayaar.png",
      isFavorite: true,
    },
    {
      id: 5,
      title: "Kodak Black",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "4:05",
      coverArt: "/images/kodak-art.png",
      isFavorite: true,
    },
    {
      id: 6,
      title: "Doguna",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "3:37",
      coverArt: "/images/doguna.png",
      isFavorite: true,
    },
    {
      id: 7,
      title: "Maina",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "3:15",
      coverArt: "/images/nayaab.png",
      isFavorite: true,
    },
    {
      id: 8,
      title: "Batti",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "2:47",
      coverArt: "/images/shakti-art.webp",
      isFavorite: true,
    },
    {
      id: 9,
      title: "Keh Chuka",
      artist: "KRSNA",
      album: "Still Here",
      duration: "3:52",
      coverArt: "/images/hola-amigo-art.png",
      isFavorite: true,
    },
    {
      id: 10,
      title: "Satya",
      artist: "Seedhe Maut",
      album: "Nayaab",
      duration: "4:30",
      coverArt: "/images/shayaar.png",
      isFavorite: true,
    },
  ]

  return (
    <div className="flex h-screen w-auto bg-white text-black overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleCollapsed={() => setIsCollapsed(!isCollapsed)} />

      <div 
        className={cn(
          "flex-1 overflow-auto transition-all duration-300 bg-white",
          isCollapsed ? "ml-[64px]" : "ml-[64px] md:ml-[256px]"
        )}
      >
        <main className="p-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
            <div className="relative aspect-square w-40 h-40 md:w-60 md:h-60 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/liked.png" 
                alt="Favorites"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 240px"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase text-gray-500">Playlist</p>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2 text-black">Liked Songs</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span>Your Profile</span>
                <span>•</span>
                <span>{favoriteTracks.length} songs</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-black hover:bg-gray-800 text-white">
              <Play className="h-6 w-6 ml-1" />
            </Button>
          </div>

          <div className="bg-white rounded-xl">
            <div className="grid grid-cols-12 px-4 py-2 border-b text-sm font-medium text-gray-500">
              <div className="col-span-1">#</div>
              <div className="col-span-5 md:col-span-4">Title</div>
              <div className="col-span-4 md:col-span-3 hidden md:block">Album</div>
              <div className="col-span-2 md:col-span-3 text-right">
                <Clock className="h-4 w-4 inline" />
              </div>
            </div>

            {favoriteTracks.map((track, index) => (
              <div 
                key={track.id} 
                className="grid grid-cols-12 px-4 py-3 hover:bg-gray-50 rounded-md items-center text-sm group"
              >
                <div className="col-span-1 text-gray-500">{index + 1}</div>
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={track.coverArt || "/placeholder.svg"}
                      alt={track.title}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{track.title}</div>
                    <div className="text-gray-500 truncate">{track.artist}</div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-3 text-gray-500 truncate hidden md:block">
                  {track.album}
                </div>
                <div className="col-span-2 md:col-span-3 flex items-center justify-end gap-4 text-gray-500">
                  <Heart className="h-4 w-4 fill-red-500 text-red-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                  <span>{track.duration}</span>
                  <MoreHorizontal className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
