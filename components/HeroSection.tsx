"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center h-screen bg-center bg-cover">
      <video src="/video/2.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 max-w-4xl px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Your Sound</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium instruments and equipment for musicians of all levels. Find your perfect sound with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full backdrop-blur-sm"
            >
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-gray-900 border-white hover:bg-white/20 h-12 rounded-full backdrop-blur-sm"
            >
              <Link href="/collections">Browse Collections</Link>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default HeroSection

