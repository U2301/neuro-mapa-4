import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, FileText, Sparkles, AlertTriangle } from 'lucide-react';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('#back-to-atlas-btn')) {
        return;
      }
    };
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onNavigateToAtlas]);

  return (
    <div
      id="original-backup-screen"
      data-xpath="//body"
      onClick={onNavigateToAtlas}
      className="min-h-screen w-full bg-[#fcfbf9] text-[#231f1c] p-4 sm:p-8 md:p-12 select-none cursor-pointer relative font-sans"
      title="Haz clic en cualquier parte de la pantalla para volver a la plataforma de Desarrollo Ontogenético"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#d4cbc2] p-6 sm:p-10 md:p-12 shadow-parchment relative">
        {/* Washi tape header */}
        <div className="washi-tape px-4 py-1.5 rounded text-xs font-serif font-bold text-[#704812] inline-block mb-6 shadow-xs">
          📓 Transcripción Literal de Apuntes de Clase
        </div>

        <div className="border-b border-[#d4cbc2] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#787169] mb-1">
            <span>fecha: 2026-10-13</span>
            <span>•</span>
            <span>estado: 🟢 Completo</span>
            <span>•</span>
            <span>tags: notas-clase, desarrollo-ontogenetico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#292420]">
            Desarrollo Ontogenético
          </h1>
          <p className="text-xs text-[#787169] mt-1 font-mono">
            Origen embrionario, inducción notocordal, vesículas primarias y secundarias, neurogénesis y trastornos
          </p>
        </div>

        {/* Raw Text Content */}
        <div className="space-y-6 text-xs sm:text-sm text-[#38332e] leading-relaxed font-sans">
          
          {/* SECCIÓN 1: EL COMIENZO */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-3">
            <h2 className="text-base font-bold text-[#205b76] font-serif border-b border-[#d4cbc2]/50 pb-1.5">
              1. El comienzo
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[#38332e]">
              <li><strong>Todo ser humano comienza al momento de la fecundación.</strong></li>
              <li>El Óvulo aporta un cromosoma X y el espermatozoide puede ser X o Y:
                <div className="pl-4 mt-1 font-mono text-xs bg-white/70 p-2 rounded border border-[#d4cbc2]/40">
                  <span className="text-[#205b76] font-bold">X + X = Niña</span> &nbsp;|&nbsp; 
                  <span className="text-[#2b553c] font-bold">X + Y = Niño</span>
                </div>
              </li>
              <li>Cada célula aporta 23 cromosomas y la unión crea los <strong>23 pares (46 cromosomas)</strong>.</li>
              <li>Esta nueva célula es un <strong>cigoto</strong> que comienza el proceso de duplicación:
                <ul className="list-circle pl-5 mt-1.5 space-y-1.5">
                  <li>Al llegar a las <strong>16 células</strong> se convierte en una <strong>mórula</strong> (3 Días).</li>
                  <li>La mórula se convierte / crea un <strong>blastocisto</strong> dentro de ella.</li>
                  <li>El blastocisto crea un <strong>disco embrionario</strong> dentro de él para crear el cuerpo del embrión.</li>
                </ul>
              </li>
              <li className="pt-2">
                <strong>El disco embrionario está formado por 3 láminas:</strong>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2">
                  <div className="p-3 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#2b553c] block text-xs">Endodermo:</span>
                    <span className="text-xs text-[#49423c]">Tracto digestivo.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#205b76] block text-xs">Mesodermo:</span>
                    <span className="text-xs text-[#49423c]">Sistema óseo, músculo esquelético, Corazón, Vasos sanguíneos.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#704812] block text-xs">Ectodermo:</span>
                    <span className="text-xs text-[#49423c]">Sistema nervioso, piel y los órganos de los sentidos.</span>
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <strong>Ectodermo y Formación del Sistema Nervioso:</strong>
                <p className="mt-1 text-[#49423c]">
                  Se invagina haciendo un surco creando el <strong>tubo neural</strong> que da origen al <strong>SNC</strong> y las <strong>crestas neurales</strong> al <strong>SNP</strong>.
                </p>
                <div className="bg-[#fef7e6] p-3 rounded-lg border border-amber-300 mt-2 text-xs">
                  <p className="font-bold text-amber-950 mb-1">🔍 Notocorda:</p>
                  <p className="text-amber-900 leading-normal">
                    Se conoce como <em>inductor embrionario gestacional</em> que induce el desarrollo de cada parte en cada momento y se encuentra en medio del mesodermo y al formarse el tubo neural se encuentra debajo del mismo. Si se toma algún medicamento teratógeno que impida que se lea la notocorda, impediría que se forme lo que se debe formar en ese momento.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                  <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-red-900">
                    <strong>Fallo de cierre caudal:</strong>
                    <p className="mt-0.5">Espina bífida o disrafias.</p>
                  </div>
                  <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-red-900">
                    <strong>Fallo de cierre cefálico:</strong>
                    <p className="mt-0.5">Anencefalia.</p>
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <strong>Paso a Paso del tubo neural:</strong>
                <ol className="list-decimal pl-5 mt-1 space-y-1 text-xs text-[#49423c]">
                  <li>Se invagina el ectodermo / mesodermo.</li>
                  <li>Se cierra el tubo neural.</li>
                  <li>Lo que resta del mesodermo neural y lo une con el no neural forma las crestas neurales.</li>
                  <li>Se separan las crestas para crear Ganglios.</li>
                </ol>
              </li>
            </ul>
          </section>

          {/* SECCIÓN 2: EVOLUCIÓN ENCEFÁLICA Y VESÍCULAS */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-3">
            <h2 className="text-base font-bold text-[#2b553c] font-serif border-b border-[#d4cbc2]/50 pb-1.5">
              2. El tubo neural cerrado solo evoluciona de manera significativa en la parte encefálica
            </h2>
            <p className="text-xs text-[#49423c]">
              Se hacen <strong>3 abultamientos</strong> que son las <em>vesículas primarias</em> en la parte encefálica. De ellas se crean las <em>vesículas secundarias</em>, y de ellas se forman los órganos encefálicos:
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#2b553c]">1. Prosencéfalo:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[#49423c]">
                  <li><strong>Prosencéfalo secundario / Telencéfalo:</strong> Corteza y ganglios basales.</li>
                  <li><strong>Diencéfalo:</strong> Tálamos.</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#704812]">2. Mesencéfalo:</strong>
                <p className="pl-4 mt-0.5 text-[#49423c]">Queda igual.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-[#205b76]">3. Rombencéfalo:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[#49423c]">
                  <li><strong>Metencéfalo:</strong> Protuberancia o puente, y Cerebelo.</li>
                  <li><strong>Mielencéfalo:</strong> Bulbo raquídeo.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#787169] italic pt-1">
              • Del ducto de en medio se forman los ventrículos. • Primero comienza a crecer y luego a compactarse.
            </p>
          </section>

          {/* SECCIÓN 3: ORÍGENES DE LAS NEURONAS */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-3">
            <h2 className="text-base font-bold text-[#704812] font-serif border-b border-[#d4cbc2]/50 pb-1.5">
              3. Orígenes de las Neuronas
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#38332e]">
              <li>
                <strong>Célula madre:</strong> Célula que da origen a todas las neuronas del SN. Residen en la zona ventricular. Producen a las Células progenitoras (Precursoras).
              </li>
              <li>
                <strong>Células progenitoras (Precursoras):</strong> Derivan de la célula madre y actúan como célula precursora que emigra y produce una neurona o una célula glial:
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li><strong>Neuroblasto:</strong> Célula progenitora de la que proceden todos los diferentes tipos de neuronas.</li>
                  <li><strong>Glioblastos:</strong> Célula progenitora de la que proceden diferentes tipos de células gliales.</li>
                </ul>
              </li>
              <li>
                <strong>La primera neurona surge en el día 7 de la gestación</strong> y termina a las <strong>20 semanas</strong>.
              </li>
              <li>
                <strong>Diferenciación celular:</strong> Su función será de acuerdo con el ambiente y a las conexiones que estén alrededor. Inicia a las 20 semanas y termina al nacimiento.
              </li>
              <li>
                <strong>Maduración celular:</strong> Se da al mismo tiempo que la diferenciación. El axón se desarrolla más rápido que las dendritas. Comienza a las 20 semanas.
              </li>
              <li>
                <strong>Sinaptogénesis:</strong> Molécula de adhesión celular (MAC) y molécula trópica (MT) que son señales químicas que dirigen a los axones.
              </li>
              <li>
                <strong>Muerte celular o apoptosis:</strong> Es la muerte programada. Comienza al nacimiento. También está la <strong>muerte por necrosis</strong> que sí es una muerte tóxica o no natural de las neuronas.
              </li>
              <li>
                <strong>Mielogénesis:</strong> Formación de célula que recubre el axón. Comienza de las zonas sensoriales y motoras más simples desde el nacimiento y se prolonga hasta los 7 años aprox.
              </li>
            </ul>
          </section>

          {/* SECCIÓN 4: TRASTORNOS DEL NEURODESARROLLO */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-3">
            <h2 className="text-base font-bold text-red-800 font-serif border-b border-[#d4cbc2]/50 pb-1.5">
              4. Trastornos del Neurodesarrollo
            </h2>

            <div className="space-y-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-red-900 block mb-1">
                  • Agentes teratógenos: Agentes que pueden hacer que las cosas no salgan bien:
                </strong>
                <ol className="list-[lower-alpha] pl-5 space-y-0.5 text-[#49423c]">
                  <li>Fármacos y drogas</li>
                  <li>Tabaco y alcohol</li>
                  <li>Dieta materna</li>
                  <li>Bienestar emocional de la madre</li>
                  <li>Edad de la madre</li>
                  <li>Enfermedades virales / bacterianas</li>
                </ol>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-amber-900 block mb-1">
                  • Malformaciones asociadas a migración celular:
                </strong>
                <ol className="list-[lower-alpha] pl-5 space-y-0.5 text-[#49423c]">
                  <li>Lisencefalia</li>
                  <li>Paquigiria</li>
                  <li>Hemimegalencefalia</li>
                  <li>Agenesia total o semitotal del cerebelo</li>
                  <li>Malformación de Chiari</li>
                  <li>Síndrome de Dandy-Walker</li>
                </ol>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#d4cbc2]">
                <strong className="text-red-950 block mb-1">
                  • Malformaciones a nivel de la fosa posterior / Problemas del cierre del tubo neural:
                </strong>
                <ol className="list-[lower-alpha] pl-5 space-y-1 text-[#49423c]" start={7}>
                  <li><strong>Meningocele:</strong> Piel y líquido.</li>
                  <li><strong>Mielomeningocele:</strong> Piel, médula espinal y líquido cefalorraquídeo.</li>
                  <li><strong>Hidrocefalia:</strong> Acumulación patológica de LCR en ventrículos.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Resumen Cornell de 3 Oraciones */}
          <section className="bg-[#f7f4ee] p-4 rounded-xl border border-[#d4cbc2] text-xs">
            <p className="font-bold text-[#292420] mb-1 font-serif">
              📌 Resumen de 3 Oraciones (Método Cornell):
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-[#49423c]">
              <li>El ser humano inicia en la fecundación (23 pares); la mórula (16 células a 3 días) da el blastocisto y disco con 3 láminas (endodermo digestivo, mesodermo óseo/vascular con notocorda, ectodermo para SNC y SNP vía tubo neural y crestas).</li>
              <li>El tubo neural cefálico forma 3 vesículas primarias que se subdividen en secundarias (telencéfalo para corteza/ganglios, diencéfalo para tálamos, mesencéfalo igual, metencéfalo para puente/cerebelo y mielencéfalo para bulbo), con ventrículos derivados del ducto central.</li>
              <li>La primera neurona surge el día 7 y cesa a las 20 semanas (inicio de diferenciación y maduración axonal); la sinaptogénesis es guiada por MAC/MT; la apoptosis inicia al nacer y la mielogénesis abarca desde el nacimiento hasta los 7 años.</li>
            </ol>
          </section>
        </div>

        {/* Interactive Helper Banner */}
        <div 
          id="back-to-atlas-btn"
          className="fixed bottom-6 right-6 bg-[#2b553c] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 text-xs font-sans border border-[#436d53] transition-transform hover:scale-105 cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation();
            onNavigateToAtlas();
          }}
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">Volver al Atlas de Ontogenia</p>
            <p className="text-[11px] text-white/80">Clic en cualquier parte de la pantalla (body) para regresar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
