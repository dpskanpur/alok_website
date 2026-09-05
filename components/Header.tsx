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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200">
      {/* Top 2px Multi-Cloud Accent Bar: GCP Blue/Red/Yellow/Green, AWS Orange, Azure Blue */}
      <div className="h-[2px] w-full flex">
        <div className="flex-1 bg-[#4285F4]"></div>
        <div className="flex-1 bg-[#EA4335]"></div>
        <div className="flex-1 bg-[#FBBC05]"></div>
        <div className="flex-1 bg-[#34A853]"></div>
        <div className="flex-1 bg-[#FF9900]"></div>
        <div className="flex-1 bg-[#0078D4]"></div>
      </div>

      <div className="px-4 sm:px-6 h-14 flex items-center justify-between font-sans text-xs">
        {/* Left: Branding & Status */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2.5 font-bold tracking-tight text-black hover:opacity-80 transition-opacity">
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#4285F4] via-[#0078D4] to-[#FF9900] inline-block shadow-sm"></span>
            <span className="text-sm tracking-tight font-bold whitespace-nowrap">{profileData.name}</span>
          </a>
          <span className="text-zinc-300 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center space-x-2 text-zinc-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-zinc-700 font-medium">Platform & Security Manager @ SADA</span>
          </div>
        </div>

        {/* Center: Live Timezone Clock */}
        <div className="hidden md:flex items-center space-x-1.5 text-zinc-800 text-[11px] bg-zinc-50 px-2.5 py-1 border border-zinc-200 rounded shadow-xs font-mono">
          <Clock size={12} className="text-zinc-600" />
          <span className="text-zinc-500 font-sans">IST:</span>
          <span suppressHydrationWarning className="font-semibold tracking-wider">{time || "00:00:00"}</span>
        </div>

        {/* Right: Section Links & Command Menu Trigger */}
        <div className="flex items-center space-x-5">
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-sans font-medium">
            <a href="#work" className="text-zinc-600 hover:text-black transition-colors">
              Work
            </a>
            <a href="#experience" className="text-zinc-600 hover:text-black transition-colors">
              Experience
            </a>
            <a href="#stack" className="text-zinc-600 hover:text-black transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-zinc-600 hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* Resume link */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 border border-zinc-300 hover:border-black rounded text-xs font-sans text-zinc-800 hover:text-black transition-colors"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>

          {/* Command Menu Button */}
          <button
            onClick={onOpenCommand}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs border border-zinc-300 hover:border-black rounded text-zinc-800 hover:text-black bg-zinc-50 hover:bg-zinc-100 transition-all font-sans"
            title="Open Quick Navigation Menu"
          >
            <Command size={12} />
            <span className="font-medium hidden sm:inline">Menu</span>
            <kbd className="text-[10px] text-zinc-500 font-mono ml-1">⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
