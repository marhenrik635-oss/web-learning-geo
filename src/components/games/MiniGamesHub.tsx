'use client';

import React, { useState, useEffect } from 'react';
import { Play, Trophy, RotateCcw, Flame, CheckCircle2, XCircle, Timer, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MiniGamesHubProps {
  onEarnXP: (amount: number) => void;
}

export default function MiniGamesHub({ onEarnXP }: MiniGamesHubProps) {
  const [activeGame, setActiveGame] = useState<'tectonic' | 'rock' | 'speedrun'>('tectonic');
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentRound, setCurrentRound] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // --- GAME 1: TECTONIC MATCHER DATA ---
  const tectonicQuestions = [
    {
      target: 'Palung Mariana & Busur Mariana',
      options: ['Subduksi Samudera-Samudera', 'Subduksi Samudera-Benua', 'Divergen', 'Transform'],
      correct: 0,
      reason: 'Lempeng Pasifik tua yang dingin menunjam di bawah Lempeng Filipina, membentuk palung terdalam di dunia (11.034 m).',
    },
    {
      target: 'Pegunungan Himalaya & Plato Tibet',
      options: ['Kolisi Benua-Benua', 'Subduksi Samudera-Benua', 'Transform', 'Rift Valley'],
      correct: 0,
      reason: 'Lempeng Indo-Australia bertabrakan dengan Lempeng Eurasia. Keduanya mengapung sehingga kerak menebal tanpa vulkanisme.',
    },
    {
      target: 'Sesar San Andreas (California)',
      options: ['Sesar Mendatar (Transform)', 'Subduksi', 'Divergen', 'Kolisi'],
      correct: 0,
      reason: 'Lempeng Pasifik bergeser lateral menyamping terhadap Lempeng Amerika Utara. Gempa dangkal tanpa gunung api.',
    },
    {
      target: 'Pegunungan Andes & Palung Peru-Chile',
      options: ['Subduksi Samudera-Benua', 'Kolisi Benua-Benua', 'Divergen', 'Transform'],
      correct: 0,
      reason: 'Kerak Samudera Nazca yang padat menunjam di bawah Kerak Benua Amerika Selatan.',
    },
    {
      target: 'Pematang Tengah Samudera Atlantik (Mid-Atlantic Ridge)',
      options: ['Pemekaran Divergen', 'Subduksi', 'Transform', 'Kolisi'],
      correct: 0,
      reason: 'Lempeng Eurasia/Afrika dan Amerika saling menjauh, lava basaltis membentuk kerak samudra baru.',
    },
  ];

  // --- GAME 2: ROCK DETECTIVE DATA ---
  const rockQuestions = [
    {
      rock: 'Granit',
      clue: 'Warna terang (felsik), kristal kasar kasat mata (faneritik), kaya kuarsa dan ortoklas',
      options: ['Beku Intrusif (Plutonik)', 'Beku Ekstrusif (Vulkanik)', 'Sedimen Klastik', 'Metamorf'],
      correct: 0,
      reason: 'Granit membeku sangat lambat di kedalaman kerak bumi.',
    },
    {
      rock: 'Obsidian',
      clue: 'Berwarna hitam pekat mengkilap, tidak memiliki kristal (tekstur amorf/gelas), retakan konkoidal',
      options: ['Beku Ekstrusif (Gelas Vulkanik)', 'Beku Intrusif', 'Sedimen Kimiawi', 'Metamorf'],
      correct: 0,
      reason: 'Lava mendingin secara instan di permukaan sehingga atom tidak sempat menyusun kisi kristal.',
    },
    {
      rock: 'Marmer (Marble)',
      clue: 'Tekstur kristalin non-foliasi, bereaksi buih jika ditetesi HCl encer, berasal dari batugamping',
      options: ['Batuan Metamorf', 'Batuan Sedimen Klastik', 'Batuan Beku', 'Batuan Piroklastik'],
      correct: 0,
      reason: 'Marmer adalah batuan metamorf kontak/regional hasil rekristalisasi kalsit dari protolit batugamping.',
    },
    {
      rock: 'Konglomerat',
      clue: 'Tersusun atas fragmen kerikil-kerakal membulat (rounded) yang terikat matrik pasir dan semen',
      options: ['Sedimen Klastik', 'Sedimen Kimiawi', 'Batuan Beku', 'Metamorf Foliasi'],
      correct: 0,
      reason: 'Fragmen membulat menandakan transportasi air jarak jauh dalam sistem fluvial berenergi tinggi.',
    },
    {
      rock: 'Gneiss (Gneis)',
      clue: 'Struktur foliasi tingkat tinggi dengan perselingan pita terang (kuarsa/feldspar) dan pita gelap (biotit)',
      options: ['Batuan Metamorf Derajat Tinggi', 'Batuan Beku Mafik', 'Batuan Sedimen', 'Batuan Vulkanik'],
      correct: 0,
      reason: 'Gneiss mengalami tekanan diferensial dan suhu metamorfosis regional yang sangat intens.',
    },
  ];

  // --- GAME 3: SPEEDRUN CARTO MATH ---
  const speedrunQuestions = [
    {
      q: 'Peta berskala 1 : 50.000. Berapakah nilai Kontur Interval (CI)?',
      options: ['25 meter', '12,5 meter', '50 meter', '100 meter'],
      correct: 0,
      reason: 'CI = 50.000 / 2.000 = 25 meter.',
    },
    {
      q: 'Jika Kontur Interval (CI) = 15 meter, berapakah skala peta topografi tersebut?',
      options: ['1 : 30.000', '1 : 15.000', '1 : 45.000', '1 : 75.000'],
      correct: 0,
      reason: 'Skala = 15 × 2.000 = 1 : 30.000.',
    },
    {
      q: 'Di London (GMT 0°) pukul 12.00 siang. Pukul berapakah di Jakarta (WIB / UTC+7)?',
      options: ['19.00 WIB', '17.00 WIB', '05.00 WIB', '21.00 WIB'],
      correct: 0,
      reason: 'WIB adalah UTC+7, jadi 12.00 + 7 jam = 19.00 WIB.',
    },
    {
      q: 'Beda tinggi kontur (Δh) = 100 m, jarak lapangan (d) = 2.000 m. Berapakah kelerengannya?',
      options: ['5%', '2%', '10%', '20%'],
      correct: 0,
      reason: 'Slope = (100 / 2.000) × 100% = 5%.',
    },
    {
      q: 'Selisih bujur astronomis dua kota adalah 45°. Berapakah selisih waktu kedua kota?',
      options: ['3 jam', '2 jam', '4 jam', '1,5 jam'],
      correct: 0,
      reason: 'Setiap 15° = 1 jam. Jadi 45° / 15° = 3 jam.',
    },
  ];

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameStarted) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setTimeLeft(30);
    setCurrentRound(0);
    setFeedback(null);
    setGameStarted(true);
  };

  const endGame = () => {
    setGameStarted(false);
    const earnedXP = score * 15;
    onEarnXP(earnedXP);
    if (score >= 3) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleAnswer = (selectedIndex: number) => {
    let isCorrect = false;
    let explanation = '';

    if (activeGame === 'tectonic') {
      const q = tectonicQuestions[currentRound % tectonicQuestions.length];
      isCorrect = selectedIndex === q.correct;
      explanation = q.reason;
    } else if (activeGame === 'rock') {
      const q = rockQuestions[currentRound % rockQuestions.length];
      isCorrect = selectedIndex === q.correct;
      explanation = q.reason;
    } else {
      const q = speedrunQuestions[currentRound % speedrunQuestions.length];
      isCorrect = selectedIndex === q.correct;
      explanation = q.reason;
    }

    if (isCorrect) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setFeedback({ isCorrect: true, text: `Tepat! ${explanation}` });
    } else {
      setStreak(0);
      setFeedback({ isCorrect: false, text: `Salah! Catatan: ${explanation}` });
    }

    // Auto advance round after short delay
    setTimeout(() => {
      setFeedback(null);
      setCurrentRound((prev) => prev + 1);
    }, 1400);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
            <Trophy className="h-3.5 w-3.5" /> Arena Latihan Refleks & Mini-Games
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Latih Ingatan Spasial, Klasifikasi Batuan & Hitungan Cepat
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveGame('tectonic');
              setGameStarted(false);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeGame === 'tectonic'
                ? 'bg-slate-900 text-white'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Tectonic Architect
          </button>
          <button
            onClick={() => {
              setActiveGame('rock');
              setGameStarted(false);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeGame === 'rock'
                ? 'bg-slate-900 text-white'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Detektif Batuan
          </button>
          <button
            onClick={() => {
              setActiveGame('speedrun');
              setGameStarted(false);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeGame === 'speedrun'
                ? 'bg-slate-900 text-white'
                : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Carto Math Sprint (30s)
          </button>
        </div>
      </div>

      <div className="mt-6">
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 py-12 px-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
              <Trophy className="h-8 w-8" />
            </div>
            <h4 className="mt-4 text-base font-bold text-slate-900">
              {activeGame === 'tectonic'
                ? 'Tectonic Architect: Cocokkan Lempeng & Morfologi'
                : activeGame === 'rock'
                ? 'Detektif Batuan: Identifikasi Tekstur & Genesa'
                : 'Carto Math Sprint: Adu Cepat Hitungan OSN (30 Detik)'}
            </h4>
            <p className="mt-1.5 max-w-md text-xs text-slate-500">
              Uji kecepatan analisis konsep tanpa contek. Kumpulkan XP untuk meningkatkan gelar rank geologimu!
            </p>
            <button
              onClick={startGame}
              className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
            >
              <Play className="h-4 w-4" /> Mulai Game Sekarang
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top Game Bar */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-900 p-4 text-white">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Skor Benar</span>
                  <span className="text-xl font-bold font-mono text-amber-400">{score}</span>
                </div>
                <div className="border-l border-slate-700 pl-4">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="h-3 w-3 text-orange-500" /> Combo
                  </span>
                  <span className="text-xl font-bold font-mono text-orange-400">{streak}x</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-slate-400" />
                <span className={`text-xl font-mono font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>

            {/* Question Card Display */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tantangan Ronde #{currentRound + 1}
              </div>

              {activeGame === 'tectonic' && (
                <div className="mt-2">
                  <span className="text-xs text-slate-500">Studi Kasus Morfologi Dunia:</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    {tectonicQuestions[currentRound % tectonicQuestions.length].target}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Apa tipe batas lempeng dan mekanisme tektonik yang membentuk bentang alam di atas?
                  </p>
                </div>
              )}

              {activeGame === 'rock' && (
                <div className="mt-2">
                  <span className="text-xs text-slate-500">Nama Batuan Spesimen:</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    {rockQuestions[currentRound % rockQuestions.length].rock}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Petunjuk Diagnostik: {rockQuestions[currentRound % rockQuestions.length].clue}
                  </p>
                </div>
              )}

              {activeGame === 'speedrun' && (
                <div className="mt-2">
                  <span className="text-xs text-slate-500">Soal Perhitungan Cepat:</span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">
                    {speedrunQuestions[currentRound % speedrunQuestions.length].q}
                  </h4>
                </div>
              )}

              {/* Feedback banner */}
              {feedback && (
                <div
                  className={`mt-4 flex items-center gap-2 rounded-lg p-3 text-xs font-medium ${
                    feedback.isCorrect
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border border-red-200 bg-red-50 text-red-800'
                  }`}
                >
                  {feedback.isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-red-600" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              {/* Options Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(() => {
                  const options =
                    activeGame === 'tectonic'
                      ? tectonicQuestions[currentRound % tectonicQuestions.length].options
                      : activeGame === 'rock'
                      ? rockQuestions[currentRound % rockQuestions.length].options
                      : speedrunQuestions[currentRound % speedrunQuestions.length].options;

                  return options.map((opt, i) => (
                    <button
                      key={i}
                      disabled={feedback !== null}
                      onClick={() => handleAnswer(i)}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 text-left text-xs font-semibold text-slate-800 shadow-xs transition hover:border-blue-500 hover:bg-blue-50/30 hover:text-blue-700 active:scale-98 disabled:opacity-75"
                    >
                      <span className="mr-2 font-mono text-slate-400">[{String.fromCharCode(65 + i)}]</span>
                      {opt}
                    </button>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
