import fotoAdam from "../assets/images/foto_adam.jpg";
import instagram from "../assets/images/logo/instagram_logo.png";
import linkedin from "../assets/images/logo/linkedin_logo.png";
import github from "../assets/images/logo/github_logo.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="text-center">
        <div className="container d-flex flex-column mt-5 mt-md-0">
          <h2>About Me</h2>
          <div className="row">
            <div className="about col-md-12">
              <img
                src={fotoAdam}
                alt="Adam Pratama"
                className="rounded-circle my-4 img-fluid"
                width="200"
              />
              <p className="col-10 text-center mx-auto">
                I'm an aspiring Front-End Developer with experience in building
                responsive web applications using HTML, CSS (Bootstrap),
                JavaScript, and React. Passionate about creating user-friendly
                and visually appealing interfaces. Actively developing my skills
                through personal projects. Looking for an opportunity to
                contribute to a development team and grow as a professional
                developer.
              </p>
            </div>
            <div className="col-md-8 mt-5 mx-auto">
              <h4>Social Media</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mt-3 column-gap-md-5 column-gap-3 mb-5">
                <li className="logo">
                  <a
                    href="https://www.instagram.com/adam__pratama"
                    target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="logo-cover"
                    />
                  </a>
                </li>
                <li className="logo">
                  <a
                    href="https://www.linkedin.com/in/adampratama21/"
                    target="_blank">
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      className="logo-contain"
                    />
                  </a>
                </li>
                <li className="logo">
                  <a
                    href="https://github.com/adampratama21"
                    target="_blank">
                    <img
                      src={github}
                      alt="GitHub"
                      className="logo-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 mt-3 mx-auto"></div>
            <h4>Contact :</h4>
            <ul className="list-unstyled mt-2 mb-5 mx-auto list-group d-flex flex-column align-items-center">
              <li className="btn btn-light list-group-item contact-email">
                <a
                  href="mailto:adam629pratama@gmail.com"
                  className="text-decoration-none">
                  adam629pratama@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
