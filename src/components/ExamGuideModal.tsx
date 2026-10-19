import React from 'react';
import { X, BookOpen, Pin, Sparkles, Brain, Check, Dna, AlertTriangle, ShieldAlert } from 'lucide-react';
import { examGuideContent } from '../data/neuroData';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Apuntes de Clase • Guía Concentrada de Examen</span>
        </div>

        <h3 className="text-xl font-bold text-[#292420] mb-4">
          Resumen Rápido: Desarrollo Ontogenético del Sistema Nervioso
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          {/* Método Cornell: 3 Oraciones Clave */}
          <div className="p-4 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2b553c]" />
              <span>Resumen de 3 Oraciones (Método Cornell):</span>
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[#49423c]">
              {examGuideContent.cornellSummary.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ol>
          </div>

          {/* Fecundación y 3 Láminas */}
          <div className="p-3.5 bg-[#fef7e6] rounded-xl border border-amber-300">
            <p className="font-bold text-amber-950 mb-1.5 flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-amber-800" />
              <span>1. Genética, Embriogénesis y Láminas Germinales:</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#205b76] block mb-0.5">Cromosomas y Sexo:</span>
                <span>23 de óvulo (X) + 23 de espermatozoide (X o Y) = 23 pares. X+X=Niña, X+Y=Niño. Mórula = 16 células a los 3 días.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block mb-0.5">3 Láminas del Disco:</span>
                <span>
                  <strong>Endodermo:</strong> digestivo.
                  <br />
                  <strong>Mesodermo:</strong> óseo, muscular, corazón, vasos y notocorda.
                  <br />
                  <strong>Ectodermo:</strong> sistema nervioso, piel y sentidos.
                </span>
              </div>
            </div>
          </div>

          {/* Tubo Neural, Notocorda y Defectos de Cierre */}
          <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
            <p className="font-bold text-red-950 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-700" />
              <span>2. Inductor Notocorda y Defectos de Cierre:</span>
            </p>
            <div className="space-y-1.5 text-xs text-red-900">
              <p>
                <strong>Notocorda:</strong> Inductor embrionario gestacional ubicado bajo el tubo neural. Fármacos teratógenos que bloqueen su lectura impiden la organogénesis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                <div className="bg-white p-2 rounded border border-red-200">
                  <strong>Fallo de Cierre Caudal:</strong> Espina Bífida o Disrafias.
                </div>
                <div className="bg-white p-2 rounded border border-red-200">
                  <strong>Fallo de Cierre Cefálico:</strong> Anencefalia.
                </div>
              </div>
            </div>
          </div>

          {/* Vesículas Encefálicas */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-[#2b553c]" />
              <span>3. Vesículas Encefálicas (Primarias a Secundarias):</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#2b553c] block">Prosencéfalo:</strong>
                <span className="text-[#49423c]">
                  • Telencéfalo → Corteza y ganglios basales.
                  <br />
                  • Diencéfalo → Tálamos.
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#704812] block">Mesencéfalo:</strong>
                <span className="text-[#49423c]">
                  • Queda igual (Mesencéfalo).
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#205b76] block">Rombencéfalo:</strong>
                <span className="text-[#49423c]">
                  • Metencéfalo → Puente y Cerebelo.
                  <br />
                  • Mielencéfalo → Bulbo raquídeo.
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#787169] mt-2 italic">
              * Nota: Del ducto central se forman los ventrículos cerebrales. Primero crece y luego se compacta.
            </p>
          </div>

          {/* Neurodesarrollo Celular: Cronología */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2">
              4. Cronología Celular y Mecanismos Moleculares:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <span className="font-bold text-[#2b553c] block">Células Madre y Progenitoras:</span>
                <span>En zona ventricular. Producen <strong>Neuroblastos</strong> (neuronas) y <strong>Glioblastos</strong> (glía).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <span className="font-bold text-[#8c5e3c] block">Hito de Días y Semanas:</span>
                <span>Primera neurona = <strong>Día 7</strong>. Fin de producción neuronal = <strong>20 semanas</strong>.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <span className="font-bold text-[#704812] block">Diferenciación & Maduración:</span>
                <span>Inicia a las 20 semanas y termina al nacer. Regla: <strong>el axón se desarrolla más rápido que las dendritas</strong>.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                <span className="font-bold text-[#205b76] block">Sinaptogénesis, Apoptosis y Mielina:</span>
                <span>
                  • <strong>MAC y MT:</strong> Señales químicas que guían axones.
                  <br />
                  • <strong>Apoptosis:</strong> Programada (inicia al nacer) vs <strong>Necrosis:</strong> tóxica.
                  <br />
                  • <strong>Mielogénesis:</strong> De zonas simples al nacer hasta los 7 años.
                </span>
              </div>
            </div>
          </div>

          {/* Trastornos: Meningocele vs Mielomeningocele */}
          <div className="p-3.5 bg-[#fff8f6] rounded-xl border border-red-200">
            <p className="font-bold text-red-950 mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-700" />
              <span>5. Trastornos y Diferencial Anatómico Crítico:</span>
            </p>
            <div className="space-y-1.5 text-xs text-[#38332e]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded border border-red-200">
                  <strong className="text-[#704812]">Meningocele:</strong> Piel y líquido.
                </div>
                <div className="bg-white p-2 rounded border border-red-200">
                  <strong className="text-red-800">Mielomeningocele:</strong> Piel, médula espinal y líquido cefalorraquídeo.
                </div>
              </div>
              <p className="text-[11px] text-[#787169] pt-1">
                <strong>Malformaciones de migración:</strong> Lisencefalia, paquigiria, hemimegalencefalia, agenesia del cerebelo, malformación de Chiari y síndrome de Dandy-Walker.
                <br />
                <strong>6 Teratógenos:</strong> Fármacos/drogas, tabaco/alcohol, dieta materna, bienestar emocional, edad materna, infecciones virales/bacterianas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2b553c] text-white text-xs font-bold rounded-lg hover:bg-[#1b3a28] transition cursor-pointer"
          >
            Entendido, volver al estudio
          </button>
        </div>
      </div>
    </div>
  );
};
