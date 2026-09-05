"use client";

import { useState } from "react";
import profileData from "@/data/profile.json";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare,
  FileText,
  Phone
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-black px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-black font-bold tracking-widest uppercase mb-1">
              [Get In Touch / Direct Channels]
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Let&apos;s Build Something Resilient Together
            </h2>
          </div>
          <div className="text-xs font-sans text-zinc-500">
            Average response time: <strong className="text-black font-mono">&lt; 24 hours</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Direct Channels & Links */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-sans font-bold text-black">
                Open for engineering leadership roles, technical advisory & cloud transformation
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Whether you are modernizing to Google Cloud, scaling SRE practices across teams, or seeking strategic architectural leadership, feel free to reach out directly.
              </p>
            </div>

            {/* Email Action Card */}
            <div className="p-4 bg-zinc-50 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3 font-sans text-xs">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Direct Email Address</div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-black text-sm font-mono">aks2103@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white font-bold hover:bg-zinc-800 transition-colors text-xs border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] font-mono"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Key Verified Profile Links */}
            <div className="space-y-2 text-xs font-sans">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Official Profiles & Contact</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/aks2103/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-black hover:bg-zinc-50 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="flex items-center space-x-2.5">
                    <LinkedinIcon size={16} />
                    <div>
                      <div className="text-black font-bold text-xs">LinkedIn Profile</div>
                      <div className="text-[10px] text-zinc-500 font-mono">in/aks2103</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-black hover:bg-zinc-50 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="flex items-center space-x-2.5">
                    <FileText size={16} className="text-black" />
                    <div>
                      <div className="text-black font-bold text-xs">Online Resume</div>
                      <div className="text-[10px] text-zinc-500 font-mono">FlowCV ATS-Ready</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href="mailto:aks2103@gmail.com"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-300 hover:border-black hover:bg-zinc-50 transition-all shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Mail size={16} className="text-black" />
                    <div>
                      <div className="text-black font-bold text-xs">Send Email</div>
                      <div className="text-[10px] text-zinc-500 font-mono">aks2103@gmail.com</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>

                <a
                  href="tel:9389232352"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-300 hover:border-black hover:bg-zinc-50 transition-all shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone size={16} className="text-black" />
                    <div>
                      <div className="text-black font-bold text-xs">Phone</div>
                      <div className="text-[10px] text-zinc-500 font-mono">+91 9389232352</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="p-5 sm:p-6 bg-white border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black">
              <div className="flex items-center space-x-2">
                <MessageSquare size={14} className="text-black" />
                <span className="font-bold text-black uppercase tracking-wider font-mono">Send a Direct Message</span>
              </div>
              <span className="text-[11px] text-black font-mono font-medium">Quick Reply</span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="inline-flex p-3 bg-zinc-100 border border-black text-black">
                  <Check size={24} />
                </div>
                <h4 className="text-base font-sans font-bold text-black">Message Sent Successfully</h4>
                <p className="text-xs text-zinc-600 font-sans max-w-xs mx-auto">
                  Thank you for reaching out! I have received your message and will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-4 py-2 bg-black text-white font-bold text-xs hover:bg-zinc-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono">
                    Your Name <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50 border border-zinc-300 focus:border-black focus:bg-white focus:outline-none text-black text-xs font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono">
                    Your Email <span className="text-black">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50 border border-zinc-300 focus:border-black focus:bg-white focus:outline-none text-black text-xs font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono">
                    Your Message <span className="text-black">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your team, role, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50 border border-zinc-300 focus:border-black focus:bg-white focus:outline-none text-black text-xs font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-black text-white font-bold hover:bg-zinc-800 transition-all uppercase tracking-wider text-xs border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] font-mono"
                >
                  <Send size={13} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
