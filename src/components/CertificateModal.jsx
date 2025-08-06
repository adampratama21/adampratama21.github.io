export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}></div>

      <div
        className={`modal fade ${certificate ? "show d-block" : ""}`}
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
                    src={certificate.image}
                    alt={certificate.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7">
                  <ul className="list-group list-unstyled p-1">
                    <li>
                      <h3 className="text-center text-decoration-underline">
                        {certificate.name}
                      </h3>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Description :</span>{" "}
                        {certificate.description}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Date Issued :</span>{" "}
                        {certificate.dateIssued}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Issued By :</span>{" "}
                        {certificate.issuedBy}
                      </p>
                    </li>
                    <li>
                      <a
                        href={certificate.link || "#"}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer">
                        View Certificate
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
