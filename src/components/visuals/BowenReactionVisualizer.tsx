'use client';

import React, { useState } from 'react';
import { Gem, Thermometer, ShieldAlert, Sparkles } from 'lucide-react';

interface MineralDetail {
  name: string;
  temp: string;
  branch: 'Discontinuous' | 'Continuous' | 'Residual';
  silicateStructure: string;
  weatheringStability: string;
  associatedRocks: string;
  silicaContent: string;
  formula: string;
  color: string;
}

const MINERALS: Record<string, MineralDetail> = {
  olivin: {
    name: 'Olivin ((Mg, Fe)2SiO4)',
    temp: '1.400°C – 1.200°C (Suhu Tertinggi)',
    branch: 'Discontinuous',
    silicateStructure: 'Nesosilikat (Tetrahedron SiO4 Tunggal Terisolasi)',
    weatheringStability: 'Paling Rentan Lapuk (Paling Cepat Hancur)',
    associatedRocks: 'Ultramafik (Peridotit, Dunit, Komatiit)',
    silicaContent: '< 45% SiO2 (Sangat Miskin Silika)',
    formula: '(Mg,Fe)2SiO4',
    color: 'bg-emerald-700 text-white',
  },
  piroksen: {
    name: 'Piroksen / Augit (XY(Si,Al)2O6)',
    temp: '~1.200°C – 1.050°C',
    branch: 'Discontinuous',
    silicateStructure: 'Inosilikat (Rantai Silikat Tunggal / Single Chain)',
    weatheringStability: 'Sangat Rentan Lapuk',
    associatedRocks: 'Mafik (Gabro, Basalt)',
    silicaContent: '45% – 52% SiO2',
    formula: 'Ca(Mg,Fe)Si2O6',
    color: 'bg-emerald-800 text-white',
  },
  amfibol: {
    name: 'Amfibol / Hornblenda',
    temp: '~1.050°C – 900°C',
    branch: 'Discontinuous',
    silicateStructure: 'Inosilikat (Rantai Silikat Ganda / Double Chain)',
    weatheringStability: 'Moderat Rentan',
    associatedRocks: 'Intermedier (Diorit, Andesit)',
    silicaContent: '52% – 63% SiO2',
    formula: 'Ca2(Mg,Fe,Al)5(Al,Si)8O22(OH)2',
    color: 'bg-teal-900 text-white',
  },
  biotit: {
    name: 'Biotit (Mika Hitam)',
    temp: '~900°C – 800°C',
    branch: 'Discontinuous',
    silicateStructure: 'Filosilikat (Struktur Lembaran / Sheets)',
    weatheringStability: 'Moderat Resisten',
    associatedRocks: 'Intermedier ke Felsik (Granodiorit, Dasit)',
    silicaContent: '55% – 65% SiO2',
    formula: 'K(Mg,Fe)3AlSi3O10(OH)2',
    color: 'bg-stone-800 text-white',
  },
  anortit: {
    name: 'Plagioklas Ca (Anortit)',
    temp: '~1.400°C (Suhu Tinggi)',
    branch: 'Continuous',
    silicateStructure: 'Tektosilikat (Kerangka 3D / 3D Framework)',
    weatheringStability: 'Cepat Lapuk Menjadi Lempung Kaolinit',
    associatedRocks: 'Mafik & Anortosit (Gabro, Basalt)',
    silicaContent: 'Kaya Kalsium (CaAl2Si2O8)',
    formula: 'CaAl2Si2O8',
    color: 'bg-blue-900 text-white',
  },
  albit: {
    name: 'Plagioklas Na (Albit)',
    temp: '~850°C – 800°C (Suhu Rendah)',
    branch: 'Continuous',
    silicateStructure: 'Tektosilikat (Kerangka 3D / 3D Framework)',
    weatheringStability: 'Lebih Resisten Dibanding Ca-Plagioklas',
    associatedRocks: 'Felsik & Intermedier (Granit, Riolit)',
    silicaContent: 'Kaya Natrium (NaAlSi3O8)',
    formula: 'NaAlSi3O8',
    color: 'bg-blue-700 text-white',
  },
  kfeldspar: {
    name: 'K-Feldspar / Orthoklas',
    temp: '~750°C – 700°C',
    branch: 'Residual',
    silicateStructure: 'Tektosilikat (Kerangka 3D)',
    weatheringStability: 'Cukup Resisten Lapuk',
    associatedRocks: 'Felsik / Asam (Granit, Riolit, Pegmatit)',
    silicaContent: '> 65% SiO2',
    formula: 'KAlSi3O8',
    color: 'bg-rose-800 text-white',
  },
  muskovit: {
    name: 'Muskovit (Mika Putih)',
    temp: '~700°C – 650°C',
    branch: 'Residual',
    silicateStructure: 'Filosilikat (Lembaran Transparan)',
    weatheringStability: 'Sangat Resisten Lapuk',
    associatedRocks: 'Felsik & Pegmatit (Granit)',
    silicaContent: '> 68% SiO2',
    formula: 'KAl2(AlSi3O10)(OH)2',
    color: 'bg-amber-800 text-white',
  },
  kuarsa: {
    name: 'Kuarsa (Quartz)',
    temp: '~600°C (Paling Terakhir Mengkristal)',
    branch: 'Residual',
    silicateStructure: 'Tektosilikat Murni (Ikatan Si-O Sangat Kuat)',
    weatheringStability: 'JUARA RESISTEN: Paling Tahan Pelapukan Kimiawi!',
    associatedRocks: 'Felsik (Granit, Riolit, Batupasir Kuarsa)',
    silicaContent: '100% SiO2 (Silika Murni)',
    formula: 'SiO2',
    color: 'bg-slate-900 text-white',
  },
};

export default function BowenReactionVisualizer() {
  const [selectedMineral, setSelectedMineral] = useState<string>('kuarsa');
  const current = MINERALS[selectedMineral];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            <Gem className="h-3.5 w-3.5" /> Laboratorium Petrologi & Seri Reaksi Bowen
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Diferensiasi Kristalisasi Magma & Stabilitas Pelapukan Goldich
          </h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Interactive Flow Chart of Bowen's Series */}
        <div className="flex flex-col lg:col-span-7">
          <div className="relative rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            {/* Temperature Header indicator */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1 text-red-600">
                <Thermometer className="h-4 w-4" /> SUHU TINGGI (~1.400°C - Ultramafik/Mafik)
              </span>
              <span className="text-blue-600">SUHU RENDAH (~600°C - Felsik)</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {/* Discontinuous Branch */}
              <div className="space-y-2 rounded-lg border border-emerald-200 bg-emerald-50/40 p-3">
                <div className="text-[11px] font-bold text-emerald-900 uppercase">
                  Cabang Diskontinu (Fe-Mg)
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'olivin', label: 'Olivin (1400°C)' },
                    { id: 'piroksen', label: 'Piroksen (1200°C)' },
                    { id: 'amfibol', label: 'Amfibol / Hornblenda (1050°C)' },
                    { id: 'biotit', label: 'Biotit (Mika Hitam 900°C)' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMineral(m.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition ${
                        selectedMineral === m.id
                          ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-500'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Continuous Branch */}
              <div className="space-y-2 rounded-lg border border-blue-200 bg-blue-50/40 p-3">
                <div className="text-[11px] font-bold text-blue-900 uppercase">
                  Cabang Kontinu (Plagioklas)
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'anortit', label: 'Plagioklas Kaya-Ca / Anortit (1400°C)' },
                    { id: 'albit', label: 'Plagioklas Kaya-Na / Albit (850°C)' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMineral(m.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition ${
                        selectedMineral === m.id
                          ? 'bg-blue-800 text-white shadow-sm ring-2 ring-blue-500'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                  <div className="mt-4 rounded border border-dashed border-blue-300 p-2 text-center text-[10px] text-blue-700">
                    Transisi komposisi Ca -&gt; Na berjalan kontinu seiring pendinginan magma.
                  </div>
                </div>
              </div>
            </div>

            {/* Residual Branch Bottom */}
            <div className="mt-4 rounded-lg border border-slate-300 bg-slate-100 p-3">
              <div className="text-[11px] font-bold text-slate-700 uppercase">
                Mineral Sisa Kristalisasi Terakhir (~750°C – 600°C)
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  { id: 'kfeldspar', label: 'K-Feldspar / Orthoklas' },
                  { id: 'muskovit', label: 'Muskovit (Mika Putih)' },
                  { id: 'kuarsa', label: 'Kuarsa (Quartz)' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMineral(m.id)}
                    className={`rounded-lg px-2 py-2 text-center text-xs font-semibold transition ${
                      selectedMineral === m.id
                        ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-400'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weathering Arrow Footnote */}
            <div className="mt-3 flex items-center justify-between rounded bg-amber-100/70 px-3 py-1.5 text-[11px] font-medium text-amber-900">
              <span>Rentan Lapuk Kimiawi: Olivin / Ca-Plagioklas</span>
              <span className="font-bold">→ Tahan Pelapukan: Kuarsa (Quartz)</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Mineral Inspector */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Detail Mineralogi
              </span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                {current.branch}
              </span>
            </div>

            <h4 className="mt-2 text-lg font-bold text-slate-900">{current.name}</h4>
            <div className="mt-1 font-mono text-xs text-blue-600 font-semibold">{current.temp}</div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="rounded-lg bg-slate-50 p-2.5">
                <span className="font-bold text-slate-600 block">Struktur Silikat:</span>
                <span className="text-slate-800 font-medium">{current.silicateStructure}</span>
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5">
                <span className="font-bold text-slate-600 block">Asosiasi Batuan Beku:</span>
                <span className="text-slate-800 font-medium">{current.associatedRocks}</span>
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5">
                <span className="font-bold text-slate-600 block">Kandungan Silika ($SiO_2$):</span>
                <span className="text-slate-800 font-medium">{current.silicaContent}</span>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5">
                <span className="font-bold text-amber-900 flex items-center gap-1">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-700" /> Resistensi Pelapukan (Goldich):
                </span>
                <span className="text-amber-800 font-semibold mt-0.5 block">
                  {current.weatheringStability}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-900 p-4 text-xs text-slate-200">
            <span className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
              <Sparkles className="h-3.5 w-3.5" /> Konsep Emas OSN:
            </span>
            Mengapa pasir pantai di sebagian besar dunia tersusun atas butiran Kuarsa? Karena Kuarsa adalah mineral yang
            mengkristal pada suhu terendah (~600°C) dan berada dalam kondisi kestabilan termodinamika paling mendekati suhu
            permukaan bumi, menjadikannya paling tahan terhadap dekomposisi kimiawi.
          </div>
        </div>
      </div>
    </div>
  );
}
