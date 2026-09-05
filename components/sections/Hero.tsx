"use client";

import { useState } from "react";
import profileData from "@/data/profile.json";
import { ArrowDown, Mail, Copy, Check, MapPin, FileText, ExternalLink, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 sm:pt-14 pb-16 border-b border-black overflow-hidden bg-white px-4 sm:px-6">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-bw-grid pointer-events-none opacity-60" />

      <div className="relative w-full">
        {/* Top Status & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-8 border-b border-zinc-200 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-black font-bold">CURRENT LEADERSHIP:</span>
            <span className="text-zinc-900 font-sans font-semibold">{profileData.title} @ {profileData.company}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin size={12} className="text-black" />
              <span className="text-zinc-700 font-sans">{profileData.location}</span>
            </span>
            <span>STATUS: <strong className="text-black font-sans font-semibold">● Open for Strategic Leadership Roles</strong></span>
          </div>
        </div>

        {/* Hero Grid: Content + Responsive Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-100 border border-black font-mono text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={13} className="text-black" />
              <span className="font-bold">PRACTICE LEADERSHIP & VISION:</span>
              <span className="text-zinc-800 font-sans">Cloud Modernization • Practice Building • Agentic AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-sans font-bold tracking-tight text-black leading-[1.12]">
              Building & leading enterprise practices at the intersection of Cloud, Security & AI.
            </h1>

            {/* Subtitle / Plain English Bio */}
            <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed max-w-2xl">
              {profileData.bio.intro}
            </p>

            {/* Leadership Quote Block */}
            <div className="p-4 bg-zinc-50 border-l-4 border-black text-xs sm:text-sm font-sans text-zinc-800 italic shadow-sm">
              {profileData.bio.quote}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-black text-white font-bold hover:bg-zinc-800 transition-all border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Explore Impact & AI Workflows</span>
                <ArrowDown size={14} />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-white text-black font-bold hover:bg-zinc-100 transition-colors border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <FileText size={14} />
                <span>Online Resume</span>
                <ExternalLink size={12} className="text-zinc-500" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-3 bg-zinc-100 text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors border border-zinc-300"
              >
                <Mail size={14} />
                <span>Contact</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 px-4 py-3 bg-zinc-100 text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors border border-zinc-300"
              >
                {copied ? <Check size={14} className="text-black" /> : <Copy size={14} />}
                <span>{copied ? "Email copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Responsive Editorial Portrait Frame */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none group">
              {/* Image Frame with Double Border & Offset Drop Shadow */}
              <div className="relative bg-white p-2 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Responsive Image Container */}
                <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden border border-zinc-300">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                  {/* Corner Registration Marks */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-black pointer-events-none"></div>
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-black pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-black pointer-events-none"></div>
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-black pointer-events-none"></div>
                </div>

                {/* Editorial Monospace Caption */}
                <div className="pt-2 pb-0.5 px-1 flex items-center justify-between font-mono text-[11px] text-zinc-600 border-t border-zinc-200 mt-2">
                  <span className="font-bold text-black uppercase tracking-wider">{profileData.name}</span>
                  <span className="text-zinc-500 font-mono">ENG LEADER</span>
                </div>
              </div>

              {/* Sub-card quick note */}
              <div className="mt-3 p-3 bg-zinc-50 border border-black font-mono text-[11px] text-zinc-700 flex items-center justify-between shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="flex items-center space-x-1.5 font-sans font-semibold text-black">
                  <Users size={14} />
                  <span>30+ Practice Engineers</span>
                </span>
                <span className="text-black font-bold font-mono">98% ON-TIME</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tangible Business Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-10 mt-8 border-t border-zinc-200">
          {profileData.metrics.map((m, idx) => (
            <div key={idx} className="p-4 bg-white border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 transition-colors">
              <div className="text-[11px] font-sans text-zinc-500 uppercase tracking-wider">{m.label}</div>
              <div className="text-xl sm:text-2xl font-sans font-bold text-black mt-1">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
