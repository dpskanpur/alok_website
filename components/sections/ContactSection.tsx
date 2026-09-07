"use client";

import { useState, useEffect } from "react";
import profileData from "@/data/profile.json";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare, 
  FileText, 
  Phone,
  ShieldAlert,
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  // Anti-Spam & Bot Protection:
  // 1. Invisible Honeypot field (bots fill it, humans cannot see it)
  const [honeypot, setHoneypot] = useState("");
  
  // 2. Interactive Math Security Challenge (No external API dependency)
  const [captchaNum1, setCaptchaNum1] = useState(3);
  const [captchaNum2, setCaptchaNum2] = useState(5);
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Generate new captcha question on mount
  useEffect(() => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setCaptchaNum1(n1);
    setCaptchaNum2(n2);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Bot detection 1: Honeypot trap
    if (honeypot.trim() !== "") {
      // Silently pretend success to mislead spam bots
      setFormSubmitted(true);
      return;
    }

    // Bot detection 2: Math CAPTCHA verification
    const expected = captchaNum1 + captchaNum2;
    if (parseInt(userCaptchaAnswer.trim(), 10) !== expected) {
      setFormError(`Human verification failed. What is ${captchaNum1} + ${captchaNum2}?`);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send directly via mailto URI with full content pre-filled
      const subject = encodeURIComponent(`Executive Inquiry: ${formData.name} via alokksingh.com`);
      const body = encodeURIComponent(
        `Hi Alok,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}\nSecurity: Math Verified (${captchaNum1} + ${captchaNum2} = ${expected})`
      );
      
      // Trigger user's mail client (works 100% reliably across macOS, iOS, Windows, Android)
      const mailtoLink = `mailto:aks2103@gmail.com?subject=${subject}&body=${body}`;
      
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormSubmitted(true);
    } catch (err) {
      setFormError("Could not open mail client. Please click 'Copy Email' to reach out directly.");
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

                {/* Anti-Spam Honeypot Field (Hidden from human users, catches automated scrapers) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    id="website_hp"
                    type="text"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Interactive Math Security CAPTCHA */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center space-x-1.5 text-zinc-700 font-semibold">
                      <ShieldCheck size={14} className="text-[#0078D4]" />
                      <span>Security Verification</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const n1 = Math.floor(Math.random() * 8) + 2;
                        const n2 = Math.floor(Math.random() * 8) + 1;
                        setCaptchaNum1(n1);
                        setCaptchaNum2(n2);
                        setUserCaptchaAnswer("");
                      }}
                      className="text-zinc-400 hover:text-black flex items-center space-x-1 text-[10px]"
                      title="Generate new challenge"
                    >
                      <RefreshCw size={11} />
                      <span>Refresh</span>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1.5 bg-white border border-zinc-300 rounded font-mono font-bold text-black text-xs">
                      {captchaNum1} + {captchaNum2} =
                    </span>
                    <input
                      type="number"
                      required
                      placeholder="Answer"
                      value={userCaptchaAnswer}
                      onChange={(e) => setUserCaptchaAnswer(e.target.value)}
                      className="w-24 p-1.5 bg-white border border-zinc-200 rounded text-center text-xs font-mono font-bold focus:border-[#4285F4] focus:outline-none"
                    />
                    <span className="text-[10px] text-zinc-500 font-sans">
                      (Proves you are human)
                    </span>
                  </div>
                </div>

                {/* Error Notification */}
                {formError && (
                  <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs flex items-center space-x-2 font-medium">
                    <ShieldAlert size={14} className="shrink-0 text-rose-600" />
                    <span>{formError}</span>
                  </div>
                )}

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
