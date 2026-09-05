"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StackSection from "@/components/sections/StackSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col items-center">
      {/* Centered Content Container */}
      <div className="w-full max-w-5xl flex flex-col min-h-screen">
        {/* Top Sticky Header */}
        <Header onOpenCommand={() => setIsCommandOpen(true)} />

        {/* ⌘K Interactive Command Palette Modal */}
        <CommandPalette 
          isOpen={isCommandOpen} 
          onClose={() => setIsCommandOpen(false)} 
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <WorkSection />
          <ExperienceSection />
          <StackSection />
          <HobbiesSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
