import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Users, 
  Award,
  Truck,
  ArrowRight
} from 'lucide-react';
import { DISTRIBUTOR_STATS } from '../data/mockData';

interface AboutSectionProps {
  onExploreShop: () => void;
  onContactUs: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreShop, onContactUs }) => {
  const qcSteps = [
    {
      title: 'Uji Toleransi Mekanis CNC',
      desc: 'Pengukuran ketepatan venturi karburator dan lubang piston kaliper hingga skala ±0.015mm menggunakan micrometer 3D.',
      code: 'STAGE_01::DIMENSIONAL_SCAN'
    },
    {
      title: 'Uji Kekerasan & Salt-Spray As Skok',
      desc: 'Pengujian lapisan hard chrome selama >96 jam anti korosi serta kekerasan baja mencapai HRC 58-62 menjamin tidak bocor oli.',
      code: 'STAGE_02::SURFACE_HARDNESS'
    },
    {
      title: 'Uji Tekanan Hidrolik Kaliper',
      desc: 'Pengetesan kebocoran seal dan daya tahan tekanan minyak rem hingga 80 bar untuk memastikan rem tidak amblas saat pengereman darurat.',
      code: 'STAGE_03::PRESSURE_INTEGRITY'
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-[#0d1117] relative border-b border-[#7197bc]/20">
      
      {/* Background Ide Grid */}
      <div className="absolute inset-0 bg-ide-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
        
        {/* Header Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7197bc] inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7197bc] font-semibold">
                PROFIL DISTRIBUTOR
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Pionir Distribusi Onderdil &amp; Sparepart Motor Presisi di Indonesia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Didirikan dengan visi menyediakan suku cadang motor berstandar presisi tinggi tanpa kompromi kualitas, <strong>MS Otomotif</strong> telah tumbuh menjadi mitra distribusi strategis bagi lebih dari 850 toko onderdil, bengkel servis, dan komunitas otomotif di seluruh nusantara.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kami memfokuskan suplai pada tiga komponen vital kendaraan roda dua: <strong>Sistem Pengabutan Bahan Bakar (Karburator)</strong>, <strong>Sistem Suspensi Depan (As Skok)</strong>, dan <strong>Sistem Pengereman Hidrolik (Kaliper)</strong> yang memerlukan akurasi manufaktur terbaik demi keselamatan pengendara.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onExploreShop}
                className="px-5 py-2.5 rounded-lg bg-[#7197bc] text-[#0d1117] font-semibold text-xs hover:bg-[#86abd1] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Buka Katalog Suku Cadang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onContactUs}
                className="px-5 py-2.5 rounded-lg bg-[#161c28] border border-[#7197bc]/30 text-slate-200 text-xs font-medium hover:border-[#7197bc] transition-all cursor-pointer"
              >
                Daftar Jadi Mitra Toko
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden bg-[#12161f] border border-[#7197bc]/30 shadow-2xl">
              <div className="h-8 bg-[#161c28] border-b border-[#7197bc]/20 px-3 flex items-center text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-[#7197bc] mr-2" />
                <span>WAREHOUSE_CENTRAL_FACILITY.LOG</span>
              </div>
              <img
                src="/src/assets/images/hero_warehouse_distributor_1791165793297.jpg"
                alt="Fasilitas Gudang Distribusi MS Otomotif"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-[#12161f] font-mono text-xs text-slate-300 space-y-1">
                <div className="text-[#7197bc] font-semibold">Pusat Distribusi Utama: Cikarang &amp; Surabaya</div>
                <div className="text-[11px] text-slate-400">Kapasitas penyimpanan 5.000+ SKU siap kirim dalam 24 jam.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Control Standard */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono text-[#7197bc] uppercase tracking-wider mb-1">
              STANDARDISASI MUTU &amp; QC
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Inspeksi Ketat Sebelum Masuk Rak Gudang
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Setiap batch produksi onderdil melewati 3 gerbang verifikasi teknis sehingga toko dan bengkel rekanan kami terlindungi dari komplain pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qcSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#12161f] border border-[#7197bc]/20 relative space-y-3"
              >
                <div className="text-[10px] font-mono text-[#7197bc] font-bold">
                  {step.code}
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
                <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>QC PASSED GUARANTEED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Distribution Hubs */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12161f] border border-[#7197bc]/25 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#7197bc] uppercase tracking-wider mb-1">
                JARINGAN EKSPEDISI NASIONAL
              </div>
              <h3 className="text-xl font-bold text-white">
                Dua Hub Distribusi Strategis di Pulau Jawa
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              COVERAGE: 34 PROVINSI // 480+ KOTA/KABUPATEN
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#0d1117] border border-[#7197bc]/20 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#7197bc]" />
                <span>Central Hub 01 - Cikarang Barat (Bekasi)</span>
              </div>
              <p className="text-xs text-slate-300">
                Kawasan Industri MM2100 Blok C-12, Cikarang Barat, Kabupaten Bekasi.
              </p>
              <div className="text-[11px] font-mono text-slate-400">
                Fokus Pengiriman: Jabodetabek, Banten, Jawa Barat, dan Pulau Sumatera.
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#0d1117] border border-[#7197bc]/20 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#7197bc]" />
                <span>Regional Hub 02 - Rungkut Industri (Surabaya)</span>
              </div>
              <p className="text-xs text-slate-300">
                Kompleks Pergudangan SIER Blok D-08, Rungkut, Surabaya, Jawa Timur.
              </p>
              <div className="text-[11px] font-mono text-slate-400">
                Fokus Pengiriman: Jawa Tengah, Jawa Timur, Bali, NTB/NTT, Sulawesi, dan Kalimantan.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
