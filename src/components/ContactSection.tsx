import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Terminal, 
  MessageSquare,
  HelpCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { REGIONAL_REPS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    picName: '',
    shopName: '',
    phone: '',
    city: '',
    categoryInterest: 'Semua Kategori',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.picName || !formData.phone) return;

    setSubmitted(true);

    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `*FORMULIR PENGAJUAN KEMITRAAN TOKO MS OTOMOTIF*\n` +
      `------------------------------------\n` +
      `Nama PIC: ${formData.picName}\n` +
      `Nama Bengkel / Toko: ${formData.shopName || '-'}\n` +
      `No. WhatsApp: ${formData.phone}\n` +
      `Kota / Wilayah: ${formData.city || '-'}\n` +
      `Minat Kategori: ${formData.categoryInterest}\n` +
      `Kebutuhan / Catatan: ${formData.notes || '-'}\n` +
      `------------------------------------\n` +
      `Mohon dihubungkan dengan Sales Supervisor area saya. Terima kasih!`
    );

    // Open WhatsApp in new tab after 800ms
    setTimeout(() => {
      window.open(`https://wa.me/6281288901120?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div className="py-16 sm:py-20 bg-[#0d1117] relative border-b border-[#7197bc]/20">
      
      {/* Background Ide Grid */}
      <div className="absolute inset-0 bg-ide-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#12161f] border border-[#7197bc]/30 text-xs font-mono text-[#7197bc] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>CONNECT // B2B_CUSTOMER_RELATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi Kantor &amp; Gudang <span className="text-[#7197bc]">MS Otomotif</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Ingin pasokan rutin onderdil untuk toko Anda atau penawaran khusus tender bengkel rekanan? Tim kami siap merespons dengan cepat.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#12161f] border border-[#7197bc]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#7197bc]/20">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7197bc]">
                <MessageSquare className="w-4 h-4" />
                <span>FORM_INQUIRY_KEMITRAAN</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">STATUS: ONLINE</span>
            </div>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-[#0d1117] border border-emerald-500/30 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Pengajuan Berhasil Terkirim!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Data Anda telah diterima sistem dan dialihkan langsung ke WhatsApp Key Account Manager MS Otomotif. Tim kami akan menghubungi Anda dalam waktu maksimal 1x24 jam kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 text-xs font-semibold rounded bg-[#7197bc] text-[#0d1117] hover:bg-[#86abd1] transition-colors cursor-pointer"
                >
                  Kirim Pengajuan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Nama PIC / Pemilik Toko <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Nama Toko / Bengkel Motor
                    </label>
                    <input
                      type="text"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      placeholder="Contoh: Maju Motor Jaya"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Nomor WhatsApp Aktif <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 08128899xxxx"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Kota / Kabupaten Pengiriman
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Contoh: Surabaya / Medan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Kategori Sparepart yang Diminati
                  </label>
                  <select
                    value={formData.categoryInterest}
                    onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                  >
                    <option value="Semua Kategori">Semua Kategori (Karburator, As Skok, Kaliper)</option>
                    <option value="Karburator Saja">Karburator (Racing &amp; Standar Presisi)</option>
                    <option value="As Skok Saja">As Skok Depan Hard Chrome</option>
                    <option value="Kaliper Saja">Kaliper Rem Hidrolik &amp; Master</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Estimasi Kebutuhan / Pertanyaan Tambahan
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tuliskan part tertentu yang dicari, frekuensi belanja rutin toko, atau kebutuhan faktur pajak..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1117] border border-[#7197bc]/30 text-white placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-[#7197bc]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-[#7197bc] hover:bg-[#86abd1] text-[#0d1117] font-bold text-xs transition-all shadow-[0_0_20px_rgba(113,151,188,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim &amp; Hubungkan ke Sales WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Warehouse Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-[#12161f] border border-[#7197bc]/25 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7197bc]">
                <Building className="w-4 h-4" />
                <span>KANTOR PUSAT &amp; LOGISTIK GUDANG</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Gudang Distribusi Hub 01 (Cikarang)</strong>
                    <span className="text-slate-400">
                      Kawasan Industri Cikarang Barat Blok C-12, Cikarang Barat, Kab. Bekasi, Jawa Barat 17530
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Hotline Sales &amp; CS Distributor</strong>
                    <span className="text-slate-300 font-mono">(021) 8990-1120 / +62 812-8890-1120</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email Resmi Distributor</strong>
                    <span className="text-slate-300 font-mono">sales@msotomotif.co.id / b2b@msotomotif.co.id</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#7197bc] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Jam Layanan &amp; Pengiriman</strong>
                    <span className="text-slate-400">
                      Senin - Jumat: 08.00 - 17.00 WIB<br />
                      Sabtu: 08.00 - 14.00 WIB (Minggu &amp; Libur Nasional Tutup)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Card */}
            <div className="p-6 rounded-2xl bg-[#12161f] border border-[#7197bc]/25 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7197bc]">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ SINGKAT MITRA TOKO</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-semibold text-white">Berapa minimal order (MOQ) untuk harga grosir?</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Rata-rata 3 hingga 5 pcs per item part motor, atau akumulasi pesanan awal minimal Rp 1.500.000 untuk toko baru.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Apakah ada jaminan retur jika barang cacat produksi?</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Ya, kami memberikan garansi tukar unit baru 30 hari langsung tanpa dipersulit jika ditemukan cacat pabrik atau kebocoran.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Apakah bisa terbitkan Faktur Pajak PPN?</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Bisa. Cukup lampirkan NPWP / SPKP badan usaha atau toko Anda saat registrasi PO.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
