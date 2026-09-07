"use client";

import stackData from "@/data/stack.json";

export default function StackSection() {
  return (
    <section id="stack" className="py-20 border-b border-zinc-200 bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
          <div>
            <div className="text-xs font-mono text-[#0078D4] font-bold tracking-widest uppercase mb-1.5">
              Practice Leadership & Architecture Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Leadership Capabilities, Cloud Architecture & AI
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-sm">
            From organizational design, pre-sales and FinOps to zero-trust cloud infrastructure and applied agentic workflows.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stackData.categories.map((cat, idx) => {
            // Category 0: Executive/Leadership (Azure Blue)
            // Category 1: Cloud Architecture & Security (Google Cloud Blue)
            // Category 2: Agentic AI & Velocity (AWS Orange)
            const topBarColor = idx === 0 ? "border-t-4 border-t-[#0078D4]" : idx === 1 ? "border-t-4 border-t-[#4285F4]" : "border-t-4 border-t-[#FF9900]";
            const numColor = idx === 0 ? "text-[#0078D4]" : idx === 1 ? "text-[#4285F4]" : "text-[#FF9900]";

            return (
              <div
                key={idx}
                className={`p-6 bg-white border border-zinc-200 ${topBarColor} rounded-xl shadow-xs hover:shadow-md transition-all duration-300 space-y-5`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="font-bold text-black text-sm tracking-tight font-sans">
                    {cat.name}
                  </span>
                  <span className={`${numColor} font-bold font-mono text-xs`}>0{idx + 1}</span>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-black font-sans">{item.name}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-zinc-700 font-sans font-medium rounded-full">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
