'use client';

import React, { useState } from 'react';
import { Layers, Activity, Info } from 'lucide-react';

export default function EarthInteriorVisualizer() {
  const [depth, setDepth] = useState<number>(1000);
  const [showPWave, setShowPWave] = useState<boolean>(true);
  const [showSWave, setShowSWave] = useState<boolean>(true);

  // Layer lookup based on depth
  const getLayerInfo = (d: number) => {
    if (d <= 40) {
      return {
        name: 'Kerak Benua & Samudera (Crust)',
        state: 'Padat (Rigid, rapuh)',
        temp: 'Suhu permukaan s/d ~600°C',
        density: '2.6 s/d 3.0 g/cm³',
        vp: '6.0 – 7.0 km/s',
        vs: '3.5 – 4.0 km/s',
        desc: 'Tersusun atas Sial (granitis, ringan) di benua dan Sima (basaltis, padat) di lantai samudera. Bagian dari litosfer kaku.',
        boundary: 'Batas bawah: Bidang Diskontinuitas Mohorovicic (Moho)',
      };
    } else if (d <= 350) {
      return {
        name: 'Mantel Atas - Astenosfer',
        state: 'Plastis / Semi-cair (Duktilitas tinggi)',
        temp: '~1.000°C s/d 1.400°C',
        density: '3.3 s/d 3.5 g/cm³',
        vp: '7.8 – 8.2 km/s (Zona kecepatan rendah)',
        vs: '4.4 – 4.6 km/s',
        desc: 'Lapisan mantel plastis tempat terjadinya arus konveksi termal yang memicu pemekaran lempeng litosfer di atasnya.',
        boundary: 'Terletak tepat di bawah bidang Moho',
      };
    } else if (d <= 2900) {
      return {
        name: 'Mantel Bawah (Mesosfer Mantel)',
        state: 'Padat (Silikat kaya Fe-Mg)',
        temp: '~1.400°C s/d 3.700°C',
        density: '4.0 s/d 5.6 g/cm³',
        vp: 'Menanjak hingga 13.7 km/s',
        vs: 'Menanjak hingga 7.3 km/s',
        desc: 'Menyusun volume bumi terbesar (~80%). Tekanan litostatik luar biasa menjaga batuan tetap berfase padat meski sangat panas.',
        boundary: 'Batas bawah: Bidang Diskontinuitas Gutenberg (2.900 km)',
      };
    } else if (d <= 5150) {
      return {
        name: 'Inti Luar (Outer Core)',
        state: 'Cair / Cairan Logam Konvektif (Besi-Nikel)',
        temp: '~3.700°C s/d 5.000°C',
        density: '9.9 s/d 12.2 g/cm³',
        vp: 'Anjlok seketika ke 8.1 km/s',
        vs: '0 km/s (GELOMBANG S TIDAK MERAMBAT)',
        desc: 'Cairan besi-nikel penghantar listrik yang terus berputar turbulen, membangkitkan efek dinamo geomagnetik pelindung bumi.',
        boundary: 'Batas bawah: Bidang Diskontinuitas Lehmann (5.150 km)',
      };
    } else {
      return {
        name: 'Inti Dalam (Inner Core)',
        state: 'Padat Kristalin (Besi-Nikel padat murni)',
        temp: '~5.500°C s/d 6.200°C (Lebih panas dari permukaan matahari)',
        density: '12.8 s/d 13.1 g/cm³',
        vp: 'Melompat naik ke ~11.2 km/s',
        vs: '~3.7 km/s (Merambat kembali)',
        desc: 'Tekanan melebihi 3.3 juta atmosfer mengunci atom besi dalam kisi padat meskipun suhunya melampaui titik leleh besi.',
        boundary: 'Pusat Bumi (Radius 6.371 km)',
      };
    }
  };

  const currentLayer = getLayerInfo(depth);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
            <Layers className="h-3.5 w-3.5" /> Laboratorium Seismik & Interior Bumi
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Penampang Stratigrafi Interior Bumi & Zona Bayangan Seismik
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPWave(!showPWave)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              showPWave
                ? 'bg-blue-600 text-white shadow-sm'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Ray Gelombang P {showPWave ? '(Aktif)' : '(Off)'}
          </button>
          <button
            onClick={() => setShowSWave(!showSWave)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              showSWave
                ? 'bg-amber-600 text-white shadow-sm'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Ray Gelombang S {showSWave ? '(Aktif)' : '(Off)'}
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* SVG Earth Cross-Section */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-6">
          <svg viewBox="0 0 400 400" className="h-72 w-72 sm:h-80 sm:w-80 drop-shadow-md">
            <defs>
              {/* Radial Earth Gradients */}
              <radialGradient id="innerCoreGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="60%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
              <radialGradient id="outerCoreGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="80%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </radialGradient>
              <radialGradient id="mantleGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="70%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#451a03" />
              </radialGradient>
              <radialGradient id="crustGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="80%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#075985" />
              </radialGradient>
            </defs>

            {/* Earth Crust Outer (6371km radius, SVG r=190) */}
            <circle cx="200" cy="200" r="190" fill="url(#crustGrad)" stroke="#0f172a" strokeWidth="2" />

            {/* Mantle boundary (from 40km to 2900km, SVG r=185 to r=104) */}
            <circle cx="200" cy="200" r="185" fill="url(#mantleGrad)" stroke="#78350f" strokeWidth="1" />

            {/* Outer Core (Gutenberg 2900km, SVG r=104) */}
            <circle cx="200" cy="200" r="104" fill="url(#outerCoreGrad)" stroke="#ea580c" strokeWidth="1.5" />

            {/* Inner Core (Lehmann 5150km, SVG r=36) */}
            <circle cx="200" cy="200" r="36" fill="url(#innerCoreGrad)" stroke="#b45309" strokeWidth="1.5" />

            {/* Focus / Earthquake Source at Top */}
            <circle cx="200" cy="10" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <text x="200" y="24" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              Episentrum
            </text>

            {/* P-Wave Rays & Shadow Zone (103° to 142°) */}
            {showPWave && (
              <g opacity="0.85">
                {/* Mantle P waves bending through mantle */}
                <path d="M 200 10 Q 130 90 70 170" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3,3" />
                <path d="M 200 10 Q 270 90 330 170" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3,3" />
                {/* P waves penetrating core & refracted to >142 deg */}
                <path d="M 200 10 Q 185 180 180 388" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                <path d="M 200 10 Q 215 180 220 388" fill="none" stroke="#3b82f6" strokeWidth="2.5" />

                {/* Shadow zone arcs */}
                <path
                  d="M 52 260 A 190 190 0 0 0 85 325"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="6"
                  strokeOpacity="0.8"
                />
                <path
                  d="M 348 260 A 190 190 0 0 1 315 325"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="6"
                  strokeOpacity="0.8"
                />
                <text x="35" y="300" fill="#dc2626" fontSize="9" fontWeight="bold">
                  Shadow P (103°-142°)
                </text>
              </g>
            )}

            {/* S-Wave Rays & Shadow Zone (>103°) */}
            {showSWave && (
              <g opacity="0.85">
                {/* S-Waves direct only in mantle */}
                <path d="M 200 10 Q 140 100 80 195" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <path d="M 200 10 Q 260 100 320 195" fill="none" stroke="#f59e0b" strokeWidth="2" />
                {/* Total S shadow arc across whole bottom >103 deg */}
                <path
                  d="M 52 260 A 190 190 0 0 0 348 260"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="4"
                  strokeDasharray="4,4"
                  strokeOpacity="0.9"
                />
                <text x="200" y="375" textAnchor="middle" fill="#ea580c" fontSize="9" fontWeight="bold">
                  Zona Bayangan Total Gelombang S (&gt;103°)
                </text>
              </g>
            )}

            {/* Selected Depth Indicator Indicator Line */}
            {(() => {
              const currentR = 190 - (depth / 6371) * 190;
              return (
                <circle
                  cx="200"
                  cy="200"
                  r={Math.max(4, currentR)}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="4,3"
                />
              );
            })()}
          </svg>

          <p className="mt-3 text-center text-xs text-slate-500">
            Garis putus-putus putih merefleksikan posisi kedalaman yang Anda pilih pada slider.
          </p>
        </div>

        {/* Dynamic Diagnostics Panel */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Kedalaman Eksplorasi:</span>
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-white">
                  {depth.toLocaleString()} km / 6.371 km
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="6371"
                step="10"
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>0 km (Kerak)</span>
                <span>2.900 km (Gutenberg)</span>
                <span>5.150 km (Lehmann)</span>
                <span>6.371 km (Inti)</span>
              </div>
            </div>

            {/* Layer Info Box */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Hasil Diagnosa Lapisan
                </span>
                <span className="text-xs font-bold text-blue-600">{currentLayer.state}</span>
              </div>
              <h4 className="mt-1 text-base font-bold text-slate-900">{currentLayer.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{currentLayer.desc}</p>
              <div className="mt-3 rounded-lg border border-amber-200/80 bg-amber-50/80 p-2.5 text-xs text-amber-900">
                <span className="font-semibold">Batas Terdekat:</span> {currentLayer.boundary}
              </div>
            </div>

            {/* Scientific Telemetry Table */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                <span className="text-[11px] font-medium text-slate-400">Suhu (°C)</span>
                <p className="mt-0.5 text-xs font-bold text-slate-800">{currentLayer.temp}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                <span className="text-[11px] font-medium text-slate-400">Densitas (ρ)</span>
                <p className="mt-0.5 text-xs font-bold text-slate-800">{currentLayer.density}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                <span className="text-[11px] font-medium text-slate-400">Kecepatan P (Vp)</span>
                <p className="mt-0.5 text-xs font-bold text-blue-600">{currentLayer.vp}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                <span className="text-[11px] font-medium text-slate-400">Kecepatan S (Vs)</span>
                <p className="mt-0.5 text-xs font-bold text-amber-600">{currentLayer.vs}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50/60 p-3 text-xs text-blue-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <p>
              <strong>Tips OSN:</strong> Jika ditanya bukti utama inti luar berbentuk cair, jawablah dengan fenomena{' '}
              <strong>hilangnya Gelombang S pada stasiun seismograf di sudut &gt;103°</strong> dari episentrum, karena
              gelombang geser tidak dapat merambat melalui fluida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
