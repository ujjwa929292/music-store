"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart, Search, Home, Settings, LogOut, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoBlack from "../public/logo-black.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleSettingsClick = () => {
    router.push("/settings");
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-white text-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={logoBlack || "/placeholder.svg"}
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>

        {/* Center: Search with Home and Heart icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <Link href="/" className="group relative text-black">
            <Home className="h-5 w-5" />
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="relative">
            <Input
              type="search"
              placeholder="Search for songs, artists, albums..."
              className="w-[200px] lg:w-[300px] h-9 rounded-full pl-10 text-black"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <Link href="/favorites" className="group relative text-black">
            <Heart className="h-5 w-5" />
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Right: Avatar with Dropdown */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer ring-offset-background transition-opacity hover:opacity-80">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleSettingsClick}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
