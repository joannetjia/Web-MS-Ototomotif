import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  PhoneCall, 
  FileText, 
  ShoppingBag, 
  Terminal,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { QuotationItem } from '../types';

interface QuotationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuotationItem[];
  onUpdateQty: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenPdf: () => void;
}

export const QuotationDrawer: React.FC<QuotationDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onOpenPdf
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => {
    const price = item.tier === 'wholesale' ? item.product.priceWholesale : item.product.priceRetail;
    return acc + price * item.quantity;
  }, 0);

  const totalUnits = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsAppPO = () => {
    if (items.length === 0) return;

    let message = `*PURCHASE ORDER (PO) / INQUIRY GROSIR MS OTOMOTIF*\n`;
    message += `Tanggal: ${new Date().toLocaleDateString('id-ID')}\n`;
    message += `------------------------------------\n`;
    items.forEach((item, index) => {
      const price = item.tier === 'wholesale' ? item.product.priceWholesale : item.product.priceRetail;
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   SKU: ${item.product.sku}\n`;
      message += `   Qty: ${item.quantity} pcs @ Rp ${price.toLocaleString('id-ID')} (${item.tier.toUpperCase()})\n`;
      message += `   Subtotal: Rp ${(price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });
    message += `------------------------------------\n`;
    message += `*TOTAL ESTIMASI: Rp ${subtotal.toLocaleString('id-ID')}* (${totalUnits} unit part)\n\n`;
    message += `Nama Bengkel / Toko:\nKota / Alamat Kirim:\nNo. Telepon / PIC:\n`;
    message += `Mohon konfirmasi ketersediaan stok & faktur pajak. Terima kasih!`;

    window.open(`https://wa.me/6281288901120?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
      <div 
        className="w-full max-w-md sm:max-w-lg bg-[#12161f] border-l border-[#7197bc]/30 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#161c28] border-b border-[#7197bc]/20 flex items-center justify-between font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#7197bc]" />
            <span className="text-white font-bold text-sm">PO_CART_CONTAINER</span>
            <span className="text-xs text-[#7197bc]">({items.length} items)</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup daftar PO"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-600" />
              <div className="text-base font-semibold text-white">Daftar PO Masih Kosong</div>
              <p className="text-xs text-slate-400 max-w-xs">
                Pilih part motor dari katalog untuk mengumpulkan pesanan grosir bengkel atau toko Anda.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 text-xs font-semibold rounded bg-[#7197bc] text-[#0d1117] hover:bg-[#86abd1] transition-colors cursor-pointer"
              >
                Lihat Katalog Onderdil
              </button>
            </div>
          ) : (
            items.map((item) => {
              const price = item.tier === 'wholesale' ? item.product.priceWholesale : item.product.priceRetail;
              const lineTotal = price * item.quantity;

              return (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/20 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex gap-2.5">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded object-cover bg-slate-900 border border-slate-700 shrink-0"
                      />
                      <div>
                        <div className="text-[10px] font-mono text-[#7197bc]">{item.product.sku}</div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">{item.product.name}</h4>
                        <div className="text-[11px] font-mono text-slate-400">
                          Rp {price.toLocaleString('id-ID')} × {item.quantity} pcs
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                      title="Hapus dari daftar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                    <div className="flex items-center rounded bg-[#161c28] border border-slate-700">
                      <button
                        onClick={() => onUpdateQty(item.product.id, Math.max(1, item.quantity - 1))}
                        className="p-1 text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold text-white text-xs">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                        className="p-1 text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-500 mr-1.5">Subtotal:</span>
                      <span className="font-bold text-[#7197bc] font-mono tabular-nums">
                        Rp {lineTotal.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Subtotal & Actions */}
        {items.length > 0 && (
          <div className="p-4 bg-[#161c28] border-t border-[#7197bc]/25 space-y-3">
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Total Unit Part:</span>
                <span className="text-white font-bold">{totalUnits} pcs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white font-bold">Total Estimasi PO:</span>
                <span className="text-base font-extrabold text-[#7197bc] tabular-nums">
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onOpenPdf}
                className="py-2.5 px-3 rounded text-xs font-semibold text-slate-200 bg-[#12161f] border border-[#7197bc]/40 hover:border-[#7197bc] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#7197bc]" />
                <span>Format PDF</span>
              </button>

              <button
                onClick={onClearCart}
                className="py-2.5 px-3 rounded text-xs font-medium text-slate-400 hover:text-rose-400 bg-[#12161f] border border-slate-700 hover:border-rose-500/40 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kosongkan</span>
              </button>
            </div>

            <button
              onClick={handleSendWhatsAppPO}
              className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Kirim PO Resmi via WhatsApp Sales</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
