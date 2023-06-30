const Footer = () => {
  return (
    <footer className="footer footer__section footer__bg">
      <div className="container">
        <div className="main__footer d-flex justify-content-between align-items-center">
          <p className="copyright__content mb-0">
            Developed with{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="text-paragraph"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>{" "}
            by{" "}
            <span>
              <a className="text__secondary" href="#">
                Morex
              </a>
            </span>
            © 2023
          </p>
          <ul className="footer__menu d-flex">
            <li>
              <a className="footer__menu--link" href="shop.html">
                Terms & Condition
              </a>
            </li>
            <li>
              <a className="footer__menu--link" href="about.html">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
