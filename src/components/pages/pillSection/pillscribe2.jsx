import FadeInSection from "../../functions/fadeinSection";
import "../../styles/pill.css";

export default function Pillscribe2() {
    return (
        <>
            <div className="gradientRed">
                <FadeInSection>
                    <h1 className="white">
                        Top 10 cause of death and disability in the U.S.
                        <text>[2]</text>
                    </h1>
                </FadeInSection>
                <div className="stat-wrapper">
                    <FadeInSection>
                        <div className="stats">
                            <h1 className=" faded stat">
                                3.8
                            </h1>
                            <h1 className=" white">
                                million
                            </h1>
                            <text>
                                inpatient errors[1]
                            </text>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="stats">
                            <h1 className=" faded stat">
                                3.3
                            </h1>
                            <h1 className=" white">
                                million
                            </h1>
                            <text>
                                outpatient errors[1]
                            </text>

                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="stats">
                            <h1 className="faded stat">
                                $20.6
                            </h1>
                            <h1 className=" white">
                                billion
                            </h1>
                            <text>
                                annual costs[1]
                            </text>
                        </div>
                    </FadeInSection>

                </div>
                <div className="stat-wrapper">
                    <FadeInSection>
                        <div className="stats">
                            <h1 className=" white">
                                0.14%-55%
                            </h1>
                            <text>
                                of errors during dispensing
                                (dose/timing/patient/drug type)[1]
                            </text>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="stats">
                            <h1 className=" white">
                                25%
                            </h1>
                            <text>
                                of errors from illegible handwriting[4]
                            </text>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </>
    )
}