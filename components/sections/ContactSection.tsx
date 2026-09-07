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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setFormError(null);

    try {
      // Free form submission endpoint via Web3Forms (no server needed, delivers directly to your Gmail)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6798e1fa-8cb1-4993-bb5b-38ecbc6860d5", // Public free access key for portfolio notifications
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "aks2103@gmail.com",
          subject: `Executive Inquiry from ${formData.name} via alokksingh.com`,
          from_name: "Alok Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback to mailto if third-party network is restricted
        window.location.href = `mailto:aks2103@gmail.com?subject=${encodeURIComponent("Executive Inquiry from " + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
        setFormSubmitted(true);
      }
    } catch (err) {
      // Instant mailto fallback so user never loses message
      window.location.href = `mailto:aks2103@gmail.com?subject=${encodeURIComponent("Executive Inquiry from " + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-zinc-200 px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0078D4] font-bold tracking-widest uppercase mb-1.5">
              Direct Inquiries & Advisory
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Let&apos;s Build Something Resilient Together
            </h2>
          </div>
          <div className="text-xs font-sans text-zinc-500">
            Average response time: <strong className="text-black font-mono">&lt; 24 hours</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
            <div className="p-5 bg-zinc-50/70 border border-zinc-200 rounded-xl space-y-3 font-sans text-xs">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono font-medium">Direct Email Address</div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-black text-sm font-mono">aks2103@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white font-medium hover:bg-zinc-800 transition-colors text-xs rounded-lg shadow-xs font-sans"
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
                  href="mailto:aks2103@gmail.com"
                  className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Mail size={16} className="text-[#4285F4]" />
                    <div>
                      <div className="text-black font-semibold text-xs">Send Email</div>
                      <div className="text-[11px] text-zinc-500 font-mono">aks2103@gmail.com</div>
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

          {/* Right Column: Contact Message Form */}
          <div className="p-6 sm:p-7 bg-white border border-zinc-200 rounded-xl shadow-xs text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center space-x-2">
                <MessageSquare size={15} className="text-black" />
                <span className="font-bold text-black uppercase tracking-wider font-mono">Send a Direct Message</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-mono font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">Direct Inbox</span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="inline-flex p-3 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-200">
                  <Check size={24} />
                </div>
                <h4 className="text-base font-sans font-bold text-black">Message Sent Successfully</h4>
                <p className="text-xs text-zinc-600 font-sans max-w-xs mx-auto">
                  Thank you for reaching out! I have received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-4 py-2 bg-black text-white font-medium text-xs hover:bg-zinc-800 transition-colors rounded-lg"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono font-medium">
                    Your Name <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50/80 border border-zinc-200 rounded-lg focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] focus:bg-white focus:outline-none text-black text-xs font-sans transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono font-medium">
                    Your Email <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50/80 border border-zinc-200 rounded-lg focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] focus:bg-white focus:outline-none text-black text-xs font-sans transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] text-zinc-600 uppercase font-mono font-medium">
                    Your Message <span className="text-[#EA4335]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your team, leadership role, or cloud modernization initiative..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-zinc-50/80 border border-zinc-200 rounded-lg focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] focus:bg-white focus:outline-none text-black text-xs font-sans resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-black text-white font-medium hover:bg-zinc-800 disabled:opacity-60 transition-all text-xs rounded-lg shadow-xs font-sans cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
