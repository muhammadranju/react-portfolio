/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header__section  header__transparent">
        <div className="header__sticky ">
          <div className="container">
            <div className="main__header d-flex justify-content-between align-items-center">
              <div className="main__logo">
                <h1 className="main__logo--title">
                  <Link to={"/"} className="main__logo--link">
                    <img
                      className="main__logo--img logo_light"
                      src="assets/img/logo/nav-log.png"
                      alt="logo-img"
                    />
                    <img
                      className="main__logo--img logo_dark"
                      src="assets/img/logo/nav-log-white.png"
                      alt="logo-img"
                    />
                  </Link>
                </h1>
              </div>

              <div className="main__header--right d-flex align-items-center d-none d-lg-block">
                <div className="header__menu menu_border--none">
                  <nav className="header__menu--navigation">
                    <ul className="header__menu--wrapper d-flex">
                      <li className="header__menu--items">
                        <Link to={"/"} className="header__menu--link">
                          Home
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link to={"/about"} className="header__menu--link">
                          About
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link to={"/services"} className="header__menu--link">
                          Service
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link to={"/portfolio"} className="header__menu--link">
                          Portfolio
                        </Link>
                      </li>

                      <li className="header__menu--items">
                        <Link to={"/contact"} className="header__menu--link">
                          contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button className="primary__btn download__btn">
                  <svg
                    className="download__btn--svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Start Offcanvas header menu --> */}
      {/* <div className="offcanvas__header">
        <div className="offcanvas__inner">
          <div className="offcanvas__logo">
            <a className="offcanvas__logo_link" href="">
              <img
                src="assets/img/logo/nav-log.png"
                alt="Logo-img"
                width="158"
                height="36"
              />
            </a>
            <button className="offcanvas__close--btn" data-offcanvas>
              close
            </button>
          </div>
          <nav className="offcanvas__menu">
            <ul className="offcanvas__menu_ul">
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#home">
                  Home
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#about">
                  About
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#servives">
                  Services
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#blog">
                  Blog
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="offcanvas__download--btn">
              <button className="primary__btn download__btn">
                <svg
                  className="download__btn--svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </button>
            </div>
          </nav>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/portfolio"} className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Offcanvas header menu --> */}
    </>
  );
}

export default Header;
