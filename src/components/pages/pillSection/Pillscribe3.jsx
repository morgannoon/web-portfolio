import FadeInSection from "../../functions/fadeinSection";
import "../../styles/pill.css";

export default function Pillscribe2() {
    return (
        <>

            <div className="scribe3">
                <h2 className="solution">
                    Our solution is an Epic healthcare records application
                </h2>
                <h2 className="solution">
                    designed to prevent medication errors
                </h2>
                <h2 className="solution">
                    enhance patient safety measures
                </h2>
                <h2 className="solution">
                    and steamline workflow accessible on Zebra TC5 mobile computers                </h2>

                <div className="card-wrapping">
                    <div className="card benefits">
                        <h2 className="white">
                            Prevents Death & Poor Patient Outcomes
                        </h2>
                        <text className="white-centering">
                            No misidentification
                            No misinterpretation
                            Personalized care[5]
                            Faster interventions[5]
                        </text>
                    </div>
                    <div className="card benefits">
                        <h2 className="white">
                            Improves Hospital Expenses
                        </h2>
                        <text className="white-centering">
                            Reduce medication error cost[5]
                            Low legal risks[5]
                        </text>
                    </div>
                    <div className="card benefits">
                        <h2 className="white">
                            Enhances Workflow
                        </h2>
                        <text className="white-centering">
                            Simplified user interface
                            Integrates with existing EMR/EHR systems & devices[8, 9, 10]
                        </text>
                    </div>
                </div>

            </div>
            <div className="scribe3">
                <div
                    className="figma-wrapper" style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}>
                    <iframe
                        style={{ border: 'none', width: '100%', height: '100%' }}
                        width="800"
                        height="450"
                        src="https://embed.figma.com/design/Jwe2kGFNFxcY6nX7wTwvj6/Pillscribe-Wireframes?node-id=0-1&embed-host=share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="scribe3 relfect">
                <div className="header-wrapper">
                    <h1 className="red">
                        Reflection
                    </h1>
                    <text>
                        This project gave me hands-on experience with the full design process,
                        from generating a problem statement and building a solution from the ground
                        up to creating concept designs and mapping out the user journey. I learned how
                        to write a comprehensive requirements document and saw how each stage of the
                        production cycle connects to the next. Working through these steps deepened my
                        understanding of how ideas evolve into tangible products and strengthened my
                        ability to approach problems methodically and creatively.
                    </text>
                    <a
                        href="https://docs.google.com/document/d/1ZduMUcToL7W7oZXEvdVP7uCxYrGqDNwh/edit?usp=sharing&ouid=107046239349535632202&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="darkBlue">Requirements & References Link</h3>
                    </a>
                    <h3 className="darkBlue">Team Credit</h3>
                    <text>Amy Zhang</text>
                    <text>Roja Kafle</text>
                    <text>Srushti Chavan</text>
                    <text>Lukas Weiland</text>
                </div>
            </div>
        </>
    )
}
