/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, MainTab } from './types';
import { GraphView } from './components/GraphView';
import { TimelineView } from './components/TimelineView';
import { DisciplinesView } from './components/DisciplinesView';
import { FlashcardsView } from './components/FlashcardsView';
import { ExamGuideModal } from './components/ExamGuideModal';
import { OriginalBackupScreen } from './components/OriginalBackupScreen';
import { flashcardsData } from './data/neuroData';
import {
  Rat,
  Search,
  X,
  BookmarkCheck,
  GitGraph,
  Layers,
  Clock,
  Copy,
  FileText
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('atlas');
  const [activeTab, setActiveTab] = useState<MainTab>('graph');
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [isExamModalOpen, setIsExamModalOpen] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());

  const handleToggleMastered = (cardId: string) => {
    setMasteredCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    setMasteredCards(new Set());
  };

  // Push transition from Backup screen to Atlas screen
  const navigateToAtlas = () => {
    setCurrentScreen('atlas');
  };

  const navigateToBackup = () => {
    setCurrentScreen('backup');
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#231f1c] font-sans selection:bg-[#ffb692] selection:text-[#292420] flex flex-col relative overflow-x-hidden">
      {currentScreen === 'backup' ? (
        /* =========================================================
           SCREEN 2: Original Backup Screen (Literal Class Notes)
           Clicking on body (xpath: //body) -> pushes to Screen 1
           ========================================================= */
        <div key="screen-backup" className="w-full min-h-screen">
          <OriginalBackupScreen onNavigateToAtlas={navigateToAtlas} />
        </div>
      ) : (
        /* =========================================================
           SCREEN 1: Desarrollo Ontogenético del Sistema Nervioso
           ========================================================= */
        <div
          key="screen-atlas"
          className="flex flex-col min-h-screen w-full"
        >
          {/* Main Notebook Header */}
          <header className="bg-white border-b border-[#d4cbc2] sticky top-0 z-40 shadow-2xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Title with Rat Icon on Top-Left Corner */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl bg-[#f5efe9] border border-[#d4cbc2] flex items-center justify-center text-[#2b553c] flex-shrink-0 shadow-2xs"
                    title="Icono de la clase de Neuroanatomía"
                  >
                    <Rat className="w-6 h-6 text-[#2b553c]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="washi-tape px-2 py-0.2 rounded text-[10px] font-bold text-[#704812]">
                        Cuaderno de Apuntes
                      </span>
                      <span className="text-[11px] text-[#787169]">• Neuroanatomía</span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold text-[#292420] tracking-tight">
                      Desarrollo Ontogenético
                    </h1>
                  </div>
                </div>

                {/* Quick actions for student */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="relative flex-grow sm:w-60">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#787169]" />
                    <input
                      type="text"
                      value={globalSearch}
                      onChange={(e) => setGlobalSearch(e.target.value)}
                      placeholder="Buscar en el apunte..."
                      className="w-full pl-9 pr-8 py-1.5 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-lg text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
                      id="global-search-input"
                    />
                    {globalSearch && (
                      <button
                        onClick={() => setGlobalSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#787169] hover:text-[#231f1c] text-xs cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setIsExamModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2b553c] bg-[#2b553c]/10 border border-[#2b553c]/20 rounded-lg hover:bg-[#2b553c]/15 transition cursor-pointer"
                  >
                    <BookmarkCheck className="w-3.5 h-3.5 text-[#2b553c]" />
                    <span>Resumen Examen</span>
                  </button>

                  <button
                    onClick={navigateToBackup}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#704812] bg-[#fdf7ea] border border-[#d4cbc2] rounded-lg hover:bg-[#faede6] transition cursor-pointer"
                    title="Ver transcripción literal de los apuntes de clase"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#704812]" />
                    <span>Apuntes Originales</span>
                  </button>
                </div>
              </div>

              {/* Study Navigation Tabs */}
              <nav
                aria-label="Pestañas de estudio"
                className="flex space-x-1 sm:space-x-2 border-t border-[#d4cbc2]/50 mt-2.5 pt-2 overflow-x-auto no-scrollbar"
              >
                <button
                  onClick={() => setActiveTab('graph')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer ${
                    activeTab === 'graph'
                      ? 'bg-[#2b553c] text-white shadow-xs'
                      : 'text-[#49423c] hover:text-[#231f1c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <GitGraph className="w-4 h-4" />
                  <span>Mapa Conceptual</span>
                </button>

                <button
                  onClick={() => setActiveTab('disciplines')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer ${
                    activeTab === 'disciplines'
                      ? 'bg-[#2b553c] text-white shadow-xs'
                      : 'text-[#49423c] hover:text-[#231f1c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Etapas & Estructuras</span>
                </button>

                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer ${
                    activeTab === 'timeline'
                      ? 'bg-[#2b553c] text-white shadow-xs'
                      : 'text-[#49423c] hover:text-[#231f1c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>Línea de Tiempo</span>
                </button>

                <button
                  onClick={() => setActiveTab('flashcards')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer ${
                    activeTab === 'flashcards'
                      ? 'bg-[#2b553c] text-white shadow-xs'
                      : 'text-[#49423c] hover:text-[#231f1c] hover:bg-[#f5efe9]'
                  }`}
                >
                  <Copy className="w-4 h-4" />
                  <span>Tarjetas de Estudio</span>
                  <span className="text-[10px] bg-[#944920] text-white px-1.5 py-0.2 rounded-full font-bold">
                    {flashcardsData.length}
                  </span>
                </button>
              </nav>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-6 pb-12">
            {activeTab === 'graph' && <GraphView />}
            {activeTab === 'disciplines' && <DisciplinesView />}
            {activeTab === 'timeline' && <TimelineView searchQuery={globalSearch} />}
            {activeTab === 'flashcards' && (
              <FlashcardsView
                masteredIds={masteredCards}
                onToggleMastered={handleToggleMastered}
                onResetProgress={handleResetProgress}
              />
            )}
          </main>

          {/* Exam Quick Guide Modal */}
          <ExamGuideModal
            isOpen={isExamModalOpen}
            onClose={() => setIsExamModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
