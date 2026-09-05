"use client";

import { useState } from "react";
import profileData from "@/data/profile.json";
import { ArrowUp, Mail, Copy, Check, ExternalLink, ShieldCheck, MapPin, Award } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-black font-sans text-xs">
      <div className="px-4 sm:px-6 py-10 space-y-8">
        {/* 4-Column Directory & Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Organization & Role */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-black uppercase tracking-widest border-b border-black pb-1.5 flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-black inline-block"></span>
              <span>Organization</span>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-black text-xs font-sans">SADA, An Insight Company</div>
              <div className="text-[11px] font-mono text-zinc-700">Manager, Platform Engineering & Security</div>
              <p className="text-zinc-600 text-xs leading-relaxed font-sans pt-1">
                Leading 30+ engineers across Google Cloud modernization, enterprise security & SRE.
              </p>
              <div className="flex items-center space-x-1.5 text-zinc-500 font-mono text-[11px] pt-1">
                <MapPin size={12} className="text-black" />
                <span>Chandigarh / Trivandrum, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Site Navigation */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-black uppercase tracking-widest border-b border-black pb-1.5 flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-black inline-block"></span>
              <span>Directory</span>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#work" className="text-zinc-600 hover:text-black hover:underline flex items-center justify-between">
                  <span>01. Initiatives & Work</span>
                  <span className="text-zinc-400">↗</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-600 hover:text-black hover:underline flex items-center justify-between">
                  <span>02. Track Record</span>
                  <span className="text-zinc-400">↗</span>
                </a>
              </li>
              <li>
                <a href="#stack" className="text-zinc-600 hover:text-black hover:underline flex items-center justify-between">
                  <span>03. Competencies</span>
                  <span className="text-zinc-400">↗</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-600 hover:text-black hover:underline flex items-center justify-between">
                  <span>04. Direct Contact</span>
                  <span className="text-zinc-400">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Credentials */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-black uppercase tracking-widest border-b border-black pb-1.5 flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-black inline-block"></span>
              <span>Credentials</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <ShieldCheck size={14} className="text-black shrink-0 mt-0.5" />
                <span className="text-zinc-800">Google Cloud Professional Cloud Architect</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck size={14} className="text-black shrink-0 mt-0.5" />
                <span className="text-zinc-800">Google Cloud Professional Security Engineer</span>
              </div>
              <div className="flex items-start space-x-2">
                <Award size={14} className="text-black shrink-0 mt-0.5" />
                <span className="text-zinc-800">LIC Golden Jubilee National Award</span>
              </div>
              <div className="flex items-start space-x-2">
                <Award size={14} className="text-black shrink-0 mt-0.5" />
                <span className="text-zinc-800">Master in Computer Applications (MCA)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Channels */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-black uppercase tracking-widest border-b border-black pb-1.5 flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-black inline-block"></span>
              <span>Channels</span>
            </div>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/aks2103/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-50 border border-zinc-300 hover:border-black flex items-center justify-between transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <LinkedinIcon size={14} />
                  <span className="font-bold text-black text-xs">LinkedIn</span>
                </div>
                <ExternalLink size={12} className="text-zinc-400 group-hover:text-black" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-50 border border-zinc-300 hover:border-black flex items-center justify-between transition-colors group shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <Mail size={14} />
                  <span className="font-bold text-black text-xs">FlowCV Resume</span>
                </div>
                <ExternalLink size={12} className="text-zinc-400 group-hover:text-black" />
              </a>

              <a
                href="mailto:aks2103@gmail.com"
                className="p-2.5 bg-zinc-50 border border-zinc-300 hover:border-black flex items-center justify-between transition-colors group shadow-sm font-mono text-[11px]"
              >
                <span className="text-black font-semibold">aks2103@gmail.com</span>
                <span className="text-zinc-400 group-hover:text-black">✉</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} {profileData.name}.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>Focus: <strong className="text-black">GCP • Security • SRE</strong></span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-black font-bold hover:underline"
            >
              <span>Back to top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
