'use client';

import React, { useState } from 'react';
import { Sparkles, RotateCw, Check, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { FLASHCARDS } from '../../data/flashcards';
import { Flashcard } from '../../types/geo';

interface FlashcardDeckProps {
  onEarnXP: (amount: number) => void;
}

export default function FlashcardDeck({ onEarnXP }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  const card: Flashcard = FLASHCARDS[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < FLASHCARDS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(FLASHCARDS.length - 1);
    }
  };

  const handleRate = (confidence: 'hard' | 'good' | 'easy') => {
    if (confidence === 'easy') {
      if (!masteredIds.includes(card.id)) {
        setMasteredIds((prev) => [...prev, card.id]);
        onEarnXP(10);
      }
    }
    handleNext();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            <Sparkles className="h-3.5 w-3.5" /> Active Recall & Spaced Repetition
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Flashcards Konsep Kunci OSN Geografi
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Dikuasai: {masteredIds.length} / {FLASHCARDS.length} Kartu
          </span>
          <span className="font-mono text-xs text-slate-400">
            {currentIndex + 1} / {FLASHCARDS.length}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        {/* Flashcard container */}
        <div
          onClick={handleFlip}
          className="relative h-72 w-full max-w-xl cursor-pointer rounded-2xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="rounded bg-white px-2.5 py-1 font-bold text-slate-700 shadow-xs border border-slate-200">
              {card.tag}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
              <RotateCw className="h-3 w-3" /> Klik kartu untuk membalik
            </span>
          </div>

          <div className="my-auto text-center">
            {!isFlipped ? (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Pertanyaan / Konsep
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">{card.front}</h4>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                  Jawaban & Mnemonic
                </span>
                <p className="text-xs leading-relaxed text-slate-800 font-medium whitespace-pre-line">
                  {card.back}
                </p>
                {card.mnemonic && (
                  <div className="mt-4 inline-block rounded-md bg-amber-100/80 px-3 py-1 text-[11px] font-bold text-amber-900">
                    Jembatan Keledai: {card.mnemonic}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="text-center text-[11px] text-slate-400">
            {isFlipped ? 'Sisi Jawaban' : 'Sisi Pertanyaan'}
          </div>
        </div>

        {/* Rating Buttons */}
        {isFlipped && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleRate('hard')}
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-800 transition hover:bg-red-100"
            >
              Belum Ingat (Ulangi Nanti)
            </button>
            <button
              onClick={() => handleRate('good')}
              className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-800 transition hover:bg-blue-100"
            >
              Cukup Ingat (+5 XP)
            </button>
            <button
              onClick={() => handleRate('easy')}
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100"
            >
              Kuasai Penuh (+10 XP)
            </button>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Sebelumnya
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Berikutnya <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
