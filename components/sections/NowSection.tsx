"use client";

import nowData from "@/data/now.json";
import { Terminal, Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";

export default function NowSection() {
  return (
    <section id="now" className="py-16 border-b border-black bg-nerd-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-accent font-bold tracking-widest uppercase mb-1">
              [03. Live Telemetry / Now]
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              What I&apos;m Focused On Right Now
            </h2>
          </div>
          <div className="flex items-center space-x-3 text-xs font-mono text-nerd-muted">
            <div className="flex items-center space-x-1.5">
              <Clock size={12} className="text-accent" />
              <span>UPDATED: {nowData.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Informative Sub-header */}
        <div className="p-4 bg-white border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-accent"></span>
            <span className="text-black font-semibold">
              Inspired by Derek Sivers&apos; /now page initiative. A public declaration of current priorities.
            </span>
          </div>
          <div className="flex items-center space-x-1 text-nerd-muted">
            <MapPin size={12} className="text-accent" />
            <span>{nowData.location}</span>
          </div>
        </div>

        {/* 3-Column Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nowData.sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-nerd-border font-mono text-xs">
                <span className="font-bold text-black uppercase">[{sec.category}]</span>
                <span className="text-accent font-bold">0{idx + 1}</span>
              </div>

              <ul className="space-y-3 font-sans text-xs sm:text-sm text-nerd-charcoal">
                {sec.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-accent font-mono font-bold mt-0.5">❯</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
