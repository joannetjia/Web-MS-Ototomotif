import React from 'react';
import { Settings, PhoneCall, Mail, MapPin, ShieldCheck, Terminal, ArrowUp } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPdf: () => void;
  onOpenSales: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenPdf,
  onOpenSales,
  onSelectCategory
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0d13] border-t border-[#7197bc]/20 text-slate-300 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#12161f] border border-[#7197bc]/40 flex items-center justify-center text-[#7197bc] shadow-[0_0_12px_rgba(113,151,188,0.25)]">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                MS <span className="text-[#7197bc]">Otomotif</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Distributor resmi suku cadang &amp; onderdil presisi motor di Indonesia. Berfokus pada keandalan sistem pengabutan (Karburator), kestabilan suspensi (As Skok), dan performa pengereman (Kaliper).
            </p>

            <div className="p-3 rounded-lg bg-[#12161f] border border-[#7197bc]/15 font-mono text-xs space-y-1 max-w-sm">
              <div className="flex items-center gap-2 text-[#7197bc]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-semibold">SERTIFIKASI ISO 9001:2015</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Jaminan garansi original pabrik dan barcode traceability di setiap kemasan onderdil.
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7197bc] uppercase font-semibold tracking-wider">
              NAVIGASI
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beranda (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tentang Kami (About Us)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Katalog Onderdil (Shop)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kontak &amp; Gudang (Contact)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPdf}
                  className="text-[#7197bc] hover:underline cursor-pointer"
                >
                  Download Brosur &amp; Pricelist PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Kategori Utama */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7197bc] uppercase font-semibold tracking-wider">
              KATEGORI UTAMA
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    onSelectCategory('Karburator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Karburator Racing &amp; Standar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    onSelectCategory('As Skok');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  As Skok Depan Hard Chrome
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    onSelectCategory('Kaliper');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kaliper Rem Hidrolik &amp; Piston
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSales}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Konsultasi Khusus Bengkel
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Hub Gudang & Kontak */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7197bc] uppercase font-semibold tracking-wider">
              KONTAK GUDANG
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7197bc] shrink-0 mt-0.5" />
                <span>Kawasan Industri Cikarang Barat Blok C-12, Kab. Bekasi 17530</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#7197bc] shrink-0" />
                <span className="font-mono text-slate-300">(021) 8990-1120</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7197bc] shrink-0" />
                <span className="font-mono text-slate-300">sales@msotomotif.co.id</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Vibe Coding Status */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} PT MS Otomotif Indonesia. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#7197bc]/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              SYSTEM STATUS: READY
            </span>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#12161f] border border-slate-700 hover:border-[#7197bc] text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Kembali ke atas"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
