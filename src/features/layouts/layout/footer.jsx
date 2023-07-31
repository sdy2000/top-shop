import { useSelector } from "react-redux";
import { footerDiffLanguage } from "./data";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentLanguage = useSelector((store) => store.language);

  return (
    <footer>
      <div className="widgets">
        <div className="container">
          <div className="wrapper">
            <div className="flexwrap">
              {footerDiffLanguage.map((cul, idx) => (
                <div className="row" key={idx}>
                  <div className="item mini-links">
                    <h4>
                      {
                        cul.header.find(
                          (hed) => hed.lan === currentLanguage.symbol
                        ).text
                      }
                    </h4>
                    <ul className="flexcol">
                      {cul.categories.map((cat, idx1) => {
                        let title = cat.title.find(
                          (tit) => tit.lan === currentLanguage.symbol
                        ).text;
                        return (
                          <li key={idx1}>
                            <Link to={cat.slug} title={title}>
                              {title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*// <!--   Widgets -->*/}

      <div className="footer-info">
        <div className="container">
          <div className="wrapper">
            <div className="flexcol">
              <div className="logo">
                <a href="">
                  <span className="circle"></span>.Store
                </a>
              </div>
              <div className="socials">
                <ul className="flexitem">
                  <li>
                    <a href="">
                      <i className="ri-twitter-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="ri-youtube-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mini-text">
              Copyright 2023 .Store. All right reserved.
            </p>
          </div>
        </div>
      </div>
      {/*// <!--   Footer Info -->*/}
    </footer>
  );
};
export default Footer;
