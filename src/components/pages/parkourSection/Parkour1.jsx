import "../../styles/Parkour.css";

export default function Parkour1() {

    return (
        <div className={`relative min-h-screen flex`}>
            <div className="parkour">
                <div className="header-wrapper">
                    <div className="header">
                        <h1 className="purple">
                            Portal Comet Parkour
                        </h1>
                        <h2 className="purple">
                            Itch.io
                        </h2>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="green">TEAM</h3>
                            <text>Solo</text>
                        </div>
                        <div className="bullets">
                            <h3 className="green">TOOLS</h3>
                            <text>Unity Game Engine</text>
                        </div>
                        <div className="bullets">
                            <h3 className="green">TIMELINE</h3>
                            <text>10 Weeks</text>
                        </div>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="green">CHALLENGE</h3>
                            <text>I had full creative grounds to make
                                whatever game I wanted with zero foundational
                                knowledge of how to build a game or how to use Unity Game
                                Engine by the end of the semester. <strong>How on earth do you build a
                                    game from scratch?</strong>
                            </text>
                        </div>
                    </div>
                </div>
                <img className="img parkourComputer" src="images/portal.png" alt="parkour desktop image" />
            </div>
        </div>
    )
}