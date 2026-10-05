import React from 'react';
import { 
  X, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { REGIONAL_REPS } from '../data/mockData';

interface SalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SalesModal: React.FC<SalesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#12161f] border border-[#7197bc]/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-[#161c28] border-b border-[#7197bc]/20 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#7197bc]" />
            <span className="font-bold text-white">HUBUNGI_SALES_DISTRIBUTOR</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-mono text-[#7197bc] uppercase tracking-wider mb-1">
              TIM PENJUALAN &amp; KEMITRAAN TOKO
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Konsultasi Stok &amp; Kemitraan Toko Onderdil
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Hubungi representatif regional MS Otomotif yang bertugas di wilayah Anda untuk penawaran harga khusus bengkel, plafon kredit tempo, atau pengiriman armada distributor.
            </p>
          </div>

          {/* Regional Reps Cards */}
          <div className="space-y-3">
            {REGIONAL_REPS.map((rep, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0d1117] border border-[#7197bc]/20 hover:border-[#7197bc]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#7197bc] font-semibold">
                    {rep.region}
                  </div>
                  <h3 className="text-sm font-bold text-white mt-0.5">{rep.name}</h3>
                  <div className="text-xs text-slate-400">{rep.role}</div>
                  <div className="text-xs font-mono text-slate-300 mt-1 flex items-center gap-2">
                    <span>{rep.phone}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{rep.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/${rep.whatsapp}?text=Halo%20${encodeURIComponent(rep.name)}%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20sparepart%20MS%20Otomotif%20untuk%20wilayah%20${encodeURIComponent(rep.region)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${rep.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-3 py-2 rounded-lg bg-[#161c28] hover:bg-[#202738] text-slate-200 border border-[#7197bc]/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#7197bc]" />
                    <span>Telepon</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Hours */}
          <div className="p-3.5 rounded-lg bg-[#161c28] border border-[#7197bc]/20 text-xs flex items-center justify-between text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7197bc]" />
              <span>Jam Kerja Sales: <strong>Senin - Sabtu, 08:00 - 17:00 WIB</strong></span>
            </div>
            <div className="flex items-center gap-1 text-[#7197bc] font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
