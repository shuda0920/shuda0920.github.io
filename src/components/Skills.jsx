import React from 'react';
import { BrainCircuit, Compass, Clapperboard, ArrowUpRight } from 'lucide-react';

// Three core areas; change copy and related project links here.
export const skillGroups = [
  {Icon:BrainCircuit,label:'AI & SYSTEMS',title:'AI 與系統開發',body:'整合 Python、Flutter 與 Web 技術，開發 AI 應用原型；從需求梳理、RAG／LLM 與向量檢索實作，到功能測試與 MVP 驗證，讓構想有可操作、可討論的系統依據。',works:[
    ['Right Way · Flutter 旅遊 App','tech.html?preview=right-way#right-way'],
    ['多代理人 RAG · 對話 MVP','tech.html?preview=rag#rag'],
    ['北一區性平教育中心 · 網站建置','tech.html?preview=gender-web#gender-web'],
  ]},
  {Icon:Compass,label:'PROJECT PLANNING',title:'專案企劃',body:'結合田野訪談、使用者研究與資料分析，釐清需求、整理提案並協調執行；透過品牌企劃、合作洽談與異業接洽，將商業目標轉譯為具體的內容與專案工作。',works:[
    ['《96 分鐘》· 合作企劃與宣傳製作','proo.html?preview=96minutes#96minutes'],
    ['文化開解所 · 國際見習企劃','proo.html?preview=maori#maori'],
    ['景美集應廟 · 訪談與質性研究','proo.html?preview=temple#temple'],
    ['LINE FRESH · 品牌與數位經營企劃','proo.html?preview=line#line'],
  ]},
  {Icon:Clapperboard,label:'VIDEO PRODUCTION',title:'影音製作',body:'從腳本發想、拍攝與後期剪輯到宣傳素材製作，依溝通目標安排敘事與視覺呈現；運用 After Effects、Blender 與影音工具，支援品牌故事、產品說明及企劃提案。',works:[
    ['信託遊戲 · 編劇、導演與剪輯','proo.html?preview=trust#trust'],
    ['LINE FRESH · 品牌與數位經營企劃','proo.html?preview=line#line'],
    ['營火旁的惡鬥 · Blender 場景製作','proo.html?preview=blender#blender'],
  ]},
];
export default function Skills(){return <div className="skill-grid">{skillGroups.map(({Icon,label,title,body,works})=><div className="skill" key={label}><Icon size={27}/><span>{label}</span><h3>{title}</h3><p>{body}</p><div className="skill-works"><h4>相關作品</h4>{works.map(([name,href])=><a key={href} href={href} aria-label={`預覽 ${name}`}>{name}<ArrowUpRight size={15}/></a>)}</div></div>)}</div>}
