import React, { useState } from 'react';
import { 
  Settings, 
  Search, 
  FileText, 
  PhoneCall, 
  ShoppingCart, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onNavigateToShop: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  openCart: () => void;
  openPdfModal: () => void;
  openSalesModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onNavigateToShop,
  searchQuery,
  setSearchQuery,
  cartCount,
  openCart,
  openPdfModal,
  openSalesModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    if (tab === 'shop') {
      onNavigateToShop();
    } else {
      setActiveTab(tab);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#7197bc]/20 bg-[#0d1117]/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            title="MS Otomotif - Beranda"
          >
            <div className="w-9 h-9 rounded-lg bg-[#12161f] border border-[#7197bc]/40 flex items-center justify-center text-[#7197bc] shadow-[0_0_15px_rgba(113,151,188,0.25)] group-hover:border-[#7197bc] transition-all">
              <Settings className="w-5 h-5 animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                MS <span className="text-[#7197bc]">Otomotif</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7197bc] animate-ping" />
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-sm font-medium transition-all ${
              activeTab === 'home'
                ? 'text-[#7197bc] border-b-2 border-[#7197bc] pb-0.5 glow-text'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`text-sm font-medium transition-all ${
              activeTab === 'about'
                ? 'text-[#7197bc] border-b-2 border-[#7197bc] pb-0.5 glow-text'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('shop')}
            className={`text-sm font-medium transition-all ${
              activeTab === 'shop'
                ? 'text-[#7197bc] border-b-2 border-[#7197bc] pb-0.5 glow-text'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Shop &amp; Katalog
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`text-sm font-medium transition-all ${
              activeTab === 'contact'
                ? 'text-[#7197bc] border-b-2 border-[#7197bc] pb-0.5 glow-text'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: Actions (Search + PDF + Hubungi Sales + Cart) */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search */}
          <div className={`relative hidden md:block transition-all duration-200 ${isSearchFocused ? 'w-56' : 'w-44'}`}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setIsSearchFocused(true);
                if (activeTab !== 'shop') setActiveTab('shop');
              }}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Cari part (PE 28, Kaliper...)"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#12161f] border border-[#7197bc]/30 rounded-md text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#7197bc] focus:ring-1 focus:ring-[#7197bc] font-mono transition-all"
            />
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#7197bc]/70" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>

          {/* PDF Catalog CTA */}
          <button
            onClick={openPdfModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#161c28] border border-[#7197bc]/30 hover:border-[#7197bc] hover:text-[#7197bc] rounded-md transition-all whitespace-nowrap"
            title="Download Katalog PDF Resmi"
          >
            <FileText className="w-3.5 h-3.5 text-[#7197bc]" />
            <span>Katalog PDF</span>
          </button>

          {/* Sales CTA */}
          <button
            onClick={openSalesModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0d1117] bg-[#7197bc] hover:bg-[#86abd1] rounded-md transition-all shadow-[0_0_15px_rgba(113,151,188,0.35)] whitespace-nowrap"
            title="Hubungi Sales B2B"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Hubungi Sales</span>
            <span className="md:hidden">Sales</span>
          </button>

          {/* Cart / Quotation Bag Trigger */}
          <button
            onClick={openCart}
            className="relative p-2 text-slate-300 hover:text-white bg-[#12161f] border border-[#7197bc]/30 hover:border-[#7197bc] rounded-md transition-colors"
            title="Daftar Permintaan Penawaran (PO)"
            aria-label="Keranjang Quotation"
          >
            <ShoppingCart className="w-4 h-4 text-[#7197bc]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#7197bc] text-[#0d1117] text-[10px] font-bold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-md border border-slate-700 hover:border-[#7197bc] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#7197bc]/20 bg-[#0d1117]/95 px-4 pt-3 pb-5 space-y-3">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari sparepart motor..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#12161f] border border-[#7197bc]/30 rounded-md text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#7197bc]"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#7197bc]" />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 font-medium text-sm">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded text-left ${activeTab === 'home' ? 'bg-[#161c28] text-[#7197bc]' : 'text-slate-300'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className={`p-2.5 rounded text-left ${activeTab === 'shop' ? 'bg-[#161c28] text-[#7197bc]' : 'text-slate-300'}`}
            >
              Shop &amp; Katalog
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-2.5 rounded text-left ${activeTab === 'about' ? 'bg-[#161c28] text-[#7197bc]' : 'text-slate-300'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-2.5 rounded text-left ${activeTab === 'contact' ? 'bg-[#161c28] text-[#7197bc]' : 'text-slate-300'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="flex gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                openPdfModal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-medium text-center text-slate-300 bg-[#161c28] border border-[#7197bc]/30 rounded flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#7197bc]" />
              Katalog PDF
            </button>
            <button
              onClick={() => {
                openSalesModal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold text-center text-[#0d1117] bg-[#7197bc] rounded flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Hubungi Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
