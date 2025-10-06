import '../../../App.css'
import '../../../components/styles/nav.css'
import { Link } from "react-router-dom"
import FadeInSection from "../../../components/functions/fadeinSection.jsx"

function App2(props) {
    return (
        <div className={`relative min-h-screen flex`}>
            <div id = "Work" className="container projects">

                <FadeInSection>
                    <Link to="/Pillscribe">
                        <div className="card pill">
                            <div className="box description">
                                <h2>PillScribe</h2>
                                <div className="text">
                                    A Medication App Case Study
                                </div>
                            </div>
                            <img className="pill img" src="images/pillscribe.png" alt="Pill scribe app image" />
                        </div>
                    </Link>
                </FadeInSection>
                <FadeInSection>
                    <Link to="/Abroad">
                        <div className="card abroad">
                            <div className="box description">
                                <h2>Study Abroad in Ireland</h2>
                                <div className="text">
                                    2 Weeks Abroad Summer 2025
                                </div>
                            </div>
                            <img className="abroad img" src="images/abroadpic.png" alt="abroad group image" />
                        </div>
                    </Link>
                </FadeInSection>
            </div>
        </div>
    );
}

export default App2;