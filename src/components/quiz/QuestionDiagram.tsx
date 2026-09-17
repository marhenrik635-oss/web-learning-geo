'use client';

import React, { useState } from 'react';
import { Question } from '../../types/geo';
import { Eye, Info, Sparkles, Layers, Compass, Mountain, Waves, CloudSun, Map, Users, Building2, TrendingUp, AlertTriangle } from 'lucide-react';

interface QuestionDiagramProps {
  question: Question;
}

export default function QuestionDiagram({ question }: QuestionDiagramProps) {
  const [showDetail, setShowDetail] = useState(false);
  const qText = (question.question + ' ' + (question.ksrCategory || '')).toLowerCase();

  // Helper to determine the diagram type based on question contents
  const getDiagramType = () => {
    // 1. Geologi & Seismik
    if (qText.includes('gelombang s') || qText.includes('gelombang p') || qText.includes('shadow zone') || qText.includes('seismik') || qText.includes('gutenberg') || qText.includes('moho') || qText.includes('lehmann') || qText.includes('inti luar') || qText.includes('mantel')) {
      return 'seismic_interior';
    }
    if (qText.includes('peta') && (qText.includes('kontur') || qText.includes('skala') || qText.includes('ci ') || qText.includes('kelerengan') || qText.includes('rule of v') || qText.includes('lembah') || qText.includes('lereng'))) {
      return 'contour_cartography';
    }
    if (qText.includes('sesar') || qText.includes('patahan') || qText.includes('horst') || qText.includes('graben') || qText.includes('antiklin') || qText.includes('sinklin') || qText.includes('thrust fault')) {
      return 'faults_folds';
    }
    if (qText.includes('lempeng') || qText.includes('mid-atlantic') || qText.includes('subduksi') || qText.includes('divergen') || qText.includes('konvergen') || qText.includes('transform') || qText.includes('paleomagnetisme')) {
      return 'plate_tectonics';
    }
    if (qText.includes('bowen') || qText.includes('olivin') || qText.includes('piroksen') || qText.includes('kuarsa') || qText.includes('batuan beku') || qText.includes('granit') || qText.includes('basalt') || qText.includes('faneritik')) {
      return 'bowen_series';
    }
    if (qText.includes('wilson') || qText.includes('siklus wilson') || qText.includes('cekungan samudra')) {
      return 'wilson_cycle';
    }

    // 2. Hidrologi & Oseanografi & Geomorfologi Fluvial
    if (qText.includes('hjulstrom') || qText.includes('meander') || qText.includes('oxbow') || qText.includes('sedimentasi') || qText.includes('kecepatan aliran') || qText.includes('sungai')) {
      return 'hjulstrom_fluvial';
    }
    if (qText.includes('unclos') || qText.includes('zee') || qText.includes('laut teritorial') || qText.includes('landas kontinen') || qText.includes('zona tambahan') || qText.includes('laut bebas')) {
      return 'unclos_maritime';
    }
    if (qText.includes('pasang') || qText.includes('spring tide') || qText.includes('neap tide') || qText.includes('termohalin') || qText.includes('upwelling') || qText.includes('arus laut')) {
      return 'tides_ocean';
    }
    if (qText.includes('karst') || qText.includes('doline') || qText.includes('stalaktit') || qText.includes('stalagmit') || qText.includes('uvala') || qText.includes('polje')) {
      return 'karst_landscape';
    }
    if (qText.includes('barchan') || qText.includes('eolian') || qText.includes('duna') || qText.includes('yardang') || qText.includes('gurun') || qText.includes('arid') || qText.includes('glasial') || qText.includes('cirque') || qText.includes('moraine')) {
      return 'arid_glacial';
    }

    // 3. Atmosfer & Iklim
    if (qText.includes('dalr') || qText.includes('salr') || qText.includes('elr') || qText.includes('lapse rate') || qText.includes('adiabatik') || qText.includes('inversi') || qText.includes('troposfer') || qText.includes('stratosfer') || qText.includes('ozon')) {
      return 'atmosphere_lapse';
    }
    if (qText.includes('köppen') || qText.includes('koppen') || qText.includes('schmidt-ferguson') || qText.includes('oldeman') || qText.includes('af') || qText.includes('am') || qText.includes('aw') || qText.includes('iklim')) {
      return 'climate_classification';
    }
    if (qText.includes('hadley') || qText.includes('ferrel') || qText.includes('polar') || qText.includes('fohn') || qText.includes('el niño') || qText.includes('la niña') || qText.includes('walker') || qText.includes('angin')) {
      return 'circulation_winds';
    }

    // 4. Manusia & Ruang (Von Thunen, Weber, Burgess/Hoyt, Christaller, DTM, Piramida)
    if (qText.includes('von thünen') || qText.includes('von thunen') || qText.includes('bid-rent') || qText.includes('pertanian') || qText.includes('sewa tanah')) {
      return 'von_thunen';
    }
    if (qText.includes('weber') || qText.includes('indeks material') || qText.includes('lokasi industri') || qText.includes('isodapane') || qText.includes('segitiga lokasi')) {
      return 'weber_industry';
    }
    if (qText.includes('burgess') || qText.includes('hoyt') || qText.includes('harris') || qText.includes('ullman') || qText.includes('konsentris') || qText.includes('sektoral') || qText.includes('inti berganda') || qText.includes('cbd')) {
      return 'urban_morphology';
    }
    if (qText.includes('christaller') || qText.includes('tempat sentral') || qText.includes('k=3') || qText.includes('k=4') || qText.includes('k=7') || qText.includes('heksagonal') || qText.includes('gravitasi') || qText.includes('titik henti') || qText.includes('carrothers')) {
      return 'christaller_central';
    }
    if (qText.includes('dtm') || qText.includes('transisi demografi') || qText.includes('piramida') || qText.includes('kelahiran') || qText.includes('kematian') || qText.includes('dependency ratio') || qText.includes('rasio ketergantungan') || qText.includes('penduduk')) {
      return 'demography_pyramid';
    }
    if (qText.includes('butler') || qText.includes('talc') || qText.includes('doxey') || qText.includes('pariwisata') || qText.includes('destinasi') || qText.includes('plog')) {
      return 'tourism_lifecycle';
    }
    if (qText.includes('difusi') || qText.includes('hägerstrand') || qText.includes('kontagius') || qText.includes('hierarkis') || qText.includes('budaya') || qText.includes('toponimi')) {
      return 'cultural_diffusion';
    }
    if (qText.includes('sig') || qText.includes('raster') || qText.includes('vektor') || qText.includes('overlay') || qText.includes('buffer') || qText.includes('kartografi') || qText.includes('proyeksi')) {
      return 'sig_cartography';
    }
    if (qText.includes('risiko') || qText.includes('bencana') || qText.includes('hazard') || qText.includes('vulnerability') || qText.includes('kapasitas') || qText.includes('richter') || qText.includes('mmi') || qText.includes('vei')) {
      return 'disaster_risk';
    }
    if (qText.includes('sdgs') || qText.includes('amdal') || qText.includes('lingkungan') || qText.includes('ebt') || qText.includes('tambang') || qText.includes('mineral')) {
      return 'resources_sdgs';
    }

    // Default fallback based on moduleId
    switch (question.moduleId) {
      case 'geologi':
        return 'plate_tectonics';
      case 'geomorfologi':
        return 'hjulstrom_fluvial';
      case 'oseanografi-hidrologi':
        return 'unclos_maritime';
      case 'meteorologi-klimatologi':
        return 'atmosphere_lapse';
      case 'kartografi-sig':
        return 'contour_cartography';
      case 'geografi-pertanian':
        return 'von_thunen';
      case 'geografi-ekonomi':
        return 'weber_industry';
      case 'geografi-kota':
        return 'urban_morphology';
      case 'kependudukan':
        return 'demography_pyramid';
      case 'pariwisata':
        return 'tourism_lifecycle';
      case 'kebencanaan':
        return 'disaster_risk';
      default:
        return 'contour_cartography';
    }
  };

  const diagramType = getDiagramType();

  return (
    <div className="overflow-hidden rounded-xl border border-blue-200/70 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 p-4 shadow-2xs">
      {/* Diagram Header */}
      <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white shadow-2xs">
            <Layers className="h-3.5 w-3.5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">
                Diagram Rekayasa &amp; Analisis Visual Soal
              </span>
              <span className="rounded bg-blue-100/80 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-800">
                KSR SPATIAL MAP
              </span>
            </div>
            <p className="text-[10px] text-slate-500">
              Rujukan visual ilmiah untuk memecahkan pertanyaan di atas
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowDetail(!showDetail)}
          className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 active:scale-95"
        >
          <Info className="h-3 w-3 text-blue-600" />
          {showDetail ? 'Sembunyikan Kunci' : 'Bedah Komponen'}
        </button>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative flex min-h-[170px] w-full items-center justify-center rounded-lg border border-slate-200 bg-white p-2">
        {/* 1. SEISMIC SHADOW ZONE & INTERIOR */}
        {diagramType === 'seismic_interior' && (
          <svg viewBox="0 0 500 200" className="h-auto w-full max-w-[480px]">
            {/* Outer circles (Earth Layers) */}
            <circle cx="250" cy="100" r="90" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
            <circle cx="250" cy="100" r="62" fill="#fed7aa" stroke="#ea580c" strokeDasharray="3,3" />
            <circle cx="250" cy="100" r="48" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="250" cy="100" r="22" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            
            {/* Ray Paths */}
            <path d="M 250,10 C 290,40 310,70 330,100" fill="none" stroke="#2563eb" strokeWidth="2" />
            <path d="M 250,10 C 210,40 190,70 170,100" fill="none" stroke="#2563eb" strokeWidth="2" />
            {/* P-wave refraction into core */}
            <path d="M 250,10 L 260,60 L 270,140 L 275,188" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="4,2" />
            <path d="M 250,10 L 240,60 L 230,140 L 225,188" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="4,2" />
            
            {/* Shadow zone wedges */}
            <path d="M 250,100 L 335,125 A 90 90 0 0 1 310,172 Z" fill="#94a3b8" opacity="0.35" />
            <path d="M 250,100 L 165,125 A 90 90 0 0 0 190,172 Z" fill="#94a3b8" opacity="0.35" />

            {/* Labels */}
            <text x="250" y="8" textAnchor="middle" className="text-[10px] font-bold fill-red-600">Fokus Gempa (0°)</text>
            <text x="250" y="103" textAnchor="middle" className="text-[9px] font-bold fill-white">Inti Padat</text>
            <text x="250" y="70" textAnchor="middle" className="text-[9px] font-bold fill-amber-900">Inti Luar Cair (Fluida)</text>
            <text x="355" y="60" className="text-[9px] font-semibold fill-slate-700">Mantel Padat</text>
            <text x="345" y="145" className="text-[8px] font-bold fill-rose-700">Shadow Zone S (&gt;103°)</text>
            <text x="75" y="145" className="text-[8px] font-bold fill-rose-700">Zona Bayangan S (&gt;103°)</text>
            <text x="250" y="196" textAnchor="middle" className="text-[9px] font-bold fill-emerald-700">P-Wave Muncul Kembali (142°-180°)</text>
          </svg>
        )}

        {/* 2. FAULTS & FOLDS (HORST & GRABEN / REVERSE / ANTICLINE) */}
        {diagramType === 'faults_folds' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Horst & Graben Blocks */}
            <polygon points="40,90 140,90 120,170 20,170" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            <polygon points="145,120 265,120 245,180 125,180" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" />
            <polygon points="270,90 370,90 350,170 250,170" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
            
            {/* Arrows */}
            <path d="M 80,75 L 80,55" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 205,135 L 205,155" stroke="#b91c1c" strokeWidth="2" />
            <path d="M 310,75 L 310,55" stroke="#1d4ed8" strokeWidth="2" />

            {/* Labels */}
            <text x="80" y="48" textAnchor="middle" className="text-[10px] font-bold fill-blue-800">HORST (Blok Naik)</text>
            <text x="205" y="112" textAnchor="middle" className="text-[10px] font-bold fill-red-800">GRABEN / SLENK (Blok Turun)</text>
            <text x="310" y="48" textAnchor="middle" className="text-[10px] font-bold fill-blue-800">HORST (Blok Naik)</text>
            <text x="430" y="110" className="text-[9px] font-semibold fill-slate-600">Bidang Sesar Normal</text>
            <line x1="370" y1="90" x2="425" y2="105" stroke="#64748b" strokeDasharray="2,2" />
            <text x="250" y="186" textAnchor="middle" className="text-[9px] font-mono fill-slate-500">Gaya Tegang Tektonik (Tensional Stress)</text>
          </svg>
        )}

        {/* 3. PLATE TECTONICS (SUBDUCTION / DIVERGENT MOR) */}
        {diagramType === 'plate_tectonics' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Oceanic Crust subducting under Continental Crust */}
            <path d="M 20,95 L 180,95 L 250,165 L 210,175 L 140,110 L 20,110 Z" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.5" />
            {/* Ocean */}
            <polygon points="20,70 170,70 190,95 20,95" fill="#bae6fd" opacity="0.6" />
            {/* Continental Plate */}
            <polygon points="200,95 460,95 460,170 260,170 210,120" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
            {/* Volcano arc */}
            <polygon points="300,95 330,45 360,95" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
            <circle cx="330" cy="40" r="4" fill="#ef4444" />
            {/* Magma Plume */}
            <path d="M 240,150 Q 280,120 330,60" stroke="#ef4444" strokeWidth="3" strokeDasharray="3,2" fill="none" />

            {/* Labels */}
            <text x="70" y="65" className="text-[9px] font-bold fill-sky-800">Lempeng Samudra (Densitas Tinggi)</text>
            <text x="180" y="110" className="text-[8px] font-bold fill-indigo-900">Palung (Trench)</text>
            <text x="330" y="32" textAnchor="middle" className="text-[9px] font-bold fill-red-700">Busur Magmatik / Vulkanik</text>
            <text x="380" y="115" className="text-[9px] font-bold fill-amber-900">Kerak Benua (Granitis)</text>
            <text x="250" y="185" textAnchor="middle" className="text-[9px] font-semibold fill-slate-500">Zona Subduksi (Wadati-Benioff Zone)</text>
          </svg>
        )}

        {/* 4. CONTOUR & CARTOGRAPHY (INTERVAL, SLOPE, RULE OF V's) */}
        {diagramType === 'contour_cartography' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Left: River Valley with Rule of V's */}
            <g transform="translate(15, 10)">
              <rect x="0" y="0" width="220" height="160" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              {/* Contours pointing upstream (V pointing up) */}
              <path d="M 20,140 Q 110,110 200,140" fill="none" stroke="#b45309" strokeWidth="1.5" />
              <path d="M 30,110 Q 110,75 190,110" fill="none" stroke="#b45309" strokeWidth="1.5" />
              <path d="M 45,80 Q 110,40 175,80" fill="none" stroke="#b45309" strokeWidth="2" />
              {/* River cutting through */}
              <path d="M 110,30 L 110,150" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="3,1" />
              
              <text x="110" y="22" textAnchor="middle" className="text-[9px] font-bold fill-blue-700">Hulu (Elevasi Tinggi)</text>
              <text x="110" y="60" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">100 m</text>
              <text x="110" y="95" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">75 m</text>
              <text x="110" y="130" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">50 m</text>
              <text x="110" y="157" textAnchor="middle" className="text-[8px] font-bold fill-blue-700">Hilir (Aliran Sungai ↓)</text>
            </g>

            {/* Right: Slope Steepness Profile (Rapat = Curam, Renggang = Landai) */}
            <g transform="translate(255, 10)">
              <rect x="0" y="0" width="230" height="160" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              {/* Mountain Profile */}
              <path d="M 15,140 Q 60,135 100,50 Q 160,110 215,140" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
              {/* Steep vs Gentle labels */}
              <text x="50" y="70" className="text-[9px] font-bold fill-rose-700">Kontur Rapat =</text>
              <text x="50" y="83" className="text-[9px] font-bold fill-rose-700">LERENG CURAM</text>
              
              <text x="145" y="70" className="text-[9px] font-bold fill-emerald-700">Kontur Renggang =</text>
              <text x="145" y="83" className="text-[9px] font-bold fill-emerald-700">LERENG LANDAI</text>
              
              <text x="115" y="155" textAnchor="middle" className="text-[9px] font-mono font-bold fill-indigo-700">CI = 1/2000 × Skala</text>
            </g>
          </svg>
        )}

        {/* 5. BOWEN REACTION SERIES */}
        {diagramType === 'bowen_series' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* High Temp Arrow */}
            <line x1="20" y1="30" x2="20" y2="160" stroke="#dc2626" strokeWidth="3" />
            <text x="15" y="20" className="text-[9px] font-bold fill-red-600">Suhu Tinggi (~1200°C)</text>
            <text x="15" y="180" className="text-[9px] font-bold fill-blue-600">Suhu Rendah (~700°C)</text>

            {/* Discontinuous Branch */}
            <g transform="translate(60, 25)">
              <rect x="0" y="0" width="130" height="24" rx="4" fill="#86efac" stroke="#15803d" />
              <text x="65" y="16" textAnchor="middle" className="text-[9px] font-bold fill-emerald-950">Olivin (Ultramafik)</text>

              <rect x="0" y="32" width="130" height="24" rx="4" fill="#bbf7d0" stroke="#16a34a" />
              <text x="65" y="48" textAnchor="middle" className="text-[9px] font-bold fill-emerald-900">Piroksen (Mafik)</text>

              <rect x="0" y="64" width="130" height="24" rx="4" fill="#cbd5e1" stroke="#475569" />
              <text x="65" y="80" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">Amfibol (Intermediet)</text>

              <rect x="0" y="96" width="130" height="24" rx="4" fill="#e2e8f0" stroke="#64748b" />
              <text x="65" y="112" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Biotit (Felsik)</text>
            </g>

            {/* Continuous Branch */}
            <g transform="translate(290, 25)">
              <rect x="0" y="0" width="170" height="40" rx="4" fill="#fed7aa" stroke="#c2410c" />
              <text x="85" y="18" textAnchor="middle" className="text-[9px] font-bold fill-amber-950">Plagioklas Kaya-Ca</text>
              <text x="85" y="32" textAnchor="middle" className="text-[8px] fill-amber-800">(Anortit)</text>

              <line x1="85" y1="45" x2="85" y2="75" stroke="#ea580c" strokeWidth="2" strokeDasharray="3,3" />

              <rect x="0" y="80" width="170" height="40" rx="4" fill="#ffedd5" stroke="#f97316" />
              <text x="85" y="98" textAnchor="middle" className="text-[9px] font-bold fill-orange-950">Plagioklas Kaya-Na</text>
              <text x="85" y="112" textAnchor="middle" className="text-[8px] fill-orange-800">(Albit)</text>
            </g>

            {/* Final Low-temp Minerals */}
            <g transform="translate(160, 152)">
              <rect x="0" y="0" width="160" height="26" rx="6" fill="#e0e7ff" stroke="#4338ca" />
              <text x="80" y="17" textAnchor="middle" className="text-[9px] font-bold fill-indigo-950">K-Feldspar → Muskovit → KUARSA</text>
            </g>
          </svg>
        )}

        {/* 6. UNCLOS MARITIME BOUNDARIES */}
        {diagramType === 'unclos_maritime' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Coastline Profile */}
            <path d="M 20,70 L 60,85 L 120,95 L 220,110 L 320,125 L 420,165 L 480,175" fill="none" stroke="#64748b" strokeWidth="2" />
            {/* Sea level */}
            <line x1="60" y1="85" x2="480" y2="85" stroke="#0284c7" strokeWidth="2" />
            <polygon points="60,85 480,85 480,180 20,180 20,70" fill="#e0f2fe" opacity="0.3" />

            {/* Vertical demarcation lines */}
            <line x1="60" y1="30" x2="60" y2="120" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="120" y1="30" x2="120" y2="120" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="180" y1="30" x2="180" y2="130" stroke="#0d9488" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="330" y1="30" x2="330" y2="150" stroke="#2563eb" strokeWidth="2" />

            {/* Zone tags */}
            <text x="40" y="55" textAnchor="middle" className="text-[8px] font-bold fill-slate-700">Daratan</text>
            <text x="90" y="50" textAnchor="middle" className="text-[8px] font-bold fill-blue-800">Laut Teritorial</text>
            <text x="90" y="63" textAnchor="middle" className="text-[8px] font-mono fill-blue-600">(12 Mil)</text>

            <text x="150" y="50" textAnchor="middle" className="text-[8px] font-bold fill-teal-800">Zona Tambahan</text>
            <text x="150" y="63" textAnchor="middle" className="text-[8px] font-mono fill-teal-600">(24 Mil)</text>

            <text x="255" y="45" textAnchor="middle" className="text-[9px] font-bold fill-blue-900">Zona Ekonomi Eksklusif (ZEE)</text>
            <text x="255" y="60" textAnchor="middle" className="text-[9px] font-mono font-bold fill-blue-700">200 Mil Laut</text>

            <text x="410" y="50" textAnchor="middle" className="text-[9px] font-bold fill-indigo-900">Laut Lepas / Bebas</text>
            <text x="255" y="175" textAnchor="middle" className="text-[9px] font-bold fill-slate-600">Landas Kontinen (Dasar Laut &amp; Tanah di Bawahnya)</text>
          </svg>
        )}

        {/* 7. HJULSTROM CURVE (EROSION / TRANSPORT / SEDIMENTATION) */}
        {diagramType === 'hjulstrom_fluvial' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Axes */}
            <line x1="50" y1="160" x2="470" y2="160" stroke="#334155" strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="160" stroke="#334155" strokeWidth="2" />
            
            <text x="260" y="180" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Diameter Butir (Lempung → Pasir → Kerikil → Bongkah)</text>
            <text x="35" y="30" textAnchor="end" className="text-[9px] font-bold fill-slate-700">Kecepatan Arus (cm/s)</text>

            {/* Erosion Velocity Curve (Cohesion anomaly for clay) */}
            <path d="M 50,45 Q 110,105 200,90 T 360,45 T 470,25" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            {/* Deposition/Settling Velocity Curve */}
            <path d="M 50,158 Q 140,155 240,135 T 380,85 T 470,45" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="4,2" />

            {/* Region fills / labels */}
            <text x="220" y="40" className="text-[10px] font-bold fill-rose-700">ZONA EROSI</text>
            <text x="230" y="115" className="text-[10px] font-bold fill-amber-700">ZONA TRANSPORTASI</text>
            <text x="320" y="150" className="text-[10px] font-bold fill-sky-700">ZONA SEDIMENTASI</text>
            <text x="80" y="65" className="text-[8px] font-semibold fill-red-800">Kohesi Lempung Tinggi!</text>
          </svg>
        )}

        {/* 8. ATMOSPHERE LAPSE RATE & CIRCULATION */}
        {(diagramType === 'atmosphere_lapse' || diagramType === 'circulation_winds') && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Left: 3 Circulation Cells */}
            <g transform="translate(10, 15)">
              <rect x="0" y="0" width="220" height="150" rx="8" fill="#f0f9ff" stroke="#bae6fd" />
              <text x="110" y="20" textAnchor="middle" className="text-[10px] font-bold fill-sky-900">3 Sel Sirkulasi Meridional</text>
              
              {/* Hadley Cell */}
              <rect x="15" y="35" width="60" height="60" rx="4" fill="#fed7aa" opacity="0.7" />
              <text x="45" y="60" textAnchor="middle" className="text-[8px] font-bold fill-amber-950">Sel Hadley</text>
              <text x="45" y="73" textAnchor="middle" className="text-[7px] fill-amber-800">0° - 30°</text>

              {/* Ferrel Cell */}
              <rect x="80" y="35" width="60" height="60" rx="4" fill="#bbf7d0" opacity="0.7" />
              <text x="110" y="60" textAnchor="middle" className="text-[8px] font-bold fill-emerald-950">Sel Ferrel</text>
              <text x="110" y="73" textAnchor="middle" className="text-[7px] fill-emerald-800">30° - 60°</text>

              {/* Polar Cell */}
              <rect x="145" y="35" width="60" height="60" rx="4" fill="#e0e7ff" opacity="0.7" />
              <text x="175" y="60" textAnchor="middle" className="text-[8px] font-bold fill-indigo-950">Sel Polar</text>
              <text x="175" y="73" textAnchor="middle" className="text-[7px] fill-indigo-800">60° - 90°</text>

              <text x="110" y="115" textAnchor="middle" className="text-[8px] font-bold fill-red-700">ITCZ (Zona Konvergensi Antar-Tropis di 0°)</text>
              <text x="110" y="132" textAnchor="middle" className="text-[8px] font-semibold fill-slate-600">Angin Pasat Timur Laut &amp; Pasat Tenggara</text>
            </g>

            {/* Right: Orographic Fohn Wind */}
            <g transform="translate(245, 15)">
              <rect x="0" y="0" width="240" height="150" rx="8" fill="#fafaf9" stroke="#e7e5e4" />
              <text x="120" y="18" textAnchor="middle" className="text-[10px] font-bold fill-slate-800">Skema Angin Fohn (Jatuh Kering)</text>
              
              {/* Mountain Shape */}
              <polygon points="20,135 110,40 220,135" fill="#d6d3d1" stroke="#78716c" strokeWidth="1.5" />
              {/* Rain cloud on windward side */}
              <circle cx="65" cy="55" r="14" fill="#93c5fd" />
              <text x="65" y="85" textAnchor="middle" className="text-[8px] font-bold fill-blue-800">Hujan Orografis</text>
              <text x="65" y="97" textAnchor="middle" className="text-[7px] fill-blue-600">(Basah &amp; Sejuk)</text>

              {/* Leeward / Dry hot wind */}
              <path d="M 125,45 Q 160,80 200,120" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow)" fill="none" />
              <text x="170" y="75" className="text-[8px] font-bold fill-rose-700">Angin Fohn:</text>
              <text x="170" y="88" className="text-[7px] font-bold fill-rose-600">PANAS &amp; KERING</text>
              <text x="120" y="145" textAnchor="middle" className="text-[7px] font-mono fill-slate-500">Gending, Kumbang, Bahorok, Brubu, Wambraw</text>
            </g>
          </svg>
        )}

        {/* 9. VON THUNEN AGRICULTURAL RINGS */}
        {diagramType === 'von_thunen' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Concentric rings */}
            <circle cx="160" cy="95" r="85" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="160" cy="95" r="65" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="160" cy="95" r="45" fill="#ecfccb" stroke="#65a30d" strokeWidth="1.5" />
            <circle cx="160" cy="95" r="25" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="160" cy="95" r="8" fill="#1e293b" />

            {/* Center Legend */}
            <text x="160" y="98" textAnchor="middle" className="text-[7px] font-bold fill-white">Kota</text>

            {/* Right: Legend & Formula */}
            <g transform="translate(265, 20)">
              <text x="0" y="10" className="text-[10px] font-bold fill-slate-900">4 Cincin Konsentris Von Thünen</text>
              
              <rect x="0" y="22" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" />
              <text x="18" y="32" className="text-[9px] font-semibold fill-slate-800">Cincin 1: Sayuran Segar &amp; Susu (Perishable)</text>

              <rect x="0" y="42" width="12" height="12" rx="2" fill="#ecfccb" stroke="#65a30d" />
              <text x="18" y="52" className="text-[9px] font-semibold fill-slate-800">Cincin 2: Kayu Bakar &amp; Hutan Produksi (Heavy)</text>

              <rect x="0" y="62" width="12" height="12" rx="2" fill="#ffedd5" stroke="#ea580c" />
              <text x="18" y="72" className="text-[9px] font-semibold fill-slate-800">Cincin 3: Tanaman Pangan &amp; Gandum (Crop Rotation)</text>

              <rect x="0" y="82" width="12" height="12" rx="2" fill="#fef3c7" stroke="#d97706" />
              <text x="18" y="92" className="text-[9px] font-semibold fill-slate-800">Cincin 4: Peternakan Ekstensif (Ranching)</text>

              <rect x="0" y="110" width="220" height="30" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="110" y="128" textAnchor="middle" className="text-[9px] font-mono font-bold fill-indigo-900">Sewa Lahan = Hasil × (Harga - Biaya - Tarif×Jarak)</text>
            </g>
          </svg>
        )}

        {/* 10. WEBER INDUSTRIAL LOCATION (TRIANGLE & MATERIAL INDEX) */}
        {diagramType === 'weber_industry' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Weber Locational Triangle */}
            <polygon points="120,40 50,150 190,150" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
            
            <circle cx="120" cy="40" r="12" fill="#2563eb" />
            <text x="120" y="44" textAnchor="middle" className="text-[9px] font-bold fill-white">M</text>
            <text x="120" y="24" textAnchor="middle" className="text-[9px] font-bold fill-blue-800">Pasar (Market)</text>

            <circle cx="50" cy="150" r="12" fill="#d97706" />
            <text x="50" y="154" textAnchor="middle" className="text-[9px] font-bold fill-white">R1</text>
            <text x="50" y="172" textAnchor="middle" className="text-[8px] font-bold fill-amber-800">Bahan Baku 1</text>

            <circle cx="190" cy="150" r="12" fill="#d97706" />
            <text x="190" y="154" textAnchor="middle" className="text-[9px] font-bold fill-white">R2</text>
            <text x="190" y="172" textAnchor="middle" className="text-[8px] font-bold fill-amber-800">Bahan Baku 2</text>

            {/* Optimal Plant Location */}
            <circle cx="115" cy="120" r="8" fill="#ef4444" />
            <text x="115" y="110" textAnchor="middle" className="text-[8px] font-bold fill-red-700">Pabrik (P)</text>

            {/* Right: Decision Rules */}
            <g transform="translate(240, 25)">
              <text x="0" y="10" className="text-[10px] font-bold fill-slate-900">Indeks Material (IM) Alfred Weber</text>
              
              <rect x="0" y="25" width="240" height="40" rx="6" fill="#fef2f2" stroke="#fca5a5" />
              <text x="10" y="42" className="text-[9px] font-bold fill-red-800">IM &gt; 1 (Bobot Menyusut / Weight-Losing):</text>
              <text x="10" y="55" className="text-[8px] fill-red-700">Pabrik didirikan dekat BAHAN BAKU (Tambang, Pengolahan Sawit)</text>

              <rect x="0" y="75" width="240" height="40" rx="6" fill="#f0fdf4" stroke="#86efac" />
              <text x="10" y="92" className="text-[9px] font-bold fill-emerald-800">IM &lt; 1 (Bobot Bertambah / Weight-Gaining):</text>
              <text x="10" y="105" className="text-[8px] fill-emerald-700">Pabrik didirikan dekat PASAR (Pabrik Minuman, Roti, Rakitan)</text>

              <text x="120" y="138" textAnchor="middle" className="text-[8px] font-mono fill-slate-500">IM = Berat Bahan Baku / Berat Produk Jadi</text>
            </g>
          </svg>
        )}

        {/* 11. URBAN MORPHOLOGY (BURGESS / HOYT / HARRIS-ULLMAN) */}
        {diagramType === 'urban_morphology' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Model 1: Burgess Concentric */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">1. Konsentris (Burgess)</text>
              <circle cx="75" cy="95" r="55" fill="#fef08a" opacity="0.3" stroke="#ca8a04" />
              <circle cx="75" cy="95" r="40" fill="#bbf7d0" opacity="0.4" stroke="#16a34a" />
              <circle cx="75" cy="95" r="25" fill="#bae6fd" opacity="0.5" stroke="#0284c7" />
              <circle cx="75" cy="95" r="10" fill="#ef4444" />
              <text x="75" y="98" textAnchor="middle" className="text-[7px] font-bold fill-white">CBD</text>
              <text x="75" y="157" textAnchor="middle" className="text-[7px] fill-slate-500">Cincin Membesar Rata</text>
            </g>

            {/* Model 2: Hoyt Sector */}
            <g transform="translate(175, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">2. Sektoral (Hoyt)</text>
              <circle cx="75" cy="95" r="50" fill="#f1f5f9" stroke="#94a3b8" />
              {/* Pie/Sector wedges along highway/rail */}
              <path d="M 75,95 L 75,45 A 50 50 0 0 1 125,95 Z" fill="#60a5fa" opacity="0.7" />
              <circle cx="75" cy="95" r="10" fill="#ef4444" />
              <text x="75" y="98" textAnchor="middle" className="text-[7px] font-bold fill-white">CBD</text>
              <text x="75" y="157" textAnchor="middle" className="text-[7px] fill-blue-700">Mengikuti Jalur Transportasi</text>
            </g>

            {/* Model 3: Harris-Ullman Multiple Nuclei */}
            <g transform="translate(340, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">3. Inti Berganda (Harris-Ullman)</text>
              <rect x="30" y="55" width="28" height="24" rx="4" fill="#ef4444" />
              <text x="44" y="70" textAnchor="middle" className="text-[7px] font-bold fill-white">CBD</text>
              <rect x="80" y="65" width="34" height="24" rx="4" fill="#f59e0b" />
              <text x="97" y="80" textAnchor="middle" className="text-[7px] font-bold fill-white">Industri</text>
              <rect x="45" y="105" width="40" height="26" rx="4" fill="#10b981" />
              <text x="65" y="121" textAnchor="middle" className="text-[7px] font-bold fill-white">Suburban</text>
              <text x="75" y="157" textAnchor="middle" className="text-[7px] fill-slate-500">Pusat Tumbuh Terpisah</text>
            </g>
          </svg>
        )}

        {/* 12. DEMOGRAPHY & POPULATION PYRAMIDS */}
        {diagramType === 'demography_pyramid' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Pyramid 1: Expansive */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">1. Ekspansif (Muda)</text>
              <polygon points="75,40 25,135 125,135" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.5" />
              <text x="75" y="148" textAnchor="middle" className="text-[7px] font-bold fill-rose-700">Kelahiran Tinggi (Kerucut)</text>
              <text x="75" y="158" textAnchor="middle" className="text-[7px] fill-slate-500">Contoh: Indonesia, India</text>
            </g>

            {/* Pyramid 2: Stationary */}
            <g transform="translate(175, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">2. Stasioner (Dewasa)</text>
              <polygon points="50,45 100,45 110,120 40,120" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
              <text x="75" y="148" textAnchor="middle" className="text-[7px] font-bold fill-blue-700">Kelahiran = Kematian (Granat)</text>
              <text x="75" y="158" textAnchor="middle" className="text-[7px] fill-slate-500">Contoh: Swiss, Swedia</text>
            </g>

            {/* Pyramid 3: Constrictive */}
            <g transform="translate(340, 10)">
              <rect x="0" y="0" width="150" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="75" y="20" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">3. Konstruktif (Tua)</text>
              <polygon points="60,45 90,45 115,85 100,135 50,135 35,85" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
              <text x="75" y="148" textAnchor="middle" className="text-[7px] font-bold fill-orange-700">Kelahiran Rendah (Guci/Nisan)</text>
              <text x="75" y="158" textAnchor="middle" className="text-[7px] fill-slate-500">Contoh: Jepang, Jerman</text>
            </g>
          </svg>
        )}

        {/* 13. CHRISTALLER CENTRAL PLACE & BREAKING POINT */}
        {diagramType === 'christaller_central' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Hexagonal Lattice */}
            <g transform="translate(20, 20)">
              <polygon points="70,30 110,30 130,65 110,100 70,100 50,65" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="90" cy="65" r="7" fill="#1d4ed8" />
              <text x="90" y="68" textAnchor="middle" className="text-[7px] font-bold fill-white">A</text>

              <polygon points="130,65 170,65 190,100 170,135 130,135 110,100" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="150" cy="100" r="5" fill="#f59e0b" />
              <text x="150" y="103" textAnchor="middle" className="text-[6px] font-bold fill-white">B</text>

              <text x="110" y="150" textAnchor="middle" className="text-[8px] font-bold fill-blue-900">Jaringan Heksagonal Christaller</text>
            </g>

            {/* Hierarchies */}
            <g transform="translate(230, 20)">
              <text x="0" y="15" className="text-[10px] font-bold fill-slate-900">Hierarki Tempat Sentral:</text>
              
              <rect x="0" y="28" width="240" height="28" rx="4" fill="#f0f9ff" stroke="#bae6fd" />
              <text x="10" y="46" className="text-[9px] font-bold fill-blue-900">K = 3 : Asas Pasar (Marketing Principle)</text>

              <rect x="0" y="62" width="240" height="28" rx="4" fill="#fefce8" stroke="#fef08a" />
              <text x="10" y="80" className="text-[9px] font-bold fill-amber-900">K = 4 : Asas Transportasi (Traffic Principle)</text>

              <rect x="0" y="96" width="240" height="28" rx="4" fill="#fdf2f8" stroke="#fbcfe8" />
              <text x="10" y="114" className="text-[9px] font-bold fill-pink-900">K = 7 : Asas Administrasi (Administrative Principle)</text>

              <text x="120" y="145" textAnchor="middle" className="text-[9px] font-mono font-bold fill-indigo-700">Titik Henti: D_AB = d_AB / (1 + √(P_B / P_A))</text>
            </g>
          </svg>
        )}

        {/* 14. KARST TOPOGRAPHY */}
        {diagramType === 'karst_landscape' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Karst landscape profile */}
            <path d="M 20,60 Q 60,30 100,60 Q 130,90 160,60 Q 200,20 240,60 Q 270,100 310,60 Q 350,30 390,70 Q 430,110 480,60" fill="none" stroke="#64748b" strokeWidth="2" />
            <rect x="20" y="60" width="460" height="110" fill="#f8fafc" />
            
            {/* Caves & Underground stream */}
            <ellipse cx="200" cy="115" rx="45" ry="25" fill="#cbd5e1" />
            <path d="M 180,95 L 185,110 L 190,95" fill="#475569" />
            <path d="M 210,95 L 215,115 L 220,95" fill="#475569" />
            <path d="M 183,135 L 188,122 L 193,135" fill="#475569" />
            <path d="M 213,135 L 218,125 L 223,135" fill="#475569" />

            <path d="M 50,145 Q 200,140 450,145" stroke="#0284c7" strokeWidth="3" fill="none" strokeDasharray="4,2" />

            {/* Labels */}
            <text x="130" y="80" textAnchor="middle" className="text-[8px] font-bold fill-amber-800">Doline (Sinkhole)</text>
            <text x="270" y="85" textAnchor="middle" className="text-[8px] font-bold fill-amber-800">Uvala / Polje</text>
            <text x="200" y="102" textAnchor="middle" className="text-[8px] font-bold fill-slate-800">Stalaktit</text>
            <text x="200" y="130" textAnchor="middle" className="text-[8px] font-bold fill-slate-800">Stalagmit</text>
            <text x="250" y="165" textAnchor="middle" className="text-[9px] font-bold fill-blue-700">Sungai Bawah Tanah Karst (Ponor)</text>
          </svg>
        )}

        {/* 15. DISASTER RISK TRIANGLE & SCALES */}
        {diagramType === 'disaster_risk' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* Left: Risk Formula Triangle */}
            <polygon points="120,30 40,145 200,145" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
            <text x="120" y="85" textAnchor="middle" className="text-[12px] font-black fill-red-700">RISIKO</text>
            <text x="120" y="100" textAnchor="middle" className="text-[10px] font-bold fill-red-600">(RISK)</text>

            <circle cx="120" cy="30" r="14" fill="#ef4444" />
            <text x="120" y="34" textAnchor="middle" className="text-[8px] font-bold fill-white">Bahaya</text>
            <text x="120" y="14" textAnchor="middle" className="text-[8px] font-bold fill-red-700">Hazard (H)</text>

            <circle cx="40" cy="145" r="14" fill="#ea580c" />
            <text x="40" y="149" textAnchor="middle" className="text-[8px] font-bold fill-white">Rentan</text>
            <text x="40" y="168" textAnchor="middle" className="text-[8px] font-bold fill-orange-800">Vulnerability (V)</text>

            <circle cx="200" cy="145" r="14" fill="#059669" />
            <text x="200" y="149" textAnchor="middle" className="text-[8px] font-bold fill-white">Kapasitas</text>
            <text x="200" y="168" textAnchor="middle" className="text-[8px] font-bold fill-emerald-800">Capacity (C)</text>

            {/* Right: Comparative Scales */}
            <g transform="translate(240, 20)">
              <text x="0" y="12" className="text-[10px] font-bold fill-slate-900">Perbandingan 3 Skala Kebencanaan:</text>
              
              <rect x="0" y="25" width="240" height="34" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="10" y="40" className="text-[9px] font-bold fill-blue-900">Skala Richter (SR / Mw):</text>
              <text x="10" y="52" className="text-[8px] fill-slate-600">Mengukur ENERGI seismik riil secara logaritmik (naik 1 SR = energi ×32)</text>

              <rect x="0" y="65" width="240" height="34" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="10" y="80" className="text-[9px] font-bold fill-amber-900">Skala MMI (I - XII):</text>
              <text x="10" y="92" className="text-[8px] fill-slate-600">Mengukur INTENSITAS kerusakan dan dampak fisik visual di permukaan</text>

              <rect x="0" y="105" width="240" height="34" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="10" y="120" className="text-[9px] font-bold fill-rose-900">Skala VEI (0 - 8):</text>
              <text x="10" y="132" className="text-[8px] fill-slate-600">Volcano Explosivity Index berdasarkan volume tefra &amp; tinggi kolom abu</text>
            </g>
          </svg>
        )}

        {/* 16. TOURISM BUTLER TALC S-CURVE */}
        {diagramType === 'tourism_lifecycle' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            <line x1="40" y1="160" x2="470" y2="160" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="20" x2="40" y2="160" stroke="#334155" strokeWidth="2" />
            
            <text x="250" y="178" textAnchor="middle" className="text-[9px] font-bold fill-slate-700">Waktu (Tahapan Siklus Butler TALC)</text>
            <text x="35" y="30" textAnchor="end" className="text-[9px] font-bold fill-slate-700">Jumlah Wisatawan</text>

            {/* S-Curve */}
            <path d="M 40,150 Q 100,145 160,120 T 280,50 T 360,40" fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Rejuvenation curve */}
            <path d="M 360,40 Q 400,25 450,15" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3,2" />
            {/* Decline curve */}
            <path d="M 360,40 Q 400,65 450,120" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3,2" />

            {/* Labels along S-Curve */}
            <text x="80" y="138" className="text-[7px] font-bold fill-slate-700">1. Eksplorasi</text>
            <text x="140" y="112" className="text-[7px] font-bold fill-slate-700">2. Keterlibatan</text>
            <text x="210" y="70" className="text-[7px] font-bold fill-blue-800">3. Pembangunan</text>
            <text x="280" y="42" className="text-[7px] font-bold fill-indigo-800">4. Konsolidasi</text>
            <text x="350" y="32" className="text-[7px] font-bold fill-amber-800">5. Stagnasi</text>

            <text x="455" y="20" className="text-[8px] font-bold fill-emerald-700">Peremajaan (Rejuvenation)</text>
            <text x="455" y="125" className="text-[8px] font-bold fill-rose-700">Penurunan (Decline)</text>
          </svg>
        )}

        {/* 17. CULTURAL DIFFUSION */}
        {diagramType === 'cultural_diffusion' && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* 4 Types Grid */}
            <g transform="translate(20, 15)">
              <rect x="0" y="0" width="210" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
              <text x="10" y="18" className="text-[9px] font-bold fill-blue-900">1. Difusi Kontagius (Menjalar):</text>
              <text x="10" y="32" className="text-[8px] fill-slate-700">Menyebar luas dari orang ke orang terdekat layaknya gelombang flu</text>
              <text x="10" y="45" className="text-[8px] font-semibold fill-blue-700">Contoh: Tren media sosial TikTok, wabah penyakit</text>
            </g>

            <g transform="translate(250, 15)">
              <rect x="0" y="0" width="220" height="65" rx="6" fill="#fefce8" stroke="#fef08a" />
              <text x="10" y="18" className="text-[9px] font-bold fill-amber-900">2. Difusi Hierarkis (Bertingkat):</text>
              <text x="10" y="32" className="text-[8px] fill-slate-700">Dari pusat simpul utama / tokoh besar meloncat ke kota bawahannya</text>
              <text x="10" y="45" className="text-[8px] font-semibold fill-amber-700">Contoh: Mode fashion Paris → Jakarta → Kota Daerah</text>
            </g>

            <g transform="translate(20, 95)">
              <rect x="0" y="0" width="210" height="65" rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
              <text x="10" y="18" className="text-[9px] font-bold fill-emerald-900">3. Difusi Stimulus (Adaptif):</text>
              <text x="10" y="32" className="text-[8px] fill-slate-700">Prinsip ide dasar ditiru tetapi diubah menyesuaikan nilai budaya lokal</text>
              <text x="10" y="45" className="text-[8px] font-semibold fill-emerald-700">Contoh: Fast food burger Maharaja Mac tanpa daging sapi di India</text>
            </g>

            <g transform="translate(250, 95)">
              <rect x="0" y="0" width="220" height="65" rx="6" fill="#faf5ff" stroke="#e9d5ff" />
              <text x="10" y="18" className="text-[9px] font-bold fill-purple-900">4. Difusi Relokasi (Migrasi Fisik):</text>
              <text x="10" y="32" className="text-[8px] fill-slate-700">Individu berpindah tempat tinggal secara fisik membawa adat &amp; bahasa</text>
              <text x="10" y="45" className="text-[8px] font-semibold fill-purple-700">Contoh: Bahasa Spanyol di Amerika Latin, Pecinan (Chinatown)</text>
            </g>
          </svg>
        )}

        {/* 18. RESOURCES & CLIMATE DEFAULT */}
        {(diagramType === 'resources_sdgs' || diagramType === 'sig_cartography' || diagramType === 'wilson_cycle' || diagramType === 'arid_glacial' || diagramType === 'climate_classification') && (
          <svg viewBox="0 0 500 190" className="h-auto w-full max-w-[480px]">
            {/* General Spatial Concept Map */}
            <rect x="20" y="20" width="460" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
            
            {/* Central Node */}
            <circle cx="250" cy="95" r="32" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
            <text x="250" y="93" textAnchor="middle" className="text-[10px] font-bold fill-white">TOPIK KSR</text>
            <text x="250" y="106" textAnchor="middle" className="text-[8px] font-semibold fill-blue-100 uppercase">{question.moduleId}</text>

            {/* Orbiting Satellite Nodes */}
            <g transform="translate(80, 50)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#e0f2fe" stroke="#38bdf8" />
              <text x="55" y="15" textAnchor="middle" className="text-[8px] font-bold fill-sky-900">Variabel Fisik</text>
              <text x="55" y="27" textAnchor="middle" className="text-[7px] fill-slate-600">Tekanan, Suhu, Densitas</text>
            </g>

            <g transform="translate(310, 50)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#fef3c7" stroke="#fbbf24" />
              <text x="55" y="15" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">Dinamika Spasial</text>
              <text x="55" y="27" textAnchor="middle" className="text-[7px] fill-slate-600">Distribusi &amp; Gradien</text>
            </g>

            <g transform="translate(80, 115)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#dcfce7" stroke="#4ade80" />
              <text x="55" y="15" textAnchor="middle" className="text-[8px] font-bold fill-emerald-900">Prinsip Hukum</text>
              <text x="55" y="27" textAnchor="middle" className="text-[7px] fill-slate-600">Korelasi &amp; Kausalitas</text>
            </g>

            <g transform="translate(310, 115)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#fce7f3" stroke="#f472b6" />
              <text x="55" y="15" textAnchor="middle" className="text-[8px] font-bold fill-pink-900">Aplikasi Soal</text>
              <text x="55" y="27" textAnchor="middle" className="text-[7px] fill-slate-600">Standar Olimpiade OSN</text>
            </g>

            {/* Connecting lines */}
            <line x1="190" y1="67" x2="222" y2="85" stroke="#94a3b8" strokeDasharray="3,2" />
            <line x1="310" y1="67" x2="278" y2="85" stroke="#94a3b8" strokeDasharray="3,2" />
            <line x1="190" y1="132" x2="222" y2="105" stroke="#94a3b8" strokeDasharray="3,2" />
            <line x1="310" y1="132" x2="278" y2="105" stroke="#94a3b8" strokeDasharray="3,2" />
          </svg>
        )}
      </div>

      {/* Expandable Component Breakdown */}
      {showDetail && (
        <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50/60 p-3 text-xs text-slate-700 space-y-1.5 animate-fadeIn">
          <div className="flex items-center gap-1.5 font-bold text-blue-900">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Petunjuk Visualisasi &amp; Logika KSR:
          </div>
          <p className="text-[11px] leading-relaxed text-slate-600">
            Diagram di atas merepresentasikan model geometris dan fisik dari materi{' '}
            <strong className="text-slate-800 font-semibold">{question.ksrCategory || question.moduleId}</strong>.
            Perhatikan sumbu, arah anak panah, dan zona pembatas (gradien) untuk mengeliminasi opsi pengecoh pada soal!
          </p>
        </div>
      )}
    </div>
  );
}
