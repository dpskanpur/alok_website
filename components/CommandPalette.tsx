"use client";

import { useEffect, useState } from "react";
import { 
  BookOpen, 
  Layers, 
  Briefcase, 
  Mail, 
  Check, 
  Copy, 
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("aks2103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    {
      id: "work",
      category: "Navigation",
      name: "Featured Initiatives & GCP Modernizations",
      shortcut: "G W",
      icon: Briefcase,
      action: () => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "experience",
      category: "Navigation",
      name: "Leadership Track Record & Certifications",
      shortcut: "G E",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "stack",
      category: "Navigation",
      name: "GCP, Security & Architecture Stack",
      shortcut: "G S",
      icon: Layers,
      action: () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "hobbies",
      category: "Navigation",
      name: "Reading List, Setup & Curiosities",
      shortcut: "G I",
      icon: BookOpen,
      action: () => {
        document.getElementById("hobbies")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "contact",
      category: "Navigation",
      name: "Get in Touch / Direct Channels",
      shortcut: "G C",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "copy-email",
      category: "Actions",
      name: copied ? "Email copied to clipboard!" : "Copy Email (aks2103@gmail.com)",
      shortcut: "C E",
      icon: copied ? Check : Copy,
      action: copyEmail
    },
    {
      id: "linkedin",
      category: "Connect",
      name: "Connect on LinkedIn (in/aks2103)",
      shortcut: "↗",
      icon: LinkedinIcon,
      action: () => window.open("https://www.linkedin.com/in/aks2103/", "_blank")
    },
    {
      id: "resume",
      category: "Connect",
      name: "View Official FlowCV Resume",
      shortcut: "↗",
      icon: BookOpen,
      action: () => window.open("https://flowcv.com/resume/fl37r5sdsr", "_blank")
    }
  ];

  const filtered = actions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100 border-b border-black text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 bg-black"></span>
            <span className="text-black font-bold tracking-wider">COMMAND PALETTE</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-black hover:bg-zinc-200 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-200 bg-white">
          <span className="text-black font-mono font-bold mr-2.5 text-sm">{">"}</span>
          <input
            type="text"
            placeholder="Search projects, skills, or jump to a section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm font-sans placeholder:text-zinc-400 focus:outline-none text-black"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-zinc-100 border border-zinc-300 text-zinc-600">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-xs font-sans text-zinc-500">
              No matching results found for &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-left font-sans text-xs hover:bg-black hover:text-white group transition-colors border border-transparent"
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                    <span className="text-zinc-800 group-hover:text-white">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300">
                      {item.category}
                    </span>
                    <span className="px-1.5 py-0.5 text-[9px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-300 group-hover:bg-zinc-800 group-hover:text-white group-hover:border-zinc-700">
                      {item.shortcut}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-50 border-t border-zinc-200 text-[11px] font-mono text-zinc-500">
          <span>Press ⌘K or Ctrl+K anytime</span>
          <span className="text-black font-semibold">Alok Singh Portfolio</span>
        </div>
      </div>
    </div>
  );
}
