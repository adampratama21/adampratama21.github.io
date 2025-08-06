import { useState } from "react";
import Card from "./Card";
import ProjectModal from "./ProjectModal";

export default function Project({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="my-5">
        <div className="container mt-5 mt-md-0">
          <h2 className="text-center">Projects</h2>
          <div className="row">
            <div className="d-flex flex-column flex-md-row justify-content-md-center column-gap-md-5">
              {projects.map((project, index) => (
                <div
                  className="col-md-4"
                  key={index}>
                  <Card
                    image={project.image}
                    name={project.name}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
