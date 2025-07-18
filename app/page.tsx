'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaEye, FaLaptopCode, FaPalette, FaComments, FaMobileAlt } from "react-icons/fa";
import { useDarkMode } from "./layout";
// Komponen React-Bits dan komponen custom akan dibuat di bawah

// Pindahkan deklarasi komponen ke atas sebelum Home
function DarkModeToggle() {
  const { dark, toggle } = useDarkMode();
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition text-2xl"
      title="Toggle Dark Mode"
      onClick={toggle}
      aria-label="Toggle Dark Mode"
    >
      {dark ? '🌞' : '🌙'}
    </button>
  );
}
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Tentang Saya
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-center mb-10 text-[#D0E6F7]">
          Saya Fitra Rizky Oktarian, seorang Frontend Developer & UI Designer yang berfokus pada pembuatan antarmuka web modern, responsif, dan penuh interaksi. Saya senang memecahkan masalah, belajar teknologi baru, dan berkolaborasi dalam tim untuk menciptakan solusi digital yang berdampak.
        </motion.p>
        {/* Skillset */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skillset</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillBar icon={<FaEye />} name="React.js" level={90} />
            <SkillBar icon={<FaEye />} name="Next.js" level={85} />
            <SkillBar icon={<FaEye />} name="Tailwind CSS" level={90} />
            <SkillBar icon={<FaEye />} name="UI/UX Design" level={80} />
            <SkillBar icon={<FaEye />} name="TypeScript" level={75} />
            <SkillBar icon={<FaEye />} name="Framer Motion" level={70} />
          </div>
        </div>
        {/* Timeline Pengalaman & Pendidikan */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Pengalaman & Pendidikan</h3>
          <ol className="relative border-l-2 border-[#A67B5B] ml-4">
            <TimelineItem year="2023 - Sekarang" title="Frontend Developer (Freelance)" desc="Mengerjakan berbagai project web untuk klien lokal & internasional, fokus pada performa & UI/UX." />
            <TimelineItem year="2021 - 2025" title="UI Designer" desc="Mendesain aplikasi mobile & web, kolaborasi dengan tim developer dan product owner." />
            <TimelineItem year="2018 - 2022" title="Administrasi Negara - Universitas Lampung" desc="Aktif di organisasi IT, lomba, dan magang di startup teknologi." />
          </ol>
        </div>
      </div>
    </section>
  );
}

// Komponen SkillBar
function SkillBar({ icon, name, level }: { icon: React.ReactNode; name: string; level: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-2xl text-[#A67B5B]">{icon}</span>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-[#D0E6F7]">{level}%</span>
        </div>
        <div className="w-full h-3 bg-[#D0E6F7]/20 rounded-full">
          <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-3 rounded-full bg-[#A67B5B]" style={{ width: `${level}%` }} />
        </div>
      </div>
    </div>
  );
}

// Komponen TimelineItem
function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <li className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-[#A67B5B] rounded-full -left-1.5 border-2 border-white" />
      <time className="mb-1 text-sm font-normal leading-none text-[#D0E6F7]">{year}</time>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-base font-normal text-[#D0E6F7]">{desc}</p>
    </li>
  );
}
function ProjectsSection() {
  const [filter, setFilter] = React.useState<string>("All");
  const [modal, setModal] = React.useState<ProjectType | null>(null);

  const projects: ProjectType[] = [
    {
      title: "Modern Portfolio Website",
      image: "https://source.unsplash.com/600x400/?website,design",
      desc: "Website portofolio interaktif dengan Next.js, Tailwind, dan animasi Framer Motion.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Web",
      demo: "https://fitra-portfolio-demo.com",
      github: "https://github.com/fitrarizky/portfolio",
    },
    {
      title: "UI Design System",
      image: "https://source.unsplash.com/600x400/?ui,design",
      desc: "Kumpulan komponen UI reusable untuk aplikasi web dan mobile.",
      tech: ["Figma", "React-Bits"],
      category: "UI Design",
      demo: "https://figma.com/@fitrarizky",
      github: "https://github.com/fitrarizky/ui-kit",
    },
    {
      title: "Productivity App",
      image: "https://source.unsplash.com/600x400/?app,productivity",
      desc: "Aplikasi to-do list dengan fitur drag & drop dan dark mode.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      category: "Apps",
      demo: "https://fitra-todoapp.com",
      github: "https://github.com/fitrarizky/todo-app",
    },
    {
      title: "Color Palette Tool",
      image: "https://source.unsplash.com/600x400/?color,tool",
      desc: "Tools untuk generate dan simpan palet warna, cocok untuk designer.",
      tech: ["Next.js", "Chakra UI"],
      category: "Tools",
      demo: "https://fitra-color.com",
      github: "https://github.com/fitrarizky/color-tool",
    },
  ];

  const categories = ["All", "Web", "UI Design", "Apps", "Tools"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Portofolio & Project
        </motion.h2>
        {/* Filter kategori */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full border transition font-medium ${filter === cat ? "bg-[#A67B5B] text-white border-[#A67B5B]" : "bg-transparent border-[#D0E6F7] text-[#D0E6F7] hover:bg-[#A67B5B]/30"}`}>
              {cat}
            </button>
          ))}
        </div>
        {/* Grid project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <motion.div key={p.title} whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #A67B5B33" }} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg cursor-pointer group transition" onClick={() => setModal(p)}>
              <div className="h-48 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-[#D0E6F7] mb-3 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map(t => <span key={t} className="bg-[#D0E6F7]/20 text-[#D0E6F7] px-2 py-1 rounded text-xs">{t}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#A67B5B] text-white hover:bg-[#D0E6F7] hover:text-[#0F172A] text-sm font-semibold transition"><FaEye /> Demo</a>
                  <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#D0E6F7] text-[#0F172A] hover:bg-[#A67B5B] hover:text-white text-sm font-semibold transition"><FaEye /> GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal detail project */}
        {modal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-[#1e293b] rounded-xl max-w-lg w-full p-8 relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-3 right-3 text-2xl text-[#A67B5B] hover:text-[#D0E6F7]" onClick={() => setModal(null)}>&times;</button>
              <img src={modal.image} alt={modal.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2">{modal.title}</h3>
              <p className="text-[#D0E6F7] mb-3">{modal.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {modal.tech.map(t => <span key={t} className="bg-[#D0E6F7]/20 text-[#D0E6F7] px-2 py-1 rounded text-xs">{t}</span>)}
              </div>
              <div className="flex gap-3">
                <a href={modal.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#A67B5B] text-white hover:bg-[#D0E6F7] hover:text-[#0F172A] text-sm font-semibold transition"><FaEye /> Demo</a>
                <a href={modal.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#D0E6F7] text-[#0F172A] hover:bg-[#A67B5B] hover:text-white text-sm font-semibold transition"><FaEye /> GitHub</a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

type ProjectType = {
  title: string;
  image: string;
  desc: string;
  tech: string[];
  category: string;
  demo: string;
  github: string;
};
function ServicesSection() {
  const services = [
    {
      icon: <FaLaptopCode />, title: "Pembuatan Website", desc: "Website modern, responsif, dan cepat untuk bisnis atau personal branding.",
    },
    {
      icon: <FaPalette />, title: "Desain UI/UX", desc: "Desain antarmuka aplikasi & web yang menarik, mudah digunakan, dan efektif.",
    },
    {
      icon: <FaComments />, title: "Konsultasi IT", desc: "Diskusi & solusi seputar pengembangan produk digital, workflow, dan teknologi.",
    },
    {
      icon: <FaMobileAlt />, title: "Aplikasi Mobile", desc: "Desain & prototipe aplikasi mobile dengan pengalaman pengguna terbaik.",
    },
  ];
  return (
    <section id="services" className="py-24 bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Layanan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} whileHover={{ scale: 1.04, boxShadow: "0 0 32px #A67B5B55" }} className="bg-[#1e293b] rounded-xl p-8 flex flex-col items-center text-center shadow-lg transition group cursor-pointer hover:ring-2 hover:ring-[#A67B5B]">
              <div className="text-4xl mb-4 text-[#A67B5B] group-hover:text-[#D0E6F7] transition">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-[#D0E6F7]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Resume & CV
        </motion.h2>
        <div className="flex justify-center mb-8">
          <a href="/cv-fitra.pdf" download className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[#A67B5B] hover:bg-[#D0E6F7] hover:text-[#0F172A] font-semibold shadow-lg transition-colors duration-200">
            <FaDownload /> Unduh PDF
          </a>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold">Fitra Rizky Oktarian</h3>
              <p className="text-[#D0E6F7]">Frontend Developer | UI Designer</p>
            </div>
            <div className="text-[#D0E6F7] text-sm">
              orian3969@gmail.com<br />
              LinkedIn: linkedin.com/in/fitrarizky
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Pendidikan</h4>
            <ul className="list-disc ml-6 text-[#D0E6F7]">
              <li>universitas lampung fisip</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Pengalaman Kerja</h4>
            <ul className="list-disc ml-6 text-[#D0E6F7]">
              <li>Frontend Developer (Freelance) - 2021-Sekarang</li>
              <li>UI Designer - 2021-Sekarang</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Skill</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">UI/UX Design</span>
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-[#A67B5B]/80 text-white px-3 py-1 rounded-full text-sm">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactSection() {
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Kontak Saya
        </motion.h2>
        <form
          action="https://formsubmit.co/your@email.com" // Ganti dengan email asli di FormSubmit
          method="POST"
          className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col gap-5"
          onSubmit={e => {
            setStatus('idle');
            // Validasi manual (opsional, HTML5 sudah cukup)
            const form = e.target as HTMLFormElement;
            if (!form.nama.value || !form.email.value || !form.pesan.value) {
              e.preventDefault();
              setStatus('error');
            } else {
              setStatus('success');
            }
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/thanks" />
          <div>
            <label htmlFor="nama" className="block mb-1 font-medium">Nama</label>
            <input type="text" id="nama" name="nama" required className="w-full px-4 py-2 rounded bg-[#0F172A] border border-[#A67B5B] text-white focus:outline-none focus:ring-2 focus:ring-[#A67B5B]" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-[#0F172A] border border-[#A67B5B] text-white focus:outline-none focus:ring-2 focus:ring-[#A67B5B]" />
          </div>
          <div>
            <label htmlFor="pesan" className="block mb-1 font-medium">Pesan</label>
            <textarea id="pesan" name="pesan" required rows={5} className="w-full px-4 py-2 rounded bg-[#0F172A] border border-[#A67B5B] text-white focus:outline-none focus:ring-2 focus:ring-[#A67B5B]" />
          </div>
          <button type="submit" className="mt-2 px-6 py-2 rounded-lg bg-[#A67B5B] hover:bg-[#D0E6F7] hover:text-[#0F172A] font-semibold shadow-lg transition-colors duration-200">Kirim Pesan</button>
          {status === 'success' && <p className="text-green-400 mt-2">Pesan berhasil dikirim!</p>}
          {status === 'error' && <p className="text-red-400 mt-2">Semua field wajib diisi.</p>}
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* Background image dan overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/WhatsApp Image 2025-07-18 at 20.31.23_35fe1a3d.jpg" alt="Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/90 via-[#A67B5B]/20 to-[#D0E6F7]/30 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold text-center drop-shadow-lg">
            Fitra Rizky Oktarian
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <TypingText text="Frontend Developer | UI Designer | Problem Solver" className="text-xl md:text-2xl font-medium text-[#D0E6F7]" />
          </motion.div>
          <div className="flex gap-4 mt-6">
            <CTAButton href="#projects" icon={<FaEye />} text="Lihat Portofolio" />
            <CTAButton href="/cv-fitra.pdf" icon={<FaDownload />} text="Unduh CV" download />
            <CTAButton href="#contact" icon={<FaEnvelope />} text="Kontak Saya" />
          </div>
        </div>
        {/* Dark mode toggle */}
        <div className="absolute top-6 right-6 z-20">
          <DarkModeToggle />
        </div>
      </section>

      {/* About Me */}
      <AboutSection />
      {/* Projects */}
      <ProjectsSection />
      {/* Services */}
      <ServicesSection />
      {/* Resume */}
      <ResumeSection />
      {/* Contact */}
      <ContactSection />
    </main>
  );
}

// Komponen TypingText (efek ketik otomatis)
type TypingTextProps = { text: string; className?: string };
function TypingText({ text, className = "" }: TypingTextProps) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
}

// Komponen CTAButton
function CTAButton({ href, icon, text, download }: { href: string; icon: React.ReactNode; text: string; download?: boolean }) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#A67B5B] hover:bg-[#D0E6F7] hover:text-[#0F172A] font-semibold shadow-lg transition-colors duration-200"
    >
      {icon} {text}
    </motion.a>
  );
}
