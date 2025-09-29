import '../../../App.css'
import '../../../components/styles/nav.css'
import { Link } from "react-router-dom"
import FadeInSection from "../../../components/functions/fadeinSection.jsx"

function App3(props) {
    return (
        <div className={`relative min-h-screen flex `}>
            <div className="container projects">
                <FadeInSection>
                    <Link to="/Parkour">
                        <div className="card portal">
                            <div className="box description">
                                <h2>Portal Comet Parkour</h2>
                                <div className="text">
                                    An Itch.io parkour game
                                </div>
                            </div>
                            <img className="portal img" src="images/portal.png" alt="parkour desktop image" />
                        </div>
                    </Link>
                </FadeInSection>
                <FadeInSection>
                    <Link to="/SteelStrings">
                        <div className="card string">
                            <div className="box description">
                                <h2>Steel Strings</h2>
                                <div className="text">
                                    A philanthropic ticketing app case study
                                </div>
                            </div>
                            <img className="pgh img" src="images/pghapp.png" alt="Steel Strings app image" />
                        </div>
                    </Link>
                </FadeInSection>
            </div>
        </div>
    );
}

export default App3;