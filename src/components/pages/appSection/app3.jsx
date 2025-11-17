import "../../../App.css";
import "../../../components/styles/nav.css";
import { Link } from "react-router-dom";
import FadeInSection from "../../../components/functions/fadeinSection.jsx";

function App3(props) {
  return (
    <div className="relative min-h-screen flex">
      <div className="container projects">

        <FadeInSection>
          <div className="flex flex-col items-center">
            <Link to="/Parkour">
              <div className="card portal">
                <img
                  className="portal img"
                  src="images/portal.png"
                  alt="parkour desktop image"
                />
              </div>
            </Link>
            <div className="box description text-center mt-4">
              <h2>Portal Comet Parkour</h2>
              <div className="text">An Itch.io Parkour Game</div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-col items-center">
            <Link to="/SteelStrings">
              <div className="card string">
                <img
                  className="pgh img"
                  src="images/pghapp.png"
                  alt="Steel Strings app image"
                />
              </div>
            </Link>
            <div className="box description text-center mt-4">
              <h2>Steel Strings</h2>
              <div className="text">
                A Philanthropic Ticketing App Prototype
              </div>
            </div>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
}

export default App3;
