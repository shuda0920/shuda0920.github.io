import React, { useEffect, useRef, useState } from 'react';
import { Award, ArrowUpRight, X } from 'lucide-react';

const certificates = [
  ['ipas-intermediate', 'iPAS', 'AI 應用規劃師 · 中級', '2026 · 機器學習類'],
  ['ipas-associate', 'iPAS', 'AI 應用規劃師 · 初級', '2025 · 能力鑑定通過'],
  ['tqc-python', 'TQC', '程式語言 Python 3', '程式設計能力認證'],
  ['tqc-data', 'TQC', 'Python 3 網頁資料擷取與分析', '資料蒐集與分析能力認證'],
];

function CertificatePhoto({ certificate: [id, issuer, title, detail], onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    return () => element.close();
  }, []);
  return (
    <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-title"
      onClose={onClose} onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <button className="certificate-close" autoFocus aria-label="關閉證照" onClick={() => dialog.current.close()}><X /></button>
      <figure className="certificate-frame">
        <div className="certificate-photo"><img src={`assets/certificates/${id}.jpg`} alt={`${title}正式證照，個資已遮蔽`} /></div>
        <figcaption>
          <div><span className="certificate-issuer">{issuer}</span><h3 id="certificate-title">{title}</h3></div>
          <div><p>{detail}</p><p>身分證字號與出生日期已遮蔽。</p><a href={`assets/certificates/${id}.jpg`} target="_blank" rel="noopener noreferrer">查看完整尺寸 <ArrowUpRight size={15} /></a></div>
        </figcaption>
      </figure>
    </dialog>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  return <>
    <div className="cert-grid">
      {certificates.map(certificate => {
        const [id, issuer, title, detail] = certificate;
        return <article className="cert" key={id}>
          <Award className="cert-symbol" size={28} aria-hidden="true" />
          <div className="cert-copy"><span>{issuer}</span><h3>{title}</h3><p>{detail}</p>
            <button className="underlined" aria-label={`查看證照：${title}`} onClick={() => setSelected(certificate)}>查看證照 <ArrowUpRight size={16} /></button>
          </div>
        </article>;
      })}
    </div>
    {selected && <CertificatePhoto certificate={selected} onClose={() => setSelected(null)} />}
  </>;
}
