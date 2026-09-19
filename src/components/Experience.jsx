import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '../editorial-data';

// Keep organization mapping explicit; unmatched entries use the supplied shield.
const logos = {
  '神通資訊 MITAC': 'mitac.png',
  'LINE Taiwan · LINE FRESH': 'line-user.png',
  '世新大學無障礙資源中心': 'shu.png',
  '世新資傳系學會': 'shu.png',
};
export default function Experience() {
  return <div className="timeline experience-list">
    {experience.map(([date, title, role, description, url]) => (
      <article className="experience-card" key={title}>
        <img className="experience-watermark" src={`assets/logos/${logos[title] || 'fallback.svg'}`}
          alt="" aria-hidden="true" loading="lazy" onError={event => {
            event.currentTarget.onerror = null;
            if (!event.currentTarget.src.endsWith('/fallback.svg')) event.currentTarget.src = 'assets/logos/fallback.svg';
          }} />
        <span className="experience-tint" aria-hidden="true" />
        <span className="date">{date}</span>
        <div className="experience-copy">
          <h3>{title}</h3><h4>{role}</h4><p>{description}</p>
          {url && <a className="underlined" href={url}
            {...(url.startsWith('https:') ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
            查看相關作品與紀錄 <ArrowUpRight size={16} />
          </a>}
        </div>
      </article>
    ))}
  </div>;
}
