import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Truck, 
  Terminal, 
  PhoneCall, 
  ShoppingCart, 
  Plus, 
  Minus,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, tier: 'retail' | 'wholesale') => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedTier, setSelectedTier] = useState<'wholesale' | 'retail'>('wholesale');
  const [quantity, setQuantity] = useState<number>(product.minWholesaleQty);
  const [copiedSku, setCopiedSku] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = selectedTier === 'wholesale' ? product.priceWholesale : product.priceRetail;
  const totalPrice = currentPrice * quantity;

  const handleTierChange = (tier: 'wholesale' | 'retail') => {
    setSelectedTier(tier);
    if (tier === 'wholesale') {
      setQuantity(Math.max(quantity, product.minWholesaleQty));
    }
  };

  const handleQtyChange = (delta: number) => {
    const min = selectedTier === 'wholesale' ? product.minWholesaleQty : 1;
    const nextVal = Math.max(min, quantity + delta);
    setQuantity(nextVal);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedTier);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Halo Sales MS Otomotif,\nSaya berminat memesan sparepart:\n` +
      `- Nama: ${product.name}\n` +
      `- SKU: ${product.sku}\n` +
      `- Kategori: ${product.category}\n` +
      `- Jumlah: ${quantity} unit (${selectedTier === 'wholesale' ? 'Harga Grosir Toko' : 'Harga Eceran'})\n` +
      `- Estimasi Total: Rp ${totalPrice.toLocaleString('id-ID')}\n\n` +
      `Mohon info ketersediaan stok & ongkos kirim ke bengkel/toko saya. Terima kasih!`
    );
    window.open(`https://wa.me/6281288901120?text=${text}`, '_blank');
  };

  const handleCopySku = () => {
    navigator.clipboard.writeText(product.sku);
    setCopiedSku(true);
    setTimeout(() => setCopiedSku(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#12161f] border border-[#7197bc]/40 rounded-2xl shadow-[0_0_50px_rgba(113,151,188,0.25)] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="px-5 py-3 bg-[#161c28] border-b border-[#7197bc]/20 flex items-center justify-between font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#7197bc]" />
            <span className="text-white font-semibold">PART_INSPECTION_SHEET</span>
            <span className="text-slate-500">::</span>
            <button 
              onClick={handleCopySku} 
              className="text-[#7197bc] hover:underline cursor-pointer flex items-center gap-1"
              title="Klik untuk salin SKU"
            >
              {product.sku}
              {copiedSku && <span className="text-emerald-400 text-[10px]">[COPIED]</span>}
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-[#7197bc]/30 group">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0d1117]/80 backdrop-blur-md border border-[#7197bc]/30 text-xs font-mono text-[#7197bc]">
                {product.category}
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/20 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#7197bc] shrink-0" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileCheck className="w-4 h-4 text-[#7197bc] shrink-0" />
                <span>Bahan: {product.material}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-4 h-4 text-[#7197bc] shrink-0" />
                <span>Ready Stock Gudang Pusat ({product.stockCount} pcs)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs, Pricing & Purchase Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="text-xs font-mono text-[#7197bc] uppercase tracking-wider mb-1">
                DISTRIBUTOR OEM SPECIFICATION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specs Table */}
            <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/20">
              <div className="text-[11px] font-mono text-slate-400 pb-1.5 mb-2 border-b border-slate-800 flex justify-between">
                <span className="text-[#7197bc] font-semibold">PARAMETER TEKNIS</span>
                <span>TOLERANSI CNC</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {product.specs.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-0.5 text-slate-300 border-b border-slate-900/60 last:border-0">
                    <span className="text-slate-400 font-mono text-[11px]">{item.label}</span>
                    <span className="font-semibold text-white font-mono text-[11px]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Motor Compatibility */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-1.5">
                Kesesuaian Tipe Motor (Plug &amp; Play):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.compatibility.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161c28] border border-slate-700 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing Tier Selector */}
            <div className="p-4 rounded-xl bg-[#161c28] border border-[#7197bc]/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTierChange('wholesale')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                      selectedTier === 'wholesale'
                        ? 'bg-[#7197bc] text-[#0d1117] shadow-sm'
                        : 'bg-[#0d1117] text-slate-400 hover:text-white'
                    }`}
                  >
                    Harga Grosir Toko
                  </button>
                  <button
                    onClick={() => handleTierChange('retail')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                      selectedTier === 'retail'
                        ? 'bg-[#7197bc] text-[#0d1117] shadow-sm'
                        : 'bg-[#0d1117] text-slate-400 hover:text-white'
                    }`}
                  >
                    Harga Eceran (HET)
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400">Harga Satuan</div>
                  <div className="text-lg font-bold text-[#7197bc] font-mono tabular-nums">
                    Rp {currentPrice.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              {selectedTier === 'wholesale' && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-[#0d1117]/60 p-2 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Hemat Rp {(product.priceRetail - product.priceWholesale).toLocaleString('id-ID')} per unit untuk pesanan minimal {product.minWholesaleQty} pcs.</span>
                </div>
              )}

              {/* Quantity Selector & Subtotal */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#7197bc]/20">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-300">Jumlah Unit:</span>
                  <div className="flex items-center rounded bg-[#0d1117] border border-[#7197bc]/30">
                    <button
                      onClick={() => handleQtyChange(-1)}
                      className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
                      title="Kurang 1"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center text-xs font-bold font-mono text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(1)}
                      className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
                      title="Tambah 1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block">Estimasi Total ({quantity} unit):</span>
                  <span className="text-base font-extrabold text-white font-mono tabular-nums">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleAdd}
                className={`py-3 px-4 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117] shadow-[0_0_20px_rgba(113,151,188,0.35)]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Tersimpan di PO!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Tambah ke Daftar PO</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Pesan via WhatsApp Sales</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
