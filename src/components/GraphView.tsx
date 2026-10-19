import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import { DataSet } from 'vis-data';
import { NeuroNode } from '../types';
import { neuroNodes, neuroEdges } from '../data/neuroData';
import { 
  Crosshair, 
  Plus, 
  Minus, 
  Dna, 
  Brain, 
  Link as LinkIcon, 
  Sparkles, 
  Activity, 
  Pin, 
  Network as NetworkIcon,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

export const GraphView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkInstanceRef = useRef<any>(null);
  const nodesDataSetRef = useRef<any>(null);
  const edgesDataSetRef = useRef<any>(null);

  const [selectedNode, setSelectedNode] = useState<NeuroNode>(() => {
    return neuroNodes.find(n => n.id === 1) || neuroNodes[0];
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [nodeSearchTerm, setNodeSearchTerm] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const initNetwork = () => {
      if (!containerRef.current) return;

      try {
        const formattedNodes = neuroNodes.map(node => {
          let bgColor = "#fdfbf7";
          let borderColor = node.colorGroup || "#2b553c";
          let fontColor = "#231f1c";

          if (node.id === 1) {
            bgColor = "#2b553c";
            borderColor = "#1b3a28";
            fontColor = "#ffffff";
          } else if (node.group === "embrion") {
            bgColor = "#f0f6f9";
            borderColor = "#205b76";
            fontColor = "#0c3b52";
          } else if (node.group === "laminas") {
            bgColor = "#faf3e6";
            borderColor = "#8c5e3c";
            fontColor = "#451a03";
          } else if (node.group === "tubo") {
            bgColor = "#edf5f0";
            borderColor = "#2b553c";
            fontColor = "#162e21";
          } else if (node.group === "vesiculas") {
            bgColor = "#fdf5ee";
            borderColor = "#944920";
            fontColor = "#522510";
          } else if (node.group === "celular") {
            bgColor = "#f5efe9";
            borderColor = "#704812";
            fontColor = "#3d2406";
          } else if (node.group === "trastornos") {
            bgColor = "#fef2f2";
            borderColor = "#b91c1c";
            fontColor = "#7f1d1d";
          }

          return {
            id: node.id,
            label: node.label,
            title: `${node.label} (${node.period})`,
            category: node.category,
            group: node.group,
            period: node.period,
            desc: node.desc,
            exam: node.exam,
            color: {
              background: bgColor,
              border: borderColor,
              highlight: {
                background: "#ffb692",
                border: "#944920"
              },
              hover: {
                background: "#faede6",
                border: "#944920"
              }
            },
            borderWidth: 2,
            font: {
              face: "Plus Jakarta Sans, sans-serif",
              size: node.id === 1 ? 16 : 13,
              color: fontColor,
              strokeWidth: node.id === 1 ? 0 : 0.5,
              strokeColor: "#ffffff"
            },
            shape: "box",
            margin: { top: 8, right: 10, bottom: 8, left: 10 },
            shapeProperties: {
              borderRadius: 6
            },
            shadow: {
              enabled: true,
              color: "rgba(92, 61, 40, 0.12)",
              size: 7,
              x: 2,
              y: 3
            }
          };
        });

        const formattedEdges = neuroEdges.map((edge, idx) => ({
          id: idx + 1,
          from: edge.from,
          to: edge.to,
          label: edge.label,
          font: {
            face: "Plus Jakarta Sans, sans-serif",
            size: 10,
            color: "#787169",
            strokeWidth: 2,
            strokeColor: "#fbf8f3",
            align: "middle"
          },
          arrows: edge.arrows || "to",
          color: {
            color: "#c1c8c0",
            highlight: "#944920",
            hover: "#2b553c"
          },
          width: 1.5,
          smooth: {
            type: "cubicBezier",
            roundness: 0.25
          }
        }));

        const nodesDS = new DataSet(formattedNodes);
        const edgesDS = new DataSet(formattedEdges);

        nodesDataSetRef.current = nodesDS;
        edgesDataSetRef.current = edgesDS;

        const data: any = {
          nodes: nodesDS,
          edges: edgesDS
        };

        const options: any = {
          physics: {
            stabilization: {
              iterations: 160
            },
            barnesHut: {
              gravitationalConstant: -4500,
              springConstant: 0.035,
              springLength: 135,
              damping: 0.09
            }
          },
          interaction: {
            hover: true,
            tooltipDelay: 150,
            zoomView: true,
            dragView: true
          }
        };

        if (!isMounted || !containerRef.current) return;
        const network = new Network(containerRef.current, data, options);
        networkInstanceRef.current = network;

        network.on("selectNode", (params: any) => {
          if (params.nodes && params.nodes.length > 0) {
            const clickedId = params.nodes[0];
            const found = neuroNodes.find(n => n.id === clickedId);
            if (found) {
              setSelectedNode(found);
            }
          }
        });

        setTimeout(() => {
          if (network && isMounted) {
            network.selectNodes([1]);
            network.focus(1, {
              scale: 0.95,
              animation: { duration: 600, easingFunction: "easeInOutQuad" }
            });
          }
        }, 300);
      } catch (err) {
        console.error("Error setting up Vis Network:", err);
      }
    };

    initNetwork();

    return () => {
      isMounted = false;
      if (networkInstanceRef.current) {
        networkInstanceRef.current.destroy();
        networkInstanceRef.current = null;
      }
    };
  }, []);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    const nodesDS = nodesDataSetRef.current;
    const network = networkInstanceRef.current;
    if (!nodesDS || !network) return;

    if (cat === 'all') {
      neuroNodes.forEach(n => {
        nodesDS.update({ id: n.id, hidden: false });
      });
    } else {
      neuroNodes.forEach(n => {
        const match = n.category === cat || n.group === cat;
        nodesDS.update({ id: n.id, hidden: !match });
      });
    }

    setTimeout(() => {
      network.fit({
        animation: { duration: 600, easingFunction: "easeInOutQuad" }
      });
    }, 100);
  };

  const handleNodeSelectFromSearch = (nodeId: number) => {
    const network = networkInstanceRef.current;
    const found = neuroNodes.find(n => n.id === nodeId);
    if (found) {
      setSelectedNode(found);
      if (network) {
        network.selectNodes([nodeId]);
        network.focus(nodeId, {
          scale: 1.25,
          animation: { duration: 600, easingFunction: "easeInOutQuad" }
        });
      }
    }
  };

  const zoomIn = () => {
    const network = networkInstanceRef.current;
    if (!network) return;
    const scale = network.getScale();
    network.moveTo({ scale: scale * 1.25, animation: { duration: 250 } });
  };

  const zoomOut = () => {
    const network = networkInstanceRef.current;
    if (!network) return;
    const scale = network.getScale();
    network.moveTo({ scale: scale * 0.8, animation: { duration: 250 } });
  };

  const fitView = () => {
    const network = networkInstanceRef.current;
    if (!network) return;
    network.fit({ animation: { duration: 500, easingFunction: "easeInOutQuad" } });
  };

  // Find incoming & outgoing connected nodes
  const connectedEdges = neuroEdges.filter(
    e => e.from === selectedNode.id || e.to === selectedNode.id
  );
  const relatedNodeIds = Array.from(
    new Set(
      connectedEdges.map(e => (e.from === selectedNode.id ? e.to : e.from))
    )
  );
  const relatedNodes = neuroNodes.filter(n => relatedNodeIds.includes(n.id));

  return (
    <div id="view-graph" className="space-y-6 font-sans">
      {/* Controls Bar */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2b553c]/10 text-[#2b553c] flex items-center justify-center flex-shrink-0">
              <NetworkIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#292420]">
                Mapa Conceptual de Ontogenia
              </h2>
              <p className="text-xs text-[#787169]">
                Esquema de relaciones: fecundación, 3 láminas, tubo neural, vesículas y neurodesarrollo celular
              </p>
            </div>
          </div>

          {/* Quick Node Search Select */}
          <div className="flex items-center gap-2">
            <select
              value={selectedNode.id}
              onChange={(e) => handleNodeSelectFromSearch(Number(e.target.value))}
              className="px-3 py-1.5 text-xs bg-[#fbf8f5] border border-[#d4cbc2] rounded-lg text-[#231f1c] focus:outline-none focus:ring-1 focus:ring-[#2b553c] font-medium"
            >
              <optgroup label="Hitos del Grafo">
                {neuroNodes.map(n => (
                  <option key={n.id} value={n.id}>
                    {n.label} ({n.category})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-[#d4cbc2]/40 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-[#787169] mr-1 uppercase tracking-wider flex-shrink-0">
            Filtrar:
          </span>
          <button
            onClick={() => handleFilter('all')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'all'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Todos ({neuroNodes.length})
          </button>
          <button
            onClick={() => handleFilter('Embriogénesis Temprana')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Embriogénesis Temprana'
                ? 'bg-[#205b76] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Fecundación y Cigoto
          </button>
          <button
            onClick={() => handleFilter('Láminas Embrionarias')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Láminas Embrionarias'
                ? 'bg-[#8c5e3c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            3 Láminas
          </button>
          <button
            onClick={() => handleFilter('Tubo Neural y Notocorda')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Tubo Neural y Notocorda'
                ? 'bg-[#2b553c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Tubo & Notocorda
          </button>
          <button
            onClick={() => handleFilter('Vesículas Encefálicas')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Vesículas Encefálicas'
                ? 'bg-[#944920] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Vesículas
          </button>
          <button
            onClick={() => handleFilter('Neurodesarrollo Celular')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Neurodesarrollo Celular'
                ? 'bg-[#704812] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Fase Celular
          </button>
          <button
            onClick={() => handleFilter('Trastornos y Teratógenos')}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer flex-shrink-0 ${
              activeFilter === 'Trastornos y Teratógenos'
                ? 'bg-[#b91c1c] text-white shadow-xs'
                : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ebe3dc]'
            }`}
          >
            Trastornos & Teratógenos
          </button>
        </div>
      </div>

      {/* Main Grid: Network Canvas + Detail Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Network Canvas Column */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#d4cbc2] overflow-hidden shadow-xs flex flex-col relative">
          <div 
            ref={containerRef} 
            className="w-full h-[580px] bg-notebook focus:outline-none"
          />

          {/* Canvas Floating Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-1.5 bg-white/90 backdrop-blur-xs p-1.5 rounded-xl border border-[#d4cbc2] shadow-sm z-10">
            <button
              onClick={zoomIn}
              title="Acercar (Zoom In)"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#49423c] hover:bg-[#f5efe9] hover:text-[#231f1c] transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={zoomOut}
              title="Alejar (Zoom Out)"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#49423c] hover:bg-[#f5efe9] hover:text-[#231f1c] transition cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={fitView}
              title="Centrar Todo el Mapa"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#49423c] hover:bg-[#f5efe9] hover:text-[#231f1c] transition cursor-pointer"
            >
              <Crosshair className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-[#fbf8f5] border-t border-[#d4cbc2] text-[11px] text-[#787169] flex items-center justify-between">
            <span>Arrastra para rotar o mover nodos • Clic en un nodo para inspeccionar detalles</span>
            <span className="font-mono text-[10px]">{neuroNodes.length} nodos • {neuroEdges.length} conexiones</span>
          </div>
        </div>

        {/* Selected Node Details Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b border-[#d4cbc2]/60 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: selectedNode.colorGroup || '#2b553c' }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#787169]">
                  {selectedNode.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#292420]">
                {selectedNode.label}
              </h3>
              <p className="text-xs text-[#704812] font-semibold mt-0.5">
                {selectedNode.period}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#787169]">
                Descripción de Clase:
              </span>
              <p className="text-xs sm:text-sm text-[#38332e] leading-relaxed">
                {selectedNode.desc}
              </p>
            </div>

            {/* Exam Highlight */}
            {selectedNode.exam && (
              <div className="bg-[#fef7e6] p-3.5 rounded-xl border border-amber-300 text-xs text-amber-950 space-y-1">
                <p className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                  <span>Dato Crítico para el Examen:</span>
                </p>
                <p className="leading-relaxed">
                  {selectedNode.exam}
                </p>
              </div>
            )}

            {/* Connected Nodes */}
            {relatedNodes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#d4cbc2]/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#787169]">
                  Estructuras Vinculadas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {relatedNodes.map(rNode => (
                    <button
                      key={rNode.id}
                      onClick={() => handleNodeSelectFromSearch(rNode.id)}
                      className="px-2.5 py-1 text-xs bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#38332e] rounded-lg border border-[#d4cbc2]/60 transition cursor-pointer font-medium"
                    >
                      {rNode.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
