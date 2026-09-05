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
    <section id="work" className="py-16 border-b border-black bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-black font-bold tracking-widest uppercase mb-1 flex items-center space-x-1.5">
              <Sparkles size={12} />
              <span>[Practice Building & Architectural Execution]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Enterprise Practice Initiatives & Technical Blueprints
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-sm">
            Demonstrating how technical mastery powers strategic practice vision: scaling 30+ engineers, executing 40+ client deliveries, and operationalizing agentic AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-zinc-200 font-mono text-xs">
          <span className="text-zinc-500 mr-1 font-sans">Focus Area:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 border transition-all text-xs rounded-none ${
                selectedCategory === cat.id
                  ? "bg-black text-white border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-zinc-700 border-zinc-300 hover:border-black hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className={`border transition-all bg-white ${
                  isExpanded 
                    ? "border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" 
                    : "border-zinc-300 hover:border-black"
                }`}
              >
                {/* Project Header Row */}
                <div
                  onClick={() => toggleExpand(project.id)}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between cursor-pointer select-none gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2.5 font-mono text-xs">
                      <span className="text-black font-bold">Initiative 0{index + 1}</span>
                      <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-[10px] uppercase text-zinc-800 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-zinc-500 font-sans">{project.year}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-sans font-bold text-black group-hover:opacity-75 transition-opacity">
                      {project.title}
                    </h3>

                    {/* Plain-English summary */}
                    <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Measurable Business & Velocity Impact */}
                    <div className="flex items-center space-x-2 text-xs font-sans text-zinc-900 bg-zinc-100 px-3 py-1.5 border border-black w-fit shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      <TrendingUp size={14} className="text-black shrink-0" />
                      <span><strong>Impact & ROI:</strong> {project.businessImpact}</span>
                    </div>
                  </div>

                  {/* Right Tags & Toggle Button */}
                  <div className="flex items-center justify-between md:justify-end space-x-3 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-200">
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {project.stack.slice(0, 3).map((st) => (
                        <span key={st} className="text-[11px] font-sans px-2 py-0.5 bg-zinc-50 border border-zinc-300 text-zinc-700">
                          {st}
                        </span>
                      ))}
                    </div>
                    <button
                      className="p-2 border border-black text-black hover:bg-black hover:text-white transition-colors flex items-center space-x-1 text-xs"
                      aria-label="Toggle details"
                    >
                      <span className="font-sans text-[11px] hidden sm:inline">{isExpanded ? "Close" : "Details"}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Deep-Dive Panel */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-zinc-200 bg-zinc-50/70 space-y-5 text-xs">
                    {/* Architecture Details */}
                    <div className="p-4 bg-white border border-black space-y-2 shadow-sm">
                      <div className="flex items-center space-x-2 font-bold text-black text-xs uppercase tracking-wider font-mono">
                        <Layers size={14} />
                        <span>Leadership Strategy & Architectural Execution</span>
                      </div>
                      <p className="text-zinc-700 text-sm leading-relaxed font-sans">
                        {project.architecture}
                      </p>
                    </div>

                    {/* Code Snippet / Architecture Spec */}
                    {project.snippet && (
                      <div className="border border-black bg-zinc-950 text-white p-4 overflow-x-auto shadow-sm">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center space-x-1.5">
                            <Code2 size={13} className="text-white" />
                            <span>EXECUTION_BLUEPRINT</span>
                          </div>
                          <span className="text-[10px] text-zinc-500">Autonomous Workflow & IaC</span>
                        </div>
                        <pre className="text-xs font-mono leading-relaxed text-zinc-200">
                          <code>{project.snippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Tech Badges & Action Links */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-zinc-500 text-xs font-sans mr-1">Domains & Technologies:</span>
                        {project.stack.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 bg-white border border-black text-black text-xs font-sans font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-black text-black hover:bg-zinc-100 transition-colors text-xs font-sans shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <ExternalLink size={12} />
                          <span>LinkedIn Profile</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-black text-white font-bold hover:bg-zinc-800 transition-colors border border-black text-xs font-sans shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
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
