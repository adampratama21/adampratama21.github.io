import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const navbar = document.getElementById("navbarNav");
      const toggler = document.querySelector(".navbar-toggler");

      if (
        navbar.classList.contains("show") &&
        !navbar.contains(e.target) &&
        !toggler.contains(e.target)
      ) {
        toggler.click();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg mb-md-5 px-3">
        <a
          className="navbar-brand navbar-dark"
          href="#">
          Adam Pratama
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["about", "skills", "experience", "certificates", "projects"].map(
              (section) => (
                <li
                  className="nav-item"
                  key={section}>
                  <a
                    className="nav-link"
                    href={`#${section}`}
                    onClick={() =>
                      document.querySelector(".navbar-toggler").click()
                    }>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
