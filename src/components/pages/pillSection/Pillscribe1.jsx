import "../../styles/pill.css";

export default function Pillscribe1() {
    return (
        <>
            <div className="scribe">
                <div className="header-wrapper">
                    <div className="header">
                        <h1 className="red">
                            PillScribe
                        </h1>
                        <h2 className="red">
                            Prototype
                        </h2>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="darkBlue">TEAM</h3>
                            <text>5 People</text>
                        </div>
                        <div className="bullets">
                            <h3 className="darkBlue">TOOLS</h3>
                            <text>Figma</text>
                        </div>
                        <div className="bullets">
                            <h3 className="darkBlue">TIMELINE</h3>
                            <text>16 Weeks</text>
                        </div>
                    </div>
                    <div className="bullet-wrapper">
                        <div className="bullets">
                            <h3 className="darkBlue">CHALLENGE</h3>
                            <text>This project explores the growing issue of medication 
                                errors in the U.S. healthcare system. Our team set out to design a solution 
                                that improves accuracy and safety in hospitals.<strong>How might we create an application for 
                                    hospitals that helps reduce medication errors?</strong>
                            </text>
                        </div>
                    </div>
                </div>
                <img className="epic img" src="images/pillscribe.png" alt="Pill scribe app image" />
                </div>
        </>
    )
}