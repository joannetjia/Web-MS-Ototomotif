import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Eye, 
  Plus, 
  Check, 
  Layers, 
  Tag, 
  AlertCircle,
  LayoutGrid,
  List,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Boxes,
  RotateCcw,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES_DATA } from '../data/mockData';
import { Product } from '../types';

interface ShopPageProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number, tier?: 'retail' | 'wholesale') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNavigateHome: () => void;
  onContactSales: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  searchQuery,
  setSearchQuery,
  onNavigateHome,
  onContactSales
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Semua');
  const [stockFilter, setStockFilter] = useState<'all' | 'ready' | 'limited'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'stock'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['Semua', 'Karburator', 'As Skok', 'Kaliper'];
  const brandFilters = ['Semua', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki'];

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Semua: PRODUCTS_DATA.length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = PRODUCTS_DATA.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== 'Semua' && product.category !== selectedCategory) {
        return false;
      }
      // Brand compatibility filter
      if (selectedBrand !== 'Semua') {
        const matchesBrand = product.compatibility.some((c) =>
          c.toLowerCase().includes(selectedBrand.toLowerCase())
        );
        if (!matchesBrand) return false;
      }
      // Stock status filter
      if (stockFilter !== 'all') {
        if (stockFilter === 'ready' && product.stockStatus !== 'ready') return false;
        if (stockFilter === 'limited' && product.stockStatus !== 'limited') return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSku = product.sku.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        const matchesComp = product.compatibility.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesSku && !matchesCat && !matchesComp) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceWholesale - b.priceWholesale;
      if (sortBy === 'price-desc') return b.priceWholesale - a.priceWholesale;
      if (sortBy === 'stock') return b.stockCount - a.stockCount;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrand, stockFilter, searchQuery, sortBy]);

  // Info about currently selected category
  const activeCategoryInfo = useMemo(() => {
    if (selectedCategory === 'Semua') return null;
    return CATEGORIES_DATA.find((c) => c.name.toLowerCase() === selectedCategory.toLowerCase()) || null;
  }, [selectedCategory]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.minWholesaleQty, 'wholesale');
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  const handleResetFilters = () => {
    onSelectCategory('Semua');
    setSelectedBrand('Semua');
    setStockFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0d1117] py-8 sm:py-12 relative">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-ide-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-[#7197bc]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button
            onClick={() => onSelectCategory('Semua')}
            className={`transition-colors cursor-pointer ${
              selectedCategory === 'Semua' ? 'text-[#7197bc] font-semibold' : 'hover:text-white'
            }`}
          >
            Shop &amp; Katalog
          </button>
          {selectedCategory !== 'Semua' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#7197bc] font-semibold">{selectedCategory}</span>
            </>
          )}
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#7197bc]/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#7197bc] inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7197bc] font-semibold">
                KATALOG GROSIR DISTRIBUTOR RESMI
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Katalog Sparepart &amp; Onderdil Motor
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
              Daftar suku cadang siap kirim dari gudang pusat MS Otomotif. Menampilkan harga eceran tertinggi (HET) dan skema harga grosir khusus bengkel &amp; toko onderdil.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onContactSales}
              className="px-4 py-2.5 rounded-lg bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(113,151,188,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Konsultasi Order B2B</span>
            </button>
          </div>
        </div>

        {/* Active Category Spotlight Banner (When filtered by category) */}
        {activeCategoryInfo && (
          <div className="p-5 sm:p-6 rounded-xl bg-[#12161f] border border-[#7197bc]/40 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7197bc]">
                <Terminal className="w-3.5 h-3.5" />
                <span>FILTER_AKTIF // {activeCategoryInfo.techCode}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Kategori: {activeCategoryInfo.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCategoryInfo.shortDesc}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400 font-semibold">
                  Tersedia {categoryCounts[activeCategoryInfo.name]} Tipe Produk
                </span>
                <span>·</span>
                <span>Standar Mutu: ISO 9001:2015</span>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={() => onSelectCategory('Semua')}
                className="px-3.5 py-2 rounded-lg bg-[#161c28] hover:bg-[#1e2535] text-slate-200 border border-[#7197bc]/30 hover:border-[#7197bc] text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#7197bc]" />
                <span>Tampilkan Semua Kategori</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Filter & Control Panel */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#12161f] border border-[#7197bc]/25 space-y-4">
          
          {/* Row 1: Primary Category Tabs & View Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Segmented Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0d1117] rounded-lg border border-[#7197bc]/20">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#7197bc] text-[#0d1117] font-bold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-[#161c28]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isSelected ? 'bg-[#0d1117]/20 text-[#0d1117]' : 'bg-[#161c28] text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input, Sort & View Mode Toggle */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-60">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari SKU / tipe part..."
                  className="w-full pl-8 pr-7 py-2 text-xs bg-[#0d1117] border border-[#7197bc]/30 rounded-md text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#7197bc] font-mono"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#7197bc]" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Sorter */}
              <div className="flex items-center gap-1.5 text-xs">
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-[#0d1117] border border-[#7197bc]/30 rounded-md px-2.5 py-2 text-xs text-slate-300 focus:outline-none focus:border-[#7197bc] font-mono cursor-pointer"
                >
                  <option value="popular">Urutan: Terpopuler</option>
                  <option value="price-asc">Harga: Terendah</option>
                  <option value="price-desc">Harga: Tertinggi</option>
                  <option value="stock">Stok: Terbanyak</option>
                </select>
              </div>

              {/* Grid / List Mode Toggle */}
              <div className="flex items-center bg-[#0d1117] border border-[#7197bc]/30 rounded-md p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#7197bc] text-[#0d1117]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tampilan Grid Card"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#7197bc] text-[#0d1117]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tampilan Tabel Teknis (List)"
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Secondary Filters (Motor Compatibility & Stock Status) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#7197bc]/15 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 font-mono text-[11px] whitespace-nowrap">
                Kompatibel Motor:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {brandFilters.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all cursor-pointer whitespace-nowrap ${
                      selectedBrand === brand
                        ? 'bg-[#161c28] text-[#7197bc] border border-[#7197bc] font-semibold'
                        : 'text-slate-400 hover:text-slate-200 border border-transparent hover:border-slate-700'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono text-[11px]">Ketersediaan:</span>
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <button
                  onClick={() => setStockFilter('all')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    stockFilter === 'all' ? 'bg-[#161c28] text-white border border-slate-700' : 'text-slate-400'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setStockFilter('ready')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    stockFilter === 'ready' ? 'bg-[#161c28] text-emerald-400 border border-emerald-500/40' : 'text-slate-400'
                  }`}
                >
                  Ready Stock
                </button>
                <button
                  onClick={() => setStockFilter('limited')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    stockFilter === 'limited' ? 'bg-[#161c28] text-amber-400 border border-amber-500/40' : 'text-slate-400'
                  }`}
                >
                  Terbatas
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Results Info & Active Filters Summary */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <div>
            MENAMPILKAN: <span className="text-[#7197bc] font-bold">{filteredProducts.length}</span> DARI {PRODUCTS_DATA.length} PRODUK
            {selectedCategory !== 'Semua' && (
              <span className="ml-1 text-slate-300">
                · Kategori: <strong>{selectedCategory}</strong>
              </span>
            )}
            {selectedBrand !== 'Semua' && (
              <span className="ml-1 text-slate-300">
                · Merek: <strong>{selectedBrand}</strong>
              </span>
            )}
          </div>

          {(selectedCategory !== 'Semua' || selectedBrand !== 'Semua' || searchQuery || stockFilter !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="text-[#7197bc] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Semua Filter</span>
            </button>
          )}
        </div>

        {/* Product Listing */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#12161f] border border-[#7197bc]/25 space-y-4">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">Tidak ada suku cadang yang sesuai</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Tidak ditemukan part motor untuk kombinasi filter atau kata kunci "{searchQuery || selectedCategory}". Silakan ubah filter atau reset untuk melihat semua produk.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#7197bc] text-[#0d1117] hover:bg-[#86abd1] transition-colors cursor-pointer"
            >
              Reset ke Semua Kategori
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isJustAdded = justAddedId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group rounded-xl bg-[#12161f] border border-[#7197bc]/20 hover:border-[#7197bc]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(113,151,188,0.18)] flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Top Terminal Tag */}
                    <div className="px-3.5 py-2 bg-[#161c28] border-b border-[#7197bc]/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-[#7197bc] font-semibold truncate">{product.sku}</span>
                      <span className={`text-[10px] ${product.stockStatus === 'ready' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        STOK: {product.stockCount}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-transparent to-transparent opacity-80" />

                      {/* Category Badge */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCategory(product.category);
                        }}
                        className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0d1117]/85 backdrop-blur-md border border-[#7197bc]/30 text-[10px] font-mono text-[#7197bc] hover:border-[#7197bc] transition-colors"
                        title={`Filter hanya kategori ${product.category}`}
                      >
                        {product.category}
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2.5">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#7197bc] transition-colors line-clamp-2 leading-snug">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
                        <div className="truncate">
                          <span className="text-slate-500">Bahan:</span> {product.material}
                        </div>
                        <div className="truncate">
                          <span className="text-slate-500">Garansi:</span> {product.warranty}
                        </div>
                      </div>

                      {/* Compatibility preview */}
                      <div className="pt-1.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1 truncate">
                        <Tag className="w-3 h-3 text-[#7197bc] shrink-0" />
                        <span className="truncate">{product.compatibility.slice(0, 2).join(', ')}...</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA Row */}
                  <div className="p-4 pt-0">
                    <div className="p-2.5 rounded bg-[#0d1117] border border-[#7197bc]/20 mb-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Grosir (≥{product.minWholesaleQty} pcs):</span>
                        <span className="text-[10px] text-slate-500">HET: Rp {product.priceRetail.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="text-base font-extrabold text-[#7197bc] font-mono tabular-nums">
                        Rp {product.priceWholesale.toLocaleString('id-ID')}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="py-2 px-2 text-xs font-semibold rounded bg-[#161c28] hover:bg-[#202738] text-slate-300 hover:text-white border border-[#7197bc]/30 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#7197bc]" />
                        <span>Detail Part</span>
                      </button>

                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`py-2 px-2 text-xs font-semibold rounded transition-all flex items-center justify-center gap-1 cursor-pointer ${
                          isJustAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117]'
                        }`}
                        title="Tambahkan ke daftar penawaran grosir"
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Ditambah!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>PO Grosir</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Technical List / Table View */
          <div className="overflow-x-auto rounded-xl border border-[#7197bc]/25 bg-[#12161f]">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-[#161c28] text-[#7197bc] border-b border-[#7197bc]/25">
                  <th className="p-3.5">SKU &amp; KATEGORI</th>
                  <th className="p-3.5">NAMA SUKU CADANG</th>
                  <th className="p-3.5">KOMPATIBILITAS MOTOR</th>
                  <th className="p-3.5">STOK GUDANG</th>
                  <th className="p-3.5 text-right">HARGA HET</th>
                  <th className="p-3.5 text-right">GROSIR B2B</th>
                  <th className="p-3.5 text-center">AKSI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredProducts.map((product) => {
                  const isJustAdded = justAddedId === product.id;

                  return (
                    <tr
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="hover:bg-[#161c28]/60 transition-colors cursor-pointer"
                    >
                      <td className="p-3.5">
                        <div className="font-bold text-[#7197bc]">{product.sku}</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectCategory(product.category);
                          }}
                          className="text-[10px] text-slate-400 hover:text-[#7197bc] underline"
                        >
                          {product.category}
                        </button>
                      </td>

                      <td className="p-3.5">
                        <div className="font-semibold text-white font-sans text-sm">{product.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {product.material} · {product.warranty}
                        </div>
                      </td>

                      <td className="p-3.5 max-w-xs">
                        <div className="text-slate-300 text-[11px] truncate">
                          {product.compatibility.slice(0, 3).join(', ')}
                        </div>
                      </td>

                      <td className="p-3.5">
                        <span className={`text-[11px] ${product.stockStatus === 'ready' ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {product.stockCount} pcs
                        </span>
                      </td>

                      <td className="p-3.5 text-right text-slate-400 line-through">
                        Rp {product.priceRetail.toLocaleString('id-ID')}
                      </td>

                      <td className="p-3.5 text-right">
                        <div className="text-emerald-400 font-bold text-sm">
                          Rp {product.priceWholesale.toLocaleString('id-ID')}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          (min. {product.minWholesaleQty} pcs)
                        </div>
                      </td>

                      <td className="p-3.5">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProduct(product);
                            }}
                            className="p-1.5 rounded bg-[#161c28] hover:bg-slate-700 text-[#7197bc] transition-colors"
                            title="Detail"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => handleQuickAdd(product, e)}
                            className={`p-1.5 rounded transition-colors ${
                              isJustAdded ? 'bg-emerald-600 text-white' : 'bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117]'
                            }`}
                            title="Tambah ke PO"
                          >
                            {isJustAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
