"use client";

import { useState, useEffect } from "react";
import { Command, Clock, FileText } from "lucide-react";
import profileData from "@/data/profile.json";

interface HeaderProps {
  onOpenCommand: () => void;
}

export default function Header({ onOpenCommand }: HeaderProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-black">
      <div className="px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs">
        {/* Left: Branding & Status */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 font-bold tracking-tight text-black hover:opacity-75 transition-opacity">
            <span className="w-2.5 h-2.5 bg-black inline-block"></span>
            <span className="text-sm tracking-tight font-sans font-bold">{profileData.name}</span>
          </a>
          <span className="text-zinc-300 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center space-x-1.5 text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[11px] text-zinc-800 font-sans font-medium">Platform & Security Manager @ SADA</span>
          </div>
        </div>

        {/* Center: Live Timezone Clock */}
        <div className="hidden md:flex items-center space-x-1.5 text-zinc-800 text-[11px] bg-zinc-100 px-2.5 py-1 border border-zinc-300 shadow-sm">
          <Clock size={12} className="text-black" />
          <span className="text-zinc-500 font-sans">IST:</span>
          <span className="font-bold tracking-wider font-mono">{time || "00:00:00"}</span>
        </div>

        {/* Right: Section Links & Command Menu Trigger */}
        <div className="flex items-center space-x-4">
          <nav className="hidden lg:flex items-center space-x-4 text-xs font-mono">
            <a href="#work" className="text-zinc-600 hover:text-black transition-colors">
              [Work]
            </a>
            <a href="#experience" className="text-zinc-600 hover:text-black transition-colors">
              [Experience]
            </a>
            <a href="#stack" className="text-zinc-600 hover:text-black transition-colors">
              [Skills]
            </a>
            <a href="#hobbies" className="text-zinc-600 hover:text-black transition-colors">
              [Interests]
            </a>
            <a href="#contact" className="text-zinc-600 hover:text-black transition-colors">
              [Contact]
            </a>
          </nav>

          {/* Resume link */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 border border-zinc-300 hover:border-black text-xs font-sans text-zinc-700 hover:text-black transition-colors"
          >
            <FileText size={12} />
            <span>Resume</span>
          </a>

          {/* Command Menu Button */}
          <button
            onClick={onOpenCommand}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs border border-black text-black bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-mono"
            title="Open Quick Navigation Menu"
          >
            <Command size={12} />
            <span className="font-semibold hidden sm:inline">Menu</span>
            <kbd className="text-[10px] opacity-75">⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
