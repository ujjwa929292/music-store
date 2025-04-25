"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logoBlack from "../public/logo-black.png"

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white text-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src={logoBlack} alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Center: Search with Home icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="/" className="text-black">
            <Home className="h-5 w-5" />
          </Link>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for songs, artists, albums..."
              className="w-[200px] lg:w-[300px] h-9 rounded-full pl-10 text-black"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex text-black">
            <Heart className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
