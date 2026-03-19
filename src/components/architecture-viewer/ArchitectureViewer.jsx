import React from 'react';
import './ArchitectureViewer.css';

export default function ArchitectureViewer({ svgSrc, alt }) {
  return (
    <div className="architecture-viewer">
      <div className="architecture-viewer-inner">
        <img src={svgSrc} alt={alt} className="architecture-image" />
      </div>
    </div>
  );
}
