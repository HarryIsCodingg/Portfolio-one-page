import React from "react";
import StackIcon from "tech-stack-icons";
import "./SkillsSection.css";
import Card from "../../../components/shared/card/Card";
import skillsConfig from "../../../core/data/skills.json";
import { CiDesktop } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { IoMdDoneAll } from "react-icons/io";
import { IoIosCloudOutline } from "react-icons/io";
import { SiDevbox } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { MdKeyboardCommandKey } from "react-icons/md";

const skillTitleConfig = {
  "languages": <SiDevbox />,
  "frontend": <CiDesktop />,
  "backend": <CiServer />,
  "databases": <GoDatabase />,
  "cloud-devops": <IoIosCloudOutline />,
  "testing-quality": <IoMdDoneAll />,
  "developer-tools": <MdKeyboardCommandKey />,
  "enterprise-security": <MdSecurity />,
};

class IconErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="skill-item-icon skill-item-icon--fallback" aria-label={this.props.label}>
          {this.props.label.charAt(0)}
        </div>
      );
    }

    return this.props.children;
  }
}

function SkillIcon({ iconName, label, fallbackSvg }) {
  if (fallbackSvg) {
    return (
      <div className="skill-item-icon" aria-label={label}>
        <div
          className="skill-item-icon-svg"
          dangerouslySetInnerHTML={{ __html: fallbackSvg }}
        />
      </div>
    );
  }

  if (iconName) {
    return (
      <IconErrorBoundary label={label}>
        <div className="skill-item-icon" aria-hidden="true">
          <StackIcon name={iconName} className="skill-item-icon-svg" />
        </div>
      </IconErrorBoundary>
    );
  }

  return (
    <div className="skill-item-icon skill-item-icon--fallback" aria-label={label}>
      {label.charAt(0)}
    </div>
  );
}

function SkillCategoryCard({ id, title, items }) {
  return (
    <Card className="skills-category-card">
      <div className="skills-category-top">
        <div className="skills-category-badge">
          {skillTitleConfig[id]}
        </div>
        <h3 className="skills-category-title">{title}</h3>
      </div>

      <div className="skills-grid">
        {items.map((item) => (
          <div className="skill-item" key={item.name}>
            <SkillIcon
              iconName={item.icon}
              label={item.name}
              fallbackSvg={item.svg}
            />
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
            id={category.id}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}