import React from 'react';
import { ArrowRight, Terminal, Check, Layers, Cpu, Disc3 } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/mockData';
import { CategoryInfo } from '../types';

interface CategorySectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#0d1117] relative border-b border-[#7197bc]/20">
      
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-ide-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7197bc]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#7197bc] rounded-full inline-block animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7197bc] font-semibold">
                KATEGORI PRODUK UTAMA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tiga Pilar Komponen Presisi MS Otomotif
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Komponen onderdil motor dengan spesifikasi teknis tinggi, siap penuhi kebutuhan grosir toko onderdil dan bengkel resmi di seluruh Indonesia.
          </p>
        </div>

        {/* 3 Main Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES_DATA.map((cat, index) => {
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="group relative rounded-xl bg-[#12161f]/80 border border-[#7197bc]/20 overflow-hidden transition-all duration-300 hover:border-[#7197bc]/70 hover:shadow-[0_0_30px_rgba(113,151,188,0.2)] flex flex-col cursor-pointer"
                title={`Buka katalog kategori ${cat.name}`}
              >
                {/* Visual Top Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7197bc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Header ala Editor Tab */}
                <div className="px-4 py-2.5 bg-[#161c28]/90 border-b border-[#7197bc]/15 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#7197bc]" />
                    <span className="text-slate-300 text-[11px] truncate max-w-[180px]">
                      {cat.techCode}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    READY ({cat.stockCount.toLocaleString('id-ID')} pcs)
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-[#12161f]/20 to-transparent" />
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-mono text-[#7197bc] tracking-wider uppercase">
                      0{index + 1}. KATEGORI DISTRIBUTOR
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  {/* Terminal / Code-like Spec Matrix */}
                  <div className="p-3 rounded bg-[#0d1117] border border-[#7197bc]/20 font-mono text-xs space-y-1.5">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800">
                      <span className="text-[#7197bc] font-semibold">// SPECS_INSPECTION</span>
                      <span className="text-slate-500">ISO 9001:2015</span>
                    </div>
                    {cat.highlightSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center text-slate-300 text-[11px]">
                        <span className="text-[#7197bc] mr-1.5">›</span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular Models List */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5">
                      Varian Populer:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.popularModels.map((model, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161c28] text-slate-300 border border-slate-700/60"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectCategory(cat.name)}
                    className="w-full mt-2 py-2.5 px-4 text-xs font-semibold rounded bg-[#161c28] hover:bg-[#7197bc] text-[#7197bc] hover:text-[#0d1117] border border-[#7197bc]/40 hover:border-[#7197bc] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Eksplor Seri {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
