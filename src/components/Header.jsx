import { language, languageHref } from "../i18n/runtime";
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const pages = [
  ['about', 'index.html', '關於 Ryan'],
  ['media', 'proo.html', '影音與媒體創作'],
  ['tech', 'tech.html', '科技與 Web/App'],
];

export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = matchMedia('(min-width: 701px)');
    const reset = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', reset);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', reset);
    };
  }, [open]);

  return (
    <header ref={header} className="masthead" data-menu-open={open}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
      <a className="wordmark" href="index.html" aria-label="Ryan 首頁">ryan<span>®</span></a>
      <nav id="site-navigation" aria-label="主要導覽">
        {pages.map(([id, href, label], i) => (
          <a key={id} href={href} onClick={() => setOpen(false)} aria-current={page === id ? 'page' : undefined}>
            <small>0{i + 1}</small>{label}
          </a>
        ))}
      </nav>
      <a className="language-switch" href={languageHref()} data-language-switch="true" lang={language === "en" ? "zh-Hant" : "en"} aria-label={language === "en" ? "切換為中文" : "Switch to English"}>{language === "en" ? "中" : "EN"}</a>
      <a className="header-mail" href="mailto:ryanchen0920@gmail.com" aria-label="寄信給 Ryan"><Mail size={20} /></a>
      <button ref={toggle} className="mobile-menu-toggle" aria-controls="site-navigation"
        aria-expanded={open} aria-label={open ? '關閉主選單' : '開啟主選單'} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
