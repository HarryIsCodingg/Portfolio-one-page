import React from 'react';
import './ProjectShowcaseCard.css';

export default function ProjectShowcaseCard({
  image,
  imageAlt,
  tags = [],
  title,
  description,
  onArchitectureClick,
  codeHref,
  liveHref,
  architectureLabel = 'Architecture',
  codeLabel = 'Code',
  liveLabel = 'Live',
  className = '',
}) {
  return (
    <div className={`project-showcase-card ${className}`.trim()}>
      <div className="project-showcase-media">
        {image && <img src={image} alt={imageAlt || title} className="project-showcase-image" />}
      </div>

      <div className="project-showcase-content">
        {tags.length > 0 && (
          <div className="project-showcase-tags">
            {tags.map((tag) => (
              <span key={tag} className="project-showcase-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="project-showcase-title">{title}</h3>
        <p className="project-showcase-description">{description}</p>

        <div className="project-showcase-actions">
          {onArchitectureClick && (
            <button
              type="button"
              className="project-showcase-btn project-showcase-btn--primary"
              onClick={onArchitectureClick}
            >
              {architectureLabel}
            </button>
          )}

          {codeHref && (
            <a
              href={codeHref}
              target="_blank"
              rel="noreferrer"
              className="project-showcase-btn project-showcase-btn--outline"
            >
              {codeLabel}
            </a>
          )}

          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noreferrer"
              className="project-showcase-btn project-showcase-btn--muted"
            >
              {liveLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
