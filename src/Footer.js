import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="container footer-inner">
        <div
          className="footer-three-grid wow fadeIn animated"
          data-wow-delay="0.66s"
        >
          <div className="column-1-3">
            <img src="img/logo.png" width="120px" height="120px" alt="" />
          </div>
          <div className="column-2-3">
            {
              (console.log(window.innerWidth),
                window.innerWidth > 500 ? (
                  <nav className="footer-nav">
                    <ul>
                      <Link
                        href="#"
                        to="fh5co-hero-wrapper"
                        smooth={true}
                        duration={1000}
                      >
                        <li>Accueil</li>
                      </Link>
                      <a
                        href="#"
                        to="fh5co-features"
                        smooth={true}
                        duration={1000}
                      >
                        <li>Caractéristiques</li>
                      </a>
                      <a
                        href="#"
                        to="fh5co-reviews"
                        smooth={true}
                        duration={1000}
                      >
                        <li>Commentaires</li>
                      </a>
                      {/* <a
                      href="#"
                      to="fh5co-download"
                      smooth={true}
                      duration={1000}
                    >
                      <li className="active">Télécharger</li>
                    </a> */}
                    </ul>
                  </nav>
                ) : null)
            }
          </div>
          <div className="column-3-3">
            <div className="social-icons-footer">
              <a href="https://www.facebook.com/techlead">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.facebook.com/techlead">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/techlead">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <span className="border-bottom-footer"></span>

        <p className="copyright">
          &copy; 2018 App. Tous les droits sont réservés. Développé par{" "}
          <span style={{ color: "White", fontWeight: "bold" }}>TechLead </span>.
        </p>
      </div>
    </footer>
  );
};
