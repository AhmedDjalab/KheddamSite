import React from "react";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div id="fh5co-hero-wrapper">
      <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
        <a className="navbar-brand" href="">
          <img src="img/logo.png" width="100px" height="100px" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-items-center ml-auto mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="fh5co-hero-wrapper"
                smooth={true}
                duration={1000}
              >
                Accueil <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="fh5co-features"
                smooth={true}
                duration={1000}
              >
                Caractéristiques
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="fh5co-reviews"
                smooth={true}
                duration={1000}
              >
                Commentaires
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="fh5co-download"
                smooth={true}
                duration={1000}
              >
                Télécharger
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="fh10co-download"
                smooth={true}
                duration={1000}
              >
                Contactez Nous
              </Link>
            </li>
          </ul>
          {/* <div className="social-icons-header">
            <a href="https://www.facebook.com/techlead">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.facebook.com/techlead">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/techlead">
              <i className="fab fa-twitter"></i>
            </a>
          </div> */}
        </div>
      </nav>

      <div className="container fh5co-hero-inner">
        <h1 className="animated fadeIn wow" data-wow-delay="0.4s">
          votre besoin en un clic{" "}
        </h1>
        <p className="animated fadeIn wow" data-wow-delay="0.67s">
          avec l'application Kheddam, nous connectons les travailleurs avec leurs clients, facilement et sans délai{" "}
        </p>
        <Link
          className="btn btn-md download-btn-first wow fadeInLeft animated"
          data-wow-delay="0.85s"
          to="fh5co-download"
          smooth={true}
          duration={1000}
        >
          Télécharger
        </Link>
        <Link
          className="btn btn-md features-btn-first animated fadeInLeft wow"
          data-wow-delay="0.95s"
          to="fh5co-features"
          smooth={true}
          duration={1000}
        >
          Caractéristiques
        </Link>
        <img
          className="fh5co-hero-smartphone animated fadeInRight wow"
          data-wow-delay="1s"
          src="img/phone-image.png"
          alt="Smartphone"
        />
      </div>
    </div>
  );
};
