import React from "react";
import StackIcon from "tech-stack-icons";
import "./SkillsSection.css";
import Card from "../../../components/shared/card/Card";
import skillsConfig from "../../../core/data/skills.json";

function SkillIcon({ iconName, label }) {
  if (!iconName) {
    return (
      <div className="skill-item-icon skill-item-icon--fallback" aria-label={label}>
        {label.charAt(0)}
      </div>
    );
  }

  return (
    <div className="skill-item-icon" aria-hidden="true">
      <StackIcon name={iconName} className="skill-item-icon-svg" />
    </div>
  );
}

function SkillCategoryCard({ title, symbol, items }) {
  return (
    <Card className="skills-category-card">
      <div className="skills-category-top">
        <div className="skills-category-badge">{symbol}</div>
        <h3 className="skills-category-title">{title}</h3>
      </div>

      <div className="skills-grid">
        {items.map((item) => (
          <div className="skill-item" key={item.name}>
            <SkillIcon iconName={item.icon} label={item.name} />
            <span className="skill-item-name">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section-header">
        <h2 className="skills-section-title">Skills &amp; Technologies</h2>
        <p className="skills-section-subtitle">Tools and technologies I work with</p>
      </div>

      <div className="skills-categories-grid">
        {skillsConfig.map((category) => (
          <SkillCategoryCard
            key={category.id}
            title={category.title}
            symbol={category.symbol}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}