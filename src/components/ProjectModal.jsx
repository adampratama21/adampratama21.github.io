export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}></div>

      <div
        className={`modal fade ${project ? "show d-block" : ""}`}
        tabIndex="-1">
        <div className="container">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}></button>
              </div>
              <div className="modal-body d-flex column-gap-5 mx-auto">
                <div className="col-md-5 my-auto modal-image-top">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7">
                  <ul className="list-group list-unstyled p-1">
                    <li>
                      <h3 className="text-center text-decoration-underline">
                        {project.name}
                      </h3>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Description :</span>{" "}
                        {project.description}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Tech Stack :</span>{" "}
                        {project.techStack}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">GitHub Repository :</span>
                        <a
                          href={project.repoLink || "#"}
                          className="btn btn-secondary me-2 ms-2"
                          target="_blank"
                          rel="noopener noreferrer">
                          Visit Repository
                        </a>
                      </p>
                    </li>
                    <li>
                      <a
                        href={project.projectLink || "#"}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit Project
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
