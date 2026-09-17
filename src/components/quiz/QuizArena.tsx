'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, AlertCircle, ArrowRight, RotateCcw, Award, Lightbulb } from 'lucide-react';
import { OSN_QUESTIONS } from '../../data/questions';
import { ModuleId, Question } from '../../types/geo';
import confetti from 'canvas-confetti';
import QuestionDiagram from './QuestionDiagram';

interface QuizArenaProps {
  onEarnXP: (amount: number) => void;
}

export default function QuizArena({ onEarnXP }: QuizArenaProps) {
  const [selectedModule, setSelectedModule] = useState<ModuleId | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Filter questions
  const filteredQuestions = OSN_QUESTIONS.filter((q) => {
    const matchModule = selectedModule === 'all' || q.moduleId === selectedModule;
    const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return matchModule && matchDiff;
  });

  const currentQ: Question | undefined = filteredQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    if (isCorrect) {
      onEarnXP(25);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore({ correct: 0, total: 0 });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
            <HelpCircle className="h-3.5 w-3.5" /> Arena Latihan Soal OSN Geografi
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Bedah Soal Standar OSK, OSP, dan OSN Nasional
          </h3>
        </div>

        {/* Score Pill */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700">
            Akurasi:{' '}
            <span className="text-blue-600">
              {score.total > 0 ? `${Math.round((score.correct / score.total) * 100)}%` : '0%'}
            </span>{' '}
            ({score.correct}/{score.total} Soal)
          </div>
          <button
            onClick={handleReset}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            title="Reset Sesi Latihan"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <select
          value={selectedModule}
          onChange={(e) => {
            setSelectedModule(e.target.value as ModuleId | 'all');
            setCurrentIndex(0);
            setIsAnswered(false);
            setSelectedOption(null);
          }}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">Semua 15 Bab Kisi-Kisi KSR</option>
          <option value="meteorologi-klimatologi">1. Meteorologi dan Klimatologi</option>
          <option value="oseanografi-hidrologi">2. Oseanografi dan Hidrologi</option>
          <option value="kebencanaan">3. Kebencanaan &amp; Manajemen Bencana</option>
          <option value="sumberdaya">4. Sumberdaya &amp; Manajemen SDA</option>
          <option value="lingkungan-sdgs">5. Lingkungan &amp; Pembangunan Berkelanjutan</option>
          <option value="geomorfologi">6. Geomorfologi</option>
          <option value="geologi">7. Geologi (Interior, Tektonik, Petrologi)</option>
          <option value="geografi-pertanian">8. Geografi Pertanian &amp; Ketahanan Pangan</option>
          <option value="kependudukan">9. Kependudukan &amp; Dinamika Penduduk</option>
          <option value="geografi-ekonomi">10. Geografi Ekonomi &amp; Globalisasi</option>
          <option value="geografi-pembangunan">11. Geografi Pembangunan &amp; Teori Keruangan</option>
          <option value="geografi-kota">12. Geografi Kota &amp; Kewilayahan</option>
          <option value="pariwisata">13. Pariwisata &amp; Manajemen Destinasi</option>
          <option value="geografi-budaya">14. Geografi Budaya &amp; Identitas Regional</option>
          <option value="kartografi-sig">15. Kartografi dan SIG</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => {
            setSelectedDifficulty(e.target.value);
            setCurrentIndex(0);
            setIsAnswered(false);
            setSelectedOption(null);
          }}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">Semua Tingkatan (OSK - OSN)</option>
          <option value="Kabupaten">Tingkat Kabupaten (OSK)</option>
          <option value="Provinsi">Tingkat Provinsi (OSP)</option>
          <option value="Nasional">Tingkat Nasional (OSN)</option>
        </select>

        <span className="text-xs text-slate-400">
          Ditemukan {filteredQuestions.length} butir soal terkurasi
        </span>
      </div>

      {/* Main Question Box */}
      {currentQ ? (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded bg-slate-200 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                  Soal #{currentIndex + 1} dari {filteredQuestions.length}
                </span>
                {currentQ.ksrCategory && (
                  <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 border border-indigo-200">
                    {currentQ.ksrCategory}
                  </span>
                )}
              </div>
              <span
                className={`rounded px-2 py-0.5 text-[11px] font-bold ${
                  currentQ.difficulty === 'Kabupaten'
                    ? 'bg-emerald-100 text-emerald-800'
                    : currentQ.difficulty === 'Provinsi'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                Tingkat {currentQ.difficulty}
              </span>
            </div>

            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900">
              {currentQ.question}
            </p>

            {currentQ.formulaUsed && (
              <div className="mt-2 rounded bg-indigo-50/70 px-2.5 py-1 text-xs font-mono text-indigo-700">
                Formula Relevan: {currentQ.formulaUsed}
              </div>
            )}
          </div>

          {/* Visual Diagram for Question */}
          <QuestionDiagram question={currentQ} />

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-900 ring-1 ring-emerald-500';
                } else if (isSelected) {
                  btnStyle = 'border-red-500 bg-red-50/70 text-red-900 ring-1 ring-red-500';
                } else {
                  btnStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full rounded-xl border p-4 text-left text-xs font-medium transition flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-slate-400">
                      [{String.fromCharCode(65 + idx)}]
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </div>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="h-4 w-4 shrink-0 text-red-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Deep Diagnostic Feedback upon Answer */}
          {isAnswered && (
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Bedah Konsep & Pembahasan Ilmiah:
              </div>
              <p className="text-xs leading-relaxed text-slate-700">{currentQ.explanation}</p>

              <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-3 text-xs text-amber-900">
                <span className="font-bold block mb-0.5">Analisis Pengecoh & Jebakan OSN:</span>
                {currentQ.trapExplanation}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 active:scale-95"
                >
                  Lanjut Soal Berikutnya <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 text-center text-xs text-slate-400">
          Tidak ada soal yang cocok dengan filter yang dipilih. Silakan ubah filter bab atau kesulitan.
        </div>
      )}
    </div>
  );
}
