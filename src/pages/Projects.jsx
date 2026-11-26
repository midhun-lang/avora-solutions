
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const projects = [
  {
    number: "01",
    title: "Digital Legacy Vault",
    category: "Web Applications",
    type: "SECURITY / DIGITAL PRESERVATION",
    description:
      "A secure digital legacy platform exploring encrypted storage and modern technologies for preserving important digital information.",
    technologies: ["React", "Node.js", "MongoDB", "Encryption"],
    visual: "vault-visual",
    symbol: "01",
  },
  {
    number: "02",
    title: "OceanPulse",
    category: "Platforms",
    type: "IOT / OCEAN MONITORING",
    description:
      "An ocean monitoring platform concept with buoy-focused data and role-based dashboards for different users.",
    technologies: ["React", "Node.js", "MongoDB", "IoT"],
    visual: "ocean-visual",
    symbol: "02",
  },
  {
    number: "03",
    title: "VitalSync",
    category: "Web Applications",
    type: "HEALTHCARE / MANAGEMENT",
    description:
      "A clinic management application with a dedicated doctor module designed to support everyday healthcare workflows.",
    technologies: ["React", "Node.js", "MongoDB"],
    visual: "vital-visual",
    symbol: "03",
  },
  {
    number: "04",
    title: "SafeRoute 360",
    category: "Concepts",
    type: "DISASTER MANAGEMENT / LOGISTICS",
    description:
      "An integrated disaster shelter and relief supply chain system concept focused on coordinating resources during emergencies.",
    technologies: ["Web Development", "Data Management", "Logistics"],
    visual: "safe-visual",
    symbol: "04",
  },
];

const filters = [
  "All",
  "Web Applications",
  "Platforms",
  "Concepts",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="cinematic-projects">

      {/* HERO */}
      <section className="projects-cinematic-hero">
        <Reveal>
          <span className="cinematic-label">
            AVORA / SELECTED WORK
          </span>

          <h1>
            IDEAS MADE
            <br />
            <span>REAL.</span>
          </h1>

          <div className="projects-hero-bottom">
            <p>
              A selection of digital products, platforms and
              concepts shaped by curiosity, technology and
              the desire to solve meaningful problems.
            </p>

            <span className="projects-total">
              04 <small>FEATURED PROJECTS</small>
            </span>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="projects-cinematic-section">

        <div className="projects-cinematic-heading">
          <span>01 — 04 / PORTFOLIO</span>
          <span>EXPLORE OUR WORK</span>
        </div>

        {/* FILTERS */}
        <div className="projects-cinematic-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter ? "selected" : ""
              }
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="projects-cinematic-grid">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <article className="cinematic-project-card">

                <div className={`project-art ${project.visual}`}>
                  <div className="project-art-top">
                    <span>AVORA® / PROJECT {project.number}</span>
                    <span>{project.type}</span>
                  </div>

                  <div className="project-art-symbol">
                    <span>{project.symbol}</span>
                  </div>

                  <div className="project-art-bottom">
                    <span>CONCEPT & DEVELOPMENT</span>
                    <span>2026</span>
                  </div>
                </div>

                <div className="cinematic-project-info">
                  <div>
                    <span className="cinematic-project-category">
                      {project.type}
                    </span>

                    <h2>{project.title}</h2>
                  </div>

                  <span className="project-static-arrow">
                    <ArrowUpRight size={23} />
                  </span>
                </div>

                <p className="cinematic-project-description">
                  {project.description}
                </p>

                <div className="cinematic-project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p>No projects found in this category.</p>
        )}
      </section>

      {/* CTA */}
      <section className="projects-cinematic-cta">
        <Reveal>
          <span className="cinematic-label">
            THE NEXT ONE COULD BE YOURS
          </span>

          <h2>
            WHAT'S YOUR
            <br />
            <span>BIG IDEA?</span>
          </h2>

          <p>
            Every project begins somewhere. Let's start
            building something meaningful together.
          </p>

          <Link to="/contact" className="cinematic-link">
            START A PROJECT
            <span><ArrowUpRight size={19} /></span>
          </Link>
        </Reveal>
      </section>

    </main>
  );
}

export default Projects;
