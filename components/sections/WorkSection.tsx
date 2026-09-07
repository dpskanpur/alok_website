"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Layers, 
  Code2, 
  TrendingUp,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("project-01");

  const categories = [
    { id: "all", label: "All Initiatives" },
    { id: "agentic-ai", label: "Agentic AI & Automation" },
    { id: "platform-engineering", label: "Platform Engineering" },
    { id: "security-finops", label: "Cloud Security & FinOps" },
    { id: "engineering-leadership", label: "Engineering Leadership" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="py-20 border-b border-zinc-200 bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#4285F4] font-bold tracking-widest uppercase mb-1.5 flex items-center space-x-1.5">
              <Sparkles size={13} />
              <span>Practice Building & Architectural Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Enterprise Practice Initiatives & Technical Blueprints
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-md">
            Demonstrating how technical mastery powers strategic practice vision: scaling 30+ engineers, executing 40+ client deliveries, and operationalizing agentic AI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-zinc-100 font-sans text-xs">
          <span className="text-zinc-500 mr-1 text-xs font-medium">Focus Area:</span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 transition-all text-xs rounded-full font-medium ${
                  isActive
                    ? "bg-black text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Initiatives List */}
        <div className="space-y-5">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            
            // Cloud category styling
            const categoryBadgeStyle = 
              project.category === "platform-engineering"
                ? "bg-blue-50 border-blue-200 text-[#4285F4]"
                : project.category === "security-finops"
                ? "bg-amber-50 border-amber-200 text-[#FF9900]"
                : project.category === "agentic-ai"
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-sky-50 border-sky-200 text-[#0078D4]";

            return (
              <div
                key={project.id}
                className={`border rounded-xl transition-all duration-200 bg-white ${
                  isExpanded 
                    ? "border-zinc-400 shadow-md ring-1 ring-zinc-200" 
                    : "border-zinc-200 hover:border-zinc-300 hover:shadow-xs"
                }`}
              >
                {/* Initiative Header Row */}
                <div
                  onClick={() => toggleExpand(project.id)}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-start justify-between cursor-pointer select-none gap-5"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2 font-sans text-xs">
                      <span className="text-zinc-400 font-mono font-medium text-xs">0{index + 1}</span>
                      <span className={`px-2.5 py-0.5 border text-[10px] uppercase font-semibold rounded-full ${categoryBadgeStyle}`}>
                        {project.category.replace("-", " ")}
                      </span>
                      {project.metricsBadge && (
                        <span className="px-2.5 py-0.5 bg-zinc-900 text-white font-mono text-[10px] font-bold rounded-full shadow-xs">
                          {project.metricsBadge}
                        </span>
                      )}
                      <span className="text-zinc-400 font-mono text-xs">{project.year}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-sans font-bold text-black group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Plain-English summary */}
                    <p className="text-sm text-zinc-600 font-sans leading-relaxed max-w-3xl">
                      {project.tagline}
                    </p>

                    {/* Measurable Business & Velocity Impact Callout */}
                    <div className="flex items-start space-x-2.5 text-xs font-sans text-zinc-900 bg-zinc-50 border border-zinc-200/80 p-3 rounded-lg w-full max-w-2xl shadow-xs leading-relaxed">
                      <TrendingUp size={15} className="text-[#34A853] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black font-semibold">Impact & ROI: </strong>
                        <span className="text-zinc-700">{project.businessImpact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Top-Aligned Blueprint Toggle Button & Domain Pills */}
                  <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2.5 shrink-0 pt-2 md:pt-0">
                    <button
                      className="px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 hover:border-zinc-300 transition-colors flex items-center space-x-1.5 text-xs font-medium shadow-2xs"
                      aria-label="Toggle details"
                    >
                      <span className="font-sans text-xs">{isExpanded ? "Collapse" : "Blueprint"}</span>
                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>
                    <div className="hidden lg:flex flex-wrap gap-1 max-w-[190px] justify-end">
                      {project.stack.slice(0, 2).map((st) => (
                        <span key={st} className="text-[10px] font-sans px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Deep-Dive Panel */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-zinc-100 bg-zinc-50/50 rounded-b-xl space-y-5 text-xs">
                    {/* Executive ROI & Strategic Challenge Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.challenge && (
                        <div className="p-4 sm:p-5 bg-white border border-rose-200/70 rounded-xl space-y-1.5 shadow-xs">
                          <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold text-rose-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block"></span>
                            <span>Enterprise Challenge & Risk</span>
                          </div>
                          <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>
                      )}

                      <div className="p-4 sm:p-5 bg-white border border-sky-200/70 rounded-xl space-y-1.5 shadow-xs">
                        <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold text-[#0078D4] uppercase tracking-wider">
                          <Layers size={13} className="text-[#0078D4]" />
                          <span>Strategic Architecture & Delivery</span>
                        </div>
                        <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-sans">
                          {project.architecture}
                        </p>
                      </div>
                    </div>

                    {/* Code Snippet / Architecture Spec */}
                    {project.snippet && (
                      <div className="border border-zinc-800 rounded-xl bg-zinc-950 text-white p-4 sm:p-5 overflow-x-auto shadow-sm">
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800 text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center space-x-2">
                            <Code2 size={14} className="text-emerald-400" />
                            <span className="text-zinc-200 font-semibold">EXECUTION_BLUEPRINT</span>
                          </div>
                          <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">Autonomous Workflow & IaC</span>
                        </div>
                        <pre className="text-xs font-mono leading-relaxed text-zinc-200">
                          <code>{project.snippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Tech Badges & Action Links */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-zinc-500 text-xs font-sans mr-1">Domains & Technologies:</span>
                        {project.stack.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 bg-white border border-zinc-200 text-zinc-800 text-xs font-sans font-medium rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 transition-colors text-xs font-sans rounded-md shadow-xs"
                        >
                          <ExternalLink size={12} />
                          <span>LinkedIn Profile</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white font-medium hover:bg-zinc-800 transition-colors text-xs font-sans rounded-md shadow-xs"
                        >
                          <span>Full Resume</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
