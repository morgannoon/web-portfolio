import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import "./styles/nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleWorkClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById("Work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById("Work");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

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
            <a href="/#Work" onClick={handleWorkClick}>
              Work
            </a>
          </li>
          <li>
            <a
              href="images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
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
