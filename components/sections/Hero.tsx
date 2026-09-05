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
    <section className="relative pt-12 sm:pt-16 pb-16 border-b border-zinc-200 bg-white px-4 sm:px-6">
      <div className="relative w-full">
        {/* Top Status & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-10 border-b border-zinc-200 text-xs sm:text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-500 font-medium">Currently:</span>
            <span className="text-black font-semibold">{profileData.title}</span>
            <span className="text-zinc-400">@</span>
            <span className="text-black font-semibold">{profileData.company}</span>
          </div>
          <div className="flex items-center space-x-5 text-zinc-600">
            <span className="flex items-center space-x-1.5">
              <MapPin size={14} className="text-black" />
              <span>{profileData.location}</span>
            </span>
            <span className="flex items-center space-x-1.5 font-medium text-black">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Open for Practice Leadership / Director Roles</span>
            </span>
          </div>
        </div>

        {/* Hero Grid: Content + Frameless Floating Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Executive Bio & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Focus Tag with Multi-Cloud Accents */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs text-zinc-800 font-medium shadow-xs">
              <span className="flex items-center space-x-1">
                <span className="h-2 w-2 rounded-full bg-[#4285F4]" title="Google Cloud"></span>
                <span className="h-2 w-2 rounded-full bg-[#FF9900]" title="AWS"></span>
                <span className="h-2 w-2 rounded-full bg-[#0078D4]" title="Azure"></span>
              </span>
              <span>Google Cloud • AWS • Azure • Zero-Trust • Agentic AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-snug">
              Building & leading enterprise practices at the intersection of Cloud, Security & AI.
            </h1>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
              Engineering Leader at SADA (An Insight Company) leading cross-functional practices of 30+ engineers. I blend deep architecture in Google Cloud, SRE, and Agentic AI with strategic practice leadership: scaling talent, operationalizing delivery models, and partnering with executives to convert technology investments into measurable enterprise outcomes.
            </p>

            {/* Leadership Quote Block */}
            <div className="p-4 sm:p-5 bg-zinc-50 border-l-2 border-black rounded-r-md text-sm text-zinc-700 italic leading-relaxed">
              {profileData.bio.quote}
            </div>

            {/* Action Buttons: Clean, Single Line with Google, AWS & Azure Palette */}
            <div className="pt-2 flex items-center gap-2.5 text-xs sm:text-sm overflow-x-auto no-scrollbar py-1">
              {/* Google Cloud Blue Button */}
              <a
                href="#work"
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors rounded shadow-xs whitespace-nowrap shrink-0"
              >
                <span>View Practice Impact</span>
                <ArrowDown size={14} />
              </a>

              {/* AWS Orange Accent Button */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-white text-[#D97706] hover:text-[#B45309] font-medium hover:bg-amber-50 transition-colors border border-[#FF9900]/40 rounded shadow-xs whitespace-nowrap shrink-0"
              >
                <FileText size={14} className="text-[#FF9900]" />
                <span>Resume</span>
                <ExternalLink size={12} className="text-[#FF9900]/70" />
              </a>

              {/* Azure Blue Accent Button */}
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-sky-50 text-[#0078D4] hover:bg-sky-100 transition-colors border border-[#0078D4]/30 rounded whitespace-nowrap shrink-0 font-medium"
              >
                <Mail size={14} className="text-[#0078D4]" />
                <span>Contact</span>
              </a>

              {/* Google Green Accent Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-1.5 px-3 py-2 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors border border-emerald-200 rounded whitespace-nowrap shrink-0 font-medium"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-emerald-700" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-End Nerdy Technical Architecture Frame */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <div className="relative group w-full max-w-[280px] sm:max-w-[300px]">
              {/* Outer Technical Frame with Hairline Border & Subtle Shadow */}
              <div className="relative bg-white border border-zinc-300 rounded-lg p-2.5 shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Portrait Container with HUD Precision Registration Marks */}
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                  />

                  {/* Corner HUD Technical Optical Brackets */}
                  {/* Top-Left: GCP Blue */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#4285F4] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  {/* Top-Right: AWS Orange */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FF9900] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  {/* Bottom-Left: Azure Blue */}
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0078D4] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  {/* Bottom-Right: GCP Green */}
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#34A853] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Tech Bottom Telemetry / Professional Practice Bar */}
                <div className="pt-2.5 mt-2 border-t border-zinc-100 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-zinc-700">
                    <span className="font-semibold text-black font-sans text-xs">{profileData.name}</span>
                    <span className="text-[10px] text-[#0078D4] bg-sky-50 px-2 py-0.5 rounded border border-[#0078D4]/20 font-semibold">PRACTICE LEADER</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-600 pt-0.5">
                    <span className="flex items-center space-x-1">
                      <span className="text-zinc-400">SPEC:</span>
                      <span className="text-[#4285F4] font-medium">GCP</span>
                      <span>•</span>
                      <span className="text-[#D97706] font-medium">AWS</span>
                      <span>•</span>
                      <span className="text-[#0078D4] font-medium">AZURE</span>
                    </span>
                    <span className="text-[#34A853] font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">98% ON-TIME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-zinc-200">
          {profileData.metrics.map((m, idx) => (
            <div key={idx} className="p-4 bg-zinc-50/70 border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{m.label}</div>
              <div className="text-2xl font-bold text-black mt-1.5">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
