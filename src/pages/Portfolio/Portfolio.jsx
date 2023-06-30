import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Portfolio = () => {
  return (
    <>
      <Header />
      {/* <!-- Start portfolio section --> */}
      <section
        className="portfolio__section portfolio__section--bg section--padding"
        id="portfolio"
      >
        <div className="container pt-5">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                PORTFOLIO
              </span>
              <h2 className="section__heading--title">
                Never compromise for portfolio quality
              </h2>
            </div>
            <div className="section__heading--right max-width-450">
              <p className="section__heading--desc">
                Promote your blog posts, case udie, and product ouncems with the
                the branded videoscustomers coming back for services Makes best
                effort.
              </p>
            </div>
          </div>
          <div className="portfolio__section--inner">
            <div className="button-group filters-button-group mb-50">
              <button
                className="filters__button--items button is-checked"
                data-filter="*"
              >
                Show All
              </button>
              <button
                className="filters__button--items button"
                data-filter=".web"
              >
                Web
              </button>
              <button
                className="filters__button--items button"
                data-filter=".graphics"
              >
                Graphics
              </button>
              <button
                className="filters__button--items button"
                data-filter=".development"
              >
                Development
              </button>
              <button
                className="filters__button--items button"
                data-filter=".mobile"
              >
                Mobile
              </button>
            </div>
            <div className="portfolio__grid mb--n30">
              <div className="element-item web" data-category="web">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio1.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item graphics" data-category="graphics">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio2.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="element-item development"
                data-category="development"
              >
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio3.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item mobile" data-category="mobile">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio4.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item web" data-category="web">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio5.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item graphics" data-category="graphics">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio6.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="element-item development"
                data-category="development"
              >
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio7.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item web" data-category="web">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio8.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="element-item mobile" data-category="mobile">
                <div className="portfolio__card">
                  <a
                    href="#"
                    className="popup-modal--open display-block"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <div className="portfolio__image--card">
                      <img src="assets/img/other/portfolio9.png" alt="img" />
                    </div>
                    <div className="portfolio__content">
                      <span className="portfolio__zoom text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-maximize"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </span>
                      <h3 className="portfolio__title text-white">
                        Illustration
                      </h3>
                      <p className="portfolio__desc text-white">
                        Promote your blog posts, case udie, and thehe branded
                        videos.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End portfolio section --> */}
      <Footer />
    </>
  );
};
export default Portfolio;
