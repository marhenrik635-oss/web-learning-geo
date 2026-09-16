'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import EarthInteriorVisualizer from '../components/visuals/EarthInteriorVisualizer';
import TectonicBoundaryVisualizer from '../components/visuals/TectonicBoundaryVisualizer';
import BowenReactionVisualizer from '../components/visuals/BowenReactionVisualizer';
import HjulstromVisualizer from '../components/visuals/HjulstromVisualizer';
import CartoContourVisualizer from '../components/visuals/CartoContourVisualizer';
import AtmosphereVisualizer from '../components/visuals/AtmosphereVisualizer';
import UrbanSpatialVisualizer from '../components/visuals/UrbanSpatialVisualizer';
import QuizArena from '../components/quiz/QuizArena';
import MiniGamesHub from '../components/games/MiniGamesHub';
import FlashcardDeck from '../components/flashcards/FlashcardDeck';
import { GEO_MODULES } from '../data/curriculum';
import { ModuleId, KSRCluster } from '../types/geo';
import {
  Layers,
  Compass,
  Mountain,
  Waves,
  CloudSun,
  Map,
  Gem,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Award,
  Zap,
  ShieldAlert,
  BatteryCharging,
  Leaf,
  Sprout,
  Users,
  TrendingUp,
  Network,
  Building2,
  Palmtree,
  Globe,
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz' | 'games' | 'flashcards'>('learn');
  const [activeModuleId, setActiveModuleId] = useState<ModuleId>('meteorologi-klimatologi');
  const [selectedCluster, setSelectedCluster] = useState<KSRCluster | 'all'>('all');
  const [xp, setXp] = useState<number>(140);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  // Calculate Level & Rank based on XP
  const level = Math.floor(xp / 100) + 1;
  const getRankTitle = (lvl: number) => {
    if (lvl <= 2) return 'Peserta KSR Regional Round';
    if (lvl <= 4) return 'Semifinalis Nasional KSR';
    if (lvl <= 7) return 'Master Geografi & Teori Keruangan';
    return 'Kandidat Juara 1 Medali Emas KSR Geografi';
  };

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedXP = localStorage.getItem('geo_osn_xp');
    if (savedXP) setXp(Number(savedXP));

    const savedCompleted = localStorage.getItem('geo_osn_completed');
    if (savedCompleted) {
      try {
        setCompletedSections(JSON.parse(savedCompleted));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleEarnXP = (amount: number) => {
    setXp((prev) => {
      const next = prev + amount;
      localStorage.setItem('geo_osn_xp', String(next));
      return next;
    });
  };

  const toggleSectionComplete = (title: string) => {
    setCompletedSections((prev) => {
      let updated: string[];
      if (prev.includes(title)) {
        updated = prev.filter((t) => t !== title);
      } else {
        updated = [...prev, title];
        handleEarnXP(20);
      }
      localStorage.setItem('geo_osn_completed', JSON.stringify(updated));
      return updated;
    });
  };

  // Filter modules based on selected cluster
  const filteredModules = GEO_MODULES.filter((m) => {
    if (selectedCluster === 'all') return true;
    return m.cluster === selectedCluster;
  });

  const activeModule = GEO_MODULES.find((m) => m.id === activeModuleId) || GEO_MODULES[0];

  const getModuleIcon = (id: ModuleId) => {
    switch (id) {
      case 'meteorologi-klimatologi':
        return <CloudSun className="h-4 w-4" />;
      case 'oseanografi-hidrologi':
        return <Waves className="h-4 w-4" />;
      case 'kebencanaan':
        return <ShieldAlert className="h-4 w-4" />;
      case 'sumberdaya':
        return <BatteryCharging className="h-4 w-4" />;
      case 'lingkungan-sdgs':
        return <Leaf className="h-4 w-4" />;
      case 'geomorfologi':
        return <Mountain className="h-4 w-4" />;
      case 'geologi':
        return <Gem className="h-4 w-4" />;
      case 'geografi-pertanian':
        return <Sprout className="h-4 w-4" />;
      case 'kependudukan':
        return <Users className="h-4 w-4" />;
      case 'geografi-ekonomi':
        return <TrendingUp className="h-4 w-4" />;
      case 'geografi-pembangunan':
        return <Network className="h-4 w-4" />;
      case 'geografi-kota':
        return <Building2 className="h-4 w-4" />;
      case 'pariwisata':
        return <Palmtree className="h-4 w-4" />;
      case 'geografi-budaya':
        return <Globe className="h-4 w-4" />;
      case 'kartografi-sig':
        return <Map className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        xp={xp}
        level={level}
        rankTitle={getRankTitle(level)}
      />

      {/* Main Container */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        {/* Welcome & Progress Overview Banner */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  Target Resmi: KSR Regional Round Jenjang SMA
                </span>
                <span className="text-xs text-slate-500">
                  15 Topik Standar Kompetisi Sains Ruangguru &amp; OSN
                </span>
              </div>
              <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
                Pusat Studi Interaktif KSR Geografi SMA
              </h1>
              <p className="mt-1 text-xs text-slate-600 max-w-2xl leading-relaxed">
                Platform visual mandiri yang memadukan Geografi Fisik (Atmosfer, Geologi, Hidrologi, Geomorfologi),
                Lingkungan &amp; Kebencanaan (SDGs, Mitigasi Risiko), serta Geografi Manusia (Model Von Thünen, Teori Weber, Struktur Kota Burgess/Hoyt/Harris-Ullman, &amp; Titik Henti Carrothers).
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-center min-w-[100px]">
                <div className="text-[10px] uppercase font-bold text-slate-400">Total XP</div>
                <div className="text-lg font-mono font-bold text-blue-600">{xp}</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-center min-w-[100px]">
                <div className="text-[10px] uppercase font-bold text-slate-400">Target Belajar</div>
                <div className="text-lg font-mono font-bold text-emerald-600">
                  {completedSections.length} Bab Tuntas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 1: Learn & Visual Lab */}
        {activeTab === 'learn' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Sidebar: Module Selector */}
            <div className="space-y-3 lg:col-span-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Kisi-Kisi 15 Materi KSR
                  </span>
                  <span className="text-[11px] font-semibold text-blue-600">
                    {filteredModules.length} Modul
                  </span>
                </div>

                {/* Cluster Filter Buttons */}
                <div className="grid grid-cols-2 gap-1 text-[11px]">
                  <button
                    onClick={() => setSelectedCluster('all')}
                    className={`rounded-lg py-1 px-2 font-semibold transition ${
                      selectedCluster === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Semua (15 Bab)
                  </button>
                  <button
                    onClick={() => setSelectedCluster('fisik-kebumian')}
                    className={`rounded-lg py-1 px-2 font-semibold transition ${
                      selectedCluster === 'fisik-kebumian'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Fisik &amp; Bumi (5)
                  </button>
                  <button
                    onClick={() => setSelectedCluster('lingkungan-kebencanaan')}
                    className={`rounded-lg py-1 px-2 font-semibold transition ${
                      selectedCluster === 'lingkungan-kebencanaan'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Lingkungan &amp; Bencana (3)
                  </button>
                  <button
                    onClick={() => setSelectedCluster('manusia-keruangan')}
                    className={`rounded-lg py-1 px-2 font-semibold transition ${
                      selectedCluster === 'manusia-keruangan'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Manusia &amp; Kota (7)
                  </button>
                </div>

                <div className="space-y-1.5 max-h-[580px] overflow-y-auto pr-1">
                  {filteredModules.map((mod) => {
                    const isSelected = mod.id === activeModuleId;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => setActiveModuleId(mod.id)}
                        className={`w-full rounded-xl p-3 text-left transition flex items-center justify-between gap-2.5 ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'border border-slate-100 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`p-1.5 rounded-lg shrink-0 ${
                              isSelected ? 'bg-slate-800 text-amber-400' : 'bg-white text-slate-600 shadow-2xs'
                            }`}
                          >
                            {getModuleIcon(mod.id)}
                          </span>
                          <div className="truncate">
                            <div className="text-xs font-bold truncate">{mod.title}</div>
                            <div
                              className={`text-[10px] truncate ${
                                isSelected ? 'text-slate-400' : 'text-slate-500'
                              }`}
                            >
                              {mod.subtitle}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          className={`h-4 w-4 shrink-0 ${
                            isSelected ? 'text-white' : 'text-slate-400'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Active Module Visualizer & Deep Dive Lessons */}
            <div className="space-y-8 lg:col-span-8">
              {/* Dynamic Interactive Visualizers */}
              {activeModule.interactiveVisualizer === 'atmosphere' && <AtmosphereVisualizer />}
              {activeModule.interactiveVisualizer === 'earth' && <EarthInteriorVisualizer />}
              {activeModule.interactiveVisualizer === 'tectonic' && <TectonicBoundaryVisualizer />}
              {activeModule.interactiveVisualizer === 'bowen' && <BowenReactionVisualizer />}
              {activeModule.interactiveVisualizer === 'hjulstrom' && <HjulstromVisualizer />}
              {activeModule.interactiveVisualizer === 'contour' && <CartoContourVisualizer />}
              {activeModule.interactiveVisualizer === 'spatial' && <UrbanSpatialVisualizer />}

              {/* In-depth Conceptual Explanations from Ringkasan KSR */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Rangkuman Materi &amp; Konsep Kunci KSR
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">{activeModule.title}</h2>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeModule.sections.length} Sub-Materi Terkurasi
                  </span>
                </div>

                {activeModule.sections.map((sec, idx) => {
                  const isDone = completedSections.includes(sec.title);
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Bagian {idx + 1}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 mt-0.5">{sec.title}</h3>
                        </div>
                        <button
                          onClick={() => toggleSectionComplete(sec.title)}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                            isDone
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <CheckCircle2
                            className={`h-3.5 w-3.5 ${isDone ? 'text-emerald-600' : 'text-slate-400'}`}
                          />
                          {isDone ? 'Selesai Dipelajari' : 'Tandai Selesai (+20 XP)'}
                        </button>
                      </div>

                      <p className="text-xs leading-relaxed text-slate-700">{sec.content}</p>

                      {/* Key Points Bullet List */}
                      <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          Poin-Poin Kritis:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {sec.keyPoints.map((kp, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span className="leading-relaxed">{kp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mnemonic or OSN/KSR Trap */}
                      {sec.mnemonic && (
                        <div className="flex items-start gap-2 rounded-lg bg-amber-50/80 p-3 text-xs text-amber-900">
                          <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                          <div>
                            <strong className="block">Jembatan Keledai (Mnemonic):</strong>
                            {sec.mnemonic}
                          </div>
                        </div>
                      )}

                      {sec.osnTrap && (
                        <div className="flex items-start gap-2 rounded-lg bg-red-50/80 p-3 text-xs text-red-900">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                          <div>
                            <strong className="block">Waspada Jebakan Soal KSR/OSN:</strong>
                            {sec.osnTrap}
                          </div>
                        </div>
                      )}

                      {sec.formula && (
                        <div className="rounded-lg border border-indigo-200 bg-indigo-50/70 p-3 font-mono text-xs font-bold text-indigo-900">
                          Formula / Rumus: {sec.formula}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Quiz Arena */}
        {activeTab === 'quiz' && <QuizArena onEarnXP={handleEarnXP} />}

        {/* Tab 3: Mini-Games */}
        {activeTab === 'games' && <MiniGamesHub onEarnXP={handleEarnXP} />}

        {/* Tab 4: Flashcards */}
        {activeTab === 'flashcards' && <FlashcardDeck onEarnXP={handleEarnXP} />}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>GEO-OSN ATLAS — Sistem Belajar &amp; Laboratorium Interaktif KSR &amp; OSN Geografi</p>
          <p className="text-[11px] text-slate-400">Dirancang khusus untuk penguasaan 15 topik silabus resmi KSR</p>
        </div>
      </footer>
    </div>
  );
}
