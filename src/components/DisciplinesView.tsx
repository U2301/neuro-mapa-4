import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Dna, 
  Activity, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle, 
  ChevronRight, 
  Split, 
  Brain, 
  GitBranch, 
  Zap, 
  Flame, 
  Check, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { 
  embryonicLayersData, 
  brainVesiclesData, 
  cellularStagesData, 
  teratogensData, 
  malformationsData 
} from '../data/neuroData';

export const DisciplinesView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'laminas' | 'tubo' | 'vesiculas' | 'celular' | 'trastornos'>('laminas');
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [selectedVesicleIndex, setSelectedVesicleIndex] = useState<number>(0);
  const [malformationFilter, setMalformationFilter] = useState<'all' | 'Migración Celular' | 'Cierre de Tubo Neural y Fosa Posterior'>('all');

  const filteredMalformations = malformationsData.filter(m => {
    if (malformationFilter === 'all') return true;
    return m.type === malformationFilter;
  });

  return (
    <section id="view-disciplines" className="block space-y-8 font-sans">
      {/* 1. Header & Section Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c]">
              <Dna className="w-3.5 h-3.5 text-[#2b553c]" />
              <span>Desglose Anatómico por Etapas</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292420]">
              Etapas y Estructuras del Neurodesarrollo
            </h2>
            <p className="text-xs sm:text-sm text-[#787169]">
              Fecundación • Disco trilaminar • Inducción notocordal • Vesículas • Maduración celular • Malformaciones
            </p>
          </div>

          {/* Subtab Selector */}
          <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1.5 rounded-xl border border-[#d4cbc2]/70 flex-wrap">
            <button
              onClick={() => setActiveSubTab('laminas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'laminas'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              1. Embriogénesis y Láminas
            </button>
            <button
              onClick={() => setActiveSubTab('tubo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'tubo'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              2. Tubo Neural & Notocorda
            </button>
            <button
              onClick={() => setActiveSubTab('vesiculas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'vesiculas'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              3. Vesículas Encefálicas
            </button>
            <button
              onClick={() => setActiveSubTab('celular')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'celular'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              4. Neurodesarrollo Celular
            </button>
            <button
              onClick={() => setActiveSubTab('trastornos')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'trastornos'
                  ? 'bg-[#b91c1c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              5. Trastornos & Teratógenos
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SUBTAB 1: EMBRIOGÉNESIS TEMPRANA Y LÁMINAS
         ========================================================================= */}
      {activeSubTab === 'laminas' && (
        <div className="space-y-6">
          {/* Card: El Comienzo y Fecundación */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-[#205b76]/10 text-[#205b76] flex items-center justify-center font-bold text-xs">
                1.1
              </span>
              <h3 className="text-lg font-bold text-[#292420]">
                El Comienzo: Fecundación, Cigoto, Mórula y Blastocisto
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#205b76] mb-1">
                  Paso 1: Fecundación
                </div>
                <h4 className="font-bold text-sm text-[#292420] mb-1">23 Pares Cromosómicos</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  El óvulo aporta siempre un cromosoma X. El espermatozoide aporta X o Y:
                </p>
                <div className="mt-2.5 p-2 bg-white rounded border border-[#d4cbc2]/70 text-[11px] font-mono text-[#231f1c] space-y-1">
                  <div><strong className="text-[#205b76]">X + X:</strong> Niña</div>
                  <div><strong className="text-[#2b553c]">X + Y:</strong> Niño</div>
                  <div className="text-[#787169] text-[10px] pt-1">23 + 23 = 23 pares (46 total)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#205b76] mb-1">
                  Paso 2: Cigoto
                </div>
                <h4 className="font-bold text-sm text-[#292420] mb-1">Célula Primordial</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Esta nueva célula diploide inicia el proceso acelerado de mitosis y duplicación celular sucesiva.
                </p>
                <div className="mt-3 text-[11px] bg-white p-2 rounded border border-[#d4cbc2]/70 text-[#787169]">
                  📌 Clave: Primera célula totipotente de la cual derivará todo el organismo.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#704812] mb-1">
                  Paso 3: Mórula (3 Días)
                </div>
                <h4 className="font-bold text-sm text-[#292420] mb-1">16 Células Exactas</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Al llegar exactamente a las <strong>16 células</strong>, adopta el aspecto de una pequeña mora.
                </p>
                <div className="mt-3 text-[11px] bg-amber-50 p-2 rounded border border-amber-200 text-amber-900 font-medium">
                  ⏰ Ocurre exactamente a los 3 días tras la fecundación.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2b553c] mb-1">
                  Paso 4: Blastocisto
                </div>
                <h4 className="font-bold text-sm text-[#292420] mb-1">Disco Embrionario</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Crea una cavidad dentro de la mórula. En su interior se crea el <strong>disco embrionario</strong> para formar el cuerpo del embrión.
                </p>
                <div className="mt-3 text-[11px] bg-green-50 p-2 rounded border border-green-200 text-[#1b3a28] font-medium">
                  🌱 Dará paso a las 3 láminas germinales fundamentales.
                </div>
              </div>
            </div>
          </div>

          {/* Card: Las 3 Láminas del Disco Embrionario */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#704812]/10 text-[#704812] flex items-center justify-center font-bold text-xs">
                  1.2
                </span>
                <h3 className="text-lg font-bold text-[#292420]">
                  Las 3 Láminas Germinales del Disco Embrionario
                </h3>
              </div>
              <span className="text-xs text-[#787169]">Haz clic en una lámina para ver sus derivados</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {embryonicLayersData.map((layer, idx) => (
                <button
                  key={layer.name}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                    selectedLayerIndex === idx
                      ? 'bg-[#f7f4ee] border-[#2b553c] ring-2 ring-[#2b553c]/20'
                      : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-white'
                  }`}
                >
                  <div>
                    <span 
                      className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 text-white"
                      style={{ backgroundColor: layer.color }}
                    >
                      {layer.badge}
                    </span>
                    <h4 className="font-bold text-base text-[#292420]">{layer.name}</h4>
                    <p className="text-xs text-[#787169] mt-0.5">{layer.latinName}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#d4cbc2]/40 text-xs text-[#2b553c] font-medium">
                    <span>Ver detalles</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Layer Detailed Panel */}
            {(() => {
              const activeLayer = embryonicLayersData[selectedLayerIndex];
              return (
                <div className="bg-[#fcfbf9] rounded-xl border border-[#d4cbc2] p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div 
                      className="w-3.5 h-3.5 rounded-full" 
                      style={{ backgroundColor: activeLayer.color }}
                    />
                    <h4 className="font-bold text-base text-[#292420]">
                      {activeLayer.name} — Derivados Orgánicos y Rol en el Neurodesarrollo
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#787169]">
                        Estructuras y Órganos que Derivan de Esta Lámina:
                      </p>
                      <ul className="space-y-2">
                        {activeLayer.derivatives.map((der, i) => (
                          <li key={i} className="text-xs text-[#38332e] flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#d4cbc2]/60">
                            <span className="text-[#2b553c] font-bold mt-0.5">•</span>
                            <span>{der}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#787169]">
                        Papel en el Sistema Nervioso & Notas de Examen:
                      </p>
                      <div className="bg-white p-4 rounded-xl border border-[#d4cbc2]/70 text-xs text-[#38332e] leading-relaxed space-y-2">
                        <p>{activeLayer.roleInSN}</p>
                        <div className="pt-2 border-t border-[#d4cbc2]/40 space-y-1">
                          <p className="font-bold text-[#704812]">Conceptos clave para el examen:</p>
                          <ul className="list-disc pl-4 space-y-1 text-[#49423c]">
                            {activeLayer.keyConcepts.map((kc, i) => (
                              <li key={i}>{kc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* =========================================================================
          SUBTAB 2: TUBO NEURAL & NOTOCORDA
         ========================================================================= */}
      {activeSubTab === 'tubo' && (
        <div className="space-y-6">
          {/* Card: La Notocorda */}
          <div className="bg-[#fef7e6] rounded-2xl border border-amber-300 p-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-900 flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-800" />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-2 py-0.5 bg-amber-200 text-amber-900 rounded text-[10px] font-bold uppercase tracking-wider">
                  Organizador Molecular Maestro
                </div>
                <h3 className="text-lg font-bold text-amber-950">
                  La Notocorda: Inductor Embrionario Gestacional
                </h3>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Se conoce como <strong>inductor embrionario gestacional</strong> que induce el desarrollo de cada parte en cada momento y se encuentra en medio del mesodermo y al formarse el tubo neural se encuentra <strong>debajo del mismo</strong>.
                </p>
                <div className="bg-white/80 p-3.5 rounded-xl border border-amber-300 text-xs text-amber-950 space-y-1 mt-2">
                  <p className="font-bold text-red-900">⚠️ Vulnerabilidad Teratogénica de Examen:</p>
                  <p>
                    Si se toma algún <strong>medicamento teratógeno</strong> que impida que se lea la notocorda, impediría que se forme lo que se debe formar en ese momento preciso del desarrollo gestacional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Paso a Paso del Tubo Neural */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#2b553c]/10 text-[#2b553c] flex items-center justify-center font-bold text-xs">
                2.1
              </span>
              <h3 className="text-lg font-bold text-[#292420]">
                Paso a Paso en la Formación del Tubo Neural y Crestas Neurales
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#2b553c]">1° Paso</span>
                  <h4 className="font-bold text-sm text-[#292420] mt-1 mb-1.5">Invaginación</h4>
                  <p className="text-xs text-[#49423c]">
                    El ectodermo/mesodermo se invagina en la línea media haciendo un <strong>surco neural</strong> alargado inducido por la notocorda.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#d4cbc2]/40 text-[11px] text-[#787169]">
                  Surco neural temprano
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#2b553c]">2° Paso</span>
                  <h4 className="font-bold text-sm text-[#292420] mt-1 mb-1.5">Cierre del Tubo</h4>
                  <p className="text-xs text-[#49423c]">
                    Los pliegues del surco se elevan, fusionan y <strong>cierran el tubo neural</strong>. Este cilindro hueco da origen exclusivo al <strong>SNC</strong> (encéfalo y médula).
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#d4cbc2]/40 text-[11px] font-bold text-[#2b553c]">
                  = Sistema Nervioso Central
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#205b76]">3° Paso</span>
                  <h4 className="font-bold text-sm text-[#292420] mt-1 mb-1.5">Crestas Neurales</h4>
                  <p className="text-xs text-[#49423c]">
                    Lo que resta del mesodermo/ectodermo neural y lo une con el no neural forma las <strong>crestas neuronales</strong> en los bordes dorsolaterales.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#d4cbc2]/40 text-[11px] text-[#787169]">
                  Límite neuroectodérmico
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#205b76]">4° Paso</span>
                  <h4 className="font-bold text-sm text-[#292420] mt-1 mb-1.5">Creación de Ganglios</h4>
                  <p className="text-xs text-[#49423c]">
                    Se separan las crestas neurales y migran para crear los <strong>Ganglios</strong> y estructuras del <strong>Sistema Nervioso Periférico (SNP)</strong>.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#d4cbc2]/40 text-[11px] font-bold text-[#205b76]">
                  = Ganglios del SNP
                </div>
              </div>
            </div>
          </div>

          {/* Card: Defectos de Cierre Caudal vs Cefálico */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                2.2
              </span>
              <h3 className="text-lg font-bold text-[#292420]">
                Defectos de Cierre del Tubo Neural (Pregunta Clave de Examen)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200">
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                  Fallo en Parte Caudal (Posterior)
                </span>
                <h4 className="font-bold text-base text-red-950 mt-2 mb-1">
                  Espina Bífida o Disrafias
                </h4>
                <p className="text-xs text-red-900 leading-relaxed">
                  Si no se consigue un cierre del tubo neural en la parte caudal, tendremos un bebé con <strong>espina bífida o disrafias espinales</strong> (defectos de los arcos vertebrales, meninges y médula espinal).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200">
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                  Fallo en Parte Cefálica (Anterior)
                </span>
                <h4 className="font-bold text-base text-red-950 mt-2 mb-1">
                  Anencefalia
                </h4>
                <p className="text-xs text-red-900 leading-relaxed">
                  Si no se consigue un cierre del tubo en la parte cefálica, tendremos un bebé con <strong>anencefalia</strong> (ausencia de desarrollo de la mayor parte del encéfalo y del cráneo, incompatible con la vida extrauterina prolongada).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SUBTAB 3: VESÍCULAS ENCEFÁLICAS
         ========================================================================= */}
      {activeSubTab === 'vesiculas' && (
        <div className="space-y-6">
          {/* Card: Principio de Crecimiento Encefálico */}
          <div className="bg-[#fcfbf9] rounded-2xl border border-[#d4cbc2] p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#2b553c]" />
              <h3 className="text-lg font-bold text-[#292420]">
                Evolución Encefálica: 3 Vesículas Primarias a Secundarias
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              El tubo neural cerrado <strong>solo evoluciona de manera significativa en la parte encefálica</strong>. Se forman <strong>3 abultamientos</strong> primarios, de ellos se crean las vesículas secundarias y de ellas se forman los órganos encefálicos definitivos. 
              <span className="block mt-1 font-semibold text-[#292420]">
                💡 "Del ducto de en medio se forman los ventrículos. Primero comienza a crecer y luego a compactarse."
              </span>
            </p>
          </div>

          {/* Interactive Vesicle Hierarchy Explorer */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h4 className="font-bold text-base text-[#292420]">
                Árbol Morfogenético: Vesículas Primarias y sus Derivados
              </h4>
              <div className="flex items-center gap-1.5">
                {brainVesiclesData.map((v, i) => (
                  <button
                    key={v.primary}
                    onClick={() => setSelectedVesicleIndex(i)}
                    className={`px-3 py-1 text-xs rounded-lg font-semibold transition cursor-pointer ${
                      selectedVesicleIndex === i
                        ? 'bg-[#2b553c] text-white shadow-xs'
                        : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
                    }`}
                  >
                    {v.primary.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Vesicle Detailed Card */}
            {(() => {
              const currentVesicle = brainVesiclesData[selectedVesicleIndex];
              return (
                <div className="bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d4cbc2]/60 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2b553c] bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                        Vesícula Primaria
                      </span>
                      <h3 className="text-xl font-bold text-[#292420] mt-1">
                        {currentVesicle.primary}
                      </h3>
                    </div>
                    <div className="text-xs text-[#787169] bg-white px-3 py-1.5 rounded-lg border border-[#d4cbc2]/60">
                      <strong>Ventrículos:</strong> {currentVesicle.ventricularCavities}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-[#d4cbc2]/70 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#205b76]">
                        Vesículas Secundarias:
                      </p>
                      <ul className="space-y-1.5">
                        {currentVesicle.secondary.map((s, idx) => (
                          <li key={idx} className="text-xs font-bold text-[#292420] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#205b76]" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#d4cbc2]/70 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#704812]">
                        Órganos Encefálicos Adultos Derivados:
                      </p>
                      <ul className="space-y-1.5">
                        {currentVesicle.adultDerivatives.map((ad, idx) => (
                          <li key={idx} className="text-xs text-[#38332e] flex items-start gap-2">
                            <span className="text-[#2b553c] font-bold">•</span>
                            <span>{ad}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-xs text-[#787169] bg-white/70 p-3 rounded-lg border border-[#d4cbc2]/40">
                    <strong>Anotación anatómica:</strong> {currentVesicle.notes}
                  </p>
                </div>
              );
            })()}

            {/* Complete Reference Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5efe9] border-b border-[#d4cbc2] text-[#292420]">
                    <th className="p-3 font-bold">Vesícula Primaria</th>
                    <th className="p-3 font-bold">Vesícula Secundaria</th>
                    <th className="p-3 font-bold">Órganos Encefálicos Formados</th>
                    <th className="p-3 font-bold">Cavidad Ventricular</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d4cbc2]/50 text-[#38332e]">
                  <tr className="hover:bg-[#fbf8f5]">
                    <td className="p-3 font-bold text-[#2b553c] rowspan-2" rowSpan={2}>
                      Prosencéfalo
                    </td>
                    <td className="p-3 font-semibold">Prosencéfalo secundario / Telencéfalo</td>
                    <td className="p-3">Corteza cerebral y ganglios basales</td>
                    <td className="p-3">Ventrículos laterales</td>
                  </tr>
                  <tr className="hover:bg-[#fbf8f5]">
                    <td className="p-3 font-semibold">Diencéfalo</td>
                    <td className="p-3">Tálamos (tálamo, hipotálamo, epitálamo, subtálamo)</td>
                    <td className="p-3">Tercer ventrículo</td>
                  </tr>
                  <tr className="hover:bg-[#fbf8f5]">
                    <td className="p-3 font-bold text-[#704812]">
                      Mesencéfalo
                    </td>
                    <td className="p-3 font-semibold text-[#704812]">Queda igual (Mesencéfalo)</td>
                    <td className="p-3">Tegmentum (sustancia nigra, ATV, núcleo rojo), Tectum (colículos)</td>
                    <td className="p-3">Acueducto cerebral (de Silvio)</td>
                  </tr>
                  <tr className="hover:bg-[#fbf8f5]">
                    <td className="p-3 font-bold text-[#205b76] rowspan-2" rowSpan={2}>
                      Rombencéfalo
                    </td>
                    <td className="p-3 font-semibold">Metencéfalo</td>
                    <td className="p-3">Protuberancia o puente de Varolio, Cerebelo</td>
                    <td className="p-3 rowspan-2" rowSpan={2}>Cuarto ventrículo</td>
                  </tr>
                  <tr className="hover:bg-[#fbf8f5]">
                    <td className="p-3 font-semibold">Mielencéfalo</td>
                    <td className="p-3">Bulbo raquídeo (médula oblonga)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SUBTAB 4: NEURODESARROLLO CELULAR
         ========================================================================= */}
      {activeSubTab === 'celular' && (
        <div className="space-y-6">
          {/* Card: Célula Madre y Precursoras */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-[#2b553c]/10 text-[#2b553c] flex items-center justify-center font-bold text-xs">
                4.1
              </span>
              <h3 className="text-lg font-bold text-[#292420]">
                Orígenes de las Neuronas: Células Madre y Progenitoras
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2b553c] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                  Célula Origen
                </span>
                <h4 className="font-bold text-base text-[#292420] mt-2 mb-1">Célula Madre</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Célula que da origen a <strong>todas las neuronas del SN</strong>. Residen en la <strong>zona ventricular</strong> y producen a las células progenitoras (precursoras).
                </p>
                <div className="mt-3 text-[11px] text-[#787169] bg-white p-2 rounded border border-[#d4cbc2]/60">
                  📍 Ubicación: Zona ventricular del tubo neural.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#205b76] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Linaje Neuronal
                </span>
                <h4 className="font-bold text-base text-[#292420] mt-2 mb-1">Neuroblasto</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Célula progenitora de la que proceden <strong>todos los diferentes tipos de neuronas</strong>. Emigra desde la zona ventricular guiada por la glía radial.
                </p>
                <div className="mt-3 text-[11px] text-[#205b76] font-bold bg-white p-2 rounded border border-[#d4cbc2]/60">
                  = Genera todas las neuronas
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#704812] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Linaje Glial
                </span>
                <h4 className="font-bold text-base text-[#292420] mt-2 mb-1">Glioblasto</h4>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Célula progenitora de la que proceden los <strong>diferentes tipos de células gliales</strong> (astrocitos, oligodendrocitos, etc.).
                </p>
                <div className="mt-3 text-[11px] text-[#704812] font-bold bg-white p-2 rounded border border-[#d4cbc2]/60">
                  = Genera toda la glía
                </div>
              </div>
            </div>
          </div>

          {/* Chronological Developmental Grid of Cellular Phases */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-base text-[#292420]">
              Fases del Neurodesarrollo Celular: Cronología y Mecanismos
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Génesis Neuronal */}
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#292420]">1. Neurogénesis / Proliferación</span>
                  <span className="text-[11px] font-bold text-[#2b553c] bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                    Día 7 a Sem 20
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  La <strong>primer neurona surge en el día 7</strong> de la gestación y la producción termina formalmente a las <strong>20 semanas</strong>.
                </p>
                <div className="text-[11px] bg-white p-2 rounded border border-[#d4cbc2]/70 text-[#787169]">
                  📌 Dato de examen: Día 7 = primera neurona. 20 semanas = fin de neurogénesis.
                </div>
              </div>

              {/* Diferenciación y Maduración */}
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#292420]">2. Diferenciación & Maduración</span>
                  <span className="text-[11px] font-bold text-[#8c5e3c] bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                    Sem 20 a Nacimiento
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  <strong>Diferenciación celular:</strong> Su función será de acuerdo con el ambiente y a las conexiones de alrededor (inicia a las 20 semanas y termina al nacer).
                  <br />
                  <strong>Maduración celular:</strong> El axón se desarrolla más rápido que las dendritas.
                </p>
                <div className="text-[11px] bg-white p-2 rounded border border-[#d4cbc2]/70 text-[#8c5e3c] font-medium">
                  ⚡ Axón crece más rápido que las dendritas.
                </div>
              </div>

              {/* Sinaptogénesis */}
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#292420]">3. Sinaptogénesis (MAC y MT)</span>
                  <span className="text-[11px] font-bold text-[#704812] bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                    Guía Quimiotáctica
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Conexión sináptica dirigida por señales químicas:
                </p>
                <ul className="text-xs space-y-1 text-[#38332e] pl-2">
                  <li><strong>MAC:</strong> Molécula de adhesión celular (fijación al sustrato).</li>
                  <li><strong>MT:</strong> Molécula trópica (señal química que dirige y orienta el cono de crecimiento de los axones).</li>
                </ul>
              </div>

              {/* Muerte Celular */}
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#292420]">4. Muerte Celular: Apoptosis vs Necrosis</span>
                  <span className="text-[11px] font-bold text-red-700 bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                    Desde el Nacimiento
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  <strong>Apoptosis:</strong> Muerte programada fisiológica (comienza al nacimiento).
                  <br />
                  <strong>Necrosis:</strong> Muerte celular tóxica o no natural provocada por daño/noxa.
                </p>
                <div className="text-[11px] bg-red-50 p-2 rounded border border-red-200 text-red-900">
                  Diferencia clave: Apoptosis = programada / natural; Necrosis = tóxica.
                </div>
              </div>

              {/* Mielogénesis */}
              <div className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] space-y-2 md:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#292420]">5. Mielogénesis Progresiva</span>
                  <span className="text-[11px] font-bold text-[#2b553c] bg-white px-2 py-0.5 rounded border border-[#d4cbc2]/60">
                    Nacimiento a 7 Años Aprox.
                  </span>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed">
                  Formación de la célula / vaina que recubre el axón (mielina). 
                  <strong> Comienza de las zonas sensoriales y motoras más simples desde el nacimiento y se prolonga hasta los 7 años aprox.</strong>
                </p>
                <div className="text-[11px] bg-white p-2.5 rounded border border-[#d4cbc2]/70 text-[#2b553c] font-medium">
                  🌱 Sigue un gradiente madurativo desde las funciones sensorimotoras básicas hacia las áreas corticales superiores de asociación.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SUBTAB 5: TRASTORNOS Y TERATÓGENOS
         ========================================================================= */}
      {activeSubTab === 'trastornos' && (
        <div className="space-y-6">
          {/* Card: Agentes Teratógenos */}
          <div className="bg-[#fff8f6] rounded-2xl border border-red-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-700" />
              <h3 className="text-lg font-bold text-red-950">
                Agentes Teratógenos (6 Factores de Riesgo de Clase)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
              Agentes que pueden <strong>hacer que las cosas no salgan bien</strong>, alterando la inducción de la notocorda, la división mitótica o la migración de neuroblastos:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {teratogensData.map((t, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-red-200/80 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded">
                    {t.category}
                  </span>
                  <h4 className="font-bold text-sm text-[#292420] mt-1.5 mb-1">
                    {t.factor}
                  </h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    {t.riskDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card: Malformaciones de Migración Celular vs Cierre del Tubo Neural */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-[#292420]">
                Catálogo de Malformaciones Congénitas
              </h3>
              <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1 rounded-lg border border-[#d4cbc2]/60">
                <button
                  onClick={() => setMalformationFilter('all')}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition cursor-pointer ${
                    malformationFilter === 'all'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-white/60'
                  }`}
                >
                  Todas ({malformationsData.length})
                </button>
                <button
                  onClick={() => setMalformationFilter('Migración Celular')}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition cursor-pointer ${
                    malformationFilter === 'Migración Celular'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-white/60'
                  }`}
                >
                  Migración Celular (6)
                </button>
                <button
                  onClick={() => setMalformationFilter('Cierre de Tubo Neural y Fosa Posterior')}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition cursor-pointer ${
                    malformationFilter === 'Cierre de Tubo Neural y Fosa Posterior'
                      ? 'bg-[#2b553c] text-white'
                      : 'text-[#49423c] hover:bg-white/60'
                  }`}
                >
                  Cierre & Fosa Posterior (5)
                </button>
              </div>
            </div>

            {/* Differential Highlight Box: Meningocele vs Mielomeningocele */}
            <div className="p-4 rounded-xl bg-[#fef7e6] border border-amber-300">
              <p className="font-bold text-xs uppercase tracking-wider text-amber-950 mb-2">
                ⚖️ Distinción Anatómica Fundamental de Examen:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-[#704812] block text-sm">Meningocele:</span>
                  <span className="text-[#38332e]">
                    Contiene exclusivamente <strong>Piel y Líquido</strong> (LCR y meninges herniadas, sin tejido medular dentro del saco).
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-red-800 block text-sm">Mielomeningocele:</span>
                  <span className="text-[#38332e]">
                    Más grave: contiene <strong>Piel, Médula Espinal y Líquido Cefalorraquídeo</strong> herniados en el saco defectuoso.
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Malformations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredMalformations.map((m, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between space-y-2 hover:border-[#2b553c]/50 transition"
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-1.5 ${
                      m.type === 'Migración Celular' 
                        ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                        : 'bg-red-100 text-red-900 border border-red-200'
                    }`}>
                      {m.type}
                    </span>
                    <h4 className="font-bold text-sm text-[#292420]">{m.name}</h4>
                    <p className="text-[11px] text-[#787169] mt-0.5 mb-2">
                      <strong>Estructuras:</strong> {m.structuresInvolved}
                    </p>
                    <p className="text-xs text-[#49423c] leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  {m.differentialNote && (
                    <div className="pt-2 border-t border-[#d4cbc2]/40 text-[11px] text-[#704812] font-medium">
                      📌 {m.differentialNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
