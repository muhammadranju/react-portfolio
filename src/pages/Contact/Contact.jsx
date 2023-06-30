import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
  return (
    <>
      <Header />
      {/* <!-- Start contact section --> */}
      <section className="contact__section contact__section--bg" id="contact">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact__left">
                <div className="section__heading mb-50">
                  <span className="section__heading--subtitle text__secondary">
                    CONTACT
                  </span>
                  <h2 className="section__heading--title mb-10">
                    Get I contact work{" "}
                  </h2>
                  <p className="section__heading--desc">
                    Promote your blog posts, case udie, and product ouncems with
                    the the branded videoscustomers coming back for services
                    Makes best effort.
                  </p>
                </div>
                <form className="contact__form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input
                        className="contact__input--field"
                        placeholder="Your name"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input
                        className="contact__input--field"
                        placeholder="Your email"
                        type="text"
                      />
                    </div>
                  </div>
                  <textarea
                    className="contact__textarea--field"
                    placeholder="Message"
                  ></textarea>
                  <button className="contact__button primary__btn">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact__info">
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      width="25"
                      height="34"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Call Me</h3>
                    <p className="contact__info--desc">
                      <a href="tel:+880254615566">+880254615566</a> <br />
                      <a href="tel:+880254615566">+880254615566</a>
                    </p>
                  </div>
                </div>
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Email Us</h3>
                    <p className="contact__info--desc">
                      <a href="mailto:info@example.com">info@example.com</a>{" "}
                      <br />
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Address</h3>
                    <p className="contact__info--desc">
                      20, 25 Dhaka,0123 <br />
                      Ratrba baraj,20
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End contact section --> */}
      <Footer />
    </>
  );
};
export default Contact;
