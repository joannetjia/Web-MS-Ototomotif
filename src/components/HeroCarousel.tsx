import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal,
  Zap,
  Boxes
} from 'lucide-react';
import { HERO_SLIDES, PRODUCTS_DATA } from '../data/mockData';
import { Product } from '../types';

interface HeroCarouselProps {
  onSelectProduct: (product: Product) => void;
  onExploreCatalog: () => void;
  onSelectCategory?: (category: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectProduct,
  onExploreCatalog,
  onSelectCategory
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Find corresponding product for the slide
  const matchingProduct = PRODUCTS_DATA.find((p) => p.category === slide.categoryTarget) || PRODUCTS_DATA[0];

  return (
    <div 
      className="relative w-full border-b border-[#7197bc]/20 bg-[#0d1117] bg-ide-grid overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7197bc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#5d82a6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        {/* Top Developer Breadcrumb / Status Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#7197bc]/15 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">MS_DISTRIBUTOR_SYS // v2.6.4</span>
            <span className="text-slate-600">|</span>
            <span className="text-[#7197bc]">{slide.badge}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>SLIDE [{currentSlideIndex + 1}/{HERO_SLIDES.length}]</span>
            <span className="hidden sm:inline">CYCLE: {isPaused ? 'PAUSED' : 'AUTO_6000MS'}</span>
          </div>
        </div>

        {/* Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
          
          {/* Left Column: Product Info & Technical Specs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Category / Sub-badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#7197bc] font-semibold">
                KATALOG UNGGULAN DISTRIBUTOR
              </span>
              <span className="text-slate-600">/</span>
              {onSelectCategory ? (
                <button
                  onClick={() => onSelectCategory(slide.categoryTarget)}
                  className="text-xs font-mono text-slate-300 hover:text-[#7197bc] hover:underline cursor-pointer flex items-center gap-1"
                  title={`Lihat semua produk ${slide.categoryTarget} di Shop`}
                >
                  <span>{slide.categoryTarget}</span>
                  <span className="text-[10px] text-[#7197bc]">›</span>
                </button>
              ) : (
                <span className="text-xs font-mono text-slate-400">
                  {slide.categoryTarget}
                </span>
              )}
            </div>

            {/* Title with Balanced Wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Technical Spec Matrix (Developer Style) */}
            <div className="p-3.5 sm:p-4 rounded-lg bg-[#12161f]/90 border border-[#7197bc]/25 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#7197bc]/15 text-[11px] font-mono text-[#7197bc]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  SPECIFICATION_MATRIX
                </span>
                <span className="text-slate-400">STATUS: IN_STOCK</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                {slide.specs.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-slate-400 text-[11px]">{item.label}</span>
                    <span className="text-slate-200 font-medium font-mono truncate">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectProduct(matchingProduct)}
                className="px-5 py-3 text-sm font-semibold text-[#0d1117] bg-[#7197bc] hover:bg-[#86abd1] rounded-md transition-all shadow-[0_0_20px_rgba(113,151,188,0.35)] flex items-center gap-2 cursor-pointer"
              >
                <span>Lihat Detail Part</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="px-5 py-3 text-sm font-medium text-slate-200 bg-[#161c28] hover:bg-[#1d2433] border border-[#7197bc]/30 hover:border-[#7197bc] rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Boxes className="w-4 h-4 text-[#7197bc]" />
                <span>Lihat Semua Sparepart</span>
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="flex items-center gap-4 pt-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7197bc]" />
                100% Original Factory
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7197bc]" />
                QC Certified
              </span>
            </div>
          </div>

          {/* Right Column: High Quality Product Showcase Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl group">
              
              {/* Outer decorative glowing frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7197bc]/30 via-slate-700/20 to-[#7197bc]/30 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-[#12161f] border border-[#7197bc]/30 shadow-2xl">
                
                {/* Visual Header Bar ala IDE Tab */}
                <div className="h-8 bg-[#161c28] border-b border-[#7197bc]/20 px-3 flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-300 text-[11px] truncate">
                      {matchingProduct.sku}.catalog
                    </span>
                  </div>
                  <div className="text-[10px] text-[#7197bc] font-semibold uppercase">
                    HIGH RES 4K
                  </div>
                </div>

                {/* Main Product Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback container in case of loading fault
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />

                  {/* Quick Price & Stock Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded bg-[#0d1117]/85 backdrop-blur-md border border-[#7197bc]/30 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400 font-mono">HARGA GROSIR (B2B)</div>
                      <div className="text-sm font-bold text-[#7197bc] font-mono tabular-nums">
                        Rp {matchingProduct.priceWholesale.toLocaleString('id-ID')}
                        <span className="text-[10px] font-normal text-slate-400 ml-1">/ unit (min. {matchingProduct.minWholesaleQty} pcs)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProduct(matchingProduct)}
                      className="px-3 py-1.5 bg-[#7197bc]/20 hover:bg-[#7197bc] text-[#7197bc] hover:text-[#0d1117] border border-[#7197bc]/40 rounded text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Detail
                    </button>
                  </div>
                </div>

                {/* Code Terminal Snippet below image */}
                <div className="p-2.5 bg-[#0d1117] border-t border-[#7197bc]/15 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="text-slate-500 truncate mr-2">{slide.codeSnippet}</span>
                  <span className="text-emerald-400 shrink-0 text-[10px]">[READY]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Bar (Bottom Controls) */}
        <div className="mt-8 pt-4 border-t border-[#7197bc]/15 flex items-center justify-between">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex 
                    ? 'w-8 bg-[#7197bc] shadow-[0_0_10px_#7197bc]' 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Pindah ke slide ${s.categoryTarget}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              {slide.categoryTarget}
            </span>
          </div>

          {/* Prev / Next Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded bg-[#12161f] border border-[#7197bc]/30 hover:border-[#7197bc] text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Slide Sebelumnya"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded bg-[#12161f] border border-[#7197bc]/30 hover:border-[#7197bc] text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Slide Selanjutnya"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
