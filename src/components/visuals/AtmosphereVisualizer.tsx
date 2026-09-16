'use client';

import React, { useState } from 'react';
import { CloudSun, Thermometer, Shield, Sparkles, Calculator, Sun, Droplets } from 'lucide-react';

export default function AtmosphereVisualizer() {
  const [viewMode, setViewMode] = useState<'profile' | 'climate'>('profile');
  const [altitude, setAltitude] = useState<number>(10); // km

  // --- CLIMATE CALCULATOR STATE (12 MONTHS RAINFALL mm) ---
  const PRESETS = {
    bogor: { name: 'Bogor (Af - Sangat Basah)', data: [420, 380, 410, 450, 320, 260, 210, 230, 310, 400, 460, 480] },
    jakarta: { name: 'Jakarta (Am - Monsunal)', data: [340, 300, 210, 140, 95, 60, 45, 40, 65, 110, 180, 260] },
    kupang: { name: 'Kupang (Aw - Sabana Kering)', data: [390, 340, 210, 60, 20, 10, 5, 2, 8, 30, 95, 240] },
    palu: { name: 'Palu (Lembah Ekuator Kering)', data: [55, 60, 70, 65, 80, 75, 50, 45, 55, 70, 80, 65] },
  };

  const [monthlyRain, setMonthlyRain] = useState<number[]>(PRESETS.jakarta.data);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

  // Handle single month rain change
  const handleRainChange = (idx: number, val: number) => {
    const next = [...monthlyRain];
    next[idx] = Math.max(0, val);
    setMonthlyRain(next);
  };

  // --- SCHMIDT-FERGUSON CALCULATION ---
  // BB: > 100 mm, BL: 60 - 100 mm, BK: < 60 mm
  const sfBB = monthlyRain.filter((r) => r > 100).length;
  const sfBL = monthlyRain.filter((r) => r >= 60 && r <= 100).length;
  const sfBK = monthlyRain.filter((r) => r < 60).length;
  const sfQ = sfBB > 0 ? (sfBK / sfBB) * 100 : 999;

  const getSFType = (q: number) => {
    if (q < 14.3) return { type: 'Tipe A', label: 'Sangat Basah', desc: 'Hutan hujan tropis lebat, tanaman perkebunan basah', color: 'bg-emerald-100 text-emerald-800' };
    if (q < 33.3) return { type: 'Tipe B', label: 'Basah', desc: 'Hutan hujan tropis, ideal untuk padi & perkebunan', color: 'bg-teal-100 text-teal-800' };
    if (q < 60.0) return { type: 'Tipe C', label: 'Agak Basah', desc: 'Hutan gugur daun tropis, tanaman pangan & perkebunan', color: 'bg-cyan-100 text-cyan-800' };
    if (q < 100.0) return { type: 'Tipe D', label: 'Sedang', desc: 'Hutan musim, cocok untuk pertanian sawah tadah hujan', color: 'bg-blue-100 text-blue-800' };
    if (q < 167.0) return { type: 'Tipe E', label: 'Agak Kering', desc: 'Hutan sabana, tanaman palawija & peternakan', color: 'bg-amber-100 text-amber-800' };
    if (q < 300.0) return { type: 'Tipe F', label: 'Kering', desc: 'Sabana kering, penggembalaan ternak', color: 'bg-orange-100 text-orange-800' };
    if (q < 700.0) return { type: 'Tipe G', label: 'Sangat Kering', desc: 'Padang rumput stepa & semak belukar', color: 'bg-rose-100 text-rose-800' };
    return { type: 'Tipe H', label: 'Ekstrem Kering', desc: 'Gurun atau semi-arid', color: 'bg-red-200 text-red-900' };
  };

  const sfResult = getSFType(sfQ);

  // --- OLDEMAN CALCULATION ---
  // BB: > 200 mm, BL: 100 - 200 mm, BK: < 100 mm
  // Find max consecutive BB and BK
  let maxConsecutiveBB = 0;
  let curBB = 0;
  let maxConsecutiveBK = 0;
  let curBK = 0;

  // Double array to simulate wrap-around seasonality
  const doubled = [...monthlyRain, ...monthlyRain];
  doubled.forEach((r) => {
    if (r > 200) {
      curBB++;
      if (curBB > maxConsecutiveBB) maxConsecutiveBB = Math.min(12, curBB);
    } else {
      curBB = 0;
    }

    if (r < 100) {
      curBK++;
      if (curBK > maxConsecutiveBK) maxConsecutiveBK = Math.min(12, curBK);
    } else {
      curBK = 0;
    }
  });

  const getOldemanZone = (consecBB: number, consecBK: number) => {
    let mainZone = 'E';
    let zoneDesc = 'Pertanian terbatas, hanya palawija lahan kering';
    if (consecBB > 9) {
      mainZone = 'A';
      zoneDesc = 'Dapat menanam padi terus menerus sepanjang tahun (3x tanam)';
    } else if (consecBB >= 7) {
      mainZone = 'B';
      zoneDesc = 'Dapat menanam padi 2 kali setahun + 1 kali palawija';
    } else if (consecBB >= 5) {
      mainZone = 'C';
      zoneDesc = 'Dapat menanam padi 1 kali + 1–2 kali palawija';
    } else if (consecBB >= 3) {
      mainZone = 'D';
      zoneDesc = 'Hanya dapat menanam padi 1 kali dengan varietas genjah / umur pendek';
    }

    let subZone = '1';
    if (consecBK <= 1) subZone = '1';
    else if (consecBK <= 3) subZone = '2';
    else if (consecBK <= 6) subZone = '3';
    else subZone = '4';

    return { code: `${mainZone}${subZone}`, mainZone, subZone, desc: zoneDesc };
  };

  const oldemanResult = getOldemanZone(maxConsecutiveBB, maxConsecutiveBK);

  const getAtmosphereInfo = (alt: number) => {
    if (alt <= 12) {
      const temp = 15 - alt * 6.5;
      const pressure = Math.round(1013.25 * Math.exp(-alt / 7.2));
      return {
        layer: 'Troposfer (0 – 12 km)',
        temp: `${temp.toFixed(1)}°C`,
        pressure: `${pressure} hPa`,
        trend: 'Penurunan suhu teratur (Lapse Rate ~6.5°C per km)',
        phenomena: 'Awan badai Cumulonimbus, hujan, turbulensi penerbangan sipil, badai siklon tropis',
        desc: 'Mengandung 80% total massa atmosfer dan hampir 99% seluruh uap air bumi. Ketinggian lapisan ini bervariasi: ~16 km di khatulistiwa tropis dan hanya ~8 km di kutub.',
      };
    } else if (alt <= 50) {
      const frac = (alt - 12) / (50 - 12);
      const temp = -56 + frac * 56;
      const pressure = Math.max(1, Math.round(180 * Math.exp(-(alt - 12) / 6.5)));
      return {
        layer: 'Stratosfer (12 – 50 km)',
        temp: `${temp.toFixed(1)}°C`,
        pressure: `${pressure} hPa`,
        trend: 'Inversi Suhu (Suhu naik terhadap ketinggian)',
        phenomena: 'Lapisan Ozon maksimum (O3 pada 20–30 km), jalur jelajah pesawat supersonik militer, awan nacreous',
        desc: 'Inversi suhu disebabkan oleh penyerapan radiasi ultraviolet (UV-B dan UV-C) berenergi tinggi oleh molekul ozon. Udara sangat tenang tanpa turbulensi konvektif.',
      };
    } else if (alt <= 85) {
      const frac = (alt - 50) / (85 - 50);
      const temp = 0 - frac * 90;
      return {
        layer: 'Mesosfer (50 – 85 km)',
        temp: `${temp.toFixed(1)}°C`,
        pressure: '< 1 hPa',
        trend: 'Penurunan suhu drastis hingga titik terdingin',
        phenomena: 'Gesekan gas membakar meteorit (bintang jatuh), awan noctilucent bersinar malam',
        desc: 'Lapisan paling dingin di seluruh atmosfer bumi (dapat menyentuh -90°C hingga -100°C di mesopause). Lapisan ini melindungi bumi dari hujan batuan meteorit ruang angkasa.',
      };
    } else {
      const frac = (alt - 85) / 15;
      const temp = -90 + frac * 800;
      return {
        layer: 'Termosfer / Ionosfer (85 – 500+ km)',
        temp: `${Math.round(temp)}°C`,
        pressure: 'Hampir vakum murni',
        trend: 'Pemanasan tajam akibat radiasi foton sinar-X dan UV ekstrem',
        phenomena: 'Pendaran cahaya spektakuler Aurora Borealis / Australis, orbit Stasiun Luar Angkasa ISS (400 km), pemantulan gelombang radio AM',
        desc: 'Meskipun suhu kinetik partikel sangat tinggi (>1.000°C), kita tidak akan merasa panas karena kerapatan partikel gas sangat renggang.',
      };
    }
  };

  const current = getAtmosphereInfo(altitude);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800">
            <CloudSun className="h-3.5 w-3.5" /> Laboratorium Fisika Atmosfer & Klimatologi
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {viewMode === 'profile'
              ? 'Profil Vertikal Termal Atmosfer & Fenomena Cuaca'
              : 'Simulator & Kalkulator Klasifikasi Iklim OSN (Schmidt-Ferguson & Oldeman)'}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('profile')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === 'profile'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Profil Kolom Atmosfer
          </button>
          <button
            onClick={() => setViewMode('climate')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === 'climate'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calculator className="h-3.5 w-3.5" /> Kalkulator Iklim S-F & Oldeman
          </button>
        </div>
      </div>

      {viewMode === 'profile' ? (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* SVG Atmospheric Column Profile */}
          <div className="flex flex-col items-center justify-center lg:col-span-6">
            <div className="w-full rounded-xl border border-slate-200 bg-slate-950 p-4">
              <svg viewBox="0 0 380 320" className="w-full h-auto">
                <defs>
                  <linearGradient id="atmoCol" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="12%" stopColor="#0369a1" />
                    <stop offset="50%" stopColor="#1e1b4b" />
                    <stop offset="85%" stopColor="#020617" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>

                <rect x="50" y="20" width="160" height="280" fill="url(#atmoCol)" stroke="#334155" />

                <path
                  d="M 170 300 L 100 266 L 100 255 L 155 160 L 70 62 L 180 20"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                />

                <line x1="50" y1="266" x2="210" y2="266" stroke="#ffffff" strokeDasharray="3,3" strokeWidth="1" />
                <text x="220" y="268" fill="#94a3b8" fontSize="10">
                  Tropopause (12 km)
                </text>

                <line x1="50" y1="160" x2="210" y2="160" stroke="#ffffff" strokeDasharray="3,3" strokeWidth="1" />
                <text x="220" y="163" fill="#94a3b8" fontSize="10">
                  Stratopause (50 km)
                </text>

                <line x1="50" y1="62" x2="210" y2="62" stroke="#ffffff" strokeDasharray="3,3" strokeWidth="1" />
                <text x="220" y="65" fill="#94a3b8" fontSize="10">
                  Mesopause (85 km)
                </text>

                <rect x="50" y="215" width="160" height="30" fill="#38bdf8" opacity="0.25" />
                <text x="130" y="234" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">
                  Lapisan Ozon (O₃)
                </text>

                {(() => {
                  const markerY = 300 - (altitude / 100) * 280;
                  return (
                    <g>
                      <line x1="40" y1={markerY} x2="220" y2={markerY} stroke="#ef4444" strokeWidth="2" />
                      <circle cx="210" cy={markerY} r="4" fill="#ef4444" />
                      <text x="35" y={markerY + 3} fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="end">
                        {altitude} km
                      </text>
                    </g>
                  );
                })()}

                <text x="130" y="315" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  Suhu: Dingin ← | → Panas
                </text>
              </svg>
            </div>

            <div className="mt-4 w-full">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Ketinggian Penjelajahan:</span>
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-white">
                  {altitude} km dari Permukaan Laut
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={altitude}
                onChange={(e) => setAltitude(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>0 km (Permukaan)</span>
                <span>12 km (Tropopause)</span>
                <span>50 km (Stratopause)</span>
                <span>100 km (Ionosfer)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-4 lg:col-span-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Identifikasi Lapisan Atmosfer
              </div>
              <h4 className="mt-1 text-base font-bold text-slate-900">{current.layer}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{current.desc}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <span className="text-[11px] font-bold text-slate-400">Temperatur Rata-rata</span>
                <p className="mt-0.5 font-mono text-sm font-bold text-red-600">{current.temp}</p>
                <span className="text-[10px] text-slate-500 mt-1 block">{current.trend}</span>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <span className="text-[11px] font-bold text-slate-400">Tekanan Barometrik</span>
                <p className="mt-0.5 font-mono text-sm font-bold text-blue-600">{current.pressure}</p>
                <span className="text-[10px] text-slate-500 mt-1 block">Makin tinggi makin renggang</span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Fenomena Fisik Khas:</span>
              <p className="mt-1 text-xs font-semibold text-slate-800">{current.phenomena}</p>
            </div>

            <div className="rounded-lg bg-slate-900 p-3.5 text-xs text-slate-200">
              <span className="font-bold text-amber-300 block mb-1">Pertanyaan Klasik OSN:</span>
              Mengapa temperatur stratosfer justru <strong>meningkat</strong> terhadap ketinggian? Jawabannya karena{' '}
              <strong>penyerapan radiasi ultraviolet oleh molekul Ozon ($O_3$)</strong> melepaskan energi panas (proses
              eksotermik fotokimia), menciptakan fenomena inversi termal alami.
            </div>
          </div>
        </div>
      ) : (
        /* CLIMATE CALCULATOR TAB */
        <div className="mt-6 space-y-6">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-1">Muat Profil Wilayah:</span>
            {Object.entries(PRESETS).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setMonthlyRain(p.data)}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:bg-blue-50/50 transition"
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* 12-Month Rainfall Input Grid */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
            <div className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
              <Droplets className="h-4 w-4 text-blue-600" /> Data Curah Hujan Bulanan (mm/bulan):
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2">
              {months.map((m, i) => {
                const val = monthlyRain[i];
                const isSF_BB = val > 100;
                const isSF_BK = val < 60;
                return (
                  <div key={m} className="rounded-lg border border-slate-200 bg-white p-2 text-center shadow-2xs">
                    <span className="text-[11px] font-bold text-slate-500 block">{m}</span>
                    <input
                      type="number"
                      value={val}
                      onChange={(e) => handleRainChange(i, Number(e.target.value))}
                      className="mt-1 w-full rounded border border-slate-200 px-1 py-1 text-center font-mono text-xs font-bold text-slate-900 focus:border-blue-500 focus:outline-none"
                    />
                    <div className="mt-1.5 flex flex-col gap-0.5 text-[9px] font-semibold">
                      <span className={isSF_BB ? 'text-blue-600' : isSF_BK ? 'text-red-500' : 'text-slate-400'}>
                        {isSF_BB ? 'BB' : isSF_BK ? 'BK' : 'BL'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side-by-Side System Diagnostics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Schmidt-Ferguson Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-sm font-bold text-slate-900">Klasifikasi Schmidt-Ferguson</h4>
                <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${sfResult.color}`}>
                  {sfResult.type} ({sfResult.label})
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-blue-50/70 p-2 border border-blue-100">
                  <span className="text-[10px] text-blue-700 font-bold block">Bulan Basah (&gt;100 mm)</span>
                  <span className="font-mono text-lg font-bold text-blue-800">{sfBB} bln</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold block">Bulan Lembap (60-100 mm)</span>
                  <span className="font-mono text-lg font-bold text-slate-700">{sfBL} bln</span>
                </div>
                <div className="rounded-lg bg-red-50/70 p-2 border border-red-100">
                  <span className="text-[10px] text-red-700 font-bold block">Bulan Kering (&lt;60 mm)</span>
                  <span className="font-mono text-lg font-bold text-red-800">{sfBK} bln</span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-500">Nilai Rasio Q:</span>
                  <span className="font-bold text-blue-700">
                    Q = ({sfBK} / {sfBB || 1}) × 100% = {sfBB > 0 ? sfQ.toFixed(1) : '∞'} %
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  Karakteristik: {sfResult.desc}.
                </p>
              </div>

              <div className="text-[11px] text-slate-400">
                Formula: Q = (Jumlah Bulan Kering / Jumlah Bulan Basah) × 100%
              </div>
            </div>

            {/* Oldeman Agroclimate Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-sm font-bold text-slate-900">Klasifikasi Agroklimat Oldeman</h4>
                <span className="rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-900">
                  Zona {oldemanResult.code}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-indigo-50/70 p-2 border border-indigo-100">
                  <span className="text-[10px] text-indigo-700 font-bold block">BB Berurutan (&gt;200 mm)</span>
                  <span className="font-mono text-lg font-bold text-indigo-900">{maxConsecutiveBB} bulan</span>
                </div>
                <div className="rounded-lg bg-amber-50/70 p-2 border border-amber-100">
                  <span className="text-[10px] text-amber-700 font-bold block">BK Berurutan (&lt;100 mm)</span>
                  <span className="font-mono text-lg font-bold text-amber-900">{maxConsecutiveBK} bulan</span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1">
                <div className="font-bold text-slate-800">Rekomendasi Pola Tanam Pertanian:</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{oldemanResult.desc}.</p>
              </div>

              <div className="text-[11px] text-slate-400">
                Kriteria Oldeman: Padi Sawah (BB &gt;200 mm), Palawija (BK &lt;100 mm)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
