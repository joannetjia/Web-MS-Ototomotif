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
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { Product } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number, tier?: 'retail' | 'wholesale') => void;
  initialCategory?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  initialCategory = 'Semua',
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>('Semua');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'stock'>('popular');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Sync category when parent changes it
  React.useEffect(() => {
    if (initialCategory && initialCategory !== selectedCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['Semua', 'Karburator', 'As Skok', 'Kaliper'];
  const brandFilters = ['Semua', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki'];

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
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.minWholesaleQty, 'wholesale');
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="shop-catalog" className="py-16 sm:py-20 bg-[#0d1117] relative border-b border-[#7197bc]/20">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-ide-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#7197bc] inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7197bc] font-semibold">
                KATALOG SPAREPART &amp; HARGA GROSIR
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Katalog Onderdil Resmi MS Otomotif
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            MENAMPILKAN: <span className="text-[#7197bc] font-bold">{filteredProducts.length}</span> DARI {PRODUCTS_DATA.length} PRODUK
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-xl bg-[#12161f] border border-[#7197bc]/20 mb-8 space-y-4">
          
          {/* Top Row: Categories & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0d1117] rounded-lg border border-[#7197bc]/15">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#7197bc] text-[#0d1117] font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-[#161c28]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input & Sorter */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik nama / tipe part..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#0d1117] border border-[#7197bc]/30 rounded-md text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#7197bc] font-mono"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#7197bc]" />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#7197bc] shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-[#0d1117] border border-[#7197bc]/30 rounded-md px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#7197bc] font-mono cursor-pointer"
                >
                  <option value="popular">Terpopuler</option>
                  <option value="price-asc">Harga Terendah</option>
                  <option value="price-desc">Harga Tertinggi</option>
                  <option value="stock">Stok Terbanyak</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Row: Motor Brand Compatibility Filter */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#7197bc]/15 overflow-x-auto text-xs">
            <span className="text-slate-400 font-mono text-[11px] whitespace-nowrap">
              Kompatibel Motor:
            </span>
            <div className="flex items-center gap-1.5">
              {brandFilters.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all cursor-pointer whitespace-nowrap ${
                    selectedBrand === brand
                      ? 'bg-[#161c28] text-[#7197bc] border border-[#7197bc]'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent hover:border-slate-700'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center rounded-xl bg-[#12161f] border border-[#7197bc]/20">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">Tidak ada sparepart ditemukan</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              Coba sesuaikan kata kunci pencarian atau ubah filter kategori/kompatibilitas motor.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSelectedBrand('Semua');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded bg-[#7197bc] text-[#0d1117] hover:bg-[#86abd1] transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
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
                      <span className="text-[#7197bc] truncate">{product.sku}</span>
                      <span className="text-emerald-400 text-[10px]">
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
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0d1117]/80 backdrop-blur-md border border-[#7197bc]/30 text-[10px] font-mono text-[#7197bc]">
                        {product.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2.5">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#7197bc] transition-colors line-clamp-2 leading-snug">
                        {product.name}
                      </h3>

                      {/* Brief Specs Chips */}
                      <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
                        <div className="truncate">
                          <span className="text-slate-500">Material:</span> {product.material}
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
                        <span>Detail</span>
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
        )}

      </div>
    </section>
  );
};
