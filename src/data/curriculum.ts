import { GeoModule } from '../types/geo';

export const GEO_MODULES: GeoModule[] = [
  // --- CLUSTER 1: FISIK & KEBUMIAN ---
  {
    id: 'meteorologi-klimatologi',
    ksrNumber: 1,
    cluster: 'fisik-kebumian',
    title: '1. Meteorologi dan Klimatologi',
    subtitle: 'Struktur termal atmosfer, lapse rate adiabatik, sirkulasi global, front cuaca & klasifikasi iklim',
    icon: 'CloudSun',
    color: 'border-sky-500/30 text-sky-800 bg-sky-50/50',
    interactiveVisualizer: 'atmosphere',
    totalQuestions: 25,
    description:
      'Membedah profil vertikal atmosfer (troposfer hingga termosfer), stabilitas paket udara (DALR, SALR, ELR), gaya penggerak angin (Gradien Tekanan, Coriolis, Geostrofik), ITCZ, badai siklon, hingga klasifikasi iklim empiris Köppen, Schmidt-Ferguson, dan Oldeman.',
    sections: [
      {
        title: 'Struktur Vertikal Atmosfer & Inversi Suhu',
        content:
          'Atmosfer bumi terdiri dari lapisan termal: Troposfer (0–12 km, cuaca aktif, lapse rate ~6.5°C/km), Stratosfer (12–50 km, inversi suhu akibat penyerapan UV oleh ozon O3), Mesosfer (50–85 km, lapisan paling dingin hingga -90°C), dan Termosfer (>85 km, pemanasan ekstrem akibat fotodisosiasi gas).',
        keyPoints: [
          'Tropopause: Batas atas troposfer yang menahan ekspansi vertikal awan Cumulonimbus sehingga puncaknya membentuk paron (anvil top).',
          'Inversi Suhu: Kondisi anomali saat suhu justru meningkat seiring ketinggian. Di stratosfer terjadi alami karena lapisan ozon.',
          'Massa Atmosfer: Sekitar 80% total massa udara dan 99% uap air terkonsentrasi di dalam troposfer.',
        ],
        mnemonic: 'T - S - M - T (Troposfer, Stratosfer, Mesosfer, Termosfer).',
      },
      {
        title: 'Stabilitas Udara: DALR, SALR, dan ELR',
        content:
          'Kondisi stabilitas menentukan kecenderungan udara membentuk awan badai konvektif.',
        keyPoints: [
          'DALR (Dry Adiabatic Lapse Rate): Laju penurunan suhu udara tak jenuh saat naik = 1°C per 100 m (10°C/km).',
          'SALR (Saturated Adiabatic Lapse Rate): Laju udara jenuh = 0.5–0.6°C per 100 m (lebih kecil dari DALR karena pelepasan kalor laten kondensasi).',
          'Atmosfer Tidak Stabil Mutlak: ELR > DALR (paket udara selalu lebih hangat dari lingkungan sehingga melesat bebas ke atas).',
          'Atmosfer Stabil Mutlak: ELR < SALR (paket udara selalu lebih dingin dari lingkungan sehingga ditekan turun kembali).',
        ],
        formula: 'DALR = 1°C/100m | SALR = 0.6°C/100m | Tidak Stabil jika ELR > DALR',
      },
      {
        title: 'Klasifikasi Iklim: Köppen, Schmidt-Ferguson, & Oldeman',
        content:
          'Sistem klasifikasi iklim acuan dalam OSN dan KSR Geografi.',
        keyPoints: [
          'Köppen: Huruf A (Tropis), B (Arid/Kering), C (Sedang/Mesotermal), D (Dingin/Mikrotermal), E (Kutub). Af (Hutan Hujan Tropis, bulan terkering ≥60 mm), Am (Monsun), Aw (Sabana).',
          'Schmidt-Ferguson (Model Q): Q = (Bulan Kering / Bulan Basah) * 100%. Kriteria: BB > 100 mm, BL 60–100 mm, BK < 60 mm. Tipe A (Q < 14.3%), B, C, D, E, F, G, H.',
          'Oldeman (Agroklimat Padi & Palawija): BB > 200 mm (kebutuhan padi sawah), BK < 100 mm (palawija). Tipe Utama A (BB > 9 bulan berturut-turut), B (7–9 bln), C (5–6 bln), D (3–4 bln), E (< 3 bln).',
        ],
        osnTrap:
          'Jebakan KSR: Bulan Lembap (BL 60-100 mm) pada Schmidt-Ferguson TIDAK BOLEH dimasukkan ke dalam perhitungan rumus Q!',
      },
      {
        title: 'Sirkulasi Atmosfer Global, Angin Fohn, & Anomali ENSO',
        content:
          'Dinamika angin skala global dan lokal nusantara yang menjadi langganan soal OSN Geografi.',
        keyPoints: [
          'Tiga Sel Sirkulasi Meridional: Sel Hadley (0°–30° ekuator ke subtropis), Sel Ferrel (30°–60° lintang sedang), dan Sel Polar (60°–90° kutub).',
          'Hukum Termal Braak: Di wilayah tropis kepulauan, suhu udara turun rata-rata 0.61°C tiap kenaikan 100 m: $T = T_0 - 0.61 \\times (h/100)$.',
          'Kelembapan Relatif (RH): $RH = (\\text{Uap Aktual} / \\text{Kapasitas Maksimum}) \\times 100\\%$.',
          'Daftar Angin Fohn Indonesia (Angin Jatuh Panas & Kering): Angin Gending (Pasuruan/Probolinggo), Bahorok (Deli), Kumbang (Cirebon/Brebes), Brubu (Makassar), dan Wambraw (Biak Papua).',
          'El Niño vs La Niña: El Niño = pelemahan sirkulasi Walker, kolam hangat bergeser ke Pasifik timur, kemarau panjang & kebakaran hutan di Indonesia; La Niña = penguatan monsun basah, curah hujan ekstrem & banjir di Indonesia.',
        ],
        mnemonic: 'Fohn: Gending (Jatim), Bahorok (Sumut), Kumbang (Jabar/Jateng), Brubu (Sulsel), Wambraw (Papua).',
      },
    ],
  },
  {
    id: 'oseanografi-hidrologi',
    ksrNumber: 2,
    cluster: 'fisik-kebumian',
    title: '2. Oseanografi dan Hidrologi',
    subtitle: 'Sifat fisik-kimia air laut, sirkulasi termohalin, gelombang, pasut, UNCLOS, dan siklus hidrologi DAS',
    icon: 'Waves',
    color: 'border-cyan-500/30 text-cyan-800 bg-cyan-50/50',
    interactiveVisualizer: 'earth',
    totalQuestions: 20,
    description:
      'Zonasi batimetri dan penetrasi cahaya laut, profil termoklin, haloklin, piknoklin, sirkulasi massa air global (Global Conveyor Belt), tipe gelombang pecah, hukum laut UNCLOS 1982, serta neraca air DAS dan hidrograf aliran.',
    sections: [
      {
        title: 'Zonasi Laut & Hukum Wilayah Laut UNCLOS 1982',
        content:
          'Laut dibagi berdasarkan kedalaman batimetri (Litoral, Neritik 0–200m, Batial 200–2000m, Abisal 2000–6000m, Hadal >6000m) dan penetrasi cahaya (Eufotik 0–200m, Disfotik 200–1000m, Afotik >1000m).',
        keyPoints: [
          'Laut Teritorial: 12 mil laut dari garis pangkal terluar (kedaulatan penuh).',
          'Zona Tambahan: 24 mil laut dari garis pangkal (hak fiskal, imigrasi, bea cukai).',
          'Zona Ekonomi Eksklusif (ZEE): 200 mil laut dari garis pangkal (hak berdaulat eksplorasi dan eksploitasi SDA hayati & non-hayati).',
          'Landas Kontinen: Kelanjutan geologis paparan benua hingga 200–350 mil laut (hak mineral dasar laut).',
        ],
      },
      {
        title: 'Sirkulasi Termohalin, Pasang Surut & Gelombang',
        content:
          'Sirkulasi termohalin digerakkan oleh kontras densitas air laut akibat suhu (thermo) dan salinitas (haline). Pembentukan es di Atlantik Utara meninggalkan air asin pekat yang tenggelam menjadi NADW.',
        keyPoints: [
          'Pasang Purnama (Spring Tide): Terjadi saat Syzygy (Matahari, Bulan, Bumi sejajar saat Bulan Baru dan Purnama). Rentang pasut maksimum.',
          'Pasang Perbani (Neap Tide): Terjadi saat Kuadratur (sudut 90° saat Kuartir 1 dan 3). Rentang pasut minimum.',
          'Tipe Gelombang Pecah: Spilling (lereng landai), Plunging (lereng agak curam / pipa ombak), Surging (lereng sangat terjal).',
        ],
      },
    ],
  },
  {
    id: 'kebencanaan',
    ksrNumber: 3,
    cluster: 'lingkungan-kebencanaan',
    title: '3. Kebencanaan dan Manajemen Bencana',
    subtitle: 'Karakteristik bahaya geologis, hidro-meteorologis, siklus manajemen bencana, dan analisis risiko bencana',
    icon: 'ShieldAlert',
    color: 'border-red-500/30 text-red-800 bg-red-50/50',
    interactiveVisualizer: 'tectonic',
    totalQuestions: 18,
    description:
      'Tipologi bencana (gempa bumi, tsunami, likuifaksi, erupsi gunung api, banjir, tanah longsor, kekeringan), rumus risiko bencana (Risk = Hazard × Vulnerability / Capacity), serta siklus penanggulangan bencana (Pra, Saat, Pasca).',
    sections: [
      {
        title: 'Rumus Risiko Bencana & Segitiga Risiko',
        content:
          'Risiko bencana adalah potensi kerugian yang ditimbulkan akibat bencana pada suatu wilayah dan kurun waktu tertentu.',
        keyPoints: [
          'Formula Risiko Bencana: $R = \\frac{H \\times V}{C}$ (di mana R = Risk, H = Hazard / Bahaya, V = Vulnerability / Kerentanan, C = Capacity / Kapasitas ketahanan).',
          'Hazard (Bahaya): Fenomena alamiah ekstrem yang tidak bisa dicegah (misal kekuatan magnitudo gempa, kemiringan lereng vulkanik).',
          'Vulnerability (Kerentanan): Faktor fisik (kualitas bangunan), sosial (kepadatan lansia/anak), dan ekonomi yang memperbesar kerugian.',
          'Capacity (Kapasitas): Kesiapan masyarakat, sistem peringatan dini (EWS), jalur evakuasi, dan kesiapsiagaan logistik yang memperkecil risiko.',
        ],
        formula: 'Risk = (Hazard * Vulnerability) / Capacity',
        osnTrap:
          'KSR Trap: Mengurangi risiko bencana paling efektif dilakukan dengan MENURUNKAN KERENTANAN dan MENAIKKAN KAPASITAS, karena bahaya geologis alam (hazard) tidak bisa diubah manusia.',
      },
      {
        title: 'Siklus Manajemen Penanggulangan Bencana',
        content:
          'UU No. 24 Tahun 2007 membagi siklus bencana ke dalam tiga fase strategis berkesinambungan.',
        keyPoints: [
          'Fase Pra-Bencana (Situasi Tenang & Ada Potensi): Pencegahan, Mitigasi Struktural (tanggul, bangunan tahan gempa), Mitigasi Non-Struktural (tata ruang zonasi KRB, simulasi evakuasi), dan Kesiapsiagaan.',
          'Fase Tanggap Darurat (Saat Kejadian): Pencarian dan penyelamatan korban (SAR), evakuasi, pemenuhan kebutuhan dasar pengungsi, serta perlindungan kelompok rentan.',
          'Fase Pasca-Bencana: Rehabilitasi (pemulihan layanan publik dan trauma healing) dan Rekonstruksi (pembangunan kembali infrastruktur dengan prinsip Build Back Better).',
        ],
      },
      {
        title: 'Skala Pengukuran Geografi & Kebencanaan',
        content:
          'Daftar skala pengukuran standar dalam OSN dan KSR Geografi yang wajib dihafalkan untuk mengukur intensitas, magnitudo, dan dampak fenomena kebumian.',
        keyPoints: [
          'Skala Beaufort (0–12): Mengukur kecepatan dan dampak angin permukaan di darat/laut (0 tenang, 6 angin kencang, 12 badai hurikan).',
          'Enhanced Fujita Scale (EF0–EF5): Mengukur intensitas dan kecepatan putaran angin tornado berdasarkan tingkat kerusakan bangunan.',
          'Skala Saffir-Simpson (Kategori 1–5): Mengklasifikasikan siklon tropis/hurricane berdasarkan kecepatan angin berkelanjutan dan gelombang badai (storm surge).',
          'Skala Mercalli Modifikasi (MMI I–XII): Mengukur INTENSITAS dampak visual kerusakan dan getaran gempa yang dirasakan di lokasi tertentu.',
          'Skala Richter & Moment Magnitudo (Mw): Mengukur MAGNITUDO energi seismik absolut yang dilepaskan di hiposentrum gempa.',
          'Volcanic Explosivity Index (VEI 0–8): Mengukur skala letusan gunung api berdasarkan volume piroklastik dan tinggi kolom erupsi.',
          'Skala Wentworth: Klasifikasi ukuran butir sedimen dari lempung (<1/256 mm), lanau, pasir, kerikil, berangkal, hingga bongkah (>256 mm).',
          'Skala Mohs (1–10): Skala kekerasan mineral relatif (1 Talk, 2 Gips, 3 Kalsit, 4 Fluorit, 5 Apatit, 6 Ortoklas, 7 Kuarsa, 8 Topaz, 9 Korundum, 10 Intan).',
        ],
        mnemonic: 'Mohs: T-G-K-F-A-O-K-T-K-I (Talk, Gips, Kalsit, Fluorit, Apatit, Ortoklas, Kuarsa, Topaz, Korundum, Intan).',
      },
    ],
  },
  {
    id: 'sumberdaya',
    ksrNumber: 4,
    cluster: 'lingkungan-kebencanaan',
    title: '4. Sumberdaya dan Manajemen Sumberdaya',
    subtitle: 'Klasifikasi SDA hayati & non-hayati, transisi energi baru terbarukan (EBT), dan daya dukung lingkungan',
    icon: 'BatteryCharging',
    color: 'border-yellow-600/30 text-yellow-800 bg-yellow-50/50',
    interactiveVisualizer: 'earth',
    totalQuestions: 15,
    description:
      'Klasifikasi SDA berdasarkan kelestarian (Renewable vs Non-renewable), UU No. 11/1967 tentang bahan galian (Golongan A Strategis, Golongan B Vital, Golongan C Industri), transisi energi hijau (geotermal, surya, hidro, biomassa), dan carrying capacity.',
    sections: [
      {
        title: 'Bahan Galian & Sumberdaya Mineral',
        content:
          'Penggolongan bahan galian menurut nilai strategis pertahanan dan ekonomi nasional.',
        keyPoints: [
          'Golongan A (Strategis): Minyak bumi, gas alam, batubara, uranium/bahan radioaktif (dikuasai penuh oleh negara untuk pertahanan/keamanan).',
          'Golongan B (Vital): Emas, perak, tembaga, bauksit, besi, timah, nikel (menjamin hajat hidup orang banyak dan industri utama).',
          'Golongan C (Bahan Galian Industri/Bukan Logam): Pasir, batu kali, marmer, kaolin, batu kapur, aspal alam.',
        ],
      },
      {
        title: 'Energi Baru Terbarukan (EBT) & Potensi Indonesia',
        content:
          'Indonesia berada di zona Cincin Api Pasifik (Ring of Fire) yang menyimpan 40% potensi panas bumi (geothermal) dunia.',
        keyPoints: [
          'Panas Bumi (Geotermal): Energi baseload bersih yang tidak bergantung cuaca. PLTP Kamojang, Dieng, Wayang Windu.',
          'Energi Surya (Solar PV): Potensi tinggi di wilayah Nusa Tenggara (NTB/NTT) karena curah hujan rendah dan insolasi matahari tahunan tinggi.',
          'Energi Angin (Bayu): PLTB Sidrap dan Jeneponto di Sulawesi Selatan memanfaatkan angin monsun lintang rendah.',
        ],
      },
    ],
  },
  {
    id: 'lingkungan-sdgs',
    ksrNumber: 5,
    cluster: 'lingkungan-kebencanaan',
    title: '5. Geografi Lingkungan & Pembangunan Berkelanjutan',
    subtitle: 'Ekologi bentang alam, jejak karbon, valuasi ekosistem, AMDAL, dan 17 Tujuan SDGs 2030',
    icon: 'Leaf',
    color: 'border-emerald-600/30 text-emerald-800 bg-emerald-50/50',
    interactiveVisualizer: 'atmosphere',
    totalQuestions: 16,
    description:
      'Prinsip pembangunan berkelanjutan (ekonomi, sosial, lingkungan), batas ambang daya dukung bumi (Planetary Boundaries), jejak ekologis (Ecological Footprint), mekanisme AMDAL (Analisis Mengenai Dampak Lingkungan), dan target Sustainable Development Goals (SDGs).',
    sections: [
      {
        title: 'Prinsip Pembangunan Berkelanjutan (Sustainable Development)',
        content:
          'Konsep dari Brundtland Report (1987): Pembangunan yang memenuhi kebutuhan generasi sekarang tanpa mengorbankan hak generasi masa depan untuk memenuhi kebutuhan mereka.',
        keyPoints: [
          'Tiga Pilar Utama (Triple Bottom Line): People (Keadilan Sosial), Planet (Kelestarian Lingkungan), Profit (Kelayakan Ekonomi).',
          'Daya Dukung Lingkungan (Carrying Capacity): Batas maksimum populasi atau aktivitas manusia yang dapat didukung oleh biosfer tanpa menimbulkan degradasi lingkungan ireversibel.',
          'Overshoot Day: Hari dalam setahun di mana konsumsi sumberdaya umat manusia telah melampaui kemampuan regenerasi bumi dalam tahun tersebut.',
        ],
      },
      {
        title: 'Instrumen Perlindungan: AMDAL & Valuasi Lingkungan',
        content:
          'AMDAL adalah kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup yang diperlukan bagi proses pengambilan keputusan izin usaha.',
        keyPoints: [
          'Dokumen AMDAL: Kerangka Acuan (KA-ANDAL), Analisis Dampak Lingkungan (ANDAL), Rencana Pengelolaan Lingkungan (RKL), dan Rencana Pemantauan Lingkungan (RPL).',
          'Jasa Ekosistem (Ecosystem Services): Jasa penyedia (pangan, air), jasa pengaturan (pencegah banjir oleh mangrove), jasa pendukung (siklus hara), dan jasa kultural (wisata spiritual).',
        ],
      },
    ],
  },
  {
    id: 'geomorfologi',
    ksrNumber: 6,
    cluster: 'fisik-kebumian',
    title: '6. Geomorfologi',
    subtitle: 'Tenaga eksogen, siklus geomorfik, bentang alam fluvial, karst, glasial, eolian, struktural, dan pantai',
    icon: 'Mountain',
    color: 'border-orange-500/30 text-orange-800 bg-orange-50/50',
    interactiveVisualizer: 'hjulstrom',
    totalQuestions: 22,
    description:
      'Dinamika tenaga pembentuk relief bumi: proses pelapukan, mass wasting, Diagram Hjulstrom sungai, bentuklahan karst (dolina, uvala, polje), bentang alam glasial (cirque, horn, roche moutonnee), eolian (barchan, loess), dan pesisir pantai.',
    sections: [
      {
        title: 'Dinamika Fluvial & Diagram Hjulstrom',
        content:
          'Diagram Hjulstrom menghubungkan kecepatan arus sungai (v) dengan diameter butir sedimen (d) untuk memetakan rejim erosi, transportasi, dan sedimentasi.',
        keyPoints: [
          'Paradoks Kohesi Lempung: Butir lempung (<0.002 mm) membutuhkan arus sangat deras (~100 cm/s) untuk mulai tererosi karena gaya tarik elektrostatik antar-lempeng lempung yang rapat.',
          'Zona Meander: Sisi luar lengkungan sungai (cut bank) mengalami arus deras dan erosi lateral; sisi dalam lengkungan (point bar) mengalami arus lambat dan pengendapan pasir.',
          'Danau Tapal Kuda (Oxbow Lake): Terbentuk saat leher meander terpotong lurus saat debit banjir puncak.',
        ],
        osnTrap:
          'Partikel paling mudah tererosi di sungai bukanlah lempung, melainkan PASIR HALUS (ukuran butir 0.1–0.2 mm) yang hanya butuh kecepatan arus ~15–20 cm/s.',
      },
      {
        title: 'Bentuklahan Karst & Glasial',
        content:
          'Morfologi khas bentang alam karst dan glasial yang sering keluar di KSR Geografi.',
        keyPoints: [
          'Karst Mayor: Dolina (sinkhole tunggal), Uvala (gabungan beberapa dolina berdekatan), Polje (lembah depresi raksasa berdasar lempung terra rossa), Ponor (lubang air bawah tanah).',
          'Glasial Erosional: Cirque (amfiteater mangkok es), Arete (punggungan tajam pemisah cirque), Horn (puncak piramida lancip Matterhorn), Roche Moutonnée (lereng hulu halus terabrasi es, lereng hilir terjal akibat plucking es).',
        ],
      },
      {
        title: 'Bentuklahan Arid & Morfologi Glasial',
        content:
          'Evolusi bentang alam struktural di wilayah kering dan karakteristik sedimentasi gletser.',
        keyPoints: [
          'Hirarki Arid Landforms: Plateau (dataran tinggi luas bertebing curam) terkikis menjadi Mesa (bukit meja terisolasi, lebar > tinggi), mengecil menjadi Butte (tinggi > lebar), lalu menjadi Pinnacle/Spire (tiang lancip). Urutan luas: Pinnacle < Butte < Mesa < Plateau.',
          'Drumlin (Deposisi Glasial): Bukit lonjong asimetris. Sisi hulu (stoss) lebih curam dihantam es, sedangkan sisi hilir (lee) melandai memanjang. Aliran es bergerak dari stoss menuju lee.',
          'Karakteristik Endapan Moraine/Till: Bersifat poorly sorted (unsorted) karena es mencair langsung tanpa proses sortasi fluida.',
          'Incised Meander (Meander Tertoreh): Kelokan meander yang terukir ke dalam batuan dasar tebing terjal akibat peremajaan erosi vertikal sungai yang dipicu pengangkatan tektonik (regional uplift).',
        ],
      },
    ],
  },
  {
    id: 'geologi',
    ksrNumber: 7,
    cluster: 'fisik-kebumian',
    title: '7. Geologi',
    subtitle: 'Interior bumi, lempeng tektonik, petrologi batuan, Seri Reaksi Bowen, dan skala waktu geologi',
    icon: 'Gem',
    color: 'border-amber-600/30 text-amber-800 bg-amber-50/50',
    interactiveVisualizer: 'bowen',
    totalQuestions: 24,
    description:
      'Stratifikasi internal bumi (kerak Moho, mantel Gutenberg, inti Lehmann), teori seafloor spreading dan paleomagnetisme, batas lempeng (subduksi, kolisi, divergen, transform), Seri Bowen kristalisasi magma, dan skala waktu geologi.',
    sections: [
      {
        title: 'Interior Bumi & Penjalaran Gelombang Seismik',
        content:
          'Struktur interior bumi dibuktikan dari penjalaran Gelombang Primer (longitudinal, padat/cair/gas) dan Sekunder (transversal, solid only).',
        keyPoints: [
          'Inti Luar Cair: Terbukti karena Gelombang S lenyap total pada sudut episentral >103° (S-wave shadow zone).',
          'Diskontinuitas Moho (~35 km): Batas kerak ke mantel; Gutenberg (~2.900 km): Batas mantel ke inti luar; Lehmann (~5.150 km): Batas inti luar ke inti dalam.',
          'Kerak Benua (Sial, asam, granitis, tebal 35-70 km, densitas 2.7 g/cm³) vs Kerak Samudera (Sima, basa, basaltis, tebal 6-10 km, densitas 3.0 g/cm³).',
        ],
      },
      {
        title: 'Petrologi & Seri Reaksi Bowen',
        content:
          'Hukum kristalisasi diferensiasi fraksional magma menurut N.L. Bowen.',
        keyPoints: [
          'Cabang Diskontinu: Olivin (1400°C) -> Piroksen (1200°C) -> Amfibol/Hornblenda (1050°C) -> Biotit (900°C).',
          'Cabang Kontinu: Plagioklas Anortit kaya Kalsium (suhu tinggi) -> Albit kaya Natrium (suhu rendah).',
          'Mineral Sisa Terakhir: Orthoklas/K-Feldspar -> Muskovit -> Kuarsa (600°C).',
          'Hukum Goldich: Kuarsa paling resisten pelapukan kimiawi karena mengkristal pada suhu terendah yang paling dekat dengan suhu atmosfer bumi.',
        ],
        mnemonic: 'Cabang diskontinu: O - P - A - B. Kuarsa = mineral terkuat anti-lapuk!',
      },
      {
        title: 'Siklus Wilson (Evolusi Cekungan Samudra)',
        content:
          'Siklus Wilson memetakan tahapan pembentukan, pemekaran, penyusutan, dan penutupan cekungan samudera sepanjang 300–500 juta tahun.',
        keyPoints: [
          '1. Embrionik (Rifting): Kerak benua meregang membentuk depresi lembah celah (rift valley). Contoh: East African Rift System.',
          '2. Juvenil (Early Spreading): Pemekaran awal lantai samudra muda berkerak basaltis yang mulai digenangi air laut. Contoh: Laut Merah.',
          '3. Mature: Samudra meluas dengan batas paparan pasif (passive margin) dan Mid-Ocean Ridge aktif. Contoh: Samudra Atlantik.',
          '4. Declining: Samudra mulai menyusut karena lempeng samudera menunjam di batas subduksi aktif (active margin). Contoh: Samudra Pasifik.',
          '5. Terminal: Samudra menyempit terjepit lempeng benua yang saling mendekat. Contoh: Laut Mediterania.',
          '6. Suturing / Relict: Kolisi akhir lempeng benua membentuk pegunungan orogenesa raksasa. Contoh: Pegunungan Himalaya.',
        ],
        mnemonic: 'E - J - M - D - T - S (Embrionik, Juvenil, Mature, Declining, Terminal, Suture).',
      },
    ],
  },
  {
    id: 'geografi-pertanian',
    ksrNumber: 8,
    cluster: 'manusia-keruangan',
    title: '8. Geografi Pertanian dan Permasalahan Pangan',
    subtitle: 'Model penggunaan lahan Von Thünen, sistem pertanian dunia, revolusi hijau, dan ketahanan pangan',
    icon: 'Sprout',
    color: 'border-green-600/30 text-green-800 bg-green-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 15,
    description:
      'Teori sewa lahan pertanian Von Thünen (Isolated State), tipologi sistem pertanian dunia (ladang berpindah/shifting cultivation, pertanian intensif lahan basah Asia, perkebunan monokultur tropis, peternakan ekstensif), Revolusi Hijau, dan isu ketahanan pangan (food security vs food sovereignty).',
    sections: [
      {
        title: 'Model Tata Guna Lahan Pertanian Von Thünen (1826)',
        content:
          'Von Thünen merumuskan sewa lahan (Economic Rent / Land Rent) berdasarkan jarak ke pasar pusat kota: $R = Y(p - c) - Ytd$.',
        keyPoints: [
          'Ring 1: Sayuran segar dan peternakan sapi perah (susu). Produk sangat mudah busuk (perishable) dan ongkos transport harus diminimalkan.',
          'Ring 2: Hutan produksi kayu bakar dan kayu pertukangan. Berat dan bervolume besar sehingga butuh dekat pasar.',
          'Ring 3: Tanaman pangan intensif (gandum, jagung, padi). Tahan simpan, diangkut dalam volume besar.',
          'Ring 4: Peternakan komersial ekstensif (ranching). Hewan ternak bisa digiring berjalan sendiri ke pasar sehingga biaya angkut rendah.',
        ],
        formula: 'R = Y(p - c) - Ytd (Sewa Lahan berkurang seiring jarak d bertambah)',
      },
      {
        title: 'Revolusi Hijau & Ketahanan Pangan',
        content:
          'Modernisasi pertanian abad ke-20 dengan varietas bibit unggul berdaya hasil tinggi (HYV), pupuk kimia sintetis, pestisida, dan irigasi mekanis.',
        keyPoints: [
          'Dampak Positif: Ledakan produksi pangan global yang menyelamatkan miliaran orang dari kelaparan massal (Norman Borlaug).',
          'Dampak Negatif: Eutrofikasi badan air akibat limpasan pupuk fosfat/nitrat, resistensi hama, salinisasi tanah, dan ketergantungan petani kecil pada korporasi benih multinasional.',
          'Empat Pilar Ketahanan Pangan (FAO): Ketersediaan (Availability), Aksesibilitas (Access), Pemanfaatan/Gizi (Utilization), dan Stabilitas (Stability).',
        ],
      },
    ],
  },
  {
    id: 'kependudukan',
    ksrNumber: 9,
    cluster: 'manusia-keruangan',
    title: '9. Kependudukan dan Dinamika Penduduk',
    subtitle: 'Model Transisi Demografi (DTM), piramida penduduk, angka beban ketergantungan, migrasi & bonus demografi',
    icon: 'Users',
    color: 'border-violet-600/30 text-violet-800 bg-violet-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 18,
    description:
      'Komponen pertumbuhan penduduk (fertilitas, mortalitas, migrasi), Demographic Transition Model 5 Tahap, bentuk piramida penduduk (ekspansif, stasioner, konstruktif), Rasio Beban Ketergantungan (Dependency Ratio), teori migrasi Push-Pull Everett Lee, dan fenomena Bonus Demografi Indonesia.',
    sections: [
      {
        title: 'Model Transisi Demografi (Demographic Transition Model)',
        content:
          'Menggambarkan evolusi angka kelahiran kasar (CBR) dan kematian kasar (CDR) dari masyarakat tradisional pra-industri hingga pasca-industri modern.',
        keyPoints: [
          'Tahap 1 (Fluktuasi Tinggi): CBR tinggi, CDR tinggi fluktuatif (kelaparan, wabah). Pertumbuhan penduduk mendekati nol. Tidak ada negara modern di tahap ini.',
          'Tahap 2 (Awal Perkembangan): CDR anjlok drastis berkat sanitasi dan antibiotik, CBR tetap tinggi. Ledakan populasi tertinggi (misal: negara Afrika Sub-Sahara).',
          'Tahap 3 (Akhir Perkembangan): CBR mulai turun cepat karena urbanisasi, KB, dan pendidikan wanita. Pertumbuhan mulai melambat (misal: Indonesia, India).',
          'Tahap 4 (Stasioner Rendah): CBR dan CDR sama-sama rendah. Pertumbuhan sangat lambat/stabil (misal: USA, Inggris).',
          'Tahap 5 (Penurunan Alami): CBR lebih rendah dari CDR. Pertumbuhan minus, populasi menua (misal: Jepang, Jerman, Korea Selatan).',
        ],
      },
      {
        title: 'Rumus Rasio Ketergantungan & Bonus Demografi',
        content:
          'Dependency Ratio (DR) mengukur beban yang harus ditanggung penduduk usia kerja produktif terhadap penduduk non-produktif.',
        keyPoints: [
          'Rumus: $DR = \\frac{\\text{Penduduk Usia } (0-14) + \\text{Penduduk Usia } (\\ge 65)}{\\text{Penduduk Usia Produktif } (15-64)} \\times 100$.',
          'Bonus Demografi (Demographic Dividend): Terjadi saat angka Dependency Ratio turun di bawah 50 (artinya 100 orang produktif menanggung kurang dari 50 orang non-produktif). Indonesia diprediksi mengalami puncak bonus demografi pada 2025–2035.',
        ],
        formula: 'DR = ((Pop 0-14 + Pop 65+) / Pop 15-64) * 100',
      },
    ],
  },
  {
    id: 'geografi-ekonomi',
    ksrNumber: 10,
    cluster: 'manusia-keruangan',
    title: '10. Geografi Ekonomi dan Globalisasi',
    subtitle: 'Teori lokasi industri Alfred Weber, aglomerasi industri, rantai pasok global, dan blok perdagangan dunia',
    icon: 'TrendingUp',
    color: 'border-emerald-600/30 text-emerald-800 bg-emerald-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 17,
    description:
      'Teori Lokasi Biaya Terendah (Least Cost Theory) Alfred Weber, Indeks Material (IM), ekonomi aglomerasi (lokalisasi vs urbanisasi), Global Value Chain, pergeseran manufaktur ke Global South, dan blok perdagangan internasional (ASEAN, EU, USMCA, RCEP).',
    sections: [
      {
        title: 'Teori Lokasi Industri Alfred Weber (1909)',
        content:
          'Weber mencari titik lokasi industri dengan total biaya transportasi bahan mentah dan produk jadi yang paling minimum.',
        keyPoints: [
          'Indeks Material: $IM = \\frac{\\text{Berat Bahan Baku}}{\\text{Berat Produk Jadi}}$.',
          'Weight-Losing ($IM > 1$): Bahan baku menyusut drastis saat diolah. Pabrik wajib mendekati LOKASI BAHAN MENTAH (Raw Material Oriented). Contoh: pabrik semen, peleburan tembaga, pabrik gula tebu.',
          'Weight-Gaining ($IM < 1$): Produk jadi bertambah berat/volume atau mudah rusak. Pabrik wajib mendekati LOKASI PASAR (Market Oriented). Contoh: pabrik minuman kemasan, pabrik roti.',
          'Footloose Industry ($IM = 1$): Biaya transport bahan sama dengan barang jadi, lokasi bebas di mana saja. Contoh: perakitan chip semikonduktor.',
        ],
        formula: 'IM = Berat Bahan Mentah / Berat Produk Jadi | IM > 1 Dekat Bahan | IM < 1 Dekat Pasar',
      },
    ],
  },
  {
    id: 'geografi-pembangunan',
    ksrNumber: 11,
    cluster: 'manusia-keruangan',
    title: '11. Geografi Pembangunan & Teori Keruangan',
    subtitle: 'Kutub pertumbuhan Perroux, cumulative causation Myrdal, trickle-down vs polarization effect Hirschman',
    icon: 'Network',
    color: 'border-indigo-600/30 text-indigo-800 bg-indigo-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 16,
    description:
      'Kesenjangan spasial wilayah pusat-pinggiran (Core-Periphery Model John Friedmann), Teori Kutub Pertumbuhan (Growth Pole François Perroux / Growth Center Boudeville), Circular and Cumulative Causation Gunnar Myrdal (Spread vs Backwash effect), dan Trickle Down vs Polarization Effect Albert Hirschman.',
    sections: [
      {
        title: 'Teori Kutub Pertumbuhan & Core-Periphery',
        content:
          'Pembangunan tidak terjadi serentak di semua tempat, melainkan muncul di titik-titik kutub pertumbuhan tertentu dengan intensitas yang berbeda-beda.',
        keyPoints: [
          'François Perroux: Industri pendorong (moteur industry) yang inovatif dan berteknologi tinggi memicu rantai efek pengganda (multiplier effect) ke industri sekitarnya.',
          'Gunnar Myrdal: Interaksi wilayah memicu dua gaya: Backwash Effect (dampak negatif: modal, tenaga kerja terampil, dan SDA dari desa tersedot habis ke kota) dan Spread Effect (dampak positif: perluasan pasar dan investasi dari kota mengalir ke desa). Jika dibiarkan mekanisme pasar bebas, Backwash effect selalu lebih dominan sehingga jurang kesenjangan melebar.',
          'Albert Hirschman: Mengistilahkan hal serupa sebagai Polarization Effect (negatif) dan Trickle-Down Effect (tetesan ke bawah yang positif).',
        ],
        osnTrap:
          'Jangan tertukar! Istilah "Backwash vs Spread Effect" milik Gunnar Myrdal, sedangkan istilah "Polarization vs Trickle Down Effect" milik Albert Hirschman.',
      },
    ],
  },
  {
    id: 'geografi-kota',
    ksrNumber: 12,
    cluster: 'manusia-keruangan',
    title: '12. Geografi Kota dan Kewilayahan',
    subtitle: 'Model morfologi kota Burgess/Hoyt/Harris-Ullman, Teori Tempat Sentral Christaller, & Titik Henti Carrothers',
    icon: 'Building2',
    color: 'border-blue-600/30 text-blue-800 bg-blue-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 22,
    description:
      'Struktur internal kota (Konsentris Burgess, Sektoral Hoyt, Inti Berganda Harris-Ullman), Teori Tempat Sentral Walter Christaller (Asas Pasar K=3, Transportasi K=4, Administrasi K=7), Hukum Gravitasi W.J. Reilly, Titik Henti Carrothers, dan Teori Aturan Ukuran Kota (Rank-Size Rule Zipf vs Primate City).',
    sections: [
      {
        title: 'Tiga Model Morfologi Struktur Kota Klasik',
        content:
          'Model teoretis tata ruang dan zonasi sosial perkotaan.',
        keyPoints: [
          'Model Konsentris (Burgess, 1925): 5 zona melingkar: 1. CBD, 2. Zona Transisi (slum & industri ringan), 3. Buruh Rendah, 4. Kelas Menengah, 5. Penglaju/Komuter.',
          'Model Sektoral (Hoyt, 1939): Perkembangan membentuk irisan baji/sektor yang mengikuti rute arteri transportasi rel kereta dan jalan raya utama.',
          'Model Inti Berganda (Harris & Ullman, 1945): Metropolis modern tumbuh di sekitar beberapa nukleus pusat independen (CBD, pelabuhan, stasiun KA terpadu, bandara, kawasan industri berat).',
        ],
      },
      {
        title: 'Teori Tempat Sentral Walter Christaller (1933)',
        content:
          'Hirarki pemukiman heksagonal yang melayani wilayah sekitarnya berdasarkan ambang batas (threshold) dan jangkauan (range).',
        keyPoints: [
          'K = 3 (Asas Pasar / Marketing Principle): Setiap tempat sentral melayani 1/3 dari wilayah sekelilingnya (Total = 1 + 6*(1/3) = 3). Jarak antar-pusat minimum.',
          'K = 4 (Asas Transportasi / Traffic Principle): Rute transportasi lurus paling efisien melintasi batas-batas heksagon, melayani 1/2 wilayah tetangga (Total = 1 + 6*(1/2) = 4).',
          'K = 7 (Asas Administrasi / Administrative Principle): Satu pusat mengontrol penuh seluruh 6 wilayah heksagon bawahannya tanpa terbagi-bagi batas administratif (Total = 1 + 6 = 7).',
        ],
        mnemonic: 'K=3 Pasar | K=4 Transportasi | K=7 Administrasi (Paling berkuasa / Raja)',
      },
      {
        title: 'Kalkulator Interaksi Gravitasi & Titik Henti Carrothers',
        content:
          'Formula matematis wajib untuk menghitung kekuatan interaksi dan lokasi fasilitas bersama antara 2 kota.',
        keyPoints: [
          'Hukum Gravitasi Reilly: $I_{AB} = k \\cdot \\frac{P_A \\cdot P_B}{(d_{AB})^2}$ (Kekuatan interaksi berbanding lurus dengan perkalian populasi dan berbanding terbalik dengan kuadrat jarak).',
          'Hukum Titik Henti Carrothers: $D_{AB} = \\frac{d_{AB}}{1 + \\sqrt{\\frac{P_{\\text{besar}}}{P_{\\text{kecil}}}}}$.',
        ],
        formula: 'D_AB = d / (1 + √(P_besar / P_kecil)) | Diukur dari kota berpenduduk LEBIH KECIL',
        osnTrap:
          'KSR Trap: Hasil jarak titik henti selalu dihitung dari kota dengan populasi yang LEBIH KECIL! Jika ditanya jarak dari kota yang besar, kurangkan jarak total dengan hasil D_AB.',
      },
    ],
  },
  {
    id: 'pariwisata',
    ksrNumber: 13,
    cluster: 'manusia-keruangan',
    title: '13. Pariwisata dan Manajemen Pariwisata',
    subtitle: 'Siklus hidup destinasi Butler (TALC), Indeks Iritasi Doxey, ekowisata, dan daya dukung pariwisata',
    icon: 'Palmtree',
    color: 'border-teal-600/30 text-teal-800 bg-teal-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 14,
    description:
      'Dinamika industri pariwisata spasial: Model Siklus Hidup Area Wisata (Tourism Area Life Cycle / TALC Richard Butler), Indeks Iritasi Masyarakat Lokal (Doxey Irridex), konsep Ekowisata berbasis konservasi, dan perhitungan Carrying Capacity destinasi.',
    sections: [
      {
        title: 'Model TALC Richard Butler (1980)',
        content:
          'Enam tahapan evolusi destinasi wisata berbentuk kurva S asimetris.',
        keyPoints: [
          '1. Eksplorasi (Exploration): Jumlah turis sedikit, atraksi alam murni, fasilitas pariwisata belum ada sama sekali.',
          '2. Keterlibatan (Involvement): Warga lokal mulai membuka warung/homestay mandiri, interaksi turis-warga sangat tinggi.',
          '3. Pengembangan (Development): Masuknya investor luar/korporasi hotel besar, promosi massal, atraksi buatan dibangun.',
          '4. Konsolidasi (Consolidation): Pertumbuhan turis melambat tapi volume total sangat tinggi. Ekonomi lokal sangat bergantung pada pariwisata.',
          '5. Stagnasi (Stagnation): Kapasitas daya dukung (carrying capacity) terlampaui, kemacetan, polusi, citra destinasi menurun.',
          '6. Pasca-Stagnasi: Dua jalur percabangan: Peremajaan (Rejuvenation, jika melakukan diversifikasi inovatif) ATAU Penurunan (Decline, menjadi kawasan kumuh terbengkalai).',
        ],
      },
      {
        title: 'Indeks Iritasi Doxey (Doxey’s Irridex)',
        content:
          'Mengukur perubahan sikap psikologis masyarakat lokal terhadap kehadiran wisatawan seiring bertambahnya kepadatan turis.',
        keyPoints: [
          '1. Euforia (Euphoria): Warga sangat antusias dan bangga menyambut kedatangan turis baru.',
          '2. Apatis (Apathy): Turis dianggap biasa dan hanya dipandang sebagai sumber pemasukan komersial.',
          '3. Jengkel / Iritasi (Annoyance): Warga mulai merasa terganggu oleh kebisingan, kemacetan, dan pelanggaran norma lokal.',
          '4. Antagonisme (Antagonism): Kebencian terbuka, protes massal, overtourism, dan penolakan terhadap wisatawan.',
        ],
      },
    ],
  },
  {
    id: 'geografi-budaya',
    ksrNumber: 14,
    cluster: 'manusia-keruangan',
    title: '14. Geografi Budaya & Identitas Regional',
    subtitle: 'Difusi spasial budaya, toponimi lanskap kultural, akulturasi, geopolitik, dan pengetahuan umum regional',
    icon: 'Globe',
    color: 'border-fuchsia-600/30 text-fuchsia-800 bg-fuchsia-50/50',
    interactiveVisualizer: 'spatial',
    totalQuestions: 15,
    description:
      'Interaksi manusia dengan lanskap budaya (Cultural Landscape Carl Sauer), jenis difusi spasial (Ekspansi: Kontagius, Hierarkis, Stimulus vs Relokasi migrasi), toponimi penamaan wilayah, proses akulturasi/asimilasi, serta dinamika geopolitik perbatasan dan organisasi regional dunia.',
    sections: [
      {
        title: 'Tipe-Tipe Difusi Spasial Budaya (Torsten Hägerstrand)',
        content:
          'Mekanisme penyebaran ide, inovasi, teknologi, atau unsur budaya menembus ruang dan waktu.',
        keyPoints: [
          'Difusi Relokasi: Penyebaran budaya karena perpindahan fisik manusianya sendiri (migrasi). Contoh: penyebaran agama Kristen ke Benua Amerika oleh imigran Eropa.',
          'Difusi Ekspansi: Ide menyebar luas sementara sumber asal tetap mempertahankannya. Terbagi 3:',
          '- Difusi Menular (Contagious): Menyebar cepat dari orang ke orang terdekat seperti gelombang virus (misal: tren viral TikTok, wabah penyakit).',
          '- Difusi Hierarkis (Hierarchical): Menyebar dari simpul elit / kota metropolitan besar terlebih dahulu baru turun ke kota kecil (misal: tren fashion Paris/Milan ke Jakarta lalu ke daerah).',
          '- Difusi Stimulus: Prinsip dasarnya diadopsi namun bentuk fisiknya dimodifikasi sesuai budaya lokal (misal: menu McDonald’s burger rendang di Indonesia).',
        ],
      },
      {
        title: 'Lanskap Kultural & Toponimi',
        content:
          'Carl Sauer menyatakan bahwa lanskap kultural adalah bentuk muka bumi yang dibentuk dari lanskap alami oleh suatu kelompok budaya.',
        keyPoints: [
          'Toponimi: Ilmu penamaan unsur geografis (nama pulau, gunung, kota) yang merefleksikan sejarah, ekologi, etnis, dan geopolitik suatu bangsa.',
          'Enklaf (Enclave) vs Eksklaf (Exclave): Enklaf adalah wilayah negara yang seluruhnya dikelilingi negara lain (misal: Lesotho di dalam Afrika Selatan, Vatikan di dalam Italia). Eksklaf adalah bagian wilayah negara yang terpisah secara geografis oleh wilayah negara lain (misal: Kaliningrad milik Rusia, Nakhchivan milik Azerbaijan).',
        ],
      },
    ],
  },
  {
    id: 'kartografi-sig',
    ksrNumber: 15,
    cluster: 'fisik-kebumian',
    title: '15. Kartografi dan SIG (Sistem Informasi Geografis)',
    subtitle: 'Model Geoid/Ellipsoid WGS84, proyeksi peta, kontur interval, data spasial vektor/raster, & analisis SIG',
    icon: 'Map',
    color: 'border-indigo-600/30 text-indigo-800 bg-indigo-50/50',
    interactiveVisualizer: 'contour',
    totalQuestions: 25,
    description:
      'Ilmu pemetaan dan analisis geospasial modern: Datum geodesi WGS84, proyeksi peta (Mercator, UTM, Azimuthal), perhitungan matematis Kontur Interval (CI), beda tinggi, kemiringan lereng, struktur data spasial (Vektor titik/garis/poligon vs Raster sel/piksel), serta operasi geoprocessing SIG (Overlay, Buffer, Intersect).',
    sections: [
      {
        title: 'Formula Kontur, Kelerengan, dan Skala Peta',
        content:
          'Soal hitungan mekanis kartografi andalan pendulang poin di KSR Geografi.',
        keyPoints: [
          'Kontur Interval (CI): $CI = \\frac{1}{2.000} \\times \\text{Penyebut Skala}$. Contoh: Skala 1 : 50.000 -> $CI = 50.000 / 2.000 = 25$ meter.',
          'Mencari Skala dari CI: $\\text{Penyebut Skala} = CI \\times 2.000$.',
          'Kemiringan Lereng (Slope %): $\\text{Slope (\\%)} = \\frac{\\Delta h}{d_{\\text{lapangan}}} \\times 100\\%$.',
          'Jarak Lapangan Sebenarnya: $d = d_{\\text{peta (cm)}} \\times \\text{Penyebut Skala} / 100$ meter.',
          'Hukum Rule of V\'s: Garis kontur yang memotong lembah sungai akan membentuk lekukan huruf V dengan ujung lancip menunjuk ke hulu (elevasi lebih tinggi). Sebaliknya, ujung V yang menunjuk ke elevasi lebih rendah adalah punggungan bukit (ridge).',
          'Kerapatan Kontur: Garis kontur yang saling berhimpitan rapat menandakan lereng terjal rawan longsor; garis renggang menandakan dataran landai.',
        ],
        formula: 'CI = (1 / 2000) * Skala | Slope (%) = (Δh / d_lapangan) * 100%',
      },
      {
        title: 'Sistem Informasi Geografis (SIG) & Analisis Spasial',
        content:
          'SIG mengintegrasikan perangkat keras, lunak, dan data untuk menangkap, mengelola, menganalisis, dan menampilkan seluruh bentuk informasi geografis.',
        keyPoints: [
          'Data Vektor: Merepresentasikan fitur bumi berbasis koordinat geometris diskrit: Titik/Point (pohon, sumur, kota), Garis/Line (jalan raya, sungai, kontur), Poligon/Area (danau, batas administrasi provinsi). Keunggulan: resolusi tinggi, batas tegas, file kecil.',
          'Data Raster: Membagi bumi menjadi kisi-kisi sel grid (piksel) teratur di mana setiap piksel menyimpan nilai data (misal: citra satelit Landsat/Sentinel, peta elevasi DEM SRTM). Cocok untuk data kontinu tanpa batas tegas (suhu, elevasi, curah hujan).',
          'Operasi Geoprocessing SIG: Buffer (membuat zona penyangga radius tertentu di sekitar fitur, misal sempadan sungai 100 m), Overlay (penumpangsusun beberapa layer tematik untuk menentukan kesesuaian lahan), Network Analysis (analisis jaringan rute tercepat dan optimasi jalur pipa/jalan).',
          'Proyeksi Peta: Silinder Normal paling ideal untuk memetakan Indonesia (kawasan khatulistiwa ekuatorial) karena distorsi minimal pada lintang rendah.',
        ],
      },
    ],
  },
];
