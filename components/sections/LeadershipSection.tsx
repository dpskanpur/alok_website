"use client";

import profileData from "@/data/profile.json";
import { Users, ShieldCheck, Sparkles, TrendingUp, Quote } from "lucide-react";

export default function LeadershipSection() {
  const icons = [Users, ShieldCheck, Sparkles, TrendingUp];
  const accentColors = ["#0078D4", "#4285F4", "#FF9900", "#34A853"];

  return (
    <section id="leadership" className="py-20 border-b border-zinc-200 bg-zinc-50/40 px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0078D4] font-bold tracking-widest uppercase mb-1.5">
              Practice Building & Engineering Culture
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Leadership Philosophy & Operating Principles
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-sm">
            How I lead 30+ engineers: shifting from reactive operations to autonomous pods, SRE discipline, and AI-accelerated delivery.
          </p>
        </div>

        {/* 4 Core Leadership Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {profileData.leadershipPrinciples.map((principle, idx) => {
            const IconComponent = icons[idx % icons.length];
            const accent = accentColors[idx % accentColors.length];

            return (
              <div
                key={principle.number}
                className="p-6 sm:p-7 bg-white border border-zinc-200 rounded-xl hover:shadow-md hover:border-zinc-300 transition-all duration-300 space-y-4 relative group"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs shadow-xs"
                      style={{ backgroundColor: accent }}
                    >
                      <IconComponent size={16} />
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      PILLAR {principle.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                    Operating Standard
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-black tracking-tight font-sans">
                    {principle.title}
                  </h3>
                  <div className="text-xs text-zinc-500 font-medium pt-0.5 font-sans">
                    {principle.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Ethos Quote Callout */}
        <div className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl relative overflow-hidden shadow-xs">
          <div className="absolute top-4 right-6 text-zinc-100 select-none pointer-events-none">
            <Quote size={80} />
          </div>
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="text-[11px] font-mono text-[#0078D4] font-bold uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4]"></span>
              <span>Executive Ethos</span>
            </div>
            <blockquote className="text-sm sm:text-base font-sans text-zinc-800 italic leading-relaxed">
              {profileData.bio.quote}
            </blockquote>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-8 h-8 rounded-full bg-zinc-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                AS
              </div>
              <div>
                <div className="text-xs font-bold text-black font-sans">{profileData.name}</div>
                <div className="text-[11px] text-zinc-500 font-sans">{profileData.title} • {profileData.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
