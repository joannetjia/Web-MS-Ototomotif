import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  TrendingUp, 
  CheckCircle2, 
  Terminal, 
  Warehouse,
  FileCheck2,
  Clock,
  Building2
} from 'lucide-react';
import { DISTRIBUTOR_PILLARS, DISTRIBUTOR_STATS } from '../data/mockData';

interface ValuePropositionProps {
  onContactSales: () => void;
  onExploreCatalog: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  onContactSales,
  onExploreCatalog
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pillar-ori':
        return <ShieldCheck className="w-6 h-6 text-[#7197bc]" />;
      case 'pillar-distributor':
        return <Award className="w-6 h-6 text-[#7197bc]" />;
      case 'pillar-logistics':
        return <Truck className="w-6 h-6 text-[#7197bc]" />;
      case 'pillar-price':
        return <TrendingUp className="w-6 h-6 text-[#7197bc]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#7197bc]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0d1117] relative border-b border-[#7197bc]/20 overflow-hidden">
      
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-ide-grid opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#7197bc]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#12161f] border border-[#7197bc]/30 text-xs font-mono text-[#7197bc] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>SYS_VALUE_PROPOSITION // STANDAR_DISTRIBUSI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Memilih <span className="text-[#7197bc]">MS Otomotif</span>?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Fondasi kemitraan terpercaya bagi ratusan toko onderdil, agen suku cadang, dan bengkel servis motor di seluruh Indonesia.
          </p>
        </div>

        {/* 4 Pillars Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {DISTRIBUTOR_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative p-6 sm:p-7 rounded-xl bg-[#12161f]/80 border border-[#7197bc]/20 hover:border-[#7197bc]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(113,151,188,0.15)] flex flex-col justify-between group"
            >
              {/* Corner accent marker */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500">
                0{idx + 1}
              </div>

              <div>
                {/* Header Icon + Code */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#161c28] border border-[#7197bc]/30 flex items-center justify-center group-hover:border-[#7197bc] group-hover:shadow-[0_0_15px_rgba(113,151,188,0.3)] transition-all">
                    {getIcon(pillar.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#7197bc] block">
                      {pillar.code}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {pillar.desc}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="pt-4 border-t border-[#7197bc]/15 space-y-2">
                {pillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7197bc] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Distributor Warehouse Showcase Banner */}
        <div className="rounded-xl overflow-hidden bg-[#12161f] border border-[#7197bc]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
            <img
              src="/src/assets/images/hero_warehouse_distributor_1791165793297.jpg"
              alt="Gudang Distribusi MS Otomotif Cikarang"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#12161f] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#0d1117]/80 backdrop-blur-md border border-[#7197bc]/30 text-[10px] font-mono text-slate-300">
              HUB_CENTRAL_CIKARANG // 4,500 m²
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-[#7197bc] uppercase tracking-wider mb-1">
                INFRASTRUKTUR &amp; LOGISTIK GUDANG
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Kapasitas Pergudangan Modern dengan Kontrol Kualitas Standar Industri
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Setiap karburator, as skok, dan kaliper yang masuk ke fasilitas MS Otomotif melewati uji sampling toleransi mekanis, kekerasan lapisan kromium, dan kebocoran seal sebelum diberi label barcode resmi.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#7197bc]/15">
              <div className="flex items-start gap-2.5">
                <FileCheck2 className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">ISO 9001:2015</div>
                  <div className="text-slate-400 text-[11px]">Quality Management</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Same-Day Dispatch</div>
                  <div className="text-slate-400 text-[11px]">Order B2B Prioritas</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Building2 className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Faktur Pajak PPN</div>
                  <div className="text-slate-400 text-[11px]">Legalitas 100% Sah</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onContactSales}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117] transition-all cursor-pointer"
              >
                Konsultasi Kemitraan Toko
              </button>
              <button
                onClick={onExploreCatalog}
                className="px-4 py-2 text-xs font-medium rounded bg-[#161c28] hover:bg-[#1f2738] text-slate-200 border border-[#7197bc]/30 transition-all cursor-pointer"
              >
                Cek Ketersediaan Stok
              </button>
            </div>
          </div>
        </div>

        {/* Live Distributor Metrics Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {DISTRIBUTOR_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#12161f]/60 border border-[#7197bc]/15 backdrop-blur-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#7197bc] font-mono tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
