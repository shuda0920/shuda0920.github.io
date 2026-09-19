import React, { useEffect, useRef, useState } from 'react';
import { List, X } from 'lucide-react';

// Change labels / order here. IDs must match the About page sections.
export const profileSections = [
  ['introduction', '自我介紹'],
  ['skills', '專長技能'],
  ['credentials', '專業證照'],
  ['experience', '工作經歷'],
];

export default function ProfileIsland() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState('introduction');
  const trigger = useRef(null);

  // One passive scroll listener, coalesced into animation frames.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = Math.min(innerHeight * 0.35, 220);
      let current = profileSections[0][0];
      for (const [id] of profileSections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);


  return (
    <nav className="profile-island" data-open={open} aria-label="個人檔案導覽">
      <div id="profile-island-links" className="island-links" inert={!open} aria-hidden={!open}>
        {profileSections.map(([id, label], index) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}
            onClick={() => {
              setActive(id);
            }}>
            {label}<span className="island-index">0{index + 1}</span>
          </a>
        ))}
      </div>
      <button ref={trigger} className="island-toggle" aria-controls="profile-island-links"
        aria-expanded={open} aria-label={open ? '收起個人導覽' : '展開個人導覽'}
        onClick={() => setOpen(value => !value)}>
        {open ? <X size={21} /> : <List size={24} />}
      </button>
    </nav>
  );
}
