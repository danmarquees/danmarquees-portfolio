import { useRef, useState } from 'react';
import { projects } from '../../constants/data';
import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';
import { ProjectDrawer } from '../ui/ProjectDrawer';

export function Projects({ t, prefersReducedMotion }) {
  const [hoverProject, setHoverProject] = useState({ src: '', visible: false, x: 0, y: 0 });
  const [drawerProject, setDrawerProject] = useState(null); // { project, index }
  const drawerTriggerRef = useRef(null);

  const openDrawer  = (project, index, trigger) => {
    drawerTriggerRef.current = trigger;
    setDrawerProject({ project, index });
  };
  const closeDrawer = ()               => setDrawerProject(null);

  return (
    <>
      {/* Floating project image that follows the cursor */}
      <div
        id="proj-hover-img"
        className={hoverProject.visible ? 'visible' : ''}
        style={{ left: hoverProject.x, top: hoverProject.y }}
      >
        <img src={hoverProject.src} alt="" id="proj-hover-src" />
      </div>

      {/* Project detail drawer */}
      {drawerProject && (
        <ProjectDrawer
          project={drawerProject.project}
          index={drawerProject.index}
          t={t}
          onClose={closeDrawer}
          returnFocusElement={drawerTriggerRef.current}
          prefersReducedMotion={prefersReducedMotion}
        />
      )}

      <section id="projects">
        <div className="projects-header">
          <div className="reveal">
            <div className="section-label">{t.selectedWork}</div>
            <RichText as="div" className="projects-title" html={t.projectsTitle} />
          </div>
          <div className="projects-count reveal">{t.projectsCount}</div>
        </div>

        <div id="project-list">
          {projects.map((project, index) => {
            const [name, image, tech] = project;
            return (
              <div
                className="project-item reveal"
                data-img={image}
                key={name}
                onMouseEnter={() => setHoverProject(p => ({ ...p, src: image, visible: true }))}
                onMouseLeave={() => setHoverProject(p => ({ ...p, visible: false }))}
                onMouseMove={e => setHoverProject(p => ({ ...p, x: e.clientX + 24, y: e.clientY - 90 }))}
              >
                <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <div className="project-name">{name}</div>
                  <div className="project-desc">{t.projectDescriptions[index]}</div>
                </div>
                <div className="project-tech">
                  {tech.map(item => <span className="tech-badge" key={item}>{item}</span>)}
                </div>
                <button
                  type="button"
                  className="project-link"
                  onClick={event => openDrawer(project, index, event.currentTarget)}
                  aria-label={`${t.project.details}: ${name}`}
                >
                  {t.project.details} <ArrowIcon />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
