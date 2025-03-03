import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="contact-links">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+1234567890">
                  <i className="fas fa-phone-alt"></i> Call
                </a>
              </li>
              <li>
                <a href="mailto:gobindapaudelofficial@gmail.com">
                  <i className="fas fa-envelope"></i> Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~017b7e086439c305aa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-briefcase"></i> Upwork
                </a>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <h4>Follow Me</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/gobindapaudel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gobindapaudel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gobindapaudel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <h4>Other Sites:</h4>
            <ul>
              <li>
                <a
                  href="https://tccofficial.netlify.app/developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-desktop"></i> Trinity Computer Council
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Gobinda Paudel</p>
          </div>
          <a href="#" className="top-btn">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
