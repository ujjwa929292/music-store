'use client'

import Sidebar from "@/components/Sidebar"
import Posts from "@/components/Posts"
import { useState } from "react"

export default function BlogsPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-full bg-white text-black overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleCollapsed={() => setIsCollapsed(!isCollapsed)} />

      <div className="ml-[64px] md:ml-[256px] flex-1 overflow-auto transition-all duration-300 bg-white">
        <main className="max-w-7xl mx-auto">
          <Posts />
        </main>
      </div>
    </div>
  )
}
