"use client";

import { Command, FileText, Calendar } from "lucide-react";
import profileData from "@/data/profile.json";

interface HeaderProps {
  onOpenCommand: () => void;
}

export default function Header({ onOpenCommand }: HeaderProps) {
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
        {/* Left: Clean Executive Branding */}
        <a 
          href="#" 
          className="flex items-center space-x-2.5 font-bold tracking-tight text-black hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#4285F4] via-[#0078D4] to-[#FF9900] inline-block shadow-sm"></span>
          <span className="text-sm tracking-tight font-bold whitespace-nowrap">{profileData.name}</span>
        </a>

        {/* Center / Navigation Links: Clean, Un-cramped Single Words */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-sans font-medium">
          <a href="#leadership" className="text-zinc-600 hover:text-black transition-colors whitespace-nowrap">
            Leadership
          </a>
          <a href="#work" className="text-zinc-600 hover:text-black transition-colors whitespace-nowrap">
            Initiatives
          </a>
          <a href="#experience" className="text-zinc-600 hover:text-black transition-colors whitespace-nowrap">
            Experience
          </a>
          <a href="#stack" className="text-zinc-600 hover:text-black transition-colors whitespace-nowrap">
            Competencies
          </a>
          <a href="#contact" className="text-zinc-600 hover:text-black transition-colors whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
          {/* Resume link */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-zinc-300 hover:border-black rounded-lg text-xs font-sans text-zinc-800 hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* 15-min Sync Quick Action */}
          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white hover:bg-zinc-800 rounded-lg text-xs font-sans font-medium transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            <Calendar size={13} className="text-[#4285F4] shrink-0" />
            <span>Book Sync</span>
          </a>

          {/* Command Menu Button */}
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 text-xs border border-zinc-300 hover:border-black rounded-lg text-zinc-700 hover:text-black bg-zinc-50 hover:bg-zinc-100 transition-all font-sans shrink-0 cursor-pointer"
            title="Open Quick Navigation Menu (⌘K)"
          >
            <Command size={12} />
            <span className="text-[11px] font-mono text-zinc-500 font-semibold">K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
