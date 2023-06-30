/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      {/* <!-- Start about section --> */}
      <section
        className="about__section about__section--bg section--padding"
        id="about"
      >
        <div className="container ">
          <div className="about__section--inner d-flex pt-5">
            <div className="about__content">
              <div className="section__heading mb-30">
                <span className="section__heading--subtitle text__secondary">
                  ABOUT ME
                </span>
                <h2 className="section__heading--title">
                  I can design world for leading ui/ux
                </h2>
              </div>
              <div className="about__info">
                <h3 className="about__info--title text__secondary mb-20">
                  PERSONAL INFOS:
                </h3>
                <ul className="about__info--wrapper d-flex">
                  <li className="about__info--items">First Name: Maras</li>
                  <li className="about__info--items">Last Name: Faron</li>
                  <li className="about__info--items">Address: Dubai</li>
                  <li className="about__info--items">Phone: +28921184010</li>
                  <li className="about__info--items">Age: 24 Years</li>
                  <li className="about__info--items">Email: you@mail.com</li>
                  <li className="about__info--items">Nationality: Tunisian</li>
                  <li className="about__info--items">Skype: Roben.Boris</li>
                  <li className="about__info--items">Freelance: Available</li>
                  <li className="about__info--items">
                    Languages: French, English
                  </li>
                </ul>
                <a className="about__btn primary__btn" href="#">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="about__thumbnail">
              <div className="about__thumbnail--media position__relative">
                <img
                  className="position__relative"
                  src="assets/img/other/about.png"
                  alt="img"
                />
              </div>
              <div className="about__experience text-center">
                <h4 className="about__experience--title title-stroke">27+</h4>
                <span className="about__experience--subtitle">
                  Experience Working
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End about section --> */}
      {/* <!-- Start skills Section --> */}
      <section className="skills__section section--padding pt-5">
        <div className="container">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                SKILLs
              </span>
              <h2 className="section__heading--title">
                Skill of Best Masters Software Skills.
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
          <div className="skills__section--inner d-flex justify-content-between">
            <div className="skills__step">
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">Node.js</span>
                  <span className="skills__count width_60">60%</span>
                </div>
                <div className="skills__field width_60"></div>
              </div>
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">JavaScript</span>
                  <span className="skills__count width_75">75%</span>
                </div>
                <div className="skills__field width_75"></div>
              </div>
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">Web Design</span>
                  <span className="skills__count width_90">90%</span>
                </div>
                <div className="skills__field width_90"></div>
              </div>
            </div>
            <div className="skills__step">
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">HTML</span>
                  <span className="skills__count width_100">100%</span>
                </div>
                <div className="skills__field width_100"></div>
              </div>
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">CSS</span>
                  <span className="skills__count width_90">90%</span>
                </div>
                <div className="skills__field width_90"></div>
              </div>
              <div className="skills__items">
                <div className="skills__text">
                  <span className="skills__name">React.js</span>
                  <span className="skills__count width_70">70%</span>
                </div>
                <div className="skills__field width_70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End skills Section --> */}

      {/* <!-- Start resume section --> */}
      <section className="resume__section section--padding">
        <div className="container">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                EXPERICNCE AND EDUCATION
              </span>
              <h2 className="section__heading--title">
                Resume of Experience and Education
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
          <div className="resume__section--inner d-flex">
            <div className="resume__step">
              <div className="border__position--style"> </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="40"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">API DEVELOPER</h3>
                      <span className="resume__content--subtitle">Shopify</span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2021</span>
                  </div>
                </div>
              </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="40"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">WEB DEVELOPERR</h3>
                      <span className="resume__content--subtitle">ENVATO</span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2017</span>
                  </div>
                </div>
              </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="40"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">UI/UX DESIGNER</h3>
                      <span className="resume__content--subtitle">UDEMY</span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2014</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume__step">
              <div className="border__position--style"> </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="44"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">
                        Software Engineer
                      </h3>
                      <span className="resume__content--subtitle">
                        CAMBRIDGE UNIVERSITY
                      </span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2020</span>
                  </div>
                </div>
              </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="44"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">
                        Master's Degree
                      </h3>
                      <span className="resume__content--subtitle">
                        OXFORD UNIVERSITY
                      </span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2018</span>
                  </div>
                </div>
              </div>
              <div className="resume__items">
                <div className="border__round"></div>
                <div className="resume__items--inner d-flex">
                  <span className="resume__icons">
                    <svg
                      width="25"
                      height="44"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path>
                    </svg>
                  </span>
                  <div className="resume__content">
                    <div className="resume__content--top d-flex align-items-center mb-10">
                      <h3 className="resume__content--title">
                        Bachelor's Degree
                      </h3>
                      <span className="resume__content--subtitle">
                        KIEV UNIVERSITY
                      </span>
                    </div>
                    <p className="resume__content--desc mb-20">
                      Promote your blog posts, case udie, and product ouncems
                      nts with thehe branded videos.
                    </p>
                    <span className="resume__date">2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End resume section --> */}
      <Footer />
    </>
  );
};
export default About;
