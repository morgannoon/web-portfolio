import "../../../App.css";
import "../../../components/styles/nav.css";
import { Link } from "react-router-dom";
import FadeInSection from "../../../components/functions/fadeinSection.jsx";

function App2() {
  return (
    <div className="relative min-h-screen flex">
      <div id="Work" className="container projects">
        
        {/* --- PillScribe --- */}
        <FadeInSection>
          <div className="project-wrapper">
            <Link to="/Pillscribe">
              <div className="card pill">
                <img
                  className="pill img"
                  src="images/pillscribe.png"
                  alt="PillScribe app image"
                />
              </div>
            </Link>
            <div className="project-info">
              <h2>PillScribe</h2>
              <div className="text">A Medication App Prototype</div>
            </div>
          </div>
        </FadeInSection>

        {/* --- Study Abroad --- */}
        <FadeInSection>
          <div className="project-wrapper">
            <Link to="/Abroad">
              <div className="card abroad">
                <img
                  className="abroad img"
                  src="images/abroadpic.png"
                  alt="Study Abroad group image"
                />
              </div>
            </Link>
            <div className="project-info">
              <h2>Study Abroad in Ireland</h2>
              <div className="text">2 Weeks Abroad Summer 2025</div>
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
}

export default App2;
