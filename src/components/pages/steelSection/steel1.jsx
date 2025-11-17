import "../../styles/steel.css";

export default function steel1() {
    
    return (
        <div className={`relative min-h-screen flex`}>
            <div className="steel">
                <div className="header-wrapper">
                    <div className="header">
                        <h1 className="orange">
                            Steel Strings
                        </h1>
                        <h2 className="orange">
                            Prototype
                        </h2>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="purple">TEAM</h3>
                            <text>4 People</text>
                        </div>
                        <div className="bullets">
                            <h3 className="purple">TOOLS</h3>
                            <text>Figma</text>
                        </div>
                        <div className="bullets">
                            <h3 className="purple">TIMELINE</h3>
                            <text>2 Weeks</text>
                        </div>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="purple">CHALLENGE</h3>
                            <text>We were tasked with designing a mobile ticketing system for a an intimate music
                                venue in Pittsburgh. <strong>How do we create a seamless ticketing experience
                                    while allowing users to donate to causes they care about?</strong>
                            </text>
                        </div>
                    </div>
                </div>
                <img className="pghicon" src="images/iconSteel.png" alt="Steel Strings app icon" />
                <img className="string" src="images/pghapp.png" alt="Steel Strings app image" />
            </div>
        </div>
    )
}