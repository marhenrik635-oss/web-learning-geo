'use client';

import React, { useState } from 'react';
import { Compass, Info, ArrowRightLeft, ArrowUpRight, Flame } from 'lucide-react';

type BoundaryType = 'subduction' | 'divergent' | 'transform' | 'collision';

export default function TectonicBoundaryVisualizer() {
  const [boundary, setBoundary] = useState<BoundaryType>('subduction');
  const [rate, setRate] = useState<number>(6); // cm/year

  const boundaryData = {
    subduction: {
      name: 'Konvergen Subduksi (Samudera vs Benua)',
      realWorld: 'Lempeng Nazca menunjam di bawah Amerika Selatan (Pegunungan Andes & Palung Peru-Chile)',
      features: ['Palung Laut (Trench)', 'Busur Vulkanik Magmatik', 'Zona Seismik Wadati-Benioff', 'Akresi Sedimen'],
      volcanism: 'Aktif tinggi (Magma andesitis-dasitis eksplosif)',
      seismic: 'Gempa dangkal (<70 km), menengah (70-300 km), hingga dalam (>300-700 km)',
      description:
        'Lempeng samudera dengan densitas lebih tinggi (~3.0 g/cm³) menunjam ke bawah lempeng benua yang lebih ringan (~2.7 g/cm³). Air yang terbawa dalam mineral terhidrasi memicu partial melting di mantel atas, memicu naiknya kantung magma membentuk deretan gunung api.',
    },
    divergent: {
      name: 'Divergen (Pemekaran Lantai Samudera / MOR)',
      realWorld: 'Mid-Atlantic Ridge (Islandia) & Great Rift Valley Afrika Timur',
      features: ['Pematang Tengah Samudera (Ridge)', 'Lembah Retakan (Rift Valley)', 'Pita Paleomagnetisme Simetris', 'Hydrothermal Vents (Black Smokers)'],
      volcanism: 'Aktif efusif (Magma basaltis encer mafik bersuhu tinggi ~1200°C)',
      seismic: 'Gempa bumi dangkal (<30 km) berkekuatan sedang',
      description:
        'Arus konveksi naik memisahkan dua lempeng. Tekanan terlepas sehingga mantel astenosfer meleleh secara dekompresi, mengisi celah retakan dan membeku menjadi kerak samudera baru yang terus bergerak menjauh.',
    },
    transform: {
      name: 'Transform (Sesar Mendatar / Sesar Geser Konservatif)',
      realWorld: 'Sesar San Andreas (California, USA) & Sesar Besar Semangko (Sumatera)',
      features: ['Zona Hancuran Sesar Linier', 'Offset Morfologi Sungai (Pergeseran aliran)', 'Sag Ponds (Danau sag)'],
      volcanism: 'TIDAK ADA AKTIVITAS VULKANIK (Kerak tidak diciptakan/dihancurkan)',
      seismic: 'Gempa bumi sangat dangkal (<20 km) namun berdaya rusak sangat dahsyat',
      description:
        'Dua lempeng bergesekan horizontal secara berdampingan. Tegangan geser (shear stress) terkunci oleh friksi batuan hingga batas elastisnya terlampaui dan melepaskan energi gempa seketika.',
    },
    collision: {
      name: 'Konvergen Kolisi (Benua vs Benua)',
      realWorld: 'Tabrakan Lempeng Indo-Australia dengan Lempeng Eurasia (Pegunungan Himalaya & Dataran Tinggi Tibet)',
      features: ['Pegunungan Lipatan Raksasa', 'Penebalan Kerak Benua hingga 70 km', 'Sesar Naik Sungkup (Thrust Fault)'],
      volcanism: 'Sangat minim atau nihil (tidak ada subduksi tuntas ke mantel pijar)',
      seismic: 'Gempa bumi dangkal hingga menengah yang tersebar luas',
      description:
        'Kedua lempeng benua memiliki densitas rendah yang sama ringannya sehingga tidak dapat menunjam ke mantel (efek buoyancy). Kerak saling meremukkan, terlipat hebat, dan terangkat vertikal membentuk atap dunia.',
    },
  };

  const current = boundaryData[boundary];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
            <Compass className="h-3.5 w-3.5" /> Laboratorium Geodinamika Lempeng
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Simulasi Tipe Batas Lempeng & Morfologi Tektonik
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['subduction', 'divergent', 'transform', 'collision'] as BoundaryType[]).map((b) => (
            <button
              key={b}
              onClick={() => setBoundary(b)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition ${
                boundary === b
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {b === 'subduction'
                ? 'Subduksi'
                : b === 'divergent'
                ? 'Divergen (MOR)'
                : b === 'transform'
                ? 'Transform'
                : 'Kolisi Benua'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Interactive Schematic Diagram */}
        <div className="flex flex-col items-center justify-center lg:col-span-7">
          <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-4">
            <svg viewBox="0 0 500 280" className="w-full h-auto">
              <defs>
                <linearGradient id="crustOcean" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="crustCont" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
                <linearGradient id="mantleBg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#451a03" />
                  <stop offset="100%" stopColor="#270e01" />
                </linearGradient>
              </defs>

              {/* Background Mantle */}
              <rect x="0" y="70" width="500" height="210" fill="url(#mantleBg)" />

              {/* Subduction Scene */}
              {boundary === 'subduction' && (
                <g>
                  {/* Ocean Water */}
                  <rect x="0" y="40" width="260" height="40" fill="#0284c7" opacity="0.3" />
                  {/* Oceanic Plate diving */}
                  <polygon
                    points="0,80 200,80 280,240 240,250 160,110 0,110"
                    fill="url(#crustOcean)"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                  />
                  {/* Continental Plate */}
                  <polygon
                    points="220,80 260,80 340,30 380,45 420,25 500,80 500,160 270,160 210,95"
                    fill="url(#crustCont)"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                  />
                  {/* Trench */}
                  <text x="180" y="70" fill="#38bdf8" fontSize="10" fontWeight="bold">
                    Palung Laut (Trench)
                  </text>
                  <path d="M 210 75 L 210 85" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
                  {/* Magma Chamber and Volcano */}
                  <circle cx="360" cy="120" r="14" fill="#ef4444" opacity="0.8" />
                  <path d="M 360 106 L 360 40" stroke="#f97316" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="360" y="20" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Gunung Api (Busur Magmatik)
                  </text>
                  {/* Wadati-Benioff Zone Earthquakes */}
                  <circle cx="210" cy="95" r="3" fill="#facc15" />
                  <circle cx="230" cy="135" r="4" fill="#facc15" />
                  <circle cx="250" cy="180" r="4.5" fill="#facc15" />
                  <circle cx="270" cy="225" r="5" fill="#facc15" />
                  <text x="280" y="210" fill="#facc15" fontSize="9">
                    Zona Benioff (Gempa Dalam)
                  </text>
                </g>
              )}

              {/* Divergent Scene */}
              {boundary === 'divergent' && (
                <g>
                  {/* Ocean Water */}
                  <rect x="0" y="30" width="500" height="60" fill="#0284c7" opacity="0.3" />
                  {/* Left Oceanic Plate */}
                  <polygon points="0,90 220,90 210,130 0,130" fill="url(#crustOcean)" stroke="#38bdf8" />
                  {/* Right Oceanic Plate */}
                  <polygon points="280,90 500,90 500,130 290,130" fill="url(#crustOcean)" stroke="#38bdf8" />
                  {/* Rift Central Valley & Rising Magma */}
                  <polygon points="230,90 250,75 270,90 260,200 240,200" fill="#ea580c" opacity="0.9" />
                  <path d="M 200 65 L 140 65" stroke="#ffffff" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <path d="M 300 65 L 360 65" stroke="#ffffff" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <text x="250" y="55" fill="#fed7aa" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Pematang Tengah Samudera (MOR)
                  </text>
                  <text x="250" y="230" fill="#fb923c" fontSize="10" textAnchor="middle">
                    Naiknya Magma Basaltis & Arus Konveksi
                  </text>
                </g>
              )}

              {/* Transform Scene */}
              {boundary === 'transform' && (
                <g>
                  {/* Plate A moving north */}
                  <polygon points="40,40 240,40 240,240 40,240" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  {/* Plate B moving south */}
                  <polygon points="260,40 460,40 460,240 260,240" fill="#334155" stroke="#64748b" strokeWidth="2" />
                  {/* Fault Line */}
                  <line x1="250" y1="20" x2="250" y2="260" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
                  <text x="250" y="18" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Bidang Sesar Mendatar (Transform Fault)
                  </text>
                  {/* Motion Arrows */}
                  <path d="M 140 160 L 140 100" stroke="#38bdf8" strokeWidth="4" />
                  <polygon points="135,100 140,85 145,100" fill="#38bdf8" />
                  <path d="M 360 100 L 360 160" stroke="#f59e0b" strokeWidth="4" />
                  <polygon points="355,160 360,175 365,160" fill="#f59e0b" />
                  <text x="140" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Gerak Relatif Kiri
                  </text>
                  <text x="360" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">
                    Gerak Relatif Kanan
                  </text>
                </g>
              )}

              {/* Collision Scene */}
              {boundary === 'collision' && (
                <g>
                  {/* Left Continental Plate */}
                  <polygon points="0,100 230,100 250,50 180,180 0,180" fill="url(#crustCont)" stroke="#f59e0b" />
                  {/* Right Continental Plate */}
                  <polygon points="270,100 500,100 500,180 320,180 250,50" fill="url(#crustCont)" stroke="#f59e0b" />
                  {/* Giant Fold Mountain Range in Center */}
                  <polygon points="180,100 220,40 250,20 280,40 320,100" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="250" y="15" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Pegunungan Lipatan Himalaya (Non-Vulkanik)
                  </text>
                  <text x="250" y="220" fill="#e2e8f0" fontSize="10" textAnchor="middle">
                    Penebalan Kerak Hingga 70 km (Crustal Root)
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="mt-4 w-full">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Laju Pergerakan Lempeng:</span>
              <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-white">
                {rate} cm / tahun
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[11px] text-slate-400">
              <span>1 cm/thn (Lambat - Atlantik)</span>
              <span>7 cm/thn (Indo-Australia)</span>
              <span>15 cm/thn (Cepat - Pasifik Timur)</span>
            </div>
          </div>
        </div>

        {/* Technical Data & OSN Diagnostics */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tipe Tektonik Terpilih
            </div>
            <h4 className="mt-1 text-base font-bold text-slate-900">{current.name}</h4>
            <p className="mt-1.5 text-xs text-blue-700 font-medium">{current.realWorld}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{current.description}</p>
          </div>

          <div className="space-y-2.5">
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Fitur Morfologi Khas:</span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {current.features.map((f, i) => (
                  <span key={i} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Karakteristik Vulkanik:</span>
              <p className="mt-0.5 text-xs text-slate-800">{current.volcanism}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Karakteristik Seismik:</span>
              <p className="mt-0.5 text-xs text-slate-800">{current.seismic}</p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900">
            <strong>Kunci Juara OSN:</strong> Ingat bahwa di batas kolisi (Benua-Benua) seperti Himalaya{' '}
            <strong>TIDAK TERBENTUK deretan gunung berapi aktif</strong>, karena tidak ada lempeng samudera kaya fluida yang
            dapat menunjam memicu partial melting.
          </div>
        </div>
      </div>
    </div>
  );
}
