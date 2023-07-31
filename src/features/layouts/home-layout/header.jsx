import { useSelector } from "react-redux";
import { headerNavbar, navbarBrands } from "./data";
import { Link } from "react-router-dom";

const Header = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { bar_data } = headerNavbar.find(
    (bar) => bar.lan === currentLanguage.symbol
  );
  const { brands } = navbarBrands.find(
    (bar) => bar.lan === currentLanguage.symbol
  );

  return (
    <div className="header-part">
      <div className="header-nav">
        <div className="container">
          <div className="wrapper flexitem">
            <a href="#" className="trigger desktop-hide">
              <i className="ri-menu-2-line"></i>
            </a>
            <div className="left flexitem">
              <div className="logo">
                <a href="#">
                  <span className="circle"></span>.Store
                </a>
              </div>
              <nav className="mobile-hide">
                <ul className="flexitem second-links">
                  {bar_data.map((navbar, idx) => (
                    <li key={idx} className={navbar.sub_cat && "has-child"}>
                      <Link title={navbar.title} to={navbar.slug}>
                        {navbar.title}
                        {navbar.sub_cat && (
                          <div className="icon-small">
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        )}
                        {navbar.new && (
                          <div className="fly-item">
                            <span>New!</span>
                          </div>
                        )}
                      </Link>
                      {navbar.sub_cat && (
                        <div className="mega">
                          <div className="container">
                            <div className="wrapper">
                              {navbar.sub_cat.map((sub, idx2) => (
                                <div className="flexcol" key={idx2}>
                                  <div className="row">
                                    <h4>{sub.header}</h4>

                                    <ul>
                                      {sub.categories.map((cat, idx3) => (
                                        <li key={idx3}>
                                          <Link title={cat.title} to={cat.slug}>
                                            {cat.title}
                                            {cat.new && (
                                              <div className="fly-item">
                                                <span>New!</span>
                                              </div>
                                            )}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}

                              <div className="flexcol">
                                <div className="row">
                                  <h4>{brands.header}</h4>
                                  <ul className="women-brands">
                                    {brands.categories.map((cat, idx) => (
                                      <li key={idx}>
                                        <Link title={cat.title} to={cat.slug}>
                                          {cat.title}
                                          {cat.new && (
                                            <div className="fly-item">
                                              <span>New!</span>
                                            </div>
                                          )}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <Link
                                    to="/shop/all-brands"
                                    className="view-all"
                                  >
                                    View all brands{" "}
                                    <i className="ri-arrow-right-line"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="flexcol products">
                                <div className="row">
                                  <div className="media">
                                    <div className="thumbnail object-cover">
                                      <a href="#">
                                        <img
                                          src="./assets/products/apparel4.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="text-content">
                                    <h4>Most Wanted!</h4>
                                    <a href="#" className="primary-button">
                                      Order Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="right">
              <ul className="flexitem second-links">
                <li className="mobile-hide">
                  <a href="#">
                    <div className="icon-large ri-heart-line"></div>
                    <div className="fly-item">
                      <span className="item-number">0</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="iscart">
                    <div className="icon-large">
                      <i className="ri-shopping-cart-line"></i>
                      <div className="fly-item">
                        <span className="item-number">0</span>
                      </div>
                    </div>
                    <div className="icon-text">
                      <div className="mini-text">Total</div>
                      <div className="cart-total">$0.00</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
