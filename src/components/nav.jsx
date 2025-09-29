import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import "./styles/nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box nav">
      <HashLink to="/">
        <p className="text barcode">Morgan Noonan</p>
      </HashLink>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/AboutMe" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <HashLink to="/#Work" onClick={() => setIsOpen(false)}>
              Work
            </HashLink>
          </li>
          <li>
            <a href="images/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger-icon">☰</div>
      </div>
    </div>
  );
}
