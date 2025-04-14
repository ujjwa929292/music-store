"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logoBlack from "../public/logo-black.png";

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="font-bold text-xl">
            <Image src={logoBlack} alt="Logo" width={120} height={40} />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for songs, artists, albums..."
                className="w-[200px] lg:w-[300px] h-9 rounded-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/library" className="text-sm font-medium">
              My Library
            </Link>
            <Link href="/subscription" className="text-sm font-medium">
              Subscription
            </Link>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
