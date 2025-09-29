import "../../styles/pill.css";

export default function Pillscribe1() {
    return (
        <>
            <div className="scribe">
                <div className="header-wrapper">
                    <div className="header">
                        <h1 className="red">
                            Steel Strings
                        </h1>
                        <h2 className="red">
                            Case Study
                        </h2>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="darkBlue">TEAM</h3>
                            <text>4 People</text>
                        </div>
                        <div className="bullets">
                            <h3 className="darkBlue">TOOLS</h3>
                            <text>Figma</text>
                        </div>
                        <div className="bullets">
                            <h3 className="darkBlue">TIMELINE</h3>
                            <text>2 Weeks</text>
                        </div>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="darkBlue">CHALLENGE</h3>
                            <text>As part of a fictional case study for a school project,
                                we designed a mobile ticketing system for a an intimate music
                                venue in Pittsburgh. <strong>How do we create a seamless ticketing experience
                                    while allowing users to donate to causes they care about?</strong>
                            </text>
                        </div>
                    </div>
                </div>
                <img className="epic img" src="images/pillscribe.png" alt="Pill scribe app image" />
                </div>
        </>
    )
}