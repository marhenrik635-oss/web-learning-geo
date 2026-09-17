'use client';

import React, { useState } from 'react';
import { ModuleId } from '../../types/geo';
import {
  Layers,
  Compass,
  Mountain,
  Waves,
  CloudSun,
  Map,
  Sparkles,
  AlertTriangle,
  Info,
  TrendingUp,
  Activity,
  Sliders,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

interface SectionVisualizerProps {
  moduleId: ModuleId;
  sectionIndex: number;
  sectionTitle: string;
}

export default function SectionVisualizer({
  moduleId,
  sectionIndex,
  sectionTitle,
}: SectionVisualizerProps) {
  // State for interactive widgets inside diagrams
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [elrVal, setElrVal] = useState<number>(8); // lapse rate °C/km
  const [hazardVal, setHazardVal] = useState<number>(7);
  const [vulnVal, setVulnVal] = useState<number>(6);
  const [capVal, setCapVal] = useState<number>(5);
  const [popA, setPopA] = useState<number>(30000);
  const [popB, setPopB] = useState<number>(10000);
  const [distanceAB, setDistanceAB] = useState<number>(40);
  const [scaleDenom, setScaleDenom] = useState<number>(50000);
  const [weberIM, setWeberIM] = useState<number>(1.5);
  const [butlerStage, setButlerStage] = useState<number>(3); // 1 to 6

  // Calculation helpers
  const riskScore = Math.round(((hazardVal * vulnVal) / Math.max(1, capVal)) * 10) / 10;
  const breakPointDist =
    Math.round((distanceAB / (1 + Math.sqrt(popB / popA))) * 10) / 10;
  const contourInterval = Math.round(scaleDenom / 2000);

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-blue-200/80 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 p-4 shadow-2xs">
      {/* Visual Header */}
      <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white shadow-2xs">
            <Layers className="h-3.5 w-3.5" />
          </span>
          <div>
            <span className="text-xs font-bold text-slate-900">
              Visualisasi Ilmiah Terpadu • Bagian {sectionIndex + 1}
            </span>
            <span className="ml-2 rounded bg-blue-100 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-700">
              KSR INTERACTIVE MODEL
            </span>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 font-medium hidden sm:inline-block">
          {sectionTitle}
        </span>
      </div>

      {/* RENDER BY MODULE & SECTION */}

      {/* ========================================================
          MODULE 1: METEOROLOGI DAN KLIMATOLOGI
         ======================================================== */}
      {moduleId === 'meteorologi-klimatologi' && sectionIndex === 0 && (
        // 1.0 Struktur Vertikal Atmosfer & Inversi Suhu
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            {['Troposfer (0-12 km)', 'Stratosfer (12-50 km)', 'Mesosfer (50-85 km)', 'Termosfer (>85 km)'].map((l, i) => (
              <button
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`rounded-md px-2 py-1 font-semibold transition ${
                  activeLayer === i
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="relative rounded-lg border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 500 160" className="w-full h-auto max-h-[200px]">
              {/* Layers Background */}
              <rect x="0" y="110" width="500" height="50" fill={activeLayer === 0 ? '#bae6fd' : '#f0f9ff'} opacity="0.8" />
              <rect x="0" y="60" width="500" height="50" fill={activeLayer === 1 ? '#fef08a' : '#fefce8'} opacity="0.8" />
              <rect x="0" y="25" width="500" height="35" fill={activeLayer === 2 ? '#bbf7d0' : '#f0fdf4'} opacity="0.8" />
              <rect x="0" y="0" width="500" height="25" fill={activeLayer === 3 ? '#fed7aa' : '#fff7ed'} opacity="0.8" />

              {/* Temperature Curve */}
              <path
                d="M 180,160 L 90,110 L 140,60 L 40,25 L 350,0"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2.5"
              />

              {/* Tropopause Line */}
              <line x1="0" y1="110" x2="500" y2="110" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="490" y="105" textAnchor="end" className="text-[8px] font-bold fill-sky-800">Tropopause (Inversi Suhu Dimulai)</text>

              {/* Ozone layer in Stratosphere */}
              <rect x="20" y="70" width="180" height="15" rx="3" fill="#ca8a04" opacity="0.4" />
              <text x="110" y="81" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">Lapisan Ozon (O₃ Absorpsi Radiasi UV)</text>

              {/* Layer Titles */}
              <text x="15" y="145" className="text-[9px] font-bold fill-sky-900">Troposfer: Cuaca, Awan CB, Lapse Rate 6.5°C/km</text>
              <text x="15" y="55" className="text-[9px] font-bold fill-amber-900">Stratosfer: Inversi Suhu Alami (+), Bebas Turbulensi</text>
              <text x="15" y="20" className="text-[9px] font-bold fill-emerald-900">Mesosfer: -90°C Paling Dingin, Meteor Terbakar</text>
              <text x="400" y="18" className="text-[9px] font-bold fill-orange-900">Termosfer: Aurora &amp; Satelit</text>
            </svg>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {activeLayer === 0 && 'Troposfer mengandung 80% massa atmosfer. Suhu turun teratur rata-rata 6.5°C/km sampai puncak tropopause.'}
            {activeLayer === 1 && 'Stratosfer memiliki suhu yang justru naik seiring ketinggian (inversi termal) akibat penyerapan sinar UV oleh molekul ozon (O3).'}
            {activeLayer === 2 && 'Mesosfer adalah lapisan paling dingin di atmosfer (bisa mencapai -90°C), tempat sebagian besar batuan meteor terbakar habis.'}
            {activeLayer === 3 && 'Termosfer (Ionosfer) mengalami pemanasan kinetik tinggi akibat radiasi sinar-X matahari, memicu fenomena aurora dan refleksi gelombang radio.'}
          </p>
        </div>
      )}

      {moduleId === 'meteorologi-klimatologi' && sectionIndex === 1 && (
        // 1.1 Stabilitas Udara: DALR, SALR, dan ELR
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-slate-100 p-2 text-xs">
            <span className="font-semibold text-slate-700">Simulasi ELR (Environmental Lapse Rate):</span>
            <div className="flex items-center gap-2 font-mono font-bold text-blue-700">
              <input
                type="range"
                min="3"
                max="14"
                step="0.5"
                value={elrVal}
                onChange={(e) => setElrVal(parseFloat(e.target.value))}
                className="w-28 accent-blue-600"
              />
              <span>{elrVal}°C/km</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="rounded-lg border border-slate-200 bg-white p-2">
              <svg viewBox="0 0 260 160" className="w-full h-auto">
                <line x1="30" y1="140" x2="240" y2="140" stroke="#64748b" strokeWidth="1.5" />
                <line x1="30" y1="10" x2="30" y2="140" stroke="#64748b" strokeWidth="1.5" />
                <text x="235" y="155" textAnchor="end" className="text-[8px] fill-slate-500">Suhu (°C)</text>
                <text x="25" y="15" textAnchor="end" className="text-[8px] fill-slate-500">Tinggi (km)</text>

                {/* DALR line (10 C/km) */}
                <line x1="140" y1="140" x2="60" y2="30" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" />
                <text x="55" y="25" className="text-[8px] font-bold fill-amber-700">DALR (10°C/km)</text>

                {/* SALR line (6 C/km) */}
                <line x1="140" y1="140" x2="90" y2="30" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3,2" />
                <text x="95" y="25" className="text-[8px] font-bold fill-sky-700">SALR (6°C/km)</text>

                {/* Dynamic ELR line */}
                <line
                  x1="140"
                  y1="140"
                  x2={140 - elrVal * 8}
                  y2="30"
                  stroke="#dc2626"
                  strokeWidth="3"
                />
                <text x={140 - elrVal * 8} y="20" textAnchor="middle" className="text-[8px] font-bold fill-red-700">
                  ELR ({elrVal}°C)
                </text>
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <div
                className={`rounded-lg p-3 font-bold ${
                  elrVal > 10
                    ? 'bg-red-50 text-red-900 border border-red-200'
                    : elrVal < 6
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}
              >
                Kondisi:{' '}
                {elrVal > 10
                  ? 'TIDAK STABIL MUTLAK (Absolut Labil)'
                  : elrVal < 6
                  ? 'STABIL MUTLAK (Absolut Stabil)'
                  : 'STABIL BERSYARAT (Conditional Instability)'}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {elrVal > 10 &&
                  'ELR > DALR: Paket udara selalu lebih panas dari udara sekelilingnya, sehingga terus naik ke atas membentuk awan konvektif Cumulonimbus dan hujan badai.'}
                {elrVal < 6 &&
                  'ELR < SALR: Paket udara selalu lebih dingin dari sekelilingnya, sehingga ditekan turun kembali. Tidak terjadi pembentukan awan vertikal (cuaca cerah).'}
                {elrVal >= 6 &&
                  elrVal <= 10 &&
                  'SALR < ELR < DALR: Udara stabil jika masih kering, tetapi menjadi tidak stabil jika sudah jenuh air (kondensasi melepaskan kalor laten).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {moduleId === 'meteorologi-klimatologi' && sectionIndex === 2 && (
        // 1.2 Klasifikasi Iklim Köppen, Schmidt-Ferguson, Oldeman
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="rounded-lg border border-sky-200 bg-sky-50/60 p-2.5 text-xs">
              <div className="font-bold text-sky-900">Köppen (Tropis A)</div>
              <ul className="mt-1 space-y-1 text-[11px] text-sky-800">
                <li>• <strong>Af:</strong> Hujan tropis (terkering ≥60 mm)</li>
                <li>• <strong>Am:</strong> Monsunal (ada masa jeda kemarau)</li>
                <li>• <strong>Aw:</strong> Sabana kering (terkering &lt;60 mm)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-2.5 text-xs">
              <div className="font-bold text-amber-900">Schmidt-Ferguson (Q)</div>
              <div className="mt-1 font-mono text-[10px] text-amber-800">Q = (BK / BB) × 100%</div>
              <p className="mt-1 text-[11px] text-amber-800 leading-tight">
                BB &gt;100 mm, BL 60-100 mm, BK &lt;60 mm. (Jebakan: BL tidak dihitung di rumus Q!)
              </p>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-2.5 text-xs">
              <div className="font-bold text-emerald-900">Oldeman (Agroklimat)</div>
              <p className="mt-1 text-[11px] text-emerald-800 leading-tight">
                Kebutuhan air padi sawah: BB &gt;200 mm/bln. Kebutuhan palawija: BK &lt;100 mm/bln.
              </p>
            </div>
          </div>
        </div>
      )}

      {moduleId === 'meteorologi-klimatologi' && sectionIndex === 3 && (
        // 1.3 Sirkulasi Atmosfer, Fohn & ENSO
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 500 150" className="w-full h-auto">
              {/* Orographic Fohn Diagram */}
              <polygon points="30,135 180,30 330,135" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
              
              {/* Rain cloud windward */}
              <ellipse cx="120" cy="50" rx="35" ry="18" fill="#93c5fd" opacity="0.8" />
              <text x="120" y="54" textAnchor="middle" className="text-[8px] font-bold fill-blue-900">Awan Hujan</text>
              <line x1="100" y1="75" x2="90" y2="100" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2,2" />
              <line x1="120" y1="75" x2="110" y2="100" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2,2" />
              <line x1="140" y1="75" x2="130" y2="100" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2,2" />
              <text x="80" y="125" textAnchor="middle" className="text-[8px] font-bold fill-blue-800">Lereng Angin (Basah)</text>

              {/* Dry hot fohn wind leeward */}
              <path d="M 200,40 Q 240,75 280,120" fill="none" stroke="#ef4444" strokeWidth="3" />
              <text x="270" y="80" className="text-[9px] font-bold fill-red-700">Angin Fohn (Panas &amp; Kering)</text>
              <text x="270" y="93" className="text-[8px] fill-slate-600">Lapse rate turun kering = 1°C/100m</text>

              {/* Indonesian Fohn Wind list */}
              <rect x="350" y="15" width="140" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
              <text x="420" y="32" textAnchor="middle" className="text-[9px] font-bold fill-slate-800">Angin Fohn Lokal:</text>
              <text x="360" y="50" className="text-[8px] fill-slate-700">• Gending (Probolinggo)</text>
              <text x="360" y="66" className="text-[8px] fill-slate-700">• Bahorok (Deli Serdang)</text>
              <text x="360" y="82" className="text-[8px] fill-slate-700">• Kumbang (Cirebon/Brebes)</text>
              <text x="360" y="98" className="text-[8px] fill-slate-700">• Brubu (Makassar)</text>
              <text x="360" y="114" className="text-[8px] fill-slate-700">• Wambraw (Biak Papua)</text>
            </svg>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 2: OSEANOGRAFI & HIDROLOGI
         ======================================================== */}
      {moduleId === 'oseanografi-hidrologi' && sectionIndex === 0 && (
        // 2.0 UNCLOS 1982
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 500 150" className="w-full h-auto">
              <path d="M 10,60 L 50,75 L 120,85 L 220,95 L 320,110 L 420,135 L 490,140" fill="none" stroke="#475569" strokeWidth="2" />
              <line x1="50" y1="75" x2="490" y2="75" stroke="#0284c7" strokeWidth="2" />
              <polygon points="50,75 490,75 490,145 10,145 10,60" fill="#e0f2fe" opacity="0.4" />

              <line x1="50" y1="30" x2="50" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="120" y1="30" x2="120" y2="100" stroke="#0369a1" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="180" y1="30" x2="180" y2="100" stroke="#0f766e" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="330" y1="30" x2="330" y2="120" stroke="#1d4ed8" strokeWidth="1.5" />

              <text x="30" y="45" textAnchor="middle" className="text-[8px] font-bold fill-slate-700">Pantai</text>
              <text x="85" y="45" textAnchor="middle" className="text-[8px] font-bold fill-blue-900">Laut Teritorial</text>
              <text x="85" y="58" textAnchor="middle" className="text-[8px] font-mono fill-blue-700">12 Mil</text>
              <text x="150" y="45" textAnchor="middle" className="text-[8px] font-bold fill-teal-900">Tambahan</text>
              <text x="150" y="58" textAnchor="middle" className="text-[8px] font-mono fill-teal-700">24 Mil</text>
              <text x="255" y="40" textAnchor="middle" className="text-[9px] font-bold fill-blue-900">ZEE (Zona Ekonomi Eksklusif)</text>
              <text x="255" y="55" textAnchor="middle" className="text-[9px] font-mono font-bold fill-blue-700">200 Mil Laut</text>
              <text x="410" y="45" textAnchor="middle" className="text-[9px] font-bold fill-indigo-900">Laut Lepas / Bebas</text>
              <text x="255" y="138" textAnchor="middle" className="text-[8px] font-bold fill-slate-600">Landas Kontinen (Kekayaan Dasar Laut hingga 350 mil)</text>
            </svg>
          </div>
          <div className="rounded-lg bg-blue-50/70 p-2.5 text-xs text-blue-950">
            <strong>Hak Berdaulat di ZEE (200 Mil):</strong> Negara pantai berhak eksklusif mengeksplorasi dan mengeksploitasi sumberdaya alam hayati (ikan) dan non-hayati (migas lepas pantai), namun kapal asing tetap memiliki hak lintas damai navigasi internasional.
          </div>
        </div>
      )}

      {moduleId === 'oseanografi-hidrologi' && sectionIndex === 1 && (
        // 2.1 Pasang Surut & Arus
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs">
            <div className="font-bold text-slate-900 mb-1.5">Pasang Purnama (Spring Tide)</div>
            <div className="flex items-center justify-around py-4 bg-slate-50 rounded-lg">
              <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center text-[8px] font-bold text-amber-950 shadow-xs">Matahari</div>
              <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center text-[7px] font-bold text-white shadow-xs">Bumi</div>
              <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center text-[6px] font-bold text-white">Bulan</div>
            </div>
            <p className="mt-2 text-[11px] text-slate-600">
              Posisi segaris (Konjungsi / Oposisi saat Bulan Baru &amp; Bulan Purnama). Gravitasi bergabung = pasang tertinggi &amp; surut terendah.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs">
            <div className="font-bold text-slate-900 mb-1.5">Pasang Perbani (Neap Tide)</div>
            <div className="flex flex-col items-center justify-center py-2 bg-slate-50 rounded-lg">
              <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center text-[6px] font-bold text-white mb-1">Bulan</div>
              <div className="flex items-center gap-6">
                <div className="h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-[7px] font-bold text-amber-950">Matahari</div>
                <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center text-[7px] font-bold text-white">Bumi</div>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-600">
              Posisi membentuk sudut 90° (Kuadratur saat Bulan Kuartir I &amp; III). Gaya gravitasi saling melemahkan = tunggang pasut minimum.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 3: KEBENCANAAN
         ======================================================== */}
      {moduleId === 'kebencanaan' && sectionIndex === 0 && (
        // 3.0 Rumus Risiko Bencana
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="rounded-lg border border-red-200 bg-red-50/60 p-2">
              <span className="font-bold text-red-900 block">Bahaya / Hazard (H):</span>
              <input
                type="range"
                min="1"
                max="10"
                value={hazardVal}
                onChange={(e) => setHazardVal(parseInt(e.target.value))}
                className="w-full mt-1 accent-red-600"
              />
              <span className="font-mono text-[10px] text-red-800">Skor: {hazardVal} / 10</span>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-2">
              <span className="font-bold text-amber-900 block">Kerentanan / Vuln (V):</span>
              <input
                type="range"
                min="1"
                max="10"
                value={vulnVal}
                onChange={(e) => setVulnVal(parseInt(e.target.value))}
                className="w-full mt-1 accent-amber-600"
              />
              <span className="font-mono text-[10px] text-amber-800">Skor: {vulnVal} / 10</span>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
              <span className="font-bold text-emerald-900 block">Kapasitas / Cap (C):</span>
              <input
                type="range"
                min="1"
                max="10"
                value={capVal}
                onChange={(e) => setCapVal(parseInt(e.target.value))}
                className="w-full mt-1 accent-emerald-600"
              />
              <span className="font-mono text-[10px] text-emerald-800">Skor: {capVal} / 10</span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-900 p-3 text-white">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Formula Risiko: R = (H × V) / C</div>
              <div className="text-sm font-bold mt-0.5">
                Nilai Indeks Risiko: <span className="font-mono text-amber-400 text-base">{riskScore}</span>
              </div>
            </div>
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                riskScore > 10 ? 'bg-red-600 text-white' : riskScore > 5 ? 'bg-amber-500 text-slate-900' : 'bg-emerald-600 text-white'
              }`}
            >
              {riskScore > 10 ? 'Risiko TINGGI' : riskScore > 5 ? 'Risiko SEDANG' : 'Risiko RENDAH'}
            </span>
          </div>
        </div>
      )}

      {moduleId === 'kebencanaan' && sectionIndex === 1 && (
        // 3.1 Siklus Bencana
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-2.5 text-center">
            <span className="font-bold text-blue-900 block text-[11px]">1. Pencegahan &amp; Mitigasi</span>
            <span className="text-[10px] text-blue-700 block mt-1">Zonasi rawan, tanggul, kode bangunan tahan gempa</span>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2.5 text-center">
            <span className="font-bold text-amber-900 block text-[11px]">2. Kesiapsiagaan</span>
            <span className="text-[10px] text-amber-700 block mt-1">Sistem peringatan dini (EWS), gladi evakuasi</span>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/70 p-2.5 text-center">
            <span className="font-bold text-red-900 block text-[11px]">3. Tanggap Darurat</span>
            <span className="text-[10px] text-red-700 block mt-1">SAR, pertolongan medis, hunian sementara</span>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 text-center">
            <span className="font-bold text-emerald-900 block text-[11px]">4. Pemulihan &amp; Rekonstruksi</span>
            <span className="text-[10px] text-emerald-700 block mt-1">Rehabilitasi fisik &amp; sosial: Build Back Better</span>
          </div>
        </div>
      )}

      {moduleId === 'kebencanaan' && sectionIndex === 2 && (
        // 3.2 Skala Pengukuran Geografi
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">Skala Richter (SR / Mw)</strong>
            <p className="text-[11px] text-slate-600 mt-1">Mengukur besaran ENERGI gelombang seismik riil di hiposentrum. Bersifat logaritmik (tiap naik 1 tingkat = energi berlipat ~32x).</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">Skala MMI (I - XII)</strong>
            <p className="text-[11px] text-slate-600 mt-1">Mengukur INTENSITAS goncangan berdasarkan kerusakan fisik bangunan dan persepsi subjektif orang di permukaan bumi.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">Skala VEI (0 - 8)</strong>
            <p className="text-[11px] text-slate-600 mt-1">Volcanic Explosivity Index untuk mengukur daya letusan gunung api berdasarkan volume material piroklastik &amp; tinggi kolom asap.</p>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 4: SUMBERDAYA
         ======================================================== */}
      {moduleId === 'sumberdaya' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-lg border border-indigo-200 bg-indigo-50/70 p-2.5">
            <strong className="text-indigo-950 block">Golongan A (Strategis)</strong>
            <p className="text-[11px] text-indigo-900 mt-1">Penting bagi pertahanan &amp; stabilitas ekonomi negara: Minyak bumi, Gas alam, Batubara, Uranium/Radium.</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2.5">
            <strong className="text-amber-950 block">Golongan B (Vital)</strong>
            <p className="text-[11px] text-amber-900 mt-1">Menjamin hajat hidup orang banyak: Emas, Tembaga, Timah, Nikel, Bauksit, Besi, Seng, Perak.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-100 p-2.5">
            <strong className="text-slate-900 block">Golongan C (Industri)</strong>
            <p className="text-[11px] text-slate-700 mt-1">Bahan galian non-strategis untuk konstruksi: Pasir, Batu kapur, Andesit, Marmer, Kaolin, Lempung.</p>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 5: LINGKUNGAN & SDGS
         ======================================================== */}
      {moduleId === 'lingkungan-sdgs' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <span className="font-bold text-emerald-900 block">1. Lingkungan (Planet)</span>
              <span className="text-[10px] text-emerald-700">Konservasi keanekaragaman hayati, emisi karbon, SDA</span>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <span className="font-bold text-blue-900 block">2. Sosial (People)</span>
              <span className="text-[10px] text-blue-700">Keadilan antargenerasi, hak adat, pengentasan kemiskinan</span>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <span className="font-bold text-amber-900 block">3. Ekonomi (Profit)</span>
              <span className="text-[10px] text-amber-700">Efisiensi sirkular, teknologi bersih, pertumbuhan inklusif</span>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-700">
            <strong>Inti AMDAL:</strong> Instrumen pencegahan kerusakan lingkungan wajib bagi usaha berskala dampak penting. Terdiri dari KA-ANDAL (Kerangka Acuan), ANDAL (Analisis Dampak Lingkungan), RKL (Rencana Pengelolaan Lingkungan), dan RPL (Rencana Pemantauan Lingkungan).
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 6: GEOMORFOLOGI
         ======================================================== */}
      {moduleId === 'geomorfologi' && sectionIndex === 0 && (
        // 6.0 Kurva Hjulstrom
        <div className="space-y-2">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 500 130" className="w-full h-auto">
              <line x1="40" y1="110" x2="480" y2="110" stroke="#334155" strokeWidth="2" />
              <line x1="40" y1="10" x2="40" y2="110" stroke="#334155" strokeWidth="2" />
              <text x="260" y="125" textAnchor="middle" className="text-[8px] font-bold fill-slate-700">Ukuran Butir Sedimen (Lempung 0.002mm → Pasir 0.2mm → Kerikil 20mm)</text>
              <text x="35" y="18" textAnchor="end" className="text-[8px] font-bold fill-slate-700">Kecepatan (cm/s)</text>

              {/* Erosion Curve with clay anomaly */}
              <path d="M 40,25 Q 90,75 180,60 T 340,30 T 480,15" fill="none" stroke="#dc2626" strokeWidth="2.5" />
              {/* Deposition curve */}
              <path d="M 40,108 Q 120,105 220,90 T 360,55 T 480,30" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="3,2" />

              <text x="180" y="30" className="text-[9px] font-bold fill-rose-700">ZONA EROSI</text>
              <text x="230" y="75" className="text-[9px] font-bold fill-amber-700">ZONA TRANSPORTASI</text>
              <text x="330" y="100" className="text-[9px] font-bold fill-sky-700">ZONA SEDIMENTASI</text>
              <text x="60" y="45" className="text-[7px] font-bold fill-red-800">Kohesi Lempung Kuat!</text>
            </svg>
          </div>
          <p className="text-[11px] text-slate-600">
            <strong>Anomali Lempung:</strong> Lempung berbutir sangat halus tetapi butuh kecepatan erosi sangat tinggi karena gaya kohesi elektrostatik antarlempeng mineralnya sangat kuat.
          </p>
        </div>
      )}

      {moduleId === 'geomorfologi' && sectionIndex === 1 && (
        // 6.1 Karst Topography
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <svg viewBox="0 0 500 130" className="w-full h-auto">
            <path d="M 10,45 Q 60,20 110,45 Q 150,75 190,45 Q 240,15 290,45 Q 330,85 370,45 Q 420,15 480,50" fill="none" stroke="#64748b" strokeWidth="2" />
            <rect x="10" y="45" width="470" height="80" fill="#f1f5f9" />
            <ellipse cx="240" cy="85" rx="45" ry="20" fill="#94a3b8" />
            <path d="M 220,65 L 225,80 L 230,65" fill="#334155" />
            <path d="M 245,65 L 250,85 L 255,65" fill="#334155" />
            <path d="M 222,105 L 227,92 L 232,105" fill="#334155" />

            <text x="150" y="65" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">Doline (Sinkhole)</text>
            <text x="330" y="70" textAnchor="middle" className="text-[8px] font-bold fill-amber-900">Uvala</text>
            <text x="240" y="75" textAnchor="middle" className="text-[7px] font-bold fill-slate-900">Stalaktit (Atas)</text>
            <text x="240" y="100" textAnchor="middle" className="text-[7px] font-bold fill-slate-900">Stalagmit (Bawah)</text>
            <text x="240" y="122" textAnchor="middle" className="text-[8px] font-bold fill-blue-700">Sungai Bawah Tanah (Ponor)</text>
          </svg>
        </div>
      )}

      {moduleId === 'geomorfologi' && sectionIndex === 2 && (
        // 6.2 Arid & Glacial
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
            <strong className="text-amber-900 block text-[11px]">Barchan</strong>
            <span className="text-[10px] text-amber-700">Bulan sabit, tanduk searah tiupan angin</span>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
            <strong className="text-amber-900 block text-[11px]">Parabolik</strong>
            <span className="text-[10px] text-amber-700">Tanduk berlawanan arah angin (terpancang vegetasi)</span>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-2">
            <strong className="text-sky-900 block text-[11px]">Cirque &amp; Horn</strong>
            <span className="text-[10px] text-sky-700">Mangkuk erosi glasial &amp; puncak piramida lancip</span>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-2">
            <strong className="text-sky-900 block text-[11px]">U-Shaped Valley</strong>
            <span className="text-[10px] text-sky-700">Lembah palung lebar bekas gletser</span>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 7: GEOLOGI
         ======================================================== */}
      {moduleId === 'geologi' && sectionIndex === 0 && (
        // 7.0 Interior Bumi
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <svg viewBox="0 0 500 130" className="w-full h-auto">
            <circle cx="250" cy="65" r="55" fill="#fdba74" stroke="#c2410c" strokeWidth="1.5" />
            <circle cx="250" cy="65" r="38" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="250" cy="65" r="16" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />

            <text x="250" y="68" textAnchor="middle" className="text-[7px] font-bold fill-white">Inti Padat</text>
            <text x="250" y="42" textAnchor="middle" className="text-[8px] font-bold fill-amber-950">Inti Luar Cair (Fluida)</text>
            <text x="345" y="45" className="text-[8px] font-semibold fill-slate-700">Mantel Padat</text>
            <text x="345" y="70" className="text-[8px] font-bold fill-rose-700">Zona Bayangan S (&gt;103°)</text>
            <text x="40" y="70" className="text-[8px] font-bold fill-rose-700">Gelombang S Hilang di Fluida</text>
          </svg>
        </div>
      )}

      {moduleId === 'geologi' && sectionIndex === 1 && (
        // 7.1 Bowen Reaction Series
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 border-b border-slate-100 pb-1.5 mb-2">
            <span className="text-emerald-700">Cabang Diskontinu: Olivin → Piroksen → Amfibol → Biotit</span>
            <span className="text-amber-700">Cabang Kontinu: Anortit (Ca) → Albit (Na)</span>
          </div>
          <div className="rounded bg-indigo-50 p-2 text-center text-xs font-bold text-indigo-900">
            Fase Pendinginan Akhir (Suhu Rendah ~700°C): K-Feldspar (Ortoklas) → Muskovit → KUARSA
          </div>
        </div>
      )}

      {moduleId === 'geologi' && sectionIndex === 2 && (
        // 7.2 Siklus Wilson
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 text-center text-[10px]">
          <div className="rounded bg-slate-100 p-1.5 font-bold">1. Rifting Benua<br/><span className="font-normal text-slate-500">Lembah Afrika</span></div>
          <div className="rounded bg-sky-50 p-1.5 font-bold text-sky-900">2. Laut Sempit<br/><span className="font-normal text-sky-700">Laut Merah</span></div>
          <div className="rounded bg-blue-50 p-1.5 font-bold text-blue-900">3. Matang<br/><span className="font-normal text-blue-700">Samudra Atlantik</span></div>
          <div className="rounded bg-amber-50 p-1.5 font-bold text-amber-900">4. Subduksi<br/><span className="font-normal text-amber-700">Samudra Pasifik</span></div>
          <div className="rounded bg-orange-50 p-1.5 font-bold text-orange-900">5. Penutupan<br/><span className="font-normal text-orange-700">Laut Mediterania</span></div>
          <div className="rounded bg-rose-50 p-1.5 font-bold text-rose-900">6. Kolisi<br/><span className="font-normal text-rose-700">Pegunungan Himalaya</span></div>
        </div>
      )}

      {/* ========================================================
          MODULE 8: GEOGRAFI PERTANIAN
         ======================================================== */}
      {moduleId === 'geografi-pertanian' && (
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 500 130" className="w-full h-auto">
              <circle cx="120" cy="65" r="55" fill="#fef3c7" stroke="#d97706" />
              <circle cx="120" cy="65" r="42" fill="#ffedd5" stroke="#ea580c" />
              <circle cx="120" cy="65" r="28" fill="#ecfccb" stroke="#65a30d" />
              <circle cx="120" cy="65" r="15" fill="#dbeafe" stroke="#2563eb" />
              <circle cx="120" cy="65" r="5" fill="#0f172a" />
              <text x="120" y="67" textAnchor="middle" className="text-[5px] font-bold fill-white">Kota</text>

              <g transform="translate(200, 10)">
                <text x="0" y="10" className="text-[10px] font-bold fill-slate-900">Cincin Konsentris Von Thünen (1826):</text>
                <text x="0" y="28" className="text-[9px] fill-blue-800">• Cincin 1: Sayuran Segar &amp; Susu (Mudah Rusak)</text>
                <text x="0" y="44" className="text-[9px] fill-lime-800">• Cincin 2: Kayu Bakar &amp; Hutan Produksi (Ongkos Angkut Berat)</text>
                <text x="0" y="60" className="text-[9px] fill-orange-800">• Cincin 3: Tanaman Pangan &amp; Gandum (Crop Rotation)</text>
                <text x="0" y="76" className="text-[9px] fill-amber-800">• Cincin 4: Peternakan Ekstensif (Ranching Hewan)</text>
                <text x="0" y="100" className="text-[9px] font-mono font-bold fill-indigo-800">Bid-Rent: Sewa lahan menurun seiring bertambahnya jarak dari kota</text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 9: KEPENDUDUKAN
         ======================================================== */}
      {moduleId === 'kependudukan' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="rounded-lg border border-rose-200 bg-rose-50/70 p-3 text-center">
            <strong className="text-rose-950 block text-[11px]">1. Ekspansif (Muda)</strong>
            <p className="text-[10px] text-rose-800 mt-1">Bentuk Kerucut/Limas. Kelahiran &amp; kematian tinggi, proporsi anak muda besar (Indonesia, Nigeria).</p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-3 text-center">
            <strong className="text-blue-950 block text-[11px]">2. Stasioner (Dewasa)</strong>
            <p className="text-[10px] text-blue-800 mt-1">Bentuk Granat. Tingkat kelahiran seimbang dengan kematian, pertumbuhan populasi mendekati nol (Swiss, Swedia).</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-center">
            <strong className="text-amber-950 block text-[11px]">3. Konstruktif (Tua)</strong>
            <p className="text-[10px] text-amber-800 mt-1">Bentuk Guci/Batu Nisan. Kelahiran anjlok drastis, populasi didominasi lansia (Jepang, Jerman).</p>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 10: GEOGRAFI EKONOMI
         ======================================================== */}
      {moduleId === 'geografi-ekonomi' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-slate-100 p-2.5 text-xs">
            <span className="font-semibold text-slate-700">Simulasi Indeks Material (IM) Weber:</span>
            <div className="flex items-center gap-2 font-mono font-bold text-blue-700">
              <input
                type="range"
                min="0.4"
                max="2.5"
                step="0.1"
                value={weberIM}
                onChange={(e) => setWeberIM(parseFloat(e.target.value))}
                className="w-28 accent-blue-600"
              />
              <span>IM = {weberIM}</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed">
            {weberIM > 1 ? (
              <div className="text-amber-900 font-medium">
                <strong>IM &gt; 1 (Industri Bobot Menyusut / Weight-Losing):</strong> Bahan baku berkurang beratnya saat diolah (contoh: peleburan tembaga, pabrik gula tebu). Lokasi pabrik wajib mendekati <strong>SUMBER BAHAN MENTAH</strong> untuk memangkas biaya transportasi!
              </div>
            ) : weberIM < 1 ? (
              <div className="text-blue-900 font-medium">
                <strong>IM &lt; 1 (Industri Bobot Bertambah / Weight-Gaining):</strong> Produk jadi lebih berat daripada bahan baku (contoh: pabrik minuman botol, perakitan motor). Lokasi pabrik wajib mendekati <strong>PASAR</strong>!
              </div>
            ) : (
              <div className="text-emerald-900 font-medium">
                <strong>IM = 1:</strong> Lokasi bebas (Footloose industry), ongkos angkut bahan baku sama dengan barang jadi.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 11: GEOGRAFI PEMBANGUNAN
         ======================================================== */}
      {moduleId === 'geografi-pembangunan' && (
        <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs">
          <div className="font-bold text-slate-900 mb-2">Dinamika Pusat Pertumbuhan (Core) vs Pinggiran (Periphery):</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="rounded bg-emerald-50 p-2 text-emerald-900">
              <strong>Spread / Trickle-Down Effect:</strong> Efek positif penyebaran modal, teknologi, dan lapangan kerja dari kota inti ke wilayah desa/pinggiran di sekitarnya.
            </div>
            <div className="rounded bg-rose-50 p-2 text-rose-900">
              <strong>Backwash / Polarization Effect:</strong> Efek sedot negatif di mana tenaga kerja terdidik, bahan mentah, dan modal dari desa terserap habis ke kota inti, memicu ketimpangan regional.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 12: GEOGRAFI KOTA
         ======================================================== */}
      {moduleId === 'geografi-kota' && sectionIndex === 0 && (
        // Tiga Model Morfologi Kota
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">1. Burgess (Konsentris)</strong>
            <p className="text-[11px] text-slate-600 mt-1">5 zona lingkaran konsentris: 1. CBD, 2. Zona Transisi (slum), 3. Rumah Pekerja, 4. Menengah, 5. Penglaju (Commuter).</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">2. Hoyt (Sektoral)</strong>
            <p className="text-[11px] text-slate-600 mt-1">Perkembangan kota tidak melingkar rata, melainkan membentuk baji/sektor sepanjang koridor jalur rel kereta &amp; jalan raya utama.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
            <strong className="text-slate-900 block">3. Harris-Ullman (Inti Berganda)</strong>
            <p className="text-[11px] text-slate-600 mt-1">Kota modern memiliki banyak simpul pertumbuhan independen: pusat bisnis kota, distrik industri manufaktur, kawasan suburb mandiri.</p>
          </div>
        </div>
      )}

      {moduleId === 'geografi-kota' && sectionIndex === 1 && (
        // Christaller Central Place
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-2.5 text-center">
            <strong className="text-blue-900 block">K = 3 (Asas Pasar)</strong>
            <span className="text-[11px] text-blue-700">1 kota pusat melayani 1/3 bagian dari 6 heksagon tetangga di sekitarnya</span>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-center">
            <strong className="text-amber-900 block">K = 4 (Asas Transportasi)</strong>
            <span className="text-[11px] text-amber-700">Rute lalu lintas paling efisien, melayani 1/2 bagian dari heksagon sekitarnya</span>
          </div>
          <div className="rounded-lg border border-pink-200 bg-pink-50 p-2.5 text-center">
            <strong className="text-pink-900 block">K = 7 (Asas Administrasi)</strong>
            <span className="text-[11px] text-pink-700">Kedaulatan administratif penuh mencakup seluruh 6 wilayah heksagon sekeliling</span>
          </div>
        </div>
      )}

      {moduleId === 'geografi-kota' && sectionIndex === 2 && (
        // Titik Henti Carrothers Simulator
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="rounded-lg bg-slate-100 p-2">
              <span className="text-slate-600 block">Populasi Kota A:</span>
              <input
                type="number"
                value={popA}
                onChange={(e) => setPopA(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full mt-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono font-bold"
              />
            </div>
            <div className="rounded-lg bg-slate-100 p-2">
              <span className="text-slate-600 block">Populasi Kota B:</span>
              <input
                type="number"
                value={popB}
                onChange={(e) => setPopB(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full mt-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono font-bold"
              />
            </div>
            <div className="rounded-lg bg-slate-100 p-2">
              <span className="text-slate-600 block">Jarak AB (km):</span>
              <input
                type="number"
                value={distanceAB}
                onChange={(e) => setDistanceAB(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full mt-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono font-bold"
              />
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3 text-xs text-indigo-950 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-indigo-700 block">Rumus: DAB = dAB / (1 + √(PB / PA))</span>
              <span className="font-bold text-sm">
                Lokasi Titik Henti: <strong className="text-blue-700 font-mono text-base">{breakPointDist} km</strong> dari Kota A
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              (Lebih dekat ke kota berpenduduk lebih kecil)
            </span>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 13: PARIWISATA
         ======================================================== */}
      {moduleId === 'pariwisata' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1 text-[10px]">
            {['1. Eksplorasi', '2. Keterlibatan', '3. Pembangunan', '4. Konsolidasi', '5. Stagnasi', '6. Peremajaan/Penurunan'].map((s, idx) => (
              <button
                key={idx}
                onClick={() => setButlerStage(idx + 1)}
                className={`rounded-md px-2 py-1 font-semibold transition ${
                  butlerStage === idx + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 leading-relaxed">
            {butlerStage === 1 && 'Tahap Eksplorasi: Wisatawan tipe allocentric/petualang datang dalam jumlah sedikit ke alam perawan tanpa fasilitas komersial.'}
            {butlerStage === 2 && 'Tahap Keterlibatan (Involvement): Warga lokal mulai menyediakan akomodasi sederhana (homestay, warung makan, pemandu wisata lokal).'}
            {butlerStage === 3 && 'Tahap Pembangunan (Development): Investor besar masuk, hotel berbintang dibangun, promosi pariwisata massal diluncurkan.'}
            {butlerStage === 4 && 'Tahap Konsolidasi: Tingkat pertumbuhan mulai melambat meski total wisatawan masih sangat tinggi, ketergantungan ekonomi masif.'}
            {butlerStage === 5 && 'Tahap Stagnasi: Daya dukung lingkungan (carrying capacity) terlampaui, kemacetan, kerusakan terumbu karang/sampah menumpuk.'}
            {butlerStage === 6 && 'Dua Opsi Akhir Butler: Peremajaan (Rejuvenation jika destinasi di-rebranding dengan atraksi baru) ATAU Penurunan (Decline jika ditinggalkan).'}
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 14: GEOGRAFI BUDAYA
         ======================================================== */}
      {moduleId === 'geografi-budaya' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-2.5">
            <strong className="text-blue-900 block text-[11px]">Difusi Menjalar (Contagious)</strong>
            <p className="text-[10px] text-blue-800 mt-0.5">Menyebar ke seluruh tetangga terdekat secara bergelombang tanpa memandang hierarki status.</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-2.5">
            <strong className="text-amber-900 block text-[11px]">Difusi Hierarkis (Hierarchical)</strong>
            <p className="text-[10px] text-amber-800 mt-0.5">Meloncat dari pusat simpul kota metropolis / figur berkuasa turun ke kota tier-2 dan pedesaan.</p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5">
            <strong className="text-emerald-900 block text-[11px]">Difusi Stimulus (Adaptif)</strong>
            <p className="text-[10px] text-emerald-800 mt-0.5">Ide dasar diadopsi, tetapi bentuk penerapannya diubah total agar selaras dengan norma lokal.</p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50/70 p-2.5">
            <strong className="text-purple-900 block text-[11px]">Difusi Relokasi (Migrasi)</strong>
            <p className="text-[10px] text-purple-800 mt-0.5">Populasi manusia berpindah secara fisik membawa adat istiadat, bahasa, dan agama ke tempat baru.</p>
          </div>
        </div>
      )}

      {/* ========================================================
          MODULE 15: KARTOGRAFI & SIG
         ======================================================== */}
      {moduleId === 'kartografi-sig' && sectionIndex === 0 && (
        // Kontur, Lereng, Skala
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-slate-100 p-2.5 text-xs">
            <span className="font-semibold text-slate-700">Pilih Skala Peta:</span>
            <select
              value={scaleDenom}
              onChange={(e) => setScaleDenom(parseInt(e.target.value))}
              className="rounded border border-slate-300 bg-white px-2 py-1 font-mono font-bold text-blue-700 text-xs"
            >
              <option value={25000}>1 : 25.000 (Peta Detail RBI)</option>
              <option value={50000}>1 : 50.000 (Peta Standar Bakosurtanal)</option>
              <option value={100000}>1 : 100.000</option>
              <option value={250000}>1 : 250.000</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-2.5">
              <span className="font-mono text-[10px] text-indigo-700 block">Rumus: CI = 1 / 2000 × Skala</span>
              <span className="font-bold text-indigo-950 text-sm">
                Kontur Interval (CI): <span className="font-mono text-blue-700 text-base">{contourInterval} meter</span>
              </span>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-2.5 text-[11px] text-slate-700 leading-tight">
              <strong>Rule of V's Lembah Sungai:</strong> Garis kontur yang memotong aliran sungai selalu membentuk huruf <strong>"V" yang meruncing mengarah ke HULU (elevasi tinggi)</strong>, sedangkan air mengalir ke arah sebaliknya (hilir).
            </div>
          </div>
        </div>
      )}

      {moduleId === 'kartografi-sig' && sectionIndex === 1 && (
        // Model Data SIG & Analisis
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-3">
            <strong className="text-sky-900 block text-[11px]">Model Data Raster</strong>
            <p className="text-[11px] text-sky-800 mt-1">
              Disimpan dalam matriks sel piksel (grid baris dan kolom). Sangat ideal untuk data kontinu: elevasi medan (DEM/SRTM), citra satelit multispektral Landsat/Sentinel, suhu permukaan, dan curah hujan.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-3">
            <strong className="text-emerald-900 block text-[11px]">Model Data Vektor</strong>
            <p className="text-[11px] text-emerald-800 mt-1">
              Disimpan dalam koordinat kartesian ($x, y$): Titik (lokasi stasiun gempa), Garis (jaringan jalan &amp; sungai), dan Poligon (batas administrasi kabupaten &amp; zonasi hutan).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
