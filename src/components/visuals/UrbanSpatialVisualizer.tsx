'use client';

import React, { useState } from 'react';
import { Building2, Compass, Calculator, Layers, Factory, Sprout, ArrowRight } from 'lucide-react';

type SubModel = 'burgess' | 'hoyt' | 'harris' | 'thunen' | 'weber' | 'calculator';

export default function UrbanSpatialVisualizer() {
  const [activeModel, setActiveModel] = useState<SubModel>('burgess');

  // Interactive Calculator State
  const [popA, setPopA] = useState<number>(30000); // Kota A (kecil)
  const [popB, setPopB] = useState<number>(120000); // Kota B (besar)
  const [distanceKm, setDistanceKm] = useState<number>(45); // Jarak A - B

  // Carrothers Breaking Point Formula:
  // D_AB = distance / (1 + sqrt(pop_besar / pop_kecil))
  // Diukur dari kota dengan populasi LEBIH KECIL
  const pBesar = Math.max(popA, popB);
  const pKecil = Math.min(popA, popB);
  const kotaKecilName = popA <= popB ? 'Kota A' : 'Kota B';
  const ratio = pKecil > 0 ? pBesar / pKecil : 1;
  const breakingPointDist = distanceKm / (1 + Math.sqrt(ratio));

  // Reilly Interaction Formula: I_AB = (popA * popB) / (distance)^2
  const reillyIndex = distanceKm > 0 ? Math.round((popA * popB) / (distanceKm * distanceKm)) : 0;

  // Weber Material Index Calculator
  const [rawWeight, setRawWeight] = useState<number>(150); // kg
  const [prodWeight, setProdWeight] = useState<number>(50); // kg
  const materialIndex = prodWeight > 0 ? rawWeight / prodWeight : 1;

  const getWeberDecision = (im: number) => {
    if (im > 1.05) {
      return {
        status: 'Weight-Losing (Penyusutan Berat)',
        loc: 'Mendekati Sumber Bahan Baku (Raw Material Oriented)',
        reason: 'Bahan baku mengalami penyusutan bobot signifikan saat diolah. Mengangkut bahan mentah jauh-jauh akan memboroskan ongkos transport.',
        contoh: 'Pabrik gula tebu, peleburan bijih tembaga/nikel, kilang semen kelapa sawit.',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
      };
    } else if (im < 0.95) {
      return {
        status: 'Weight-Gaining (Pertambahan Berat)',
        loc: 'Mendekati Pasar Konsumen (Market Oriented)',
        reason: 'Produk jadi menjadi lebih berat, lebih rapuh, atau bervolume lebih besar daripada bahan mentah (contoh penambahan air atau kemasan).',
        contoh: 'Pabrik minuman berkarbonasi/bir, pabrik roti, perakitan mebel kayu besar.',
        color: 'text-blue-800 bg-blue-50 border-blue-200',
      };
    } else {
      return {
        status: 'Footloose / Material Murni',
        loc: 'Bebas Di Mana Saja (Footloose Industry)',
        reason: 'Berat bahan baku setara dengan berat produk jadi. Biaya transportasi bahan baku seimbang dengan produk akhir.',
        contoh: 'Perakitan komponen mikroelektronik, benang tekstil.',
        color: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      };
    }
  };

  const weberDecision = getWeberDecision(materialIndex);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-800">
            <Building2 className="h-3.5 w-3.5" /> Laboratorium Teori Keruangan & Geografi Perkotaan
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Model Struktur Kota, Teori Lokasi Industri Weber, & Kalkulator Spasial
          </h3>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'burgess', label: 'Burgess (Konsentris)' },
            { id: 'hoyt', label: 'Hoyt (Sektoral)' },
            { id: 'harris', label: 'Harris-Ullman (Multi-Inti)' },
            { id: 'thunen', label: 'Von Thünen (Pertanian)' },
            { id: 'weber', label: 'Alfred Weber (Industri)' },
            { id: 'calculator', label: 'Kalkulator Titik Henti' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m.id as SubModel)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                activeModel === m.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {/* MODEL 1: BURGESS CONCENTRIC */}
        {activeModel === 'burgess' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="flex justify-center lg:col-span-6">
              <svg viewBox="0 0 320 320" className="h-72 w-72 sm:h-80 sm:w-80 drop-shadow-sm">
                {/* 5 Concentric Rings */}
                <circle cx="160" cy="160" r="145" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="115" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="85" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="55" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="28" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />

                {/* Ring Labels */}
                <text x="160" y="164" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  1. CBD
                </text>
                <text x="160" y="122" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  2. Zona Transisi
                </text>
                <text x="160" y="90" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  3. Buruh Rendah
                </text>
                <text x="160" y="60" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  4. Menengah
                </text>
                <text x="160" y="30" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  5. Penglaju (Komuter)
                </text>
              </svg>
            </div>

            <div className="space-y-3 lg:col-span-6 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Teori Konsentris (Ernest W. Burgess, 1925)
                </span>
                <h4 className="text-base font-bold text-slate-900">Struktur Kota Melingkar Konsentris</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Didasarkan pada studi perkembangan kota Chicago. Kota membesar ke luar secara simetris membentuk 5 zona konsentris konsisten.
                </p>
              </div>

              <div className="space-y-2">
                <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <strong className="text-slate-900 block">1. Central Business District (CBD / PDK):</strong>
                  Pusat bisnis, pertokoan besar, bank, perkantoran, dan gedung teater.
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <strong className="text-slate-900 block">2. Zona Transisi / Peralihan:</strong>
                  Kawasan industri ringan berbaur pemukiman kumuh (slum). Terjadi perembesan aktivitas bisnis ke pemukiman.
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <strong className="text-slate-900 block">3. Zona Permukiman Kelas Pekerja / Buruh:</strong>
                  Perumahan padat buruh pabrik yang ingin dekat dengan tempat kerja untuk menghemat ongkos transport.
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <strong className="text-slate-900 block">4. Zona Permukiman Kelas Menengah:</strong>
                  Kawasan perumahan teratur, luas, asri dengan fasilitas mandiri.
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <strong className="text-slate-900 block">5. Zona Penglaju (Commuter Zone):</strong>
                  Kawasan pinggiran kota (suburban) tempat tinggal orang-orang kaya yang bekerja di CBD dan melaju setiap hari.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODEL 2: HOYT SECTORAL */}
        {activeModel === 'hoyt' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="flex justify-center lg:col-span-6">
              <svg viewBox="0 0 320 320" className="h-72 w-72 sm:h-80 sm:w-80 drop-shadow-sm">
                {/* Hoyt Wedges Pattern */}
                <circle cx="160" cy="160" r="140" fill="#f8fafc" stroke="#94a3b8" />
                {/* Sector 1: CBD in center */}
                <circle cx="160" cy="160" r="30" fill="#1e293b" />
                <text x="160" y="164" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  1. CBD
                </text>
                {/* Sector 2: Industrial corridor along transport */}
                <path d="M 160 160 L 160 20 A 140 140 0 0 1 240 45 Z" fill="#94a3b8" stroke="#64748b" />
                <text x="195" y="80" fill="#0f172a" fontSize="8" fontWeight="bold">
                  2. Industri Manufaktur
                </text>
                {/* Sector 3: Low class adjacent to industry */}
                <path d="M 160 160 L 240 45 A 140 140 0 0 1 300 160 Z" fill="#cbd5e1" stroke="#64748b" />
                <text x="240" y="130" fill="#0f172a" fontSize="8" fontWeight="bold">
                  3. Buruh Murah
                </text>
                {/* Sector 4: Middle class */}
                <path d="M 160 160 L 300 160 A 140 140 0 0 1 160 300 Z" fill="#e2e8f0" stroke="#64748b" />
                <text x="220" y="240" fill="#0f172a" fontSize="8" fontWeight="bold">
                  4. Kelas Menengah
                </text>
                {/* Sector 5: High class along clean scenic corridor */}
                <path d="M 160 160 L 160 300 A 140 140 0 0 1 20 160 Z" fill="#f1f5f9" stroke="#64748b" />
                <text x="90" y="230" fill="#0f172a" fontSize="8" fontWeight="bold">
                  5. Kelas Atas (Elit)
                </text>
                <path d="M 160 160 L 20 160 A 140 140 0 0 1 160 20 Z" fill="#e2e8f0" stroke="#64748b" />
                <text x="85" y="90" fill="#0f172a" fontSize="8" fontWeight="bold">
                  4. Menengah
                </text>
              </svg>
            </div>

            <div className="space-y-3 lg:col-span-6 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Teori Sektoral (Homer Hoyt, 1939)
                </span>
                <h4 className="text-base font-bold text-slate-900">Pertumbuhan Sepanjang Jalur Transportasi</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Hoyt membuktikan bahwa pola persebaran tata guna lahan kota tidak berupa lingkaran konsentris penuh, melainkan berkembang dalam bentuk sektor-sektor irisan kue (wedges) yang mengikuti rute jalur rel kereta api atau arteri jalan raya utama.
                </p>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">
                <strong>Prinsip Emas OSN/KSR:</strong> Pemukiman kelas atas (High Class) cenderung menjauhi sektor industri dan memilih koridor berpemandangan asri dengan akses jalan mulus langsung ke pusat kota. Sebaliknya, pemukiman kelas buruh menempel langsung di samping sektor industri manufaktur.
              </div>
            </div>
          </div>
        )}

        {/* MODEL 3: HARRIS & ULLMAN */}
        {activeModel === 'harris' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="flex justify-center lg:col-span-6">
              <svg viewBox="0 0 320 320" className="h-72 w-72 sm:h-80 sm:w-80">
                <rect x="10" y="10" width="300" height="300" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
                {/* Node 1: CBD */}
                <rect x="80" y="80" width="70" height="60" rx="6" fill="#1e293b" />
                <text x="115" y="115" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  1. CBD Utama
                </text>
                {/* Node 2: Wholesale / Light Industry */}
                <rect x="155" y="90" width="60" height="70" rx="6" fill="#94a3b8" />
                <text x="185" y="125" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  2. Grosir &amp; Ringan
                </text>
                {/* Node 3: Low Class */}
                <rect x="60" y="145" width="85" height="65" rx="6" fill="#cbd5e1" />
                <text x="102" y="180" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  3. Buruh Murah
                </text>
                {/* Node 4: Medium Class */}
                <rect x="150" y="165" width="95" height="75" rx="6" fill="#e2e8f0" />
                <text x="197" y="205" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  4. Menengah
                </text>
                {/* Node 5: High Class */}
                <rect x="160" y="25" width="80" height="55" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
                <text x="200" y="55" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                  5. Elit / Mewah
                </text>
                {/* Node 6: Heavy Industry Isolated */}
                <rect x="25" y="220" width="80" height="65" rx="6" fill="#64748b" />
                <text x="65" y="255" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                  6. Industri Berat
                </text>
                {/* Node 7: Sub-CBD */}
                <rect x="235" y="110" width="65" height="50" rx="6" fill="#334155" />
                <text x="267" y="138" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                  7. Sub-CBD
                </text>
              </svg>
            </div>

            <div className="space-y-3 lg:col-span-6 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Teori Inti Berganda / Multi-Nuclei (Harris &amp; Ullman, 1945)
                </span>
                <h4 className="text-base font-bold text-slate-900">Metropolis Tanpa Satu Pusat Tunggal</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Kota modern tidak hanya dikendalikan oleh satu CBD tunggal. Perkembangan kota modern dipicu oleh beberapa nukleus (inti) pertumbuhan independen seperti kawasan pelabuhan, stasiun KA terpadu, bandara internasional, kompleks industri berat, atau universitas.
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-blue-900">
                <strong>4 Faktor Pendorong Multi-Inti:</strong>
                <ol className="list-decimal list-inside mt-1 space-y-0.5 text-[11px]">
                  <li>Aktivitas tertentu membutuhkan fasilitas khusus (misal: pelabuhan butuh garis pantai).</li>
                  <li>Aktivitas sejenis saling menguntungkan jika mengelompok (aglomerasi bisnis finansial).</li>
                  <li>Aktivitas yang saling merugikan akan saling menolak (industri berat menjauhi pemukiman elit).</li>
                  <li>Ketidakmampuan membayar sewa lahan tinggi di CBD utama.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* MODEL 4: VON THUNEN */}
        {activeModel === 'thunen' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="flex justify-center lg:col-span-6">
              <svg viewBox="0 0 320 320" className="h-72 w-72 sm:h-80 sm:w-80">
                {/* Rings of Von Thunen */}
                <circle cx="160" cy="160" r="145" fill="#fef08a" stroke="#ca8a04" opacity="0.4" />
                <circle cx="160" cy="160" r="115" fill="#fed7aa" stroke="#ea580c" opacity="0.5" />
                <circle cx="160" cy="160" r="85" fill="#bbf7d0" stroke="#16a34a" opacity="0.6" />
                <circle cx="160" cy="160" r="55" fill="#a7f3d0" stroke="#059669" opacity="0.7" />
                <circle cx="160" cy="160" r="28" fill="#1e293b" />

                <text x="160" y="164" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Pasar (Kota)
                </text>
                <text x="160" y="122" fill="#065f46" fontSize="8" fontWeight="bold" textAnchor="middle">
                  1. Sayur &amp; Susu Segar
                </text>
                <text x="160" y="92" fill="#15803d" fontSize="8" fontWeight="bold" textAnchor="middle">
                  2. Kayu Bakar / Hutan
                </text>
                <text x="160" y="65" fill="#c2410c" fontSize="8" fontWeight="bold" textAnchor="middle">
                  3. Padi / Gandum (Pangan)
                </text>
                <text x="160" y="35" fill="#854d0e" fontSize="8" fontWeight="bold" textAnchor="middle">
                  4. Peternakan Ekstensif
                </text>
              </svg>
            </div>

            <div className="space-y-3 lg:col-span-6 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Model Penggunaan Lahan Pertanian (Johann Heinrich von Thünen, 1826)
                </span>
                <h4 className="text-base font-bold text-slate-900">Sewa Lahan (Land Rent) &amp; Biaya Transportasi</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Formula Sewa Lahan: <span className="font-mono font-bold text-blue-700">R = Y(p - c) - Ytd</span>
                  <br />(di mana R = Sewa Lahan, Y = Hasil panen, p = Harga pasar, c = Biaya produksi, t = Tarif transport, d = Jarak ke pasar).
                </p>
              </div>

              <div className="space-y-1.5 text-slate-700">
                <div className="rounded-md bg-emerald-50 border border-emerald-200 p-2">
                  <strong>Ring 1 (Tepat di luar kota): Hortikultura &amp; Susu Sapi Segar.</strong>
                  <br />Produk sangat mudah busuk (perishable) dan dibutuhkan harian oleh penduduk kota.
                </div>
                <div className="rounded-md bg-green-50 border border-green-200 p-2">
                  <strong>Ring 2: Hutan Produksi Kayu Bakar &amp; Bangunan.</strong>
                  <br />Zaman dulu kayu sangat berat dan bervolume besar, ongkos angkut mahal sehingga harus dekat kota.
                </div>
                <div className="rounded-md bg-amber-50 border border-amber-200 p-2">
                  <strong>Ring 3: Tanaman Pangan (Serealia / Gandum / Padi).</strong>
                  <br />Tidak mudah busuk, bisa disimpan dalam karung dan diangkut dalam skala besar.
                </div>
                <div className="rounded-md bg-yellow-50 border border-yellow-200 p-2">
                  <strong>Ring 4: Peternakan Komersial (Livestock / Ranching).</strong>
                  <br />Ternak dapat digiring berjalan sendiri menuju pasar tanpa biaya transportasi truk/kereta!
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODEL 5: WEBER LEAST COST */}
        {activeModel === 'weber' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
                <span className="font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Teori Lokasi Industri Biaya Terendah (Alfred Weber, 1909)
                </span>
                <h4 className="text-base font-bold text-slate-900">Indeks Material (Material Index / IM)</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Formula: <span className="font-mono font-bold text-blue-700">IM = Berat Bahan Baku / Berat Produk Jadi</span>
                </p>
              </div>

              {/* Interactive Weber Sliders */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Berat Bahan Baku Mentah:</span>
                    <span className="font-mono font-bold text-slate-900">{rawWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={rawWeight}
                    onChange={(e) => setRawWeight(Number(e.target.value))}
                    className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Berat Produk Jadi Siap Jual:</span>
                    <span className="font-mono font-bold text-slate-900">{prodWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={prodWeight}
                    onChange={(e) => setProdWeight(Number(e.target.value))}
                    className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                </div>

                <div className="rounded-lg bg-slate-100 p-3 flex items-center justify-between font-mono">
                  <span className="text-slate-600 font-bold">Hasil Indeks Material (IM):</span>
                  <span className="text-base font-bold text-blue-700">{materialIndex.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className={`rounded-xl border p-4 text-xs ${weberDecision.color}`}>
                <span className="font-bold uppercase tracking-wider block opacity-70">
                  Keputusan Lokasi Pabrik:
                </span>
                <h4 className="text-base font-bold mt-1">{weberDecision.status}</h4>
                <div className="mt-2 font-semibold text-slate-900">Rekomendasi Penempatan:</div>
                <div className="mt-0.5 font-bold text-blue-700 text-sm">{weberDecision.loc}</div>
                <p className="mt-2 leading-relaxed text-slate-700">{weberDecision.reason}</p>
                <div className="mt-2 pt-2 border-t border-slate-200/60">
                  <strong>Contoh Industri Nyata:</strong> {weberDecision.contoh}
                </div>
              </div>

              <div className="rounded-lg bg-slate-900 p-3.5 text-xs text-slate-200">
                <strong className="text-amber-300 block mb-1">Kunci Soal KSR Geografi:</strong>
                Jika suatu soal menyebutkan pabrik peleburan timah atau pabrik tapioka yang butuh 5 ton singkong untuk menghasilkan 1 ton tepung pati ($IM = 5/1 = 5 &gt; 1$), maka lokasi pabrik WAJIB berada di dekat perkebunan singkong (sumber bahan baku)!
              </div>
            </div>
          </div>
        )}

        {/* MODEL 6: INTERACTIVE BREAKING POINT CALCULATOR */}
        {activeModel === 'calculator' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
                <span className="font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Kalkulator Hukum Titik Henti (Carrothers Breaking Point)
                </span>
                <h4 className="text-base font-bold text-slate-900">Penentuan Lokasi Ideal Fasilitas Umum</h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Menentukan jarak batas wilayah pengaruh perdagangan atau lokasi optimal pembangunan fasilitas bersama (Rumah Sakit, Pasar Induk, Sekolah) di antara dua kota.
                </p>
                <div className="mt-2 font-mono font-bold text-blue-700">
                  D_AB = Jarak / (1 + √(Populasi_Besar / Populasi_Kecil))
                </div>
              </div>

              {/* Slider Controls */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Penduduk Kota A:</span>
                    <span className="font-mono font-bold text-slate-900">{popA.toLocaleString()} jiwa</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    value={popA}
                    onChange={(e) => setPopA(Number(e.target.value))}
                    className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Penduduk Kota B:</span>
                    <span className="font-mono font-bold text-slate-900">{popB.toLocaleString()} jiwa</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    value={popB}
                    onChange={(e) => setPopB(Number(e.target.value))}
                    className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Jarak Kedua Kota (d_AB):</span>
                    <span className="font-mono font-bold text-slate-900">{distanceKm} km</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="1"
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Number(e.target.value))}
                    className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Output Diagnostics */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-5 text-xs space-y-3">
                <span className="font-bold uppercase tracking-wider text-blue-700 block">
                  Hasil Perhitungan Spasial
                </span>
                <div>
                  <span className="text-slate-600 block">Lokasi Titik Henti Terhitung:</span>
                  <div className="mt-1 text-xl font-mono font-bold text-blue-900">
                    {breakingPointDist.toFixed(2)} km dari {kotaKecilName}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    (atau {(distanceKm - breakingPointDist).toFixed(2)} km dari kota yang lebih besar)
                  </span>
                </div>

                <div className="pt-2 border-t border-blue-200">
                  <span className="text-slate-600 block">Kekuatan Interaksi Gravitasi Reilly (I_AB):</span>
                  <span className="text-base font-mono font-bold text-slate-900">
                    {reillyIndex.toLocaleString()} indeks interaksi
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-900">
                <strong>Hukum Wajib Soal OSN/KSR:</strong> Titik henti Carrothers selalu berada{' '}
                <strong>LEBIH DEKAT ke arah kota yang berpenduduk lebih sedikit (kota kecil)</strong>, karena kota besar
                memiliki medan gravitasi ekonomi dan daya tarik yang jauh lebih luas!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
