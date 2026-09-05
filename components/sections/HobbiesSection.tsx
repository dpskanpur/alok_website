"use client";

import { useState } from "react";
import hobbiesData from "@/data/hobbies.json";
import { 
  BookOpen, 
  Cpu, 
  Headphones, 
  Compass, 
  Star, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

export default function HobbiesSection() {
  const [activeTab, setActiveTab] = useState<"reading" | "hardware" | "audio" | "obsessions">("reading");

  return (
    <section id="hobbies" className="py-16 border-b border-black bg-white px-4 sm:px-6">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-black gap-4">
          <div>
            <div className="text-xs font-mono text-black font-bold tracking-widest uppercase mb-1">
              [Life, Mindset & Passions]
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-black tracking-tight">
              Curiosities, Rituals & Deep Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-xs">
            How I think, recharge, stay sharp, and approach problem-solving outside the terminal.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 font-sans text-xs">
          <button
            onClick={() => setActiveTab("reading")}
            className={`flex items-center justify-center space-x-2 p-3 border transition-all ${
              activeTab === "reading"
                ? "bg-black text-white font-bold border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-zinc-700 border-zinc-300 hover:border-black hover:text-black"
            }`}
          >
            <BookOpen size={14} />
            <span>Reading Shelf</span>
          </button>

          <button
            onClick={() => setActiveTab("hardware")}
            className={`flex items-center justify-center space-x-2 p-3 border transition-all ${
              activeTab === "hardware"
                ? "bg-black text-white font-bold border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-zinc-700 border-zinc-300 hover:border-black hover:text-black"
            }`}
          >
            <Cpu size={14} />
            <span>Workspace Setup</span>
          </button>

          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center justify-center space-x-2 p-3 border transition-all ${
              activeTab === "audio"
                ? "bg-black text-white font-bold border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-zinc-700 border-zinc-300 hover:border-black hover:text-black"
            }`}
          >
            <Headphones size={14} />
            <span>Focus Music</span>
          </button>

          <button
            onClick={() => setActiveTab("obsessions")}
            className={`flex items-center justify-center space-x-2 p-3 border transition-all ${
              activeTab === "obsessions"
                ? "bg-black text-white font-bold border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-zinc-700 border-zinc-300 hover:border-black hover:text-black"
            }`}
          >
            <Compass size={14} />
            <span>Strategic Interests</span>
          </button>
        </div>

        {/* Tab 1: Reading Log */}
        {activeTab === "reading" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 bg-white border border-black text-xs font-sans shadow-sm">
              <span className="text-zinc-800 font-medium">Books on engineering craft, scalable systems, and creative logic</span>
              <span className="text-black font-bold font-mono">Curated Library</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hobbiesData.readingLog.map((book) => (
                <div
                  key={book.id}
                  className="p-5 bg-white border border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-black font-semibold text-[10px] uppercase font-mono">
                      {book.category}
                    </span>
                    <div className="flex items-center space-x-1 text-black font-bold font-mono">
                      <Star size={12} className="fill-black text-black" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-sans font-bold text-black">{book.title}</h3>
                    <p className="text-xs text-zinc-500 font-sans">{book.author}</p>
                  </div>

                  <div className="text-xs font-sans text-zinc-700 leading-relaxed pt-1 border-t border-zinc-200">
                    <strong className="text-[10px] text-black block uppercase mb-1 font-mono">Core Takeaway:</strong>
                    {book.takeaway}
                  </div>

                  {book.quote && (
                    <div className="p-3 bg-zinc-50 border-l-2 border-black text-xs font-sans text-zinc-800 italic">
                      {book.quote}
                    </div>
                  )}

                  <div className="flex items-center space-x-1.5 text-xs text-zinc-500 pt-1 font-sans">
                    {book.status === "Completed" ? (
                      <CheckCircle2 size={13} className="text-black" />
                    ) : (
                      <Clock size={13} className="text-zinc-500" />
                    )}
                    <span>Status: {book.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Hardware & Desk */}
        {activeTab === "hardware" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 bg-white border border-black text-xs font-sans shadow-sm">
              <span className="text-zinc-800 font-medium">Daily Drivers & Productivity Environment</span>
              <span className="text-black font-bold font-mono">Ergonomic & Fast</span>
            </div>

            <div className="border border-black overflow-hidden bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-zinc-100 border-b border-black text-black font-bold uppercase text-[10px] font-mono">
                    <th className="p-3 border-r border-zinc-300">Equipment</th>
                    <th className="p-3 border-r border-zinc-300">Selected Tool</th>
                    <th className="p-3">Purpose & Utility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {hobbiesData.hardwareSetup.map((hw, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                      <td className="p-3 font-semibold text-black border-r border-zinc-200 flex items-center space-x-2 font-mono">
                        <span className="text-black">❯</span>
                        <span>{hw.category}</span>
                      </td>
                      <td className="p-3 text-zinc-800 border-r border-zinc-200 font-medium">
                        {hw.item}
                      </td>
                      <td className="p-3 text-zinc-500 text-xs">
                        {hw.spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-zinc-100 border border-black text-xs space-y-1 font-sans">
              <div className="flex items-center justify-between text-zinc-600 text-[11px] font-mono">
                <span>Workspace Philosophy</span>
                <span className="text-black font-semibold">Minimal Friction</span>
              </div>
              <p className="text-zinc-700 text-xs">
                An intentional, distraction-free environment enables hours of continuous deep focus without physical strain or cognitive fatigue.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Focus Audio */}
        {activeTab === "audio" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 bg-white border border-black text-xs font-sans shadow-sm">
              <span className="text-zinc-800 font-medium">Soundtracks for deep focus and cognitive flow</span>
              <span className="text-black font-bold font-mono">Uninterrupted State</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hobbiesData.focusAudio.map((audio, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all space-y-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-black font-bold">Album 0{idx + 1}</span>
                    <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800">
                      {audio.tempo}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-sans font-bold text-black">{audio.title}</h4>
                    <p className="text-xs text-zinc-500 font-sans">{audio.artist}</p>
                  </div>

                  <div className="text-xs font-mono text-zinc-600">
                    {audio.genre}
                  </div>

                  <p className="text-xs font-sans text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200">
                    {audio.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Obsessions */}
        {activeTab === "obsessions" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 bg-white border border-black text-xs font-sans shadow-sm">
              <span className="text-zinc-800 font-medium">Strategic hobbies and practical experimentation</span>
              <span className="text-black font-bold font-mono">Active Pursuits</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hobbiesData.obsessions.map((obs, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black font-bold font-mono">[Interest 0{idx + 1}]</span>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono">Discipline</span>
                  </div>

                  <div>
                    <h4 className="text-base font-sans font-bold text-black">{obs.title}</h4>
                    <div className="mt-1.5 inline-block text-xs font-bold text-black bg-zinc-100 px-2.5 py-0.5 border border-black font-sans">
                      {obs.metric}
                    </div>
                  </div>

                  <p className="text-xs font-sans text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200">
                    {obs.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
