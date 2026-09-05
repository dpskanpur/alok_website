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

        {/* Hero Grid: Content + Executive Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Headline, Executive Bio & CTAs */}
          <div className="lg:col-span-8 space-y-7">
            {/* Focus Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-300 rounded-full text-xs text-zinc-800 font-medium">
              <Sparkles size={13} className="text-black shrink-0" />
              <span>Cloud Platform • Zero-Trust Security • Agentic AI</span>
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

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-black text-white font-medium hover:bg-zinc-800 transition-colors rounded shadow-sm"
              >
                <span>View Practice Impact</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-black font-medium hover:bg-zinc-100 transition-colors border border-zinc-300 rounded shadow-sm"
              >
                <FileText size={15} />
                <span>Executive Resume</span>
                <ExternalLink size={13} className="text-zinc-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-zinc-100 text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors border border-zinc-200 rounded"
              >
                <Mail size={15} />
                <span>Contact</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-zinc-100 text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors border border-zinc-200 rounded"
              >
                {copied ? <Check size={15} className="text-black" /> : <Copy size={15} />}
                <span>{copied ? "Email copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Executive Portrait Frame */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              {/* Image Frame with Clean Border & Subtle Shadow */}
              <div className="relative bg-white p-2.5 border border-zinc-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {/* Image Container */}
                <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden rounded">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Caption */}
                <div className="pt-2.5 px-1 flex items-center justify-between text-xs text-zinc-600 border-t border-zinc-100 mt-2">
                  <span className="font-semibold text-black">{profileData.name}</span>
                  <span className="text-zinc-500 font-mono text-[11px]">PRACTICE LEADER</span>
                </div>
              </div>

              {/* Practice Sub-card note */}
              <div className="mt-3 p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-xs text-zinc-700 flex items-center justify-between shadow-sm">
                <span className="flex items-center space-x-2 font-medium text-black">
                  <Users size={15} className="text-zinc-700" />
                  <span>30+ Practice Engineers</span>
                </span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">98% On-Time</span>
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
