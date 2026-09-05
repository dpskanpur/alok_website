"use client";

import experienceData from "@/data/experience.json";
import profileData from "@/data/profile.json";
import { Award, Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-b border-black bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-black font-bold tracking-widest uppercase mb-1">
              [Leadership & Career Track Record]
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Work Experience & Leadership Milestones
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] font-mono"
            >
              <span>View Online Resume</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Certifications & Honors Banner */}
        <div className="mb-10 p-5 bg-zinc-50 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-black" />
              <span className="font-bold text-black text-xs uppercase tracking-wider font-mono">
                Verified Certifications & Honors
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">CREDENTIALED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
            {profileData.certifications.map((cert, idx) => {
              const isGCP = cert.issuer.includes("Google");
              const isAWS = cert.issuer.includes("AWS") || cert.title.includes("AWS");
              const isAzure = cert.issuer.includes("Azure") || cert.title.includes("Azure");
              const badgeBorder = isGCP 
                ? "border-l-4 border-l-[#4285F4]" 
                : isAWS 
                ? "border-l-4 border-l-[#FF9900]" 
                : isAzure 
                ? "border-l-4 border-l-[#0078D4]" 
                : "border-l-4 border-l-black";

              return (
                <div
                  key={idx}
                  className={`p-3 bg-white border border-zinc-200 ${badgeBorder} rounded-r flex items-start space-x-2.5 shadow-xs hover:border-zinc-400 transition-colors`}
                >
                  <CheckCircle size={14} className={isGCP ? "text-[#4285F4] shrink-0 mt-0.5" : isAWS ? "text-[#FF9900] shrink-0 mt-0.5" : isAzure ? "text-[#0078D4] shrink-0 mt-0.5" : "text-black shrink-0 mt-0.5"} />
                  <div className="space-y-0.5">
                    <div className="font-semibold text-black text-xs leading-snug">{cert.title}</div>
                    <div className="text-[11px] text-zinc-500 font-sans">{cert.issuer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-3 border-b border-zinc-200 gap-2 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-zinc-400 font-mono text-xs">#0{index + 1}</span>
                    <h3 className="text-lg font-sans font-bold text-black">{item.role}</h3>
                  </div>
                  <div className="text-zinc-700 font-sans font-semibold text-sm">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-zinc-500 text-xs">
                  <div className="flex items-center space-x-1">
                    <Calendar size={13} className="text-black" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={13} className="text-black" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-700">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-black font-mono font-bold mt-0.5 shrink-0">❯</span>
                    <span>{highlight}</span>
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
