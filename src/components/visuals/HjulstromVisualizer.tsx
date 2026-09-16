'use client';

import React, { useState } from 'react';
import { Waves, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ParticleType {
  name: string;
  sizeMm: number;
  label: string;
  category: string;
}

const PARTICLES: ParticleType[] = [
  { name: 'Lempung (Clay)', sizeMm: 0.001, label: '<0.002 mm', category: 'Kohesif Sangat Halus' },
  { name: 'Lanau (Silt)', sizeMm: 0.02, label: '0.002 – 0.063 mm', category: 'Halus' },
  { name: 'Pasir Halus (Fine Sand)', sizeMm: 0.2, label: '0.063 – 0.2 mm', category: 'Paling Mudah Tererosi' },
  { name: 'Pasir Kasar (Coarse Sand)', sizeMm: 1.0, label: '0.5 – 2.0 mm', category: 'Sedang' },
  { name: 'Kerikil (Gravel)', sizeMm: 8.0, label: '2 – 16 mm', category: 'Kasar' },
  { name: 'Kerakal (Cobble/Boulder)', sizeMm: 64.0, label: '>64 mm', category: 'Sangat Kasar' },
];

export default function HjulstromVisualizer() {
  const [velocity, setVelocity] = useState<number>(15); // cm/s
  const [particleIndex, setParticleIndex] = useState<number>(2); // default Fine Sand

  const currentParticle = PARTICLES[particleIndex];

  // Calculate regime based on empirical Hjulstrom curve approximation
  // Velocity in cm/s, size in mm
  const getRegime = (v: number, d: number) => {
    // Erosion velocity threshold
    let vErosion = 0;
    if (d < 0.01) {
      // Clay cohesion paradox: smaller requires higher velocity!
      vErosion = 100 * Math.pow(0.001 / d, 0.4);
    } else if (d < 0.2) {
      // Minimum erosion velocity around 0.1 - 0.2 mm sand (~15-20 cm/s)
      vErosion = 15;
    } else {
      // Coarse grains follow classic Shields curve
      vErosion = 30 * Math.pow(d, 0.55);
    }

    // Deposition velocity threshold
    let vDeposition = 0;
    if (d < 0.005) {
      vDeposition = 0.01; // stays in suspension indefinitely
    } else {
      vDeposition = 0.8 * Math.pow(d, 0.7);
    }

    if (v >= vErosion) {
      return {
        regime: 'EROSI (Pengikisan & Pengangkatan)',
        color: 'text-red-700 bg-red-50 border-red-200',
        action: 'Arus sungai memiliki energi kinetik cukup kuat untuk MENGANGKAT partikel dari dasar sungai.',
        status: 'erosi',
      };
    } else if (v >= vDeposition) {
      return {
        regime: 'TRANSPORTASI (Hanyutan / Suspensi)',
        color: 'text-blue-700 bg-blue-50 border-blue-200',
        action: 'Partikel yang sudah terangkat akan TETAP HANYUT (tersuspensi atau menggelinding di dasar).',
        status: 'transport',
      };
    } else {
      return {
        regime: 'SEDIMENTASI (Pengendapan)',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        action: 'Energi kinetik air tidak mampu lagi menahan partikel, sehingga partikel MENGENDAP ke dasar saluran.',
        status: 'sedimentasi',
      };
    }
  };

  const state = getRegime(velocity, currentParticle.sizeMm);

  // Map logarithmic coordinates for SVG display (0 to 450 px width, 0 to 220 px height)
  // X: size from 0.0005 mm to 100 mm (log range ~ -3.3 to 2)
  const logMinX = -3.3;
  const logMaxX = 2.0;
  const currentLogX = Math.log10(currentParticle.sizeMm);
  const svgX = ((currentLogX - logMinX) / (logMaxX - logMinX)) * 420 + 30;

  // Y: velocity from 0.1 to 1000 cm/s (log range -1 to 3)
  const logMinY = -1.0;
  const logMaxY = 3.0;
  const currentLogY = Math.log10(velocity);
  const svgY = 220 - ((currentLogY - logMinY) / (logMaxY - logMinY)) * 190 - 15;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800">
            <Waves className="h-3.5 w-3.5" /> Laboratorium Dinamika Sedimen Fluvial
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Simulator Diagram Hjulstrom & Paradoks Kohesi Lempung
          </h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Interactive Log-Scale Graph */}
        <div className="flex flex-col lg:col-span-7">
          <div className="rounded-xl border border-slate-200 bg-slate-950 p-4">
            <svg viewBox="0 0 480 250" className="w-full h-auto">
              <defs>
                <linearGradient id="erosiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="transGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="sedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="40" y1="20" x2="40" y2="210" stroke="#334155" strokeWidth="1" />
              <line x1="40" y1="210" x2="460" y2="210" stroke="#334155" strokeWidth="1" />

              {/* Regimes Filled Polygons */}
              {/* Erosion Curve: High on clay (<0.01mm), dip at sand (~0.2mm), high on gravel */}
              <path
                d="M 40 20 L 40 70 Q 150 140 230 140 Q 350 70 460 20 L 460 20 Z"
                fill="url(#erosiGrad)"
              />
              <path
                d="M 40 70 Q 150 140 230 140 Q 350 70 460 20 L 460 170 Q 300 200 40 210 Z"
                fill="url(#transGrad)"
              />
              <path
                d="M 40 210 Q 300 200 460 170 L 460 210 Z"
                fill="url(#sedGrad)"
              />

              {/* Boundary Curves Lines */}
              <path
                d="M 40 70 Q 150 140 230 140 Q 350 70 460 20"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <path
                d="M 40 210 Q 300 200 460 170"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              />

              {/* Zone Labels */}
              <text x="250" y="55" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">
                ZONA EROSI (Entrainment)
              </text>
              <text x="250" y="115" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">
                ZONA TRANSPORTASI
              </text>
              <text x="320" y="195" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">
                ZONA PENGENDAPAN
              </text>

              {/* Axis Labels */}
              <text x="250" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">
                Ukuran Butir Sedimen: Lempung → Lanau → Pasir → Kerikil → Bongkah
              </text>
              <text x="15" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle" transform="rotate(-90 15,115)">
                Kecepatan Arus (cm/s)
              </text>

              {/* Current Interactive Position Marker */}
              <circle cx={svgX} cy={svgY} r="7" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
              <line x1={svgX} y1={svgY} x2={svgX} y2="210" stroke="#ffffff" strokeDasharray="3,3" strokeWidth="1" />
              <line x1="40" y1={svgY} x2={svgX} y2={svgY} stroke="#ffffff" strokeDasharray="3,3" strokeWidth="1" />
            </svg>
          </div>

          {/* Controls */}
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Kecepatan Arus Air Sungai (v):</span>
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-white">
                  {velocity} cm / detik
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="300"
                step="0.5"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>0.5 cm/s (Arus Tenang)</span>
                <span>50 cm/s (Arus Deras)</span>
                <span>300 cm/s (Banjir Bandang)</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                Pilih Fraksi Butir Sedimen:
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {PARTICLES.map((p, idx) => (
                  <button
                    key={p.name}
                    onClick={() => setParticleIndex(idx)}
                    className={`rounded-lg p-2 text-left text-xs transition ${
                      particleIndex === idx
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">{p.name}</div>
                    <div className="text-[10px] opacity-80">{p.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Output */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
          <div className={`rounded-xl border p-4 ${state.color}`}>
            <div className="text-[11px] font-bold uppercase tracking-wider">
              Status Rejim Hidrolik
            </div>
            <h4 className="mt-1 text-base font-bold">{state.regime}</h4>
            <p className="mt-2 text-xs leading-relaxed">{state.action}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 text-xs">
            <div className="font-bold text-slate-700">Telemetri Butir:</div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-500">Partikel Terpilih:</span>
              <span className="font-bold text-slate-900">{currentParticle.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-500">Diameter Butir:</span>
              <span className="font-mono font-bold text-slate-900">{currentParticle.sizeMm} mm</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-500">Kategori Hidraulik:</span>
              <span className="font-semibold text-blue-700">{currentParticle.category}</span>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-4 text-xs text-amber-900">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
              Paradoks Kohesi Lempung (Clay Paradox):
            </div>
            Partikel lempung (&lt;0.002 mm) memiliki ukuran mikroskopis, namun{' '}
            <strong>memerlukan kecepatan arus yang sangat deras (~100 cm/s)</strong> untuk mulai tererosi dari dasar
            sungai. Hal ini disebabkan oleh daya tarik elektrostatik antar-mineral lempung yang sangat rapat (kohesi).
            Namun, sekali saja lempung terangkat menjadi suspensi, ia tidak akan mengendap bahkan pada air yang hampir
            berhenti!
          </div>
        </div>
      </div>
    </div>
  );
}
