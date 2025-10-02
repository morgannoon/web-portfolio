import "./styles/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer container">
          <div className="case">
            <div className="header">
              Links
            </div>
            <div className="case" style={{ flexDirection: "row" }}>
              <a href="https://www.linkedin.com/in/morganenoonan" target="_blank">
                <img className="case img" src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/morgannoon" target="_blank">
                <img className="case img" src="/images/gitcat.png" alt="git hub" />
              </a>
              <a href="https://www.instagram.com/ganmor_n" target="_blank">
                <img className="case img" src="/images/insta.png" alt="instagram" />
              </a>
              <a href="https://www.goodreads.com/user/show/187083363-morgan-noonan" target="_blank">
                <img className="case img" src="/images/goodreads.png" alt="good reads" />
              </a>
            </div>
          </div>
          contacts
          <div className="case">
            <div className="header">
              Contacts
            </div>
            <div className="case contacts">
              <div className="contact-item">
                <a href="tel:+19733036115">
                  <img className="case img" src="/images/phone.png" alt="phone" />
                  (973) 303-6115</a>
              </div>
              <div className="contact-item">
                <a href="mailto:morgannoon2@gmail.com">
                  <img className="case img" src="/images/email.png" alt="email" />
                  morgannoon2@gmail.com</a>
              </div>
              <div className="contact-item">
                <a href="mailto:men83@pitt.edu">
                  <img className="case img" src="/images/email.png" alt="email" />
                  men83@pitt.edu</a>
              </div>
            </div>

          </div>
        </div>
        <div className="case copyright">
        &copy; 2025 Morgan Noonan. All rights reserved.
        </div>
      </div>
    </div>
  );
}
