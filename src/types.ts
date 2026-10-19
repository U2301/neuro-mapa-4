export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'disciplines' | 'timeline' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  period: string; // Etapa o cronología (ej: 'Día 0', 'Día 3', 'Semana 20', '0-7 años')
  category: 
    | 'Embriogénesis Temprana'
    | 'Láminas Embrionarias'
    | 'Tubo Neural y Notocorda'
    | 'Vesículas Encefálicas'
    | 'Neurodesarrollo Celular'
    | 'Trastornos y Teratógenos';
  group: 'embrion' | 'laminas' | 'tubo' | 'vesiculas' | 'celular' | 'trastornos';
  desc: string;
  exam: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  year: string; // Subetapa (ej: 'Fecundación', 'Láminas', 'Vesículas', 'Fase Celular', 'Teratógenos')
  category: string;
  question: string;
  answer: string;
  examNote: string;
}

export interface TimelineMilestone {
  id: number;
  number: number;
  year: string; // Momento temporal (ej: 'Momento de Fecundación', 'Día 3 de Gestación', 'Día 7', 'Semana 20', 'Nacimiento', '0 a 7 Años')
  location: string; // Zona / Estructura biológica
  title: string;
  badge: string;
  description: string;
  examNote?: string;
  category: 'embrion' | 'tubo' | 'vesiculas' | 'celular' | 'trastornos';
  highlightColor?: string;
}

export interface EmbryonicLayer {
  name: string;
  latinName?: string;
  color: string;
  badge: string;
  derivatives: string[];
  roleInSN?: string;
  keyConcepts: string[];
}

export interface VesicleStructure {
  primary: string;
  secondary: string[];
  adultDerivatives: string[];
  ventricularCavities: string;
  notes: string;
}

export interface CellularStage {
  name: string;
  timeline: string;
  description: string;
  keyActors: string[];
  clinicalOrExamNote: string;
}

export interface TeratogenFactor {
  category: string;
  factor: string;
  riskDescription: string;
}

export interface NeuroMalformation {
  name: string;
  type: 'Migración Celular' | 'Cierre de Tubo Neural y Fosa Posterior';
  structuresInvolved: string;
  description: string;
  differentialNote?: string;
}
