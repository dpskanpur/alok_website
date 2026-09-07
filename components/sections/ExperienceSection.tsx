"use client";

import experienceData from "@/data/experience.json";
import profileData from "@/data/profile.json";
import { Award, Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0078D4] font-bold tracking-widest uppercase mb-1.5">
              Leadership & Career Track Record
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
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-black text-white text-xs font-medium hover:bg-zinc-800 transition-colors rounded-lg shadow-xs font-sans"
            >
              <span>View Online Resume</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Certifications & Honors Banner */}
        <div className="mb-14 p-5 sm:p-6 bg-zinc-50/70 border border-zinc-200/90 rounded-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-[#4285F4]" />
              <span className="font-bold text-black text-xs uppercase tracking-wider font-mono">
                Verified Multi-Cloud Certifications & Honors
              </span>
            </div>
            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">CREDENTIALED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
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
                : "border-l-4 border-l-[#FBBC05]";

              return (
                <a
                  key={idx}
                  href={cert.verificationUrl || "https://www.linkedin.com/in/aks2103/details/certifications/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 bg-white border border-zinc-200 ${badgeBorder} rounded-lg flex items-start justify-between space-x-3 shadow-2xs hover:shadow-xs hover:border-zinc-300 transition-all group`}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={15} className={isGCP ? "text-[#4285F4] shrink-0 mt-0.5" : isAWS ? "text-[#FF9900] shrink-0 mt-0.5" : isAzure ? "text-[#0078D4] shrink-0 mt-0.5" : "text-[#FBBC05] shrink-0 mt-0.5"} />
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black text-xs leading-snug group-hover:text-[#0078D4] transition-colors">{cert.title}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] text-zinc-500 font-sans">
                        <span>{cert.issuer}</span>
                        {cert.code && <span className="font-mono text-[9px] px-1 bg-zinc-100 rounded text-zinc-600">{cert.code}</span>}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={12} className="text-zinc-400 group-hover:text-black shrink-0 mt-0.5 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 ml-2 sm:ml-4 space-y-8">
          {experienceData.map((item, index) => {
            // Milestone node colors
            const nodeColors = ["bg-[#4285F4]", "bg-[#FF9900]", "bg-[#0078D4]"];
            const currentColor = nodeColors[index % nodeColors.length];

            return (
              <div key={index} className="relative group">
                {/* Timeline node dot on the vertical spine */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${currentColor} ring-4 ring-zinc-50`}
                />

                {/* Experience Card */}
                <div className="p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-sm transition-all duration-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-3.5 border-b border-zinc-100 gap-2 font-sans text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-zinc-400 font-mono text-xs">0{index + 1}</span>
                        <h3 className="text-lg font-sans font-bold text-black">{item.role}</h3>
                      </div>
                      <div className="text-zinc-700 font-sans font-semibold text-sm">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-zinc-500 text-xs">
                      <div className="flex items-center space-x-1.5">
                        <Calendar size={13} className="text-zinc-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin size={13} className="text-zinc-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-600">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="text-[#4285F4] font-bold mt-0.5 shrink-0 text-xs">❯</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
