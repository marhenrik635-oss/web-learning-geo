import { Question } from '../types/geo';

export const OSN_QUESTIONS: Question[] = [
  {
    id: 'q1',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Kabupaten',
    question:
      'Stasiun pencatat gempa bumi di seluruh dunia mencatat bahwa Gelombang S (Secondary Wave) sama sekali tidak terdeteksi pada jarak sudut episentral lebih besar dari 103°. Kesimpulan ilmiah yang tepat dari fenomena seismik ini adalah...',
    options: [
      'Mantel bumi memiliki viskositas yang terlalu padat untuk ditembus gelombang transversal',
      'Inti luar bumi berwujud cair (fluida), karena gelombang geser transversal tidak mampu merambat pada medium fluida',
      'Inti dalam bumi memantulkan seluruh gelombang seismik kembali ke kerak bumi',
      'Terjadi pembalikan polaritas medan magnet bumi yang membelokkan berkas gelombang S',
      'Kecepatan gelombang S melambat drastis sehingga energinya terserap sempurna di astenosfer',
    ],
    correctIndex: 1,
    explanation:
      'Gelombang S adalah gelombang transversal (geser) yang membutuhkan modulus rigiditas (shear modulus) medium untuk merambat. Karena fluida (cair/gas) memiliki nilai rigiditas nol, gelombang S tidak dapat menembus inti luar yang cair, menciptakan zona bayangan (shadow zone) total pada sudut >103°.',
    trapExplanation:
      'Opsi A dan E adalah pengecoh klasik. Gelombang S merambat dengan sangat baik di mantel bumi karena mantel berfase padat. Penurunan kecepatan hanya terjadi pada gelombang P, bukan S (S hilang total).',
  },
  {
    id: 'q2',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Provinsi',
    question:
      'Bidang diskontinuitas yang membatasi mantel bawah yang berfase padat dengan inti luar yang berfase cair pada kedalaman sekitar 2.900 km di bawah permukaan bumi disebut...',
    options: [
      'Diskontinuitas Mohorovicic',
      'Diskontinuitas Conrad',
      'Diskontinuitas Gutenberg',
      'Diskontinuitas Lehmann',
      'Zona Repetti',
    ],
    correctIndex: 2,
    explanation:
      'Diskontinuitas Gutenberg (ditemukan oleh Beno Gutenberg) berada di kedalaman 2.900 km, menandai batas inti-mantel (Core-Mantle Boundary / D" layer). Di batas ini, gelombang S hilang dan kecepatan gelombang P merosot drastis.',
    trapExplanation:
      'Moho membatasi kerak-mantel (~35 km), Lehmann membatasi inti luar-inti dalam (5.150 km), dan Conrad membatasi kerak benua atas (granitis) dengan kerak benua bawah (basaltis).',
  },
  {
    id: 'q3',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Kabupaten',
    question:
      'Pola rekaman paleomagnetisme berupa anomali garis magnetik simetris di kedua sisi Mid-Atlantic Ridge membuktikan kebenaran hipotesis...',
    options: [
      'Pemekaran Lantai Samudera (Seafloor Spreading) oleh Harry Hess',
      'Penyusutan bumi akibat pendinginan termal purba (Contraction Theory)',
      'Pengangkatan isostatik pegunungan tua (Isostasy)',
      'Subduksi lempeng benua ke bawah lempeng samudera',
      'Arus konveksi satu arah yang menolak kerak benua',
    ],
    correctIndex: 0,
    explanation:
      'Saat magma basaltis keluar di celah punggungan tengah samudera dan mendingin melewati titik Curie, mineral feromagnetik merekam orientasi medan magnet bumi saat itu. Pola pembalikan kutub magnetik yang simetris membuktikan bahwa lantai samudra terus memekar ke dua arah menjauhi ridge.',
    trapExplanation:
      'Teori Kontraksi telah usang sejak awal abad ke-20. Dan ingat bahwa lempeng benua TIDAK PERNAH menunjam ke bawah lempeng samudera karena densitas benua jauh lebih ringan.',
  },
  {
    id: 'q4',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Provinsi',
    question:
      'Sesar San Andreas di California dan Sesar Semangko di Sumatra merupakan manifestasi batas lempeng tipe transform. Karakteristik utama dari batas lempeng tipe ini adalah...',
    options: [
      'Terbentuknya palung laut dalam dan busur kepulauan vulkanik aktif',
      'Aktivitas gempa bumi dangkal berkekuatan besar tanpa adanya vulkanisme aktif',
      'Pembentukan kerak bumi baru yang sangat masif dari lelehan mantel',
      'Penghancuran lempeng litosfer melalui pelelehan parsial di zona subduksi',
      'Penebalan kerak benua membentuk pegunungan lipatan setinggi Himalaya',
    ],
    correctIndex: 1,
    explanation:
      'Batas transform (konservatif) adalah tempat dua lempeng saling bergeser secara horizontal sejajar. Pada batas ini, kerak tidak diciptakan (seperti di divergen) dan tidak dihancurkan (seperti di subduksi). Oleh karena itu, TIDAK TERDAPAT aktivitas vulkanisme aktif, melainkan pelepasan tegangan geser berupa gempa dangkal berdaya rusak tinggi.',
    trapExplanation:
      'Hati-hati: jangan pernah memilih opsi "vulkanisme aktif" untuk batas lempeng transform murni seperti San Andreas!',
  },
  {
    id: 'q5',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Kabupaten',
    question:
      'Berdasarkan Seri Reaksi Bowen cabang diskontinu (discontinuous branch), urutan mineral silikat yang mengkristal seiring penurunan suhu magma dari yang paling panas ke paling dingin adalah...',
    options: [
      'Kuarsa → Muskovit → K-Feldspar → Biotit',
      'Anortit → Bytownit → Labradorit → Albit',
      'Olivin → Piroksen → Amfibol (Hornblenda) → Biotit',
      'Piroksen → Olivin → Biotit → Amfibol',
      'Biotit → Amfibol → Piroksen → Olivin',
    ],
    correctIndex: 2,
    explanation:
      'Cabang diskontinu Seri Bowen terdiri dari mineral mafik (Fe-Mg) dengan urutan: Olivin (~1400°C) → Piroksen (~1200°C) → Amfibol (~1050°C) → Biotit (~900°C). Masing-masing memiliki struktur silikat yang semakin kompleks (tetrahedron tunggal → rantai tunggal → rantai ganda → lembaran).',
    trapExplanation:
      'Opsi B adalah cabang kontinu (plagioklas feldspar). Opsi E adalah kebalikan urutan (dari suhu rendah ke tinggi).',
  },
  {
    id: 'q6',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Provinsi',
    question:
      'Dua jenis batuan beku berikut memiliki komposisi kimia dan mineralogis yang sama persis (keduanya asam/felsik dan kaya kuarsa), namun memiliki tekstur yang berbeda karena kecepatan pendinginan lava/magmanya. Pasangan batuan tersebut adalah...',
    options: [
      'Gabro dan Basalt',
      'Diorit dan Andesit',
      'Granit dan Riolit',
      'Peridotit dan Komatiit',
      'Konglomerat dan Breksi',
    ],
    correctIndex: 2,
    explanation:
      'Granit adalah batuan beku plutonik/intrusif felsik dengan pendinginan lambat sehingga bertekstur faneritik (kristal kasar kasat mata). Riolit adalah padanan ekstrusif/vulkanik dari magma yang sama persis, namun mendingin cepat di permukaan sehingga bertekstur afanitik (kristal sangat halus).',
    trapExplanation:
      'Gabro-Basalt adalah pasangan mafik. Diorit-Andesit adalah pasangan intermediet. Peridotit-Komatiit adalah pasangan ultramafik. Konglomerat-Breksi adalah batuan sedimen klastik, bukan beku!',
  },
  {
    id: 'q7',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi',
    difficulty: 'Provinsi',
    question:
      'Berdasarkan Diagram Hjulstrom, terdapat anomali di mana partikel lempung (clay) yang berukuran sangat halus (<0.002 mm) membutuhkan kecepatan arus yang jauh lebih deras untuk mulai tererosi daripada butiran pasir halus (fine sand 0.1–0.2 mm). Penyebab ilmiah fenomena ini adalah...',
    options: [
      'Lempung memiliki densitas jenis mineral yang 10 kali lebih berat dibanding kuarsa',
      'Adanya gaya kohesi elektrostatik antar-lembaran mineral lempung yang sangat rapat',
      'Partikel lempung selalu dilapisi lapisan minyak organik pelindung abrasi',
      'Bentuk butir lempung yang sangat membulat sempurna (well-rounded)',
      'Lempung menyerap air sehingga massanya membengkak secara volumetrik',
    ],
    correctIndex: 1,
    explanation:
      'Mineral lempung adalah filosilikat bermuatan listrik pada permukaannya. Saat saling berdekatan dan terkompaksi di dasar sungai, gaya tarik elektrostatik (kohesi) antar-partikel sangat kuat, sehingga membutuhkan gaya seret (shear stress) dan kecepatan arus yang deras (~100 cm/s) untuk melepaskan butir dari dasar saluran.',
    trapExplanation:
      'Ini adalah jebakan konsep paling sering keluar di OSN Geografi: partikel terkecil bukan berarti paling mudah dicongkel/dierosi oleh arus sungai!',
  },
  {
    id: 'q8',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi',
    difficulty: 'Kabupaten',
    question:
      'Pada sebuah kelokan sungai (meander), bentang alam yang terbentuk di sisi luar tikungan akibat aliran air yang berkecepatan tinggi dan turbulen mengikis tebing sungai disebut...',
    options: [
      'Point Bar (Gosong Pasir)',
      'Cut Bank (Undercut Slope)',
      'Crevasse Splay (Lidah Sedimen)',
      'Natural Levee (Tanggul Alam)',
      'Oxbow Lake (Danau Tapal Kuda)',
    ],
    correctIndex: 1,
    explanation:
      'Di meander, arus helikoidal melempar kecepatan air maksimum ke sisi luar lengkungan sehingga terjadi erosi aktif membentuk tebing terjal yang disebut Cut Bank. Sebaliknya, di sisi dalam terjadi pengendapan membentuk Point Bar.',
    trapExplanation:
      'Jangan tertukar! Cut Bank = erosi di sisi luar; Point Bar = pengendapan di sisi dalam. Oxbow lake baru terbentuk jika leher meander terpotong seluruhnya saat banjir bandang.',
  },
  {
    id: 'q9',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Kabupaten',
    question:
      'Sesuai dengan Konvensi Hukum Laut Internasional (UNCLOS 1982), batas Zona Ekonomi Eksklusif (ZEE) suatu negara pantai diukur sejauh...',
    options: [
      '12 mil laut dari garis pangkal terluar',
      '24 mil laut dari garis pangkal terluar',
      '200 mil laut dari garis pangkal terluar',
      '350 mil laut dari batas paparan benua',
      'Seluas batas terdalam palung laut terdekat',
    ],
    correctIndex: 2,
    explanation:
      'Berdasarkan UNCLOS 1982 Pasal 57, lebar Zona Ekonomi Eksklusif (ZEE) tidak boleh melebihi 200 mil laut (nautical miles) diukur dari garis pangkal darimana lebar laut teritorial diukur.',
    trapExplanation:
      '12 mil = Laut Teritorial; 24 mil = Zona Tambahan; 200 mil = ZEE; hingga 350 mil = Landas Kontinen jika terbukti secara geologis merupakan kelanjutan alami paparan benua.',
  },
  {
    id: 'q10',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Provinsi',
    question:
      'Pasang surut air laut purnama (Spring Tide) yang memiliki rentang pasang-surut (tidal range) paling ekstrem terjadi pada saat...',
    options: [
      'Bulan berada pada fase perbani pertama dan perbani ketiga (sudut 90°)',
      'Posisi Matahari, Bulan, dan Bumi berada dalam satu garis lurus sejajar (Syzygy)',
      'Bumi berada pada titik terjauh dari matahari (Aphelion)',
      'Bulan berada pada posisi sudut 45° terhadap khatulistiwa',
      'Arus laut termohalin sedang mengalir di ekuator',
    ],
    correctIndex: 1,
    explanation:
      'Spring Tide (Pasang Purnama) terjadi ketika gaya gravitasi Matahari dan Bulan saling memperkuat karena keduanya sejajar dengan Bumi (Syzygy). Ini terjadi saat fase Bulan Baru (Konjungsi) dan Bulan Purnama (Oposisi), menghasilkan pasang tertinggi dan surut terendah.',
    trapExplanation:
      'Neap tide (Pasang Perbani) terjadi saat posisi kuadratur (sudut 90°), di mana gravitasi Matahari dan Bulan saling melemahkan sehingga rentang pasut menjadi minimal.',
  },
  {
    id: 'q11',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Nasional',
    question:
      'Suatu paket udara tak jenuh terangkat ke atas lereng pegunungan dengan laju adiabatik kering (DALR = 1°C/100m). Jika suhu awal di kaki gunung berketinggian 200 m dpl adalah 28°C, dan udara mencapai titik jenuh (LCL) pada ketinggian 1.200 m dpl, maka suhu paket udara tepat di ketinggian LCL tersebut adalah...',
    options: ['16°C', '18°C', '20°C', '22°C', '24°C'],
    correctIndex: 1,
    formulaUsed: 'T_akhir = T_awal - (Δh / 100) * DALR',
    explanation:
      'Beda tinggi kenaikan paket udara: Δh = 1.200 m - 200 m = 1.000 meter. Karena udara masih belum jenuh, penurunan suhu mengikuti DALR (1°C per 100 meter). Penurunan suhu total = (1.000 / 100) * 1°C = 10°C. Maka suhu di titik LCL = 28°C - 10°C = 18°C.',
    trapExplanation:
      'Jebakan hitungan: jangan lupa mengurangkan ketinggian awal kaki gunung (200 m)! Jika langsung menghitung 1.200 m, Anda akan mendapatkan penurunan 12°C dan keliru memilih opsi A (16°C).',
  },
  {
    id: 'q12',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Berdasarkan klasifikasi iklim Wladimir Köppen, wilayah yang memiliki tipe iklim dengan simbol "Af" dicirikan oleh...',
    options: [
      'Iklim tundra kutub dengan tumbuhan lumut',
      'Iklim tropis basah (hutan hujan tropis) dengan curah hujan bulan terkering minimal 60 mm',
      'Iklim mediterania dengan musim panas kering terik dan musim dingin basah',
      'Iklim sabana tropis dengan musim kemarau yang sangat panjang dan kering (<60 mm)',
      'Iklim gurun arid dengan evaporasi melebihi presipitasi',
    ],
    correctIndex: 1,
    explanation:
      'Dalam sistem Köppen: A = Tropis (suhu bulan terdingin >18°C). Huruf kedua: f (feucht/basah) = curah hujan bulan paling kering tetap ≥60 mm (hutan hujan tropis sepanjang tahun tanpa musim kemarau tegas). Contoh: sebagian besar Sumatra, Kalimantan, dan Papua.',
    trapExplanation:
      'Am = Tropis monsun (ada kemarau singkat). Aw = Tropis sabana (kemarau tegas dengan presipitasi bulan terkering <60 mm). Cs = Mediterania.',
  },
  {
    id: 'q13',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan SIG',
    difficulty: 'Kabupaten',
    question:
      'Pada sebuah lembar Peta Rupa Bumi Indonesia (RBI) standar Badan Informasi Geospasial (BIG) dengan skala 1 : 50.000, nilai Kontur Interval (CI) peta tersebut adalah...',
    options: ['12,5 meter', '25 meter', '50 meter', '100 meter', '200 meter'],
    correctIndex: 1,
    formulaUsed: 'CI = (1 / 2000) * Penyebut Skala',
    explanation:
      'Rumus standar kontur interval peta topografi Indonesia adalah: CI = (1 / 2.000) * Penyebut Skala. Maka untuk skala 1 : 50.000 -> CI = 50.000 / 2.000 = 25 meter.',
    trapExplanation:
      '12,5 m adalah CI untuk peta skala 1:25.000. 50 m adalah CI untuk skala 1:100.000. Selalu ingat pembagi ajaibnya adalah 2.000!',
  },
  {
    id: 'q14',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan SIG',
    difficulty: 'Provinsi',
    question:
      'Jarak antara Titik X dan Titik Y pada peta bertopografi berjarak 5 cm. Peta tersebut memiliki skala 1 : 25.000. Titik X berada pada kontur berketinggian 250 m dan Titik Y pada kontur berketinggian 375 m. Berapakah persentase kemiringan lereng (slope %) antara Titik X dan Y?',
    options: ['5%', '10%', '12,5%', '15%', '20%'],
    correctIndex: 1,
    formulaUsed: 'Slope (%) = (Δh / d_lapangan) * 100%',
    explanation:
      'Langkah 1: Hitung jarak lapangan sebenarnya (d): d = 5 cm * 25.000 = 125.000 cm = 1.250 meter. Langkah 2: Hitung beda tinggi (Δh): Δh = 375 m - 250 m = 125 meter. Langkah 3: Hitung kemiringan lereng: Slope (%) = (125 m / 1.250 m) * 100% = 10%.',
    trapExplanation:
      'Pastikan mengubah 125.000 cm menjadi 1.250 meter agar satuannya serasi dengan beda tinggi meter. Jangan membagi 125 dengan 125.000 langsung tanpa konversi satuan!',
  },
  {
    id: 'q15',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan SIG',
    difficulty: 'Kabupaten',
    question:
      'Sebuah siaran langsung peluncuran roket luar angkasa dilakukan dari kota London, Inggris (Bujur 0° GMT / UTC+0) pada hari Senin pukul 08.00 pagi. Pada saat yang sama, masyarakat di kota Jayapura, Papua (Bujur 140° BT) dapat menyaksikan siaran tersebut pada pukul...',
    options: [
      'Senin pukul 14.00 WIT',
      'Senin pukul 15.00 WIT',
      'Senin pukul 17.00 WIT',
      'Senin pukul 17.20 Waktu Matahari Sejati',
      'Senin pukul 17.00 WIT (Zona Resmi UTC+9)',
    ],
    correctIndex: 4,
    explanation:
      'Secara zona administratif baku, Jayapura berada di Waktu Indonesia Timur (WIT) dengan acuan meridian 135° BT (UTC+9). Selisih waktu London ke WIT adalah +9 jam. Maka pukul 08.00 + 9 jam = 17.00 WIT hari Senin.',
    trapExplanation:
      'Perhatikan apakah soal menanyakan Waktu Resmi Administratif (Standard Time) atau Waktu Matahari Lokal (Local Solar Time). Secara zona baku Indonesia, seluruh Papua menggunakan UTC+9 (17.00 WIT), bukan waktu lokal bujur astronomis 140° BT.',
  },
  {
    id: 'q16',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Data pencatatan stasiun klimatologi suatu daerah selama 1 tahun menunjukkan distribusi curah hujan bulanan sebagai berikut: 8 bulan dengan curah hujan >100 mm, 2 bulan dengan curah hujan 75 mm, dan 2 bulan dengan curah hujan <60 mm. Berapakah nilai Q dan tipe iklim daerah tersebut menurut Schmidt-Ferguson?',
    options: [
      'Q = 20%, Tipe Iklim B (Basah)',
      'Q = 25%, Tipe Iklim B (Basah)',
      'Q = 40%, Tipe Iklim C (Agak Basah)',
      'Q = 50%, Tipe Iklim C (Agak Basah)',
      'Q = 14,3%, Tipe Iklim A (Sangat Basah)',
    ],
    correctIndex: 1,
    formulaUsed: 'Q = (Jumlah Bulan Kering / Jumlah Bulan Basah) * 100%',
    explanation:
      'Berdasarkan Schmidt-Ferguson: Bulan Basah (BB) = curah hujan >100 mm (ada 8 bulan). Bulan Lembap (BL) = 60–100 mm (ada 2 bulan). Bulan Kering (BK) = <60 mm (ada 2 bulan). Perhitungan Q: Q = (BK / BB) * 100% = (2 / 8) * 100% = 25%. Nilai Q = 0,25 berada di rentang 0,143 s/d 0,333, yang merupakan Tipe B (Basah).',
    trapExplanation:
      'Bulan Lembap (BL 60-100 mm) TIDAK DIHITUNG dalam rumus Q! Jangan memasukkan bulan lembap ke penyebut ataupun pembilang. Rumus Q murni rasio BK / BB.',
  },
  {
    id: 'q17',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Klasifikasi iklim Oldeman sangat menitikberatkan pada kebutuhan air tanaman pangan di Indonesia. Batasan kriteria Bulan Basah (BB) dan Bulan Kering (BK) menurut Oldeman berturut-turut adalah...',
    options: [
      'BB > 100 mm/bulan dan BK < 60 mm/bulan',
      'BB > 150 mm/bulan dan BK < 50 mm/bulan',
      'BB > 200 mm/bulan dan BK < 100 mm/bulan',
      'BB > 250 mm/bulan dan BK < 150 mm/bulan',
      'BB > 300 mm/bulan dan BK < 100 mm/bulan',
    ],
    correctIndex: 2,
    explanation:
      'Oldeman mendasarkan kriterianya pada konsumsi evapotranspirasi tanaman: Padi sawah membutuhkan curah hujan minimal 200 mm/bulan (Bulan Basah / BB >200 mm), sedangkan tanaman palawija membutuhkan minimal 100 mm/bulan sehingga jika curah hujan <100 mm dikategorikan Bulan Kering (BK).',
    trapExplanation:
      'Opsi A (>100 mm dan <60 mm) adalah standar kriteria Schmidt-Ferguson dan Mohr, BUKAN Oldeman! Ini jebakan paling mematikan di olimpiade.',
  },
  {
    id: 'q18',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi',
    difficulty: 'Kabupaten',
    question:
      'Terangkatnya Pulau Buton dan Kepulauan Maluku yang ditandai dengan terbentuknya teras-teras terumbu karang bertingkat di atas permukaan laut sekarang merupakan contoh nyata dari peristiwa...',
    options: [
      'Epirogenesa Positif',
      'Epirogenesa Negatif',
      'Orogenesa Lipatan Rebah',
      'Intrusi Magma Lakolit',
      'Subduksi Lempeng Mikro',
    ],
    correctIndex: 1,
    explanation:
      'Epirogenesa Negatif adalah gerak tektonik pengangkatan daratan secara perlahan dalam wilayah yang luas, sehingga permukaan air laut seolah-olah mengalami penurunan. Buktinya adalah teras terumbu karang purba yang terangkat jauh di atas garis pantai modern.',
    trapExplanation:
      'Jangan terbalik! Epirogenesa POSITIF = daratan turun (air laut seolah naik, seperti tenggelamnya muara sungai membentuk ria coast). Epirogenesa NEGATIF = daratan naik (air laut seolah turun).',
  },
  {
    id: 'q19',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi',
    difficulty: 'Provinsi',
    question:
      'Pada sesar naik (thrust fault atau reverse fault), pergerakan relatif blok batuan gantung (hanging wall) terhadap blok telapak (footwall) adalah...',
    options: [
      'Hanging wall bergerak turun relatif terhadap footwall akibat gaya tarikan (tensional stress)',
      'Hanging wall bergerak naik relatif terhadap footwall akibat gaya kompresi (compressional stress)',
      'Kedua blok hanya bergerak horizontal mendatar tanpa perpindahan vertikal',
      'Footwall hancur melebur ke dalam astenosfer',
      'Hanging wall berotasi memutar membentuk graben',
    ],
    correctIndex: 1,
    explanation:
      'Sesar naik (Reverse/Thrust Fault) terbentuk akibat rezim tegasan kompresi (tekanan memendek). Gaya kompresi ini memaksa Hanging Wall terdorong NAIK ke atas bidang sesar relatif terhadap Footwall.',
    trapExplanation:
      'Jika hanging wall turun relatif terhadap footwall, sesar tersebut dinamakan Sesar Normal (Normal/Gravity Fault) yang dihasilkan oleh gaya tegangan tarikan (tensional stress).',
  },
  {
    id: 'q20',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Nasional',
    question:
      'Peristiwa kepunahan massal terbesar dalam sejarah bumi (The Great Dying) yang memusnahkan lebih dari 90% spesies laut termasuk kelompok Trilobit terjadi pada batas transisi zaman geologi...',
    options: [
      'Ordovisium – Silur',
      'Devon – Karbon',
      'Perm – Trias (Batas Paleozoikum ke Mesozoikum)',
      'Kapur – Tersier / K-Pg (Batas Mesozoikum ke Kenozoikum)',
      'Trias – Jura',
    ],
    correctIndex: 2,
    explanation:
      'Kepunahan Permian-Trias (~252 juta tahun lalu) adalah bencana kepunahan massal paling dahsyat sepanjang masa geologi. Dipicu oleh erupsi masif banjir basal Siberia (Siberian Traps) yang memicu anoksia lautan dan pemanasan global ekstrem, memusnahkan Trilobit dan mayoritas fauna laut purba.',
    trapExplanation:
      'Kepunahan Kapur-Tersier (K-Pg, 66 juta tahun lalu) adalah kepunahan dinosaurus akibat tumbukan asteroid Chicxulub di Semenanjung Yucatan, bukan kepunahan Trilobit!',
  },
  {
    id: 'q21',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Provinsi',
    question:
      'Ketika gelombang air laut menjalar mendekati pantai yang sangat landai, puncak gelombang menjadi tidak stabil dan runtuh perlahan menghasilkan buih putih yang meluncur bertahap menuruni lereng gelombang. Tipe gelombang pecah ini disebut...',
    options: [
      'Spilling Breaker',
      'Plunging Breaker',
      'Collapsing Breaker',
      'Surging Breaker',
      'Internal Soliton',
    ],
    correctIndex: 0,
    explanation:
      'Spilling Breaker terjadi pada lereng pantai yang landai (gentle slope). Puncak gelombang meluap dan berbuih pelan menuruni muka gelombang. Plunging terjadi pada pantai agak curam (ombak menggulung seperti pipa untuk selancar). Surging terjadi pada pantai sangat terjal (ombak tidak sempat pecah dan langsung menyapu lereng pantai).',
    trapExplanation:
      'Peselancar mencari Plunging Breaker (pipa/barrel). Namun pada lereng pantai landai, gelombangnya adalah Spilling Breaker.',
  },
  {
    id: 'q22',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Nasional',
    question:
      'Teori penurunan pulau vulkanik (Subsidence Theory) oleh Charles Darwin menjelaskan evolusi morfologi terumbu karang laut tropis dalam tiga tahapan berurutan, yaitu...',
    options: [
      'Atol → Terumbu Penghalang (Barrier Reef) → Terumbu Tepi (Fringing Reef)',
      'Terumbu Tepi (Fringing Reef) → Terumbu Penghalang (Barrier Reef) → Atol (Cincin Karang)',
      'Patch Reef → Atol → Barrier Reef',
      'Terumbu Karang Tepi → Guyot → Seamount',
      'Laguna → Fringing Reef → Tombolo Karang',
    ],
    correctIndex: 1,
    explanation:
      'Tahapan evolusi Darwin: 1. Fringing Reef (karang menempel langsung di tepi pulau vulkanik muda). 2. Barrier Reef (pulau mulai tenggelam perlahan akibat pendinginan litosfer, karang terus tumbuh ke atas sehingga terbentuk laguna pemisah). 3. Atol (pulau vulkanik tenggelam total di bawah laut, menyisakan cincin karang melingkari laguna di tengah).',
    trapExplanation:
      'Urutan Darwin selalu dari Fringing → Barrier → Atol, bukan kebalikannya.',
  },
  {
    id: 'q23',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan SIG',
    difficulty: 'Provinsi',
    question:
      'Dalam kegiatan navigasi darat dan orientasi medan menggunakan kompas bidik dan peta topografi, teknik untuk menentukan posisi pengamat di peta dengan membidik dua atau lebih tanda medan (titik acuan) yang sudah diketahui di peta dinamakan teknik...',
    options: ['Interseksi (Intersection)', 'Reseksi (Resection)', 'Triangulasi Ruang', 'Dead Reckoning', 'Trilaterasi'],
    correctIndex: 1,
    explanation:
      'Reseksi (Resection) adalah metode menentukan posisi berdiri pengamat di peta dengan cara membidik minimal 2 titik ekstrem di lapangan yang dikenali di peta, lalu menarik garis azimuth balik (back-azimuth) hingga kedua garis berpotongan di posisi pengamat.',
    trapExplanation:
      'Interseksi (Intersection) adalah kebalikannya: menentukan posisi objek atau target yang tidak diketahui dari dua stasiun pengamat yang sudah diketahui posisinya.',
  },
  {
    id: 'q24',
    moduleId: 'geologi',
    ksrCategory: 'Geologi',
    difficulty: 'Kabupaten',
    question:
      'Rantai Kepulauan Hawaii tersusun atas deretan gunung api dengan umur batuan yang semakin tua ke arah barat laut. Fenomena ini terbentuk bukan karena batas lempeng, melainkan akibat...',
    options: [
      'Pemekaran lempeng samudera pasifik secara lokal',
      'Titik Panas (Hotspot / Mantle Plume) stasioner di bawah lempeng samudra Pasifik yang bergerak ke barat laut',
      'Subduksi lempeng mikro di bawah paparan benua Asia',
      'Tumbukan lempeng samudera tua dengan busur kepulauan purba',
      'Sesar transform raksasa yang meremukkan litosfer samudera',
    ],
    correctIndex: 1,
    explanation:
      'Kepulauan Hawaii terbentuk oleh Hotspot (mantle plume) magma yang posisinya relatif tetap (stasioner) di kedalaman mantel bumi, sementara Lempeng Pasifik di atasnya terus bergerak meluncur ke arah barat laut. Akibatnya, terbentuk jejak rantai pulau vulkanik linear di mana pulau termuda (Hawaii Big Island) berada di tenggara di atas hotspot aktif, dan pulau tertua (Kauai, Midway) berada di barat laut.',
    trapExplanation:
      'Hawaii adalah contoh klasik Intraplate Volcanism (vulkanisme di tengah lempeng), BUKAN karena batas pertemuan lempeng subduksi atau divergen!',
  },
  {
    id: 'q25',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi',
    difficulty: 'Nasional',
    question:
      'Bentang alam glasial berupa bukit batuan terisolasi yang memiliki lereng sisi hulu (stoss side) landai dan halus akibat abrasi kikisan gletser, serta lereng sisi hilir (lee side) yang terjal dan kasar akibat proses pencabutan batuan (plucking) dinamakan...',
    options: ['Drumlin', 'Roche Moutonnée', 'Kame Terrace', 'Esker', 'Crag and Tail'],
    correctIndex: 1,
    explanation:
      'Roche Moutonnée dicirikan oleh asimetri lereng batuan: sisi yang menghadap datangnya es (stoss side) landai dan dipoles halus oleh abrasi gletser berpasir, sedangkan sisi belakang (lee side) terjal dan bergerigi tak beraturan akibat proses plucking (es membeku merekatkan fragmen lalu mencabutnya).',
    trapExplanation:
      'Drumlin memiliki bentuk terbalik (sisi hulu lebih curam dan sisi hilir melandai seperti punggung ikan paus) dan tersusun dari endapan till tak terkonsolidasi, sedangkan Roche Moutonnée adalah batuan dasar (bedrock) masif.',
  },
  {
    id: 'q26',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Provinsi',
    question:
      'Dalam analisis risiko bencana menurut UNISDR, rumus risiko dirumuskan sebagai R = (H × V) / C. Langkah mitigasi struktural yang paling tepat untuk memperkecil nilai risiko bencana gempa bumi adalah...',
    options: [
      'Memperkecil nilai bahaya (H) dengan cara menghentikan pergerakan lempeng sesar aktif',
      'Menurunkan kerentanan (V) fisik dengan menerapkan standar konstruksi bangunan tahan gempa (retrofitting)',
      'Memperkecil kapasitas (C) aparat mitigasi bencana daerah',
      'Menghapus zona penyangga hijau di sepanjang pantai',
      'Meningkatkan kerentanan sosial masyarakat pesisir',
    ],
    correctIndex: 1,
    explanation:
      'Nilai Bahaya (H) merupakan fenomena alamiah yang tidak dapat dihentikan manusia. Oleh karena itu, penurunan risiko bencana (R) harus dilakukan dengan menurunkan kerentanan (V), seperti membangun struktur fisik tahan gempa dan zonasi KRB, serta menaikkan kapasitas (C).',
    trapExplanation:
      'H (Hazard) bersifat non-intervensi (manusia tidak bisa mencegah gempa bumi atau letusan gunung api). Jadi opsi A mustahil secara ilmiah.',
  },
  {
    id: 'q27',
    moduleId: 'sumberdaya',
    ksrCategory: 'Sumberdaya dan Manajemen Sumberdaya',
    difficulty: 'Kabupaten',
    question:
      'Berdasarkan Undang-Undang Pokok Pertambangan di Indonesia (UU No. 11 Tahun 1967), bahan galian dikelompokkan menjadi Golongan A, B, dan C. Contoh bahan galian Golongan A (Strategis) adalah...',
    options: [
      'Emas, Perak, dan Tembaga',
      'Minyak Bumi, Gas Alam, dan Batubara',
      'Batu Kapur, Pasir Kuarsa, dan Marmer',
      'Bauksit, Nikel, dan Timah',
      'Kaolin, Andesit, dan Granit',
    ],
    correctIndex: 1,
    explanation:
      'Bahan Galian Golongan A (Strategis) adalah bahan galian penting untuk pertahanan, keamanan, dan kedaulatan ekonomi negara, yaitu migas, batubara, dan bahan radioaktif (uranium). Golongan B (Vital) menjamin hajat hidup orang banyak (emas, perak, tembaga, nikel, bauksit). Golongan C adalah bahan galian industri bukan logam (pasir, kapur, marmer).',
    trapExplanation:
      'Emas dan nikel sering disangka Golongan A karena mahal, padahal secara undang-undang keduanya adalah Golongan B (Vital)!',
  },
  {
    id: 'q28',
    moduleId: 'lingkungan-sdgs',
    ksrCategory: 'Geografi Lingkungan dan Pembangunan Berkelanjutan',
    difficulty: 'Provinsi',
    question:
      'Tiga pilar utama pembangunan berkelanjutan (Triple Bottom Line) yang dirumuskan oleh John Elkington dan menjadi fondasi 17 Tujuan SDGs 2030 adalah...',
    options: [
      'Ekonomi, Militer, dan Teknologi',
      'Sosial (People), Lingkungan (Planet), dan Ekonomi (Profit)',
      'Pertanian, Industri, dan Jasa',
      'Politik, Hukum, dan Budaya',
      'Infrastruktur, Fiskal, dan Moneter',
    ],
    correctIndex: 1,
    explanation:
      'Triple Bottom Line (3P): People (keadilan sosial, hak asasi, pengentasan kemiskinan), Planet (integritas ekosistem, kelestarian biosfer), dan Profit (kesejahteraan ekonomi yang berkelanjutan tanpa eksploitasi merusak).',
    trapExplanation:
      'Jangan terkecoh oleh opsi pembangunan fisik konvensional seperti infrastruktur atau militer!',
  },
  {
    id: 'q29',
    moduleId: 'geografi-pertanian',
    ksrCategory: 'Geografi Pertanian dan Permasalahan Pangan',
    difficulty: 'Kabupaten',
    question:
      'Dalam Model Penggunaan Lahan Pertanian Johann Heinrich von Thünen, zona cincin pertama (Ring 1) yang terletak tepat mengelilingi pasar pusat kota dimanfaatkan untuk...',
    options: [
      'Peternakan sapi potong ekstensif (ranching)',
      'Perkebunan gandum dan serealia skala luas',
      'Hortikultura sayur-mayur dan peternakan sapi perah (susu segar)',
      'Hutan tanaman industri kayu bakar',
      'Lahan tidur / belantara alami',
    ],
    correctIndex: 2,
    explanation:
      'Susu segar dan sayuran hijau memiliki sifat mudah busuk (perishable) dan memiliki nilai sewa lahan (land rent) tertinggi per hektar. Oleh karena itu, petani produk ini sanggup membayar sewa lahan mahal dekat kota demi meminimalkan waktu dan ongkos angkut.',
    trapExplanation:
      'Peternakan sapi perah (susu) ada di Ring 1, sedangkan peternakan sapi potong/daging berada di Ring 4 terluar karena sapi potong bisa digiring berjalan kaki!',
  },
  {
    id: 'q30',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Penduduk',
    difficulty: 'Provinsi',
    question:
      'Suatu kabupaten memiliki komposisi penduduk: usia 0–14 tahun sebanyak 60.000 jiwa, usia 15–64 tahun sebanyak 200.000 jiwa, dan usia ≥65 tahun sebanyak 20.000 jiwa. Nilai Rasio Ketergantungan (Dependency Ratio) kabupaten tersebut adalah...',
    options: ['30', '40', '50', '60', '80'],
    correctIndex: 1,
    formulaUsed: 'DR = ((Pop 0-14 + Pop >=65) / Pop 15-64) * 100',
    explanation:
      'Jumlah penduduk non-produktif = 60.000 + 20.000 = 80.000 jiwa. Jumlah penduduk produktif = 200.000 jiwa. DR = (80.000 / 200.000) * 100 = 40. Artinya, setiap 100 orang usia produktif menanggung 40 orang usia non-produktif.',
    trapExplanation:
      'Jangan membagi 80.000 dengan total seluruh populasi (280.000)! Penyebutnya HANYA usia produktif (15–64 tahun).',
  },
  {
    id: 'q31',
    moduleId: 'geografi-ekonomi',
    ksrCategory: 'Geografi Ekonomi dan Globalisasi',
    difficulty: 'Provinsi',
    question:
      'Sebuah pabrik peleburan aluminium membutuhkan 4 ton bauksit untuk memproduksi 1 ton aluminium murni siap jual. Berdasarkan Teori Lokasi Alfred Weber, lokasi pabrik yang paling efisien adalah...',
    options: [
      'Tepat di tengah pasar konsumen perkotaan',
      'Mendekati lokasi tambang sumber bahan baku bauksit (Raw Material Oriented)',
      'Bebas di mana saja di pelabuhan mana pun (Footloose)',
      'Di perbatasan negara tetangga',
      'Mendekati pusat permukiman buruh murah terpadat',
    ],
    correctIndex: 1,
    explanation:
      'Indeks Material: IM = Berat Bahan Mentah / Berat Produk Jadi = 4 ton / 1 ton = 4. Karena IM > 1 (Weight-Losing), bahan mentah mengalami penyusutan bobot 75% saat diolah. Mengangkut 4 ton bauksit ke pasar akan sangat boros ongkos transport dibanding mengangkut 1 ton aluminium jadi.',
    trapExplanation:
      'Jika IM > 1 selalu mendekati bahan baku. Jika IM < 1 mendekati pasar.',
  },
  {
    id: 'q32',
    moduleId: 'geografi-pembangunan',
    ksrCategory: 'Geografi Pembangunan dan Teori Keruangan',
    difficulty: 'Provinsi',
    question:
      'Gunnar Myrdal menyatakan bahwa interaksi spasial antara pusat pertumbuhan dan wilayah pinggirannya menghasilkan dua kekuatan berlawanan. Fenomena tersedotnya tenaga kerja terampil, modal investasi, dan bahan baku dari pedesaan ke kota metropolitan dinamakan...',
    options: [
      'Spread Effect',
      'Backwash Effect',
      'Trickle-Down Effect',
      'Multiplier Effect',
      'Agglomeration Shadow',
    ],
    correctIndex: 1,
    explanation:
      'Backwash Effect adalah dampak polarisasi negatif di mana daerah tertinggal (desa) kehilangan tenaga potensial dan modal karena tertarik ke pusat pertumbuhan yang lebih menguntungkan. Sebaliknya, Spread Effect adalah rembesan positif berupa pasar hasil tani dan inovasi ke desa.',
    trapExplanation:
      'Spread Effect dan Trickle-Down Effect adalah dampak menguntungkan yang positif, bukan tersedotnya sumberdaya!',
  },
  {
    id: 'q33',
    moduleId: 'geografi-kota',
    ksrCategory: 'Geografi Kota dan Kewilayahan',
    difficulty: 'Kabupaten',
    question:
      'Kota P memiliki penduduk 10.000 jiwa dan Kota Q memiliki penduduk 40.000 jiwa. Jarak kedua kota adalah 30 km. Di manakah lokasi ideal untuk membangun sebuah Rumah Sakit Umum berdasarkan Hukum Titik Henti Carrothers?',
    options: [
      '10 km dari Kota P',
      '10 km dari Kota Q',
      '15 km tepat di tengah kedua kota',
      '20 km dari Kota P',
      '5 km dari Kota Q',
    ],
    correctIndex: 0,
    formulaUsed: 'D_AB = d / (1 + √(P_besar / P_kecil))',
    explanation:
      'P_besar = 40.000 (Kota Q), P_kecil = 10.000 (Kota P). Rasio populasi = 40.000 / 10.000 = 4. Akar dari 4 = 2. D_PQ = 30 / (1 + 2) = 30 / 3 = 10 km. Titik henti SELALU diukur dari kota berpenduduk lebih kecil, yaitu 10 km dari Kota P.',
    trapExplanation:
      'Jangan memilih opsi B! Hasil 10 km adalah jarak dari Kota P (kota kecil), bukan dari Kota Q!',
  },
  {
    id: 'q34',
    moduleId: 'pariwisata',
    ksrCategory: 'Pariwisata dan Manajemen Pariwisata',
    difficulty: 'Provinsi',
    question:
      'Dalam Model Siklus Hidup Area Wisata (TALC) Richard Butler, tahap di mana kapasitas daya dukung lingkungan (carrying capacity) destinasi telah terlampaui, fasilitas mulai rusak, kemacetan parah, dan citra destinasi merosot adalah tahap...',
    options: ['Involvement', 'Development', 'Consolidation', 'Stagnation (Stagnasi)', 'Rejuvenation'],
    correctIndex: 3,
    explanation:
      'Pada tahap Stagnasi (Stagnation), jumlah puncak wisatawan telah tercapai dan melampaui daya dukung ekologis maupun sosial. Destinasi kehilangan keasliannya dan mengandalkan pengunjung bisnis/repetitif sebelum masuk fase Decline atau Rejuvenation.',
    trapExplanation:
      'Consolidation adalah tahap tepat sebelum stagnasi di mana pertumbuhan mulai melambat namun ekonomi masih sangat bergairah.',
  },
  {
    id: 'q35',
    moduleId: 'geografi-budaya',
    ksrCategory: 'Geografi Budaya dan Identitas Regional/Pengetahuan Umum',
    difficulty: 'Provinsi',
    question:
      'Penyebaran tren musik K-Pop atau gaya busana dari kota metropolitan global (Seoul, Paris, New York) ke kota-kota besar nasional (Jakarta), lalu bertahap menyebar ke kota-kota kecil di daerah merupakan contoh dari tipe...',
    options: [
      'Difusi Menular (Contagious Diffusion)',
      'Difusi Relokasi (Relocation Diffusion)',
      'Difusi Hierarkis (Hierarchical Diffusion)',
      'Difusi Stimulus (Stimulus Diffusion)',
      'Difusi Spasial Terbalik',
    ],
    correctIndex: 2,
    explanation:
      'Difusi Hierarkis menyebar melalui jenjang simpul kekuasaan, ukuran kota, atau strata sosial: dari tokoh panutan / kota metropolitan tingkat atas turun ke kota-kota lapis bawah secara bertingkat.',
    trapExplanation:
      'Difusi Menular menyebar rata ke segala arah orang ke orang seperti virus tanpa memedulikan hierarki kota.',
  },
  // --- SOAL TAMBAHAN KSR GEOGRAFI & OSN ---
  {
    id: 'q36',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Mengapa musim hujan di Jakarta cenderung datang lebih awal daripada di Yogyakarta meskipun secara garis lintang keduanya sama-sama berada di Pulau Jawa?',
    options: [
      'Tingginya emisi kendaraan dan aktivitas industri di Jakarta menghasilkan konsentrasi aerosol yang jauh lebih pekat sebagai inti kondensasi awan (CCN)',
      'Terjadi anomali iklim lokal akibat perubahan iklim global di pesisir utara',
      'Jumlah badan air di Yogyakarta lebih sedikit dibanding wilayah pesisir Jakarta',
      'Yogyakarta berada lebih dekat dengan benua Australia sedangkan Jakarta lebih dekat ke benua Asia',
      'Terjadi hujan orografis murni di Jakarta saat uap air dipaksa menabrak pegunungan Bogor',
    ],
    correctIndex: 0,
    explanation:
      'Aerosol antropogenik dari polusi kendaraan dan aktivitas industri di metropolitan Jakarta bertindak sebagai inti kondensasi awan (Cloud Condensation Nuclei / CCN). Kerapatan CCN yang melimpah mempercepat proses nukleasi uap air menjadi tetes awan, memicu pertumbuhan awan konvektif tebal dan hujan lebih dini dibandingkan wilayah dengan aerosol lebih rendah.',
    trapExplanation:
      'Opsi kedekatan dengan Australia/Asia sering dipilih peserta, padahal jarak keduanya di Pulau Jawa tidak cukup signifikan untuk membedakan awitan monsun secara makro dibanding faktor aerosol mikro.',
  },
  {
    id: 'q37',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Kemiringan sumbu rotasi bumi sebesar 23,5° menyebabkan Belahan Bumi Selatan (BBS) menerima radiasi matahari lebih intensif pada periode perihelion dibanding Belahan Bumi Utara (BBU) saat aphelion. Namun demikian, fluktuasi perbedaan suhu musiman tertinggi dan terendah di BBS justru tidak seekstrem di BBU. Hal ini disebabkan oleh...',
    options: [
      'Proporsi luas lautan di BBS jauh lebih dominan (>80%), di mana kapasitas panas spesifik air laut yang tinggi mampu memoderasi fluktuasi termal',
      'Pelelehan es di Kutub Selatan menyerap seluruh surplus energi matahari secara laten',
      'Gurun pasir Australia Barat memiliki albedo tinggi yang memantulkan kembali seluruh radiasi surya',
      'Pusat tekanan rendah di BBS memicu sirkulasi angin barat (roaring forties) yang mendinginkan atmosfer bawah',
      'Lapisan ozon di BBS jauh lebih tebal sehingga meredam radiasi inframerah termal',
    ],
    correctIndex: 0,
    explanation:
      'BBS didominasi oleh perairan samudra (>80% luas permukaan) sementara BBU memiliki massa daratan yang jauh lebih masif. Air memiliki kapasitas panas spesifik (~4.184 J/kg°C) sekitar 4-5 kali lipat batuan/daratan, sehingga lautan di BBS bertindak sebagai penyangga termal raksasa yang menyerap panas saat musim panas dan melepasnya perlahan saat musim dingin, mencegah suhu ekstrem.',
    trapExplanation:
      'Jangan terkecoh dengan opsi es Antartika atau roaring forties. Efek maritim dominan dari proporsi samudra adalah pengendali termal utama di BBS.',
  },
  {
    id: 'q38',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Kabupaten',
    question:
      'Di bandara beriklim dingin (seperti London Heathrow), pesawat komersial wajib disemprot cairan de-icing sebelum lepas landas di tengah badai salju. Bahaya utama penumpukan lapisan es (icing) pada badan dan sayap pesawat terjadi karena interaksi sayap dengan...',
    options: [
      'Butir air lewat dingin (Supercooled Water Droplets) di awan yang membeku seketika saat bertubrukan dengan badan pesawat',
      'Kepingan salju kering (dry snowflakes) yang meleleh lalu membeku kembali',
      'Butiran graupel padat yang menempel akibat gaya elektrostatik pesawat',
      'Kristal es cirrus yang tertiup angin kencang di permukaan landasan pacu',
      'Uap air hasil kondensasi gas buang mesin pesawat itu sendiri',
    ],
    correctIndex: 0,
    explanation:
      'Supercooled water droplets adalah tetesan air yang tetap berwujud cair pada suhu di bawah titik beku (antara 0°C hingga -40°C) akibat ketiadaan partikel pembeku. Ketika sayap pesawat menabrak tetesan ini, benturan fisik memicu kristalisasi spontan seketika, membentuk lapisan es keras (clear/rime ice) yang mengubah profil aerodinamika sayap dan menyumbat sensor pesawat.',
    trapExplanation:
      'Banyak yang mengira butiran salju kering biasa yang menempel; faktanya salju kering justru mudah tersapu angin pesawat, sedangkan tetes superdinginlah yang membeku padat melekat.',
  },
  {
    id: 'q39',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Lapisan ionosfer dibagi menjadi lapisan D, E, dan F berdasarkan kerapatan ionisasinya. Fenomena lapisan D yang menghilang pada malam hari mengakibatkan...',
    options: [
      'Gelombang radio AM di malam hari mampu merambat lebih jauh karena tidak lagi diserap oleh lapisan D dan dipantulkan oleh lapisan E/F yang lebih tinggi',
      'Sinyal radio FM dan satelit GPS mengalami pelemahan total (blackout)',
      'Terbentuknya fenomena aurora borealis yang meluas hingga ke daerah tropis',
      'Peningkatan intensitas radiasi sinar kosmik yang mencapai permukaan bumi',
      'Penurunan drastis temperatur di lapisan mesosfer hingga titik beku mutlak',
    ],
    correctIndex: 0,
    explanation:
      'Lapisan D (ketinggian 60-90 km) membutuhkan radiasi matahari langsung (sinar-X dan UV ekstrem) untuk mempertahankan ionisasinya. Di siang hari, lapisan D menyerap gelombang radio frekuensi menengah (AM). Di malam hari ketika matahari tiada, rekombinasi elektron terjadi cepat sehingga lapisan D lenyap. Hal ini memungkinkan gelombang radio AM malam hari menembus lebih tinggi ke lapisan E dan F untuk dipantulkan kembali ke bumi pada jarak ratusan kilometer lebih jauh.',
    trapExplanation:
      'Ingat: gelombang FM dan TV menggunakan frekuensi sangat tinggi (VHF/UHF) yang menembus ionosfer ke luar angkasa, bukan dipantulkan ionosfer!',
  },
  {
    id: 'q40',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Kabupaten',
    question:
      'Tornado dan badai tropis merupakan bencana meteorologis yang dahsyat. Skala yang digunakan untuk mengklasifikasikan intensitas tornado berdasarkan tingkat kerusakan bangunan adalah...',
    options: [
      'Enhanced Fujita Scale (Skala EF)',
      'Skala Saffir-Simpson',
      'Skala Beaufort',
      'Skala Mercalli Modifikasi (MMI)',
      'Volcanic Explosivity Index (VEI)',
    ],
    correctIndex: 0,
    explanation:
      'Enhanced Fujita Scale (EF0 sampai EF5) adalah skala resmi untuk mengukur intensitas tornado berdasarkan 28 indikator kerusakan struktural dan vegetasi. Skala Saffir-Simpson (Kategori 1-5) untuk hurricane/siklon tropis; Skala Beaufort (0-12) untuk angin permukaan; Skala Mercalli untuk intensitas gempa; VEI untuk letusan gunung api.',
    trapExplanation:
      'Jangan tertukar antara Fujita (tornado lokal berputar sempit) dengan Saffir-Simpson (badai tropis samudra berputar masif ratusan km).',
  },
  {
    id: 'q41',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Nasional',
    question:
      'Seorang pengamat di Gurun Kalahari (wilayah suku Bushman, koordinat ~23,5° LS) mendapati sebuah tiang pancang tegak tidak menghasilkan bayangan sama sekali tepat saat tengah hari. Pada periode yang sama, fenomena cuaca yang sedang berlangsung di sebagian besar Indonesia adalah...',
    options: [
      'Puncak musim hujan akibat angin Monsun Barat yang berhembus melintasi khatulistiwa',
      'Puncak musim kemarau akibat dominasi angin kering Monsun Timur dari Australia',
      'Masa peralihan pancaroba dengan suhu udara terpanas sepanjang tahun di Jawa',
      'Musim gugur tropis dengan penurunan tutupan awan konvektif',
      'Terjadinya fenomena La Nina ekstrem di Samudra Hindia',
    ],
    correctIndex: 0,
    explanation:
      'Tiang tanpa bayangan di lintang 23,5° LS (Tropic of Capricorn) menandakan matahari mengalami kulminasi atas tepat di titik balik selatan (Solstice 21/22 Desember). Pada bulan Desember, belahan bumi selatan mengalami insolasi maksimal dan bertekanan rendah, sehingga menarik massa udara lembap dari Asia melintasi Indonesia menuju selatan sebagai Monsun Barat (puncak musim hujan di Indonesia).',
    trapExplanation:
      'Analisis posisi astronomis matahari terlebih dahulu: 23,5° LS = Desember = Musim hujan di Indonesia!',
  },
  {
    id: 'q42',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Kabupaten',
    question:
      'Berdasarkan Undang-Undang Republik Indonesia Nomor 24 Tahun 2007 tentang Penanggulangan Bencana, peristiwa pandemi global seperti Covid-19 atau wabah epidemi dikategorikan sebagai...',
    options: [
      'Bencana Non-alam',
      'Bencana Alam',
      'Bencana Sosial',
      'Bencana Biologis Khusus',
      'Bencana Ekologis',
    ],
    correctIndex: 0,
    explanation:
      'UU No. 24 Tahun 2007 Pasal 1 butir 3 mendefinisikan Bencana Non-alam sebagai bencana yang diakibatkan oleh peristiwa non-alam antara lain gagal teknologi, gagal modernisasi, epidemi, dan wabah penyakit.',
    trapExplanation:
      'Secara hukum di Indonesia tidak ada kategori resmi "Bencana Biologis" dalam UU 24/2007, melainkan dilebur ke dalam kategori "Bencana Non-alam".',
  },
  {
    id: 'q43',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Provinsi',
    question:
      'Siklus Wilson memetakan evolusi cekungan samudra dari awal pembentukan hingga penutupan total. Contoh kenampakan geologis bumi yang saat ini merepresentasikan Tahap Juvenil (Juvenile Stage) dan Tahap Terminal (Terminal Stage) berturut-turut adalah...',
    options: [
      'Laut Merah (Juvenil) dan Laut Mediterania (Terminal)',
      'East African Rift (Juvenil) dan Samudra Pasifik (Terminal)',
      'Samudra Atlantik (Juvenil) dan Pegunungan Himalaya (Terminal)',
      'Laut Jepang (Juvenil) dan Teluk Benggala (Terminal)',
      'Danau Baikal (Juvenil) dan Samudra Hindia (Terminal)',
    ],
    correctIndex: 0,
    explanation:
      'Dalam Siklus Wilson: 1. Embrionik (East African Rift), 2. Juvenil (pemekaran lantai samudra muda berkerak basaltis: Laut Merah), 3. Mature (samudra luas dengan paparan pasif: Samudra Atlantik), 4. Declining (samudra menyusut akibat subduksi aktif: Samudra Pasifik), 5. Terminal (samudra menyempit terjepit lempeng benua: Laut Mediterania), 6. Suturing/Relict (kolisi benua membentuk pegunungan: Himalaya).',
    trapExplanation:
      'East African Rift masih tahap Embrionik (kerak benua baru retak, belum terisi laut sejati), sedangkan Atlantik sudah Mature.',
  },
  {
    id: 'q44',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Provinsi',
    question:
      'Dalam proses sedimentologi, karakteristik sortasi (pemilahan ukuran butir) yang paling buruk (unsorted / poorly sorted) terjadi pada sedimen yang diendapkan oleh agen transportasi...',
    options: [
      'Es gletser (material moraine atau tillite)',
      'Aliran air sungai teranyam (braided river)',
      'Angin gurun pasir (aeolian process)',
      'Gelombang ombak pantai yang memecah',
      'Arus pasang surut di muara estuari',
    ],
    correctIndex: 0,
    explanation:
      'Gletser mengangkut dan mengendapkan sedimen melalui proses pencairan massa es secara pasif. Es padat mampu mengangkut lempung mikroskopis hingga bongkah batu raksasa (erratic boulder) secara bersamaan tanpa mekanisme pemisahan fluida, menghasilkan endapan till/moraine yang sangat tidak tersortir (unsorted/poorly sorted).',
    trapExplanation:
      'Angin dan gelombang adalah media sortasi terbaik (well-sorted). Jangan tertukar!',
  },
  {
    id: 'q45',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Provinsi',
    question:
      'Bentukan bukit lonjong glasial drumlin memiliki asimetri lereng yang khas. Sisi stoss yang terjal dan tumpul serta sisi lee yang landai memanjang menunjukkan bahwa arah aliran gletser di masa lalu bergerak...',
    options: [
      'Dari sisi lereng terjal (stoss) menuju ke arah sisi lereng yang landai (lee)',
      'Dari sisi lereng landai (lee) menuju ke arah sisi lereng yang terjal (stoss)',
      'Tegak lurus terhadap sumbu panjang elips drumlin',
      'Bergerak konvergen memusat ke puncak drumlin',
      'Arah gerak es tidak dapat ditentukan dari morfologi drumlin',
    ],
    correctIndex: 0,
    explanation:
      'Gletser bergerak menabrak endapan moraine dasar, membentuk sisi hulu (stoss) yang lebih terjal dan tumpul akibat tekanan es yang datang. Es kemudian mengalir melandai meruncing ke arah hilir (lee), sehingga arah aliran es selalu searah dari stoss menuju lee.',
    trapExplanation:
      'Kebalikan dari barchan (duna pasir) di mana angin bertiup dari sisi landai menuju sisi slipface terjal; pada drumlin, es datang dari sisi terjal menuju landai!',
  },
  {
    id: 'q46',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Kabupaten',
    question:
      'Pembentukan incised meander (meander tertoreh bertebing ngarai batuan terjal) pada aliran sungai dewasa dapat terjadi akibat...',
    options: [
      'Pengangkatan tektonik daratan secara regional (tektonic uplift) yang memicu peremajaan sungai (rejuvenation)',
      'Pelelehan es kutub yang menaikkan muka air laut dasar erosi sungai',
      'Erosi lateral yang melemahkan stabilitas tanggul alam',
      'Penurunan tajam debit air tahunan akibat perubahan iklim mikro',
      'Proses likuefaksi dasar sungai pada zona graben',
    ],
    correctIndex: 0,
    explanation:
      'Ketika dataran banjir berliku (meander) mengalami pengangkatan tektonik (uplift) atau penurunan muka air laut dasar erosi (base level), gradien sungai meningkat drastis. Hal ini memicu rejuvenasi (peremajaan) energi erosi vertikal ke bawah, mengukir pola kelokan meander tersebut ke dalam lapisan batuan dasar membentuk ngarai curam (misal Goosenecks of the San Juan River).',
    trapExplanation:
      'Kenaikan muka air laut justru akan menenggelamkan lembah sungai (ria coast / estuari), bukan memicu torehan erosi vertikal.',
  },
  {
    id: 'q47',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Nasional',
    question:
      'Pada bentang alam arid struktural berlapisan batuan horizontal dengan lapisan pelindung keras di atasnya (caprock), urutan bentukan dari yang memiliki luas area paling sempit hingga paling luas adalah...',
    options: [
      'Pinnacle < Butte < Mesa < Plateau',
      'Butte < Pinnacle < Mesa < Plateau',
      'Pinnacle < Mesa < Butte < Plateau',
      'Plateau < Mesa < Butte < Pinnacle',
      'Mesa < Butte < Pinnacle < Plateau',
    ],
    correctIndex: 0,
    explanation:
      'Proses scarp retreat memecah daratan tinggi step-by-step: Plateau (dataran tinggi sangat luas bertebing curam) tererosi menjadi Mesa (bukit meja terisolasi di mana lebarnya > tingginya), mengecil lagi menjadi Butte (bukit sisa di mana tingginya > lebarnya), dan akhirnya menyusut menjadi pilar batu lancip runcing yaitu Pinnacle (Spire). Maka urutan luas: Pinnacle < Butte < Mesa < Plateau.',
    trapExplanation:
      'Perbedaan kunci Mesa vs Butte: Mesa memiliki diameter puncak lebih lebar dibanding tingginya, sedangkan Butte lebih tinggi daripada lebar puncaknya.',
  },
  {
    id: 'q48',
    moduleId: 'sumberdaya',
    ksrCategory: 'Sumberdaya dan Manajemen Sumberdaya',
    difficulty: 'Kabupaten',
    question:
      'Pembangkit listrik energi baru terbarukan kelautan yang memanfaatkan gradien temperatur antara air hangat di permukaan laut dengan air dingin di kedalaman samudra (≥1.000 meter) dikenal sebagai...',
    options: [
      'Ocean Thermal Energy Conversion (OTEC)',
      'Tidal Barrage Power Plant',
      'Oscillating Water Column Wave Plant',
      'Salinity Gradient Osmotic Power',
      'Subsea Marine Hydrokinetic Turbine',
    ],
    correctIndex: 0,
    explanation:
      'OTEC (Ocean Thermal Energy Conversion) memanfaatkan perbedaan suhu minimal 20°C antara air permukaan laut tropis (25–28°C) untuk menguapkan fluida bertitik didih rendah (seperti amonia), yang memutar turbin generator, lalu dikondensasikan kembali menggunakan air dingin dari lapisan abisal dalam laut (4–6°C).',
    trapExplanation:
      'Jangan tertukar dengan Tidal (pasang surut gravitasi bulan) atau Wave (ombak kinetik angin). OTEC murni berbasis termal termodinamika laut.',
  },
  {
    id: 'q49',
    moduleId: 'geografi-kota',
    ksrCategory: 'Geografi Kota dan Kewilayahan',
    difficulty: 'Kabupaten',
    question:
      'Dalam Teori Konsentris Ernest Burgess, kota mengalami diferensiasi ruang akibat bekerjanya gaya sentripetal dan gaya sentrifugal. Contoh manifestasi konkret dari gaya sentrifugal adalah...',
    options: [
      'Perpindahan penduduk kelas menengah-atas dan relokasi pabrik manufaktur menjauhi pusat kota menuju zona pinggiran (suburbanisasi)',
      'Aglomerasi gedung pencakar langit perbankan dan kantor pusat multinasional di CBD',
      'Penataan kawasan kumuh inti kota menjadi kawasan terpadu transit (TOD)',
      'Peningkatan nilai sewa tanah komersial di persimpangan jalan protokol pusat kota',
      'Pembatasan masuknya kendaraan pribadi ke dalam kawasan ring 1 perkotaan',
    ],
    correctIndex: 0,
    explanation:
      'Gaya sentrifugal adalah gaya tolak yang mendorong penduduk, fungsi komersial sekunder, dan pabrik keluar dari pusat kota (CBD) menuju daerah pinggiran (suburban) akibat tingginya harga tanah, kemacetan lalu lintas, polusi, dan keterbatasan ruang ekspansi di pusat kota.',
    trapExplanation:
      'Gaya sentripetal menarik aktivitas masuk ke pusat kota, sedangkan gaya sentrifugal mendorong aktivitas menyebar keluar ke pinggiran.',
  },
  {
    id: 'q50',
    moduleId: 'geografi-kota',
    ksrCategory: 'Geografi Kota dan Kewilayahan',
    difficulty: 'Provinsi',
    question:
      'Pada Teori Tempat Sentral (Central Place Theory) Walter Christaller, hierarki heksagonal yang disusun untuk meminimalkan jarak dan biaya perjalanan bagi lalu lintas transportasi antar-wilayah beroperasi dengan prinsip...',
    options: [
      'Prinsip Lalu Lintas / Transportasi (K = 4)',
      'Prinsip Pemasaran (K = 3)',
      'Prinsip Administrasi Pemerintahan (K = 7)',
      'Prinsip Efisiensi Ambang Batas (K = 5)',
      'Prinsip Polarisasi Ruang (K = 2)',
    ],
    correctIndex: 0,
    explanation:
      'Christaller membagi 3 asas hierarki: K=3 (Prinsip Pemasaran / 1 pusat + 6*(1/3) = 3), K=4 (Prinsip Lalu Lintas/Transportasi / 1 pusat + 6*(1/2) = 4, di mana rute jalan membagi dua wilayah tetangga), dan K=7 (Prinsip Administrasi / 1 pusat + 6*(1) = 7, mencakup seluruh kontrol administratif daerah sekitar).',
    trapExplanation:
      'K=3 adalah Pasar, K=4 adalah Transportasi/Lalu Lintas, K=7 adalah Administrasi. Jangan sampai tertukar angkanya!',
  },
  {
    id: 'q51',
    moduleId: 'geografi-pembangunan',
    ksrCategory: 'Geografi Pembangunan dan Teori Keruangan',
    difficulty: 'Provinsi',
    question:
      'Garis Brandt (Brandt Line) membagi polaritas Utara-Selatan di panggung ekonomi global. Fenomena ketimpangan internal yang sangat mencerminkan polaritas ini di dalam satu negara maju tampak pada dualisme Italia Utara yang kaya industri dan Italia Selatan yang tertinggal, yang dikenal dengan sebutan wilayah...',
    options: [
      'Mezzogiorno',
      'Padania',
      'Ruhrgebiet',
      'Wallonia',
      'Rust Belt',
    ],
    correctIndex: 0,
    explanation:
      'Mezzogiorno adalah sebutan historis dan sosio-ekonomi untuk kawasan Italia Selatan (termasuk Sisilia dan Sardinia). Wilayah ini memiliki PDB per kapita jauh lebih rendah, angka pengangguran tinggi, dan ketergantungan agraris tradisional dibandingkan Italia Utara yang modern dan makmur (Milan-Turin-Genoa industrial triangle).',
    trapExplanation:
      'Padania adalah sebutan kelompok separatis Italia Utara; Ruhrgebiet di Jerman; Wallonia di Belgia; Rust Belt di Amerika Serikat.',
  },
  {
    id: 'q52',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Demografi',
    difficulty: 'Kabupaten',
    question:
      'Piramida penduduk di negara-negara Teluk Arab (seperti Qatar, Uni Emirat Arab, dan Oman) memperlihatkan distorsi asimetri ekstrem dengan pembengkakan masif pada kelompok usia kerja 20–45 tahun laki-laki. Penyebab utama bentuk piramida anomali ini adalah...',
    options: [
      'Masuknya jutaan tenaga kerja migran internasional berjenis kelamin laki-laki di sektor konstruksi, migas, dan infrastruktur',
      'Tingginya angka aborsi selektif dan kematian bayi perempuan di negara tersebut',
      'Tingkat fertilitas biologis yang menghasilkan rasio kelahiran bayi pria 3 kali lipat',
      'Keluarnya penduduk wanita lokal secara besar-besaran untuk studi ke luar negeri',
      'Pemberlakuan program wajib militer massal bagi seluruh pria usia produktif',
    ],
    correctIndex: 0,
    explanation:
      'Negara-negara petrodolar Teluk memiliki proporsi pekerja asing (migran) yang mencapai 80-90% dari total populasi. Sebagian besar pekerja migran tersebut adalah laki-laki usia produktif asal Asia Selatan (India, Pakistan, Bangladesh, Nepal) dan Asia Tenggara yang direkrut untuk proyek infrastruktur megah tanpa membawa tanggungan keluarga.',
    trapExplanation:
      'Bukan karena anomali kelahiran biologis atau kematian wanita, melainkan murni faktor migrasi masuk (in-migration) laki-laki non-permanen.',
  },
  {
    id: 'q53',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Demografi',
    difficulty: 'Provinsi',
    question:
      'Suatu negara telah berhasil menurunkan angka kelahiran sehingga Total Fertility Rate (TFR) berada di bawah batas replacement level (TFR < 2,1 anak per wanita). Namun demikian, jumlah total penduduk negara tersebut masih terus bertambah hingga puluhan tahun berikutnya. Fenomena ini disebut...',
    options: [
      'Population Momentum',
      'Demographic Dividend (Bonus Demografi)',
      'Demographic Transition Stalemate',
      'Depopulation Delay Effect',
      'Malthusian Lag',
    ],
    correctIndex: 0,
    explanation:
      'Population Momentum adalah kecenderungan populasi untuk terus bertambah meskipun tingkat fertilitas telah turun di bawah ambang penggantian generasi (replacement level). Hal ini terjadi karena piramida penduduk masih memiliki proporsi wanita usia subur (cohort muda) yang sangat melimpah warisan dari ledakan kelahiran generasi sebelumnya.',
    trapExplanation:
      'Bonus demografi merujuk pada rasio ketergantungan rendah (dominasi usia kerja), sedangkan momentum penduduk merujuk pada kelembaman pertumbuhan populasi total.',
  },
  {
    id: 'q54',
    moduleId: 'geografi-budaya',
    ksrCategory: 'Geografi Budaya dan Identitas Regional/Pengetahuan Umum',
    difficulty: 'Provinsi',
    question:
      'Sebagian besar batas politis antar-negara di Benua Afrika berbentuk garis lurus geometris buatan yang ditarik sewenang-wenang oleh negara penjajah Eropa (seperti hasil Konferensi Berlin 1884) tanpa memperhatikan batas etnis dan suku lokal. Tipe batas politik semacam ini diklasifikasikan sebagai...',
    options: [
      'Superimposed Boundary',
      'Antecedent Boundary',
      'Subsequent Boundary',
      'Relict Boundary',
      'Physiographic Boundary',
    ],
    correctIndex: 0,
    explanation:
      'Superimposed Boundary adalah batas politis yang dipaksakan oleh kekuatan eksternal (kolonial/internasional) di atas bentang budaya yang telah ada sebelumnya, memecah suku atau mempersatukan kelompok yang saling bermusuhan dalam satu batas negara buatan.',
    trapExplanation:
      'Antecedent boundary ditarik SEBELUM area dihuni padat; Subsequent ditarik MENYESUAIKAN pola budaya yang berkembang; Relict adalah batas yang sudah tidak berlaku politis tapi bekasnya masih terlihat (misal Tembok Berlin).',
  },
  {
    id: 'q55',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Kabupaten',
    question:
      'Pada komposit citra satelit warna semu baku (Standard False Color Composite: NIR-Red-Green), vegetasi hutan lebat dan tanaman pertanian yang sehat akan tampak dengan rona warna...',
    options: [
      'Merah terang (Bright Red)',
      'Hijau tua gelap',
      'Biru laut jernih',
      'Cokelat tanah',
      'Kuning cerah',
    ],
    correctIndex: 0,
    explanation:
      'Klorofil dan struktur sel mesofil spons pada daun tanaman yang sehat memantulkan radiasi Near-Infrared (NIR) dengan sangat kuat. Pada komposit standar false color (saluran NIR dimasukkan ke kanal warna Merah/Red monitor), objek bervegetasi lebat akan memancarkan sinyal merah dominan sehingga tampak berwarna merah cerah menyala.',
    trapExplanation:
      'Vegetasi hijau tampak hijau hanya pada citra True Color (warna asli 3-2-1). Pada Standard False Color (4-3-2), vegetasi PASTI berwarna merah!',
  },
  // --- 45 SOAL TAMBAHAN DARI PAKET 47 HALAMAN ARSIP LENGKAP OSN/KSR GEOGRAFI ---
  {
    id: 'q56',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Sirkulasi udara meridional berskala global di atmosfer troposfer tersusun atas tiga sel sirkulasi utama di masing-masing belahan bumi. Urutan ketiga sel tersebut dari daerah ekuator menuju kutub adalah...',
    options: [
      'Sel Hadley -> Sel Ferrel -> Sel Polar',
      'Sel Ferrel -> Sel Hadley -> Sel Polar',
      'Sel Polar -> Sel Ferrel -> Sel Hadley',
      'Sel Hadley -> Sel Polar -> Sel Ferrel',
      'Sel Walker -> Sel Hadley -> Sel Polar',
    ],
    correctIndex: 0,
    explanation:
      'Di setiap belahan bumi (utara dan selatan), sirkulasi atmosfer meridional terbagi menjadi 3 sel: 1. Sel Hadley (0°-30° Lintang: konveksi ekuator naik dan subsiden di subtropis membentuk gurun), 2. Sel Ferrel (30°-60° Lintang: sel tidak langsung berarah berlawanan), dan 3. Sel Polar (60°-90° Lintang: udara dingin kutub turun dan menyebar ke lintang sedang).',
    trapExplanation:
      'Sel Walker bukan sirkulasi meridional lintang, melainkan sirkulasi zonal khatulistiwa (timur-barat) di sepanjang Samudra Pasifik.',
  },
  {
    id: 'q57',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Provinsi',
    question:
      'Pada bentang alam vulkanik tua yang terbentuk oleh letusan eksplosif (piroklastik kaya gas dan silika), kenampakan geologis berikut dapat dijumpai, KECUALI...',
    options: [
      'Plato lava basaltik yang luas dan mendatar',
      'Kaldera runtuhan yang sangat luas',
      'Stratovulkano dengan lapisan perselingan piroklastik dan lava',
      'Danau kawah vulkanik (maar atau kaldera lake)',
      'Lapisan endapan tefra dan ignimbrit tebal',
    ],
    correctIndex: 0,
    explanation:
      'Plato lava (misal Dataran Tinggi Deccan atau Columbia River Basalt) terbentuk dari erupsi EFUSIF celah linier dengan magma basaltis sangat encer (viskositas rendah, miskin silika) yang mengalir bebas membentuk hamparan luas, BUKAN dari erupsi eksplosif.',
    trapExplanation:
      'Kaldera, danau kawah, endapan tefra, dan kerucut strato merupakan ciri khas manifestasi erupsi eksplosif.',
  },
  {
    id: 'q58',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Jika dibandingkan dengan kerak benua, karakteristik fisik dan petrologis dari kerak samudera adalah...',
    options: [
      'Lebih tipis (ketebalan 6-10 km) dan memiliki densitas lebih tinggi (~3.0 g/cm3)',
      'Lebih tebal (ketebalan 35-70 km) dan memiliki densitas lebih rendah (~2.7 g/cm3)',
      'Lebih tipis (ketebalan 6-10 km) namun memiliki densitas lebih rendah (~2.2 g/cm3)',
      'Tersusun dominan oleh batuan granit asam yang kaya silika-aluminium (SiAl)',
      'Memiliki umur batuan jauh lebih tua (>1.500 juta tahun) dibanding batuan benua',
    ],
    correctIndex: 0,
    explanation:
      'Kerak samudera (SiMa) rata-rata hanya memiliki ketebalan 6-10 km namun sangat padat dan berat (densitas ~3.0 g/cm3) karena tersusun oleh batuan mafik basaltis kaya besi-magnesium. Sebaliknya kerak benua tebal (35-70 km) namun lebih ringan (densitas ~2.7 g/cm3) karena bersifat granitis asam.',
    trapExplanation:
      'Kerak samudera berumur sangat muda (<200 juta tahun) karena terus dihancurkan di zona subduksi dan diperbarui di MOR, beda dengan benua yang abadi.',
  },
  {
    id: 'q59',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Dalam merumuskan hipotesis Continental Drift (Apungan Benua) pada tahun 1912, Alfred Wegener mengajukan berbagai bukti empiris, KECUALI...',
    options: [
      'Penyebaran artefak budaya peradaban manusia purba yang identik di pesisir seberang samudra',
      'Kecocokan garis kontur pesisir barat Afrika dan timur Amerika Selatan',
      'Kesamaan formasi batuan dan deretan pegunungan Appalachian di Amerika Utara dengan pegunungan Caledonian di Skotlandia',
      'Penemuan fosil reptil air tawar Mesosaurus dan flora Glossopteris yang tersebar di benua selatan (Gondwana)',
      'Bukti endapan glasiasi purba (tillite Permo-Karbon) di wilayah tropis seperti India, Brasil, dan Afrika',
    ],
    correctIndex: 0,
    explanation:
      'Peradaban manusia dan manusia purba baru muncul pada Zaman Kuarter (kurang dari 2-3 juta tahun lalu), sedangkan superbenua Pangea pecah sejak masa Mesozoikum (sekitar 200 juta tahun lalu). Wegener murni mengandalkan bukti geologi, paleontologi (fosil hewan/tanaman purba), dan paleoklimatologi glasial.',
    trapExplanation:
      'Jangan sampai memilih bukti fosil atau glasiasi; kedua bukti tersebut adalah pilar utama teori Wegener.',
  },
  {
    id: 'q60',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Provinsi',
    question:
      'Rangkaian Pegunungan Bukit Barisan dan busur kepulauan vulkanik aktif di sepanjang Pulau Sumatra terbentuk sebagai akibat dari...',
    options: [
      'Konvergensi subduksi menyudut (oblique subduction) Lempeng Indo-Australia yang menunjam ke bawah Lempeng Eurasia',
      'Pemekaran batas divergen di Cekungan Busur Belakang Sumatra',
      'Aktivitas transform murni tanpa keterlibatan pelelehan magma astenosfer',
      'Pengangkatan isostatik blok batuan granitis purba Pra-Tersier',
      'Tabrakan kolisi benua-benua (continent-continent collision) antara Paparan Sunda dan Sahul',
    ],
    correctIndex: 0,
    explanation:
      'Subduksi Lempeng Samudera Indo-Australia ke bawah Lempeng Benua Eurasia membentuk palung Sunda, zona Benioff, busur magmatik (Bukit Barisan), serta menghasilkan gaya geser lateral yang melahirkan Sesar Besar Sumatra (Great Sumatran Fault / Sesar Semangko).',
    trapExplanation:
      'Sumatra bukanlah zona kolisi benua-benua (seperti Himalaya), melainkan subduksi samudera-benua dengan karakteristik penunjaman miring (oblique).',
  },
  {
    id: 'q61',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Batuan beku intrusif plutonik (seperti Granit, Diodit, dan Gabro) memiliki tekstur kristal yang khas berupa...',
    options: [
      'Faneritik (mineral kristal berbutir kasar terlihat jelas) dan non-vesikular padat',
      'Afanitik (butiran mineral sangat halus mikroskopis) akibat pendinginan kilat',
      'Vesikular berlubang-lubang akibat pelepasan gas magma di permukaan bumi',
      'Amorf atau gelas vulkanik tanpa struktur kristal atom teratur',
      'Piroklastik dengan susunan fragmen breksi dan abu vulkanik lepas',
    ],
    correctIndex: 0,
    explanation:
      'Magma yang membeku jauh di bawah permukaan bumi (intrusif plutonik) terisolasi oleh lapisan batuan di atasnya sehingga proses pendinginan berlangsung sangat lambat (ribuan hingga jutaan tahun). Hal ini memberi waktu bagi ion-ion mineral untuk tumbuh membentuk kristal berukuran besar dan kasar (tekstur faneritik).',
    trapExplanation:
      'Tekstur afanitik, vesikular (batu apung), dan gelas (obsidian) adalah ciri khas batuan beku ekstrusif (luar/vulkanik), bukan intrusif.',
  },
  {
    id: 'q62',
    moduleId: 'sumberdaya',
    ksrCategory: 'Sumberdaya dan Manajemen Sumberdaya',
    difficulty: 'Kabupaten',
    question:
      'Batu bara merupakan sumber energi fosil yang melimpah di Pulau Sumatra dan Kalimantan. Secara petrologi, batu bara diklasifikasikan sebagai...',
    options: [
      'Batuan sedimen organik yang terbentuk dari dekomposisi anaerobik tumpukan vegetasi purba di lingkungan rawa gambut',
      'Batuan sedimen klastik hasil rombakan batuan beku kaya silika',
      'Batuan metamorf kontak akibat pemanasan magma andesitik',
      'Batuan sedimen kimiawi hasil presipitasi mineral kalsit di laut dangkal',
      'Batuan beku luar yang mengalami karbonisasi suhu rendah',
    ],
    correctIndex: 0,
    explanation:
      'Batu bara adalah batuan sedimen biogenik/organik yang berasal dari serpihan vegetasi tanaman purba (tumbuhan paku rawa dll) yang terakumulasi di rawa anaerob (tanpa oksigen), mengalami pembusukan sebagian membentuk gambut (peat), lalu terkubur dan mengalami kenaikan suhu dan tekanan menjadi lignit, sub-bituminus, bituminus, hingga antrasit.',
    trapExplanation:
      'Batu bara bukan batuan metamorf murni, kecuali untuk antrasit kualitas tertinggi yang mengalami metamorfisme dinamo-termal tingkat lanjut.',
  },
  {
    id: 'q63',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Kabupaten',
    question:
      'Pada peta topografi kontur suatu Daerah Aliran Sungai (DAS), kecepatan aliran air sungai permukaan akan mencapai nilai tertinggi pada segmen di mana...',
    options: [
      'Garis-garis kontur ketinggian saling berhimpitan sangat rapat (gradien kemiringan lereng sangat curam)',
      'Garis-garis kontur ketinggian berjarak sangat renggang dan lebar',
      'Sungai mulai memasuki dataran aluvial rendah mendekati garis pantai',
      'Pola sungai berubah menjadi teranyam (braided stream) di delta muara',
      'Lebar penampang sungai mengalami perluasan maksimal di zona hilir',
    ],
    correctIndex: 0,
    explanation:
      'Kecepatan aliran air sebanding dengan gradien hidrolik/kemiringan lereng sungai. Pada peta topografi, kontur yang berjarak sangat rapat menandakan kenaikan atau penurunan elevasi yang sangat terjal dalam jarak horizontal pendek, menghasilkan energi potensial gravitasi dan kecepatan arus air paling deras.',
    trapExplanation:
      'Kontur renggang menandakan dataran landai di mana air mengalir lambat dan mengalami sedimentasi.',
  },
  {
    id: 'q64',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Kabupaten',
    question:
      'Dalam tahapan siklus manajemen penanggulangan bencana, tindakan yang menjadi prioritas utama pada Fase Tanggap Darurat (Emergency Response Phase) saat bencana sedang terjadi adalah...',
    options: [
      'Penyelamatan jiwa (SAR), evakuasi pengungsi, pertolongan medis, dan pemenuhan kebutuhan logistik dasar',
      'Penyusunan peta zonasi Kawasan Rawan Bencana (KRB) dan tata ruang wilayah',
      'Pembangunan tanggul pencegah abrasi dan pemecah gelombang laut',
      'Pembangunan kembali fasilitas umum permanen dengan standar anti-gempa (rekonstruksi)',
      'Pemulihan kondisi psikologis korban trauma pascabencana (trauma healing)',
    ],
    correctIndex: 0,
    explanation:
      'Tanggap darurat difokuskan pada upaya penyelamatan nyawa korban sesaat setelah bencana melanda: operasi SAR, evakuasi ke tempat aman, penyediaan air bersih, makanan, tenda darurat, dan perawatan luka korban.',
    trapExplanation:
      'Zonasi KRB adalah mitigasi pra-bencana; rekonstruksi fisik dan trauma healing adalah fase rehabilitasi pasca-bencana.',
  },
  {
    id: 'q65',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Provinsi',
    question:
      'Hantaman gelombang laut yang terus-menerus mengikis dasar tebing pantai terjal (cliff) pada zona pasang surut akan membentuk cekungan torehan takik yang disebut wave-cut notch. Jika tebing atasnya runtuh dan proses ini berulang, akan terbentuk dataran abrasi pantai mendatar yang disebut...',
    options: [
      'Wave-cut platform',
      'Tombolo',
      'Spit barrier',
      'Barrier reef',
      'Estuarium',
    ],
    correctIndex: 0,
    explanation:
      'Wave-cut platform adalah teras batuan datar atau undak abrasi di dasar tebing laut yang tersingkap saat surut, terbentuk dari mundurnya garis tebing (cliff retreat) akibat erosi hantaman gelombang ombak secara terus-menerus.',
    trapExplanation:
      'Tombolo dan spit adalah bentang alam DEPOSISI marin (sedimentasi pasir), bukan hasil abrasi tebing.',
  },
  {
    id: 'q66',
    moduleId: 'lingkungan-sdgs',
    ksrCategory: 'Lingkungan dan Pembangunan Berkelanjutan',
    difficulty: 'Kabupaten',
    question:
      'Bioma Tundra Arktik yang berada di sekitar lingkar kutub utara memiliki karakteristik pembatas ekologis paling menonjol berupa...',
    options: [
      'Adanya lapisan tanah beku abadi (permafrost) yang mencegah perakaran pohon berkayu sehingga hanya ditumbuhi lumut dan semak kerdil',
      'Curah hujan yang sangat tinggi sepanjang tahun disertai badai konvektif lebat',
      'Kepadatan tajuk pohon berkanopi rapat dengan tingkat stratifikasi vegetasi kompleks',
      'Suhu tanah yang hangat akibat aktivitas panas bumi geotermal di seluruh kawasan',
      'Ketiadaan cahaya matahari total selama 12 bulan penuh tanpa henti',
    ],
    correctIndex: 0,
    explanation:
      'Permafrost adalah lapisan tanah bawah permukaan yang membeku permanen pada suhu 0°C selama dua tahun atau lebih. Lapisan beku ini menghalangi perakaran dalam dan drainase air, sehingga vegetasi tundra terbatas pada lumut kerak (lichen), lumut daun (mosses), rumput teki, dan semak kerdil.',
    trapExplanation:
      'Tundra memiliki presipitasi tahunan yang sangat rendah (mirip gurun dingin), bukan curah hujan tinggi!',
  },
  {
    id: 'q67',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Demografi',
    difficulty: 'Provinsi',
    question:
      'Sebagian besar negara maju di kawasan Eropa Barat dan Utara (seperti Jerman, Swiss, dan Swedia) memiliki piramida penduduk tipe konstruktif (stasioner menuju menyusut). Ciri utama dari struktur piramida ini adalah...',
    options: [
      'Porsi kelompok usia anak-anak (0-14 tahun) lebih kecil dibanding kelompok usia dewasa dan manula akibat tingkat kelahiran yang sangat rendah',
      'Porsi kelompok balita sangat melimpah melebar di bagian dasar piramida',
      'Angka kematian bayi (IMR) sangat tinggi melampaui angka kelahiran',
      'Bentuk piramida menyerupai segitiga limas runcing dengan lereng terjal',
      'Rasio ketergantungan (dependency ratio) bernilai di atas 90',
    ],
    correctIndex: 0,
    explanation:
      'Piramida konstruktif (berbentuk guci/nisan) menyempit tajam di bagian dasar karena tingkat kelahiran menurun drastis di bawah replacement level (TFR rendah) dan penduduk usia harapan hidup tinggi, memicu tantangan penuaan populasi (aging population).',
    trapExplanation:
      'Bentuk segitiga melebar di dasar adalah piramida ekspansif khas negara berkembang dengan kelahiran tinggi.',
  },
  {
    id: 'q68',
    moduleId: 'geografi-ekonomi',
    ksrCategory: 'Geografi Ekonomi dan Globalisasi',
    difficulty: 'Provinsi',
    question:
      'Menurut Teori Keunggulan Komparatif (Comparative Advantage) yang dicetuskan oleh David Ricardo, perdagangan internasional akan saling menguntungkan kedua negara jika masing-masing negara...',
    options: [
      'Berspesialisasi memproduksi dan mengekspor komoditas yang memiliki biaya peluang (opportunity cost) relatif paling rendah',
      'Memiliki keunggulan absolut mutlak dalam seluruh efisiensi biaya produksi barang',
      'Menerapkan proteksionisme tarif impor secara agresif untuk menutup pasar domestik',
      'Hanya mengandalkan ekspor bahan mentah tak terbarukan ke negara tetangga',
      'Mematok nilai tukar mata uang secara tetap tanpa mengikuti mekanisme pasar',
    ],
    correctIndex: 0,
    explanation:
      'David Ricardo membuktikan bahwa meskipun suatu negara kalah efisien secara absolut dalam segala hal dibanding negara maju, kedua negara tetap dapat untung dari perdagangan jika masing-masing fokus memproduksi barang dengan biaya peluang (opportunity cost) terkecil.',
    trapExplanation:
      'Keunggulan absolut (absolute advantage) adalah teori Adam Smith, bukan David Ricardo.',
  },
  {
    id: 'q69',
    moduleId: 'geografi-ekonomi',
    ksrCategory: 'Geografi Ekonomi dan Globalisasi',
    difficulty: 'Kabupaten',
    question:
      'Dalam Teori Lokasi Industri Alfred Weber, penentuan lokasi pabrik didasarkan pada Indeks Material (IM). Pabrik pengolahan yang memiliki nilai IM < 1 (Weight-Gaining Industry) secara rasional paling ideal didirikan di...',
    options: [
      'Dekat dengan wilayah pasar konsumen (Market-oriented location)',
      'Dekat dengan lokasi sumber bahan mentah (Raw material-oriented location)',
      'Tepat di tengah-tengah antara sumber bahan baku dan pasar tanpa memandang biaya',
      'Di kawasan pelabuhan terpencil tanpa akses jaringan distribusi',
      'Di wilayah dengan upah buruh tertinggi di kawasan industri',
    ],
    correctIndex: 0,
    explanation:
      'Indeks Material (IM) = Berat Bahan Baku Mentah / Berat Produk Jadi. Jika IM < 1, produk jadi memiliki bobot lebih berat atau volume lebih besar (misal industri minuman botol yang menambah air di pabrik, perakitan mobil, atau pabrik roti). Mengangkut produk jadi lebih mahal, sehingga pabrik harus mendekat ke pasar.',
    trapExplanation:
      'Jika IM > 1 (Weight-Losing, misal peleburan tembaga atau semen), barulah pabrik didirikan dekat bahan mentah.',
  },
  {
    id: 'q70',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Demografi',
    difficulty: 'Kabupaten',
    question:
      'Indonesia diprediksi berada pada puncak Bonus Demografi pada dekade 2020-2035. Indikator kuantitatif utama yang menandai terjadinya bonus demografi adalah...',
    options: [
      'Rasio Ketergantungan (Dependency Ratio) berada di titik terendah, yaitu di bawah 50 per 100 penduduk usia produktif',
      'Tingkat pengangguran terbuka mencapai angka nol persen',
      'Jumlah penduduk lansia di atas 65 tahun melampaui jumlah angkatan kerja muda',
      'Angka migrasi keluar internasional (emigrasi) melampaui angka migrasi masuk',
      'Total Fertility Rate (TFR) mengalami lonjakan tajam di atas 4 anak per wanita',
    ],
    correctIndex: 0,
    explanation:
      'Bonus demografi tercapai saat proporsi penduduk usia kerja produktif (15-64 tahun) mencapai porsi terbesar (>68%), sehingga setiap 100 orang usia produktif hanya menanggung beban kurang dari 50 orang non-produktif (anak-anak dan lansia).',
    trapExplanation:
      'Bonus demografi adalah fenomena struktur umur penduduk, bukan jaminan otomatis nol pengangguran tanpa persiapan lapangan kerja.',
  },
  {
    id: 'q71',
    moduleId: 'pariwisata',
    ksrCategory: 'Pariwisata dan Manajemen Pariwisata',
    difficulty: 'Provinsi',
    question:
      'Stanley Plog mengklasifikasikan kepribadian wisatawan dalam kurva kontinum psikografis. Wisatawan yang memiliki rasa percaya diri tinggi, menyukai petualangan di daerah terpencil yang belum tersentuh pariwisata massal, dan ingin berinteraksi dengan budaya lokal yang otentik dikategorikan sebagai...',
    options: [
      'Allocentric (Venturer)',
      'Psychocentric (Dependable)',
      'Mid-centric',
      'Near-psychocentric',
      'Eco-centric pasif',
    ],
    correctIndex: 0,
    explanation:
      'Wisatawan Allocentric (Venturer) adalah pionir pelancong yang mandiri, berani mengambil risiko, dan menghindari destinasi wisata komersial yang ramai. Kebalikannya, Psychocentric (Dependable) mencari destinasi yang aman, akrab, serba terencana, dan fasilitasnya lengkap.',
    trapExplanation:
      'Mid-centric adalah mayoritas wisatawan umum yang menyukai destinasi populer dengan sedikit sentuhan petualangan ringan.',
  },
  {
    id: 'q72',
    moduleId: 'geografi-budaya',
    ksrCategory: 'Geografi Budaya dan Identitas Regional/Pengetahuan Umum',
    difficulty: 'Kabupaten',
    question:
      'Percampuran antara kebudayaan Hindu-Buddha dengan kebudayaan Islam di Jawa yang menghasilkan bentuk atap tumpang pada Masjid Agung Demak dan Menara Kudus merupakan perwujudan dari proses...',
    options: [
      'Akulturasi budaya',
      'Asimilasi mutlak',
      'Segregasi spasial',
      'Marginalisasi budaya',
      'Difusi relokasi paksa',
    ],
    correctIndex: 0,
    explanation:
      'Akulturasi adalah proses bertemunya dua atau lebih kebudayaan yang berbeda di mana unsur-unsur kebudayaan asing diterima dan diolah ke dalam kebudayaan sendiri tanpa menyebabkan hilangnya unsur kepribadian kebudayaan asli (tampak pada arsitektur Menara Kudus bercorak candi Hindu).',
    trapExplanation:
      'Asimilasi menghasilkan peleburan kebudayaan total sehingga ciri khas budaya lama hilang; pada Menara Kudus, ciri Hindu masih sangat kental terlihat.',
  },
  {
    id: 'q73',
    moduleId: 'geografi-budaya',
    ksrCategory: 'Geografi Budaya dan Identitas Regional/Pengetahuan Umum',
    difficulty: 'Provinsi',
    question:
      'Tuntutan referendum kemerdekaan dan gerakan separatisme kultural yang pernah bergejolak di Provinsi Québec, Kanada, terutama dipicu oleh perbedaan identitas...',
    options: [
      'Bahasa dan tradisi hukum Perancis (Frankofon) di tengah mayoritas warga Kanada yang berbahasa Inggris (Anglofon)',
      'Sistem ekonomi sosialis yang ditolak oleh pemerintah federal Ottawa',
      'Keberadaan tambang minyak bumi lepas pantai yang dikuasai oleh suku Indian Inuit',
      'Perbedaan garis lintang iklim kutub yang memisahkan aktivitas pertanian',
      'Keanggotaan Québec dalam aliansi militer Uni Eropa',
    ],
    correctIndex: 0,
    explanation:
      'Québec dijajah oleh Perancis sebelum beralih ke Inggris pada 1763. Mayoritas warganya mempertahankan bahasa Perancis, hukum perdata kontinental, dan tradisi Katolik, sehingga merasa menjadi bangsa tersendiri di dalam konfederasi Kanada yang mayoritas berbahasa Inggris dan Protestan.',
    trapExplanation:
      'Isu Québec murni merupakan gesekan etnolinguistik dan budaya sejarah Perancis vs Inggris, bukan sengketa tambang atau iklim.',
  },
  {
    id: 'q74',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Punggung Tengah Samudra (Mid-Oceanic Ridge / MOR) di dasar Samudra Atlantik merupakan kenampakan relief dasar laut yang terbentuk pada batas lempeng tipe...',
    options: [
      'Divergen (Pemekaran dasar laut)',
      'Konvergen subduksi',
      'Konvergen kolisi',
      'Transform sesar mendatar',
      'Zona sesar geser sinistral',
    ],
    correctIndex: 0,
    explanation:
      'Batas divergen samudera terjadi saat dua lempeng litosfer saling bergerak menjauh. Celah rekahan yang terbuka memungkinkan magma basaltis dari mantel atas naik, membeku, dan membangun barisan punggungan pegunungan dasar laut (MOR) sekaligus memekarkan lantai samudra.',
    trapExplanation:
      'Subduksi konvergen menghasilkan palung laut (trench) dan busur vulkanik, bukan punggungan pemekaran.',
  },
  {
    id: 'q75',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Pada struktur deformasi lipatan batuan (fold) akibat gaya kompresi tektonik, bagian punggung lipatan yang melengkung ke atas dan bagian lembah lipatan yang melengkung ke bawah berturut-turut dinamakan...',
    options: [
      'Antiklin dan Sinklin',
      'Horst dan Graben',
      'Hanging Wall dan Foot Wall',
      'Epirogenesa dan Orogenesa',
      'Dekstral dan Sinistral',
    ],
    correctIndex: 0,
    explanation:
      'Antiklin adalah bentuk lipatan cembung ke atas dengan lapisan batuan tertua berada di inti sumbu lipatan; sedangkan Sinklin adalah bentuk lipatan cekung ke bawah dengan lapisan batuan termuda di inti sumbunya.',
    trapExplanation:
      'Horst dan Graben adalah morfologi patahan (fault), bukan perlipatan plastis (fold).',
  },
  {
    id: 'q76',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Kabupaten',
    question:
      'Pada sistem deformasi sesar normal akibat gaya ekstensi tektonik, blok batuan yang relatif amblas ke bawah membentuk lembah patahan dan blok batuan yang tetap tinggi diapit oleh patahan disebut...',
    options: [
      'Graben (Slenk) dan Horst',
      'Sinklin dan Antiklin',
      'Escarpment dan Cuesta',
      'Mesa dan Butte',
      'Dolina dan Polje',
    ],
    correctIndex: 0,
    explanation:
      'Gaya tegangan tarikan (ekstensi) menyebabkan retakan sesar turun. Blok kerak yang turun ke bawah di antara dua sesar disebut Graben (Slenk, misal Danau Baikal atau Rhine Graben), sedangkan blok pematang yang terangkat di sampingnya disebut Horst.',
    trapExplanation:
      'Jangan tertukar: Graben = lembah amblas, Horst = bukit balok terangkat.',
  },
  {
    id: 'q77',
    moduleId: 'geologi',
    ksrCategory: 'Geologi dan Tektonisme',
    difficulty: 'Provinsi',
    question:
      'Karakteristik letusan gunung api (apakah bersifat eksplosif dahsyat atau efusif lelehan) sangat dipengaruhi oleh dua faktor primer pada dapur magma, yaitu...',
    options: [
      'Viskositas magma (kandungan silika SiO2) dan tekanan gas volatil yang terlarut',
      'Ketinggian puncak gunung api dari permukaan laut dan luas kawah',
      'Curah hujan tahunan di lereng gunung dan ketebalan tanah humus',
      'Kedalaman palung laut terdekat dan arah mata angin',
      'Kecepatan angin siklonik di sekitar kepundan gunung api',
    ],
    correctIndex: 0,
    explanation:
      'Magma asam-intermediet (kaya SiO2) memiliki viskositas sangat kental yang memerangkap gelembung gas volatil (H2O, CO2, SO2). Ketika tekanan gas melebihi kekuatan batuan penyumbat, ledakan dahsyat (eksplosif Plinian/Vulkanian) terjadi. Sebaliknya magma basa miskin silika sangat encer sehingga gas mudah lepas (efusif tipe Hawaii).',
    trapExplanation:
      'Faktor eksternal seperti curah hujan hanya memicu letusan freatik atau lahar dingin sekunder, bukan penentu sifat magma primer.',
  },
  {
    id: 'q78',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Kabupaten',
    question:
      'Titik pusat pelepasan energi gelombang gempa bumi yang berada di dalam kerak bumi dan titik proyeksi tegak lurusnya di permukaan bumi berturut-turut dinamakan...',
    options: [
      'Hiposentrum dan Episentrum',
      'Episentrum dan Hiposentrum',
      'Fokus dan Patahan Geser',
      'Pleistoseista dan Homoseista',
      'Makroseisma dan Mikroseisma',
    ],
    correctIndex: 0,
    explanation:
      'Hiposentrum (fokus) adalah lokasi sumber rekahan batuan di dalam interior bumi tempat pertama kali gelombang seismik terpancar. Episentrum adalah titik koordinat di permukaan bumi yang tepat tegak lurus berada di atas hiposentrum.',
    trapExplanation:
      'Ingat prefiks: "Hipo" = bawah/dalam (di dalam tanah); "Epi" = di atas/permukaan.',
  },
  {
    id: 'q79',
    moduleId: 'kebencanaan',
    ksrCategory: 'Kebencanaan dan Manajemen Bencana',
    difficulty: 'Provinsi',
    question:
      'Sebuah stasiun seismograf mencatat gelombang primer (P) suatu gempa tiba pada pukul 08.12.00 WIB dan gelombang sekunder (S) tiba pada pukul 08.16.30 WIB. Berapakah jarak episentrum gempa tersebut dari stasiun pencatat berdasarkan Hukum Laska?',
    options: [
      '3.500 km',
      '4.500 km',
      '2.500 km',
      '5.500 km',
      '1.500 km',
    ],
    correctIndex: 0,
    formulaUsed: 'Delta = ((S - P) - 1 menit) * 1.000 km',
    explanation:
      'Selisih waktu S - P = 08.16.30 - 08.12.00 = 4 menit 30 detik (atau 4,5 menit). Masukkan ke Rumus Laska: Delta = ((4,5 - 1) * 1.000 km) = 3,5 * 1.000 km = 3.500 km.',
    trapExplanation:
      'Jangan lupa mengurangi 1 menit terlebih dahulu sebelum dikalikan dengan 1.000 km!',
  },
  {
    id: 'q80',
    moduleId: 'lingkungan-sdgs',
    ksrCategory: 'Lingkungan dan Pembangunan Berkelanjutan',
    difficulty: 'Kabupaten',
    question:
      'Metode mekanik konservasi tanah dengan cara memotong lereng bukit menjadi bidang-bidang bertingkat datar berundak untuk menahan limpasan air permukaan dan erosi disebut...',
    options: [
      'Terasering (Terracing)',
      'Strip cropping',
      'Crop rotation (Rotasi tanaman)',
      'Mulching (Pemberian mulsa organik)',
      'Afforestasi kawasan karst',
    ],
    correctIndex: 0,
    explanation:
      'Terasering adalah rekayasa fisik mekanik pada lahan miring dengan membuat undakan bertangga untuk mengurangi panjang dan kemiringan lereng, memperbesar resapan air tanah (infiltrasi), dan menahan laju erosi tanah lapisan atas (topsoil).',
    trapExplanation:
      'Strip cropping, rotasi tanaman, dan mulsa adalah metode vegetatif/biologis, bukan mekanik fisik.',
  },
  {
    id: 'q81',
    moduleId: 'lingkungan-sdgs',
    ksrCategory: 'Lingkungan dan Pembangunan Berkelanjutan',
    difficulty: 'Provinsi',
    question:
      'Membajak dan menanami lahan miring dengan jalur alur yang sejajar mengikuti garis ketinggian (kontur) tanpa memotong lereng tegak lurus dinamakan teknik...',
    options: [
      'Contour Plowing (Pengolahan tanah menurut kontur)',
      'Up-and-down slope tillage',
      'Windbreak barrier system',
      'Agroforestri monokultur',
      'Gully reclamation',
    ],
    correctIndex: 0,
    explanation:
      'Contour Plowing membajak tanah searah garis kontur horisontal sehingga tiap alur bajakan dan guludan tanah bertindak sebagai bendungan kecil penahan air hujan dan sedimen tanah agar tidak meluncur bebas menuruni lereng.',
    trapExplanation:
      'Membajak searah lereng atas-bawah (up-and-down) sangat dilarang karena justru mempercepat pembentukan parit erosi gully.',
  },
  {
    id: 'q82',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Kabupaten',
    question:
      'Berdasarkan Hukum Termal Braak untuk kawasan tropis kepulauan Indonesia, temperatur udara berkurang sekitar 0,61°C setiap kenaikan 100 meter ketinggian. Jika suhu udara di pesisir pantai (0 mdpl) adalah 28°C, berapakah perkiraan suhu udara di puncak Gunung Muria pada ketinggian 1.600 mdpl?',
    options: [
      '18,4°C',
      '22,0°C',
      '14,2°C',
      '12,0°C',
      '16,0°C',
    ],
    correctIndex: 0,
    formulaUsed: 'T = T0 - 0.6 * (h / 100)',
    explanation:
      'Kenaikan ketinggian h = 1.600 m. Penurunan suhu = (1.600 / 100) * 0,6°C = 16 * 0,6°C = 9,6°C. Maka suhu di puncak = 28°C - 9,6°C = 18,4°C.',
    trapExplanation:
      'Pastikan menghitung penurunan suhu dari ketinggian per 100 meter, jangan langsung mengurangi 28 dengan 16!',
  },
  {
    id: 'q83',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Kabupaten',
    question:
      'Pada suhu 25°C, satu meter kubik udara menampung uap air aktual sebesar 15 gram. Jika kapasitas uap air maksimum udara pada suhu tersebut untuk mencapai kondisi jenuh adalah 20 gram/m3, maka kelembapan relatif (Relative Humidity) udara tersebut adalah...',
    options: [
      '75%',
      '60%',
      '80%',
      '85%',
      '50%',
    ],
    correctIndex: 0,
    formulaUsed: 'RH = (Uap Aktual / Kapasitas Maksimum) * 100%',
    explanation:
      'Kelembapan Relatif RH = (15 gram / 20 gram) * 100% = 0,75 * 100% = 75%.',
    trapExplanation:
      'Kelembapan absolut adalah berat uap riil (15 g/m3), sedangkan kelembapan relatif selalu dinyatakan dalam persentase kapasitas jenuh.',
  },
  {
    id: 'q84',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Provinsi',
    question:
      'Angin fohn adalah angin jatuh yang bersifat panas dan kering di balik lereng bayangan hujan (leeward) pegunungan. Pasangan nama lokal angin fohn dan daerah terjadinya di Indonesia yang BENAR adalah...',
    options: [
      'Angin Gending di Pasuruan, Jawa Timur',
      'Angin Kumbang di Deli, Sumatra Utara',
      'Angin Bahorok di Cirebon, Jawa Barat',
      'Angin Brubu di Biak, Papua',
      'Angin Wambraw di Makassar, Sulawesi Selatan',
    ],
    correctIndex: 0,
    explanation:
      'Daftar angin fohn di Indonesia: 1. Angin Gending (Pasuruan & Probolinggo, merusak tanaman tembakau/mangga), 2. Angin Bahorok (Deli, merusak tembakau Deli), 3. Angin Kumbang (Cirebon/Brebes, merusak bawang), 4. Angin Brubu (Makassar), 5. Angin Wambraw (Biak, Papua).',
    trapExplanation:
      'Bahorok di Deli, Kumbang di Cirebon, Brubu di Makassar, Wambraw di Biak. Opsi B, C, D, E sengaja disilang pasangannya.',
  },
  {
    id: 'q85',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Kabupaten',
    question:
      'Ketika fenomena anomali iklim El Niño kuat melanda Samudra Pasifik tropis, dampak langsung yang dialami oleh sebagian besar wilayah Indonesia adalah...',
    options: [
      'Musim kemarau berkepanjangan, curah hujan merosot drastis, serta meningkatnya risiko kebakaran hutan dan lahan',
      'Curah hujan melonjak ekstrem memicu banjir bandang dan tanah longsor serentak',
      'Penurunan drastis temperatur udara di khatulistiwa hingga turun salju',
      'Peningkatan frekuensi badai tornado fujita di dataran rendah pesisir',
      'Tenggelamnya seluruh terumbu karang akibat kenaikan mendadak muka air laut 5 meter',
    ],
    correctIndex: 0,
    explanation:
      'Pada saat El Niño, kolam air hangat Pasifik bergeser ke arah timur mendekati pesisir Peru/Amerika Selatan. Akibatnya sirkulasi Walker melemah, pusat konveksi awan hujan berpindah ke timur, dan wilayah Indonesia mengalami anomali subsiden udara kering dengan penurunan curah hujan yang signifikan.',
    trapExplanation:
      'Hujan berlebih dan banjir bandang adalah dampak fenomena sebaliknya, yaitu La Niña.',
  },
  {
    id: 'q86',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Hakikat Geografi dan Analisis Ruang',
    difficulty: 'Kabupaten',
    question:
      'Kajian fenomena banjir rob di pesisir Semarang yang menganalisis kombinasi penurunan muka tanah (land subsidence), pasang air laut, serta interaksi alih fungsi ruang pemukiman penduduk ditelaah secara komprehensif menggunakan...',
    options: [
      'Pendekatan Kompleks Wilayah (Kombinasi analisis spasial keruangan dan ekologi)',
      'Pendekatan Keruangan murni tanpa memperhatikan aktivitas manusia',
      'Pendekatan Kelingkungan murni tanpa memperhatikan pola persebaran ruang',
      'Prinsip Deskripsi statistik semata',
      'Konsep Aglomerasi industri',
    ],
    correctIndex: 0,
    explanation:
      'Pendekatan Kompleks Wilayah (Regional Complex Approach) menggabungkan analisis keruangan (diferensiasi areal lokasi) dengan analisis ekologis (interaksi manusia dengan lingkungannya), sangat ideal untuk fenomena lintas wilayah yang kompleks.',
    trapExplanation:
      'Pendekatan Keruangan hanya menyoroti distribusi titik/ruang; Ekologis hanya fokus hubungan organisme-lingkungan.',
  },
  {
    id: 'q87',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Kabupaten',
    question:
      'Untuk memetakan wilayah Negara Kesatuan Republik Indonesia yang membentang di sepanjang garis khatulistiwa ekuatorial, bidang proyeksi peta yang paling tepat dengan distorsi luas dan bentuk paling minimal adalah...',
    options: [
      'Proyeksi Silinder Normal (Cylindrical Projection)',
      'Proyeksi Kerucut Normal (Conical Projection)',
      'Proyeksi Azimuthal / Zenital Polar',
      'Proyeksi Kerucut Transversal',
      'Proyeksi Azimuthal Gnomonik',
    ],
    correctIndex: 0,
    explanation:
      'Proyeksi Silinder Normal menyinggung permukaan bumi tepat di sepanjang garis ekuator (khatulistiwa). Oleh karena itu, daerah tropis ekuatorial seperti Indonesia memiliki distorsi skala, sudut, dan bentuk paling kecil ketika dipetakan menggunakan silinder normal.',
    trapExplanation:
      'Proyeksi Kerucut cocok untuk lintang sedang 45°, sedangkan Proyeksi Azimuthal cocok untuk daerah kutub.',
  },
  {
    id: 'q88',
    moduleId: 'meteorologi-klimatologi',
    ksrCategory: 'Meteorologi dan Klimatologi',
    difficulty: 'Kabupaten',
    question:
      'Lapisan ozon (O3) yang berfungsi menyerap radiasi sinar ultraviolet (UV-B) berbahaya dari matahari sehingga memungkinkan kehidupan berkembang di bumi terkonsentrasi pada lapisan...',
    options: [
      'Stratosfer (ketinggian 15-35 km)',
      'Troposfer (ketinggian 0-12 km)',
      'Mesosfer (ketinggian 50-85 km)',
      'Termosfer (ketinggian 85-500 km)',
      'Eksosfer (ketinggian >500 km)',
    ],
    correctIndex: 0,
    explanation:
      'Lapisan ozonosfer berada di stratosfer bawah hingga tengah. Penyerapan foton UV oleh molekul ozon melepaskan energi panas yang menyebabkan fenomena inversi termal khas stratosfer (suhu justru naik seiring ketinggian).',
    trapExplanation:
      'Di troposfer, ozon permukaan justru bertindak sebagai polutan sekunder beracun (fotokimia smog).',
  },
  {
    id: 'q89',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Kabupaten',
    question:
      'Danau tapal kuda (Oxbow lake) yang sering dijumpai di dataran banjir sungai bagian hilir terbentuk melalui mekanisme...',
    options: [
      'Erosi lateral dan terpotongnya leher kelokan sungai meander pada saat debit air banjir meluap menerobos jalur lurus baru',
      'Runtuhnya atap gua kapur di kawasan karst',
      'Ledakan letusan freatik gunung api di pinggir sungai',
      'Pergeseran sesar transform horizontal yang membendung aliran air',
      'Pencairan kantong gletser es bawah tanah di daerah permafrost',
    ],
    correctIndex: 0,
    explanation:
      'Meander sungai terus mengalami erosi di tebing luar (cut bank) dan deposisi di tebing dalam (point bar), menyebabkan kelokan semakin melingkar mendekat. Saat banjir besar, arus sungai menerobos leher sempit meander mengambil jalur terpendek, meninggalkan kelokan lama terputus membentuk danau oxbow.',
    trapExplanation:
      'Oxbow lake adalah murni bentukan fluvial dinamis, bukan tektonik atau karst.',
  },
  {
    id: 'q90',
    moduleId: 'sumberdaya',
    ksrCategory: 'Sumberdaya dan Manajemen Sumberdaya',
    difficulty: 'Provinsi',
    question:
      'Zona transisi biogeografis fauna di Indonesia yang memiliki karakteristik endemisme unik dan terisolasi antara Paparan Sunda dan Paparan Sahul dinamakan...',
    options: [
      'Zona Wallacea (Kepulauan Wallacea)',
      'Wilayah Neotropik Sunda',
      'Bioma Paleartik Tropika',
      'Zona Dangkalan Maluku',
      'Cekungan Sahul Timur',
    ],
    correctIndex: 0,
    explanation:
      'Wallacea (mencakup Sulawesi, Nusa Tenggara, dan Maluku) merupakan zona kepulauan laut dalam yang tidak pernah tersambung ke Benua Asia maupun Australia saat zaman es glasial. Hal ini melahirkan fauna endemik khas peralihan seperti Anoa, Babirusa, Burung Maleo, dan Komodo.',
    trapExplanation:
      'Paparan Sunda dihuni fauna Asiatis (gajah, harimau, badak); Paparan Sahul dihuni fauna Australis (kangguru pohon, kasuari, cenderawasih).',
  },
  {
    id: 'q91',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Provinsi',
    question:
      'Dalam analisis Sistem Informasi Geografis (SIG), fungsi analisis spasial yang paling tepat digunakan untuk menentukan rute evakuasi tercepat mobil ambulans menuju rumah sakit adalah...',
    options: [
      'Network Analysis (Analisis Jaringan)',
      'Buffering (Analisis Jangkauan Radius)',
      'Overlay Union (Tumpang Susun Poligon)',
      'Interpolasi Spasial Kriging',
      'Digital Elevation Model Slicing',
    ],
    correctIndex: 0,
    explanation:
      'Network Analysis memproses topologi jaringan garis (vektor jalan raya, pipa air, kabel listrik) dengan memperhitungkan jarak tempuh, arah satu arah (one-way), kecepatan rata-rata, dan hambatan kemacetan untuk mencari rute paling optimal (shortest/fastest path).',
    trapExplanation:
      'Buffering menghasilkan zona radius melingkar; Overlay menumpuk layer tema peta.',
  },
  {
    id: 'q92',
    moduleId: 'geografi-kota',
    ksrCategory: 'Geografi Kota dan Kewilayahan',
    difficulty: 'Kabupaten',
    question:
      'Pola permukiman penduduk di kawasan perdesaan yang rumah-rumahnya berderet memanjang mengikuti alur tanggul sungai, jalur jalan raya protokol, atau garis pantai tergolong ke dalam pola...',
    options: [
      'Pola Linier (Memanjang)',
      'Pola Memusat (Nucleated / Terkonsentrasi)',
      'Pola Tersebar (Dispersed / Acak)',
      'Pola Radial Sirkular',
      'Pola Grid Kotak-kotak',
    ],
    correctIndex: 0,
    explanation:
      'Pola linier terbentuk karena masyarakat beradaptasi mencari kemudahan akses transportasi (sepanjang jalan raya atau sungai navigasi) atau kemudahan sumber daya melaut (sepanjang garis pantai nelayan).',
    trapExplanation:
      'Pola memusat biasanya mengelilingi mata air atau fasilitas bersama; pola tersebar di daerah karst berbukit-bukit terjal.',
  },
  {
    id: 'q93',
    moduleId: 'oseanografi-hidrologi',
    ksrCategory: 'Oseanografi dan Hidrologi',
    difficulty: 'Kabupaten',
    question:
      'Menurut Konvensi Hukum Laut Internasional (UNCLOS 1982), batas Zona Ekonomi Eksklusif (ZEE) suatu negara pantai diukur sejauh...',
    options: [
      '200 mil laut dari garis pangkal kepulauan terluar',
      '12 mil laut dari garis pangkal',
      '24 mil laut dari garis pangkal',
      '350 mil laut dari batas paparan benua',
      '100 mil laut dari zona batas surut terendah',
    ],
    correctIndex: 0,
    explanation:
      'Batas zonasi maritim UNCLOS 1982: Laut Teritorial = 12 mil laut (kedaulatan mutlak penuh); Zona Tambahan = 24 mil laut (fiskal/imigrasi); ZEE = 200 mil laut (hak berdaulat eksplorasi dan eksploitasi SDA hayati & non-hayati).',
    trapExplanation:
      'Jangan tertukar antara Laut Teritorial (12 mil) dengan ZEE (200 mil).',
  },
  {
    id: 'q94',
    moduleId: 'geomorfologi',
    ksrCategory: 'Geomorfologi dan Dinamika Bentang Alam',
    difficulty: 'Kabupaten',
    question:
      'Bentukan bukit pasir eolian di kawasan gurun yang menyerupai bentuk bulan sabit dengan lereng landai menghadap arah datangnya angin dan dua tanduk meruncing mengarah ke hilir dinamakan...',
    options: [
      'Duna Barchan (Barchan Sand Dune)',
      'Duna Seif (Longitudinal dune)',
      'Duna Bintang (Star dune)',
      'Endapan Loess',
      'Yardang batuan',
    ],
    correctIndex: 0,
    explanation:
      'Barchan adalah duna pasir sabit asimetris yang terbentuk di daerah dengan pasokan pasir terbatas dan arah hembusan angin konstan searah. Sisi cembung yang landai menghadap angin (windward/stoss), sedangkan dua ujung tanduknya bergerak maju searah tiupan angin di sisi terjal (slipface).',
    trapExplanation:
      'Duna seif memanjang sejajar angin; duna bintang terbentuk oleh angin multidireksional yang berputar dari segala arah.',
  },
  {
    id: 'q95',
    moduleId: 'geografi-pembangunan',
    ksrCategory: 'Geografi Pembangunan dan Teori Keruangan',
    difficulty: 'Provinsi',
    question:
      'Perbedaan mendasar antara Wilayah Formal (Formal Region) dan Wilayah Fungsional (Nodal Region) dalam perencanaan keruangan adalah...',
    options: [
      'Wilayah formal didasarkan pada keseragaman homogenitas kriteria fisik atau sosial tertentu, sedangkan wilayah fungsional didasarkan pada heterogenitas yang terikat oleh jaringan interaksi dan arus simpul pusat',
      'Wilayah formal selalu memiliki batas administratif yang kabur, sedangkan wilayah fungsional memiliki batas fisik permanen',
      'Wilayah formal hanya berlaku untuk kawasan perkotaan metropolitan, sedangkan wilayah fungsional khusus pedesaan',
      'Wilayah formal diatur oleh pasar modal swasta, sedangkan wilayah fungsional diatur oleh undang-undang kehutanan',
      'Tidak ada perbedaan substansial antara keduanya selain penyebutan nama',
    ],
    correctIndex: 0,
    explanation:
      'Wilayah Formal (homogen) memiliki kriteria tunggal seragam (misal Wilayah Iklim Af, Kawasan Pertanian Padi Sawah, Pegunungan Karst). Wilayah Fungsional (nodal) bersifat heterogen namun terhubung erat oleh aliran manusia, barang, dan informasi yang memusat ke satu simpul inti (misal Jabodetabekpunjur).',
    trapExplanation:
      'Formal bukan berarti kaku resmi secara hukum kenegaraan, melainkan mengacu pada keseragaman atribut (uniformity).',
  },
  {
    id: 'q96',
    moduleId: 'lingkungan-sdgs',
    ksrCategory: 'Lingkungan dan Pembangunan Berkelanjutan',
    difficulty: 'Kabupaten',
    question:
      'Prinsip etika antargenerasi dalam konsep Pembangunan Berkelanjutan (Sustainable Development) mengamanatkan bahwa...',
    options: [
      'Pemanfaatan sumber daya alam saat ini harus memenuhi kebutuhan generasi masa kini tanpa mengorbankan hak pemenuhan kebutuhan generasi masa depan',
      'Seluruh eksploitasi mineral tambang bumi harus dihentikan total detik ini juga',
      'Pembangunan industri manufaktur diutamakan melampaui pelestarian lingkungan hidup demi mengejar pertumbuhan PDB',
      'Generasi masa depan tidak perlu diperhitungkan karena teknologi masa depan akan menemukan pengganti SDA yang habis',
      'Hanya negara-negara maju yang berkewajiban menjaga kelestarian keanekaragaman hayati',
    ],
    correctIndex: 0,
    explanation:
      'Definisi klasik Brundtland Commission (Our Common Future, 1987) menegaskan bahwa pembangunan berkelanjutan adalah pembangunan yang mampu mencukupi kebutuhan generasi sekarang tanpa mengurangi kemampuan generasi yang akan datang untuk memenuhi kebutuhan mereka sendiri.',
    trapExplanation:
      'Pembangunan berkelanjutan tidak anti-pembangunan; intinya adalah kesetimbangan pilar ekonomi, sosial, dan lingkungan hidup.',
  },
  {
    id: 'q97',
    moduleId: 'kependudukan',
    ksrCategory: 'Kependudukan dan Dinamika Demografi',
    difficulty: 'Kabupaten',
    question:
      'Masalah kependudukan paling mendesak yang dihadapi Indonesia terkait pemerataan pembangunan keruangan adalah...',
    options: [
      'Ketimpangan persebaran penduduk yang ekstrem, di mana lebih dari 55% total penduduk terkonsentrasi memadati Pulau Jawa yang hanya mencakup ~7% luas daratan nasional',
      'Jumlah total penduduk Indonesia yang mengalami penurunan drastis setiap tahunnya',
      'Rasio jenis kelamin (Sex Ratio) yang sangat tidak seimbang di mana pria 10 kali lipat wanita',
      'Tingkat urbanisasi yang bernilai nol persen di seluruh provinsi luar Jawa',
      'Ketiadaan kelompok penduduk usia produktif akibat penuaan populasi ekstrem',
    ],
    correctIndex: 0,
    explanation:
      'Kepadatan dan persebaran penduduk di Indonesia sangat timpang. Pulau Jawa menampung lebih dari 150 juta jiwa penduduk dengan kepadatan melebihi 1.100 jiwa/km2, sementara pulau-pulau besar kaya SDA seperti Kalimantan, Papua, dan Maluku memiliki kepadatan penduduk yang masih sangat rendah.',
    trapExplanation:
      'Jumlah penduduk Indonesia masih terus bertambah (bukan menurun) dengan struktur usia muda yang besar.',
  },
  {
    id: 'q98',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Kabupaten',
    question:
      'Pada peta topografi terbitan Badan Informasi Geospasial (BIG), interval kontur ketinggian antar dua garis kontur yang berdekatan (Contour Interval / CI) tercatat sebesar 25 meter. Berapakah skala angka dari peta topografi tersebut?',
    options: [
      '1 : 50.000',
      '1 : 25.000',
      '1 : 100.000',
      '1 : 250.000',
      '1 : 10.000',
    ],
    correctIndex: 0,
    formulaUsed: 'Skala = 2.000 * CI',
    explanation:
      'Rumus standar kontur interval untuk peta topografi Indonesia adalah: CI = (1 / 2.000) * Penyebut Skala. Maka Penyebut Skala = 2.000 * CI = 2.000 * 25 = 50.000. Jadi skala peta adalah 1 : 50.000.',
    trapExplanation:
      'Rumus pengali CI adalah 2.000, bukan 1.000 atau 100!',
  },
  {
    id: 'q99',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Kabupaten',
    question:
      'Ketika membaca peta topografi, garis-garis kontur yang digambarkan semakin berhimpitan dan saling mendekat satu sama lain mengindikasikan karakteristik medan berupa...',
    options: [
      'Lereng medan yang sangat terjal, curam, dan memiliki potensi kerawanan longsor tinggi',
      'Dataran aluvial yang sangat landai dan datar',
      'Kawasan cekungan danau air tawar yang tenang',
      'Peneplain dataran rendah hasil erosi lanjut',
      'Hutan bakau pesisir pantai berlumpur',
    ],
    correctIndex: 0,
    explanation:
      'Garis kontur menghubungkan titik-titik dengan elevasi ketinggian yang sama. Jika jarak horizontal antar garis kontur sangat dekat (garis berhimpitan), berarti terjadi perbedaan elevasi vertikal yang sangat curam dalam jarak datar yang sempit (tebing terjal/jurang).',
    trapExplanation:
      'Dataran landai justru ditandai oleh garis kontur yang berjauhan / sangat renggang.',
  },
  {
    id: 'q100',
    moduleId: 'kartografi-sig',
    ksrCategory: 'Kartografi dan Sistem Informasi Geografis',
    difficulty: 'Provinsi',
    question:
      'Pada sebuah peta kontur pegunungan, terdapat pola garis-garis kontur yang membentuk lekukan huruf "V". Jika ujung lancip huruf "V" tersebut menunjuk ke arah elevasi angka ketinggian yang lebih tinggi, maka bentukan relief alamiah yang digambarkan adalah...',
    options: [
      'Lembah aliran sungai (sungai mengalir berlawanan dengan arah lancip "V", yaitu mengalir menuju elevasi rendah)',
      'Punggungan bukit yang menonjol keluar',
      'Puncak kerucut gunung api aktif (kawah maar)',
      'Dataran tinggi plateau horizontal',
      'Depresi lubang karst tertutup (sinkhole)',
    ],
    correctIndex: 0,
    explanation:
      'Hukum Rule of V pada kartografi geologi: Garis kontur yang memotong lembah sungai akan membentuk lekukan huruf "V" di mana ujung lancip V SELALU menunjuk ke arah hulu (elevasi lebih tinggi), karena dasar sungai di lembah telah tererosi lebih dalam dibanding lereng sekitarnya.',
    trapExplanation:
      'Sebaliknya, jika ujung lancip huruf "V" menunjuk ke arah elevasi LEBIH RENDAH, bentukan tersebut adalah PUNGGUNGAN BUKIT (ridge/spur), bukan lembah sungai!',
  },
];
