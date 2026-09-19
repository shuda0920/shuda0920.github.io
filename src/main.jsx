import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Header from "./components/Header";
import ProfileIsland from "./components/ProfileIsland";
import React, { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ArrowRight, Play, Plus, X, Code2, BrainCircuit, Clapperboard, Users, Mail, Github, Linkedin, Award, ChevronRight, FileText } from "lucide-react";
import { mediaWorks, techWorks, mediaFilters, techFilters, experience } from "./editorial-data";
const page = location.pathname.endsWith("tech.html") ? "tech" : location.pathname.endsWith("proo.html") ? "media" : "about";
function Link({ href, children, ...props }) {
  return <a href={href} {.../^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {}} {...props}>{children}</a>;
}
function Footer() {
  return <footer><div className="footer-top"><span className="eyebrow">LET’S CONNECT</span><h2>有想法，<br /><em>一起聊聊。</em></h2><a className="email" href="mailto:ryanchen0920@gmail.com">ryanchen0920@gmail.com <ArrowUpRight /></a></div><div className="footer-bottom"><span>© 2026 陳昱達 YU-TA CHEN</span><div><Link href="https://github.com/shuda0920"><Github size={15} />GitHub</Link><Link href="https://www.linkedin.com/in/yuda-3b6753326"><Linkedin size={15} />LinkedIn</Link><a href="#main">回到頂端 ↑</a></div><span>TECHNOLOGY. STORIES. PEOPLE.</span></div></footer>;
}
function About() {

  return <><ProfileIsland /><section className="about-hero wrap"><div className="hero-kicker"><span>PERSONAL PORTFOLIO / 2026</span><span>BASED IN TAIPEI, TAIWAN</span></div><h1>PORTFOLIO<span className="sr-only"> — 關於陳昱達 Ryan Chen</span></h1><div className="hero-composition"><div className="hero-name"><span>YU-TA CHEN</span><em>Ryan Chen.</em><p>技術實作 × 企劃製作<br />讓需求成為可落地的成果</p><a className="underlined" href="#introduction">認識我 <ArrowRight size={19} /></a></div><figure className="portrait"><img src="assets/portfolio/ryan.jpg" alt="陳昱達 Ryan Chen 的個人照片" fetchPriority="high" /><figcaption>陳昱達 / TECHNOLOGY × STORYTELLING</figcaption><span className="portrait-label">Hello,<br /><em>I'm Ryan.</em></span></figure><div className="hero-stamp">TECH<br />AI & PRODUCT<br />MEDIA<span>✳</span></div></div><div className="hero-foot"><span>從需求出發，連結實作與協作。</span><span>SCROLL TO DISCOVER ↓</span></div></section><section className="intro wine" id="introduction"><div className="wrap intro-grid"><div><span className="eyebrow">01 / ABOUT ME</span><h2>在不同領域之間，<br />找到<em>連結。</em></h2><p>我是陳昱達，現就讀國立臺灣科技大學數位學習與教育研究所碩士班，畢業於世新大學資訊傳播學系。</p><p>我的實作橫跨 AI 產品原型、RAG 應用、使用者研究與企劃製作。從神通資訊的 AI 系統實驗、LINE FRESH 的地方品牌企劃，到華影的合作接洽與宣傳製作，我習慣先釐清需求與情境，再選擇合適的技術與執行方式。</p><p>我希望投入科技業的技術實作與產品／專案企劃工作，從需求梳理、原型驗證到跨方溝通與內容製作，協助團隊把想法推進到具體成果。以可展示的專案與實作經驗，連結技術、使用者與商業需求。</p><div className="intro-tags"><span>AI × PRODUCT</span><span>VIDEO × CULTURE</span><span>RESEARCH × PEOPLE</span></div></div><div className="intro-right"><div className="mosaic"><img src="assets/portfolio/p7-2.png" alt="Ryan 在活動現場進行分享" loading="lazy" /><div className="tile-grid" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} />)}</div></div><div className="education" id="education"><span className="eyebrow">EDUCATION</span><h3>國立臺灣科技大學</h3><p>數位學習與教育研究所 · 碩士班<br /><small>2026 — 就讀中</small></p><h3>世新大學</h3><p>資訊傳播學系 · 學士<br /><small>互動程式設計班級第一名</small></p></div></div></div></section><section className="wrap section skills" id="skills"><div className="section-title"><span className="eyebrow">02 / WHAT I BRING</span><h2>專長，不只一面。<em>Skills.</em></h2></div><Skills /></section><section className="wrap section credentials" id="credentials"><div className="section-title"><span className="eyebrow">03 / CREDENTIALS</span><h2>專業證照<em>Keep learning.</em></h2></div><Certificates /></section><section className="wine section" id="experience"><div className="wrap"><div className="section-title"><span className="eyebrow">04 / EXPERIENCE</span><h2>把經驗，變成養分。<em>The journey.</em></h2></div><Experience /></div></section><section className="wrap section pathways"><span className="eyebrow">EXPLORE MY WORK</span><div>{[["02", "\u5F71\u97F3\u8207\u5A92\u9AD4\u5275\u4F5C", "\u7528\u6545\u4E8B\uFF0C\u8B93\u4EBA\u7522\u751F\u5171\u9CF4\u3002", "proo.html"], ["03", "\u79D1\u6280\u8207 Web/App", "\u7528\u6280\u8853\uFF0C\u8B93\u60F3\u6CD5\u771F\u6B63\u904B\u4F5C\u3002", "tech.html"]].map(([n, t, d, u]) => <a href={u} key={n}><span>{n}</span><h2>{t}</h2><p>{d}</p><ArrowUpRight size={32} /></a>)}</div></section></>;
}
function Preview({ project: p, onClose }) {
  const dialog = useRef();
  const [slide, setSlide] = useState(-1);
  useEffect(() => {
    dialog.current.showModal();
    return () => {
      dialog.current?.close();
    };
  }, []);
  const photos = [p.image, ...p.gallery || []].filter(Boolean);
  return <dialog ref={dialog} className="preview-dialog" onClose={onClose} onClick={(e) => {
    if (e.target === dialog.current) dialog.current.close();
  }}><div className="dialog-head"><div><span className="eyebrow">{p.id?.startsWith("ipas-") || p.id?.startsWith("tqc-") ? "CERTIFICATE" : "PROJECT PREVIEW"}</span><h2>{p.title}</h2></div><button autoFocus onClick={() => dialog.current.close()} aria-label="關閉預覽"><X /></button></div><div className="preview-content">{slide >= 0 ? <img className="preview-photo" src={photos[slide]} alt={`${p.title}\u4F5C\u54C1\u5716\u7247 ${slide + 1}`} /> : p.youtube ? <iframe title={`${p.title} YouTube \u5F71\u7247`} src={`https://www.youtube-nocookie.com/embed/${p.youtube}`} allow="fullscreen; picture-in-picture" allowFullScreen /> : p.slides ? <iframe title={`${p.title}\u4F01\u5283\u7C21\u5831`} src={`https://docs.google.com/presentation/d/${p.slides}/preview`} allowFullScreen /> : p.driveVideo ? <iframe title={`${p.title}\u8A2A\u8AC7\u5F71\u7247`} src={`https://drive.google.com/file/d/${p.driveVideo}/preview`} allow="fullscreen" allowFullScreen /> : p.video ? <video controls playsInline src={p.video} poster={p.image} /> : <img className="preview-photo" src={photos[0]} alt={`${p.title}\u4F5C\u54C1\u5716\u7247`} />}</div><div className="preview-thumbs">{(p.youtube || p.slides || p.driveVideo || p.video) && <button className={slide === -1 ? "selected" : ""} onClick={() => setSlide(-1)}>播放／簡報</button>}{photos.map((src, i) => <button className={slide === i ? "selected" : ""} key={src} onClick={() => setSlide(i)} aria-label={`\u67E5\u770B\u5716\u7247 ${i + 1}`}><img src={src} alt="" /></button>)}</div><p className="preview-note">{p.note || "\u4F5C\u54C1\u9810\u89BD"}{(p.youtube || p.slides || p.driveVideo) && " \xB7 \u5982\u5916\u90E8\u5E73\u53F0\u7121\u6CD5\u8F09\u5165\uFF0C\u53EF\u4F7F\u7528\u4E0B\u65B9\u539F\u59CB\u9023\u7D50\u3002"}</p>{(p.url || p.driveVideo) && <Link className="underlined" href={p.url || `https://drive.google.com/file/d/${p.driveVideo}/view`}>{p.linkLabel || "\u958B\u555F\u539F\u59CB\u5F71\u7247"} <ArrowUpRight size={16} /></Link>}{p.github && <Link className="underlined project-github" href={p.github}><Github size={16} />GitHub 原始碼 <ArrowUpRight size={16} /></Link>}</dialog>;
}
function ProjectCard({ project: p, mode, onPreview }) {
  const playable = p.youtube || p.slides || p.driveVideo || p.video;
  return <article className={`work-card ${p.id === "right-way" ? "app-card" : ""}`} id={p.id}><div className="work-visual">{p.image ? <img src={p.image} alt={`${p.title}\u4F5C\u54C1\u9810\u89BD`} loading="lazy" /> : p.video ? <video controls preload="none" playsInline aria-label={`${p.title}\u64CD\u4F5C\u793A\u7BC4`} src={p.video} /> : <div className="research-visual"><FileText size={40} /><span>RESEARCH<br /><em>& possibilities.</em></span><small>研究計畫研擬</small></div>}{(p.image || playable) && <button className="preview-button" onClick={() => onPreview(p)} aria-label={`\u9810\u89BD ${p.title}`}>{playable ? <Play size={17} /> : <Plus size={18} />}<span>{p.slides ? "\u9810\u89BD\u7C21\u5831" : playable ? "\u64AD\u653E\u9810\u89BD" : "\u67E5\u770B\u4F5C\u54C1"}</span></button>}<span className="category-label">{p.category}</span></div><div className="work-copy"><span className="eyebrow">{p.type}</span><h2>{p.title}</h2>{p.subtitle && <p className="subtitle">{p.subtitle}</p>}<p>{p.description}</p><div className="tags">{p.tags?.map((t) => <span key={t}>{t}</span>)}</div>{p.role && <p className="role"><span>我的角色</span>{p.role}</p>}{p.result && <div className="outcome"><span>↗</span>{p.result}</div>}{mode === "tech" && <details className="project-detail"><summary>解決痛點與技術架構 <Plus size={16} /></summary><p>{p.pain}</p><ol>{p.flow?.map((x) => <li key={x}>{x}</li>)}</ol>{p.detail && <p>{p.detail}</p>}{p.note && <p className="note">{p.note}</p>}</details>}{p.url && <Link className="underlined" href={p.url}>{p.linkLabel || "\u67E5\u770B\u5B8C\u6574\u4F5C\u54C1"}<ArrowUpRight size={16} /></Link>}{p.github && <Link className="underlined project-github" href={p.github}><Github size={16} />GitHub 原始碼 <ArrowUpRight size={16} /></Link>}{p.links && <div className="additional-links">{p.links.map(([label, url]) => <Link key={url} href={url}>{label}<ArrowUpRight size={14} /></Link>)}</div>}{mode === "media" && p.note && <p className="note">{p.note}</p>}</div></article>;
}
function WorkPage({ mode }) {
  const isTech = mode === "tech";
  const all = isTech ? techWorks : mediaWorks;
  const filters = isTech ? techFilters : mediaFilters;
  const [filter, setFilter] = useState("\u5168\u90E8");
  const [preview, setPreview] = useState(null);
  const closePreview = () => {
    setPreview(null);
    const url = new URL(location.href);
    url.searchParams.delete('preview');
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  };
  useEffect(() => {
    const id = new URLSearchParams(location.search).get('preview');
    const project = all.find(item => item.id === id);
    if (project && (project.image || project.video || project.youtube || project.slides || project.driveVideo)) setPreview(project);
  }, [mode]);
  const visible = all.filter((p) => filter === "\u5168\u90E8" || p.category === filter || p.categories?.includes(filter));
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }
  }, []);
  return <><section className="wrap work-hero"><div className="hero-kicker"><span>{isTech ? "03 / TECHNOLOGY & PRODUCTS" : "02 / MEDIA & STORYTELLING"}</span><span>SELECTED WORKS & EXPLORATIONS</span></div><h1>{isTech ? "BUILD." : "CREATE."}<em>{isTech ? "with purpose." : "with feeling."}</em></h1><div className="work-intro"><h2>{isTech ? "\u79D1\u6280\u8207 Web/App" : "\u5F71\u97F3\u8207\u5A92\u9AD4\u5275\u4F5C"}</h2><p>{isTech ? "從需求、資料到原型，呈現技術實作、驗證與問題解決的過程。" : "從品牌故事、合作企劃到影音與宣傳素材，呈現溝通目標如何落實為內容。"}</p></div></section><section className="wrap work-section"><div className="filter-bar" role="group" aria-label="作品分類">{filters.map((f) => <button key={f} aria-pressed={filter === f} onClick={() => {
    setFilter(f);
    const nextUrl = new URL(location.href);
    nextUrl.searchParams.delete("preview");
    history.replaceState(null, "", nextUrl.pathname + nextUrl.search);
  }}>{f}</button>)}<span aria-live="polite">{String(visible.length).padStart(2, "0")} WORKS</span></div><div className="work-grid">{visible.map((p) => <ProjectCard key={p.id} project={p} mode={mode} onPreview={setPreview} />)}</div>{isTech && <aside className="project-end"><Code2 size={30} /><div><h3>從原型到實際應用，持續迭代。</h3><p>公開網站與原型可由各卡片前往；企業專案及研究計畫以可公開的作品資料說明。</p></div><Link href="https://github.com/shuda0920" className="underlined">GitHub 個人頁 <ArrowUpRight size={17} /></Link></aside>}</section>{preview && <Preview key={preview.id} project={preview} onClose={closePreview} />}</>;
}
function App() {
  return <><a href="#main" className="skip">跳至主要內容</a><Header page={page} /><main id="main">{page === "about" ? <About /> : <WorkPage mode={page} />}</main><Footer /></>;
}
createRoot(document.getElementById("root")).render(<App />);
