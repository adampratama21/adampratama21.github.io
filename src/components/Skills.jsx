import html from "../assets/images/logo/html.png";
import css from "../assets/images/logo/css.png";
import javascript from "../assets/images/logo/javascript.png";
import bootstrap from "../assets/images/logo/bootstrap.png";
import node from "../assets/images/logo/nodejs.png";
import express from "../assets/images/logo/expressjs.png";
import react from "../assets/images/logo/react.png";
import vscode from "../assets/images/logo/visual-studio-code.png";
import git from "../assets/images/logo/git.png";
import github from "../assets/images/logo/github_logo.png";
import npm from "../assets/images/logo/npm.png";
import word from "../assets/images/logo/word.png";
import excel from "../assets/images/logo/excel.png";
import ppt from "../assets/images/logo/power-point.png";

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="my-5">
        <div className="container mt-5 mt-md-0">
          <h2 className="text-center">Skill & Techonologies</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <h4 className="mb-3">Tech Learned :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src={html}
                    alt="HTML"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src={css}
                    alt="CSS"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={javascript}
                    alt="JavaScript"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src={bootstrap}
                    alt="Bootstrap"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src={node}
                    alt="NodeJS"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src={express}
                    alt="ExpressJS"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={react}
                    alt="React"
                    className="logo-contain"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-3">Tools :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src={vscode}
                    alt="Visual Studio Code"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={git}
                    alt="Git"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={github}
                    alt="GitHub"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={npm}
                    alt="npm"
                    className="logo-cover"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-2">Other Skills :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src={word}
                    alt="Ms. Word"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src={excel}
                    alt="Ms. Excel"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src={ppt}
                    alt="Ms. PowerPoint"
                    className="logo-cover"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <h4 className="mb-3">Languages :</h4>
              <ul className="list-unstyled mb-4 list-group d-flex flex-column align-items-center">
                <li className="list-group-item">Bahasa Indonesia (Native)</li>
                <li className="list-group-item">Bahasa Inggris (Proficient)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
