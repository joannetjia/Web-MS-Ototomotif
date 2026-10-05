import { Product, CategoryInfo } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-karburator',
    badge: 'NEW ARRIVAL // B2B READY',
    title: 'Karburator Racing High Performance',
    subtitle: 'Presisi aliran venturi CNC dengan efisiensi bahan bakar maksimal dan akselerasi instan tanpa jeda.',
    specs: [
      { label: 'Tipe Venturi', value: 'PE / PWK 28-34mm' },
      { label: 'Bahan Material', value: 'Alloy A380 High Density' },
      { label: 'Toleransi CNC', value: '±0.015 mm' },
      { label: 'Kompatibilitas', value: '110cc - 250cc Racing/Daily' }
    ],
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    categoryTarget: 'Karburator',
    codeSnippet: 'const carbConfig = { venturi: 28, jetMain: 115, jetPilot: 38, material: "CNC Alloy" };'
  },
  {
    id: 'slide-kaliper',
    badge: 'SAFETY & BRAKING // RACING SPEC',
    title: 'Kaliper Rem Dual Piston Precision',
    subtitle: 'Daya cengkeram hidrolik terdistribusi merata dengan ketahanan panas ekstrem saat pengereman intensif.',
    specs: [
      { label: 'Konfigurasi', value: 'Dual Piston Symmetrical 34mm' },
      { label: 'Konstruksi', value: 'Forged Billet 6061-T6' },
      { label: 'Brake Pad', value: 'Copper Sintered Composite' },
      { label: 'Finishing', value: 'Hard Anodized Titanium Blue' }
    ],
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    categoryTarget: 'Kaliper',
    codeSnippet: 'const brakePressure = { clampForce: "4.8kN", pistonDiameter: "34mm", thermalThreshold: "650°C" };'
  },
  {
    id: 'slide-as-skok',
    badge: 'SUSPENSION // ULTRA SMOOTH',
    title: 'As Skok Depan Chrome Plated',
    subtitle: 'Lapisan Hard Chrome tingkat kekerasan tinggi untuk meminimalkan friksi dan mencegah kebocoran oli suspensi.',
    specs: [
      { label: 'Lapisan Permukaan', value: 'Hard Chrome 25-30 Micron' },
      { label: 'Kekerasan Baja', value: 'HRC 58-62 High Carbon' },
      { label: 'Surface Roughness', value: 'Ra < 0.08 µm Mirror Finish' },
      { label: 'Aplikasi', value: 'Honda, Yamaha, Suzuki, Kawasaki' }
    ],
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    categoryTarget: 'As Skok',
    codeSnippet: 'const shockSpec = { diameter: "26mm/31mm", chromeLayer: "28µm", tolerance: "H6 precision" };'
  }
];

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'karburator',
    name: 'Karburator',
    shortDesc: 'Sistem pengabutan presisi tinggi untuk motor matic, bebek, dan sport dengan kalibrasi jetting pabrik akurat.',
    techCode: 'SYS_FUEL_ATOMIZATION::PE_PWK_SERIES',
    stockCount: 1420,
    popularModels: ['PE 28 Black Edition', 'PWK 32 Air Striker', 'PE 24 Daily Precision'],
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    highlightSpecs: ['CNC Needle Slide', 'Jetting Ready Kit', 'Zero Leakage Float Bowl']
  },
  {
    id: 'as-skok',
    name: 'As Skok',
    shortDesc: 'Batang suspensi teleskopik hard-chromed tahan gores, tahan karat, dan presisi tinggi menjamin kestabilan handling.',
    techCode: 'SYS_SUSPENSION_PISTON::HARD_CHROME_HRC60',
    stockCount: 2180,
    popularModels: ['As Skok Vario/Beat 26mm', 'As Skok NMAX/Aerox 30mm', 'As Skok Ninja 150 33mm'],
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    highlightSpecs: ['Micro-Crack Chrome Finish', 'Anti-Bend Steel Alloy', 'Double Oil-Seal Ready']
  },
  {
    id: 'kaliper',
    name: 'Kaliper',
    shortDesc: 'Master kaliper pengereman hidrolik presisi dengan responsif instan dan pelepasan panas cepat untuk keamanan berkendara.',
    techCode: 'SYS_HYDRAULIC_BRAKE::BILLET_DUAL_PISTON',
    stockCount: 980,
    popularModels: ['Kaliper Dual Piston 34mm', 'Kaliper Monoblock Radial', 'Kaliper OEM Replacement'],
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    highlightSpecs: ['6061 Billet Aluminum', 'High Thermal Dissipation', 'Stainless Steel Bleed Screw']
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-01',
    name: 'Karburator Racing PE 28 Super Flow',
    category: 'Karburator',
    sku: 'MS-CRB-PE28-SF',
    priceRetail: 385000,
    priceWholesale: 295000,
    minWholesaleQty: 5,
    stockStatus: 'ready',
    stockCount: 240,
    material: 'Aluminium Die-Casting Grade A',
    warranty: 'Garansi Resmi 6 Bulan',
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    description: 'Karburator tipe PE 28 dengan desain skep chrome anti baret dan lubang venturi yang di-finish presisi untuk suplai udara optimal. Sangat mudah di-setting baik untuk harian maupun touring balap.',
    featured: true,
    compatibility: ['Honda Beat/Vario (Injeksi ke Karbu)', 'Yamaha RX-King', 'Suzuki Satria FU', 'Yamaha Jupiter Z / MX', 'Kawasaki KLX 150'],
    specs: [
      { label: 'Diameter Venturi', value: '28 mm' },
      { label: 'Ukuran Main Jet', value: '#115 (Include Cadangan #110, #120)' },
      { label: 'Ukuran Pilot Jet', value: '#38 (Include Cadangan #35, #40)' },
      { label: 'Finishing Body', value: 'Satin Grey Anodized' },
      { label: 'Skep Pelampung', value: 'Hard Chrome Coating' }
    ]
  },
  {
    id: 'prod-02',
    name: 'Karburator PWK 32 Air Striker Pro',
    category: 'Karburator',
    sku: 'MS-CRB-PWK32-AS',
    priceRetail: 520000,
    priceWholesale: 410000,
    minWholesaleQty: 3,
    stockStatus: 'ready',
    stockCount: 115,
    material: 'Full CNC Billet Finish',
    warranty: 'Garansi Resmi 6 Bulan',
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    description: 'Karburator kasta tertinggi untuk kebutuhan kompetisi dan bore-up mesin 180cc - 250cc. Dilengkapi sirip Air Striker pengarah aliran gas untuk torsi putaran bawah yang bertenaga.',
    featured: true,
    compatibility: ['Yamaha RX-King', 'Kawasaki Ninja 150 R/RR', 'Honda Tiger / MegaPro', 'Yamaha Scorpio 225'],
    specs: [
      { label: 'Diameter Venturi', value: '32 mm' },
      { label: 'Fitur Khusus', value: 'Dual Air Striker Fin' },
      { label: 'Tipe Skep', value: 'D-Slide Semi-Flat Chromium' },
      { label: 'Choke System', value: 'Manual Pull Knob' }
    ]
  },
  {
    id: 'prod-03',
    name: 'Kaliper Rem Dual Piston Precision Billet 34mm',
    category: 'Kaliper',
    sku: 'MS-BRK-CAL-2P34',
    priceRetail: 420000,
    priceWholesale: 330000,
    minWholesaleQty: 5,
    stockStatus: 'ready',
    stockCount: 180,
    material: 'Forged Billet Aluminium 6061-T6',
    warranty: 'Garansi Resmi 1 Tahun',
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    description: 'Kaliper rem cakram depan dengan 2 piston besar simetris 34mm. Memberikan modulasi pengereman yang progresif, tidak mudah blong walau dipakai dalam kecepatan tinggi terus-menerus.',
    featured: true,
    compatibility: ['Honda Vario 125/150/160', 'Honda Beat / Scoopy', 'Yamaha NMAX / Aerox (Front)', 'Yamaha Mio / Soul GT', 'Honda PCX 150/160'],
    specs: [
      { label: 'Piston Diameter', value: '2 x 34 mm Hard Coated' },
      { label: 'Brake Fluid', value: 'DOT 3 / DOT 4 Compatible' },
      { label: 'Material Kampas', value: 'Semi-Metallic Sintered' },
      { label: 'Jarak Lubang Baut', value: '84 mm Pitch Universal' }
    ]
  },
  {
    id: 'prod-04',
    name: 'Kaliper Radial Monoblock 4-Piston Race Spec',
    category: 'Kaliper',
    sku: 'MS-BRK-CAL-4RAD',
    priceRetail: 790000,
    priceWholesale: 640000,
    minWholesaleQty: 3,
    stockStatus: 'limited',
    stockCount: 42,
    material: 'Monoblock Aircraft Alloy',
    warranty: 'Garansi Resmi 1 Tahun',
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    description: 'Kaliper radial 4-piston monoblock untuk pengereman ekstrem. Desain satu kesatuan solid meminimalisir flex saat ditekan dengan tuas rem bertekanan tinggi.',
    featured: true,
    compatibility: ['Yamaha XMAX 250', 'Kawasaki Ninja 250 / Z250', 'Yamaha R25 / MT25', 'Honda CBR 250RR'],
    specs: [
      { label: 'Piston Count', value: '4 Piston (2x30mm + 2x27mm)' },
      { label: 'Pitch Dudukan', value: '100 mm Radial Mount' },
      { label: 'Baut Banjo', value: 'M10 x 1.0 Pitch' }
    ]
  },
  {
    id: 'prod-05',
    name: 'As Skok Depan Hard Chrome 26mm (Beat / Vario Series)',
    category: 'As Skok',
    sku: 'MS-SUS-ASK-26H',
    priceRetail: 165000,
    priceWholesale: 128000,
    minWholesaleQty: 10,
    stockStatus: 'ready',
    stockCount: 520,
    material: 'High-Carbon Steel Tubing + Hard Chrome',
    warranty: 'Garansi Anti Baret 6 Bulan',
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    description: 'Batang pipa as shockbreaker depan motor matic Honda dengan ketebalan lapisan kromium 28 mikron. Teruji tidak melengkung saat menghantam jalan berlubang dan menjaga seal oli tetap awet.',
    featured: true,
    compatibility: ['Honda Beat FI / ESP / Street / Deluxe', 'Honda Vario 110 / 125 / 150', 'Honda Scoopy All Gen', 'Honda Genio'],
    specs: [
      { label: 'Diameter Luar', value: '26.00 mm (Presisi H7)' },
      { label: 'Panjang Total', value: '385 mm' },
      { label: 'Tebal Chrome', value: '28 µm Micro-Hardened' },
      { label: 'Kelurusan Batang', value: 'Toleransi lurus < 0.02 mm' }
    ]
  },
  {
    id: 'prod-06',
    name: 'As Skok Depan Hard Chrome 30mm (NMAX / Aerox)',
    category: 'As Skok',
    sku: 'MS-SUS-ASK-30Y',
    priceRetail: 215000,
    priceWholesale: 168000,
    minWholesaleQty: 8,
    stockStatus: 'ready',
    stockCount: 380,
    material: 'High-Tensile Seamless Tube + Hard Chrome',
    warranty: 'Garansi Anti Baret 6 Bulan',
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    description: 'Pipa as sok depan pengganti orisinil Yamaha maxi scooter. Dibuat dari pipa seamless tanpa sambungan internal berstandar OEM Jepang.',
    featured: true,
    compatibility: ['Yamaha NMAX 155 Old / New Connected', 'Yamaha Aerox 155 Connected', 'Yamaha Lexi 125'],
    specs: [
      { label: 'Diameter Luar', value: '30.00 mm' },
      { label: 'Panjang Total', value: '412 mm' },
      { label: 'Ketahanan Korosi', value: 'Salt Spray Test > 96 Jam' }
    ]
  },
  {
    id: 'prod-07',
    name: 'As Skok Depan Titanium Gold 33mm (Ninja 150 / KLX)',
    category: 'As Skok',
    sku: 'MS-SUS-ASK-33TI',
    priceRetail: 345000,
    priceWholesale: 275000,
    minWholesaleQty: 5,
    stockStatus: 'ready',
    stockCount: 160,
    material: 'Titanium Nitride Coated Steel Tube',
    warranty: 'Garansi Anti Baret 1 Tahun',
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    description: 'As shock depan dengan finishing Titanium Nitride warna emas menawan. Koefisien gesekan sangat rendah membuat rebound suspensi lebih lembut dan responsif di medan terjal.',
    featured: false,
    compatibility: ['Kawasaki Ninja 150 R/RR', 'Kawasaki KLX 150 D-Tracker', 'Modifikasi Custom CB / GL'],
    specs: [
      { label: 'Diameter Luar', value: '33.00 mm' },
      { label: 'Lapisan Pelindung', value: 'TiN Gold PVD Coating' },
      { label: 'Tingkat Kekerasan', value: 'HV 2200 Vickers' }
    ]
  },
  {
    id: 'prod-08',
    name: 'Karburator PE 24 Daily Precision Tune',
    category: 'Karburator',
    sku: 'MS-CRB-PE24-DT',
    priceRetail: 330000,
    priceWholesale: 255000,
    minWholesaleQty: 6,
    stockStatus: 'ready',
    stockCount: 290,
    material: 'Alloy Zinc-Aluminium High Precision',
    warranty: 'Garansi Resmi 6 Bulan',
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    description: 'Pilihan terfavorit bengkel untuk pengganti karburator standar motor harian. Sangat hemat bahan bakar, langsam stabil di lampu merah, dan tidak ngempos di tanjakan.',
    featured: false,
    compatibility: ['Honda Grand / Prima / Supra X 100/125', 'Yamaha Vega R / ZR', 'Yamaha Jupiter Z', 'Suzuki Smash / Shogun 125'],
    specs: [
      { label: 'Diameter Venturi', value: '24 mm' },
      { label: 'Main Jet Standar', value: '#100' },
      { label: 'Pilot Jet Standar', value: '#35' },
      { label: 'Konsumsi Bensin', value: 'Optimal Daily Efficiency' }
    ]
  },
  {
    id: 'prod-09',
    name: 'Karburator PWK 28 Sudco Black Racing Series',
    category: 'Karburator',
    sku: 'MS-CRB-PWK28-SUD',
    priceRetail: 480000,
    priceWholesale: 375000,
    minWholesaleQty: 4,
    stockStatus: 'ready',
    stockCount: 160,
    material: 'Hard Black Matte Anodized Alloy',
    warranty: 'Garansi Resmi 6 Bulan',
    image: '/src/assets/images/hero_karburator_racing_1791165747937.jpg',
    description: 'Varian black series dengan lapisan anti karat asam bahan bakar dan skep chrome mirror finish. Responsif pada putaran menengah ke atas tanpa gejala brebet.',
    featured: false,
    compatibility: ['Yamaha RX-King', 'Kawasaki Ninja 150', 'Honda CB/GL 100-200cc', 'Yamaha F1ZR Racing'],
    specs: [
      { label: 'Diameter Venturi', value: '28 mm' },
      { label: 'Finishing Body', value: 'Black Anodized SUDCO Spec' },
      { label: 'Air Striker Fin', value: 'Integrated' },
      { label: 'Needle Setting', value: '5-Step Adjustable Clip' }
    ]
  },
  {
    id: 'prod-10',
    name: 'As Skok Depan Hard Chrome 31mm (CB150R / CBR / Verza)',
    category: 'As Skok',
    sku: 'MS-SUS-ASK-31H',
    priceRetail: 235000,
    priceWholesale: 185000,
    minWholesaleQty: 8,
    stockStatus: 'ready',
    stockCount: 310,
    material: 'Seamless High Carbon Steel + Hard Chrome',
    warranty: 'Garansi Anti Baret 6 Bulan',
    image: '/src/assets/images/hero_as_skok_depan_1791165782166.jpg',
    description: 'Pipa shock depan motor sport naked dan fairing Honda 150cc. Finishing chrome tebal dengan kehalusan permukaan ultra tinggi menjaga suspensi tetap empuk stabil saat kecepatan tinggi.',
    featured: false,
    compatibility: ['Honda CB150R Streetfire (All Gen)', 'Honda CBR 150R Lokal / CBU', 'Honda Verza 150 / CB150 Verza', 'Honda Megapro New'],
    specs: [
      { label: 'Diameter Luar', value: '31.00 mm (Presisi H7)' },
      { label: 'Panjang Total', value: '582 mm' },
      { label: 'Lapisan Chrome', value: '28 µm Mirror Polished' },
      { label: 'Tekuk Uji Beban', value: '> 1,200 kgf Anti Bengkok' }
    ]
  },
  {
    id: 'prod-11',
    name: 'Kaliper Belakang Single Piston OEM Disc Brake',
    category: 'Kaliper',
    sku: 'MS-BRK-CAL-1REAR',
    priceRetail: 275000,
    priceWholesale: 215000,
    minWholesaleQty: 5,
    stockStatus: 'ready',
    stockCount: 220,
    material: 'Cast Aluminium Alloy OEM Grade',
    warranty: 'Garansi Resmi 6 Bulan',
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    description: 'Kaliper rem cakram roda belakang pengganti part bawaan pabrik. Sudah termasuk bracket dudukan besi tebal dan kampas rem terpasang, langsung pasang tanpa ubahan.',
    featured: false,
    compatibility: ['Yamaha NMAX 155 (Rear)', 'Yamaha Aerox Disc Conversion', 'Honda PCX 150/160 (Rear)', 'Honda ADV 150/160 (Rear)', 'Suzuki Satria FU'],
    specs: [
      { label: 'Piston Diameter', value: '32 mm Single Piston' },
      { label: 'Bracket Dudukan', value: 'Included PNP Steel Bracket' },
      { label: 'Minyak Rem', value: 'DOT 3 / DOT 4' },
      { label: 'Finishing', value: 'Dull Grey Anti Corrosion' }
    ]
  },
  {
    id: 'prod-12',
    name: 'Master & Kaliper Rem Dual Channel High Pressure System',
    category: 'Kaliper',
    sku: 'MS-BRK-SET-2CH',
    priceRetail: 690000,
    priceWholesale: 540000,
    minWholesaleQty: 3,
    stockStatus: 'limited',
    stockCount: 55,
    material: 'Forged CNC Billet 6061-T6 + Braided Hose',
    warranty: 'Garansi Resmi 1 Tahun',
    image: '/src/assets/images/hero_kaliper_dual_piston_1791165765903.jpg',
    description: 'Satu set lengkap master rem radial tabung pisah + kaliper 2-piston 34mm + selang rem serat baja tahan panas. Mengurangi gejala handel rem membal saat rem mendadak.',
    featured: false,
    compatibility: ['Honda Vario / Beat / PCX', 'Yamaha NMAX / Aerox', 'Universal Motor Matic & Sport Bebek'],
    specs: [
      { label: 'Master Cylinder', value: 'Radial 14 mm Piston' },
      { label: 'Kaliper', value: '2-Piston 34 mm CNC' },
      { label: 'Selang Rem', value: 'Stainless Braided 95 cm' },
      { label: 'Tabung Minyak', value: 'Smoke Acrylic Reservoir' }
    ]
  }
];

export const DISTRIBUTOR_STATS = [
  { value: '850+', label: 'Bengkel & Toko Rekanan', note: 'Tersebar di 34 Provinsi' },
  { value: '5,000+', label: 'SKU Onderdil Siap Kirim', note: 'Gudang Pusat Cikarang & Surabaya' },
  { value: '99.4%', label: 'Akurasi Pengiriman Part', note: 'Sistem Barcode ERP Terintegrasi' },
  { value: '24 Jam', label: 'B2B Express Dispatch', note: 'Order sebelum pkl 15.00 dikirim hari yang sama' }
];

export const DISTRIBUTOR_PILLARS = [
  {
    id: 'pillar-ori',
    title: 'Garansi Original 100%',
    code: 'SEC_AUTHENTICITY_VERIFIED',
    desc: 'Semua onderdil dipasok langsung dari pabrik manufaktur bersertifikasi ISO 9001. Dilengkapi stiker hologram anti-pemalsuan dan serial number yang dapat dilacak via sistem barcode.',
    features: ['Sertifikat uji pabrik terlampir', 'Garansi tukar unit baru 30 hari', 'Anti onderdil rekondisi / KW']
  },
  {
    id: 'pillar-distributor',
    title: 'Distributor Resmi & Berizin',
    code: 'SYS_LEGAL_DISTRIBUTOR_T1',
    desc: 'MS Otomotif adalah pemegang hak distribusi resmi suku cadang motor di Indonesia dengan legalitas usaha lengkap (NIB, SIUP, Faktur Pajak Resmi untuk mitra B2B).',
    features: ['Faktur Pajak PPN resmi tersedia', 'Kontrak pasokan kuartalan & tahunan', 'Dukungan training teknis bagi bengkel']
  },
  {
    id: 'pillar-logistics',
    title: 'Pengiriman Cepat B2B / B2C',
    code: 'LOG_HIGH_SPEED_FULFILLMENT',
    desc: 'Didukung 2 pusat distribusi (Hub Cikarang & Hub Surabaya) bekerja sama dengan ekspedisi kargo darat, laut, dan udara untuk pengiriman aman sampai depan pintu toko Anda.',
    features: ['Packaging kayu & bubble tebal gratis', 'Tracking resi real-time terintegrasi', 'Ekspedisi kargo murah (JNE Trucking, Dakota, Baraka)']
  },
  {
    id: 'pillar-price',
    title: 'Harga Grosir Bersaing',
    code: 'FIN_TIERED_WHOLESALE_PRICING',
    desc: 'Struktur harga distributor bertingkat yang memberikan marjin keuntungan sehat bagi toko sparepart dan pemilik bengkel servis motor di seluruh Indonesia.',
    features: ['Diskon kuantitas hingga 30% dari HET', 'Plafon tempo bayar (B2B khusus mitra terverifikasi)', 'Pemberitahuan harga stabil tanpa lonjakan liar']
  }
];

export const REGIONAL_REPS = [
  {
    region: 'Jabodetabek & Banten',
    name: 'Bambang Prasetyo',
    role: 'Key Account Manager B2B',
    phone: '+62 812-8890-1120',
    whatsapp: '6281288901120',
    email: 'bambang.sales@msotomotif.co.id'
  },
  {
    region: 'Jawa Barat & Jawa Tengah',
    name: 'Hendri Kurniawan',
    role: 'Area Sales Supervisor',
    phone: '+62 813-7744-8891',
    whatsapp: '6281377448891',
    email: 'hendri.sales@msotomotif.co.id'
  },
  {
    region: 'Jawa Timur, Bali & Luar Pulau',
    name: 'Suryo Wicaksono',
    role: 'National Logistics & Distribution',
    phone: '+62 821-3322-9900',
    whatsapp: '6282133229900',
    email: 'suryo.distribution@msotomotif.co.id'
  }
];
