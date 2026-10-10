"use client";

import { useRef, useState } from "react";
import { Expand, X } from "lucide-react";

export default function ProjectPreview({ previews, name, caption, wide = false }) {
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const preview = previews[active];
  const activeCaption = preview.caption || caption;
  return (
    <div className={`project-preview ${wide ? "preview-wide" : ""}`}>
      <div className="preview-toolbar">
        <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="preview-name">{name}</span>
        {previews.length > 1 && <div className="preview-switch" aria-label={`${name} previews`}>
          {previews.map((item, index) => <button type="button" key={item.src} aria-pressed={active === index} onClick={() => setActive(index)}>{item.label}</button>)}
        </div>}
      </div>
      <button className="preview-image-button" type="button" aria-label={`Enlarge ${name}: ${preview.label}`} onClick={() => dialog.current.showModal()}>
        <img className="preview-image" src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} loading="lazy" />
        <span className="expand-label"><Expand size={16} /> Enlarge</span>
      </button>
      <p className="preview-caption">{activeCaption}</p>
      <dialog ref={dialog} className="preview-dialog" aria-label={`${name} — ${preview.label}`} onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }}>
        <div className="dialog-content">
          <div className="dialog-heading"><span>{name} / {preview.label}</span><button type="button" autoFocus aria-label="Close preview" onClick={() => dialog.current.close()}><X size={24} /></button></div>
          <img src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} />
          <p>{activeCaption}</p>
        </div>
      </dialog>
    </div>
  );
}
