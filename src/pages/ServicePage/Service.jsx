import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Service = () => {
  return (
    <>
      <Header />
      {/* <!-- Start sevices section --> */}
      <section className="services__section section--padding" id="servives">
        <div className="container pt-5">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                CREATIVE SERVICE
              </span>
              <h2 className="section__heading--title">
                What can i do for service clients you
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
          <div className="services__section--inner">
            <div className="row mb--n30">
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color1 mb-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      Web Development
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color1"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color2 mb-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-life-buoy"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      Creative Design
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color2"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color3 mb-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-globe"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      Project Consultancy
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color3"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color4 mb-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-headphones"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      24/7 Support
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color4"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color5 mb-25">
                    <svg
                      width="40"
                      height="40"
                      stroke="currentColor"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      Awesome Idea
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color5"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="services__card">
                  <span className="services__card--icon color6 mb-25">
                    <svg
                      width="40"
                      height="40"
                      stroke="currentColor"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"></path>
                    </svg>
                  </span>
                  <div className="services__card--content">
                    <h3 className="services__card--title mb-15">
                      Development Design
                    </h3>
                    <p className="services__card--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with the the branded videos.
                    </p>
                    <a
                      className="services__card--link color6"
                      href="services.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End sevices section --> */}
      <Footer />
    </>
  );
};
export default Service;
