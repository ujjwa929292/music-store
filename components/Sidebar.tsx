"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Library,
  ListMusic,
  Search,
  Settings,
  Heart,
  ChevronRight,
  ChevronLeft,
  Newspaper,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

export default function Sidebar({ isCollapsed, toggleCollapsed }: SidebarProps) {
  const [width, setWidth] = useState(256);
  const isDragging = useRef(false);
  const pathname = usePathname();

  const startResizing = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResizing);
  };

  const handleResize = (e: MouseEvent) => {
    if (isDragging.current) {
      const newWidth = Math.min(Math.max(e.clientX, 64), 400);
      setWidth(newWidth);
    }
  };

  const stopResizing = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResizing);
  };

  const navItems = [
    { icon: Library, label: "Library", href: "/library" },
    { icon: ListMusic, label: "Playlists", href: "/playlists" },
    { icon: Heart, label: "Favorites", href: "/favorites" },
    { icon: Newspaper, label: "Blogs", href: "/blogs" },
    { icon: CreditCard, label: "Subscription", href: "/subscription" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={toggleCollapsed}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-100 text-black shadow-md hover:bg-gray-200 transition-colors md:hidden"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen flex flex-col bg-gray-50 border-r border-gray-200 shadow-md z-40 transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : `w-[${width}px]`
        )}
        style={{ width: isCollapsed ? 64 : width }}
      >
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-10"></div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <li key={index}>
                    <Link href={item.href}>
                      <span
                        className={cn(
                          "group flex items-center px-4 py-3 rounded-lg transition-all duration-200 relative",
                          isActive
                            ? "bg-gray-200 text-black font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-5 w-5",
                            isActive ? "text-black" : "text-gray-600"
                          )}
                        />
                        <span
                          className={cn(
                            "ml-4 font-medium transition-opacity duration-300 relative",
                            isCollapsed
                              ? "opacity-0 hidden md:block md:opacity-0"
                              : "opacity-100"
                          )}
                        >
                          {item.label}
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="px-6 mt-auto">
              <div className="py-4 text-xs text-gray-500">© 2025 SoundWave</div>
            </div>
          )}
        </div>

        {/* Resize Handle */}
        {!isCollapsed && (
          <div
            onMouseDown={startResizing}
            className="absolute right-0 top-0 h-full w-1 bg-transparent cursor-col-resize hover:bg-gray-300"
          />
        )}
      </div>
    </>
  );
}
