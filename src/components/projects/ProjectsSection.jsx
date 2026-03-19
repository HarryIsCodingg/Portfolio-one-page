import React, { useMemo, useState } from 'react';
import projectsConfig from '../../core/data/projects/projectsConfig';
import projectImages from '../../core/data/projects/projectImages';
import ProjectShowcaseCard from '../project-showcase-card/ProjectShowcaseCard';
import AppModal from '../shared/app-modal/AppModal';
import ArchitectureViewer from '../architecture-viewer/ArchitectureViewer';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(() => {
    return projectsConfig.map((project) => ({
      ...project,
      image: projectImages[project.imageKey] || null,
    }));
  }, []);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {projects.map((project) => (
        <ProjectShowcaseCard
          key={project.id}
          image={project.image}
          imageAlt={project.imageAlt}
          tags={project.tags}
          title={project.title}
          description={project.description}
          codeHref={project.codeHref}
          liveHref={project.liveHref}
          architectureLabel={project.architectureLabel}
          codeLabel={project.codeLabel}
          liveLabel={project.liveLabel}
          onArchitectureClick={project.architectureSvg ? () => setSelectedProject(project) : undefined}
        />
      ))}

      <AppModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        title={selectedProject?.architectureTitle || 'Architecture'}
      >
        {selectedProject?.architectureSvg && (
          <ArchitectureViewer
            svgSrc={selectedProject.architectureSvg}
            alt={selectedProject.architectureTitle || selectedProject.title}
          />
        )}
      </AppModal>
    </>
  );
}
