import { useEffect, useRef } from "react";
import "../../../App.css";
import "../../../components/styles/nav.css";

function App1() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Foreground content */}
      <div className="container home max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl gap-4 relative z-10 mt-8">
        <text className="title text">
          Hi, I'm
        </text>
        <h1 className="wordCarousel wrapper">
          <div>
            <ul className="flip4">
              <li>a baker</li>
              <li>an artist</li>
              <li>a dancer</li>
              <li>Morgan Noonan</li>
            </ul>
          </div>
        </h1>
        <div className="title-wrap">
          <div className="title text">
            a University of Pittsburgh student studying UX Design striving to bridge
            empathy and innovation through technology.
          </div>
          <br />
          <div className="title text">
            Recently{" "}
            <a
              href="https://www.pnc.com/en/about-pnc.html?lnksrc=topnav"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              @PNC
            </a>{" "}
            HQ
          </div>
        </div>
      </div>

      {/* Bottom-right SVG */}
        <object
          type="image/svg+xml"
          data="/images/graphic2.svg"
          className="graphic"
          aria-label="Decorative graphic"
        ></object>

    </div>
  );
}

export default App1;
