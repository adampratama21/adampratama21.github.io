//! Navbar Collapse :
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector("#navbarNav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

//! Back-to-top Button :
const backToTopButton = document.getElementById("back-to-top");
const header = document.getElementById("header");

window.onscroll = function () {
  const headerHeight = header.offsetHeight;
  const scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > headerHeight) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//! Modal - Project :
const buttons = document.querySelectorAll('.btn[data-bs-toggle="modal"]');

const modalBody = document.querySelector("#staticBackdrop .modal-body");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const projectName = this.getAttribute("data-project-name");
    const projectDescription = this.getAttribute("data-project-description");
    const projectTech = this.getAttribute("data-project-tech");
    const projectLink = this.getAttribute("data-project-link");
    const projectGithub = this.getAttribute("data-project-github");
    const projectImage = this.getAttribute("data-project-image");

    modalBody.innerHTML = `<div class="container">
                            <div class="row">
                                <div class="col-md-5 my-auto">
                                    <img src="${projectImage}" alt="${projectName}" class="img-fluid">
                                </div>
                                <div class="col-md-7">
                                    <ul class="list-group list-unstyled">
                                        <li>
                                            <h3 class="text-center text-decoration-underline">${projectName}</h3>    
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Description :</span>  ${projectDescription}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Tech Stack :</span>  ${projectTech}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">GitHub Repository :</span>     
                                                <a href="${projectGithub}" class="btn btn-primary" target="_blank">Visit Repository</a>
                                            </p>
                                        </li>
                                        <li>
                                          <span class="fw-bold">Project Link :</span> 
                                            <a href="${projectLink}" class="btn btn-primary" target="_blank">Visit Project</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>`;
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const type = this.getAttribute("data-type");

    const modalBody = document.querySelector("#staticBackdrop .modal-body");

    if (type === "project") {
      const projectName = this.getAttribute("data-project-name");
      const projectDescription = this.getAttribute("data-project-description");
      const projectTech = this.getAttribute("data-project-tech");
      const projectLink = this.getAttribute("data-project-link");
      const projectGithub = this.getAttribute("data-project-github");
      const projectImage = this.getAttribute("data-project-image");

      modalBody.innerHTML = `<div class="container">
                            <div class="row">                              
                                <div class="col-md-5 my-auto modal-image-top">
                                    <img src="${projectImage}" alt="${projectName}" class="img-fluid">
                                </div>
                                <div class="col-md-7">
                                    <ul class="list-group list-unstyled">
                                        <li>
                                            <h3 class="text-center text-decoration-underline">${projectName}</h3>    
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Description :</span>  ${projectDescription}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Tech Stack :</span>  ${projectTech}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">GitHub Repository :</span>     
                                                <a href="${projectGithub}" class="btn btn-primary" target="_blank">Visit Repository</a>
                                            </p>
                                        </li>
                                        <li>
                                          <span class="fw-bold">Project Link :</span> 
                                            <a href="${projectLink}" class="btn btn-primary" target="_blank">Visit Project</a>
                                        </li>                                        
                                    </ul>
                                </div>                              
                            </div>
                        </div>`;
    } else if (type === "certificate") {
      const certificateName = this.getAttribute("data-certificate-name");
      const certificateDescription = this.getAttribute("data-certificate-desc");
      const certificateDate = this.getAttribute("data-certificate-date");
      const certificateIssuer = this.getAttribute("data-certificate-issuer");
      const certificateLink = this.getAttribute("data-certificate-link");
      const certificateImage = this.getAttribute("data-certificate-image");

      modalBody.innerHTML = `<div class="container">
                            <div class="row">
                                <div class="col-md-5 my-auto modal-image-top">
                                    <img src="${certificateImage}" alt="${certificateName}" class="img-fluid">
                                </div>
                                <div class="col-md-7">
                                    <ul class="list-group list-unstyled">
                                        <li>
                                            <h3 class="text-center text-decoration-underline">${certificateName}</h3>    
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Description :</span>  ${certificateDescription}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Date Issued :</span>  ${certificateDate}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span class="fw-bold">Issued By :</span>  ${certificateIssuer}
                                            </p>
                                        </li>
                                        <li>
                                          <span class="fw-bold">Project Link :</span> 
                                            <a href="${certificateLink}" class="btn btn-primary" target="_blank">View Certificate</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>`;
    }
  });
});
