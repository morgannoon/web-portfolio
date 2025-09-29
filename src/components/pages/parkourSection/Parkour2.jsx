import "../../styles/Parkour.css";


export default function Parkour2() {

    return (
        <div className={`relative min-h-screen flex`}>
            <div className="gradientPurple">
                <div className="header-wrapper">
                    <h1 className="gradient greenPurple">
                        Here's the Breakdown
                    </h1>
                    <div className="text-wrap">
                        <text>
                            3 Deliverables
                        </text>
                        <text>
                            3.5 Weeks Each
                        </text>
                    </div>
                </div>
                <div className="breakdown">
                    <div className="count-wrapper">
                        <h1 className="gradient-number">
                            1
                        </h1>
                        <div className="text-wrapping">
                            Game Type - Parkour<br />
                            Build Environment <br />
                            Find Audio<br />
                            Record Cutscene
                        </div>
                    </div>
                    <img className="place" src="gifs/cutscene.gif" alt="placeholder" />
                </div>
                <div className="breakdown">
                    <div className="count-wrapper">
                        <h1 className="gradient-number">

                            2
                        </h1>
                        <div className="text-wrapping">
                            Cutscene Transition<br />
                            Game Physics<br />
                            Game Control Tutorial<br />
                            Programmatic Animation <br />
                            Interactive Activity
                        </div>
                    </div>
                    <img className="place" src="gifs/deliverable2.gif" alt="placeholder" />
                </div>
                <div className="breakdown">
                    <div className="count-wrapper">
                        <h1 className="gradient-number">
                            3
                        </h1>
                        <div className="text-wrapping">
                            Player Damange & Death Screen<br />
                            Game Audio <br />
                            Game Ending<br />
                            Upload to Itch.io
                        </div>
                    </div>
                    <img className="place" src="gifs/deliverable3.gif" alt="placeholder" />
                </div>
            </div>
            <div className="parkour relfect">
                <div className="header-wrapper">
                    <h1 className="purple">
                        Reflection
                    </h1>
                    <text>
                        Building a Unity game from scratch was both challenging and rewarding.
                        I especially enjoyed designing the environment, fine-tuning the camera work, and bringing the game
                        to life through audio and editing.
                        These creative aspects allowed me to fully immerse myself in shaping the player’s experience.
                        <br />
                        However, working on the controls and physics proved to be more difficult,
                        requiring extra problem-solving and troubleshooting. In the end, the process gave me a deeper
                        appreciation for the balance between technical implementation and creative design in game development.
                    </text>
                    <a
                        href="https://mnoonan2.itch.io/portal-comet-parkour"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <h3 className="green">Itch.io Game Link</h3>
                            <text>Password: immersivemedia</text>
                    </a>
                </div>
            </div>
        </div>
    )
}