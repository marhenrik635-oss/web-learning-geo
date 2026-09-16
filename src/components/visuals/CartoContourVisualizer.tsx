'use client';

import React, { useState } from 'react';
import { Map, Calculator, ArrowUpRight, Compass, Info } from 'lucide-react';

export default function CartoContourVisualizer() {
  const [scaleDenom, setScaleDenom] = useState<number>(50000); // 1:50,000
  const [mapDistanceCm, setMapDistanceCm] = useState<number>(4); // 4 cm on map
  const [contourSteps, setContourSteps] = useState<number>(6); // 6 contour lines crossed

  // Formula: CI = (1 / 2000) * Skala
  const contourInterval = Math.round((1 / 2000) * scaleDenom);

  // Field distance in meters: (mapDistanceCm * scaleDenom) / 100
  const fieldDistanceMeters = (mapDistanceCm * scaleDenom) / 100;

  // Elevation change: contourSteps * CI
  const deltaH = contourSteps * contourInterval;

  // Slope percentage: (deltaH / fieldDistanceMeters) * 100
  const slopePercent = fieldDistanceMeters > 0 ? (deltaH / fieldDistanceMeters) * 100 : 0;

  // Slope degrees: atan(deltaH / fieldDistanceMeters) * (180 / PI)
  const slopeDegrees =
    fieldDistanceMeters > 0 ? Math.atan(deltaH / fieldDistanceMeters) * (180 / Math.PI) : 0;

  // Van Zuidam Terrain Classification
  const getVanZuidamClass = (pct: number) => {
    if (pct <= 2) return { label: 'Datar / Hampir Datar (0–2%)', color: 'text-emerald-700 bg-emerald-50' };
    if (pct <= 7) return { label: 'Landai (2–7%)', color: 'text-green-700 bg-green-50' };
    if (pct <= 15) return { label: 'Agak Curam (7–15%)', color: 'text-lime-700 bg-lime-50' };
    if (pct <= 30) return { label: 'Curam (15–30%)', color: 'text-amber-700 bg-amber-50' };
    if (pct <= 70) return { label: 'Sangat Curam (30–70%)', color: 'text-orange-700 bg-orange-50' };
    return { label: 'Terjal / Sangat Terjal (>70%)', color: 'text-red-700 bg-red-50' };
  };

  const vanZuidam = getVanZuidamClass(slopePercent);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-800">
            <Map className="h-3.5 w-3.5" /> Laboratorium Kartografi & Analisis Topografi
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Kalkulator Kontur Interval ($CI$), Beda Tinggi & Kelerengan Lereng
          </h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Visual Topographic Cross Section SVG */}
        <div className="flex flex-col lg:col-span-7">
          <div className="rounded-xl border border-slate-200 bg-slate-950 p-4">
            <svg viewBox="0 0 460 220" className="w-full h-auto">
              <defs>
                <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              {/* Slope Triangle Dynamic */}
              {(() => {
                const maxW = 340;
                const maxH = 140;
                const clampedH = Math.min(maxH, Math.max(20, (deltaH / 400) * maxH));
                const startX = 60;
                const startY = 180;
                const endX = startX + maxW;
                const endY = startY - clampedH;

                return (
                  <g>
                    {/* Ground line */}
                    <line x1="30" y1={startY} x2="430" y2={startY} stroke="#334155" strokeWidth="2" />

                    {/* Slope shape */}
                    <polygon
                      points={`${startX},${startY} ${endX},${startY} ${endX},${endY}`}
                      fill="url(#hillGrad)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                    />

                    {/* Hypotenuse (Slope) */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#38bdf8"
                      strokeWidth="3"
                    />

                    {/* Delta H vertical line */}
                    <line
                      x1={endX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Points Labels */}
                    <circle cx={startX} cy={startY} r="5" fill="#38bdf8" />
                    <text x={startX - 15} y={startY + 18} fill="#94a3b8" fontSize="11" fontWeight="bold">
                      Titik A
                    </text>

                    <circle cx={endX} cy={endY} r="5" fill="#f59e0b" />
                    <text x={endX + 10} y={endY + 5} fill="#f59e0b" fontSize="11" fontWeight="bold">
                      Titik B (+{deltaH} m)
                    </text>

                    {/* Distance label horizontal */}
                    <text x={(startX + endX) / 2} y={startY + 18} fill="#94a3b8" fontSize="10" textAnchor="middle">
                      Jarak Sebenarnya (d) = {fieldDistanceMeters.toLocaleString()} meter
                    </text>

                    {/* Height delta label */}
                    <text
                      x={endX - 10}
                      y={(startY + endY) / 2}
                      fill="#fbbf24"
                      fontSize="10"
                      textAnchor="end"
                    >
                      Δh = {deltaH} m
                    </text>

                    {/* Slope angle arc */}
                    <text x={startX + 45} y={startY - 10} fill="#38bdf8" fontSize="11" fontWeight="bold">
                      θ = {slopeDegrees.toFixed(1)}° ({slopePercent.toFixed(1)}%)
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Interactive Calculation Controls */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Pilihan Skala Peta:
              </label>
              <select
                value={scaleDenom}
                onChange={(e) => setScaleDenom(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                <option value={10000}>1 : 10.000 (CI = 5 m)</option>
                <option value={25000}>1 : 25.000 (CI = 12.5 m)</option>
                <option value={50000}>1 : 50.000 (CI = 25 m - Standar RBI)</option>
                <option value={100000}>1 : 100.000 (CI = 50 m)</option>
                <option value={250000}>1 : 250.000 (CI = 125 m)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Jarak di Peta (d_peta): <span className="font-bold text-blue-600">{mapDistanceCm} cm</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={mapDistanceCm}
                onChange={(e) => setMapDistanceCm(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Jumlah Selang Kontur (n): <span className="font-bold text-blue-600">{contourSteps} selang</span>
              </label>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={contourSteps}
                onChange={(e) => setContourSteps(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Calculation Output Step-by-Step */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Hasil Perhitungan Matematis
            </div>

            <div className="mt-3 space-y-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Kontur Interval (CI):</span>
                <span className="font-mono font-bold text-slate-900">{contourInterval} meter</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Beda Ketinggian (Δh):</span>
                <span className="font-mono font-bold text-amber-700">{deltaH} meter</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Jarak Sebenarnya di Lapangan (d):</span>
                <span className="font-mono font-bold text-slate-900">
                  {fieldDistanceMeters.toLocaleString()} meter ({(fieldDistanceMeters / 1000).toFixed(2)} km)
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600 font-semibold">Kemiringan Lereng (%):</span>
                <span className="font-mono font-bold text-blue-700 text-sm">
                  {slopePercent.toFixed(2)} %
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-semibold">Sudut Kemiringan Lereng (°):</span>
                <span className="font-mono font-bold text-indigo-700 text-sm">
                  {slopeDegrees.toFixed(2)}°
                </span>
              </div>
            </div>
          </div>

          <div className={`rounded-xl border p-3.5 text-xs font-semibold ${vanZuidam.color}`}>
            <span className="text-[11px] uppercase tracking-wider block opacity-70">
              Klasifikasi Morfometri Van Zuidam:
            </span>
            <span className="text-sm font-bold mt-0.5 block">{vanZuidam.label}</span>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-slate-900 block">Rumus Wajib OSN:</span>
            <p className="font-mono text-[11px] text-blue-700">CI = 1/2000 × Skala</p>
            <p className="font-mono text-[11px] text-amber-700">Slope (%) = (Δh / d_lapangan) × 100%</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Catatan: Konversi jarak cm ke meter dengan membagi 100 sebelum menghitung kelerengan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
