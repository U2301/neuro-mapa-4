import React, { useState } from 'react';
import { flashcardsData } from '../data/neuroData';
import { HelpCircle, Brain, Check, RotateCcw, Pin, MousePointer, Search, Filter, Sparkles, BookmarkCheck } from 'lucide-react';

interface FlashcardsViewProps {
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onResetProgress: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  masteredIds,
  onToggleMastered,
  onResetProgress
}) => {
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cardSearch, setCardSearch] = useState<string>('');

  const handleCardClick = (id: string) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredCards = flashcardsData.filter(fc => {
    const matchesCategory = selectedCategory === 'all' || fc.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!cardSearch.trim()) return true;
    const term = cardSearch.toLowerCase().trim();
    return (
      fc.question.toLowerCase().includes(term) ||
      fc.answer.toLowerCase().includes(term) ||
      fc.category.toLowerCase().includes(term) ||
      fc.examNote.toLowerCase().includes(term) ||
      fc.year.toLowerCase().includes(term)
    );
  });

  const percentMastered = flashcardsData.length > 0 
    ? Math.round((masteredIds.size / flashcardsData.length) * 100) 
    : 0;

  return (
    <section id="view-flashcards" className="block font-sans space-y-6">
      {/* Deck Controls Header */}
      <div className="bg-[#fbf8f5] p-5 rounded-2xl border border-[#d4cbc2] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c] mb-1">
            <BookmarkCheck className="w-3.5 h-3.5 text-[#2b553c]" />
            <span>Fichas de Repaso • Examen de Neuroanatomía</span>
          </div>
          <h2 className="text-xl font-bold text-[#292420]">
            Tarjetas de Estudio: Ontogenia
          </h2>
          <p className="text-xs sm:text-sm text-[#49423c] mt-0.5">
            Haz clic en una tarjeta para voltearla y verificar la respuesta y su anotación de examen.
          </p>
        </div>

        {/* Progress & Reset */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-bold text-[#292420]">
              Progreso: {masteredIds.size} / {flashcardsData.length} dominadas ({percentMastered}%)
            </div>
            <div className="w-36 h-2 bg-[#d4cbc2]/40 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-[#2b553c] transition-all duration-300"
                style={{ width: `${percentMastered}%` }}
              />
            </div>
          </div>

          {masteredIds.size > 0 && (
            <button
              onClick={onResetProgress}
              title="Reiniciar progreso de estudio"
              className="p-2 text-xs font-semibold text-[#787169] hover:text-[#231f1c] bg-white rounded-lg border border-[#d4cbc2] transition cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reiniciar</span>
            </button>
          )}
        </div>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-[#d4cbc2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-grow max-w-sm">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#787169]" />
          <input
            type="text"
            value={cardSearch}
            onChange={(e) => setCardSearch(e.target.value)}
            placeholder="Buscar por pregunta o concepto..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-lg text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Todas ({flashcardsData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Embriogénesis Temprana')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Embriogénesis Temprana'
                ? 'bg-[#205b76] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Fecundación & Cigoto
          </button>
          <button
            onClick={() => setSelectedCategory('Láminas Embrionarias')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Láminas Embrionarias'
                ? 'bg-[#8c5e3c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            3 Láminas
          </button>
          <button
            onClick={() => setSelectedCategory('Tubo Neural y Notocorda')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Tubo Neural y Notocorda'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Tubo & Notocorda
          </button>
          <button
            onClick={() => setSelectedCategory('Vesículas Encefálicas')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Vesículas Encefálicas'
                ? 'bg-[#944920] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Vesículas
          </button>
          <button
            onClick={() => setSelectedCategory('Neurodesarrollo Celular')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Neurodesarrollo Celular'
                ? 'bg-[#704812] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Fase Celular
          </button>
          <button
            onClick={() => setSelectedCategory('Trastornos y Teratógenos')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              selectedCategory === 'Trastornos y Teratógenos'
                ? 'bg-[#b91c1c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Trastornos & Teratógenos
          </button>
        </div>
      </div>

      {/* Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map((card) => {
          const isFlipped = flippedIds.has(card.id);
          const isMastered = masteredIds.has(card.id);

          return (
            <div
              key={card.id}
              className="h-[280px] perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE: Question */}
                <div className={`absolute inset-0 backface-hidden bg-white rounded-2xl border p-5 flex flex-col justify-between shadow-xs hover:shadow-card-lift transition-all ${
                  isMastered ? 'border-green-300 ring-1 ring-green-200' : 'border-[#d4cbc2]'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#787169] bg-[#f5efe9] px-2 py-0.5 rounded">
                        {card.year} • {card.category}
                      </span>
                      {isMastered && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2b553c] bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                          <Check className="w-3 h-3" /> Dominada
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#292420] leading-snug">
                      {card.question}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-[#d4cbc2]/40 flex items-center justify-between text-xs text-[#787169]">
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#2b553c] font-medium">
                      <MousePointer className="w-3 h-3" /> Clic para voltear
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMastered(card.id);
                      }}
                      className={`p-1.5 rounded-lg border transition cursor-pointer ${
                        isMastered 
                          ? 'bg-[#2b553c] text-white border-[#2b553c]' 
                          : 'bg-white text-[#787169] border-[#d4cbc2] hover:text-[#2b553c]'
                      }`}
                      title={isMastered ? 'Marcar como pendiente' : 'Marcar como dominada'}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* BACK FACE: Answer & Exam Note */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-[#fcfbf9] rounded-2xl border p-5 flex flex-col justify-between shadow-xs ${
                  isMastered ? 'border-green-300 ring-1 ring-green-200' : 'border-[#2b553c]'
                }`}>
                  <div className="space-y-3 overflow-y-auto pr-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2b553c] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        Respuesta de Clase
                      </span>
                      <span className="text-[10px] text-[#787169]">Clic para voltear</span>
                    </div>
                    <p className="text-xs text-[#292420] leading-relaxed font-medium">
                      {card.answer}
                    </p>

                    {card.examNote && (
                      <div className="bg-[#fef7e6] p-2.5 rounded-lg border border-amber-300 text-[11px] text-amber-950">
                        <span className="font-bold text-amber-900 block mb-0.5">📌 Clave de Examen:</span>
                        <span>{card.examNote}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#d4cbc2]/40 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-[#787169]">Voltear al frente</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMastered(card.id);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition cursor-pointer flex items-center gap-1.5 ${
                        isMastered
                          ? 'bg-[#2b553c] text-white border-[#2b553c]'
                          : 'bg-white text-[#49423c] border-[#d4cbc2] hover:border-[#2b553c]'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{isMastered ? 'Dominada' : 'Marcar dominada'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCards.length === 0 && (
        <div className="bg-white rounded-2xl border border-[#d4cbc2] p-10 text-center text-[#787169]">
          <p className="text-sm">No se encontraron tarjetas con el criterio de búsqueda seleccionado.</p>
        </div>
      )}
    </section>
  );
};
