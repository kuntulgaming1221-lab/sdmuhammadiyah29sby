import { useState } from 'react'

const Arrow = () => <span aria-hidden="true">→</span>

const programs = [
  { icon: '۞', title: 'Tahfidz & Tilawati', text: 'Membentuk kecintaan pada Al-Qur’an melalui pembiasaan membaca dan menghafal setiap hari.' },
  { icon: '✦', title: 'Akademik Unggul', text: 'Pembelajaran aktif yang mengembangkan daya pikir, kreativitas, dan potensi terbaik setiap anak.' },
  { icon: '◒', title: 'Karakter Islami', text: 'Menanamkan adab, kemandirian, disiplin, tanggung jawab, dan kepedulian sosial.' },
  { icon: '⌁', title: 'Five Days School', text: 'Belajar efektif Senin–Jumat agar waktu anak bersama keluarga tetap berkualitas dan seimbang.' },
]

const news = [
  {
    image: 'https://sdmudalansurabaya.sch.id/wp-content/uploads/2026/09/IMG-20260922-WA0013-768x576.jpg',
    title: 'Sinergi Kemitraan SD Mudalan – Kepala TK se-Surabaya',
    category: 'Kegiatan Sekolah',
  },
  {
    image: 'https://sdmudalansurabaya.sch.id/wp-content/uploads/2026/02/Wawali_Ina_Senam_Pagi_bersama_ASN_dan_Non_ASN_Bakal_Jadi_Giat_Rutin_Tiap_Jumat-768x511.webp',
    title: 'Senam Sehat, Bergerak Ceria Bersama',
    category: 'Kegiatan Siswa',
  },
  {
    image: 'https://sdmudalansurabaya.sch.id/wp-content/uploads/2026/02/ed-us-iXUXMn_-nh8-unsplash-600x400.jpg',
    title: 'Tadarus: Mengawali Hari dengan Al-Qur’an',
    category: 'Keislaman',
  },
]

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fcfdfb] text-[#18352d]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="border-b border-white/15 bg-[#063f32] py-2 text-white/80">
          <div className="mx-auto flex max-w-7xl justify-between px-5 text-[11px] font-semibold tracking-wide sm:px-8">
            <span>Jl. Simokalangan Barat Tol Terowongan No. 32, Surabaya</span>
            <span className="hidden sm:block">0811 3220 2929 · sdm29.fivedaysschool@gmail.com</span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white sm:px-8">
          <a href="#beranda" className="flex items-center gap-3" aria-label="Beranda">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-lg font-black text-[#08775c] shadow-lg">29</div>
            <div className="leading-tight">
              <strong className="block text-sm font-extrabold tracking-wide">SD MUHAMMADIYAH 29</strong>
              <span className="text-[10px] font-semibold tracking-[.19em] text-amber-300">FIVE DAYS SCHOOL</span>
            </div>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#beranda">Beranda</a><a href="#tentang">Tentang</a><a href="#program">Program</a>
            <a href="#berita">Berita</a><a href="#kontak">Kontak</a>
            <a href="#ppdb" className="rounded-full bg-[#f5b82e] px-5 py-3 text-[#18352d] shadow-lg shadow-black/10">Info SPMB</a>
          </div>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 lg:hidden" aria-label="Buka navigasi">
            <span className="text-xl">{open ? '×' : '☰'}</span>
          </button>
        </nav>
        {open && <div className="mx-5 rounded-2xl bg-white p-5 text-sm font-bold text-[#18352d] shadow-2xl lg:hidden">
          {['Beranda', 'Tentang', 'Program', 'Berita', 'Kontak'].map(x => <a key={x} onClick={() => setOpen(false)} href={`#${x.toLowerCase()}`} className="block border-b border-black/5 py-3">{x}</a>)}
        </div>}
      </header>

      <main>
        <section id="beranda" className="hero relative flex min-h-[790px] items-center overflow-hidden bg-[#075743] pt-36 text-white">
          <div className="absolute -left-20 top-44 h-64 w-64 rounded-full border-[55px] border-white/5" />
          <div className="absolute bottom-8 left-[47%] h-5 w-5 rounded-full bg-amber-300" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative z-10 max-w-xl">
              <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-amber-300 backdrop-blur">SEKOLAH ISLAM UNGGUL DI SURABAYA</span>
              <h1 className="text-5xl font-black leading-[1.05] tracking-[-.04em] sm:text-6xl lg:text-7xl">
                Tumbuh Cerdas,<br />Berkarakter <span className="text-amber-300">Islami.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                Membimbing generasi beriman, berprestasi, mandiri, dan berwawasan global dalam lingkungan belajar yang aman serta menyenangkan.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#ppdb" className="rounded-full bg-[#f5b82e] px-7 py-4 text-sm font-extrabold text-[#18352d] shadow-xl">Daftar SPMB <Arrow /></a>
                <a href="#tentang" className="rounded-full border border-white/35 px-7 py-4 text-sm font-extrabold">Jelajahi Sekolah</a>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {['A','F','N'].map((x,i) => <span key={x} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-[#075743] text-xs font-black ${i===0?'bg-amber-300 text-green-950':i===1?'bg-teal-200 text-green-950':'bg-white text-green-950'}`}>{x}</span>)}
                </div>
                <p className="text-xs leading-5 text-white/65"><strong className="block text-sm text-white">Keluarga besar Mudalan</strong>Belajar, bertumbuh, dan berprestasi bersama</p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-5 rotate-3 rounded-[42%_58%_46%_54%/55%_43%_57%_45%] bg-amber-300" />
              <div className="relative aspect-[4/4.15] overflow-hidden rounded-[42%_58%_46%_54%/55%_43%_57%_45%] border-[10px] border-white/15">
                <img className="h-full w-full object-cover object-center" src="/images/siswa-prestasi-2.jpg" alt="Siswa SD Muhammadiyah 29 menunjukkan penghargaan prestasi" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063f32]/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -right-2 top-8 hidden w-40 rotate-3 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl sm:block lg:w-48">
                <img className="aspect-[4/4.5] w-full object-cover object-top" src="/images/siswa-prestasi-1.jpg" alt="Siswi SD Muhammadiyah 29 meraih juara satu" />
                <p className="px-3 py-2 text-center text-[11px] font-extrabold text-[#18352d]">Bangga Berprestasi</p>
              </div>
              <div className="absolute -bottom-4 -left-5 rounded-2xl bg-white p-4 text-[#18352d] shadow-2xl sm:left-2">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-xl">✓</span><p className="text-xs"><strong className="block text-base">Sekolah Ramah Anak</strong>Aktif, kreatif, dan menyenangkan</p></div>
              </div>
            </div>
          </div>
          <svg className="absolute bottom-[-1px] w-full fill-[#fcfdfb]" viewBox="0 0 1440 85" preserveAspectRatio="none"><path d="M0,57 C320,110 550,4 865,45 C1110,77 1260,32 1440,0 L1440,85 L0,85Z" /></svg>
        </section>

        <section id="tentang" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div className="relative">
            <img className="h-[500px] w-[88%] rounded-[2rem] object-cover shadow-xl" src="https://sdmudalansurabaya.sch.id/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-27-at-11.00.12-600x338.jpeg" alt="Kegiatan siswa SD Muhammadiyah 29 Surabaya" />
            <div className="absolute bottom-5 right-0 max-w-[230px] rounded-3xl bg-[#f5b82e] p-7 shadow-xl">
              <strong className="text-4xl font-black">5 Hari</strong>
              <p className="mt-2 text-sm font-semibold leading-6">Belajar efektif, waktu keluarga tetap seimbang.</p>
            </div>
          </div>
          <div className="self-center">
            <p className="eyebrow">TENTANG SEKOLAH</p>
            <h2 className="section-title">Selamat Datang di<br /><span>SD Muhammadiyah 29</span></h2>
            <p className="mt-6 leading-8 text-[#577068]">SD Muhammadiyah 29 Five Days School Surabaya merupakan lembaga pendidikan dasar Islam yang memadukan keunggulan akademik, pembinaan karakter, dan nilai-nilai keislaman.</p>
            <p className="mt-4 leading-8 text-[#577068]">Sebagai amal usaha Persyarikatan Muhammadiyah, kami berkomitmen mencetak generasi yang cerdas, beriman, berakhlak mulia, disiplin, mandiri, dan kreatif.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#edf7f3] p-5"><strong className="block text-lg">Visi Kami</strong><p className="mt-2 text-sm leading-6 text-[#577068]">Generasi Islami, unggul dalam prestasi, berkarakter, mandiri, dan berwawasan global.</p></div>
              <div className="rounded-2xl bg-[#fff5d8] p-5"><strong className="block text-lg">Kolaboratif</strong><p className="mt-2 text-sm leading-6 text-[#577068]">Sekolah, orang tua, dan masyarakat bertumbuh bersama mendampingi anak.</p></div>
            </div>
          </div>
        </section>

        <section id="program" className="bg-[#eaf5f0] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">PROGRAM UNGGULAN</p><h2 className="section-title">Pendidikan Utuh untuk<br /><span>Masa Depan Anak</span></h2></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((p,i) => <article key={p.title} className={`group rounded-3xl p-7 transition hover:-translate-y-2 hover:shadow-xl ${i===0?'bg-[#08775c] text-white':'bg-white'}`}>
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${i===0?'bg-white/15 text-amber-300':'bg-emerald-50 text-[#08775c]'}`}>{p.icon}</span>
                <h3 className="mt-7 text-xl font-extrabold">{p.title}</h3><p className={`mt-3 text-sm leading-7 ${i===0?'text-white/70':'text-[#647a73]'}`}>{p.text}</p>
                <a href="#kontak" className="mt-7 inline-flex gap-2 text-sm font-extrabold">Pelajari <Arrow /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section id="berita" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">KABAR MUDALAN</p><h2 className="section-title">Cerita dari <span>Sekolah</span></h2></div>
            <a href="#berita" className="font-extrabold text-[#08775c]">Lihat semua berita <Arrow /></a>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {news.map(item => <article key={item.title} className="group overflow-hidden rounded-3xl border border-[#dce8e3] bg-white">
              <div className="h-56 overflow-hidden"><img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6"><span className="text-[11px] font-black uppercase tracking-[.14em] text-[#d28a00]">{item.category}</span><h3 className="mt-3 text-xl font-extrabold leading-7">{item.title}</h3><a href="#kontak" className="mt-5 inline-flex gap-2 text-sm font-bold text-[#08775c]">Baca selengkapnya <Arrow /></a></div>
            </article>)}
          </div>
        </section>

        <section id="ppdb" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#075743] px-7 py-14 text-white sm:px-14 lg:flex lg:items-center lg:justify-between lg:px-20">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[55px] border-white/5" />
            <div className="relative"><p className="text-xs font-black tracking-[.2em] text-amber-300">PENERIMAAN PESERTA DIDIK BARU 2027/2028</p><h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Saatnya tumbuh bersama keluarga besar Mudalan.</h2></div>
            <a href="https://wa.me/6281132202929" className="relative mt-8 inline-block shrink-0 rounded-full bg-[#f5b82e] px-7 py-4 text-sm font-extrabold text-[#18352d] lg:mt-0">Daftar / Info SPMB <Arrow /></a>
          </div>
        </section>
      </main>

      <footer id="kontak" className="bg-[#042f27] px-5 pb-8 pt-16 text-white/70 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          <div><strong className="text-lg text-white">SD MUHAMMADIYAH 29</strong><span className="mt-1 block text-xs font-bold tracking-[.16em] text-amber-300">FIVE DAYS SCHOOL SURABAYA</span><p className="mt-5 max-w-sm text-sm leading-7">Mendidik dengan hati, menginspirasi prestasi, dan menumbuhkan generasi Islami.</p></div>
          <div><strong className="text-white">Tautan Cepat</strong><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><a href="#tentang">Profil Sekolah</a><a href="#program">Program</a><a href="#berita">Berita</a><a href="#ppdb">SPMB</a></div></div>
          <div><strong className="text-white">Hubungi Kami</strong><p className="mt-4 text-sm leading-7">Jl. Simokalangan Barat Tol Terowongan No. 32, Sukomanunggal, Surabaya 60181<br />0811 3220 2929</p></div>
        </div>
        <p className="mx-auto mt-7 max-w-7xl text-xs">© 2026 SD Muhammadiyah 29 Five Days School Surabaya.</p>
      </footer>
    </div>
  )
}
