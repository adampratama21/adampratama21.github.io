/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="my-5">
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
          <h2 className="text-center">Experience</h2>
          <div className="row">
            <div className="d-flex flex-row justify-content-center col-md-10 col-12 mx-auto">
              <ol>
                <li>
                  <span>Oct - Dec 2023</span>
                  <p className="text-justify">
                    <span className="fw-bolder">PT. Satria Raksa Buminusa</span>{" "}
                    - A privately owned national company specializing in
                    security services.
                  </p>
                  <span className="fw-bolder">Data Analyst (Internship) :</span>
                  <ul>
                    <li className="ms-md-3">
                      Analyzed electronic attendance data of security personnel
                      from the <span className="fst-italic">Smart Patrol</span>{" "}
                      app using Microsoft Excel, generating weekly/monthly
                      reports for insights.
                    </li>
                    <li className="ms-md-3 mt-2">
                      Managed <span className="fst-italic">Smart Patrol</span>{" "}
                      app accounts and updated personnel records, ensuring data
                      accuracy.
                    </li>
                    <li className="ms-md-3 mt-2">
                      Developed a dashboard to monitor security patrol activity,
                      lateness trends and performance.
                    </li>
                    <li className="ms-md-3 mt-2">
                      Created a{" "}
                      <span className="fst-italic">KTA Summary Dashboard</span>,
                      providing real-time monitoring of active and expiring
                      identification cards.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
