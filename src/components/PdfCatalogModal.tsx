import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Settings, 
  CheckCircle2, 
  PhoneCall,
  Terminal
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';

interface PdfCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfCatalogModal: React.FC<PdfCatalogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#12161f] border border-[#7197bc]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-5 py-3 bg-[#161c28] border-b border-[#7197bc]/20 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#7197bc]" />
            <span className="font-bold text-white">MS_OTOMOTIF_PRICE_LIST_2026.PDF</span>
            <span className="text-slate-500 hidden sm:inline">[READY_FOR_PRINT]</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117] font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Preview Container */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto bg-[#0d1117] text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Document Header */}
          <div className="pb-6 mb-6 border-b border-[#7197bc]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#12161f] border border-[#7197bc]/40 flex items-center justify-center text-[#7197bc]">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-white">
                  PT MS OTOMOTIF INDONESIA
                </h1>
                <p className="text-xs text-[#7197bc] font-mono">
                  Distributor Resmi Suku Cadang &amp; Onderdil Presisi Motor
                </p>
                <p className="text-[11px] text-slate-400">
                  Kawasan Industri Cikarang Barat Blok C-12, Bekasi, Jawa Barat | Hotline: (021) 8990-1120
                </p>
              </div>
            </div>

            <div className="text-right sm:text-right font-mono text-xs text-slate-400">
              <div>REV: <span className="text-[#7197bc] font-bold">2026.Q4-OFFICIAL</span></div>
              <div>TANGGAL TERBIT: 04/10/2026</div>
              <div>STATUS: TERVERIFIKASI ISO 9001</div>
            </div>
          </div>

          {/* Document Notice */}
          <div className="p-3 mb-6 rounded-lg bg-[#12161f] border border-[#7197bc]/20 text-xs text-slate-300 flex items-center justify-between">
            <span className="font-mono text-[#7197bc]">
              // DAFTAR HARGA GROSIR RESMI (DISTRIBUTOR PRICELIST UNTUK BENGKEL &amp; TOKO SPAREPART)
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">Harga sewaktu-waktu dapat berubah</span>
          </div>

          {/* Catalog Table */}
          <div className="overflow-x-auto rounded-lg border border-[#7197bc]/20 mb-6">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-[#161c28] text-[#7197bc] border-b border-[#7197bc]/30">
                  <th className="p-3">SKU</th>
                  <th className="p-3">KATEGORI</th>
                  <th className="p-3">NAMA PART</th>
                  <th className="p-3">APLIKASI MOTOR</th>
                  <th className="p-3 text-right">HET ECERAN</th>
                  <th className="p-3 text-right">GROSIR B2B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {PRODUCTS_DATA.map((product) => (
                  <tr key={product.id} className="hover:bg-[#12161f]/80 transition-colors">
                    <td className="p-3 text-[#7197bc] font-bold">{product.sku}</td>
                    <td className="p-3 text-slate-400">{product.category}</td>
                    <td className="p-3 text-white font-medium">{product.name}</td>
                    <td className="p-3 text-slate-400 text-[11px]">
                      {product.compatibility.slice(0, 2).join(', ')}
                    </td>
                    <td className="p-3 text-right text-slate-400 line-through">
                      Rp {product.priceRetail.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 text-right text-emerald-400 font-bold">
                      Rp {product.priceWholesale.toLocaleString('id-ID')}
                      <span className="text-[10px] text-slate-400 block font-normal">(min. {product.minWholesaleQty} pcs)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wholesale Terms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#12161f] border border-[#7197bc]/20 text-xs">
            <div>
              <div className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7197bc]" />
                Ketentuan Pemesanan Grosir:
              </div>
              <ul className="text-slate-400 text-[11px] space-y-1 list-disc list-inside">
                <li>Minimum order senilai Rp 1.500.000 untuk pengiriman gratis area Jabodetabek.</li>
                <li>Pengiriman luar pulau menggunakan ekspedisi kargo resmi pilihan rekanan.</li>
                <li>Faktur Pajak resmi PPN 11% dapat diterbitkan atas nama badan usaha mitra.</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#7197bc]" />
                Kontak Verifikasi Pesanan:
              </div>
              <p className="text-slate-400 text-[11px]">
                WhatsApp Hub B2B: +62 812-8890-1120 / +62 813-7744-8891<br />
                Email Penawaran: sales@msotomotif.co.id<br />
                Jam Operasional Gudang: Senin - Sabtu (08.00 - 17.00 WIB)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
