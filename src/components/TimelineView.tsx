import React, { useState } from 'react';
import { timelineMilestones } from '../data/neuroData';
import { Bookmark, Clock, CheckCircle2, AlertTriangle, Sparkles, Filter, Dna } from 'lucide-react';

interface TimelineViewProps {
  searchQuery?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ searchQuery = '' }) => {
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'embrion' | 'tubo' | 'vesiculas' | 'celular' | 'trastornos'>('all');

  const filteredMilestones = timelineMilestones.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const clean = searchQuery.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(clean) ||
      item.description.toLowerCase().includes(clean) ||
      item.year.toLowerCase().includes(clean) ||
      item.badge.toLowerCase().includes(clean) ||
      item.location.toLowerCase().includes(clean)
    );
  });

  return (
    <section id="view-timeline" className="block font-sans space-y-6">
      {/* Intro Header */}
      <div className="bg-[#fbf8f5] p-5 rounded-2xl border border-[#d4cbc2] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c] mb-1">
            <Clock className="w-3.5 h-3.5 text-[#2b553c]" />
            <span>Eje Cronológico • Apuntes de Clase</span>
          </div>
          <h2 className="text-xl font-bold text-[#292420]">
            Línea de Tiempo del Neurodesarrollo
          </h2>
          <p className="text-xs sm:text-sm text-[#49423c] mt-0.5">
            Secuencia biológica desde la fecundación y duplicación del cigoto hasta la mielogénesis a los 7 años.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Todos ({timelineMilestones.length})
          </button>
          <button
            onClick={() => setCategoryFilter('embrion')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'embrion'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Embriogénesis
          </button>
          <button
            onClick={() => setCategoryFilter('tubo')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'tubo'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Tubo & Notocorda
          </button>
          <button
            onClick={() => setCategoryFilter('vesiculas')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'vesiculas'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Vesículas
          </button>
          <button
            onClick={() => setCategoryFilter('celular')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'celular'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Fase Celular
          </button>
          <button
            onClick={() => setCategoryFilter('trastornos')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              categoryFilter === 'trastornos'
                ? 'bg-[#b91c1c] text-white shadow-xs'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Cierre Crítico
          </button>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#d4cbc2] space-y-8 my-6">
        {filteredMilestones.map((milestone) => (
          <div key={milestone.id} className="relative group">
            {/* Timeline Circle Bullet */}
            <div 
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110"
              style={{ borderColor: milestone.highlightColor || '#2b553c' }}
            >
              <span 
                className="text-[11px] font-bold"
                style={{ color: milestone.highlightColor || '#2b553c' }}
              >
                {milestone.number}
              </span>
            </div>

            {/* Milestone Card */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs hover:shadow-card-lift transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d4cbc2]/40 pb-2.5 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span 
                    className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: milestone.highlightColor || '#2b553c' }}
                  >
                    {milestone.year}
                  </span>
                  <span className="text-xs font-semibold text-[#787169] bg-[#f5efe9] px-2 py-0.5 rounded">
                    📍 {milestone.location}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#704812] bg-[#fdf7ea] border border-[#d4cbc2]/60 px-2 py-0.5 rounded-full self-start sm:self-auto">
                  {milestone.badge}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#292420] mb-2">
                {milestone.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed mb-3">
                {milestone.description}
              </p>

              {milestone.examNote && (
                <div className="bg-[#fef7e6] p-3 rounded-xl border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2">
                  <Bookmark className="w-3.5 h-3.5 text-amber-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900">Punto de Examen: </span>
                    <span>{milestone.examNote}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredMilestones.length === 0 && (
        <div className="bg-white rounded-2xl border border-[#d4cbc2] p-10 text-center text-[#787169]">
          <p className="text-sm">No se encontraron hitos cronológicos con el término de búsqueda actual.</p>
        </div>
      )}
    </section>
  );
};
