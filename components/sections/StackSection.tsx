"use client";

import stackData from "@/data/stack.json";

export default function StackSection() {
  return (
    <section id="stack" className="py-16 border-b border-black bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-black font-bold tracking-widest uppercase mb-1">
              [Practice Leadership & Architecture Stack]
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Leadership Capabilities, Cloud Architecture & AI
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-xs">
            From organizational design, pre-sales and FinOps to zero-trust cloud infrastructure and applied agentic workflows.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stackData.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-black">
                <span className="font-bold text-black uppercase text-xs tracking-wider font-mono">
                  {cat.name}
                </span>
                <span className="text-zinc-500 font-bold font-mono text-xs">0{idx + 1}</span>
              </div>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-0.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-black font-sans">{item.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800 font-sans font-medium">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
