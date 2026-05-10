/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  MapPin, 
  Languages, 
  Award, 
  Monitor, 
  BookText, 
  ExternalLink, 
  Mail, 
  Github, 
  ChevronRight,
  Compass,
  Anchor,
  Wind,
  Droplets,
  Star
} from "lucide-react";
import { useState } from "react";

// --- Types ---
interface Certification {
  name: string;
}

interface Skill {
  name: string;
  level?: string;
}

interface Project {
  title: string;
  date: string;
  url?: string;
  videoUrl?: string;
  description: string;
}

// --- Constants ---
const CERTIFICATIONS: Certification[] = [
  { name: "基本安全" },
  { name: "保全職責" },
  { name: "保全意識" },
  { name: "救生艇操縱" },
  { name: "進階滅火" },
  { name: "醫療急救" },
  { name: "管理級雷達ARPA" },
  { name: "操作級雷達ARPA" },
  { name: "通用級GMDSS訓練" },
  { name: "助理級航行當值" }
];

const COMPUTER_SKILLS: Skill[] = [
  { name: "Microsoft Office" },
  { name: "Word" },
  { name: "Excel" },
  { name: "PowerPoint" }
];

const PROJECTS: Project[] = [
  {
    title: "4月20日作業",
    date: "2026-04-20",
    videoUrl: "/4月20日作業.mp4",
    description: "課堂專案作業成果展示"
  },
  {
    title: "4月3日 AI模擬旅遊",
    date: "2026-04-03",
    videoUrl: "/video.mp4",
    description: "運用 AI 技術規劃的模擬旅遊企劃"
  },
  {
    title: "個人公仔 3D Model",
    date: "Recent",
    url: "https://studio.tripo3d.ai/3d-model/f708357d-f836-40b8-a9af-d2c7d095e6f3?invite_code=VJPX94",
    description: "使用 Tripo3D 生成的個人化 3D 公仔模型"
  }
];

// --- Components ---

function SectionTitle({ title, icon: Icon }: { title: string; icon: any }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"about" | "portfolio">("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#FFFFFF] font-sans selection:bg-blue-500/30">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Profile Avatar */}
              <div className="w-36 h-36 md:w-48 md:h-48 shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-[#161B22]">
                <img src="/avatar.jpg" alt="Frank 薛富淋" className="w-full h-full object-cover object-[center_10%]" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[4px] font-bold text-blue-500 opacity-80">
                  <span>Gemini / 雙子座</span>
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  <span>Type A / 血型 A</span>
                </div>
                <div className="relative">
                  <h1 className="text-7xl md:text-[120px] font-[900] leading-[0.8] tracking-[-0.05em] text-blue-500 uppercase">
                    Frank
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mt-4 text-white uppercase">
                    薛富淋
                  </h2>
                </div>
                <div className="inline-block px-4 py-1.5 border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest rounded-full">
                  航海技術專業 / 國立高雄科技大學
                </div>
              </div>
            </div>

            <nav className="flex gap-4 border-b border-white/5 pb-2">
              <button 
                onClick={() => setActiveTab("about")}
                className={`text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'about' ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'text-white/40 hover:text-white pb-2'}`}
              >
                Profile / 個人檔案
              </button>
              <button 
                onClick={() => setActiveTab("portfolio")}
                className={`text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'portfolio' ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'text-white/40 hover:text-white pb-2'}`}
              >
                Works / 作品成果
              </button>
            </nav>
          </div>
        </motion.header>

        <AnimatePresence mode="wait">
          {activeTab === "about" ? (
            <motion.div 
              key="about"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column - Biography */}
              <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.section 
                  variants={itemVariants}
                  className="md:col-span-2 bg-white/[0.03] border-l-4 border-blue-500 p-8 md:p-12"
                >
                  <div className="text-[11px] uppercase tracking-[3px] text-blue-500 font-black mb-8">
                    ABOUT ME / 自傳摘要
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed text-white/80 font-medium">
                    <p>我是薛富淋，就讀於國立高雄科技大學。家庭教育培養我獨立負責與謹慎的態度，在校期間我參與系學會擔任文書股長，從中讓我學到如何有效的完成文書作業，並對 Excel、Word、PowerPoint 等相關軟體熟悉。</p>
                    <p>我也擔任班級的學務股長、副班代，負責班上的訂書及班費管理等作業，從中訓練我做事謹慎、條理分明、重視細節的習慣。</p>
                    <p className="text-white">我認為自己是個樂觀取近、抗壓性強的人。航海這份職業吸引我的是薪資待遇和增加國際觀，我希望能將在學所學的專業知識與英文能力應用與此，並為公司帶來貢獻。</p>
                  </div>
                </motion.section>

                <div className="space-y-8">
                  {/* Language */}
                  <motion.section 
                    variants={itemVariants} 
                    className="bg-white/[0.03] p-8 rounded-xl border border-white/5"
                  >
                    <div className="text-[11px] uppercase tracking-[3px] text-blue-500 font-black mb-6">
                      LANGUAGE / 語言能力
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-[900] text-white">TOEIC 430</div>
                        <div className="text-sm text-white/40 uppercase tracking-widest mt-1">English Proficiency</div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-lg font-bold text-white/80">台語 / 尚可</div>
                      </div>
                    </div>
                  </motion.section>

                  {/* Tech */}
                  <motion.section 
                    variants={itemVariants} 
                    className="bg-white/[0.03] p-8 rounded-xl border border-white/5"
                  >
                    <div className="text-[11px] uppercase tracking-[3px] text-blue-500 font-black mb-6">
                      TECHNICAL / 電腦技能
                    </div>
                    <div className="text-white/70 font-bold leading-relaxed">
                      Microsoft Office<br/>
                      (Word, Excel, PowerPoint)
                    </div>
                  </motion.section>
                </div>
              </div>

              {/* Certificates Grid */}
              <motion.section 
                variants={itemVariants}
                className="lg:col-span-12 bg-[#161B22] p-8 md:p-12 rounded-2xl border border-white/5"
              >
                <div className="text-[11px] uppercase tracking-[3px] text-blue-500 font-black mb-10">
                  CERTIFICATES / 取得證照
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.name} className="flex items-center gap-3 p-4 bg-white/[0.05] border border-blue-500/20 rounded-lg hover:border-blue-500/50 transition-colors group">
                      <span className="text-blue-500 font-black">•</span>
                      <span className="text-sm font-bold text-white/90 group-hover:text-blue-400 transition-colors">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          ) : (
            <motion.div 
              key="portfolio"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col bg-[#161B22] rounded-2xl border border-white/5 hover:border-blue-500 transition-all duration-500 overflow-hidden"
                >
                  {project.videoUrl && (
                    <div className="w-full aspect-video bg-black shrink-0 relative">
                      <video 
                        src={project.videoUrl}
                        controls
                        playsInline
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
                    <div className="text-[10px] uppercase tracking-[4px] font-black text-blue-500 mb-8 opacity-60">
                      Project 0{idx + 1} / {project.date}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm font-medium mb-12 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between w-full bg-blue-500 text-[#000] px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all group-hover:bg-white hover:scale-[1.02]">
                          <span>View Assignment</span>
                          <ChevronRight size={16} />
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center w-full border border-white/10 text-white/50 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest bg-white/[0.02]">
                          <span>Video Embedded Above</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-black tracking-tighter text-white">FRANK.</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-[3px] font-bold">
              © 2026 薛富淋 / Maritime Professional
            </p>
          </div>
          <div className="flex items-center gap-10">
            <a href="mailto:fxue295@gmail.com" className="text-white/40 hover:text-blue-500 transition-all font-black text-xs uppercase tracking-[2px]">
              Email
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="text-white/40 hover:text-blue-500 transition-all font-black text-xs uppercase tracking-[2px]">
              Resume
            </a>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
