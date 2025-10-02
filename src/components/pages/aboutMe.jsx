import { useEffect, useRef } from "react";
import "../styles/aboutMe.css";

export default function AboutMe() {


    return (
        <div className="about">
            <div className="space">
                <div className="space">
                    
                    <img className="me" src="/images/me.png" alt="image of Morgan" />
                </div>
                <div className="space stack">
                    <h1 className="meet">Nice to meet you!</h1>
                    <p>
                        I’m a student at the University of Pittsburgh studying information
                        science with a focus in UX design and cybersecurity
                        <strong> graduating December 2025.</strong>
                    </p>
                    <br />
                    <p>
                        I’ve been involved in all sorts of arts since I was three!
                        I’ve played the violin, trumpet, and flute.
                        I’ve done <strong>Irish dance for 15 years</strong> and competed at the regional, national, and world championships.
                        I was <strong>color guard captain </strong>in high school following behind both my parents who are Drum Corps alumni.
                        On the side <strong>I love to draw, read, and bake</strong> to de-stress!
                    </p>
                </div>
            </div>
        </div>
    );
}
