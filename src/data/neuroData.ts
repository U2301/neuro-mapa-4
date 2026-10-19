import { 
  NeuroNode, 
  NeuroEdge, 
  Flashcard, 
  TimelineMilestone, 
  EmbryonicLayer, 
  VesicleStructure, 
  CellularStage, 
  TeratogenFactor, 
  NeuroMalformation 
} from '../types';

/* =========================================================================
   1. NODOS DEL GRAFO INTERACTIVO DE CONOCIMIENTO (ONTOGENIA)
   ========================================================================= */
export const neuroNodes: NeuroNode[] = [
  // Nodo raíz / Inicio
  {
    id: 1,
    label: "Desarrollo Ontogenético",
    period: "Fecundación a Maduración",
    category: "Embriogénesis Temprana",
    group: "embrion",
    desc: "Proceso completo del desarrollo del ser humano y su sistema nervioso desde la fecundación del óvulo hasta la mielogénesis posnatal.",
    exam: "Comienza en la fecundación: unión de 23 cromosomas del óvulo (X) y 23 del espermatozoide (X o Y) = 23 pares (46 cromosomas). XX=Niña, XY=Niño.",
    colorGroup: "#2b553c"
  },

  // Embriogénesis Temprana
  {
    id: 2,
    label: "Fecundación y Cigoto",
    period: "Día 0 de Gestación",
    category: "Embriogénesis Temprana",
    group: "embrion",
    desc: "El óvulo aporta un cromosoma X y el espermatozoide puede ser X o Y (X+X = Niña, X+Y = Niño). Cada célula aporta 23 cromosomas formando 23 pares. La nueva célula es el Cigoto, que inicia la duplicación celular.",
    exam: "Cada gameto aporta 23 cromosomas formando 23 pares. El espermatozoide define el sexo cromosómico.",
    colorGroup: "#205b76"
  },
  {
    id: 3,
    label: "Mórula (16 células)",
    period: "Día 3 de Gestación",
    category: "Embriogénesis Temprana",
    group: "embrion",
    desc: "Tras sucesivas divisiones mitóticas del cigoto, al llegar exactamente a las 16 células se convierte en Mórula (ocurre alrededor del 3er día).",
    exam: "Mórula = fase de 16 células que se alcanza a los 3 días tras la fecundación.",
    colorGroup: "#205b76"
  },
  {
    id: 4,
    label: "Blastocisto",
    period: "Días 4 - 6",
    category: "Embriogénesis Temprana",
    group: "embrion",
    desc: "La mórula se convierte y crea una cavidad interna (blastocisto). En su interior se diferencia el Disco Embrionario, destinado a conformar el cuerpo del embrión.",
    exam: "El blastocisto contiene el disco embrionario, estructura encargada de formar el cuerpo del embrión.",
    colorGroup: "#205b76"
  },

  // Láminas Embrionarias
  {
    id: 5,
    label: "Disco Embrionario Trilaminar",
    period: "Semana 2 - 3",
    category: "Láminas Embrionarias",
    group: "laminas",
    desc: "Estructura formada por 3 láminas germinales fundamentales que darán origen a todos los órganos del cuerpo humano: Endodermo, Mesodermo y Ectodermo.",
    exam: "3 láminas: Endodermo (digestivo), Mesodermo (óseo, músculo, corazón, vasos) y Ectodermo (SNC, SNP, piel, sentidos).",
    colorGroup: "#704812"
  },
  {
    id: 6,
    label: "Endodermo",
    period: "Lámina Interna",
    category: "Láminas Embrionarias",
    group: "laminas",
    desc: "Lámina embrionaria más interna. Da origen al tracto digestivo y sus glándulas anexas.",
    exam: "Derivado principal: Tracto digestivo.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 7,
    label: "Mesodermo",
    period: "Lámina Media",
    category: "Láminas Embrionarias",
    group: "laminas",
    desc: "Lámina embrionaria intermedia. Origina el sistema óseo, músculo esquelético, corazón y vasos sanguíneos. En medio de él se ubica la Notocorda.",
    exam: "Derivados: Sistema óseo, músculo esquelético, corazón y vasos sanguíneos. Aloja la notocorda.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 8,
    label: "Ectodermo",
    period: "Lámina Externa",
    category: "Láminas Embrionarias",
    group: "laminas",
    desc: "Lámina embrionaria externa. Da origen al sistema nervioso, la piel y los órganos de los sentidos. Se invagina haciendo un surco para formar el tubo neural y crestas neurales.",
    exam: "Origina: Sistema nervioso, piel y órganos de los sentidos. Se invagina formando el surco neural.",
    colorGroup: "#704812"
  },

  // Tubo Neural y Notocorda
  {
    id: 9,
    label: "Notocorda (Inductor)",
    period: "Inductor Gestacional",
    category: "Tubo Neural y Notocorda",
    group: "tubo",
    desc: "Conocida como inductor embrionario gestacional que induce el desarrollo de cada parte en cada momento preciso. Se ubica en medio del mesodermo y, al formarse el tubo neural, queda situada debajo de este. Si se consume algún teratógeno que impida 'leer' la notocorda, se impide la formación de los órganos programados.",
    exam: "Inductor embrionario gestacional; se halla bajo el tubo neural. Su alteración por teratógenos bloquea la inducción.",
    colorGroup: "#944920"
  },
  {
    id: 10,
    label: "Tubo Neural",
    period: "Origen del SNC",
    category: "Tubo Neural y Notocorda",
    group: "tubo",
    desc: "Formado por la invaginación y cierre del ectodermo neural estimulado por la notocorda. Da origen al Sistema Nervioso Central (SNC: encéfalo y médula espinal).",
    exam: "Da origen exclusivo al SNC (encéfalo y médula espinal). Su parte encefálica genera las vesículas.",
    colorGroup: "#2b553c"
  },
  {
    id: 11,
    label: "Crestas Neurales",
    period: "Origen del SNP",
    category: "Tubo Neural y Notocorda",
    group: "tubo",
    desc: "Lo que resta del mesodermo/neuroectodermo y lo une con el no neural forma las crestas neurales. Estas se separan y migran para crear los Ganglios del Sistema Nervioso Periférico (SNP).",
    exam: "Crestas neurales se separan para dar origen a los Ganglios del SNP.",
    colorGroup: "#205b76"
  },
  {
    id: 12,
    label: "Cierre Caudal y Defectos",
    period: "Extremo Posterior",
    category: "Trastornos y Teratógenos",
    group: "trastornos",
    desc: "Si no se consigue el cierre del tubo neural en su parte caudal (inferior/posterior), el bebé presentará Espina Bífida o Disrafias espinales.",
    exam: "Fallo de cierre caudal = Espina bífida o disrafias.",
    colorGroup: "#b91c1c"
  },
  {
    id: 13,
    label: "Cierre Cefálico y Anencefalia",
    period: "Extremo Anterior",
    category: "Trastornos y Teratógenos",
    group: "trastornos",
    desc: "Si no se consigue el cierre del tubo neural en su parte cefálica (anterior/superior), el bebé presentará Anencefalia (ausencia de desarrollo del encéfalo y bóveda craneana).",
    exam: "Fallo de cierre cefálico = Anencefalia.",
    colorGroup: "#b91c1c"
  },

  // Vesículas Encefálicas Primarias y Secundarias
  {
    id: 14,
    label: "3 Vesículas Primarias",
    period: "Porción Encefálica",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "El tubo neural cerrado solo evoluciona de forma significativa en la parte encefálica, formando 3 abultamientos primarios: Prosencéfalo, Mesencéfalo y Rombencéfalo. Primero crecen y luego se compactan.",
    exam: "3 abultamientos primarios en la región cefálica: Prosencéfalo, Mesencéfalo y Rombencéfalo.",
    colorGroup: "#2b553c"
  },
  {
    id: 15,
    label: "Prosencéfalo (Cerebro Anterior)",
    period: "Vesícula Primaria 1",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Vesícula primaria anterior. Se divide en dos vesículas secundarias: Telencéfalo (Prosencéfalo secundario) y Diencéfalo.",
    exam: "Se subdivide en Telencéfalo (Corteza y ganglios basales) y Diencéfalo (Tálamos).",
    colorGroup: "#2b553c"
  },
  {
    id: 16,
    label: "Telencéfalo (Prosencéfalo 2°)",
    period: "Vesícula Secundaria",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Derivado secundario del prosencéfalo. Origina la Corteza Cerebral (hemisferios) y los Ganglios Basales. Aloja los ventrículos laterales.",
    exam: "Estructuras adultas que origina: Corteza cerebral y Ganglios basales.",
    colorGroup: "#2b553c"
  },
  {
    id: 17,
    label: "Diencéfalo",
    period: "Vesícula Secundaria",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Derivado secundario del prosencéfalo. Da origen a los Tálamos (tálamo, hipotálamo, epitálamo y subtálamo) y rodea el tercer ventrículo.",
    exam: "Estructuras adultas que origina: Tálamos (familia talámica).",
    colorGroup: "#2b553c"
  },
  {
    id: 18,
    label: "Mesencéfalo (Cerebro Medio)",
    period: "Vesícula Primaria 2",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Vesícula primaria intermedia. Queda igual sin subdividirse en vesícula secundaria. Origina los pedúnculos cerebrales, tegmentum y tectum (colículos). Contiene el acueducto de Silvio.",
    exam: "No se subdivide: 'Queda igual' como Mesencéfalo.",
    colorGroup: "#704812"
  },
  {
    id: 19,
    label: "Rombencéfalo (Cerebro Posterior)",
    period: "Vesícula Primaria 3",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Vesícula primaria caudal. Se subdivide en dos vesículas secundarias: Metencéfalo y Mielencéfalo.",
    exam: "Se divide en: Metencéfalo (puente y cerebelo) y Mielencéfalo (bulbo raquídeo).",
    colorGroup: "#205b76"
  },
  {
    id: 20,
    label: "Metencéfalo",
    period: "Vesícula Secundaria",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Derivado secundario del rombencéfalo. Origina la Protuberancia o Puente de Varolio y el Cerebelo.",
    exam: "Estructuras adultas que origina: Protuberancia (puente) y Cerebelo.",
    colorGroup: "#205b76"
  },
  {
    id: 21,
    label: "Mielencéfalo",
    period: "Vesícula Secundaria",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Derivado secundario del rombencéfalo más caudal. Origina el Bulbo Raquídeo (Médula oblonga).",
    exam: "Estructura adulta que origina: Bulbo raquídeo.",
    colorGroup: "#205b76"
  },
  {
    id: 22,
    label: "Ventrículos Encefálicos",
    period: "Cavidad del Tubo",
    category: "Vesículas Encefálicas",
    group: "vesiculas",
    desc: "Del ducto interno de en medio del tubo neural se forman los ventrículos cerebrales con su líquido cefalorraquídeo. El tejido primero crece y luego se compacta.",
    exam: "Se originan de la luz o ducto central del tubo neural al compactarse y plegarse.",
    colorGroup: "#205b76"
  },

  // Neurodesarrollo Celular
  {
    id: 23,
    label: "Célula Madre",
    period: "Zona Ventricular",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Célula pluripotente que da origen a todas las neuronas y glías del SN. Residen en la zona ventricular del tubo neural y producen a las células progenitoras (precursoras).",
    exam: "Residen en la zona ventricular; dan origen a todas las neuronas y células gliales mediante células progenitoras.",
    colorGroup: "#2b553c"
  },
  {
    id: 24,
    label: "Células Progenitoras (Precursoras)",
    period: "Migración Celular",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Derivan de la célula madre y actúan como precursoras que emigran de la zona ventricular y producen una neurona o una célula glial. Se bifurcan en Neuroblastos y Glioblastos.",
    exam: "Emigran de la zona ventricular y se diferencian en neuroblastos (neuronas) o glioblastos (glía).",
    colorGroup: "#2b553c"
  },
  {
    id: 25,
    label: "Neuroblastos y Glioblastos",
    period: "Linajes Celulares",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Neuroblasto: Célula progenitora de la que proceden todos los diferentes tipos de neuronas. Glioblasto: Célula progenitora de la que proceden diferentes tipos de células gliales (astrocitos, oligodendrocitos, etc.).",
    exam: "Neuroblasto origina neuronas; Glioblasto origina células gliales.",
    colorGroup: "#2b553c"
  },
  {
    id: 26,
    label: "Génesis Neuronal (Día 7 a Sem 20)",
    period: "Día 7 - Semana 20",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "La primera neurona surge exactamente en el día 7 de la gestación. La fase de proliferación/producción neuronal concluye hacia las 20 semanas de gestación.",
    exam: "1ª neurona = Día 7 de gestación. Fin de la neurogénesis masiva = 20 semanas.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 27,
    label: "Diferenciación y Maduración",
    period: "Semana 20 a Nacimiento",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Diferenciación celular: Su función será de acuerdo con el ambiente y las conexiones que estén alrededor (inicia a las 20 semanas y termina al nacimiento). Maduración celular: Ocurre al mismo tiempo; el axón se desarrolla más rápido que las dendritas.",
    exam: "Inicia a las 20 semanas y culmina al nacimiento. El axón se desarrolla más rápido que las dendritas.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 28,
    label: "Sinaptogénesis (MAC y MT)",
    period: "Conectividad Neuronal",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Formación de sinapsis guiada por señales químicas: Molécula de Adhesión Celular (MAC) y Molécula Trópica (MT) que guían y dirigen los conos de crecimiento de los axones hacia sus blancos.",
    exam: "MAC (Molécula de Adhesión Celular) y MT (Molécula Trópica) dirigen químicamente el camino de los axones.",
    colorGroup: "#704812"
  },
  {
    id: 29,
    label: "Muerte Celular: Apoptosis vs Necrosis",
    period: "Al Nacimiento",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Apoptosis: Muerte celular programada fisiológica, comienza al nacimiento para eliminar neuronas excedentes o no conectadas. Necrosis: Muerte tóxica, accidental o no natural de las neuronas provocada por lesión o noxa.",
    exam: "Apoptosis = muerte programada fisiológica (inicia al nacimiento). Necrosis = muerte tóxica / no natural.",
    colorGroup: "#944920"
  },
  {
    id: 30,
    label: "Mielogénesis (0 a 7 años)",
    period: "Nacimiento - 7 Años",
    category: "Neurodesarrollo Celular",
    group: "celular",
    desc: "Formación de la capa/célula de mielina que recubre los axones para acelerar la conducción. Comienza en las zonas sensoriales y motoras más simples desde el nacimiento y se prolonga hasta los 7 años aproximadamente.",
    exam: "Inicia al nacimiento desde zonas sensoriales y motoras simples y se prolonga hasta los 7 años aprox.",
    colorGroup: "#2b553c"
  },

  // Trastornos del Neurodesarrollo y Teratógenos
  {
    id: 31,
    label: "Agentes Teratógenos",
    period: "Factores de Riesgo",
    category: "Trastornos y Teratógenos",
    group: "trastornos",
    desc: "Agentes ambientales o maternos que pueden impedir la correcta lectura de la notocorda y provocar que las cosas no salgan bien: a) Fármacos y drogas, b) Tabaco y alcohol, c) Dieta materna, d) Bienestar emocional de la madre, e) Edad de la madre, f) Enfermedades virales o bacterianas.",
    exam: "6 teratógenos: Fármacos/drogas, Tabaco/alcohol, Dieta, Bienestar emocional, Edad materna, Infecciones virales/bacterianas.",
    colorGroup: "#b91c1c"
  },
  {
    id: 32,
    label: "Malformaciones de Migración Celular",
    period: "Fallo de Migración",
    category: "Trastornos y Teratógenos",
    group: "trastornos",
    desc: "Patologías causadas cuando las células precursoras no migran adecuadamente: Lisencefalia (cerebro liso sin circunvoluciones), Paquigiria (circunvoluciones gruesas y escasas), Hemimegalencefalia, Agenesia total o semitotal del cerebelo, Malformación de Chiari y Síndrome de Dandy-Walker.",
    exam: "Incluye: Lisencefalia, Paquigiria, Hemimegalencefalia, Agenesia cerebelosa, Malformación de Chiari y Síndrome de Dandy-Walker.",
    colorGroup: "#b91c1c"
  },
  {
    id: 33,
    label: "Defectos Fosa Posterior y Cierre",
    period: "Cierre Tubo Neural",
    category: "Trastornos y Teratógenos",
    group: "trastornos",
    desc: "Defectos por fallo de cierre del tubo neural y alteraciones en fosa posterior: Meningocele (saco herniario con piel y líquido), Mielomeningocele (más severo: contiene piel, médula espinal y líquido cefalorraquídeo) e Hidrocefalia.",
    exam: "Meningocele = piel + líquido. Mielomeningocele = piel + médula espinal + LCR. Hidrocefalia.",
    colorGroup: "#b91c1c"
  }
];

/* =========================================================================
   2. RELACIONES / CONEXIONES (EDGES) DEL GRAFO DE ONTOGENIA
   ========================================================================= */
export const neuroEdges: NeuroEdge[] = [
  // Fecundación a embriogénesis
  { from: 1, to: 2, label: "Inicia con", arrows: "to" },
  { from: 2, to: 3, label: "16 células a los 3 días", arrows: "to" },
  { from: 3, to: 4, label: "Cavidad interna", arrows: "to" },
  { from: 4, to: 5, label: "Forma el disco", arrows: "to" },

  // Disco a las 3 láminas
  { from: 5, to: 6, label: "Lámina interna", arrows: "to" },
  { from: 5, to: 7, label: "Lámina media", arrows: "to" },
  { from: 5, to: 8, label: "Lámina externa", arrows: "to" },

  // Ectodermo y notocorda a tubo neural
  { from: 7, to: 9, label: "Aloja en medio", arrows: "to" },
  { from: 9, to: 10, label: "Induce por debajo", arrows: "to" },
  { from: 8, to: 10, label: "Invagina y cierra", arrows: "to" },
  { from: 8, to: 11, label: "Forma y separa", arrows: "to" },

  // Defectos de cierre del tubo neural
  { from: 10, to: 12, label: "Fallo cierre caudal", arrows: "to" },
  { from: 10, to: 13, label: "Fallo cierre cefálico", arrows: "to" },

  // Tubo neural a Vesículas Primarias
  { from: 10, to: 14, label: "Abultamientos cefálicos", arrows: "to" },
  { from: 14, to: 15, label: "Cerebro anterior", arrows: "to" },
  { from: 14, to: 18, label: "Cerebro medio (queda igual)", arrows: "to" },
  { from: 14, to: 19, label: "Cerebro posterior", arrows: "to" },

  // Prosencéfalo a secundarias
  { from: 15, to: 16, label: "Prosencéfalo 2°", arrows: "to" },
  { from: 15, to: 17, label: "Región talámica", arrows: "to" },

  // Rombencéfalo a secundarias
  { from: 19, to: 20, label: "Puente y cerebelo", arrows: "to" },
  { from: 19, to: 21, label: "Bulbo raquídeo", arrows: "to" },

  // Ducto a ventrículos
  { from: 10, to: 22, label: "Ducto central", arrows: "to" },

  // Neurodesarrollo Celular
  { from: 10, to: 23, label: "Zona ventricular", arrows: "to" },
  { from: 23, to: 24, label: "Producen precursoras", arrows: "to" },
  { from: 24, to: 25, label: "Bifurcación", arrows: "to" },
  { from: 23, to: 26, label: "Día 7 a sem 20", arrows: "to" },
  { from: 26, to: 27, label: "Desde sem 20", arrows: "to" },
  { from: 27, to: 28, label: "Guía de axones (MAC/MT)", arrows: "to" },
  { from: 27, to: 29, label: "Al nacimiento", arrows: "to" },
  { from: 27, to: 30, label: "Nacimiento a 7 años", arrows: "to" },

  // Teratógenos y Patología
  { from: 9, to: 31, label: "Afectan lectura de notocorda", arrows: "to" },
  { from: 24, to: 32, label: "Fallo migratorio", arrows: "to" },
  { from: 10, to: 33, label: "Fallo de cierre / fosa posterior", arrows: "to" }
];

/* =========================================================================
   3. LÁMINAS EMBRIONARIAS Y DERIVADOS
   ========================================================================= */
export const embryonicLayersData: EmbryonicLayer[] = [
  {
    name: "Ectodermo",
    latinName: "Ectoderma (Lámina externa)",
    color: "#704812",
    badge: "Origen del Sistema Nervioso",
    derivatives: [
      "Sistema Nervioso Central (SNC) a través del tubo neural",
      "Sistema Nervioso Periférico (SNP: ganglios) mediante las crestas neurales",
      "Piel (epidermis y faneras)",
      "Órganos de los sentidos (retina, epitelio olfatorio, oído interno)"
    ],
    roleInSN: "Se invagina haciendo un surco para formar el tubo neural y las crestas neurales por inducción de la notocorda.",
    keyConcepts: [
      "Invaginación hacia surco neural",
      "Cierre del tubo neural (SNC)",
      "Desprendimiento de crestas neurales (SNP / Ganglios)",
      "Susceptible a falta de cierre: Anencefalia (cefálico) y Espina bífida (caudal)"
    ]
  },
  {
    name: "Mesodermo",
    latinName: "Mesoderma (Lámina media)",
    color: "#205b76",
    badge: "Sostén, Circulación y Notocorda",
    derivatives: [
      "Sistema óseo (huesos, cráneo, columna vertebral)",
      "Músculo esquelético",
      "Corazón y sistema cardiovascular",
      "Vasos sanguíneos y células sanguíneas",
      "Notocorda (inductor embrionario gestacional central)"
    ],
    roleInSN: "En medio del mesodermo se encuentra la Notocorda, que se sitúa debajo del tubo neural como el gran organizador del desarrollo.",
    keyConcepts: [
      "Aloja la notocorda en su porción axial",
      "Forma la estructura esquelética protectora del neuroeje",
      "Aporta la vasculatura al tejido nervioso en desarrollo"
    ]
  },
  {
    name: "Endodermo",
    latinName: "Endoderma (Lámina interna)",
    color: "#2b553c",
    badge: "Vísceras y Tracto Digestivo",
    derivatives: [
      "Tracto digestivo (epitelio de revestimiento y glándulas anexas)",
      "Hígado y páncreas",
      "Aparato respiratorio (tráquea, bronquios, alvéolos)"
    ],
    roleInSN: "Forma los órganos vegetativos que posteriormente recibirán la inervación autónoma (simpática y parasimpática).",
    keyConcepts: [
      "Capa más profunda del disco embrionario trilaminar",
      "Revestimiento epitelial del sistema digestivo"
    ]
  }
];

/* =========================================================================
   4. VESÍCULAS ENCEFÁLICAS (ÁRBOL PRIMARIAS -> SECUNDARIAS -> ADULTOS)
   ========================================================================= */
export const brainVesiclesData: VesicleStructure[] = [
  {
    primary: "Prosencéfalo (Cerebro Anterior)",
    secondary: [
      "Prosencéfalo secundario / Telencéfalo",
      "Diencéfalo"
    ],
    adultDerivatives: [
      "Corteza cerebral (ambos hemisferios cerebrales)",
      "Ganglios basales (caudado, putamen, globo pálido)",
      "Tálamos (familia talámica: tálamo, hipotálamo, epitálamo, subtálamo)"
    ],
    ventricularCavities: "Ventrículos laterales (Telencéfalo) y Tercer ventrículo (Diencéfalo)",
    notes: "Evoluciona a partir de la porción más anterior del tubo neural. Primero crece profusamente y luego se compacta y pliega."
  },
  {
    primary: "Mesencéfalo (Cerebro Medio)",
    secondary: [
      "Mesencéfalo (Queda igual, no se subdivide)"
    ],
    adultDerivatives: [
      "Pedúnculos cerebrales",
      "Tegmentum (sustancia nigra, área tegmental ventral, núcleo rojo)",
      "Tectum (colículos o tubérculos cuadrigéminos superiores e inferiores)"
    ],
    ventricularCavities: "Acueducto cerebral / Acueducto de Silvio (conecta 3° y 4° ventrículo)",
    notes: "Conserva su denominación primaria. Crucial para la producción de dopamina (sustancia nigra) y reflejos visuales/auditivos."
  },
  {
    primary: "Rombencéfalo (Cerebro Posterior)",
    secondary: [
      "Metencéfalo",
      "Mielencéfalo"
    ],
    adultDerivatives: [
      "Metencéfalo: Protuberancia o Puente de Varolio",
      "Metencéfalo: Cerebelo (coordinación y aprendizaje motor)",
      "Mielencéfalo: Bulbo Raquídeo (Médula oblonga, centro de centros vitales)"
    ],
    ventricularCavities: "Cuarto ventrículo (entre puente/bulbo y cerebelo)",
    notes: "Porción más caudal de las vesículas encefálicas. Se continúa caudalmente con la médula espinal."
  }
];

/* =========================================================================
   5. NEURODESARROLLO CELULAR Y ETAPAS
   ========================================================================= */
export const cellularStagesData: CellularStage[] = [
  {
    name: "Célula Madre Pluripotente",
    timeline: "Desde la fecundación y formación del tubo neural",
    description: "Célula que da origen a todas las neuronas y células gliales del Sistema Nervioso. Residen estratégicamente en la zona ventricular del tubo neural y producen a las células progenitoras.",
    keyActors: ["Zona ventricular", "Proliferación mitótica simétrica y asimétrica"],
    clinicalOrExamNote: "Residen en la zona ventricular. Dan origen a todas las neuronas del SN a través de las células progenitoras."
  },
  {
    name: "Células Progenitoras (Precursoras)",
    timeline: "Desde día 7 de gestación",
    description: "Derivan directamente de la célula madre. Actúan como células precursoras que emigran de la zona ventricular y producen una neurona o una célula glial.",
    keyActors: [
      "Neuroblasto: progenitor de todos los diferentes tipos de neuronas",
      "Glioblasto: progenitor de diferentes tipos de células gliales (astrocitos, oligodendrocitos)"
    ],
    clinicalOrExamNote: "La alteración en la migración de estas células provoca malformaciones como lisencefalia o paquigiria."
  },
  {
    name: "Génesis y Proliferación Neuronal",
    timeline: "Día 7 a Semana 20 de gestación",
    description: "La primera neurona surge el día 7 de la gestación. La fase masiva de neurogénesis celular culmina a las 20 semanas de gestación.",
    keyActors: ["Día 7 (primera neurona)", "Semana 20 (cierre de producción neuronal)"],
    clinicalOrExamNote: "Pregunta clave de examen: La primera neurona surge en el día 7 y la generación culmina a las 20 semanas."
  },
  {
    name: "Diferenciación Celular",
    timeline: "Semana 20 de gestación hasta el Nacimiento",
    description: "La función específica que asumirá cada neurona será de acuerdo con el ambiente y a las conexiones que estén a su alrededor. Inicia a las 20 semanas y culmina al nacimiento.",
    keyActors: ["Microambiente celular", "Señales químicas perinatales", "Plasticidad de destino"],
    clinicalOrExamNote: "La función se define por el ambiente y las conexiones circundantes (Semana 20 al nacimiento)."
  },
  {
    name: "Maduración Celular y Crecimiento",
    timeline: "Semana 20 de gestación hasta posnatal",
    description: "Se produce simultáneamente a la diferenciación. Una regla biológica fundamental: el axón se desarrolla más rápido que las dendritas.",
    keyActors: ["Crecimiento axonal acelerado", "Arborización dendrítica posterior", "Cono de crecimiento"],
    clinicalOrExamNote: "El axón madura y se proyecta mucho más rápido que las dendritas para establecer conexiones primarias tempranas."
  },
  {
    name: "Sinaptogénesis y Guía Química",
    timeline: "Desde el período fetal medio en adelante",
    description: "Establecimiento de sinapsis dirigidas por señales y marcadores químicos especializados en la matriz y membrana.",
    keyActors: [
      "MAC (Molécula de Adhesión Celular): fija y estabiliza el axón al sustrato",
      "MT (Molécula Trópica): señal química atrayente/repelente que dirige el camino de los axones"
    ],
    clinicalOrExamNote: "MAC y MT son las moléculas clave que dirigen y anclan químicamente el trayecto axonal."
  },
  {
    name: "Muerte Celular: Apoptosis vs Necrosis",
    timeline: "Desde el Nacimiento",
    description: "Apoptosis: Muerte celular programada fisiológica. Comienza al nacimiento para eliminar neuronas redundantes o sin conexiones funcionales. Necrosis: Muerte tóxica, accidental o no natural.",
    keyActors: ["Apoptosis (fisiológica, programada)", "Necrosis (tóxica, patológica por noxa)"],
    clinicalOrExamNote: "La apoptosis es fisiológica y comienza al nacer; la necrosis es una muerte tóxica o accidental provocada por daño celular."
  },
  {
    name: "Mielogénesis",
    timeline: "Desde el Nacimiento hasta los 7 años aprox.",
    description: "Formación de la envoltura de mielina (células de Schwann en SNP y oligodendrocitos en SNC) que recubre el axón. Comienza en las zonas sensoriales y motoras más simples desde el nacimiento y se prolonga hasta los 7 años aprox.",
    keyActors: ["Oligodendrocitos (SNC)", "Células de Schwann (SNP)", "Gradiente de simple a complejo"],
    clinicalOrExamNote: "Sigue un patrón jerárquico: de las áreas sensoriales y motoras más simples hacia las áreas de asociación compleja (hasta los 7 años)."
  }
];

/* =========================================================================
   6. TRASTORNOS DEL NEURODESARROLLO, TERATÓGENOS Y MALFORMACIONES
   ========================================================================= */
export const teratogensData: TeratogenFactor[] = [
  {
    category: "Sustancias químicas",
    factor: "a) Fármacos y drogas",
    riskDescription: "Medicamentos que impiden la lectura génica de la notocorda u obstaculizan la división y migración de neuroblastos."
  },
  {
    category: "Hábitos tóxicos",
    factor: "b) Tabaco y alcohol",
    riskDescription: "Causan hipoxia fetal, síndrome alcohólico fetal, microcefalia y retraso severo en la migración celular."
  },
  {
    category: "Nutrición",
    factor: "c) Dieta materna",
    riskDescription: "Déficit de ácido fólico (vitamina B9) que causa defectos en el cierre del tubo neural (anencefalia, espina bífida) y desnutrición."
  },
  {
    category: "Psicoemocional",
    factor: "d) Bienestar emocional de la madre",
    riskDescription: "Estrés crónico materno con niveles elevados de cortisol que alteran el microambiente de diferenciación y sinaptogénesis."
  },
  {
    category: "Biológico materno",
    factor: "e) Edad de la madre",
    riskDescription: "Edades extremas (adolescencia o >35 años) con mayor incidencia de no disyunciones cromosómicas y complicaciones vasculares gestacionales."
  },
  {
    category: "Infeccioso",
    factor: "f) Enfermedades virales y bacterianas",
    riskDescription: "Infecciones congénitas (TORCH: toxoplasma, rubéola, citomegalovirus, herpes, zika) que destruyen neuronas en proliferación."
  }
];

export const malformationsData: NeuroMalformation[] = [
  // Malformaciones de migración celular
  {
    name: "Lisencefalia",
    type: "Migración Celular",
    structuresInvolved: "Corteza cerebral",
    description: "Cerebro liso: ausencia total o casi total de circunvoluciones y surcos en la corteza por fallo en la migración radial de los neuroblastos.",
    differentialNote: "Corteza cerebral anormalmente gruesa pero sin pliegues (superficie lisa)."
  },
  {
    name: "Paquigiria",
    type: "Migración Celular",
    structuresInvolved: "Corteza cerebral",
    description: "Circunvoluciones anormalmente gruesas, escasas y aplanadas causadas por una migración celular incompleta durante el 3° al 5° mes gestacional.",
    differentialNote: "Se asocia a lisencefalia incompleta con retraso psicomotor y epilepsia."
  },
  {
    name: "Hemimegalencefalia",
    type: "Migración Celular",
    structuresInvolved: "Un hemisferio cerebral completo",
    description: "Crecimiento asimétrico y desproporcionado de un hemisferio cerebral debido a una alteración en la proliferación y migración de las células progenitoras.",
    differentialNote: "Genera asimetría craneofacial y convulsiones refractarias tempranas."
  },
  {
    name: "Agenesia total o semitotal del cerebelo",
    type: "Migración Celular",
    structuresInvolved: "Cerebelo (Metencéfalo)",
    description: "Ausencia congénita completa o casi completa de los hemisferios cerebelosos o del vermis por defecto en la formación del esbozo metencefálico.",
    differentialNote: "Impacta severamente la coordinación motora, el tono muscular y el equilibrio."
  },
  {
    name: "Malformación de Chiari",
    type: "Migración Celular",
    structuresInvolved: "Amígdalas cerebelosas y foramen magno",
    description: "Herniación o descenso de las amígdalas cerebelosas hacia el canal cervical a través del foramen magno, comprimiendo el bulbo y médula.",
    differentialNote: "Frecuentemente asociada a hidrocefalia y siringomielia."
  },
  {
    name: "Síndrome de Dandy-Walker",
    type: "Migración Celular",
    structuresInvolved: "Vermis cerebeloso, 4° ventrículo y fosa posterior",
    description: "Tríada de agenesia o hipoplasia del vermis cerebeloso, dilatación quística masiva del cuarto ventrículo y agrandamiento de la fosa posterior.",
    differentialNote: "Cursa con hidrocefalia obstructiva congénita."
  },

  // Malformaciones a nivel de la fosa posterior y cierre del tubo neural
  {
    name: "Meningocele",
    type: "Cierre de Tubo Neural y Fosa Posterior",
    structuresInvolved: "Meninges (duramadre, aracnoides) y líquido",
    description: "Defecto del cierre del tubo neural donde protruyen únicamente la piel y las meninges formando un saco lleno de líquido cefalorraquídeo, sin involucrar tejido nervioso medular.",
    differentialNote: "Diferencia de examen: Contiene PIEL Y LÍQUIDO (sin médula espinal herniada dentro del saco)."
  },
  {
    name: "Mielomeningocele",
    type: "Cierre de Tubo Neural y Fosa Posterior",
    structuresInvolved: "Médula espinal, raíces nerviosas, meninges y piel",
    description: "Forma más severa de disrafia donde el saco herniario contiene piel, la médula espinal y raíces nerviosas expuestas o en el saco, bañadas en líquido cefalorraquídeo.",
    differentialNote: "Diferencia de examen: Contiene PIEL, MÉDULA ESPINAL Y LÍQUIDO CEFALORRAQUÍDEO (daño motor/sensitivo permanente)."
  },
  {
    name: "Hidrocefalia",
    type: "Cierre de Tubo Neural y Fosa Posterior",
    structuresInvolved: "Ventrículos cerebrales y espacio subaracnoideo",
    description: "Acumulación excesiva de líquido cefalorraquídeo en el interior de los ventrículos cerebrales por obstrucción en su circulación (ej. acueducto de Silvio) o reabsorción deficiente.",
    differentialNote: "Aumenta la presión intracraneal y el diámetro cefálico en el lactante."
  },
  {
    name: "Espina Bífida / Disrafias",
    type: "Cierre de Tubo Neural y Fosa Posterior",
    structuresInvolved: "Porción caudal del tubo neural y arcos vertebrales",
    description: "Fallo congénito en el cierre de la porción caudal del tubo neural y los arcos vertebrales que la recubren.",
    differentialNote: "Consecuencia directa del fallo de cierre en el extremo caudal."
  },
  {
    name: "Anencefalia",
    type: "Cierre de Tubo Neural y Fosa Posterior",
    structuresInvolved: "Porción cefálica del tubo neural y bóveda craneal",
    description: "Ausencia del desarrollo de la mayor parte del encéfalo, cráneo y cuero cabelludo debido al fallo del cierre del neuroporo cefálico.",
    differentialNote: "Incompatible con la vida posnatal; consecuencia del fallo de cierre en el extremo cefálico."
  }
];

/* =========================================================================
   7. LÍNEA DE TIEMPO DEL DESARROLLO ONTOGENÉTICO (CRONOLÓGICA)
   ========================================================================= */
export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 1,
    number: 1,
    year: "Día 0 (Fecundación)",
    location: "Trompa de Falopio / Gametos",
    title: "Fecundación y Creación del Cigoto",
    badge: "Genética y Origen",
    description: "El óvulo aporta un cromosoma X y el espermatozoide puede ser X o Y (X+X = Niña, X+Y = Niño). Cada célula aporta 23 cromosomas y la unión crea los 23 pares (46 cromosomas). Se genera la célula primordial: el Cigoto, que inicia el proceso de duplicación.",
    examNote: "El sexo cromosómico depende del espermatozoide (aporta X o Y). Cada gameto entrega 23 cromosomas formando 23 pares.",
    category: "embrion",
    highlightColor: "#205b76"
  },
  {
    id: 2,
    number: 2,
    year: "Día 3 (3 Días)",
    location: "Tránsito Uterino",
    title: "Mórula (16 Células)",
    badge: "Segmentación Celular",
    description: "Tras sucesivas divisiones por mitosis, al alcanzar exactamente 16 células, el embrión adopta forma de mora y se denomina formalmente Mórula.",
    examNote: "La mórula se define al alcanzar las 16 células a los 3 días de la fecundación.",
    category: "embrion",
    highlightColor: "#205b76"
  },
  {
    id: 3,
    number: 3,
    year: "Días 4 - 6",
    location: "Cavidad Uterina",
    title: "Blastocisto y Disco Embrionario",
    badge: "Diferenciación Inicial",
    description: "La mórula crea una cavidad interna líquida convirtiéndose en Blastocisto. Dentro del blastocisto se crea el Disco Embrionario, encargado de conformar el cuerpo del embrión.",
    examNote: "El disco embrionario surge dentro del blastocisto y formará las 3 láminas del cuerpo humano.",
    category: "embrion",
    highlightColor: "#205b76"
  },
  {
    id: 4,
    number: 4,
    year: "Semana 2 - 3",
    location: "Disco Embrionario",
    title: "Las 3 Láminas Germinales",
    badge: "Disco Trilaminar",
    description: "El disco embrionario se estratifica en 3 láminas fundamentales: Endodermo (tracto digestivo), Mesodermo (sistema óseo, músculo esquelético, corazón, vasos sanguíneos y notocorda) y Ectodermo (sistema nervioso, piel y órganos de los sentidos).",
    examNote: "Endodermo = digestivo. Mesodermo = óseo, muscular, cardíaco y vasos. Ectodermo = nervioso, piel y sentidos.",
    category: "embrion",
    highlightColor: "#704812"
  },
  {
    id: 5,
    number: 5,
    year: "Semana 3",
    location: "Eje Axial del Embrión",
    title: "La Notocorda: Inductor Embrionario Gestacional",
    badge: "Organizador Molecular",
    description: "Se encuentra en medio del mesodermo y, al formarse el tubo neural, queda ubicada justo debajo de este. Induce el desarrollo de cada parte en cada momento. Si se ingiere algún medicamento teratógeno que impida que se lea la notocorda, se bloquea la formación de los órganos correspondientes a ese instante.",
    examNote: "Inductor embrionario gestacional ubicado bajo el tubo neural. Los teratógenos pueden impedir su lectura.",
    category: "tubo",
    highlightColor: "#944920"
  },
  {
    id: 6,
    number: 6,
    year: "Semana 3 - 4",
    location: "Neuroectodermo",
    title: "Paso a Paso del Tubo Neural y Crestas",
    badge: "Neurulación",
    description: "1) Se invagina el ectodermo/mesodermo haciendo un surco. 2) Se cierra el tubo neural (origen del SNC). 3) Lo que resta une con el ectodermo no neural formando las crestas neurales. 4) Se separan las crestas neurales para crear los Ganglios del SNP.",
    examNote: "Tubo neural cerrado = SNC. Crestas neurales separadas = Ganglios del SNP.",
    category: "tubo",
    highlightColor: "#2b553c"
  },
  {
    id: 7,
    number: 7,
    year: "Día 25 - 28",
    location: "Neuroporos Caudal y Cefálico",
    title: "Cierre del Tubo Neural y Puntos Críticos",
    badge: "Cierre de Neuroporos",
    description: "El cierre del tubo neural es un hito crítico. Si no se consigue el cierre en la parte caudal se produce Espina Bífida o Disrafias. Si no se consigue el cierre en la parte cefálica se produce Anencefalia.",
    examNote: "Fallo caudal = Espina bífida o disrafias. Fallo cefálico = Anencefalia.",
    category: "trastornos",
    highlightColor: "#b91c1c"
  },
  {
    id: 8,
    number: 8,
    year: "Día 7 de Gestación",
    location: "Zona Ventricular",
    title: "Aparición de la Primera Neurona",
    badge: "Primera Neurona",
    description: "La primera neurona del ser humano surge tempranamente en el día 7 de la gestación, a partir de células progenitoras derivadas de la célula madre en la zona ventricular.",
    examNote: "La primera neurona surge exactamente en el día 7 de la gestación.",
    category: "celular",
    highlightColor: "#2b553c"
  },
  {
    id: 9,
    number: 9,
    year: "Semana 4 - 5",
    location: "Extremo Encefálico",
    title: "3 Vesículas Primarias Encefálicas",
    badge: "Morfogénesis Encefálica",
    description: "El tubo neural cerrado solo evoluciona de manera significativa en la parte encefálica formando 3 abultamientos primarios: Prosencéfalo (anterior), Mesencéfalo (medio) y Rombencéfalo (posterior). El ducto central origina los ventrículos. El tejido primero crece y luego se compacta.",
    examNote: "3 vesículas primarias: Prosencéfalo, Mesencéfalo y Rombencéfalo. Del ducto central surgen los ventrículos.",
    category: "vesiculas",
    highlightColor: "#2b553c"
  },
  {
    id: 10,
    number: 10,
    year: "Semana 6 - 8",
    location: "Encéfalo Fetal",
    title: "Vesículas Secundarias y Estructuras Adultas",
    badge: "Subdivisión Vesicular",
    description: "1) Prosencéfalo se divide en Telencéfalo (corteza y ganglios basales) y Diencéfalo (tálamos). 2) Mesencéfalo queda igual. 3) Rombencéfalo se divide en Metencéfalo (protuberancia/puente y cerebelo) y Mielencéfalo (bulbo raquídeo).",
    examNote: "Telencéfalo = corteza y ganglios basales. Diencéfalo = tálamos. Mesencéfalo = igual. Metencéfalo = puente y cerebelo. Mielencéfalo = bulbo raquídeo.",
    category: "vesiculas",
    highlightColor: "#205b76"
  },
  {
    id: 11,
    number: 11,
    year: "Semana 20 de Gestación",
    location: "Corteza y Estructuras del SNC",
    title: "Límite de Neurogénesis, Inicio de Diferenciación y Maduración",
    badge: "Hito de las 20 Semanas",
    description: "A las 20 semanas concluye la proliferación masiva de neuronas. Se inicia la Diferenciación celular (función acorde al ambiente y conexiones circundantes) y la Maduración celular simultánea, donde el axón se desarrolla más rápido que las dendritas.",
    examNote: "A las 20 semanas: Termina la producción de neuronas. Comienza la diferenciación y la maduración celular (axón más rápido que dendritas).",
    category: "celular",
    highlightColor: "#8c5e3c"
  },
  {
    id: 12,
    number: 12,
    year: "Período Fetal Tardío",
    location: "Vías de Interconexión",
    title: "Sinaptogénesis: Señales Químicas (MAC y MT)",
    badge: "Guía Química Axonal",
    description: "Conexión de axones mediante señales químicas directrices: Moléculas de Adhesión Celular (MAC) que brindan anclaje físico y Moléculas Trópicas (MT) que guían y atraen/repelen quimiotácticamente los axones a sus blancos.",
    examNote: "MAC y MT son las moléculas químicas encargadas de dirigir y orientar el trayecto de los axones.",
    category: "celular",
    highlightColor: "#704812"
  },
  {
    id: 13,
    number: 13,
    year: "Momento del Nacimiento",
    location: "Todo el Sistema Nervioso",
    title: "Término de Diferenciación e Inicio de Apoptosis Programada",
    badge: "Nacimiento y Poda",
    description: "Al nacimiento culmina la etapa de diferenciación celular y comienza la Muerte celular programada o Apoptosis (proceso biológico fisiológico y natural). En contraposición, la muerte por Necrosis es tóxica y no natural provocada por noxas.",
    examNote: "La diferenciación termina al nacer. La apoptosis (muerte programada) comienza al nacer. Necrosis = muerte tóxica no natural.",
    category: "celular",
    highlightColor: "#944920"
  },
  {
    id: 14,
    number: 14,
    year: "Nacimiento a 7 Años Aprox.",
    location: "Sustancia Blanca (SNC y SNP)",
    title: "Mielogénesis Progresiva",
    badge: "Mielinización",
    description: "Formación de la vaina de mielina alrededor de los axones. Comienza en las zonas sensoriales y motoras más simples desde el nacimiento y se prolonga hasta aproximadamente los 7 años de edad.",
    examNote: "Comienza desde el nacimiento en zonas sensoriales y motoras simples y dura hasta los 7 años aprox.",
    category: "celular",
    highlightColor: "#2b553c"
  }
];

/* =========================================================================
   8. FLASHCARDS DE REPASO ACTIVO (DESARROLLO ONTOGENÉTICO)
   ========================================================================= */
export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    year: "Fecundación",
    category: "Embriogénesis Temprana",
    question: "¿Cuántos cromosomas aporta cada gameto en la fecundación y cómo se determina el sexo cromosómico?",
    answer: "Cada célula aporta 23 cromosomas; al unirse forman los 23 pares (46 cromosomas). El óvulo siempre aporta un cromosoma X, y el espermatozoide puede aportar X o Y: X + X = Niña, X + Y = Niño.",
    examNote: "El espermatozoide determina el sexo. Unión = 23 pares en la nueva célula (cigoto)."
  },
  {
    id: "fc-2",
    year: "Mórula",
    category: "Embriogénesis Temprana",
    question: "¿Cuándo se considera formalmente que el embrión es una Mórula?",
    answer: "Al llegar exactamente a las 16 células mediante el proceso de duplicación celular del cigoto, lo cual ocurre aproximadamente a los 3 días de la fecundación.",
    examNote: "Mórula = 16 células a los 3 días."
  },
  {
    id: "fc-3",
    year: "Blastocisto",
    category: "Embriogénesis Temprana",
    question: "¿Qué estructura se forma dentro del blastocisto para dar origen al cuerpo del embrión?",
    answer: "El Disco Embrionario, el cual posteriormente se estratificará en 3 láminas germinales (Endodermo, Mesodermo y Ectodermo).",
    examNote: "El blastocisto alberga el disco embrionario que genera el cuerpo del embrión."
  },
  {
    id: "fc-4",
    year: "Láminas",
    category: "Láminas Embrionarias",
    question: "¿Cuáles son las 3 láminas del disco embrionario y qué origina cada una?",
    answer: "1) Endodermo: Tracto digestivo. 2) Mesodermo: Sistema óseo, músculo esquelético, corazón, vasos sanguíneos y notocorda. 3) Ectodermo: Sistema nervioso, piel y órganos de los sentidos.",
    examNote: "Endodermo (digestivo), Mesodermo (óseo, músculo, corazón, vasos), Ectodermo (nervioso, piel, sentidos)."
  },
  {
    id: "fc-5",
    year: "Notocorda",
    category: "Tubo Neural y Notocorda",
    question: "¿Qué es la Notocorda, dónde se ubica y por qué es tan vulnerable a medicamentos teratógenos?",
    answer: "Es el inductor embrionario gestacional que induce el desarrollo de cada parte en cada momento. Se ubica en medio del mesodermo y debajo del tubo neural. Si se consume un teratógeno que impida 'leer' la notocorda, se bloquea la formación de los órganos de ese momento.",
    examNote: "Inductor gestacional bajo el tubo neural. Su alteración bloquea la organogénesis programada."
  },
  {
    id: "fc-6",
    year: "Tubo Neural",
    category: "Tubo Neural y Notocorda",
    question: "¿Cuál es el paso a paso en la formación del Tubo Neural y las Crestas Neurales?",
    answer: "1) Se invagina el ectodermo/mesodermo formando un surco. 2) Se cierra el tubo neural (origen del SNC). 3) Lo que resta une con el ectodermo no neural formando las crestas neurales. 4) Se separan las crestas para crear los Ganglios del SNP.",
    examNote: "Tubo neural = SNC. Crestas neurales separadas = Ganglios del SNP."
  },
  {
    id: "fc-7",
    year: "Defectos de Cierre",
    category: "Trastornos y Teratógenos",
    question: "¿Qué malformaciones resultan del fallo de cierre del tubo neural en su parte caudal vs en su parte cefálica?",
    answer: "Parte Caudal incompleta: Espina Bífida o disrafias espinales. Parte Cefálica incompleta: Anencefalia (ausencia de desarrollo del encéfalo).",
    examNote: "Cierre Caudal fallido = Espina Bífida. Cierre Cefálico fallido = Anencefalia."
  },
  {
    id: "fc-8",
    year: "Vesículas",
    category: "Vesículas Encefálicas",
    question: "¿Cuáles son las 3 vesículas primarias que se forman en la parte encefálica del tubo neural?",
    answer: "1) Prosencéfalo (cerebro anterior), 2) Mesencéfalo (cerebro medio), 3) Rombencéfalo (cerebro posterior). El tubo neural cerrado solo evoluciona significativamente en la parte encefálica.",
    examNote: "3 vesículas primarias: Prosencéfalo, Mesencéfalo y Rombencéfalo."
  },
  {
    id: "fc-9",
    year: "Vesículas Secundarias",
    category: "Vesículas Encefálicas",
    question: "¿Qué vesículas secundarias y órganos adultos derivan del Prosencéfalo?",
    answer: "Del Prosencéfalo derivan: a) Telencéfalo (Prosencéfalo secundario), que origina la Corteza Cerebral y los Ganglios Basales. b) Diencéfalo, que origina los Tálamos.",
    examNote: "Telencéfalo = corteza y ganglios basales. Diencéfalo = tálamos."
  },
  {
    id: "fc-10",
    year: "Vesículas Secundarias",
    category: "Vesículas Encefálicas",
    question: "¿Cómo evoluciona el Mesencéfalo durante el paso de vesículas primarias a secundarias?",
    answer: "El Mesencéfalo queda igual; no se divide en vesículas secundarias y mantiene su nombre y estructura.",
    examNote: "Mesencéfalo no se subdivide: 'queda igual'."
  },
  {
    id: "fc-11",
    year: "Vesículas Secundarias",
    category: "Vesículas Encefálicas",
    question: "¿Qué vesículas secundarias y órganos adultos derivan del Rombencéfalo?",
    answer: "Se divide en: a) Metencéfalo, que origina la Protuberancia (puente) y el Cerebelo. b) Mielencéfalo, que origina el Bulbo Raquídeo.",
    examNote: "Metencéfalo = Protuberancia y Cerebelo. Mielencéfalo = Bulbo Raquídeo."
  },
  {
    id: "fc-12",
    year: "Ventrículos",
    category: "Vesículas Encefálicas",
    question: "¿De qué parte del tubo neural derivan los ventrículos cerebrales y cómo se da el crecimiento tisular?",
    answer: "Derivan del ducto central de en medio del tubo neural. El tejido cerebral primero comienza a crecer y posteriormente a compactarse.",
    examNote: "Ventrículos = ducto central. Primero crece, luego se compacta."
  },
  {
    id: "fc-13",
    year: "Fase Celular",
    category: "Neurodesarrollo Celular",
    question: "¿Dónde residen las Células Madre del SN y qué células producen?",
    answer: "Residen en la zona ventricular del tubo neural. Dan origen a todas las neuronas del SN produciendo a las Células Progenitoras (precursoras).",
    examNote: "Residen en la zona ventricular y originan células progenitoras."
  },
  {
    id: "fc-14",
    year: "Fase Celular",
    category: "Neurodesarrollo Celular",
    question: "¿Cuál es la diferencia entre Neuroblastos y Glioblastos?",
    answer: "El Neuroblasto es la célula progenitora de la que proceden todos los diferentes tipos de neuronas. El Glioblasto es la célula progenitora de la que proceden los diferentes tipos de células gliales.",
    examNote: "Neuroblasto = neuronas. Glioblasto = células gliales."
  },
  {
    id: "fc-15",
    year: "Cronología Celular",
    category: "Neurodesarrollo Celular",
    question: "¿Cuándo surge la primera neurona y cuándo concluye la producción de neuronas?",
    answer: "La primera neurona surge en el día 7 de la gestación y la producción neuronal masiva termina a las 20 semanas de gestación.",
    examNote: "1ª neurona = Día 7. Fin de producción neuronal = 20 semanas."
  },
  {
    id: "fc-16",
    year: "Diferenciación",
    category: "Neurodesarrollo Celular",
    question: "¿En qué consiste la Diferenciación Celular y en qué ventana temporal ocurre?",
    answer: "Es el proceso por el cual la función de la neurona se define de acuerdo con el ambiente y a las conexiones que estén a su alrededor. Inicia a las 20 semanas y termina al nacimiento.",
    examNote: "Diferenciación: de 20 semanas al nacimiento. Función ligada al ambiente y conexiones."
  },
  {
    id: "fc-17",
    year: "Maduración",
    category: "Neurodesarrollo Celular",
    question: "¿Qué ocurre durante la Maduración Celular y qué estructura se desarrolla más rápido?",
    answer: "Se da al mismo tiempo que la diferenciación (inicia a las 20 semanas). El axón se desarrolla más rápido que las dendritas.",
    examNote: "Maduración a las 20 semanas: el axón se desarrolla más rápido que las dendritas."
  },
  {
    id: "fc-18",
    year: "Sinaptogénesis",
    category: "Neurodesarrollo Celular",
    question: "¿Qué son las MAC y las MT y cuál es su papel en la Sinaptogénesis?",
    answer: "Son señales químicas directrices: MAC = Molécula de Adhesión Celular; MT = Molécula Trópica. Su función es guiar y dirigir el camino de los axones hacia sus conexiones diana.",
    examNote: "MAC (Adhesión Celular) y MT (Molécula Trópica) dirigen a los axones químicamente."
  },
  {
    id: "fc-19",
    year: "Muerte Celular",
    category: "Neurodesarrollo Celular",
    question: "¿Cuál es la diferencia fundamental entre Apoptosis y Necrosis neuronal?",
    answer: "Apoptosis: Muerte celular programada fisiológica, que comienza de manera natural al nacimiento. Necrosis: Muerte tóxica, accidental o no natural provocada por lesión celular.",
    examNote: "Apoptosis = programada/fisiológica (inicia al nacer). Necrosis = tóxica / no natural."
  },
  {
    id: "fc-20",
    year: "Mielogénesis",
    category: "Neurodesarrollo Celular",
    question: "¿Qué es la Mielogénesis, cuándo inicia, en qué áreas comienza y hasta qué edad se prolonga?",
    answer: "Es la formación de la capa/célula de mielina que recubre el axón. Comienza desde el nacimiento en las zonas sensoriales y motoras más simples y se prolonga hasta aproximadamente los 7 años de edad.",
    examNote: "Inicia al nacimiento en zonas sensoriales y motoras simples; se prolonga hasta los 7 años."
  },
  {
    id: "fc-21",
    year: "Teratógenos",
    category: "Trastornos y Teratógenos",
    question: "¿Cuáles son los 6 agentes teratógenos clave descritos en clase?",
    answer: "a) Fármacos y drogas, b) Tabaco y alcohol, c) Dieta materna, d) Bienestar emocional de la madre, e) Edad de la madre, f) Enfermedades virales/bacterianas.",
    examNote: "6 teratógenos: Fármacos, tabaco/alcohol, dieta, bienestar emocional, edad materna, infecciones virales/bacterianas."
  },
  {
    id: "fc-22",
    year: "Migración Celular",
    category: "Trastornos y Teratógenos",
    question: "¿Qué malformaciones se asocian a fallos en la migración celular?",
    answer: "a) Lisencefalia, b) Paquigiria, c) Hemimegalencefalia, d) Agenesia total o semitotal del cerebelo, e) Malformación de Chiari, f) Síndrome de Dandy-Walker.",
    examNote: "Lisencefalia, paquigiria, hemimegalencefalia, agenesia cerebelosa, Chiari y Dandy-Walker."
  },
  {
    id: "fc-23",
    year: "Fosa Posterior y Tubo",
    category: "Trastornos y Teratógenos",
    question: "¿Cuál es la diferencia anatómica exacta entre Meningocele y Mielomeningocele?",
    answer: "Meningocele: El saco herniario contiene únicamente piel y líquido (meninges + LCR). Mielomeningocele: Es más severo, contiene piel, médula espinal y líquido cefalorraquídeo.",
    examNote: "Meningocele = Piel y líquido. Mielomeningocele = Piel, médula espinal y líquido cefalorraquídeo."
  }
];

/* =========================================================================
   9. RESUMEN EJECUTIVO PARA EXAMEN (METODO CORNELL Y FORMULAS)
   ========================================================================= */
export const examGuideContent = {
  title: "Guía Rápida de Examen: Desarrollo Ontogenético",
  subtitle: "Resumen concentrado con definiciones literales de clase",
  cornellSummary: [
    "1. El neurodesarrollo inicia con la fecundación (23 pares de cromosomas), pasando por mórula (16 células a los 3 días) y blastocisto, cuyo disco embrionario trilaminar (endodermo, mesodermo y ectodermo) da lugar al cuerpo; el ectodermo origina el SNC (tubo neural) y SNP (crestas neurales) inducido por la notocorda.",
    "2. El extremo cefálico del tubo neural genera 3 vesículas primarias (prosencéfalo, mesencéfalo, rombencéfalo) que dan paso a las secundarias: telencéfalo (corteza y ganglios basales), diencéfalo (tálamos), mesencéfalo (queda igual), metencéfalo (puente y cerebelo) y mielencéfalo (bulbo raquídeo), con ventrículos derivados del ducto central.",
    "3. La 1ª neurona surge el día 7 y la neurogénesis cesa a las 20 semanas, cuando inician diferenciación y maduración (axón más rápido que dendritas); la sinaptogénesis es guiada por MAC y MT; al nacer inicia la apoptosis programada y la mielogénesis se prolonga desde zonas simples hasta los 7 años."
  ]
};
