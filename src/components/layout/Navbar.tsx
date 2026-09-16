'use client';

import React from 'react';
import { Compass, BookOpen, HelpCircle, Trophy, Sparkles, Award } from 'lucide-react';

interface NavbarProps {
  activeTab: 'learn' | 'quiz' | 'games' | 'flashcards';
  setActiveTab: (tab: 'learn' | 'quiz' | 'games' | 'flashcards') => void;
  xp: number;
  level: number;
  rankTitle: string;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  xp,
  level,
  rankTitle,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-slate-900">
                GEO-OSN ATLAS
              </span>
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 border border-slate-200">
                Olimpiade SMA
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Sistem Belajar Terpadu & Laboratorium Visual Mandiri
            </p>
          </div>
        </div>

        {/* Center: Tabs */}
        <nav className="hidden md:flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            onClick={() => setActiveTab('learn')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'learn'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" /> Materi & Visual Lab
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'quiz'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" /> Arena Soal OSN
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'games'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="h-3.5 w-3.5" /> Mini-Games
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === 'flashcards'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" /> Flashcards
          </button>
        </nav>

        {/* Right: Gamification Telemetry */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-xs font-bold text-slate-800">Lv.{level} {rankTitle}</span>
            </div>
            <div className="text-[11px] font-mono text-blue-600 font-semibold">{xp} XP</div>
          </div>
        </div>
      </div>

      {/* Mobile Tab bar */}
      <div className="flex md:hidden border-t border-slate-100 overflow-x-auto px-2 py-1.5 bg-slate-50">
        <button
          onClick={() => setActiveTab('learn')}
          className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-md ${
            activeTab === 'learn' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
          }`}
        >
          Materi Visual
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-md ${
            activeTab === 'quiz' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
          }`}
        >
          Arena Soal
        </button>
        <button
          onClick={() => setActiveTab('games')}
          className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-md ${
            activeTab === 'games' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
          }`}
        >
          Mini-Games
        </button>
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-md ${
            activeTab === 'flashcards' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
          }`}
        >
          Flashcards
        </button>
      </div>
    </header>
  );
}
