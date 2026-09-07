"use client";

import { useState } from "react";
import profileData from "@/data/profile.json";
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  FileText, 
  Phone,
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-zinc-200 px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0078D4] font-bold tracking-widest uppercase mb-1.5">
              Direct Inquiries & Executive Advisory
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Schedule a 15-Min Quick Sync or Connect Directly
            </h2>
          </div>
          <div className="text-xs font-sans text-zinc-500">
            Average email response time: <strong className="text-black font-mono">&lt; 24 hours</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Channels & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-sans font-bold text-black">
                Open for engineering leadership roles, advisory & cloud modernization
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Whether you are modernizing to Google Cloud, scaling SRE practices across teams, or seeking strategic architectural leadership, feel free to schedule a quick call or reach out via direct channels.
              </p>
            </div>

            {/* Email Action Card */}
            <div className="p-5 bg-zinc-50/70 border border-zinc-200 rounded-xl space-y-3 font-sans text-xs">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono font-medium">Direct Email Address</div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-black text-sm font-mono">aks2103@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white font-medium hover:bg-zinc-800 transition-colors text-xs rounded-lg shadow-xs font-sans cursor-pointer"
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Key Verified Profile Links */}
            <div className="space-y-2.5 text-xs font-sans">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono font-medium">Official Profiles & Channels</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/aks2103/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <LinkedinIcon size={16} className="text-[#0078D4]" />
                    <div>
                      <div className="text-black font-semibold text-xs">LinkedIn Profile</div>
                      <div className="text-[11px] text-zinc-500 font-mono">in/aks2103</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <FileText size={16} className="text-[#D97706]" />
                    <div>
                      <div className="text-black font-semibold text-xs">Online Resume</div>
                      <div className="text-[11px] text-zinc-500 font-mono">FlowCV ATS-Ready</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aks2103@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Mail size={16} className="text-[#4285F4]" />
                    <div>
                      <div className="text-black font-semibold text-xs">Open in Gmail Web</div>
                      <div className="text-[11px] text-zinc-500 font-mono">mail.google.com</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href="tel:9389232352"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone size={16} className="text-[#34A853]" />
                    <div>
                      <div className="text-black font-semibold text-xs">Phone</div>
                      <div className="text-[11px] text-zinc-500 font-mono">+91 9389232352</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Calendar 15-Min Quick Sync Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl shadow-xs space-y-6">
            {/* Card Top Pill & Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#4285F4] text-white flex items-center justify-center shadow-xs">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm sm:text-base font-sans">
                    15-Minute Executive Sync
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-sans">Google Calendar • Google Meet Video</p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-700 font-mono font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                <span>Conflict-Free</span>
              </span>
            </div>

            {/* Description & Value points */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600 font-sans">
              <p className="leading-relaxed">
                Connect directly with Alok to discuss platform leadership opportunities, multi-cloud strategy, or technical advisory. Choose a time that suits you — Google Calendar automatically checks real-time availability to avoid scheduling conflicts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start space-x-2 p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg text-xs">
                  <CheckCircle2 size={14} className="text-[#4285F4] shrink-0 mt-0.5" />
                  <span className="text-zinc-700">Practice Leadership & Org Scaling</span>
                </div>
                <div className="flex items-start space-x-2 p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg text-xs">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0 mt-0.5" />
                  <span className="text-zinc-700">Google Cloud / Multi-Cloud Architecture</span>
                </div>
                <div className="flex items-start space-x-2 p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg text-xs">
                  <CheckCircle2 size={14} className="text-[#FF9900] shrink-0 mt-0.5" />
                  <span className="text-zinc-700">Zero-Trust Cloud Security & FinOps</span>
                </div>
                <div className="flex items-start space-x-2 p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg text-xs">
                  <CheckCircle2 size={14} className="text-[#0078D4] shrink-0 mt-0.5" />
                  <span className="text-zinc-700">Agentic AI Workflows in SRE</span>
                </div>
              </div>
            </div>

            {/* Meeting Meta Details */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 p-3 bg-zinc-50 border border-zinc-200/80 rounded-lg">
              <div className="flex items-center space-x-1.5">
                <Clock size={13} className="text-black" />
                <span>Duration: <strong>15 Minutes</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Video size={13} className="text-[#4285F4]" />
                <span>Format: <strong>Google Meet</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck size={13} className="text-[#34A853]" />
                <span>Auto Timezone: <strong>IST / UTC / Local</strong></span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-2 pt-1">
              <a
                href={profileData.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2.5 py-3.5 bg-black hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md font-sans group cursor-pointer"
              >
                <Calendar size={16} className="text-white group-hover:scale-110 transition-transform" />
                <span>Open Google Calendar & Choose a Slot</span>
                <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <p className="text-[11px] text-center text-zinc-500 font-sans">
                Prefer email first? Drop a note to <a href="mailto:aks2103@gmail.com" className="text-black font-semibold hover:underline">aks2103@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
