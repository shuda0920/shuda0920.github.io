import React from 'react';
import { dictionary } from './translations.js';

export const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
const phrases = Object.keys(dictionary).sort((a,b) => b.length-a.length);
export function t(value) {
  if (language !== 'en' || typeof value !== 'string' || !/[\u3400-\u9fff]/.test(value)) return value;
  if (dictionary[value]) return dictionary[value];
  const trimmed = value.trim();
  if (dictionary[trimmed]) return value.replace(trimmed, dictionary[trimmed]);
  // Handles composite accessible names such as “Preview {project title}”.
  let result = value;
  for (const key of phrases) if (result.includes(key)) result = result.replaceAll(key, dictionary[key]);
  return result;
}
export function localHref(href) {
  if (language !== 'en' || typeof href !== 'string' || !/^(index|proo|tech)\.html/.test(href)) return href;
  const url = new URL(href, location.href); url.searchParams.set('lang','en');
  return url.pathname.split('/').pop()+url.search+url.hash;
}
export function languageHref() {
  const url = new URL(location.href);
  if(language === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang','en');
  return url.pathname+url.search+url.hash;
}
// Build-time JSX factory: translation happens inside React, never by mutating DOM text.
// Data IDs, filter values, URLs and callbacks stay in their original form.
export function h(type, props, ...children) {
  if (typeof type === 'string') {
    props = {...props};
    for (const key of ['title','alt','aria-label','placeholder']) if(props[key]) props[key]=t(props[key]);
    if(type==='a' && !props['data-language-switch']) props.href=localHref(props.href);
    const translateChild = child => Array.isArray(child) ? child.map(translateChild) : typeof child==='string' ? t(child) : child;
    children=children.map(translateChild);
  }
  return React.createElement(type,props,...children);
}
document.documentElement.lang=language==='en'?'en':'zh-Hant';
if(language==='en') {
  document.title = location.pathname.endsWith('proo.html')?'Media & Storytelling | Ryan Chen':location.pathname.endsWith('tech.html')?'Technology & Products | Ryan Chen':'About Ryan Chen | Portfolio';
  document.querySelector('meta[name="description"]')?.setAttribute('content','Ryan Chen — technical implementation and project production. Explore AI prototypes, requirements discovery, partnership planning, and brand storytelling.');
}
